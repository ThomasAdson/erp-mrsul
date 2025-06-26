use serde::{Deserialize, Serialize};
use tauri::command;
use rusqlite::{params, Connection, Result as SqliteResult};
use uuid::Uuid;
use chrono::Utc;
use crate::db::DB_CONN;

#[derive(Debug, Serialize, Deserialize)]
pub struct StockMovement {
    pub id: String,
    pub material_id: String,
    pub material_name: Option<String>,
    pub movement_type: String, // "entrada" ou "saida"
    pub quantity: f64,
    pub unit_cost: Option<f64>,
    pub total_cost: Option<f64>,
    pub reason: String,
    pub reference_document: Option<String>,
    pub voucher_file_path: Option<String>,
    pub responsible_user: String,
    pub supplier: Option<String>,
    pub supplier_name: Option<String>,
    pub storage_location: Option<String>,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug, Deserialize)]
pub struct CreateStockMovementRequest {
    pub material_id: String,
    pub movement_type: String, // "entrada" ou "saida"
    pub quantity: f64,
    pub unit_cost: Option<f64>,
    pub reason: String,
    pub reference_document: Option<String>,
    pub responsible_user: String,
    pub supplier: Option<String>,
    pub storage_location: Option<String>,
    pub voucher_file_data: Option<Vec<u8>>,
    pub voucher_file_name: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct GetStockMovementsRequest {
    pub material_id: Option<String>,
    pub movement_type: Option<String>,
    pub start_date: Option<String>,
    pub end_date: Option<String>,
    pub responsible_user: Option<String>,
    pub limit: Option<i64>,
    pub offset: Option<i64>,
}

#[derive(Debug, Deserialize)]
pub struct GetMaterialCurrentStockRequest {
    pub material_id: String,
}

pub fn init_stock_tables(conn: &Connection) -> SqliteResult<()> {
    // Criar a tabela stock_movements se não existir
    conn.execute(
        "CREATE TABLE IF NOT EXISTS stock_movements (
            id TEXT PRIMARY KEY,
            material_id TEXT NOT NULL,
            movement_type TEXT NOT NULL CHECK(movement_type IN ('entrada', 'saida')),
            quantity REAL NOT NULL CHECK(quantity > 0),
            unit_cost REAL,
            total_cost REAL,
            reason TEXT NOT NULL,
            reference_document TEXT,
            voucher_file_path TEXT,
            responsible_user TEXT NOT NULL,
            supplier TEXT,
            storage_location TEXT,
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            updated_at TEXT NOT NULL DEFAULT (datetime('now')),
            FOREIGN KEY (material_id) REFERENCES materiais (id)
        )",
        [],
    )?;

    // Criar índices para melhor performance
    conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_stock_movements_material_id ON stock_movements(material_id)",
        [],
    )?;
    
    conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_stock_movements_type ON stock_movements(movement_type)",
        [],
    )?;
    
    conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_stock_movements_created_at ON stock_movements(created_at)",
        [],
    )?;

    Ok(())
}#[command]
pub async fn create_stock_movement(
    request: CreateStockMovementRequest,
) -> Result<StockMovement, String> {    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;
      // Validar se o material existe
    let mut stmt = conn.prepare("SELECT COUNT(*) FROM materiais WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare material validation query: {}", e))?;
    
    let material_exists: i64 = stmt.query_row(params![request.material_id], |row| row.get(0))
        .map_err(|e| format!("Failed to validate material existence: {}", e))?;
    
    if material_exists == 0 {
        return Err("Material não encontrado".to_string());
    }

    // Para saídas, verificar se há estoque suficiente
    if request.movement_type == "saida" {
        let current_stock = get_current_stock_internal(&conn, &request.material_id)?;
        if current_stock < request.quantity {
            return Err(format!("Estoque insuficiente. Disponível: {}, Solicitado: {}", 
                             current_stock, request.quantity));
        }
    }

    let movement_id = Uuid::new_v4().to_string();
    let now = Utc::now().to_rfc3339();
    
    // Calcular custo total se o custo unitário foi fornecido
    let total_cost = request.unit_cost.map(|cost| cost * request.quantity);
    
    // Salvar arquivo de comprovante se fornecido
    let voucher_file_path = if let (Some(file_data), Some(file_name)) = 
        (&request.voucher_file_data, &request.voucher_file_name) {
        save_voucher_file(&movement_id, file_data, file_name)?
    } else {
        None
    };    // Inserir movimentação diretamente (sem transação explícita)
    conn.execute(
        "INSERT INTO stock_movements (
            id, material_id, movement_type, quantity, unit_cost, total_cost,
            reason, reference_document, voucher_file_path, responsible_user,
            supplier, storage_location, created_at, updated_at
        ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14)",
        params![
            movement_id,
            request.material_id,
            request.movement_type,
            request.quantity,
            request.unit_cost,
            total_cost,
            request.reason,
            request.reference_document,
            voucher_file_path,
            request.responsible_user,
            request.supplier,
            request.storage_location,
            now.clone(),
            now.clone()
        ],
    ).map_err(|e| format!("Failed to insert stock movement: {}", e))?;

    // Atualizar estoque atual na tabela materiais
    let stock_change = if request.movement_type == "entrada" {
        request.quantity  // Somar para entrada
    } else {
        -request.quantity  // Subtrair para saída
    };

    conn.execute(
        "UPDATE materiais SET estoque_atual = COALESCE(estoque_atual, 0) + ?1 WHERE id = ?2",
        params![stock_change, request.material_id],
    ).map_err(|e| format!("Failed to update material stock: {}", e))?;    // Buscar o nome do material para o retorno
    let material_name = get_material_name_internal(&conn, &request.material_id)?;

    // Buscar o nome do fornecedor se foi informado
    let supplier_name = if let Some(ref supplier_id) = request.supplier {
        get_supplier_name_internal(&conn, supplier_id).ok()
    } else {
        None
    };

    Ok(StockMovement {
        id: movement_id,
        material_id: request.material_id,
        material_name: Some(material_name),
        movement_type: request.movement_type,
        quantity: request.quantity,
        unit_cost: request.unit_cost,
        total_cost,
        reason: request.reason,
        reference_document: request.reference_document,
        voucher_file_path,
        responsible_user: request.responsible_user,
        supplier: request.supplier,
        supplier_name,
        storage_location: request.storage_location,
        created_at: now.clone(),
        updated_at: now,
    })
}

#[command]
pub async fn get_stock_movements(
    request: GetStockMovementsRequest,
) -> Result<Vec<StockMovement>, String> {
    let conn = DB_CONN.lock().map_err(|e| {
        format!("Database lock error: {}", e)
    })?;    let mut query = "SELECT 
        sm.id, sm.material_id, sm.movement_type, sm.quantity, sm.unit_cost, sm.total_cost,
        sm.reason, sm.reference_document, sm.voucher_file_path, sm.responsible_user,
        sm.supplier, sm.storage_location, sm.created_at, sm.updated_at, 
        m.descricao_completa as material_name, f.nome_fantasia as supplier_name
        FROM stock_movements sm
        LEFT JOIN materiais m ON sm.material_id = m.id
        LEFT JOIN fornecedores f ON sm.supplier = f.id
        WHERE 1=1".to_string();
    
    let mut params: Vec<Box<dyn rusqlite::ToSql>> = Vec::new();
    let mut param_count = 0;

    // Adicionar filtros
    if let Some(material_id) = &request.material_id {
        param_count += 1;
        query.push_str(&format!(" AND sm.material_id = ?{}", param_count));
        params.push(Box::new(material_id.clone()));
        println!("📋 Added material_id filter: {}", material_id);
    }

    if let Some(movement_type) = &request.movement_type {
        param_count += 1;
        query.push_str(&format!(" AND sm.movement_type = ?{}", param_count));
        params.push(Box::new(movement_type.clone()));
        println!("📋 Added movement_type filter: {}", movement_type);
    }

    if let Some(start_date) = &request.start_date {
        param_count += 1;
        query.push_str(&format!(" AND DATE(sm.created_at) >= DATE(?{})", param_count));
        params.push(Box::new(start_date.clone()));
        println!("📋 Added start_date filter: {}", start_date);
    }

    if let Some(end_date) = &request.end_date {
        param_count += 1;
        query.push_str(&format!(" AND DATE(sm.created_at) <= DATE(?{})", param_count));
        params.push(Box::new(end_date.clone()));
        println!("📋 Added end_date filter: {}", end_date);
    }

    if let Some(responsible_user) = &request.responsible_user {
        param_count += 1;
        query.push_str(&format!(" AND sm.responsible_user LIKE ?{}", param_count));
        params.push(Box::new(format!("%{}%", responsible_user)));
        println!("📋 Added responsible_user filter: {}", responsible_user);
    }

    // Ordenar por data de criação (mais recente primeiro)
    query.push_str(" ORDER BY sm.created_at DESC");

    // Aplicar limite e offset
    let limit = request.limit.unwrap_or(100);
    let offset = request.offset.unwrap_or(0);
    query.push_str(&format!(" LIMIT {} OFFSET {}", limit, offset));
    
    println!("🔍 Final query: {}", query);
    println!("📊 Total params: {}", params.len());

    let mut stmt = conn.prepare(&query)
        .map_err(|e| {
            println!("❌ Failed to prepare query: {}", e);
            format!("Failed to prepare query: {}", e)
        })?;

    let param_refs: Vec<&dyn rusqlite::ToSql> = params.iter().map(|p| p.as_ref()).collect();
      let movements = stmt.query_map(&param_refs[..], |row| {
        Ok(StockMovement {
            id: row.get("id")?,
            material_id: row.get("material_id")?,
            material_name: row.get("material_name")?,            movement_type: row.get("movement_type")?,
            quantity: row.get("quantity")?,
            unit_cost: row.get("unit_cost")?,
            total_cost: row.get("total_cost")?,
            reason: row.get("reason")?,
            reference_document: row.get("reference_document")?,
            voucher_file_path: row.get("voucher_file_path")?,
            responsible_user: row.get("responsible_user")?,
            supplier: row.get("supplier")?,
            supplier_name: row.get("supplier_name")?,
            storage_location: row.get("storage_location")?,
            created_at: row.get("created_at")?,
            updated_at: row.get("updated_at")?,
        })
    }).map_err(|e| {
        println!("❌ Failed to execute query: {}", e);
        format!("Failed to execute query: {}", e)
    })?;

    let movements: Result<Vec<_>, _> = movements.collect();
    let result = movements.map_err(|e| {
        println!("❌ Failed to collect movements: {}", e);
        format!("Failed to collect movements: {}", e)
    })?;
    
    println!("✅ Found {} movements", result.len());
    for movement in &result {
        println!("📦 Movement: {} - {} {} units of {}", 
            movement.id, movement.movement_type, movement.quantity, 
            movement.material_name.as_ref().unwrap_or(&"Unknown".to_string()));
    }
    
    Ok(result)
}

#[command]
pub async fn get_material_current_stock(
    request: GetMaterialCurrentStockRequest,
) -> Result<f64, String> {
    println!("🔄 [BACKEND] Getting current stock for material {}", request.material_id);
    
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;
    get_current_stock_internal(&conn, &request.material_id)
}

// Funções auxiliares internas
fn get_current_stock_internal(conn: &Connection, material_id: &str) -> Result<f64, String> {
    let mut stmt = conn.prepare(
        "SELECT COALESCE(estoque_atual, 0) as current_stock
         FROM materiais 
         WHERE id = ?1"
    ).map_err(|e| format!("Failed to prepare stock query: {}", e))?;

    let current_stock: f64 = stmt.query_row(params![material_id], |row| row.get("current_stock"))
        .map_err(|e| format!("Failed to get current stock: {}", e))?;

    Ok(current_stock)
}

fn get_material_name_internal(conn: &Connection, material_id: &str) -> Result<String, String> {
    let mut stmt = conn.prepare("SELECT descricao_completa FROM materiais WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare material name query: {}", e))?;

    let material_name: String = stmt.query_row(params![material_id], |row| row.get(0))
        .map_err(|e| format!("Failed to get material name: {}", e))?;

    Ok(material_name)
}

fn get_supplier_name_internal(conn: &Connection, supplier_id: &str) -> Result<String, String> {
    let mut stmt = conn.prepare("SELECT nome_fantasia FROM fornecedores WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare supplier name query: {}", e))?;

    let supplier_name: String = stmt.query_row(params![supplier_id], |row| row.get(0))
        .map_err(|e| format!("Failed to get supplier name: {}", e))?;

    Ok(supplier_name)
}

fn save_voucher_file(movement_id: &str, file_data: &[u8], file_name: &str) -> Result<Option<String>, String> {
    use std::fs;
    use std::path::Path;

    // Criar diretório para comprovantes se não existir
    let vouchers_dir = Path::new("vouchers");
    if !vouchers_dir.exists() {
        fs::create_dir_all(vouchers_dir)
            .map_err(|e| format!("Failed to create vouchers directory: {}", e))?;
    }

    // Gerar nome único para o arquivo
    let file_extension = Path::new(file_name)
        .extension()
        .and_then(|ext| ext.to_str())
        .unwrap_or("bin");
    
    let unique_filename = format!("{}_{}.{}", movement_id, 
                                 Uuid::new_v4().to_string()[..8].to_string(), 
                                 file_extension);
    let file_path = vouchers_dir.join(&unique_filename);

    // Salvar arquivo
    fs::write(&file_path, file_data)
        .map_err(|e| format!("Failed to save voucher file: {}", e))?;    Ok(Some(file_path.to_string_lossy().to_string()))
}

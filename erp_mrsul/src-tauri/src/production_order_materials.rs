use serde::{Deserialize, Serialize};
use tauri::command;
use rusqlite::{params, Connection, Result as SqliteResult};
use uuid::Uuid;
use chrono::Utc;
use crate::db::DB_CONN;

#[derive(Debug, Serialize, Deserialize)]
pub struct ProductionOrderMaterial {
    pub id: String,
    pub production_order_id: String,
    pub material_id: String,
    pub material_name: Option<String>,
    pub material_code: Option<String>,
    pub material_unit: Option<String>,    pub quantity_required: f64,
    pub current_stock: Option<f64>,
    pub consumed: bool,
    pub created_at: String,
    pub updated_at: String,
}

pub fn init_production_order_materials_table(conn: &Connection) -> SqliteResult<()> {
    conn.execute(        "CREATE TABLE IF NOT EXISTS production_order_materials (
            id TEXT PRIMARY KEY,
            production_order_id TEXT NOT NULL,
            material_id TEXT NOT NULL,
            quantity_required REAL NOT NULL CHECK(quantity_required > 0),
            consumed BOOLEAN DEFAULT FALSE,
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            updated_at TEXT NOT NULL DEFAULT (datetime('now')),
            FOREIGN KEY (production_order_id) REFERENCES production_orders (id) ON DELETE CASCADE,
            FOREIGN KEY (material_id) REFERENCES materiais (id)
        )",
        [],
    )?;

    // Criar índices
    conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_production_order_materials_po_id ON production_order_materials(production_order_id)",
        [],
    )?;
    
    conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_production_order_materials_material_id ON production_order_materials(material_id)",
        [],
    )?;

    Ok(())
}

#[command]
pub fn add_material_to_production_order(production_order_id: String, material_id: String, quantity_required: f64) -> Result<ProductionOrderMaterial, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    // Verificar se a OP existe
    let mut po_stmt = conn.prepare("SELECT COUNT(*) FROM production_orders WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare PO validation query: {}", e))?;
    
    let po_exists: i64 = po_stmt.query_row(params![production_order_id], |row| row.get(0))
        .map_err(|e| format!("Failed to validate PO existence: {}", e))?;
    
    if po_exists == 0 {
        return Err("Ordem de produção não encontrada".to_string());
    }

    // Verificar se o material existe
    let mut material_stmt = conn.prepare("SELECT COUNT(*) FROM materiais WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare material validation query: {}", e))?;
    
    let material_exists: i64 = material_stmt.query_row(params![material_id], |row| row.get(0))
        .map_err(|e| format!("Failed to validate material existence: {}", e))?;
    
    if material_exists == 0 {
        return Err("Material não encontrado".to_string());
    }

    // Verificar se o material já está na OP
    let mut existing_stmt = conn.prepare(
        "SELECT COUNT(*) FROM production_order_materials 
         WHERE production_order_id = ?1 AND material_id = ?2"
    ).map_err(|e| format!("Failed to prepare existing material check: {}", e))?;
    
    let already_exists: i64 = existing_stmt.query_row(
        params![production_order_id, material_id], 
        |row| row.get(0)
    ).map_err(|e| format!("Failed to check existing material: {}", e))?;
    
    if already_exists > 0 {
        return Err("Material já está na lista desta OP".to_string());
    }    let new_id = Uuid::new_v4().to_string();
    let now = Utc::now().to_rfc3339();

    // Inserir material na OP
    conn.execute(
        "INSERT INTO production_order_materials (
            id, production_order_id, material_id, quantity_required, 
            consumed, created_at, updated_at
        ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)",        params![
            new_id,
            production_order_id,
            material_id,
            quantity_required,
            false,
            now.clone(),
            now.clone()
        ],
    ).map_err(|e| format!("Failed to insert production order material: {}", e))?;// Buscar dados completos do material adicionado
    get_production_order_material_by_id(new_id)
}

#[command]
pub fn get_production_order_materials(production_order_id: String) -> Result<Vec<ProductionOrderMaterial>, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    let mut stmt = conn.prepare(
        "SELECT 
            pom.id, pom.production_order_id, pom.material_id, pom.quantity_required,
            pom.consumed, pom.created_at, pom.updated_at,
            m.descricao_completa as material_name,
            m.codigo_material_completo as material_code,
            m.unidade_medida as material_unit,
            m.estoque_atual as current_stock
         FROM production_order_materials pom
         LEFT JOIN materiais m ON pom.material_id = m.id
         WHERE pom.production_order_id = ?1
         ORDER BY pom.created_at"
    ).map_err(|e| format!("Failed to prepare query: {}", e))?;    let materials = stmt.query_map(params![production_order_id], |row| {
        Ok(ProductionOrderMaterial {
            id: row.get("id")?,
            production_order_id: row.get("production_order_id")?,
            material_id: row.get("material_id")?,
            material_name: row.get("material_name")?,
            material_code: row.get("material_code")?,
            material_unit: row.get("material_unit")?,
            quantity_required: row.get("quantity_required")?,
            current_stock: row.get("current_stock")?,
            consumed: row.get("consumed")?,
            created_at: row.get("created_at")?,
            updated_at: row.get("updated_at")?,
        })
    }).map_err(|e| format!("Failed to execute query: {}", e))?;

    let result: Result<Vec<_>, _> = materials.collect();
    result.map_err(|e| format!("Failed to collect materials: {}", e))
}

#[command]
pub fn get_production_order_material_by_id(id: String) -> Result<ProductionOrderMaterial, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;    let mut stmt = conn.prepare(
        "SELECT 
            pom.id, pom.production_order_id, pom.material_id, pom.quantity_required,
            pom.consumed, pom.created_at, pom.updated_at,
            m.descricao_completa as material_name,
            m.codigo_material_completo as material_code,
            m.unidade_medida as material_unit,
            m.estoque_atual as current_stock
         FROM production_order_materials pom
         LEFT JOIN materiais m ON pom.material_id = m.id
         WHERE pom.id = ?1"
    ).map_err(|e| format!("Failed to prepare query: {}", e))?;

    let material = stmt.query_row(params![id], |row| {
        Ok(ProductionOrderMaterial {
            id: row.get("id")?,
            production_order_id: row.get("production_order_id")?,
            material_id: row.get("material_id")?,
            material_name: row.get("material_name")?,
            material_code: row.get("material_code")?,
            material_unit: row.get("material_unit")?,
            quantity_required: row.get("quantity_required")?,
            current_stock: row.get("current_stock")?,
            consumed: row.get("consumed")?,            created_at: row.get("created_at")?,
            updated_at: row.get("updated_at")?,
        })
    }).map_err(|e| format!("Production order material not found: {}", e))?;

    Ok(material)
}

#[command]
pub fn update_production_order_material(id: String, quantity_required: Option<f64>, consumed: Option<bool>) -> Result<ProductionOrderMaterial, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    // Verificar se o material da OP existe
    let mut check_stmt = conn.prepare("SELECT COUNT(*) FROM production_order_materials WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare existence check: {}", e))?;
    
    let exists: i64 = check_stmt.query_row(params![id], |row| row.get(0))
        .map_err(|e| format!("Failed to check material existence: {}", e))?;
    
    if exists == 0 {
        return Err("Material da OP não encontrado".to_string());
    }    let now = Utc::now().to_rfc3339();

    // Construir query de update dinamicamente
    let mut query = "UPDATE production_order_materials SET updated_at = ?1".to_string();
    let mut params: Vec<Box<dyn rusqlite::ToSql + Send>> = vec![Box::new(now.clone())];
    let mut param_count = 1;

    if let Some(qty) = quantity_required {
        param_count += 1;
        query.push_str(&format!(", quantity_required = ?{}", param_count));
        params.push(Box::new(qty));
    }

    if let Some(cons) = consumed {
        param_count += 1;
        query.push_str(&format!(", consumed = ?{}", param_count));
        params.push(Box::new(cons));
    }

    param_count += 1;
    query.push_str(&format!(" WHERE id = ?{}", param_count));
    params.push(Box::new(id.clone()));

    let param_refs: Vec<&dyn rusqlite::ToSql> = params.iter().map(|p| -> &dyn rusqlite::ToSql { p.as_ref() }).collect();
    
    conn.execute(&query, &param_refs[..])
        .map_err(|e| format!("Failed to update production order material: {}", e))?;

    // Retornar o material atualizado
    get_production_order_material_by_id(id)
}

#[command]
pub fn remove_material_from_production_order(id: String) -> Result<(), String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    // Verificar se o material da OP existe
    let mut check_stmt = conn.prepare("SELECT COUNT(*) FROM production_order_materials WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare existence check: {}", e))?;
      let exists: i64 = check_stmt.query_row(params![id], |row| row.get(0))
        .map_err(|e| format!("Failed to check material existence: {}", e))?;
    
    if exists == 0 {
        return Err("Material da OP não encontrado".to_string());
    }

    conn.execute("DELETE FROM production_order_materials WHERE id = ?1", params![id])
        .map_err(|e| format!("Failed to delete production order material: {}", e))?;

    Ok(())
}

#[command]
pub fn check_materials_stock_availability(production_order_id: String) -> Result<Vec<(String, f64, f64, bool)>, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    let mut stmt = conn.prepare(
        "SELECT 
            m.descricao_completa as material_name,
            pom.quantity_required,
            COALESCE(m.estoque_atual, 0) as current_stock,
            CASE WHEN COALESCE(m.estoque_atual, 0) >= pom.quantity_required THEN 1 ELSE 0 END as has_enough_stock
         FROM production_order_materials pom
         LEFT JOIN materiais m ON pom.material_id = m.id
         WHERE pom.production_order_id = ?1"
    ).map_err(|e| format!("Failed to prepare query: {}", e))?;

    let results = stmt.query_map(params![production_order_id], |row| {
        Ok((
            row.get::<_, String>("material_name")?,
            row.get::<_, f64>("quantity_required")?,
            row.get::<_, f64>("current_stock")?,
            row.get::<_, i32>("has_enough_stock")? == 1,
        ))
    }).map_err(|e| format!("Failed to execute query: {}", e))?;

    let result: Result<Vec<_>, _> = results.collect();
    result.map_err(|e| format!("Failed to collect stock availability: {}", e))
}

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod db;
use db::init_db;
use chrono::Utc;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

mod fornecedores;
use fornecedores::{
    create_fornecedor, get_all_fornecedores, get_fornecedor_by_id, 
    update_fornecedor, delete_fornecedor
};
mod purchase_orders;
use purchase_orders::{
    create_purchase_order, get_all_purchase_orders, get_purchase_order_by_id,
    get_purchase_order_details, update_purchase_order_status,
    receive_purchase_order_items,
    update_purchase_order_voucher, view_purchase_order_voucher, download_purchase_order_voucher,
    save_purchase_order_voucher
};
mod production_order_materials;
use production_order_materials::{
    add_material_to_production_order, get_production_order_materials, 
    update_production_order_material, remove_material_from_production_order
};
mod material_class;
use material_class::MaterialClass;
mod production_order;
use production_order::{
    ProductionOrder, CreateProductionOrderRequest, UpdateProductionOrderRequest, ProductionOrderWithDetails, 
    generate_op_code, ProductionOrderFile,
    save_production_order_file, get_production_order_files, delete_production_order_file, get_file_data
};
mod equipment_specification;
use equipment_specification::{EquipmentSpecification, SaveSpecificationsRequest, get_equipment_specifications, save_equipment_specifications, delete_equipment_specification};
use rusqlite::params;
use uuid::Uuid;

#[tauri::command]
fn create_material_class(code: String, name: String) -> Result<MaterialClass, String> {
    use chrono::Utc;
    let id = Uuid::new_v4().to_string();
    let now = Utc::now().to_rfc3339();
    let new_class = MaterialClass {
        id: id.clone(),
        code: code.clone(),
        name: name.clone(),
        created_at: now.clone(),
        updated_at: now.clone(),
    };
    let conn = db::DB_CONN.lock().unwrap();
    conn.execute(
        "INSERT INTO material_class (id, code, name, created_at, updated_at) VALUES (?1, ?2, ?3, ?4, ?5)",
        params![id, code, name, now, now],
    ).map_err(|e| e.to_string())?;
    Ok(new_class)
}

#[tauri::command]
fn list_material_classes() -> Result<Vec<MaterialClass>, String> {
    let conn = db::DB_CONN.lock().unwrap();
    let mut stmt = conn.prepare("SELECT id, code, name, created_at, updated_at FROM material_class").map_err(|e| e.to_string())?;
    let rows = stmt.query_map([], |row| {
        Ok(MaterialClass {
            id: row.get(0)?,
            code: row.get(1)?,
            name: row.get(2)?,
            created_at: row.get(3)?,
            updated_at: row.get(4)?,
        })
    }).map_err(|e| e.to_string())?;
    let mut result = Vec::new();
    for row in rows {
        result.push(row.map_err(|e| e.to_string())?);
    }
    Ok(result)
}

#[tauri::command]
fn update_material_class(id: String, code: String, name: String) -> Result<MaterialClass, String> {
    use chrono::Utc;
    let now = Utc::now().to_rfc3339();
    let conn = db::DB_CONN.lock().unwrap();
    let updated = conn.execute(
        "UPDATE material_class SET code = ?1, name = ?2, updated_at = ?3 WHERE id = ?4",
        params![code, name, now, id],
    ).map_err(|e| e.to_string())?;
    if updated == 0 {
        return Err("Material class not found".to_string());
    }
    let mut stmt = conn.prepare("SELECT id, code, name, created_at, updated_at FROM material_class WHERE id = ?1").map_err(|e| e.to_string())?;
    let mut rows = stmt.query_map(params![id], |row| {
        Ok(MaterialClass {
            id: row.get(0)?,
            code: row.get(1)?,
            name: row.get(2)?,
            created_at: row.get(3)?,
            updated_at: row.get(4)?,
        })
    }).map_err(|e| e.to_string())?;
    if let Some(row) = rows.next() {
        return row.map_err(|e| e.to_string());
    }
    Err("Material class not found after update".to_string())
}

mod categoria;
mod material;
mod client;
mod project;
mod equipment;
mod stock_management;

use categoria::Categoria;
use material::Material;
use client::{Client, CreateClientRequest, UpdateClientRequest, create_client as client_create, get_all_clients, update_client as client_update, delete_client as client_delete};
use project::{Project, CreateProjectRequest, UpdateProjectRequest, create_project as project_create, get_all_projects, update_project as project_update, delete_project as project_delete};
use equipment::{Equipment, CreateEquipmentRequest, UpdateEquipmentRequest, create_equipment as equipment_create, get_all_equipment, get_equipment_by_id, update_equipment as equipment_update, delete_equipment as equipment_delete, migrate_equipment_table};
use stock_management::{
    create_stock_movement, get_stock_movements, get_material_current_stock
};

#[tauri::command]
fn create_client(client: CreateClientRequest) -> Result<Client, String> {
    let conn = db::DB_CONN.lock().unwrap();
    client_create(&conn, client).map_err(|e| e.to_string())
}

#[tauri::command]
fn list_clients() -> Result<Vec<Client>, String> {
    let conn = db::DB_CONN.lock().unwrap();
    get_all_clients(&conn).map_err(|e| e.to_string())
}

#[tauri::command]
fn update_client(id: String, client: UpdateClientRequest) -> Result<(), String> {
    let conn = db::DB_CONN.lock().unwrap();
    client_update(&conn, id, client).map_err(|e| e.to_string())
}

#[tauri::command]
fn delete_client(id: String) -> Result<(), String> {
    let conn = db::DB_CONN.lock().unwrap();
    client_delete(&conn, id).map_err(|e| e.to_string())
}

#[tauri::command]
fn create_project(project: CreateProjectRequest) -> Result<Project, String> {
    let conn = db::DB_CONN.lock().unwrap();
    project_create(&conn, project).map_err(|e| e.to_string())
}

#[tauri::command]
fn list_projects() -> Result<Vec<Project>, String> {
    let conn = db::DB_CONN.lock().unwrap();
    get_all_projects(&conn).map_err(|e| e.to_string())
}

#[tauri::command]
fn update_project(id: String, project: UpdateProjectRequest) -> Result<(), String> {
    let conn = db::DB_CONN.lock().unwrap();
    project_update(&conn, id, project).map_err(|e| e.to_string())
}

#[tauri::command]
fn delete_project(id: String) -> Result<(), String> {
    let conn = db::DB_CONN.lock().unwrap();
    project_delete(&conn, id).map_err(|e| e.to_string())
}

#[tauri::command]
fn create_equipment(equipment: CreateEquipmentRequest) -> Result<Equipment, String> {
    let conn = db::DB_CONN.lock().unwrap();
    equipment_create(&conn, equipment).map_err(|e| e.to_string())
}

#[tauri::command]
fn list_equipment() -> Result<Vec<Equipment>, String> {
    let conn = db::DB_CONN.lock().unwrap();
    get_all_equipment(&conn).map_err(|e| e.to_string())
}

#[tauri::command]
fn get_equipment(id: String) -> Result<Equipment, String> {
    let conn = db::DB_CONN.lock().unwrap();
    get_equipment_by_id(&conn, id).map_err(|e| e.to_string())
}

#[tauri::command]
fn update_equipment(id: String, equipment: UpdateEquipmentRequest) -> Result<(), String> {
    let conn = db::DB_CONN.lock().unwrap();
    equipment_update(&conn, id, equipment).map_err(|e| e.to_string())
}

#[tauri::command]
fn delete_equipment(id: String) -> Result<(), String> {
    let conn = db::DB_CONN.lock().unwrap();
    equipment_delete(&conn, id).map_err(|e| e.to_string())
}

#[tauri::command]
fn migrate_equipment_database() -> Result<(), String> {
    let conn = db::DB_CONN.lock().unwrap();
    migrate_equipment_table(&conn).map_err(|e| e.to_string())
}

#[tauri::command]
fn create_categoria(material_class_id: String, codigo_categoria: String, nome_categoria: String) -> Result<Categoria, String> {
    use chrono::Utc;
    let id = uuid::Uuid::new_v4().to_string();
    let now = Utc::now().to_rfc3339();
    let new_categoria = Categoria {
        id: id.clone(),
        material_class_id: material_class_id.clone(),
        codigo_categoria: codigo_categoria.clone(),
        nome_categoria: nome_categoria.clone(),
        created_at: now.clone(),
    };
    let conn = db::DB_CONN.lock().unwrap();
    conn.execute(
        "INSERT INTO categorias (id, material_class_id, codigo_categoria, nome_categoria, created_at) VALUES (?1, ?2, ?3, ?4, ?5)",
        rusqlite::params![id, material_class_id, codigo_categoria, nome_categoria, now],
    ).map_err(|e| e.to_string())?;
    Ok(new_categoria)
}

#[tauri::command]
fn list_categorias() -> Result<Vec<Categoria>, String> {
    let conn = db::DB_CONN.lock().unwrap();
    let mut stmt = conn.prepare("SELECT id, material_class_id, codigo_categoria, nome_categoria, created_at FROM categorias").map_err(|e| e.to_string())?;
    let rows = stmt.query_map([], |row| {
        Ok(Categoria {
            id: row.get(0)?,
            material_class_id: row.get(1)?,
            codigo_categoria: row.get(2)?,
            nome_categoria: row.get(3)?,
            created_at: row.get(4)?,
        })
    }).map_err(|e| e.to_string())?;
    let mut result = Vec::new();
    for row in rows {
        result.push(row.map_err(|e| e.to_string())?);
    }
    Ok(result)
}

#[tauri::command]
fn update_categoria(id: String, material_class_id: String, codigo_categoria: String, nome_categoria: String) -> Result<Categoria, String> {
    let conn = db::DB_CONN.lock().unwrap();
    conn.execute(
        "UPDATE categorias SET material_class_id = ?1, codigo_categoria = ?2, nome_categoria = ?3 WHERE id = ?4",
        rusqlite::params![material_class_id, codigo_categoria, nome_categoria, id],
    ).map_err(|e| e.to_string())?;
    let mut stmt = conn.prepare("SELECT id, material_class_id, codigo_categoria, nome_categoria, created_at FROM categorias WHERE id = ?1").map_err(|e| e.to_string())?;
    let mut rows = stmt.query_map(rusqlite::params![id], |row| {
        Ok(Categoria {
            id: row.get(0)?,
            material_class_id: row.get(1)?,
            codigo_categoria: row.get(2)?,
            nome_categoria: row.get(3)?,
            created_at: row.get(4)?,
        })
    }).map_err(|e| e.to_string())?;
    if let Some(row) = rows.next() {
        return row.map_err(|e| e.to_string());
    }
    Err("Categoria not found after update".to_string())
}

#[tauri::command]
fn delete_categoria(id: String) -> Result<bool, String> {
    let conn = db::DB_CONN.lock().unwrap();
    let deleted = conn.execute("DELETE FROM categorias WHERE id = ?1", rusqlite::params![id]).map_err(|e| e.to_string())?;
    Ok(deleted > 0)
}

#[tauri::command]
fn create_material(
    categoria_id: String,
    codigo_especificacao: String,
    descricao_especificacao: String,
    material_composicao: String,
    unidade_medida: String,
    codigo_material_completo: String,
    descricao_completa: String,
    observacoes: Option<String>,
    created_at: String,
    estoque_atual: f64,
    estoque_minimo: Option<f64>,
    // Novos campos de custos
    custo_padrao_por_unidade_compra: Option<f64>,
    unidade_compra_padrao: Option<String>,
    peso_linear_kg_m: Option<f64>,
    peso_superficial_kg_m2: Option<f64>,
) -> Result<Material, String> {
    let id = uuid::Uuid::new_v4().to_string();
    
    // Calcular custo por unidade de estoque
    let custo_por_unidade_estoque = calculate_cost_per_stock_unit(
        &unidade_medida,
        &unidade_compra_padrao,
        custo_padrao_por_unidade_compra,
        peso_linear_kg_m,
        peso_superficial_kg_m2,
    );
    
    let ultima_atualizacao_custo_padrao = if custo_padrao_por_unidade_compra.is_some() {
        Some(chrono::Utc::now().to_rfc3339())
    } else {
        None
    };
    
    let new_material = Material {
        id: id.clone(),
        categoria_id: categoria_id.clone(),
        codigo_especificacao: codigo_especificacao.clone(),
        descricao_especificacao: descricao_especificacao.clone(),
        material_composicao: material_composicao.clone(),
        unidade_medida: unidade_medida.clone(),
        codigo_material_completo: codigo_material_completo.clone(),
        descricao_completa: descricao_completa.clone(),
        observacoes: observacoes.clone(),
        created_at: created_at.clone(),
        estoque_atual,
        estoque_minimo,
        custo_padrao_por_unidade_compra,
        unidade_compra_padrao: unidade_compra_padrao.clone(),
        ultima_atualizacao_custo_padrao: ultima_atualizacao_custo_padrao.clone(),
        peso_linear_kg_m,
        peso_superficial_kg_m2,
        custo_por_unidade_estoque,
    };
    
    let conn = db::DB_CONN.lock().unwrap();
    conn.execute(
        "INSERT INTO materiais (
            id, categoria_id, codigo_especificacao, descricao_especificacao, 
            material_composicao, unidade_medida, codigo_material_completo, 
            descricao_completa, observacoes, created_at, estoque_atual, estoque_minimo,
            custo_padrao_por_unidade_compra, unidade_compra_padrao, 
            ultima_atualizacao_custo_padrao, peso_linear_kg_m, 
            peso_superficial_kg_m2, custo_por_unidade_estoque
        ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?16, ?17, ?18)",
        rusqlite::params![
            id, categoria_id, codigo_especificacao, descricao_especificacao, 
            material_composicao, unidade_medida, codigo_material_completo, 
            descricao_completa, observacoes, created_at, estoque_atual, estoque_minimo,
            custo_padrao_por_unidade_compra, unidade_compra_padrao, 
            ultima_atualizacao_custo_padrao, peso_linear_kg_m, 
            peso_superficial_kg_m2, custo_por_unidade_estoque
        ],
    ).map_err(|e| e.to_string())?;
    
    Ok(new_material)
}

#[tauri::command]
fn list_materiais() -> Result<Vec<Material>, String> {
    let conn = db::DB_CONN.lock().unwrap();
    let mut stmt = conn.prepare("
        SELECT 
            id, categoria_id, codigo_especificacao, descricao_especificacao, 
            material_composicao, unidade_medida, codigo_material_completo, 
            descricao_completa, observacoes, created_at, estoque_atual, estoque_minimo,
            custo_padrao_por_unidade_compra, unidade_compra_padrao, 
            ultima_atualizacao_custo_padrao, peso_linear_kg_m, 
            peso_superficial_kg_m2, custo_por_unidade_estoque
        FROM materiais
    ").map_err(|e| e.to_string())?;
    
    let rows = stmt.query_map([], |row| {
        Ok(Material {
            id: row.get(0)?,
            categoria_id: row.get(1)?,
            codigo_especificacao: row.get(2)?,
            descricao_especificacao: row.get(3)?,
            material_composicao: row.get(4)?,
            unidade_medida: row.get(5)?,
            codigo_material_completo: row.get(6)?,
            descricao_completa: row.get(7)?,
            observacoes: row.get(8).ok(),
            created_at: row.get(9)?,
            estoque_atual: row.get(10)?,
            estoque_minimo: row.get(11).ok(),
            custo_padrao_por_unidade_compra: row.get(12).ok(),
            unidade_compra_padrao: row.get(13).ok(),
            ultima_atualizacao_custo_padrao: row.get(14).ok(),
            peso_linear_kg_m: row.get(15).ok(),
            peso_superficial_kg_m2: row.get(16).ok(),
            custo_por_unidade_estoque: row.get(17).ok(),
        })
    }).map_err(|e| e.to_string())?;
    
    let mut result = Vec::new();
    for row in rows {
        result.push(row.map_err(|e| e.to_string())?);
    }
    Ok(result)
}

#[tauri::command]
fn update_material(
    id: String,
    categoria_id: String,
    codigo_especificacao: String,
    descricao_especificacao: String,
    material_composicao: String,
    unidade_medida: String,
    codigo_material_completo: String,
    descricao_completa: String,
    observacoes: Option<String>,
    estoque_atual: f64,
    estoque_minimo: Option<f64>,
    // Novos campos de custos
    custo_padrao_por_unidade_compra: Option<f64>,
    unidade_compra_padrao: Option<String>,
    peso_linear_kg_m: Option<f64>,
    peso_superficial_kg_m2: Option<f64>,
) -> Result<Material, String> {
    // Calcular custo por unidade de estoque
    let custo_por_unidade_estoque = calculate_cost_per_stock_unit(
        &unidade_medida,
        &unidade_compra_padrao,
        custo_padrao_por_unidade_compra,
        peso_linear_kg_m,
        peso_superficial_kg_m2,
    );
    
    let ultima_atualizacao_custo_padrao = if custo_padrao_por_unidade_compra.is_some() {
        Some(chrono::Utc::now().to_rfc3339())
    } else {
        None
    };
    
    let conn = db::DB_CONN.lock().unwrap();
    conn.execute(
        "UPDATE materiais SET 
            categoria_id = ?1, codigo_especificacao = ?2, descricao_especificacao = ?3, 
            material_composicao = ?4, unidade_medida = ?5, codigo_material_completo = ?6, 
            descricao_completa = ?7, observacoes = ?8, estoque_atual = ?9, estoque_minimo = ?10,
            custo_padrao_por_unidade_compra = ?11, unidade_compra_padrao = ?12, 
            ultima_atualizacao_custo_padrao = ?13, peso_linear_kg_m = ?14, 
            peso_superficial_kg_m2 = ?15, custo_por_unidade_estoque = ?16
        WHERE id = ?17",
        rusqlite::params![
            categoria_id, codigo_especificacao, descricao_especificacao, 
            material_composicao, unidade_medida, codigo_material_completo, 
            descricao_completa, observacoes, estoque_atual, estoque_minimo,
            custo_padrao_por_unidade_compra, unidade_compra_padrao, 
            ultima_atualizacao_custo_padrao, peso_linear_kg_m, 
            peso_superficial_kg_m2, custo_por_unidade_estoque, id
        ],
    ).map_err(|e| e.to_string())?;
    
    let mut stmt = conn.prepare("
        SELECT 
            id, categoria_id, codigo_especificacao, descricao_especificacao, 
            material_composicao, unidade_medida, codigo_material_completo, 
            descricao_completa, observacoes, created_at, estoque_atual, estoque_minimo,
            custo_padrao_por_unidade_compra, unidade_compra_padrao, 
            ultima_atualizacao_custo_padrao, peso_linear_kg_m, 
            peso_superficial_kg_m2, custo_por_unidade_estoque
        FROM materiais WHERE id = ?1
    ").map_err(|e| e.to_string())?;
    
    let mut rows = stmt.query_map(rusqlite::params![id], |row| {
        Ok(Material {
            id: row.get(0)?,
            categoria_id: row.get(1)?,
            codigo_especificacao: row.get(2)?,
            descricao_especificacao: row.get(3)?,
            material_composicao: row.get(4)?,
            unidade_medida: row.get(5)?,
            codigo_material_completo: row.get(6)?,
            descricao_completa: row.get(7)?,
            observacoes: row.get(8).ok(),
            created_at: row.get(9)?,
            estoque_atual: row.get(10)?,
            estoque_minimo: row.get(11).ok(),
            custo_padrao_por_unidade_compra: row.get(12).ok(),
            unidade_compra_padrao: row.get(13).ok(),
            ultima_atualizacao_custo_padrao: row.get(14).ok(),
            peso_linear_kg_m: row.get(15).ok(),
            peso_superficial_kg_m2: row.get(16).ok(),
            custo_por_unidade_estoque: row.get(17).ok(),
        })
    }).map_err(|e| e.to_string())?;
    
    if let Some(row) = rows.next() {
        return row.map_err(|e| e.to_string());
    }
    Err("Material not found after update".to_string())
}

#[tauri::command]
fn delete_material(id: String) -> Result<bool, String> {
    let conn = db::DB_CONN.lock().unwrap();
    let deleted = conn.execute("DELETE FROM materiais WHERE id = ?1", rusqlite::params![id]).map_err(|e| e.to_string())?;
    Ok(deleted > 0)
}

#[tauri::command]
fn create_production_orders_table() -> Result<String, String> {
    let conn = db::DB_CONN.lock().unwrap();
    
    // Criar tabela principal de production_orders
    conn.execute(
        "CREATE TABLE IF NOT EXISTS production_orders (
            id TEXT PRIMARY KEY,
            equipment_id TEXT NOT NULL,
            codigo_op TEXT NOT NULL UNIQUE,
            descricao TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'Pendente',
            observacoes TEXT,
            data_inicio_planejada TEXT,
            data_termino_planejada TEXT,
            data_inicio_real TEXT,
            data_termino_real TEXT,
            tempo_pausado_segundos INTEGER DEFAULT 0,
            ultima_pausa_inicio TEXT,
            sequence_number INTEGER NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            FOREIGN KEY(equipment_id) REFERENCES equipment(id) ON DELETE RESTRICT
        )",
        [],
    ).map_err(|e| e.to_string())?;
    
    // Criar tabela de arquivos das production_orders
    conn.execute(
        "CREATE TABLE IF NOT EXISTS production_order_files (
            id TEXT PRIMARY KEY,
            production_order_id TEXT NOT NULL,
            file_name TEXT NOT NULL,
            original_name TEXT NOT NULL,
            file_path TEXT NOT NULL,
            file_size INTEGER NOT NULL,
            mime_type TEXT,
            created_at TEXT NOT NULL,
            FOREIGN KEY(production_order_id) REFERENCES production_orders(id) ON DELETE CASCADE
        )",
        [],
    ).map_err(|e| e.to_string())?;
    
    Ok("Tabelas production_orders e production_order_files criadas com sucesso!".to_string())
}

// ===== PRODUCTION ORDERS COMMANDS =====

#[tauri::command]
fn create_production_order(request: CreateProductionOrderRequest) -> Result<ProductionOrder, String> {
    use chrono::Utc;
    let id = Uuid::new_v4().to_string();
    let now = Utc::now().to_rfc3339();
    
    // Gerar código OP automático
    let codigo_op = generate_op_code(&request.equipment_id)?;
    
    // Buscar próximo sequence_number
    let conn = db::DB_CONN.lock().unwrap();
    let sequence_number: i32 = conn.query_row(
        "SELECT COALESCE(MAX(sequence_number), 0) + 1 FROM production_orders WHERE equipment_id = ?1",
        params![request.equipment_id],
        |row| row.get(0)
    ).map_err(|e| e.to_string())?;
    
    let production_order = ProductionOrder {
        id: id.clone(),
        equipment_id: request.equipment_id.clone(),
        codigo_op,
        descricao: request.descricao.clone(),
        status: "Pendente".to_string(),
        observacoes: request.observacoes.clone(),
        data_inicio_planejada: request.data_inicio_planejada.clone(),
        data_termino_planejada: request.data_termino_planejada.clone(),
        data_inicio_real: None,
        data_termino_real: None,
        tempo_pausado_segundos: 0,
        ultima_pausa_inicio: None,
        sequence_number,
        created_at: now.clone(),
        updated_at: now.clone(),
    };
    
    conn.execute(
        "INSERT INTO production_orders (
            id, equipment_id, codigo_op, descricao, status, observacoes,
            data_inicio_planejada, data_termino_planejada, data_inicio_real, data_termino_real,
            tempo_pausado_segundos, ultima_pausa_inicio, sequence_number, created_at, updated_at
        ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15)",
        params![
            id, request.equipment_id, production_order.codigo_op, request.descricao, "Pendente",
            request.observacoes, request.data_inicio_planejada, request.data_termino_planejada,
            None::<String>, None::<String>, 0, None::<String>, sequence_number, now, now
        ],
    ).map_err(|e| e.to_string())?;
    
    Ok(production_order)
}

#[tauri::command]
fn list_production_orders(equipment_id: Option<String>) -> Result<Vec<ProductionOrderWithDetails>, String> {
    let conn = db::DB_CONN.lock().unwrap();
    let sql = if equipment_id.is_some() {
        "SELECT 
            po.id, po.equipment_id, po.codigo_op, po.descricao, po.status, po.observacoes,
            po.data_inicio_planejada, po.data_termino_planejada, po.data_inicio_real, po.data_termino_real,
            po.tempo_pausado_segundos, po.ultima_pausa_inicio, po.sequence_number, po.created_at, po.updated_at,
            e.serial_number, p.code as project_code
         FROM production_orders po
         JOIN equipment e ON po.equipment_id = e.id
         JOIN projects p ON e.project_id = p.id
         WHERE po.equipment_id = ?1
         ORDER BY po.created_at DESC"
    } else {
        "SELECT 
            po.id, po.equipment_id, po.codigo_op, po.descricao, po.status, po.observacoes,
            po.data_inicio_planejada, po.data_termino_planejada, po.data_inicio_real, po.data_termino_real,
            po.tempo_pausado_segundos, po.ultima_pausa_inicio, po.sequence_number, po.created_at, po.updated_at,
            e.serial_number, p.code as project_code
         FROM production_orders po
         JOIN equipment e ON po.equipment_id = e.id
         JOIN projects p ON e.project_id = p.id
         ORDER BY po.created_at DESC"
    };
      let mut stmt = conn.prepare(sql).map_err(|e| e.to_string())?;
    
    let row_mapper = |row: &rusqlite::Row| -> Result<ProductionOrderWithDetails, rusqlite::Error> {
        let production_order = ProductionOrder::from_row(row)?;
        Ok(ProductionOrderWithDetails {
            production_order,
            equipment_serial: row.get(15)?,
            project_code: row.get(16)?,
        })
    };
    
    let rows = if let Some(eq_id) = equipment_id {
        stmt.query_map(params![eq_id], row_mapper)
    } else {
        stmt.query_map([], row_mapper)
    }.map_err(|e| e.to_string())?;
    
    let mut result = Vec::new();
    for row in rows {
        result.push(row.map_err(|e| e.to_string())?);
    }
    Ok(result)
}

#[tauri::command]
fn update_production_order(id: String, request: UpdateProductionOrderRequest) -> Result<ProductionOrder, String> {
    use chrono::Utc;
    let now = Utc::now().to_rfc3339();
    let conn = db::DB_CONN.lock().unwrap();
    
    // Construir query dinâmica baseada nos campos fornecidos
    let mut updates = Vec::new();
    let mut params_vec = Vec::new();
    
    if let Some(descricao) = &request.descricao {
        updates.push("descricao = ?");
        params_vec.push(descricao.as_str());
    }
    if let Some(observacoes) = &request.observacoes {
        updates.push("observacoes = ?");
        params_vec.push(observacoes.as_str());
    }
    if let Some(data_inicio) = &request.data_inicio_planejada {
        updates.push("data_inicio_planejada = ?");
        params_vec.push(data_inicio.as_str());
    }
    if let Some(data_termino) = &request.data_termino_planejada {
        updates.push("data_termino_planejada = ?");
        params_vec.push(data_termino.as_str());
    }
    
    if updates.is_empty() {
        return Err("Nenhum campo para atualizar".to_string());
    }
    
    updates.push("updated_at = ?");
    params_vec.push(&now);
    params_vec.push(&id);
    
    let sql = format!("UPDATE production_orders SET {} WHERE id = ?", updates.join(", "));
    
    conn.execute(&sql, rusqlite::params_from_iter(params_vec)).map_err(|e| e.to_string())?;
    
    // Retornar OP atualizada
    let mut stmt = conn.prepare(
        "SELECT id, equipment_id, codigo_op, descricao, status, observacoes,
         data_inicio_planejada, data_termino_planejada, data_inicio_real, data_termino_real,
         tempo_pausado_segundos, ultima_pausa_inicio, sequence_number, created_at, updated_at
         FROM production_orders WHERE id = ?1"
    ).map_err(|e| e.to_string())?;
    
    let production_order = stmt.query_row(params![id], |row| {
        ProductionOrder::from_row(row)
    }).map_err(|e| e.to_string())?;
    
    Ok(production_order)
}

#[tauri::command]
fn delete_production_order(id: String) -> Result<bool, String> {
    let conn = db::DB_CONN.lock().unwrap();
    let deleted = conn.execute("DELETE FROM production_orders WHERE id = ?1", params![id])
        .map_err(|e| e.to_string())?;
    Ok(deleted > 0)
}

#[derive(Debug, serde::Deserialize)]
struct UpdateProductionOrderStatusRequest {
    id: String,
    new_status: String,
}

#[tauri::command]
fn update_production_order_status(request: UpdateProductionOrderStatusRequest) -> Result<ProductionOrder, String> {
    let id = &request.id;
    let new_status = &request.new_status;
    
    use chrono::Utc;
    let now = Utc::now().to_rfc3339();
    let conn = db::DB_CONN.lock().unwrap();
    
    // Lógica para controle de tempo pausado
    let mut sql = "UPDATE production_orders SET status = ?1, updated_at = ?2".to_string();
    let mut params_vec: Vec<&dyn rusqlite::ToSql> = vec![&new_status, &now];
    
    match new_status.as_str() {
        "Em produção" => {
            sql += ", data_inicio_real = ?3";
            params_vec.push(&now);
        },
        "Pausada" => {
            sql += ", ultima_pausa_inicio = ?3";
            params_vec.push(&now);
        },
        "Finalizada" => {
            sql += ", data_termino_real = ?3";
            params_vec.push(&now);
        },
        _ => {}    }
      sql += " WHERE id = ?";
    params_vec.push(id);
    
    // Se está retomando de pausa, calcular tempo pausado
    if new_status == "Em produção" {
        // Buscar se tinha pausa anterior
        let mut stmt = conn.prepare(
            "SELECT ultima_pausa_inicio, tempo_pausado_segundos FROM production_orders WHERE id = ?1"
        ).map_err(|e| e.to_string())?;
        
        if let Ok((ultima_pausa, tempo_atual)) = stmt.query_row(params![id], |row| {
            Ok((row.get::<_, Option<String>>(0)?, row.get::<_, i32>(1)?))
        }) {
            if let Some(pausa_inicio) = ultima_pausa {
                if let Ok(inicio_pausa) = chrono::DateTime::parse_from_rfc3339(&pausa_inicio) {
                    if let Ok(agora) = chrono::DateTime::parse_from_rfc3339(&now) {
                        let duracao_pausa = agora.timestamp() - inicio_pausa.timestamp();
                        let novo_tempo_pausado = tempo_atual + duracao_pausa as i32;
                        
                        conn.execute(
                            "UPDATE production_orders SET tempo_pausado_segundos = ?1, ultima_pausa_inicio = NULL WHERE id = ?2",
                            params![novo_tempo_pausado, id]
                        ).map_err(|e| e.to_string())?;
                    }
                }
            }        }
    }
    
    conn.execute(&sql, rusqlite::params_from_iter(params_vec)).map_err(|e| e.to_string())?;
    
    // Retornar OP atualizada
    let mut stmt = conn.prepare(
        "SELECT id, equipment_id, codigo_op, descricao, status, observacoes,
         data_inicio_planejada, data_termino_planejada, data_inicio_real, data_termino_real,
         tempo_pausado_segundos, ultima_pausa_inicio, sequence_number, created_at, updated_at
         FROM production_orders WHERE id = ?1"
    ).map_err(|e| e.to_string())?;
    
    let production_order = stmt.query_row(params![id], |row| {
        ProductionOrder::from_row(row)
    }).map_err(|e| e.to_string())?;
    
    Ok(production_order)
}

// ===== EQUIPMENT SPECIFICATIONS COMMANDS =====

#[derive(Debug, serde::Deserialize)]
struct GetSpecificationsRequest {
    equipment_id: String,
}

#[tauri::command]
fn get_equipment_specifications_cmd(request: GetSpecificationsRequest) -> Result<Vec<EquipmentSpecification>, String> {
    get_equipment_specifications(&request.equipment_id)
}

#[tauri::command]
fn save_equipment_specifications_cmd(request: SaveSpecificationsRequest) -> Result<Vec<EquipmentSpecification>, String> {
    save_equipment_specifications(&request.equipment_id, &request.specifications)
}

#[derive(Debug, serde::Deserialize)]
struct DeleteSpecificationRequest {
    specification_id: String,
}

#[tauri::command]
fn delete_equipment_specification_cmd(request: DeleteSpecificationRequest) -> Result<bool, String> {
    delete_equipment_specification(&request.specification_id)
}

// ===== PRODUCTION ORDER FILES COMMANDS =====

#[derive(Debug, serde::Deserialize)]
struct UploadFileToOpRequest {
    production_order_id: String,
    file_name: String,
    file_data: Vec<u8>,
}

#[derive(Debug, serde::Deserialize)]
struct GetOpFilesRequest {
    production_order_id: String,
}

#[derive(Debug, serde::Deserialize)]
struct DeleteOpFileRequest {
    file_id: String,
}

#[derive(Debug, serde::Deserialize)]
struct DownloadOpFileRequest {
    file_id: String,
}

#[tauri::command]
fn upload_file_to_op(request: UploadFileToOpRequest) -> Result<ProductionOrderFile, String> {
    println!("🔄 [BACKEND] Uploading file '{}' to OP {}", request.file_name, request.production_order_id);
    
    let result = save_production_order_file(
        &request.production_order_id,
        &request.file_name,
        &request.file_data
    );
    
    match &result {
        Ok(file) => println!("✅ [BACKEND] File uploaded successfully: {} ({} bytes)", file.original_name, file.file_size),
        Err(e) => println!("❌ [BACKEND] Failed to upload file: {}", e),
    }
    
    result
}

#[tauri::command]
fn get_op_files(request: GetOpFilesRequest) -> Result<Vec<ProductionOrderFile>, String> {
    println!("🔄 [BACKEND] Getting files for OP {}", request.production_order_id);
    
    let result = get_production_order_files(&request.production_order_id);
    
    match &result {
        Ok(files) => println!("✅ [BACKEND] Retrieved {} files for OP {}", files.len(), request.production_order_id),
        Err(e) => println!("❌ [BACKEND] Failed to get files: {}", e),
    }
    
    result
}

#[tauri::command]
fn delete_op_file(request: DeleteOpFileRequest) -> Result<bool, String> {
    println!("🔄 [BACKEND] Deleting file {}", request.file_id);
    
    let result = delete_production_order_file(&request.file_id);
    
    match &result {
        Ok(success) => {
            if *success {
                println!("✅ [BACKEND] File {} deleted successfully", request.file_id);
            } else {
                println!("⚠️ [BACKEND] File {} not found", request.file_id);
            }
        },
        Err(e) => println!("❌ [BACKEND] Failed to delete file: {}", e),
    }
    
    result
}

#[tauri::command]
fn download_op_file(request: DownloadOpFileRequest) -> Result<Vec<u8>, String> {
    println!("🔄 [BACKEND] Downloading file {}", request.file_id);
    
    let result = get_file_data(&request.file_id);
    
    match &result {
        Ok(data) => println!("✅ [BACKEND] File {} downloaded successfully ({} bytes)", request.file_id, data.len()),
        Err(e) => println!("❌ [BACKEND] Failed to download file: {}", e),
    }
    
    result
}

// Função para calcular custo por unidade de estoque
fn calculate_cost_per_stock_unit(
    unidade_medida: &str,
    unidade_compra_padrao: &Option<String>,
    custo_padrao_por_unidade_compra: Option<f64>,
    peso_linear_kg_m: Option<f64>,
    peso_superficial_kg_m2: Option<f64>,
) -> Option<f64> {
    // Se não há custo padrão definido, retorna None
    let custo_padrao = custo_padrao_por_unidade_compra?;
    let unidade_compra = unidade_compra_padrao.as_ref()?;
    
    // Cenário 1: Material Linear (metro + kg)
    if unidade_medida == "metro" && unidade_compra == "kg" {
        if let Some(peso_linear) = peso_linear_kg_m {
            return Some(peso_linear * custo_padrao);
        }
    }
    
    // Cenário 2: Material Superficial (m² + kg)
    if unidade_medida == "m2" && unidade_compra == "kg" {
        if let Some(peso_superficial) = peso_superficial_kg_m2 {
            return Some(peso_superficial * custo_padrao);
        }
    }
    
    // Cenário 3: Material Unitário (mesma unidade)
    if unidade_medida == unidade_compra {
        return Some(custo_padrao);
    }
    
    // Se não há lógica aplicável, retorna None
    None
}

#[tauri::command]
fn export_materials_to_csv() -> Result<String, String> {
    let conn = db::DB_CONN.lock().unwrap();
    let mut stmt = conn.prepare("
        SELECT 
            categoria_id, codigo_especificacao, descricao_especificacao, 
            material_composicao, unidade_medida, codigo_material_completo, 
            descricao_completa, observacoes, estoque_atual, estoque_minimo,
            custo_padrao_por_unidade_compra, unidade_compra_padrao, 
            peso_linear_kg_m, peso_superficial_kg_m2
        FROM materiais
        ORDER BY codigo_material_completo
    ").map_err(|e| e.to_string())?;
    
    let rows = stmt.query_map([], |row| {
        Ok((
            row.get::<_, String>(0)?,  // categoria_id
            row.get::<_, String>(1)?,  // codigo_especificacao
            row.get::<_, String>(2)?,  // descricao_especificacao
            row.get::<_, String>(3)?,  // material_composicao
            row.get::<_, String>(4)?,  // unidade_medida
            row.get::<_, String>(5)?,  // codigo_material_completo
            row.get::<_, String>(6)?,  // descricao_completa
            row.get::<_, Option<String>>(7)?,  // observacoes
            row.get::<_, f64>(8)?,     // estoque_atual
            row.get::<_, Option<f64>>(9)?,     // estoque_minimo
            row.get::<_, Option<f64>>(10)?,    // custo_padrao_por_unidade_compra
            row.get::<_, Option<String>>(11)?, // unidade_compra_padrao
            row.get::<_, Option<f64>>(12)?,    // peso_linear_kg_m
            row.get::<_, Option<f64>>(13)?,    // peso_superficial_kg_m2
        ))
    }).map_err(|e| e.to_string())?;
    
    let mut csv_content = String::new();
    
    // Cabeçalho CSV
    csv_content.push_str("categoria_id,codigo_especificacao,descricao_especificacao,material_composicao,unidade_medida,codigo_material_completo,descricao_completa,observacoes,estoque_atual,estoque_minimo,custo_padrao_por_unidade_compra,unidade_compra_padrao,peso_linear_kg_m,peso_superficial_kg_m2\n");
    
    // Dados
    for row in rows {
        let (categoria_id, codigo_especificacao, descricao_especificacao, material_composicao, 
             unidade_medida, codigo_material_completo, descricao_completa, observacoes, 
             estoque_atual, estoque_minimo, custo_padrao_por_unidade_compra, 
             unidade_compra_padrao, peso_linear_kg_m, peso_superficial_kg_m2) = row.map_err(|e| e.to_string())?;
        
        csv_content.push_str(&format!(
            "{},{},{},{},{},{},{},{},{},{},{},{},{},{}\n",
            categoria_id,
            codigo_especificacao,
            descricao_especificacao,
            material_composicao,
            unidade_medida,
            codigo_material_completo,
            descricao_completa,
            observacoes.unwrap_or_default(),
            estoque_atual,
            estoque_minimo.map_or(String::new(), |v| v.to_string()),
            custo_padrao_por_unidade_compra.map_or(String::new(), |v| v.to_string()),
            unidade_compra_padrao.unwrap_or_default(),
            peso_linear_kg_m.map_or(String::new(), |v| v.to_string()),
            peso_superficial_kg_m2.map_or(String::new(), |v| v.to_string())
        ));
    }
    
    Ok(csv_content)
}

#[tauri::command]
fn get_materials_template_csv() -> Result<String, String> {
    let template = "categoria_id,codigo_especificacao,descricao_especificacao,material_composicao,unidade_medida,codigo_material_completo,descricao_completa,observacoes,estoque_atual,estoque_minimo,custo_padrao_por_unidade_compra,unidade_compra_padrao,peso_linear_kg_m,peso_superficial_kg_m2
exemplo-categoria-id,001,20x20x2,ASTM A36,metro,001-001-001,Tubo Quadrado - 20x20x2,,15.5,10,8.50,kg,1.47,
exemplo-categoria-id,002,Chapa 3mm,ASTM A36,m2,002-001-001,Chapa de Aço 3mm,,25.0,5,7.80,kg,,23.5
exemplo-categoria-id,003,Parafuso M8x20,Aço Inox,peça,003-001-001,Parafuso Inox M8x20,,100,50,0.85,peça,,
";
    Ok(template.to_string())
}

#[tauri::command]
fn import_materials_from_csv(csv_content: String) -> Result<String, String> {
    let conn = db::DB_CONN.lock().unwrap();
    let mut imported_count = 0;
    let mut error_count = 0;
    let mut errors = Vec::new();
    
    let lines: Vec<&str> = csv_content.lines().collect();
    if lines.is_empty() {
        return Err("CSV vazio".to_string());
    }
    
    // Pular cabeçalho (primeira linha)
    for (line_num, line) in lines.iter().skip(1).enumerate() {
        if line.trim().is_empty() {
            continue;
        }
        
        let fields: Vec<&str> = line.split(',').collect();
        if fields.len() < 14 {
            error_count += 1;
            errors.push(format!("Linha {}: Número insuficiente de campos (esperado 14, encontrado {})", line_num + 2, fields.len()));
            continue;
        }
        
        let id = uuid::Uuid::new_v4().to_string();
        let created_at = Utc::now().to_rfc3339();
        
        // Converter campos opcionais
        let observacoes = if fields[7].trim().is_empty() { None } else { Some(fields[7].trim().to_string()) };
        let estoque_minimo = if fields[9].trim().is_empty() { None } else { 
            match fields[9].trim().parse::<f64>() {
                Ok(val) => Some(val),
                Err(_) => {
                    error_count += 1;
                    errors.push(format!("Linha {}: Estoque mínimo inválido: '{}'", line_num + 2, fields[9]));
                    continue;
                }
            }
        };
        
        let custo_padrao_por_unidade_compra = if fields[10].trim().is_empty() { None } else {
            match fields[10].trim().parse::<f64>() {
                Ok(val) => Some(val),
                Err(_) => {
                    error_count += 1;
                    errors.push(format!("Linha {}: Custo padrão inválido: '{}'", line_num + 2, fields[10]));
                    continue;
                }
            }
        };
        
        let unidade_compra_padrao = if fields[11].trim().is_empty() { None } else { Some(fields[11].trim().to_string()) };
        
        let peso_linear_kg_m = if fields[12].trim().is_empty() { None } else {
            match fields[12].trim().parse::<f64>() {
                Ok(val) => Some(val),
                Err(_) => {
                    error_count += 1;
                    errors.push(format!("Linha {}: Peso linear inválido: '{}'", line_num + 2, fields[12]));
                    continue;
                }
            }
        };
        
        let peso_superficial_kg_m2 = if fields[13].trim().is_empty() { None } else {
            match fields[13].trim().parse::<f64>() {
                Ok(val) => Some(val),
                Err(_) => {
                    error_count += 1;
                    errors.push(format!("Linha {}: Peso superficial inválido: '{}'", line_num + 2, fields[13]));
                    continue;
                }
            }
        };
        
        // Calcular custo por unidade de estoque
        let custo_por_unidade_estoque = calculate_cost_per_stock_unit(
            fields[4].trim(), // unidade_medida
            &unidade_compra_padrao,
            custo_padrao_por_unidade_compra,
            peso_linear_kg_m,
            peso_superficial_kg_m2,
        );
        
        let ultima_atualizacao_custo_padrao = if custo_padrao_por_unidade_compra.is_some() {
            Some(created_at.clone())
        } else {
            None
        };
        
        // Converter estoque_atual
        let estoque_atual = match fields[8].trim().parse::<f64>() {
            Ok(val) => val,
            Err(_) => {
                error_count += 1;
                errors.push(format!("Linha {}: Estoque atual inválido: '{}'", line_num + 2, fields[8]));
                continue;
            }
        };
        
        // Inserir no banco
        match conn.execute(
            "INSERT INTO materiais (
                id, categoria_id, codigo_especificacao, descricao_especificacao, 
                material_composicao, unidade_medida, codigo_material_completo, 
                descricao_completa, observacoes, created_at, estoque_atual, estoque_minimo,
                custo_padrao_por_unidade_compra, unidade_compra_padrao, 
                ultima_atualizacao_custo_padrao, peso_linear_kg_m, 
                peso_superficial_kg_m2, custo_por_unidade_estoque
            ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?16, ?17, ?18)",
            rusqlite::params![
                id, fields[0].trim(), fields[1].trim(), fields[2].trim(),
                fields[3].trim(), fields[4].trim(), fields[5].trim(),
                fields[6].trim(), observacoes, created_at, estoque_atual, estoque_minimo,
                custo_padrao_por_unidade_compra, unidade_compra_padrao,
                ultima_atualizacao_custo_padrao, peso_linear_kg_m,
                peso_superficial_kg_m2, custo_por_unidade_estoque
            ],
        ) {
            Ok(_) => imported_count += 1,
            Err(e) => {
                error_count += 1;
                errors.push(format!("Linha {}: Erro ao inserir no banco: {}", line_num + 2, e));
            }
        }
    }
    
    let mut result = format!("Importação concluída: {} materiais importados", imported_count);
    if error_count > 0 {
        result.push_str(&format!(", {} erros encontrados", error_count));
        if !errors.is_empty() {
            result.push_str("\n\nErros:");
            for error in errors.iter().take(10) { // Mostrar apenas os primeiros 10 erros
                result.push_str(&format!("\n- {}", error));
            }
            if errors.len() > 10 {
                result.push_str(&format!("\n... e mais {} erros", errors.len() - 10));
            }
        }
    }
    
    Ok(result)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|_app| {
            init_db();
            Ok(())
        })        .invoke_handler(tauri::generate_handler![
            greet, 
            create_material_class, list_material_classes, update_material_class,
            create_categoria, list_categorias, update_categoria, delete_categoria,
            create_material, list_materiais, update_material, delete_material,
            create_client, list_clients, update_client, delete_client,
            create_project, list_projects, update_project, delete_project,            create_equipment, list_equipment, get_equipment, update_equipment, delete_equipment,
            migrate_equipment_database, create_production_orders_table,
            create_production_order, list_production_orders, update_production_order, delete_production_order, update_production_order_status,
            get_equipment_specifications_cmd, save_equipment_specifications_cmd, delete_equipment_specification_cmd,
            upload_file_to_op, get_op_files, delete_op_file, download_op_file,
            create_stock_movement, get_stock_movements, get_material_current_stock,
            create_fornecedor, get_all_fornecedores, get_fornecedor_by_id, update_fornecedor, delete_fornecedor,
            add_material_to_production_order, get_production_order_materials, update_production_order_material, remove_material_from_production_order,
            create_purchase_order, get_all_purchase_orders, get_purchase_order_by_id,
            get_purchase_order_details, update_purchase_order_status,
            receive_purchase_order_items,
            update_purchase_order_voucher, view_purchase_order_voucher, download_purchase_order_voucher,
            save_purchase_order_voucher,
            export_materials_to_csv, get_materials_template_csv,
            import_materials_from_csv
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

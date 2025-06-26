use serde::{Deserialize, Serialize};
use rusqlite::{params, Row};
use uuid::Uuid;
use std::collections::HashMap;
use crate::db::DB_CONN;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct EquipmentSpecification {
    pub id: String,
    pub equipment_id: String,
    pub field_key: String,
    pub field_value: Option<String>,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SaveSpecificationsRequest {
    pub equipment_id: String,
    pub specifications: HashMap<String, String>,
}

impl EquipmentSpecification {
    pub fn from_row(row: &Row) -> Result<Self, rusqlite::Error> {
        Ok(EquipmentSpecification {
            id: row.get(0)?,
            equipment_id: row.get(1)?,
            field_key: row.get(2)?,
            field_value: row.get(3)?,
            created_at: row.get(4)?,
            updated_at: row.get(5)?,
        })
    }
}

pub fn get_equipment_specifications(equipment_id: &str) -> Result<Vec<EquipmentSpecification>, String> {
    let conn = DB_CONN.lock().unwrap();
    
    // Primeiro verificar se a tabela existe
    let table_exists = conn.prepare(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='equipment_specifications'"
    ).and_then(|mut stmt| {
        stmt.query_row([], |_| Ok(()))
    });
    
    if table_exists.is_err() {
        // Tabela não existe, retornar lista vazia
        println!("📋 [BACKEND] Equipment specifications table not found, returning empty list");
        return Ok(Vec::new());
    }
    
    let mut stmt = match conn.prepare(
        "SELECT id, equipment_id, field_key, field_value, created_at, updated_at 
         FROM equipment_specifications 
         WHERE equipment_id = ?1
         ORDER BY field_key"
    ) {
        Ok(stmt) => stmt,
        Err(e) => {
            println!("📋 [BACKEND] Error preparing statement: {}", e);
            return Ok(Vec::new()); // Retorna lista vazia se houver erro na preparação
        }
    };
    
    let rows = match stmt.query_map(params![equipment_id], |row| {
        EquipmentSpecification::from_row(row)
    }) {
        Ok(rows) => rows,
        Err(e) => {
            println!("📋 [BACKEND] Error executing query: {}", e);
            return Ok(Vec::new()); // Retorna lista vazia se houver erro na consulta
        }
    };
    
    let mut specifications = Vec::new();
    for row in rows {
        match row {
            Ok(spec) => specifications.push(spec),
            Err(e) => {
                println!("📋 [BACKEND] Error reading row: {}", e);
                continue; // Ignora linhas com erro
            }
        }
    }
    
    println!("📋 [BACKEND] Loaded {} specifications for equipment {}", specifications.len(), equipment_id);
    Ok(specifications)
}

pub fn save_equipment_specifications(
    equipment_id: &str, 
    specifications: &HashMap<String, String>
) -> Result<Vec<EquipmentSpecification>, String> {
    println!("🔄 [BACKEND] Starting save_equipment_specifications for equipment {}", equipment_id);
    println!("🔄 [BACKEND] Specifications to save: {:?}", specifications);
    
    // Escopo para limitar o tempo de lock do Mutex
    {
        let conn = DB_CONN.lock().unwrap();
        
        // Usar transação para garantir consistência
        let tx = conn.unchecked_transaction().map_err(|e| {
            println!("❌ [BACKEND] Error creating transaction: {}", e);
            e.to_string()
        })?;
        
        for (field_key, field_value) in specifications {
            println!("🔄 [BACKEND] Processing field: {} = {}", field_key, field_value);
            
            // Verificar se já existe
            let mut stmt = tx.prepare(
                "SELECT id FROM equipment_specifications WHERE equipment_id = ?1 AND field_key = ?2"
            ).map_err(|e| {
                println!("❌ [BACKEND] Error preparing select statement: {}", e);
                e.to_string()
            })?;
            
            let existing = stmt.query_row(params![equipment_id, field_key], |row| {
                Ok(row.get::<_, String>(0)?)
            });
            
            if let Ok(_existing_id) = existing {
                // Atualizar existente
                println!("🔄 [BACKEND] Updating existing specification for field: {}", field_key);
                tx.execute(
                    "UPDATE equipment_specifications 
                     SET field_value = ?1, updated_at = datetime('now') 
                     WHERE equipment_id = ?2 AND field_key = ?3",
                    params![field_value, equipment_id, field_key]
                ).map_err(|e| {
                    println!("❌ [BACKEND] Error updating specification: {}", e);
                    e.to_string()
                })?;
            } else {
                // Criar novo
                println!("🔄 [BACKEND] Creating new specification for field: {}", field_key);
                let id = Uuid::new_v4().to_string();
                tx.execute(
                    "INSERT INTO equipment_specifications (id, equipment_id, field_key, field_value, created_at, updated_at)
                     VALUES (?1, ?2, ?3, ?4, datetime('now'), datetime('now'))",
                    params![id, equipment_id, field_key, field_value]
                ).map_err(|e| {
                    println!("❌ [BACKEND] Error inserting specification: {}", e);
                    e.to_string()
                })?;
            }
        }
        
        tx.commit().map_err(|e| {
            println!("❌ [BACKEND] Error committing transaction: {}", e);
            e.to_string()
        })?;
        
        println!("✅ [BACKEND] Transaction committed successfully");
    } // Mutex é liberado aqui
    
    // Agora buscar as especificações atualizadas com um novo lock
    println!("🔄 [BACKEND] Fetching updated specifications");
    let result = get_equipment_specifications(equipment_id);
    
    match &result {
        Ok(specs) => println!("✅ [BACKEND] Successfully saved and retrieved {} specifications", specs.len()),
        Err(e) => println!("❌ [BACKEND] Error retrieving updated specifications: {}", e),
    }
    
    result
}

pub fn delete_equipment_specification(specification_id: &str) -> Result<bool, String> {
    let conn = DB_CONN.lock().unwrap();
    
    let rows_affected = conn.execute(
        "DELETE FROM equipment_specifications WHERE id = ?1",
        params![specification_id]
    ).map_err(|e| e.to_string())?;
    
    Ok(rows_affected > 0)
}

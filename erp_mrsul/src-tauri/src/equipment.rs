use rusqlite::{params, Connection, Result};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct Equipment {    pub id: String,
    pub client_id: String,
    pub client_name: String, // For display purposes
    pub project_id: String,
    pub project_name: String, // For display purposes
    pub project_code: String, // For display purposes
    pub equipment_type: String,
    pub serial_number: String,
    pub start_date: Option<String>,
    pub end_date: Option<String>,
    pub created_at: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateEquipmentRequest {
    pub client_id: String,
    pub project_id: String,
    pub equipment_type: String,
    pub start_date: String,
    pub end_date: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateEquipmentRequest {
    pub client_id: String,
    pub project_id: String,
    pub equipment_type: String,
    pub serial_number: String,
    pub start_date: String,
    pub end_date: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct EquipmentCounter {
    pub id: String,
    pub equipment_type: String,
    pub prefix: String,
    pub current_count: i32,
    pub updated_at: String,
}

// Equipment type prefixes for auto-generated serial numbers
pub fn get_equipment_prefix(equipment_type: &str) -> Option<&'static str> {
    match equipment_type {
        "Elevador de Carga" => Some("ELC"),
        "Esteira de Roletes" => Some("ER"),
        "Esteira Manta Plana" => Some("EMP"),
        "Girador de Roletes" => Some("GR"),
        "Strechador" => Some("FW"),
        _ => None, // For "Maquina Especial" and "Equipamento Especial"
    }
}

pub fn get_next_serial_number(conn: &Connection, equipment_type: &str) -> Result<Option<String>> {
    if let Some(prefix) = get_equipment_prefix(equipment_type) {
        println!("🔢 [BACKEND] Getting next serial number for type: {} (prefix: {})", equipment_type, prefix);
        
        // Get or create counter for this equipment type
        let current_count = match conn.query_row(
            "SELECT current_count FROM equipment_counters WHERE equipment_type = ?1",
            params![equipment_type],
            |row| row.get::<_, i32>(0),
        ) {
            Ok(count) => {
                println!("✅ [BACKEND] Found existing counter: {}", count);
                count
            }
            Err(_) => {
                println!("➕ [BACKEND] Creating new counter for type: {}", equipment_type);
                // Create new counter starting at 0
                conn.execute(
                    "INSERT INTO equipment_counters (id, equipment_type, prefix, current_count, updated_at) VALUES (?1, ?2, ?3, ?4, ?5)",
                    params![
                        Uuid::new_v4().to_string(),
                        equipment_type,
                        prefix,
                        0,
                        chrono::Local::now().to_rfc3339()
                    ],
                )?;
                0
            }
        };

        let next_count = current_count + 1;
        let serial_number = format!("{}{:03}", prefix, next_count);
        
        println!("🔢 [BACKEND] Generated serial number: {}", serial_number);
        Ok(Some(serial_number))
    } else {
        println!("⚠️ [BACKEND] No auto-generation for equipment type: {}", equipment_type);
        Ok(None)
    }
}

pub fn increment_equipment_counter(conn: &Connection, equipment_type: &str) -> Result<()> {
    if get_equipment_prefix(equipment_type).is_some() {
        println!("⬆️ [BACKEND] Incrementing counter for type: {}", equipment_type);
        
        conn.execute(
            "UPDATE equipment_counters SET current_count = current_count + 1, updated_at = ?1 WHERE equipment_type = ?2",
            params![chrono::Local::now().to_rfc3339(), equipment_type],
        )?;
        
        println!("✅ [BACKEND] Counter incremented successfully");
    }
    Ok(())
}

pub fn create_equipment(conn: &Connection, request: CreateEquipmentRequest) -> Result<Equipment> {
    println!("🚀 [BACKEND] Creating equipment with data: {:?}", request);
    
    // Get client name
    let client_name: String = match conn.query_row(
        "SELECT name FROM clients WHERE id = ?1",
        params![request.client_id],
        |row| row.get(0),
    ) {
        Ok(name) => {
            println!("✅ [BACKEND] Found client name: {}", name);
            name
        },
        Err(e) => {
            println!("❌ [BACKEND] Failed to find client with ID {}: {:?}", request.client_id, e);
            return Err(e);
        }
    };
      // Get project name and code
    let (project_name, project_code): (String, String) = match conn.query_row(
        "SELECT name, code FROM projects WHERE id = ?1",
        params![request.project_id],
        |row| Ok((row.get(0)?, row.get(1)?)),
    ) {
        Ok((name, code)) => {
            println!("✅ [BACKEND] Found project name: {} and code: {}", name, code);
            (name, code)
        },
        Err(e) => {
            println!("❌ [BACKEND] Failed to find project with ID {}: {:?}", request.project_id, e);
            return Err(e);
        }
    };
    
    // Generate serial number
    let serial_number = match get_next_serial_number(conn, &request.equipment_type)? {
        Some(serial) => serial,
        None => {
            // For special equipment types, generate UUID-based serial
            let uuid = Uuid::new_v4().to_string();
            format!("SPEC-{}", &uuid[0..8].to_uppercase())
        }
    };
      let equipment = Equipment {
        id: Uuid::new_v4().to_string(),
        created_at: chrono::Local::now().to_rfc3339(),        client_id: request.client_id.clone(),
        client_name,
        project_id: request.project_id.clone(),
        project_name: project_name.clone(),
        project_code,
        equipment_type: request.equipment_type.clone(),
        serial_number: serial_number.clone(),
        start_date: Some(request.start_date.clone()),
        end_date: request.end_date.clone(),
    };

    println!("📝 [BACKEND] Equipment with generated data: {:?}", equipment);    let result = conn.execute(
        "INSERT INTO equipment (id, client_id, project_id, equipment_type, serial_number, start_date, end_date, created_at)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
        params![
            equipment.id,
            equipment.client_id,
            equipment.project_id,
            equipment.equipment_type,
            equipment.serial_number,
            request.start_date,
            request.end_date,
            equipment.created_at,
        ],
    );

    match result {
        Ok(_) => {
            println!("✅ [BACKEND] Equipment created successfully: {}", equipment.id);
            
            // Increment counter for auto-generated serials
            increment_equipment_counter(conn, &request.equipment_type)?;
            
            Ok(equipment)
        }
        Err(e) => {
            println!("❌ [BACKEND] Failed to create equipment: {:?}", e);
            Err(e)
        }
    }
}

pub fn get_all_equipment(conn: &Connection) -> Result<Vec<Equipment>> {
    println!("📋 [BACKEND] Loading all equipment with client and project names...");
      let mut stmt = conn.prepare(
        "SELECT e.id, e.client_id, c.name as client_name, e.project_id, 
                p.name as project_name, p.code as project_code,
                e.equipment_type, e.serial_number, e.start_date, e.end_date, e.created_at
         FROM equipment e
         JOIN clients c ON e.client_id = c.id
         JOIN projects p ON e.project_id = p.id
         ORDER BY e.created_at DESC"
    )?;

    let equipment = stmt.query_map([], |row| {
        Ok(Equipment {
            id: row.get(0)?,
            client_id: row.get(1)?,
            client_name: row.get(2)?,
            project_id: row.get(3)?,
            project_name: row.get(4)?,
            project_code: row.get(5)?,
            equipment_type: row.get(6)?,
            serial_number: row.get(7)?,
            start_date: row.get(8)?,
            end_date: row.get(9)?,
            created_at: row.get(10)?,
        })
    })?;

    let result: Result<Vec<Equipment>> = equipment.collect();
    match &result {
        Ok(equipment_list) => {
            println!("✅ [BACKEND] Loaded {} equipment successfully", equipment_list.len());
            for (i, eq) in equipment_list.iter().enumerate() {
                println!("  {}. {} - {} - {} ({})", i + 1, eq.serial_number, eq.equipment_type, eq.client_name, eq.project_name);
            }
        }
        Err(e) => {
            println!("❌ [BACKEND] Failed to load equipment: {:?}", e);
        }
    }
    result
}

pub fn get_equipment_by_id(conn: &Connection, id: String) -> Result<Equipment> {
    println!("🔍 [BACKEND] Getting equipment by ID: {}", id);
      let mut stmt = conn.prepare(
        "SELECT e.id, e.client_id, c.name as client_name, e.project_id, p.name as project_name, p.code as project_code,
                e.equipment_type, e.serial_number, e.start_date, e.end_date, e.created_at
         FROM equipment e
         JOIN clients c ON e.client_id = c.id
         JOIN projects p ON e.project_id = p.id
         WHERE e.id = ?1"
    )?;

    let equipment = stmt.query_row(params![id], |row| {
        Ok(Equipment {
            id: row.get(0)?,
            client_id: row.get(1)?,
            client_name: row.get(2)?,
            project_id: row.get(3)?,
            project_name: row.get(4)?,
            project_code: row.get(5)?,
            equipment_type: row.get(6)?,
            serial_number: row.get(7)?,
            start_date: row.get(8)?,
            end_date: row.get(9)?,
            created_at: row.get(10)?,
        })
    })?;

    println!("✅ [BACKEND] Found equipment: {}", equipment.serial_number);
    Ok(equipment)
}

pub fn update_equipment(conn: &Connection, id: String, request: UpdateEquipmentRequest) -> Result<()> {
    println!("📝 [BACKEND] Updating equipment {} with data: {:?}", id, request);
      let result = conn.execute(
        "UPDATE equipment 
         SET client_id = ?1, project_id = ?2, equipment_type = ?3, serial_number = ?4, 
             start_date = ?5, end_date = ?6
         WHERE id = ?7",
        params![
            request.client_id,
            request.project_id,
            request.equipment_type,
            request.serial_number,
            request.start_date,
            request.end_date,
            id,
        ],
    );

    match result {
        Ok(rows_affected) => {
            if rows_affected > 0 {
                println!("✅ [BACKEND] Equipment {} updated successfully", id);
                Ok(())
            } else {
                println!("⚠️ [BACKEND] No equipment found with ID: {}", id);
                Err(rusqlite::Error::QueryReturnedNoRows)
            }
        }
        Err(e) => {
            println!("❌ [BACKEND] Failed to update equipment {}: {:?}", id, e);
            Err(e)
        }
    }
}

pub fn delete_equipment(conn: &Connection, id: String) -> Result<()> {
    println!("🗑️ [BACKEND] Deleting equipment with ID: {}", id);
    
    let result = conn.execute("DELETE FROM equipment WHERE id = ?1", params![id]);
    
    match result {
        Ok(rows_affected) => {
            if rows_affected > 0 {
                println!("✅ [BACKEND] Equipment {} deleted successfully", id);
                Ok(())
            } else {
                println!("⚠️ [BACKEND] No equipment found with ID: {}", id);
                Err(rusqlite::Error::QueryReturnedNoRows)
            }
        }
        Err(e) => {
            println!("❌ [BACKEND] Failed to delete equipment {}: {:?}", id, e);
            Err(e)
        }
    }
}

// Migration function to handle equipment table with date fields
pub fn migrate_equipment_table(conn: &Connection) -> Result<()> {
    println!("🔄 [BACKEND] Starting equipment table migration...");
    
    // Check if equipment table has the new columns
    let mut stmt = conn.prepare("PRAGMA table_info(equipment)")?;
    let column_info: Vec<String> = stmt.query_map([], |row| {
        Ok(row.get::<_, String>(1)?) // Column name is at index 1
    })?.collect::<Result<Vec<_>, _>>()?;
    
    let has_start_date = column_info.contains(&"start_date".to_string());
    let has_end_date = column_info.contains(&"end_date".to_string());
    
    if !has_start_date || !has_end_date {
        println!("⚠️ [BACKEND] Missing date columns, dropping and recreating equipment table...");
        
        // Drop the old table
        conn.execute("DROP TABLE IF EXISTS equipment", [])?;
        
        // Recreate with new schema
        conn.execute(
            "CREATE TABLE equipment (
                id TEXT PRIMARY KEY,
                client_id TEXT NOT NULL,
                project_id TEXT NOT NULL,
                equipment_type TEXT NOT NULL,
                serial_number TEXT NOT NULL UNIQUE,
                start_date TEXT NOT NULL,
                end_date TEXT,
                created_at TEXT NOT NULL,
                FOREIGN KEY(client_id) REFERENCES clients(id) ON DELETE RESTRICT,
                FOREIGN KEY(project_id) REFERENCES projects(id) ON DELETE RESTRICT
            )",
            [],
        )?;
        
        println!("✅ [BACKEND] Equipment table recreated with date fields");
    } else {
        println!("✅ [BACKEND] Equipment table already has date fields");
    }
    
    Ok(())
}

use serde::{Deserialize, Serialize};
use rusqlite::{params, Row};
use crate::db::DB_CONN;
use std::fs;
use std::path::Path;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ProductionOrder {
    pub id: String,
    pub equipment_id: String,
    pub codigo_op: String,
    pub descricao: String,
    pub status: String,
    pub observacoes: Option<String>,
    pub data_inicio_planejada: Option<String>,
    pub data_termino_planejada: Option<String>,
    pub data_inicio_real: Option<String>,
    pub data_termino_real: Option<String>,
    pub tempo_pausado_segundos: i32,
    pub ultima_pausa_inicio: Option<String>,
    pub sequence_number: i32,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateProductionOrderRequest {
    pub equipment_id: String,
    pub descricao: String,
    pub observacoes: Option<String>,
    pub data_inicio_planejada: Option<String>,
    pub data_termino_planejada: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateProductionOrderRequest {
    pub descricao: Option<String>,
    pub observacoes: Option<String>,
    pub data_inicio_planejada: Option<String>,
    pub data_termino_planejada: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ProductionOrderWithDetails {
    #[serde(flatten)]
    pub production_order: ProductionOrder,
    pub equipment_serial: String,
    pub project_code: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ProductionOrderFile {
    pub id: String,
    pub production_order_id: String,
    pub file_name: String,
    pub original_name: String,
    pub file_path: String,
    pub file_size: i64,
    pub mime_type: Option<String>,
    pub created_at: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UploadFileRequest {
    pub production_order_id: String,
    pub file_name: String,
    pub file_data: Vec<u8>,
}

impl ProductionOrder {
    pub fn from_row(row: &Row) -> Result<Self, rusqlite::Error> {
        Ok(ProductionOrder {
            id: row.get(0)?,
            equipment_id: row.get(1)?,
            codigo_op: row.get(2)?,
            descricao: row.get(3)?,
            status: row.get(4)?,
            observacoes: row.get(5)?,
            data_inicio_planejada: row.get(6)?,
            data_termino_planejada: row.get(7)?,
            data_inicio_real: row.get(8)?,
            data_termino_real: row.get(9)?,
            tempo_pausado_segundos: row.get(10)?,
            ultima_pausa_inicio: row.get(11)?,
            sequence_number: row.get(12)?,
            created_at: row.get(13)?,
            updated_at: row.get(14)?,
        })
    }
}

// Função auxiliar para gerar código OP
pub fn generate_op_code(equipment_id: &str) -> Result<String, String> {
    let conn = DB_CONN.lock().unwrap();
    
    // Buscar informações do equipamento e projeto
    let mut stmt = conn.prepare(
        "SELECT e.serial_number, p.code FROM equipment e 
         JOIN projects p ON e.project_id = p.id 
         WHERE e.id = ?1"
    ).map_err(|e| e.to_string())?;
    
    let (serial_number, project_code): (String, String) = stmt.query_row(
        params![equipment_id],
        |row| Ok((row.get(0)?, row.get(1)?))
    ).map_err(|e| e.to_string())?;
    
    // Buscar próximo número sequencial para este equipamento
    let mut stmt = conn.prepare(
        "SELECT COALESCE(MAX(sequence_number), 0) + 1 FROM production_orders WHERE equipment_id = ?1"
    ).map_err(|e| e.to_string())?;
    
    let next_sequence: i32 = stmt.query_row(
        params![equipment_id],
        |row| row.get(0)
    ).map_err(|e| e.to_string())?;
    
    // Formato: código_projeto + serial_equipamento + sequência (3 dígitos)
    // Exemplo: "5878-2024D" + "ELC002" + "001" = "5878-2024D-ELC002-001"
    let codigo_op = format!("{}-{}-{:03}", project_code, serial_number, next_sequence);
    
    Ok(codigo_op)
}

// ===== PRODUCTION ORDER FILES MANAGEMENT =====

impl ProductionOrderFile {
    pub fn from_row(row: &Row) -> Result<Self, rusqlite::Error> {
        Ok(ProductionOrderFile {
            id: row.get(0)?,
            production_order_id: row.get(1)?,
            file_name: row.get(2)?,
            original_name: row.get(3)?,
            file_path: row.get(4)?,
            file_size: row.get(5)?,
            mime_type: row.get(6)?,
            created_at: row.get(7)?,
        })
    }
}

pub fn create_files_directory() -> Result<String, String> {
    use std::env;
    
    // Criar diretório para arquivos de OP na pasta do aplicativo
    let app_dir = env::current_exe()
        .map_err(|e| e.to_string())?
        .parent()
        .ok_or("Não foi possível encontrar diretório do aplicativo")?
        .join("production_order_files");
    
    fs::create_dir_all(&app_dir).map_err(|e| e.to_string())?;
    
    app_dir.to_str()
        .ok_or("Caminho inválido".to_string())
        .map(|s| s.to_string())
}

pub fn save_production_order_file(
    production_order_id: &str,
    original_name: &str,
    file_data: &[u8]
) -> Result<ProductionOrderFile, String> {
    use uuid::Uuid;
    use chrono::Utc;
    
    let conn = DB_CONN.lock().unwrap();
    
    // Buscar informações da OP
    let mut stmt = conn.prepare(
        "SELECT po.codigo_op, e.serial_number FROM production_orders po
         JOIN equipment e ON po.equipment_id = e.id
         WHERE po.id = ?1"
    ).map_err(|e| e.to_string())?;
    
    let (codigo_op, serial_number): (String, String) = stmt.query_row(
        params![production_order_id],
        |row| Ok((row.get(0)?, row.get(1)?))
    ).map_err(|e| format!("OP não encontrada: {}", e))?;
    
    // Criar estrutura de diretórios
    let base_dir = create_files_directory()?;
    let op_dir = Path::new(&base_dir)
        .join(&serial_number)
        .join(&codigo_op);
    
    fs::create_dir_all(&op_dir).map_err(|e| e.to_string())?;
    
    // Gerar nome único para o arquivo
    let file_id = Uuid::new_v4().to_string();
    let timestamp = Utc::now().timestamp();
    let file_extension = Path::new(original_name)
        .extension()
        .and_then(|ext| ext.to_str())
        .unwrap_or("");
    
    let file_name = if file_extension.is_empty() {
        format!("{}_{}", timestamp, file_id)
    } else {
        format!("{}_{}.{}", timestamp, file_id, file_extension)
    };
    
    let file_path = op_dir.join(&file_name);
    
    // Salvar arquivo no disco
    fs::write(&file_path, file_data).map_err(|e| e.to_string())?;
    
    let file_path_str = file_path.to_str()
        .ok_or("Caminho do arquivo inválido")?
        .to_string();
    
    // Detectar tipo MIME baseado na extensão
    let mime_type = match file_extension.to_lowercase().as_str() {
        "pdf" => Some("application/pdf".to_string()),
        "xlsx" | "xls" => Some("application/vnd.ms-excel".to_string()),
        "docx" => Some("application/vnd.openxmlformats-officedocument.wordprocessingml.document".to_string()),
        "png" => Some("image/png".to_string()),
        "jpg" | "jpeg" => Some("image/jpeg".to_string()),
        _ => None,
    };
    
    let now = Utc::now().to_rfc3339();
    let file_size = file_data.len() as i64;
    
    // Salvar referência no banco
    conn.execute(
        "INSERT INTO production_order_files 
         (id, production_order_id, file_name, original_name, file_path, file_size, mime_type, created_at)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
        params![file_id, production_order_id, file_name, original_name, file_path_str, file_size, mime_type, now]
    ).map_err(|e| e.to_string())?;
    
    Ok(ProductionOrderFile {
        id: file_id,
        production_order_id: production_order_id.to_string(),
        file_name,
        original_name: original_name.to_string(),
        file_path: file_path_str,
        file_size,
        mime_type,
        created_at: now,
    })
}

pub fn get_production_order_files(production_order_id: &str) -> Result<Vec<ProductionOrderFile>, String> {
    let conn = DB_CONN.lock().unwrap();
    
    let mut stmt = conn.prepare(
        "SELECT id, production_order_id, file_name, original_name, file_path, file_size, mime_type, created_at
         FROM production_order_files
         WHERE production_order_id = ?1
         ORDER BY created_at DESC"
    ).map_err(|e| e.to_string())?;
    
    let rows = stmt.query_map(params![production_order_id], |row| {
        ProductionOrderFile::from_row(row)
    }).map_err(|e| e.to_string())?;
    
    let mut files = Vec::new();
    for row in rows {
        match row {
            Ok(file) => files.push(file),
            Err(e) => eprintln!("Erro ao ler arquivo: {}", e),
        }
    }
    
    Ok(files)
}

pub fn delete_production_order_file(file_id: &str) -> Result<bool, String> {
    let conn = DB_CONN.lock().unwrap();
    
    // Buscar informações do arquivo
    let mut stmt = conn.prepare(
        "SELECT file_path FROM production_order_files WHERE id = ?1"
    ).map_err(|e| e.to_string())?;
    
    let file_path: String = stmt.query_row(
        params![file_id],
        |row| row.get(0)
    ).map_err(|e| format!("Arquivo não encontrado: {}", e))?;
    
    // Deletar arquivo do disco
    if Path::new(&file_path).exists() {
        fs::remove_file(&file_path).map_err(|e| e.to_string())?;
    }
    
    // Deletar registro do banco
    let rows_affected = conn.execute(
        "DELETE FROM production_order_files WHERE id = ?1",
        params![file_id]
    ).map_err(|e| e.to_string())?;
    
    Ok(rows_affected > 0)
}

pub fn get_file_data(file_id: &str) -> Result<Vec<u8>, String> {
    let conn = DB_CONN.lock().unwrap();
    
    // Buscar caminho do arquivo
    let mut stmt = conn.prepare(
        "SELECT file_path FROM production_order_files WHERE id = ?1"
    ).map_err(|e| e.to_string())?;
    
    let file_path: String = stmt.query_row(
        params![file_id],
        |row| row.get(0)
    ).map_err(|e| format!("Arquivo não encontrado: {}", e))?;
    
    // Ler arquivo do disco
    fs::read(&file_path).map_err(|e| format!("Erro ao ler arquivo: {}", e))
}

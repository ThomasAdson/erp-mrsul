use serde::{Deserialize, Serialize};
use tauri::command;
use rusqlite::{params, Connection, Result as SqliteResult};
use uuid::Uuid;
use chrono::Utc;
use crate::db::DB_CONN;

#[derive(Debug, Serialize, Deserialize)]
pub struct Fornecedor {
    pub id: String,
    pub nome_fantasia: String,
    pub razao_social: String,
    pub cnpj: String,
    pub inscricao_estadual: Option<String>,
    pub endereco: Option<String>,
    pub cidade: Option<String>,
    pub estado: Option<String>,
    pub cep: Option<String>,
    pub telefone: Option<String>,
    pub email: Option<String>,
    pub observacoes: Option<String>,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug, Deserialize)]
pub struct CreateFornecedorRequest {
    pub nome_fantasia: String,
    pub razao_social: String,
    pub cnpj: String,
    pub inscricao_estadual: Option<String>,
    pub endereco: Option<String>,
    pub cidade: Option<String>,
    pub estado: Option<String>,
    pub cep: Option<String>,
    pub telefone: Option<String>,
    pub email: Option<String>,
    pub observacoes: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct UpdateFornecedorRequest {
    pub nome_fantasia: Option<String>,
    pub razao_social: Option<String>,
    pub cnpj: Option<String>,
    pub inscricao_estadual: Option<String>,
    pub endereco: Option<String>,
    pub cidade: Option<String>,
    pub estado: Option<String>,
    pub cep: Option<String>,
    pub telefone: Option<String>,
    pub email: Option<String>,
    pub observacoes: Option<String>,
}

pub fn init_fornecedores_table(conn: &Connection) -> SqliteResult<()> {
    conn.execute(
        "CREATE TABLE IF NOT EXISTS fornecedores (
            id TEXT PRIMARY KEY,
            nome_fantasia TEXT NOT NULL,
            razao_social TEXT NOT NULL,
            cnpj TEXT NOT NULL UNIQUE,
            inscricao_estadual TEXT,
            endereco TEXT,
            cidade TEXT,
            estado TEXT,
            cep TEXT,
            telefone TEXT,
            email TEXT,
            observacoes TEXT,
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            updated_at TEXT NOT NULL DEFAULT (datetime('now'))
        )",
        [],
    )?;

    // Criar índices
    conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_fornecedores_cnpj ON fornecedores(cnpj)",
        [],
    )?;
    
    conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_fornecedores_nome_fantasia ON fornecedores(nome_fantasia)",
        [],
    )?;

    Ok(())
}

#[command]
pub async fn create_fornecedor(request: CreateFornecedorRequest) -> Result<Fornecedor, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    // Verificar se o CNPJ já existe
    let mut stmt = conn.prepare("SELECT COUNT(*) FROM fornecedores WHERE cnpj = ?1")
        .map_err(|e| format!("Failed to prepare CNPJ validation query: {}", e))?;
    
    let cnpj_exists: i64 = stmt.query_row(params![request.cnpj], |row| row.get(0))
        .map_err(|e| format!("Failed to validate CNPJ: {}", e))?;
    
    if cnpj_exists > 0 {
        return Err("CNPJ já cadastrado".to_string());
    }

    let fornecedor_id = Uuid::new_v4().to_string();
    let now = Utc::now().to_rfc3339();

    conn.execute(
        "INSERT INTO fornecedores (
            id, nome_fantasia, razao_social, cnpj, inscricao_estadual,
            endereco, cidade, estado, cep, telefone, email, observacoes,
            created_at, updated_at
        ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14)",
        params![
            fornecedor_id,
            request.nome_fantasia,
            request.razao_social,
            request.cnpj,
            request.inscricao_estadual,
            request.endereco,
            request.cidade,
            request.estado,
            request.cep,
            request.telefone,
            request.email,
            request.observacoes,
            now.clone(),
            now.clone()
        ],
    ).map_err(|e| format!("Failed to insert fornecedor: {}", e))?;

    Ok(Fornecedor {
        id: fornecedor_id,
        nome_fantasia: request.nome_fantasia,
        razao_social: request.razao_social,
        cnpj: request.cnpj,
        inscricao_estadual: request.inscricao_estadual,
        endereco: request.endereco,
        cidade: request.cidade,
        estado: request.estado,
        cep: request.cep,
        telefone: request.telefone,
        email: request.email,
        observacoes: request.observacoes,
        created_at: now.clone(),
        updated_at: now,
    })
}

#[command]
pub async fn get_all_fornecedores() -> Result<Vec<Fornecedor>, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    let mut stmt = conn.prepare(
        "SELECT id, nome_fantasia, razao_social, cnpj, inscricao_estadual,
                endereco, cidade, estado, cep, telefone, email, observacoes,
                created_at, updated_at
         FROM fornecedores
         ORDER BY nome_fantasia"
    ).map_err(|e| format!("Failed to prepare query: {}", e))?;

    let fornecedores = stmt.query_map([], |row| {
        Ok(Fornecedor {
            id: row.get("id")?,
            nome_fantasia: row.get("nome_fantasia")?,
            razao_social: row.get("razao_social")?,
            cnpj: row.get("cnpj")?,
            inscricao_estadual: row.get("inscricao_estadual")?,
            endereco: row.get("endereco")?,
            cidade: row.get("cidade")?,
            estado: row.get("estado")?,
            cep: row.get("cep")?,
            telefone: row.get("telefone")?,
            email: row.get("email")?,
            observacoes: row.get("observacoes")?,
            created_at: row.get("created_at")?,
            updated_at: row.get("updated_at")?,
        })
    }).map_err(|e| format!("Failed to execute query: {}", e))?;

    let result: Result<Vec<_>, _> = fornecedores.collect();
    result.map_err(|e| format!("Failed to collect fornecedores: {}", e))
}

#[command]
pub async fn get_fornecedor_by_id(id: String) -> Result<Fornecedor, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    let mut stmt = conn.prepare(
        "SELECT id, nome_fantasia, razao_social, cnpj, inscricao_estadual,
                endereco, cidade, estado, cep, telefone, email, observacoes,
                created_at, updated_at
         FROM fornecedores
         WHERE id = ?1"
    ).map_err(|e| format!("Failed to prepare query: {}", e))?;

    let fornecedor = stmt.query_row(params![id], |row| {
        Ok(Fornecedor {
            id: row.get("id")?,
            nome_fantasia: row.get("nome_fantasia")?,
            razao_social: row.get("razao_social")?,
            cnpj: row.get("cnpj")?,
            inscricao_estadual: row.get("inscricao_estadual")?,
            endereco: row.get("endereco")?,
            cidade: row.get("cidade")?,
            estado: row.get("estado")?,
            cep: row.get("cep")?,
            telefone: row.get("telefone")?,
            email: row.get("email")?,
            observacoes: row.get("observacoes")?,
            created_at: row.get("created_at")?,
            updated_at: row.get("updated_at")?,
        })
    }).map_err(|e| format!("Fornecedor não encontrado: {}", e))?;

    Ok(fornecedor)
}

#[command]
pub async fn update_fornecedor(id: String, request: UpdateFornecedorRequest) -> Result<Fornecedor, String> {
    {
        let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

        // Verificar se o fornecedor existe
        let mut check_stmt = conn.prepare("SELECT COUNT(*) FROM fornecedores WHERE id = ?1")
            .map_err(|e| format!("Failed to prepare existence check: {}", e))?;
        
        let exists: i64 = check_stmt.query_row(params![id], |row| row.get(0))
            .map_err(|e| format!("Failed to check fornecedor existence: {}", e))?;
        
        if exists == 0 {
            return Err("Fornecedor não encontrado".to_string());
        }

        // Se o CNPJ está sendo alterado, verificar se não existe em outro fornecedor
        if let Some(ref cnpj) = request.cnpj {
            let mut cnpj_stmt = conn.prepare("SELECT COUNT(*) FROM fornecedores WHERE cnpj = ?1 AND id != ?2")
                .map_err(|e| format!("Failed to prepare CNPJ check: {}", e))?;
            
            let cnpj_exists: i64 = cnpj_stmt.query_row(params![cnpj, id], |row| row.get(0))
                .map_err(|e| format!("Failed to check CNPJ: {}", e))?;
            
            if cnpj_exists > 0 {
                return Err("CNPJ já está sendo usado por outro fornecedor".to_string());
            }
        }

        let now = Utc::now().to_rfc3339();

        // Construir query de update dinamicamente
        let mut query = "UPDATE fornecedores SET updated_at = ?1".to_string();
        let mut params: Vec<Box<dyn rusqlite::ToSql>> = vec![Box::new(now.clone())];
        let mut param_count = 1;

        if let Some(nome_fantasia) = &request.nome_fantasia {
            param_count += 1;
            query.push_str(&format!(", nome_fantasia = ?{}", param_count));
            params.push(Box::new(nome_fantasia.clone()));
        }

        if let Some(razao_social) = &request.razao_social {
            param_count += 1;
            query.push_str(&format!(", razao_social = ?{}", param_count));
            params.push(Box::new(razao_social.clone()));
        }

        if let Some(cnpj) = &request.cnpj {
            param_count += 1;
            query.push_str(&format!(", cnpj = ?{}", param_count));
            params.push(Box::new(cnpj.clone()));
        }

        if let Some(inscricao_estadual) = &request.inscricao_estadual {
            param_count += 1;
            query.push_str(&format!(", inscricao_estadual = ?{}", param_count));
            params.push(Box::new(inscricao_estadual.clone()));
        }

        if let Some(endereco) = &request.endereco {
            param_count += 1;
            query.push_str(&format!(", endereco = ?{}", param_count));
            params.push(Box::new(endereco.clone()));
        }

        if let Some(cidade) = &request.cidade {
            param_count += 1;
            query.push_str(&format!(", cidade = ?{}", param_count));
            params.push(Box::new(cidade.clone()));
        }

        if let Some(estado) = &request.estado {
            param_count += 1;
            query.push_str(&format!(", estado = ?{}", param_count));
            params.push(Box::new(estado.clone()));
        }

        if let Some(cep) = &request.cep {
            param_count += 1;
            query.push_str(&format!(", cep = ?{}", param_count));
            params.push(Box::new(cep.clone()));
        }

        if let Some(telefone) = &request.telefone {
            param_count += 1;
            query.push_str(&format!(", telefone = ?{}", param_count));
            params.push(Box::new(telefone.clone()));
        }

        if let Some(email) = &request.email {
            param_count += 1;
            query.push_str(&format!(", email = ?{}", param_count));
            params.push(Box::new(email.clone()));
        }

        if let Some(observacoes) = &request.observacoes {
            param_count += 1;
            query.push_str(&format!(", observacoes = ?{}", param_count));
            params.push(Box::new(observacoes.clone()));
        }

        param_count += 1;
        query.push_str(&format!(" WHERE id = ?{}", param_count));
        params.push(Box::new(id.clone()));

        let param_refs: Vec<&dyn rusqlite::ToSql> = params.iter().map(|p| p.as_ref()).collect();
        
        conn.execute(&query, &param_refs[..])
            .map_err(|e| format!("Failed to update fornecedor: {}", e))?;
    } // Liberando o lock aqui

    // Retornar o fornecedor atualizado
    get_fornecedor_by_id(id).await
}

#[command]
pub async fn delete_fornecedor(id: String) -> Result<(), String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    // Verificar se o fornecedor existe
    let mut check_stmt = conn.prepare("SELECT COUNT(*) FROM fornecedores WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare existence check: {}", e))?;
    
    let exists: i64 = check_stmt.query_row(params![id], |row| row.get(0))
        .map_err(|e| format!("Failed to check fornecedor existence: {}", e))?;
    
    if exists == 0 {
        return Err("Fornecedor não encontrado".to_string());
    }

    // Verificar se o fornecedor está sendo usado em movimentações de estoque
    let mut usage_stmt = conn.prepare("SELECT COUNT(*) FROM stock_movements WHERE supplier = ?1")
        .map_err(|e| format!("Failed to prepare usage check: {}", e))?;
    
    let usage_count: i64 = usage_stmt.query_row(params![id], |row| row.get(0))
        .map_err(|e| format!("Failed to check fornecedor usage: {}", e))?;
    
    if usage_count > 0 {
        return Err("Não é possível excluir o fornecedor pois ele está sendo usado em movimentações de estoque".to_string());
    }

    conn.execute("DELETE FROM fornecedores WHERE id = ?1", params![id])
        .map_err(|e| format!("Failed to delete fornecedor: {}", e))?;

    Ok(())
}

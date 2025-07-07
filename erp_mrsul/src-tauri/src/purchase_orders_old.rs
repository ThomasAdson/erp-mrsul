use serde::{Deserialize, Serialize};
use tauri::command;
use rusqlite::{params, Connection, Result as SqliteResult, Row};
use uuid::Uuid;
use chrono::Utc;
use crate::db::DB_CONN;

// Structs for Purchase Orders
#[derive(Debug, Serialize, Deserialize)]
pub struct PurchaseOrder {
    pub id: String,
    pub numero: String,
    pub fornecedor_id: String,
    pub projeto_id: Option<String>,
    pub data_pedido: String,
    pub data_entrega_prevista: Option<String>,
    pub data_entrega_realizada: Option<String>,
    pub status: String,
    pub valor_total: f64,
    pub observacoes: Option<String>,
    pub termo_pagamento: Option<String>,
    pub condicao_entrega: Option<String>,
    pub created_at: String,
    pub updated_at: String,
    pub created_by: Option<String>,
    pub updated_by: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PurchaseOrderItem {
    pub id: String,
    pub pedido_compra_id: String,
    pub material_id: String,
    pub quantidade_solicitada: f64,
    pub quantidade_recebida: f64,
    pub preco_unitario: f64,
    pub valor_total: f64,
    pub observacoes: Option<String>,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PurchaseOrderItemWithMaterial {
    pub id: String,
    pub pedido_compra_id: String,
    pub material_id: String,
    pub material_codigo: String,
    pub material_descricao: String,
    pub material_unidade: String,
    pub quantidade_solicitada: f64,
    pub quantidade_recebida: f64,
    pub preco_unitario: f64,
    pub valor_total: f64,
    pub observacoes: Option<String>,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PurchaseOrderHistory {
    pub id: String,
    pub pedido_compra_id: String,
    pub status_anterior: Option<String>,
    pub status_novo: String,
    pub observacoes: Option<String>,
    pub created_at: String,
    pub created_by: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PurchaseOrderWithDetails {
    pub pedido: PurchaseOrder,
    pub itens: Vec<PurchaseOrderItemWithMaterial>,
    pub fornecedor: Option<FornecedorBasic>,
    pub projeto: Option<ProjectBasic>,
    pub historico: Vec<PurchaseOrderHistory>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct FornecedorBasic {
    pub id: String,
    pub nome_fantasia: String,
    pub razao_social: String,
    pub cnpj: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ProjectBasic {
    pub id: String,
    pub nome: String,
    pub codigo: String,
}

#[derive(Debug, Deserialize)]
pub struct CreatePurchaseOrderRequest {
    pub fornecedor_id: String,
    pub projeto_id: Option<String>,
    pub data_entrega_prevista: Option<String>,
    pub observacoes: Option<String>,
    pub termo_pagamento: Option<String>,
    pub condicao_entrega: Option<String>,
    pub itens: Vec<CreatePurchaseOrderItemRequest>,
}

#[derive(Debug, Deserialize)]
pub struct CreatePurchaseOrderItemRequest {
    pub material_id: String,
    pub quantidade_solicitada: f64,
    pub preco_unitario: f64,
    pub observacoes: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct UpdatePurchaseOrderRequest {
    pub fornecedor_id: Option<String>,
    pub projeto_id: Option<String>,
    pub data_entrega_prevista: Option<String>,
    pub observacoes: Option<String>,
    pub termo_pagamento: Option<String>,
    pub condicao_entrega: Option<String>,
    pub itens: Option<Vec<CreatePurchaseOrderItemRequest>>,
}

// Helper function to generate purchase order number
fn generate_purchase_order_number(conn: &Connection) -> Result<String, String> {
    let current_year: i32 = chrono::Utc::now().format("%Y").to_string().parse().unwrap_or(2025);
    
    // Verificar se a tabela de numeração existe
    conn.execute(
        "CREATE TABLE IF NOT EXISTS pedidos_compra_numeracao (
            id INTEGER PRIMARY KEY DEFAULT 1,
            ultimo_numero INTEGER DEFAULT 0,
            ano INTEGER DEFAULT 0,
            prefixo TEXT DEFAULT 'PC',
            CHECK (id = 1)
        )",
        [],
    ).map_err(|e| format!("Failed to create numeracao table: {}", e))?;

    // Inserir configuração inicial se não existir
    conn.execute(
        "INSERT OR IGNORE INTO pedidos_compra_numeracao (id, ultimo_numero, ano, prefixo) 
         VALUES (1, 0, ?1, 'PC')",
        params![current_year],
    ).map_err(|e| format!("Failed to initialize numeracao: {}", e))?;

    // Buscar configuração atual
    let mut stmt = conn.prepare(
        "SELECT ultimo_numero, ano, prefixo FROM pedidos_compra_numeracao WHERE id = 1"
    ).map_err(|e| format!("Failed to prepare numeracao query: {}", e))?;
    
    let (ultimo_numero, ano, prefixo): (i32, i32, String) = stmt.query_row([], |row| {
        Ok((row.get(0)?, row.get(1)?, row.get(2)?))
    }).map_err(|e| format!("Failed to get numeracao: {}", e))?;

    // Determinar o próximo número
    let (novo_numero, novo_ano) = if current_year != ano {
        // Mudou o ano, reiniciar numeração
        (1, current_year)
    } else {
        // Mesmo ano, incrementar número
        (ultimo_numero + 1, ano)
    };

    // Atualizar a numeração
    conn.execute(
        "UPDATE pedidos_compra_numeracao 
         SET ultimo_numero = ?1, ano = ?2
         WHERE id = 1",
        params![novo_numero, novo_ano],
    ).map_err(|e| format!("Failed to update numeracao: {}", e))?;

    // Gerar o número completo
    Ok(format!("{}-{}-{:04}", prefixo, novo_ano, novo_numero))
}

// Helper function to map row to PurchaseOrder
fn row_to_purchase_order(row: &Row) -> SqliteResult<PurchaseOrder> {
    Ok(PurchaseOrder {
        id: row.get::<&str, i64>("id")?.to_string(),
        numero: row.get("numero_pedido")?,
        fornecedor_id: row.get("fornecedor_id")?,
        projeto_id: None, // This column doesn't exist in our schema yet
        data_pedido: row.get("data_pedido")?,
        data_entrega_prevista: row.get("data_entrega_prevista")?,
        data_entrega_realizada: None, // This column doesn't exist in our schema yet
        status: row.get("status")?,
        valor_total: row.get::<&str, f64>("valor_total_final").unwrap_or(0.0),
        observacoes: row.get("observacoes")?,
        termo_pagamento: None, // This column doesn't exist in our schema yet
        condicao_entrega: None, // This column doesn't exist in our schema yet
        created_at: row.get("created_at")?,
        updated_at: row.get("updated_at")?,
        created_by: row.get("created_by")?,
        updated_by: row.get("updated_by")?,
    })
}

// Helper function to map row to PurchaseOrderItem
fn row_to_purchase_order_item(row: &Row) -> SqliteResult<PurchaseOrderItem> {
    Ok(PurchaseOrderItem {
        id: row.get::<&str, i64>("id")?.to_string(),
        pedido_compra_id: row.get::<&str, i64>("pedido_id")?.to_string(),
        material_id: row.get::<&str, i64>("material_id")?.to_string(),
        quantidade_solicitada: row.get("quantidade")?,
        quantidade_recebida: row.get("quantidade_recebida")?,
        preco_unitario: row.get("preco_unitario")?,
        valor_total: row.get("valor_total")?,
        observacoes: row.get("observacoes")?,
        created_at: row.get("created_at")?,
        updated_at: row.get("updated_at")?,
    })
}

// Tauri Commands
#[command]
pub async fn create_purchase_order(request: CreatePurchaseOrderRequest) -> Result<PurchaseOrder, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;
    
    // Verificar se o fornecedor existe
    let mut stmt = conn.prepare("SELECT COUNT(*) FROM fornecedores WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare fornecedor validation query: {}", e))?;
    
    let fornecedor_exists: i64 = stmt.query_row(params![request.fornecedor_id], |row| row.get(0))
        .map_err(|e| format!("Failed to validate fornecedor: {}", e))?;
    
    if fornecedor_exists == 0 {
        return Err("Fornecedor não encontrado".to_string());
    }

    // Verificar se o projeto existe (se fornecido)
    if let Some(ref projeto_id) = request.projeto_id {
        let mut stmt = conn.prepare("SELECT COUNT(*) FROM projetos WHERE id = ?1")
            .map_err(|e| format!("Failed to prepare projeto validation query: {}", e))?;
        
        let projeto_exists: i64 = stmt.query_row(params![projeto_id], |row| row.get(0))
            .map_err(|e| format!("Failed to validate projeto: {}", e))?;
        
        if projeto_exists == 0 {
            return Err("Projeto não encontrado".to_string());
        }
    }

    let numero = generate_purchase_order_number(&conn)?;
    let now = Utc::now().to_rfc3339();

    // Criar o pedido de compra
    conn.execute(
        "INSERT INTO pedidos_compra (
            numero_pedido, fornecedor_id, data_pedido, 
            data_entrega_prevista, status, observacoes, 
            created_at, updated_at
        ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
        params![
            numero, request.fornecedor_id, now,
            request.data_entrega_prevista, "rascunho", request.observacoes,
            now, now
        ],
    ).map_err(|e| format!("Failed to create purchase order: {}", e))?;

    // Buscar o ID gerado automaticamente
    let pedido_id = conn.last_insert_rowid();

    // Adicionar os itens
    for item in request.itens {
        conn.execute(
            "INSERT INTO pedidos_compra_itens (
                pedido_id, material_id, quantidade, preco_unitario,
                valor_total, observacoes, created_at, updated_at
            ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
            params![
                pedido_id, item.material_id, item.quantidade_solicitada,
                item.preco_unitario, item.quantidade_solicitada * item.preco_unitario,
                item.observacoes, now, now
            ],
        ).map_err(|e| format!("Failed to create purchase order item: {}", e))?;
    }

    // Registrar no histórico
    conn.execute(
        "INSERT INTO pedidos_compra_historico (
            pedido_id, status_novo, observacoes, created_at
        ) VALUES (?1, ?2, ?3, ?4)",
        params![pedido_id, "rascunho", "Pedido criado", now],
    ).map_err(|e| format!("Failed to create purchase order history: {}", e))?;

    // Retornar o pedido criado
    let mut stmt = conn.prepare(
        "SELECT id, numero_pedido, fornecedor_id, data_pedido, 
         data_entrega_prevista, status, valor_total_final,
         observacoes, created_at, updated_at,
         created_by, updated_by FROM pedidos_compra WHERE id = ?1"
    ).map_err(|e| format!("Failed to prepare select query: {}", e))?;

    let purchase_order = stmt.query_row(params![pedido_id], |row| row_to_purchase_order(row))
        .map_err(|e| format!("Failed to get created purchase order: {}", e))?;

    Ok(purchase_order)
}

#[command]
pub async fn get_all_purchase_orders() -> Result<Vec<PurchaseOrder>, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    let mut stmt = conn.prepare(
        "SELECT id, numero_pedido, fornecedor_id, data_pedido, 
         data_entrega_prevista, status, valor_total_final,
         observacoes, created_at, updated_at,
         created_by, updated_by FROM pedidos_compra ORDER BY created_at DESC"
    ).map_err(|e| format!("Failed to prepare query: {}", e))?;

    let rows = stmt.query_map([], |row| row_to_purchase_order(row))
        .map_err(|e| format!("Failed to execute query: {}", e))?;

    let mut purchase_orders = Vec::new();
    for row in rows {
        purchase_orders.push(row.map_err(|e| format!("Failed to parse row: {}", e))?);
    }

    Ok(purchase_orders)
}

#[command]
pub async fn get_purchase_order_by_id(id: String) -> Result<PurchaseOrder, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    let mut stmt = conn.prepare(
        "SELECT id, numero_pedido, fornecedor_id, data_pedido, 
         data_entrega_prevista, status, valor_total_final,
         observacoes, created_at, updated_at,
         created_by, updated_by FROM pedidos_compra WHERE id = ?1"
    ).map_err(|e| format!("Failed to prepare query: {}", e))?;

    let purchase_order = stmt.query_row(params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?], |row| row_to_purchase_order(row))
        .map_err(|e| format!("Purchase order not found: {}", e))?;

    Ok(purchase_order)
}

#[command]
pub async fn get_purchase_order_with_details(id: String) -> Result<PurchaseOrderWithDetails, String> {
    // Buscar o pedido primeiro
    let pedido = get_purchase_order_by_id(id.clone()).await?;

    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    // Buscar os itens com detalhes do material
    let mut stmt = conn.prepare(
        "SELECT pci.id, pci.pedido_id, pci.material_id, pci.quantidade, 
         pci.quantidade_recebida, pci.preco_unitario, pci.valor_total, 
         pci.observacoes, pci.created_at, pci.updated_at,
         m.codigo_material_completo as material_codigo, m.descricao_completa as material_descricao, 
         m.unidade_medida as material_unidade
         FROM pedidos_compra_itens pci
         LEFT JOIN materiais m ON pci.material_id = m.id
         WHERE pci.pedido_id = ?1"
    ).map_err(|e| format!("Failed to prepare items query: {}", e))?;

    let item_rows = stmt.query_map(params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?], |row| {
        Ok(PurchaseOrderItemWithMaterial {
            id: row.get::<&str, i64>("id")?.to_string(),
            pedido_compra_id: row.get::<&str, i64>("pedido_id")?.to_string(),
            material_id: row.get::<&str, i64>("material_id")?.to_string(),
            material_codigo: row.get("material_codigo").unwrap_or_default(),
            material_descricao: row.get("material_descricao").unwrap_or_default(),
            material_unidade: row.get("material_unidade").unwrap_or_default(),
            quantidade_solicitada: row.get("quantidade")?,
            quantidade_recebida: row.get("quantidade_recebida")?,
            preco_unitario: row.get("preco_unitario")?,
            valor_total: row.get("valor_total")?,
            observacoes: row.get("observacoes")?,
            created_at: row.get("created_at")?,
            updated_at: row.get("updated_at")?,
        })
    }).map_err(|e| format!("Failed to execute items query: {}", e))?;

    let mut itens = Vec::new();
    for row in item_rows {
        itens.push(row.map_err(|e| format!("Failed to parse item row: {}", e))?);
    }

    // Buscar dados do fornecedor
    let mut stmt = conn.prepare(
        "SELECT id, nome_fantasia, razao_social, cnpj FROM fornecedores WHERE id = ?1"
    ).map_err(|e| format!("Failed to prepare fornecedor query: {}", e))?;

    let fornecedor = stmt.query_row(params![pedido.fornecedor_id], |row| {
        Ok(FornecedorBasic {
            id: row.get("id")?,
            nome_fantasia: row.get("nome_fantasia")?,
            razao_social: row.get("razao_social")?,
            cnpj: row.get("cnpj")?,
        })
    }).ok();

    // Buscar dados do projeto (se existe)
    let projeto = if let Some(ref projeto_id) = pedido.projeto_id {
        let mut stmt = conn.prepare(
            "SELECT id, nome, codigo FROM projetos WHERE id = ?1"
        ).map_err(|e| format!("Failed to prepare projeto query: {}", e))?;

        stmt.query_row(params![projeto_id], |row| {
            Ok(ProjectBasic {
                id: row.get("id")?,
                nome: row.get("nome")?,
                codigo: row.get("codigo")?,
            })
        }).ok()
    } else {
        None
    };

    // Buscar histórico
    let mut stmt = conn.prepare(
        "SELECT id, pedido_id, status_anterior, status_novo, observacoes, 
         created_at, created_by FROM pedidos_compra_historico 
         WHERE pedido_id = ?1 ORDER BY created_at DESC"
    ).map_err(|e| format!("Failed to prepare history query: {}", e))?;

    let history_rows = stmt.query_map(params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?], |row| {
        Ok(PurchaseOrderHistory {
            id: row.get("id")?,
            pedido_compra_id: row.get("pedido_id")?,
            status_anterior: row.get("status_anterior")?,
            status_novo: row.get("status_novo")?,
            observacoes: row.get("observacoes")?,
            created_at: row.get("created_at")?,
            created_by: row.get("created_by")?,
        })
    }).map_err(|e| format!("Failed to execute history query: {}", e))?;

    let mut historico = Vec::new();
    for row in history_rows {
        historico.push(row.map_err(|e| format!("Failed to parse history row: {}", e))?);
    }

    Ok(PurchaseOrderWithDetails {
        pedido,
        itens,
        fornecedor,
        projeto,
        historico,
    })
}

#[command]
pub async fn update_purchase_order(id: String, request: UpdatePurchaseOrderRequest) -> Result<PurchaseOrder, String> {
    {
        let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;
        
        // Verificar se o pedido existe
        let mut stmt = conn.prepare("SELECT COUNT(*) FROM pedidos_compra WHERE id = ?1")
            .map_err(|e| format!("Failed to prepare validation query: {}", e))?;
        
        let exists: i64 = stmt.query_row(params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?], |row| row.get(0))
            .map_err(|e| format!("Failed to validate purchase order: {}", e))?;
        
        if exists == 0 {
            return Err("Pedido de compra não encontrado".to_string());
        }

        let now = Utc::now().to_rfc3339();

        // Construir query de update dinamicamente
        let mut updates = Vec::new();
        let mut values = Vec::new();

        if let Some(fornecedor_id) = request.fornecedor_id {
            updates.push("fornecedor_id = ?");
            values.push(fornecedor_id);
        }
        if let Some(projeto_id) = request.projeto_id {
            updates.push("projeto_id = ?");
            values.push(projeto_id);
        }
        if let Some(data_entrega_prevista) = request.data_entrega_prevista {
            updates.push("data_entrega_prevista = ?");
            values.push(data_entrega_prevista);
        }
        if let Some(observacoes) = request.observacoes {
            updates.push("observacoes = ?");
            values.push(observacoes);
        }
        if let Some(termo_pagamento) = request.termo_pagamento {
            updates.push("termo_pagamento = ?");
            values.push(termo_pagamento);
        }
        if let Some(condicao_entrega) = request.condicao_entrega {
            updates.push("condicao_entrega = ?");
            values.push(condicao_entrega);
        }

        updates.push("updated_at = ?");
        values.push(now.clone());
        values.push(id.clone());

        if !updates.is_empty() {
            let query = format!("UPDATE pedidos_compra SET {} WHERE id = ?", updates.join(", "));
            conn.execute(&query, rusqlite::params_from_iter(values))
                .map_err(|e| format!("Failed to update purchase order: {}", e))?;
        }

        // Atualizar itens se fornecidos
        if let Some(itens) = request.itens {
            // Remover itens existentes
            conn.execute("DELETE FROM pedidos_compra_itens WHERE pedido_id = ?1", params![id])
                .map_err(|e| format!("Failed to delete existing items: {}", e))?;

            // Adicionar novos itens
            for item in itens {
                let item_id = Uuid::new_v4().to_string();
                conn.execute(
                    "INSERT INTO pedidos_compra_itens (
                        id, pedido_id, material_id, quantidade, preco_unitario,
                        valor_total, observacoes, created_at, updated_at
                    ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)",
                    params![
                        item_id, id, item.material_id, item.quantidade_solicitada,
                        item.preco_unitario, item.quantidade_solicitada * item.preco_unitario,
                        item.observacoes, now, now
                    ],
                ).map_err(|e| format!("Failed to create purchase order item: {}", e))?;
            }
        }
    } // conn is dropped here

    // Retornar o pedido atualizado
    get_purchase_order_by_id(id).await
}

#[command]
pub async fn update_purchase_order_status(id: String, new_status: String, observacoes: Option<String>) -> Result<PurchaseOrder, String> {
    {
        let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;
        
        // Buscar status atual
        let mut stmt = conn.prepare("SELECT status FROM pedidos_compra WHERE id = ?1")
            .map_err(|e| format!("Failed to prepare status query: {}", e))?;
        
        let current_status: String = stmt.query_row(params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?], |row| row.get(0))
            .map_err(|e| format!("Purchase order not found: {}", e))?;

        let now = Utc::now().to_rfc3339();

        // Atualizar status
        conn.execute(
            "UPDATE pedidos_compra SET status = ?1, updated_at = ?2 WHERE id = ?3",
            params![new_status, now, id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?],
        ).map_err(|e| format!("Failed to update status: {}", e))?;

        // Registrar no histórico
        conn.execute(
            "INSERT INTO pedidos_compra_historico (
                pedido_id, status_anterior, status_novo, observacoes, created_at
            ) VALUES (?1, ?2, ?3, ?4, ?5)",
            params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?, current_status, new_status, observacoes, now],
        ).map_err(|e| format!("Failed to create history entry: {}", e))?;
    } // conn is dropped here

    // Retornar o pedido atualizado
    get_purchase_order_by_id(id).await
}

#[command]
pub async fn delete_purchase_order(id: String) -> Result<(), String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    // Verificar se o pedido existe
    let mut stmt = conn.prepare("SELECT COUNT(*) FROM pedidos_compra WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare validation query: {}", e))?;
    
    let exists: i64 = stmt.query_row(params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?], |row| row.get(0))
        .map_err(|e| format!("Failed to validate purchase order: {}", e))?;
    
    if exists == 0 {
        return Err("Pedido de compra não encontrado".to_string());
    }

    // Deletar o pedido (CASCADE irá deletar itens e histórico)
    conn.execute("DELETE FROM pedidos_compra WHERE id = ?1", params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?])
        .map_err(|e| format!("Failed to delete purchase order: {}", e))?;

    Ok(())
}

#[command]
pub async fn get_purchase_order_items(pedido_id: String) -> Result<Vec<PurchaseOrderItemWithMaterial>, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;

    let mut stmt = conn.prepare(
        "SELECT pci.id, pci.pedido_id, pci.material_id, pci.quantidade, 
         pci.quantidade_recebida, pci.preco_unitario, pci.valor_total, 
         pci.observacoes, pci.created_at, pci.updated_at,
         m.codigo_material_completo as material_codigo, m.descricao_completa as material_descricao, 
         m.unidade_medida as material_unidade
         FROM pedidos_compra_itens pci
         LEFT JOIN materiais m ON pci.material_id = m.id
         WHERE pci.pedido_id = ?1"
    ).map_err(|e| format!("Failed to prepare query: {}", e))?;

    let rows = stmt.query_map(params![pedido_id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?], |row| {
        Ok(PurchaseOrderItemWithMaterial {
            id: row.get("id")?,
            pedido_compra_id: row.get("pedido_id")?,
            material_id: row.get("material_id")?,
            material_codigo: row.get("material_codigo").unwrap_or_default(),
            material_descricao: row.get("material_descricao").unwrap_or_default(),
            material_unidade: row.get("material_unidade").unwrap_or_default(),
            quantidade_solicitada: row.get("quantidade")?,
            quantidade_recebida: row.get("quantidade_recebida")?,
            preco_unitario: row.get("preco_unitario")?,
            valor_total: row.get("valor_total")?,
            observacoes: row.get("observacoes")?,
            created_at: row.get("created_at")?,
            updated_at: row.get("updated_at")?,
        })
    }).map_err(|e| format!("Failed to execute query: {}", e))?;

    let mut items = Vec::new();
    for row in rows {
        items.push(row.map_err(|e| format!("Failed to parse row: {}", e))?);
    }

    Ok(items)
}

#[tauri::command]
pub async fn update_purchase_order(
    state: tauri::State<'_, AppState>,
    id: String,
    order_data: CreatePurchaseOrderRequest,
) -> Result<(), String> {
    let db = Database::new(&state.data_dir).map_err(|e| format!("Failed to initialize database: {}", e))?;
    let conn = db.get_connection().map_err(|e| format!("Failed to get database connection: {}", e))?;

    // Begin transaction
    let tx = conn.unchecked_transaction().map_err(|e| format!("Failed to start transaction: {}", e))?;

    // Update the purchase order
    tx.execute(
        "UPDATE pedidos_compra SET 
         fornecedor_id = ?1, data_pedido = ?2, data_entrega_esperada = ?3, 
         observacoes = ?4, status = ?5, valor_total = ?6, updated_at = ?7
         WHERE id = ?8",
        params![
            order_data.fornecedor_id.parse::<i64>().map_err(|_| "Invalid fornecedor_id".to_string())?,
            order_data.data_pedido,
            order_data.data_entrega_esperada,
            order_data.observacoes,
            order_data.status,
            order_data.valor_total,
            chrono::Utc::now().to_rfc3339(),
            id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?
        ],
    ).map_err(|e| format!("Failed to update purchase order: {}", e))?;

    // Delete existing items
    tx.execute(
        "DELETE FROM pedidos_compra_itens WHERE pedido_id = ?1",
        params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?],
    ).map_err(|e| format!("Failed to delete existing items: {}", e))?;

    // Insert updated items
    for item in &order_data.itens {
        tx.execute(
            "INSERT INTO pedidos_compra_itens 
             (pedido_id, material_id, quantidade, quantidade_recebida, preco_unitario, valor_total, observacoes, created_at, updated_at)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)",
            params![
                id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?,
                item.material_id.parse::<i64>().map_err(|_| "Invalid material_id".to_string())?,
                item.quantidade_solicitada,
                item.quantidade_recebida,
                item.preco_unitario,
                item.valor_total,
                item.observacoes,
                chrono::Utc::now().to_rfc3339(),
                chrono::Utc::now().to_rfc3339(),
            ],
        ).map_err(|e| format!("Failed to insert item: {}", e))?;
    }

    // Add history entry
    tx.execute(
        "INSERT INTO pedidos_compra_historico 
         (pedido_id, status_anterior, status_novo, observacoes, usuario_id, created_at)
         VALUES (?1, (SELECT status FROM pedidos_compra WHERE id = ?1), ?2, ?3, ?4, ?5)",
        params![
            id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?,
            order_data.status,
            "Pedido atualizado",
            1, // Default user ID
            chrono::Utc::now().to_rfc3339(),
        ],
    ).map_err(|e| format!("Failed to add history entry: {}", e))?;

    tx.commit().map_err(|e| format!("Failed to commit transaction: {}", e))?;

    Ok(())
}

#[tauri::command]
pub async fn delete_purchase_order(
    state: tauri::State<'_, AppState>,
    id: String,
) -> Result<(), String> {
    let db = Database::new(&state.data_dir).map_err(|e| format!("Failed to initialize database: {}", e))?;
    let conn = db.get_connection().map_err(|e| format!("Failed to get database connection: {}", e))?;

    // Begin transaction
    let tx = conn.unchecked_transaction().map_err(|e| format!("Failed to start transaction: {}", e))?;

    let order_id = id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?;

    // Delete items first (foreign key constraint)
    tx.execute(
        "DELETE FROM pedidos_compra_itens WHERE pedido_id = ?1",
        params![order_id],
    ).map_err(|e| format!("Failed to delete purchase order items: {}", e))?;

    // Delete history
    tx.execute(
        "DELETE FROM pedidos_compra_historico WHERE pedido_id = ?1",
        params![order_id],
    ).map_err(|e| format!("Failed to delete purchase order history: {}", e))?;

    // Delete the order
    let rows_affected = tx.execute(
        "DELETE FROM pedidos_compra WHERE id = ?1",
        params![order_id],
    ).map_err(|e| format!("Failed to delete purchase order: {}", e))?;

    if rows_affected == 0 {
        return Err("Purchase order not found".to_string());
    }

    tx.commit().map_err(|e| format!("Failed to commit transaction: {}", e))?;

    Ok(())
}

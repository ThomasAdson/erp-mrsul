use serde::{Deserialize, Serialize};
use tauri::command;
use rusqlite::{params, Connection, Result as SqliteResult, Row};
use chrono::Utc;
use crate::db::DB_CONN;
use std::path::Path;
use std::fs;
use std::io::Write;

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
    pub comprovante_nome: Option<String>,
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

#[derive(Debug, Deserialize)]
pub struct ReceiveItemRequest {
    pub item_id: String,
    pub quantity_received_now: f64,
}

#[derive(Debug, Deserialize)]
pub struct ReceivePurchaseOrderRequest {
    pub pedido_id: String,
    pub nota_fiscal_number: String,
    pub comprovante_url: Option<String>,
    pub items: Vec<ReceiveItemRequest>,
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
        id: row.get::<&str, i64>("id")?.to_string(), // ID still INTEGER in pedidos_compra
        numero: row.get("numero_pedido")?,
        fornecedor_id: row.get("fornecedor_id")?, // Now TEXT in DB
        projeto_id: None, // This column doesn't exist in our schema yet
        data_pedido: row.get("data_pedido")?,
        data_entrega_prevista: row.get("data_entrega_prevista")?,
        data_entrega_realizada: None, // This column doesn't exist in our schema yet
        status: row.get("status")?,
        valor_total: row.get::<&str, f64>("valor_total_final").unwrap_or(0.0),
        observacoes: row.get("observacoes")?,
        termo_pagamento: None, // This column doesn't exist in our schema yet
        condicao_entrega: None, // This column doesn't exist in our schema yet
        comprovante_nome: row.get("comprovante_nome").ok(),
        created_at: row.get("created_at")?,
        updated_at: row.get("updated_at")?,
        created_by: row.get("created_by")?,
        updated_by: row.get("updated_by")?,
    })
}

// Helper function to map row to PurchaseOrderItem
fn row_to_purchase_order_item(row: &Row) -> SqliteResult<PurchaseOrderItem> {
    Ok(PurchaseOrderItem {
        id: row.get::<&str, i64>("id")?.to_string(), // Convert INTEGER id to string
        pedido_compra_id: row.get::<&str, i64>("pedido_id")?.to_string(), // Convert INTEGER to string
        material_id: row.get("material_id")?, // Now TEXT in DB
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
         created_by, updated_by, comprovante_nome FROM pedidos_compra WHERE id = ?1"
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
         created_by, updated_by, comprovante_nome FROM pedidos_compra ORDER BY created_at DESC"
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
         created_by, updated_by, comprovante_nome FROM pedidos_compra WHERE id = ?1"
    ).map_err(|e| format!("Failed to prepare query: {}", e))?;

    let purchase_order = stmt.query_row(params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?], |row| row_to_purchase_order(row))
        .map_err(|e| format!("Purchase order not found: {}", e))?;

    Ok(purchase_order)
}

#[command]
pub async fn get_purchase_order_details(id: String) -> Result<PurchaseOrderWithDetails, String> {
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
            material_id: row.get("material_id")?, // Read as string directly
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
            id: row.get("id")?, // Read as string directly
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
            id: row.get::<&str, i64>("id")?.to_string(), // Convert integer to string
            pedido_compra_id: row.get::<&str, i64>("pedido_id")?.to_string(), // Convert integer to string
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
            id: row.get::<&str, i64>("id")?.to_string(),
            pedido_compra_id: row.get::<&str, i64>("pedido_id")?.to_string(),
            material_id: row.get("material_id")?, // Read as string directly
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

    // Iniciar transação
    let tx = conn.unchecked_transaction().map_err(|e| format!("Failed to start transaction: {}", e))?;
    
    // Primeiro, excluir todos os itens do pedido
    tx.execute(
        "DELETE FROM pedidos_compra_itens WHERE pedido_id = ?1",
        params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?],
    ).map_err(|e| format!("Failed to delete purchase order items: {}", e))?;
    
    // Excluir o histórico do pedido
    tx.execute(
        "DELETE FROM pedidos_compra_historico WHERE pedido_id = ?1",
        params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?],
    ).map_err(|e| format!("Failed to delete purchase order history: {}", e))?;
    
    // Excluir o pedido
    tx.execute(
        "DELETE FROM pedidos_compra WHERE id = ?1",
        params![id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?],
    ).map_err(|e| format!("Failed to delete purchase order: {}", e))?;
    
    // Confirmar transação
    tx.commit().map_err(|e| format!("Failed to commit transaction: {}", e))?;
    
    Ok(())
}

#[command]
pub async fn receive_purchase_order_items(
    pedido_id: String,
    _nota_fiscal_number: String,
    comprovante_url: Option<String>,
    items: Vec<ReceiveItemRequest>
) -> Result<String, String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;
    let now = Utc::now().to_rfc3339();
    
    // Verificar se o pedido existe e está em status válido para recebimento
    let mut stmt = conn.prepare("SELECT status FROM pedidos_compra WHERE id = ?1")
        .map_err(|e| format!("Failed to prepare status query: {}", e))?;
    
    let current_status: String = stmt.query_row(params![pedido_id.parse::<i64>().map_err(|_| "Invalid ID format".to_string())?], |row| row.get(0))
        .map_err(|e| format!("Purchase order not found: {}", e))?;
    
    drop(stmt); // Liberar o statement antes de iniciar a transação
    
    if !["confirmado", "recebido_parcial"].contains(&current_status.as_str()) {
        return Err(format!("Cannot receive items for order with status: {}", current_status));
    }
    
    // Iniciar transação
    let tx = conn.unchecked_transaction()
        .map_err(|e| format!("Failed to start transaction: {}", e))?;
    
    let _total_items_received = 0.0;
    let _total_items_ordered = 0.0;
    
    // Atualizar quantidades recebidas para cada item
    for item in items {
        if item.quantity_received_now <= 0.0 {
            continue;
        }
        
        // Buscar informações atuais do item
        let (quantidade_solicitada, quantidade_ja_recebida): (f64, f64) = {
            let mut stmt = tx.prepare(
                "SELECT quantidade, quantidade_recebida FROM pedidos_compra_itens WHERE id = ?1 AND pedido_id = ?2"
            ).map_err(|e| format!("Failed to prepare item query: {}", e))?;
            
            let result = stmt.query_row(
                params![item.item_id.parse::<i64>().map_err(|_| "Invalid item ID format".to_string())?, 
                       pedido_id.parse::<i64>().map_err(|_| "Invalid pedido ID format".to_string())?],
                |row| Ok((row.get(0)?, row.get(1)?))
            ).map_err(|e| format!("Item not found: {}", e))?;
            
            result
        };
        
        // Verificar se a quantidade não excede o pendente
        let quantidade_pendente = quantidade_solicitada - quantidade_ja_recebida;
        if item.quantity_received_now > quantidade_pendente {
            return Err(format!("Quantity to receive ({}) exceeds pending quantity ({}) for item {}", 
                item.quantity_received_now, quantidade_pendente, item.item_id));
        }
        
        // Atualizar quantidade recebida
        let nova_quantidade_recebida = quantidade_ja_recebida + item.quantity_received_now;
        
        tx.execute(
            "UPDATE pedidos_compra_itens SET quantidade_recebida = ?1, updated_at = ?2 WHERE id = ?3",
            params![nova_quantidade_recebida, now, item.item_id.parse::<i64>().map_err(|_| "Invalid item ID format".to_string())?],
        ).map_err(|e| format!("Failed to update item quantity: {}", e))?;
    }
    
    // Determinar novo status baseado nas quantidades
    let (total_pedido, total_recebido): (f64, f64) = {
        let mut stmt = tx.prepare(
            "SELECT SUM(quantidade) as total_pedido, SUM(quantidade_recebida) as total_recebido 
             FROM pedidos_compra_itens WHERE pedido_id = ?1"
        ).map_err(|e| format!("Failed to prepare totals query: {}", e))?;
        
        let result = stmt.query_row(
            params![pedido_id.parse::<i64>().map_err(|_| "Invalid pedido ID format".to_string())?],
            |row| Ok((row.get(0)?, row.get(1)?))
        ).map_err(|e| format!("Failed to get totals: {}", e))?;
        
        result
    };
    
    let new_status = if total_recebido >= total_pedido {
        "recebido_total"
    } else if total_recebido > 0.0 {
        "recebido_parcial"
    } else {
        &current_status
    };
    
    // Atualizar status do pedido se mudou
    if new_status != current_status {
        tx.execute(
            "UPDATE pedidos_compra SET status = ?1, updated_at = ?2 WHERE id = ?3",
            params![new_status, now, pedido_id.parse::<i64>().map_err(|_| "Invalid pedido ID format".to_string())?],
        ).map_err(|e| format!("Failed to update order status: {}", e))?;
        
        // Registrar no histórico
        tx.execute(
            "INSERT INTO pedidos_compra_historico (
                pedido_id, status_anterior, status_novo, observacoes, created_at
            ) VALUES (?1, ?2, ?3, ?4, ?5)",
            params![
                pedido_id.parse::<i64>().map_err(|_| "Invalid pedido ID format".to_string())?,
                current_status,
                new_status,
                format!("Recebimento registrado via sistema"),
                now
            ]
        ).map_err(|e| format!("Failed to create history entry: {}", e))?;
    }
    
    // Atualizar URL do comprovante se fornecido
    if let Some(url) = comprovante_url {
        tx.execute(
            "UPDATE pedidos_compra SET comprovante_nome = ?1, updated_at = ?2 WHERE id = ?3",
            params![url, now, pedido_id.parse::<i64>().map_err(|_| "Invalid pedido ID format".to_string())?],
        ).map_err(|e| format!("Failed to update comprovante: {}", e))?;
    }
    
    // Confirmar transação
    tx.commit().map_err(|e| format!("Failed to commit transaction: {}", e))?;
    
    Ok(format!("Recebimento registrado com sucesso. Status: {}", new_status))
}

#[tauri::command]
pub fn update_purchase_order_comprovante(
    id: String,
    comprovante_nome: String,
) -> Result<(), String> {
    let conn = DB_CONN.lock().map_err(|e| format!("Database lock error: {}", e))?;
    
    conn.execute(
        "UPDATE pedidos_compra SET comprovante_nome = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
        params![comprovante_nome, id],
    )
    .map_err(|e| format!("Failed to update comprovante: {}", e))?;
    
    Ok(())
}

#[tauri::command]
pub fn open_purchase_order_voucher(voucher_path: String) -> Result<(), String> {
    // Simular abertura do arquivo (no futuro pode usar tauri::api::shell::open)
    // Por enquanto, vamos apenas verificar se o arquivo existe
    if voucher_path.starts_with("file://") {
        // Remover o prefixo file:// e tentar abrir
        let path = voucher_path.replace("file://", "");
        if Path::new(&path).exists() {
            // Usar o comando do sistema para abrir o arquivo
            #[cfg(target_os = "windows")]
            {
                std::process::Command::new("cmd")
                    .args(["/C", "start", "", &path])
                    .spawn()
                    .map_err(|e| format!("Erro ao abrir arquivo: {}", e))?;
            }
            
            #[cfg(target_os = "macos")]
            {
                std::process::Command::new("open")
                    .arg(&path)
                    .spawn()
                    .map_err(|e| format!("Erro ao abrir arquivo: {}", e))?;
            }
            
            #[cfg(target_os = "linux")]
            {
                std::process::Command::new("xdg-open")
                    .arg(&path)
                    .spawn()
                    .map_err(|e| format!("Erro ao abrir arquivo: {}", e))?;
            }
            
            Ok(())
        } else {
            Err("Arquivo não encontrado".to_string())
        }
    } else {
        Err("Caminho do arquivo inválido".to_string())
    }
}

#[tauri::command]
pub fn view_purchase_order_voucher(voucher_path: String) -> Result<(), String> {
    let path = std::path::Path::new(&voucher_path);
    
    if !path.exists() {
        return Err("Arquivo não encontrado".to_string());
    }
    
    // Abrir arquivo com o programa padrão do sistema
    if let Err(e) = std::process::Command::new("cmd")
        .args(["/C", "start", "", &voucher_path])
        .spawn() {
        return Err(format!("Erro ao abrir arquivo: {}", e));
    }
    
    Ok(())
}

#[tauri::command]
pub fn download_purchase_order_voucher(voucher_path: String) -> Result<(), String> {
    let path = std::path::Path::new(&voucher_path);
    
    if !path.exists() {
        return Err("Arquivo não encontrado".to_string());
    }
    
    // Obter diretório Downloads do usuário
    let downloads_dir = dirs::download_dir()
        .ok_or("Não foi possível encontrar o diretório Downloads")?;
    
    // Obter nome do arquivo
    let file_name = path.file_name()
        .ok_or("Nome do arquivo inválido")?;
    
    let dest_path = downloads_dir.join(file_name);
    
    // Copiar arquivo para Downloads
    std::fs::copy(path, &dest_path)
        .map_err(|e| format!("Erro ao copiar arquivo: {}", e))?;
    
    Ok(())
}

#[tauri::command]
pub fn update_purchase_order_voucher(
    order_id: String,
    order_number: String,
    file_name: String,
    file_data: String,
    content_type: String,
) -> Result<String, String> {
    // Salvar novo arquivo
    let file_path = save_purchase_order_voucher(order_id.clone(), order_number, file_name, file_data, content_type)?;
    
    // Atualizar banco de dados
    let conn = crate::db::DB_CONN.lock().unwrap();
    conn.execute(
        "UPDATE pedidos_compra SET comprovante_nome = ?1, updated_at = ?2 WHERE id = ?3",
        params![file_path, chrono::Utc::now().to_rfc3339(), order_id],
    ).map_err(|e| format!("Failed to update voucher path: {}", e))?;
    
    Ok(file_path)
}

#[tauri::command]
pub fn download_purchase_order_voucher(voucher_path: String) -> Result<String, String> {
    if voucher_path.starts_with("file://") {
        let source_path = voucher_path.replace("file://", "");
        
        if !Path::new(&source_path).exists() {
            return Err("Arquivo não encontrado".to_string());
        }
        
        // Obter o nome do arquivo
        let file_name = Path::new(&source_path)
            .file_name()
            .and_then(|n| n.to_str())
            .ok_or("Nome do arquivo inválido")?;
        
        // Obter o diretório de downloads do usuário
        let downloads_dir = dirs::download_dir()
            .ok_or("Não foi possível encontrar o diretório de downloads")?;
        
        let dest_path = downloads_dir.join(file_name);
        
        // Copiar o arquivo para o diretório de downloads
        fs::copy(&source_path, &dest_path)
            .map_err(|e| format!("Erro ao copiar arquivo: {}", e))?;
        
        Ok(dest_path.to_string_lossy().to_string())
    } else {
        Err("Caminho do arquivo inválido".to_string())
    }
}

#[tauri::command]
pub fn save_purchase_order_voucher(
    order_id: String,
    order_number: String,
    file_name: String,
    file_data: String,
    content_type: String,
) -> Result<String, String> {
    // Criar diretório para armazenar arquivos
    let app_dir = std::env::current_dir().map_err(|e| format!("Failed to get current directory: {}", e))?;
    let vouchers_dir = app_dir.join("vouchers").join("purchase_orders").join(&order_number);
    
    // Criar diretório se não existir
    fs::create_dir_all(&vouchers_dir).map_err(|e| format!("Failed to create vouchers directory: {}", e))?;
    
    // Gerar nome único para o arquivo
    let timestamp = chrono::Utc::now().timestamp_millis();
    let file_extension = Path::new(&file_name)
        .extension()
        .and_then(|ext| ext.to_str())
        .unwrap_or("");
    let unique_file_name = format!("{}_{}.{}", timestamp, file_name.replace(&format!(".{}", file_extension), ""), file_extension);
    let file_path = vouchers_dir.join(&unique_file_name);
    
    // Decodificar base64 e salvar arquivo
    let file_bytes = base64::decode(&file_data).map_err(|e| format!("Failed to decode base64: {}", e))?;
    let mut file = fs::File::create(&file_path).map_err(|e| format!("Failed to create file: {}", e))?;
    file.write_all(&file_bytes).map_err(|e| format!("Failed to write file: {}", e))?;
    
    // Retornar caminho do arquivo
    Ok(file_path.to_string_lossy().to_string())
}

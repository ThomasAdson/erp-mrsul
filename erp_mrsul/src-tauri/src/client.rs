use rusqlite::{params, Connection, Result};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct Client {
    pub id: String,
    pub name: String,
    pub cnpj: String,
    pub address: Option<String>,
    pub phone: Option<String>,
    pub email: Option<String>,
    pub notes: Option<String>,
    pub created_at: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateClientRequest {
    pub name: String,
    pub cnpj: String,
    pub address: Option<String>,
    pub phone: Option<String>,
    pub email: Option<String>,
    pub notes: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UpdateClientRequest {
    pub name: String,
    pub cnpj: String,
    pub address: Option<String>,
    pub phone: Option<String>,
    pub email: Option<String>,
    pub notes: Option<String>,
}

pub fn create_client(conn: &Connection, request: CreateClientRequest) -> Result<Client> {
    println!("Creating client with data: {:?}", request);
    
    let client = Client {
        id: Uuid::new_v4().to_string(),
        created_at: chrono::Local::now().to_rfc3339(),
        name: request.name,
        cnpj: request.cnpj,
        address: request.address,
        phone: request.phone,
        email: request.email,
        notes: request.notes,
    };

    println!("Client with generated ID and timestamp: {:?}", client);

    let result = conn.execute(
        "INSERT INTO clients (id, name, cnpj, address, phone, email, notes, created_at)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
        params![
            client.id,
            client.name,
            client.cnpj,
            client.address,
            client.phone,
            client.email,
            client.notes,
            client.created_at,
        ],
    );

    match result {
        Ok(_) => {
            println!("Client created successfully: {}", client.id);
            Ok(client)
        }
        Err(e) => {
            println!("Failed to create client: {:?}", e);
            Err(e)
        }
    }
}

pub fn get_all_clients(conn: &Connection) -> Result<Vec<Client>> {
    let mut stmt = conn.prepare(
        "SELECT id, name, cnpj, address, phone, email, notes, created_at
         FROM clients
         ORDER BY name"
    )?;

    let clients = stmt.query_map([], |row| {
        Ok(Client {
            id: row.get(0)?,
            name: row.get(1)?,
            cnpj: row.get(2)?,
            address: row.get(3)?,
            phone: row.get(4)?,
            email: row.get(5)?,
            notes: row.get(6)?,
            created_at: row.get(7)?,
        })
    })?;

    clients.collect()
}

pub fn update_client(conn: &Connection, id: String, request: UpdateClientRequest) -> Result<()> {
    conn.execute(
        "UPDATE clients 
         SET name = ?1, cnpj = ?2, address = ?3, phone = ?4, email = ?5, notes = ?6
         WHERE id = ?7",
        params![
            request.name,
            request.cnpj,
            request.address,
            request.phone,
            request.email,
            request.notes,
            id,
        ],
    )?;

    Ok(())
}

pub fn delete_client(conn: &Connection, id: String) -> Result<()> {
    conn.execute("DELETE FROM clients WHERE id = ?1", params![id])?;
    Ok(())
}

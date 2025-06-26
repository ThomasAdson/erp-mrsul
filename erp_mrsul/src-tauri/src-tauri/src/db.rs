use rusqlite::{Connection, Result};
use std::fs;
use std::path::Path;

// Define o caminho fixo do banco de dados na rede
static DB_PATH: &str = r"X:\Thomas\ERP\erp_mrsul.db";

pub fn initialize_database() -> Result<Connection> {
    let db_path = Path::new(DB_PATH);
    
    // Tenta abrir a conexão com o banco de dados
    let conn = Connection::open(&db_path)
        .expect(&format!("Falha ao conectar ao banco de dados em {}", DB_PATH));
    
    // Create tables if they don't exist
    create_tables(&conn)?;
    
    Ok(conn)
}

fn create_tables(conn: &Connection) -> Result<()> {
    // Material Classes table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS material_classes (
            id TEXT PRIMARY KEY,
            code TEXT UNIQUE NOT NULL,
            name TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )",
        [],
    )?;
    
    // Material Categories table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS material_categories (
            id TEXT PRIMARY KEY,
            class_id TEXT NOT NULL,
            code TEXT NOT NULL,
            name TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (class_id) REFERENCES material_classes (id) ON DELETE CASCADE,
            UNIQUE (class_id, code)
        )",
        [],
    )?;
    
    // Materials table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS materials (
            id TEXT PRIMARY KEY,
            category_id TEXT NOT NULL,
            spec_code TEXT NOT NULL,
            spec_description TEXT NOT NULL,
            composition TEXT,
            unit TEXT NOT NULL,
            notes TEXT,
            full_code TEXT UNIQUE NOT NULL,
            full_description TEXT NOT NULL,
            current_stock REAL DEFAULT 0,
            min_stock REAL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (category_id) REFERENCES material_categories (id) ON DELETE CASCADE
        )",
        [],
    )?;
    
    // Suppliers table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS suppliers (
            id TEXT PRIMARY KEY,
            trade_name TEXT NOT NULL,
            legal_name TEXT NOT NULL,
            tax_id TEXT UNIQUE,
            address TEXT,
            city TEXT,
            state TEXT,
            zip_code TEXT,
            contact_name TEXT,
            contact_phone TEXT,
            contact_email TEXT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )",
        [],
    )?;
    
    // Clients table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS clients (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            tax_id TEXT UNIQUE,
            address TEXT,
            city TEXT,
            state TEXT,
            zip_code TEXT,
            contact_name TEXT,
            contact_phone TEXT,
            contact_email TEXT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )",
        [],
    )?;
    
    // Projects table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS projects (
            id TEXT PRIMARY KEY,
            client_id TEXT NOT NULL,
            code TEXT UNIQUE NOT NULL,
            name TEXT NOT NULL,
            description TEXT,
            start_date TEXT,
            due_date TEXT,
            status TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE
        )",
        [],
    )?;
    
    // Equipment Types table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS equipment_types (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            prefix TEXT UNIQUE NOT NULL,
            description TEXT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )",
        [],
    )?;
    
    // Equipment table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS equipment (
            id TEXT PRIMARY KEY,
            client_id TEXT NOT NULL,
            project_id TEXT NOT NULL,
            equipment_type_id TEXT NOT NULL,
            serial_number TEXT UNIQUE NOT NULL,
            model TEXT,
            status TEXT NOT NULL,
            manufacture_date TEXT,
            installation_date TEXT,
            warranty_end_date TEXT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE,
            FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE,
            FOREIGN KEY (equipment_type_id) REFERENCES equipment_types (id) ON DELETE CASCADE
        )",
        [],
    )?;
    
    // Equipment Specifications table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS equipment_specs (
            id TEXT PRIMARY KEY,
            equipment_id TEXT NOT NULL,
            field_key TEXT NOT NULL,
            field_label TEXT NOT NULL,
            value TEXT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE CASCADE,
            UNIQUE (equipment_id, field_key)
        )",
        [],
    )?;
    
    // Production Orders table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS production_orders (
            id TEXT PRIMARY KEY,
            equipment_id TEXT NOT NULL,
            code TEXT UNIQUE NOT NULL,
            status TEXT NOT NULL,
            planned_start_date TEXT,
            planned_end_date TEXT,
            actual_start_date TEXT,
            actual_end_date TEXT,
            notes TEXT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (equipment_id) REFERENCES equipment (id) ON DELETE CASCADE
        )",
        [],
    )?;
    
    // Production Order Materials table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS production_order_materials (
            id TEXT PRIMARY KEY,
            production_order_id TEXT NOT NULL,
            material_id TEXT NOT NULL,
            quantity_required REAL NOT NULL,
            consumed BOOLEAN NOT NULL DEFAULT 0,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (production_order_id) REFERENCES production_orders (id) ON DELETE CASCADE,
            FOREIGN KEY (material_id) REFERENCES materials (id) ON DELETE CASCADE
        )",
        [],
    )?;
    
    // Stock Entries table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS stock_entries (
            id TEXT PRIMARY KEY,
            supplier_id TEXT,
            entry_date TEXT NOT NULL,
            invoice_number TEXT,
            storage_location TEXT,
            document_url TEXT,
            notes TEXT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (supplier_id) REFERENCES suppliers (id) ON DELETE SET NULL
        )",
        [],
    )?;
    
    // Stock Entry Items table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS stock_entry_items (
            id TEXT PRIMARY KEY,
            entry_id TEXT NOT NULL,
            material_id TEXT NOT NULL,
            quantity REAL NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (entry_id) REFERENCES stock_entries (id) ON DELETE CASCADE,
            FOREIGN KEY (material_id) REFERENCES materials (id) ON DELETE CASCADE
        )",
        [],
    )?;
    
    // Stock Outputs table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS stock_outputs (
            id TEXT PRIMARY KEY,
            output_date TEXT NOT NULL,
            reason TEXT NOT NULL,
            production_order_ref TEXT,
            document_url TEXT,
            notes TEXT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )",
        [],
    )?;
    
    // Stock Output Items table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS stock_output_items (
            id TEXT PRIMARY KEY,
            output_id TEXT NOT NULL,
            material_id TEXT NOT NULL,
            quantity REAL NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (output_id) REFERENCES stock_outputs (id) ON DELETE CASCADE,
            FOREIGN KEY (material_id) REFERENCES materials (id) ON DELETE CASCADE
        )",
        [],
    )?;
    
    // Purchase Orders table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS purchase_orders (
            id TEXT PRIMARY KEY,
            supplier_id TEXT NOT NULL,
            project_id TEXT,
            code TEXT UNIQUE NOT NULL,
            issue_date TEXT NOT NULL,
            expected_delivery_date TEXT,
            status TEXT NOT NULL,
            notes TEXT,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (supplier_id) REFERENCES suppliers (id) ON DELETE CASCADE,
            FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE SET NULL
        )",
        [],
    )?;
    
    // Purchase Order Items table
    conn.execute(
        "CREATE TABLE IF NOT EXISTS purchase_order_items (
            id TEXT PRIMARY KEY,
            purchase_order_id TEXT NOT NULL,
            material_id TEXT NOT NULL,
            quantity REAL NOT NULL,
            unit_price REAL NOT NULL,
            quantity_received REAL DEFAULT 0,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (purchase_order_id) REFERENCES purchase_orders (id) ON DELETE CASCADE,
            FOREIGN KEY (material_id) REFERENCES materials (id) ON DELETE CASCADE
        )",
        [],
    )?;
    
    Ok(())
}
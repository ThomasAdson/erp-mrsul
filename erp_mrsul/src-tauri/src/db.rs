use rusqlite::Connection;
use std::sync::Mutex;
use once_cell::sync::Lazy;

// Caminho do arquivo do banco de dados
static DB_PATH: &str = "X:/Thomas/ERP/erp_mrsul.db";

// Singleton para conexão global
pub static DB_CONN: Lazy<Mutex<Connection>> = Lazy::new(|| {
    Mutex::new(Connection::open(DB_PATH).expect("Falha ao abrir o banco de dados"))
});

pub fn init_db() {
    let conn = DB_CONN.lock().unwrap();
    
    // Tabela clients
    conn.execute(
        "CREATE TABLE IF NOT EXISTS clients (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            cnpj TEXT NOT NULL UNIQUE,
            address TEXT,
            phone TEXT,
            email TEXT,
            notes TEXT,
            created_at TEXT NOT NULL
        )",
        [],
    ).expect("Falha ao criar tabela clients");
    // Tabela classes
    conn.execute(
        "CREATE TABLE IF NOT EXISTS classes (
            id TEXT PRIMARY KEY,
            codigo_classe TEXT NOT NULL UNIQUE,
            nome_classe TEXT NOT NULL,
            created_at TEXT NOT NULL
        )",
        [],
    ).expect("Falha ao criar tabela classes");
    // Tabela categorias
    conn.execute(
        "CREATE TABLE IF NOT EXISTS categorias (
            id TEXT PRIMARY KEY,
            classe_id TEXT NOT NULL,
            codigo_categoria TEXT NOT NULL,
            nome_categoria TEXT NOT NULL,
            created_at TEXT NOT NULL,
            UNIQUE(classe_id, codigo_categoria),
            FOREIGN KEY(classe_id) REFERENCES classes(id) ON DELETE RESTRICT
        )",
        [],
    ).expect("Falha ao criar tabela categorias");    // Tabela materiais
    conn.execute(
        "CREATE TABLE IF NOT EXISTS materiais (
            id TEXT PRIMARY KEY,
            categoria_id TEXT NOT NULL,
            codigo_especificacao TEXT NOT NULL,
            descricao_especificacao TEXT NOT NULL,
            material_composicao TEXT NOT NULL,
            unidade_medida TEXT NOT NULL,
            codigo_material_completo TEXT NOT NULL UNIQUE,
            descricao_completa TEXT NOT NULL,
            observacoes TEXT,
            created_at TEXT NOT NULL,
            estoque_atual REAL NOT NULL DEFAULT 0,
            estoque_minimo REAL,
            UNIQUE(categoria_id, codigo_especificacao),
            FOREIGN KEY(categoria_id) REFERENCES categorias(id) ON DELETE RESTRICT
        )",
        [],
    ).expect("Falha ao criar tabela materiais");    // Tabela projects
    conn.execute(
        "CREATE TABLE IF NOT EXISTS projects (
            id TEXT PRIMARY KEY,
            client_id TEXT NOT NULL,
            name TEXT NOT NULL,
            code TEXT NOT NULL UNIQUE,
            start_date TEXT NOT NULL,
            end_date TEXT,
            status TEXT NOT NULL,
            description TEXT,
            created_at TEXT NOT NULL,
            FOREIGN KEY(client_id) REFERENCES clients(id) ON DELETE RESTRICT
        )",
        [],
    ).expect("Falha ao criar tabela projects");    // Tabela equipment
    conn.execute(
        "CREATE TABLE IF NOT EXISTS equipment (
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
    ).expect("Falha ao criar tabela equipment");

    // Tabela equipment_counters
    conn.execute(
        "CREATE TABLE IF NOT EXISTS equipment_counters (
            id TEXT PRIMARY KEY,
            equipment_type TEXT NOT NULL UNIQUE,
            prefix TEXT NOT NULL,
            current_count INTEGER NOT NULL DEFAULT 0,
            updated_at TEXT NOT NULL
        )",        [],
    ).expect("Falha ao criar tabela equipment_counters");    // Migração: Adicionar colunas start_date e end_date à tabela equipment se não existirem
    let _ = conn.execute(
        "ALTER TABLE equipment ADD COLUMN start_date TEXT",
        [],
    );
    let _ = conn.execute(
        "ALTER TABLE equipment ADD COLUMN end_date TEXT",
        [],
    );    // Inicializar tabelas de estoque
    crate::stock_management::init_stock_tables(&conn)
        .expect("Falha ao criar tabelas de estoque");

    // Inicializar tabela de fornecedores
    crate::fornecedores::init_fornecedores_table(&conn)
        .expect("Falha ao criar tabela de fornecedores");
}

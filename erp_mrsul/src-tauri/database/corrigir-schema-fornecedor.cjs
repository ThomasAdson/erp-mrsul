const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Corrigindo schema da tabela pedidos_compra: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('=== INICIANDO CORREÇÃO DO SCHEMA ===');
    
    // Fazer backup dos dados atuais
    const pedidosBackup = db.prepare(`SELECT * FROM pedidos_compra`).all();
    console.log(`Backup de ${pedidosBackup.length} pedidos realizado`);
    
    // Recriar a tabela com o tipo correto para fornecedor_id
    console.log('\n=== RECRIANDO TABELA COM SCHEMA CORRETO ===');
    
    db.exec(`
        -- Criar tabela temporária com schema correto
        CREATE TABLE pedidos_compra_temp (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numero_pedido TEXT UNIQUE NOT NULL,
            fornecedor_id TEXT NOT NULL,  -- Corrigido: mudado de INTEGER para TEXT
            data_pedido DATE NOT NULL DEFAULT (datetime('now', 'localtime')),
            data_entrega_prevista DATE,
            status TEXT NOT NULL DEFAULT 'rascunho' CHECK (status IN ('rascunho', 'enviado', 'confirmado', 'recebido_parcial', 'recebido_total', 'cancelado')),
            observacoes TEXT,
            valor_total DECIMAL(10,2) DEFAULT 0,
            valor_frete DECIMAL(10,2) DEFAULT 0,
            valor_desconto DECIMAL(10,2) DEFAULT 0,
            valor_total_final DECIMAL(10,2) DEFAULT 0,
            comprovante_pdf BLOB,
            comprovante_nome TEXT,
            created_at DATETIME DEFAULT (datetime('now', 'localtime')),
            updated_at DATETIME DEFAULT (datetime('now', 'localtime')),
            created_by TEXT,
            updated_by TEXT,
            FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id) ON DELETE RESTRICT
        );
        
        -- Copiar dados da tabela original
        INSERT INTO pedidos_compra_temp SELECT * FROM pedidos_compra;
        
        -- Remover tabela original
        DROP TABLE pedidos_compra;
        
        -- Renomear tabela temporária
        ALTER TABLE pedidos_compra_temp RENAME TO pedidos_compra;
        
        -- Recriar índices se necessário
        CREATE INDEX IF NOT EXISTS idx_pedidos_compra_fornecedor ON pedidos_compra(fornecedor_id);
        CREATE INDEX IF NOT EXISTS idx_pedidos_compra_status ON pedidos_compra(status);
        CREATE INDEX IF NOT EXISTS idx_pedidos_compra_data ON pedidos_compra(data_pedido);
    `);
    
    console.log('✅ Schema corrigido com sucesso!');
    
    // Verificar se os dados foram mantidos
    const pedidosAtual = db.prepare(`SELECT COUNT(*) as count FROM pedidos_compra`).get();
    console.log(`Dados verificados: ${pedidosAtual.count} pedidos mantidos`);
    
    // Verificar o novo schema
    console.log('\n=== NOVO SCHEMA ===');
    const novoSchema = db.prepare(`SELECT sql FROM sqlite_master WHERE type='table' AND name='pedidos_compra'`).get();
    console.log(novoSchema.sql);
    
    db.close();
    console.log('\n✅ Correção concluída com sucesso!');
    
} catch (error) {
    console.error('❌ Erro ao corrigir schema:', error.message);
    console.error(error.stack);
}

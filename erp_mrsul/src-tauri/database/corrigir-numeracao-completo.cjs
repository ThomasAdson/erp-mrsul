const Database = require('better-sqlite3');
const path = require('path');

// Caminho para o banco de dados
const dbPath = path.join(__dirname, 'erp_mrsul.db');

try {
    const db = new Database(dbPath);
    
    console.log('=== CORRIGINDO SISTEMA DE NUMERAÇÃO ===');
    
    // Verificar tabelas existentes
    const tables = db.prepare(`
        SELECT name FROM sqlite_master 
        WHERE type = 'table' 
        AND name LIKE '%pedido%'
    `).all();
    
    console.log('Tabelas de pedidos existentes:');
    tables.forEach(table => console.log(`- ${table.name}`));
    
    // Criar tabela de numeração se não existir
    console.log('\nCriando tabela de numeração...');
    db.exec(`
        CREATE TABLE IF NOT EXISTS pedidos_compra_numeracao (
            id INTEGER PRIMARY KEY,
            prefixo TEXT NOT NULL DEFAULT 'PC',
            ano TEXT NOT NULL,
            ultimo_numero INTEGER NOT NULL DEFAULT 0
        );
    `);
    
    // Inserir configuração inicial
    const count = db.prepare(`SELECT COUNT(*) as count FROM pedidos_compra_numeracao`).get();
    if (count.count === 0) {
        console.log('Inserindo configuração inicial...');
        db.exec(`
            INSERT INTO pedidos_compra_numeracao (id, prefixo, ano, ultimo_numero)
            VALUES (1, 'PC', strftime('%Y', 'now'), 0);
        `);
    }
    
    // Remover triggers problemáticos
    console.log('Removendo triggers problemáticos...');
    db.exec(`DROP TRIGGER IF EXISTS tr_gerar_numero_pedido;`);
    db.exec(`DROP TRIGGER IF EXISTS tr_gerar_numero_pedido_after;`);
    db.exec(`DROP TRIGGER IF EXISTS atualizar_historico_pedido;`);
    db.exec(`DROP TRIGGER IF EXISTS tr_historico_pedido_update;`);
    
    // Permitir que numero_pedido seja NULL temporariamente
    console.log('Ajustando coluna numero_pedido...');
    
    // Como SQLite não permite ALTER COLUMN diretamente, vamos criar uma nova tabela
    db.exec(`
        CREATE TABLE IF NOT EXISTS pedidos_compra_new (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numero_pedido TEXT,
            fornecedor_id INTEGER NOT NULL,
            data_pedido TEXT NOT NULL,
            data_entrega_prevista TEXT,
            status TEXT NOT NULL DEFAULT 'orcamento',
            prioridade TEXT DEFAULT 'normal',
            valor_total REAL NOT NULL DEFAULT 0,
            valor_desconto REAL DEFAULT 0,
            valor_impostos REAL DEFAULT 0,
            valor_frete REAL DEFAULT 0,
            condicoes_pagamento TEXT,
            observacoes TEXT,
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            updated_at TEXT NOT NULL DEFAULT (datetime('now')),
            aprovado_por TEXT,
            data_aprovacao TEXT,
            FOREIGN KEY (fornecedor_id) REFERENCES fornecedores (id)
        );
    `);
    
    // Copiar dados existentes
    const existingData = db.prepare(`SELECT COUNT(*) as count FROM pedidos_compra`).get();
    console.log(`Dados existentes: ${existingData.count} pedidos`);
    
    if (existingData.count > 0) {
        console.log('Copiando dados existentes...');
        db.exec(`
            INSERT INTO pedidos_compra_new 
            SELECT * FROM pedidos_compra;
        `);
        
        // Substituir tabela antiga
        db.exec(`DROP TABLE pedidos_compra;`);
        db.exec(`ALTER TABLE pedidos_compra_new RENAME TO pedidos_compra;`);
    } else {
        // Se não há dados, simplesmente renomear
        db.exec(`DROP TABLE IF EXISTS pedidos_compra;`);
        db.exec(`ALTER TABLE pedidos_compra_new RENAME TO pedidos_compra;`);
    }
    
    // Criar trigger funcional
    console.log('Criando trigger de numeração...');
    db.exec(`
        CREATE TRIGGER tr_numero_pedido_after_insert
        AFTER INSERT ON pedidos_compra
        WHEN NEW.numero_pedido IS NULL
        BEGIN
            -- Atualizar contador
            UPDATE pedidos_compra_numeracao 
            SET ultimo_numero = ultimo_numero + 1,
                ano = strftime('%Y', 'now')
            WHERE id = 1;
            
            -- Gerar número do pedido
            UPDATE pedidos_compra 
            SET numero_pedido = (
                SELECT 'PC-' || strftime('%Y', 'now') || '-' || printf('%04d', ultimo_numero) 
                FROM pedidos_compra_numeracao 
                WHERE id = 1
            )
            WHERE id = NEW.id;
        END;
    `);
    
    console.log('✅ Sistema de numeração corrigido!');
    
    // Teste
    console.log('\n=== TESTE DO SISTEMA ===');
    
    const testResult = db.prepare(`
        INSERT INTO pedidos_compra (fornecedor_id, data_pedido, status, valor_total, observacoes)
        VALUES (1, '2024-01-15', 'orcamento', 1500.00, 'TESTE AUTOMATICO')
    `).run();
    
    const testPedido = db.prepare(`
        SELECT id, numero_pedido, status, valor_total 
        FROM pedidos_compra 
        WHERE id = ?
    `).get(testResult.lastInsertRowid);
    
    console.log('Pedido de teste criado:', testPedido);
    
    if (testPedido.numero_pedido) {
        console.log('✅ SUCCESS! Numeração automática funcionando:', testPedido.numero_pedido);
    } else {
        console.log('❌ FALHA! Numeração não foi gerada');
    }
    
    // Verificar configuração de numeração
    const numeracao = db.prepare(`SELECT * FROM pedidos_compra_numeracao`).get();
    console.log('Estado da numeração:', numeracao);
    
    db.close();
    console.log('=== CORREÇÃO CONCLUÍDA ===');
    
} catch (error) {
    console.error('❌ Erro:', error);
}

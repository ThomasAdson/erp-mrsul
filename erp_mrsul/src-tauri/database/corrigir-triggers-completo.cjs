const Database = require('better-sqlite3');
const path = require('path');

// Caminho para o banco de dados
const dbPath = path.join(__dirname, 'erp_mrsul.db');

try {
    const db = new Database(dbPath);
    
    console.log('=== VERIFICANDO E CORRIGINDO TRIGGERS ===');
    
    // Verificar triggers existentes
    const triggers = db.prepare(`
        SELECT name, sql 
        FROM sqlite_master 
        WHERE type = 'trigger' 
        AND name LIKE '%pedido%'
    `).all();
    
    console.log('Triggers relacionados a pedidos:');
    triggers.forEach(trigger => {
        console.log(`- ${trigger.name}`);
        console.log(`  SQL: ${trigger.sql.substring(0, 100)}...`);
    });
    
    // Remover triggers problemáticos
    console.log('\nRemoção de triggers problemáticos...');
    db.exec(`DROP TRIGGER IF EXISTS tr_gerar_numero_pedido;`);
    db.exec(`DROP TRIGGER IF EXISTS atualizar_historico_pedido;`);
    
    // Verificar se a tabela de numeração existe
    const numeracao = db.prepare(`
        SELECT * FROM pedidos_compra_numeracao
    `).all();
    
    console.log('Estado da numeração:', numeracao);
    
    // Se não existe, inserir
    if (numeracao.length === 0) {
        console.log('Inserindo configuração de numeração...');
        db.exec(`
            INSERT INTO pedidos_compra_numeracao (id, prefixo, ano, ultimo_numero)
            VALUES (1, 'PC', strftime('%Y', 'now'), 0);
        `);
    }
    
    // Criar trigger simples e funcional
    console.log('Criando trigger funcional...');
    db.exec(`
        CREATE TRIGGER tr_gerar_numero_pedido_after
        AFTER INSERT ON pedidos_compra
        WHEN NEW.numero_pedido IS NULL OR NEW.numero_pedido = ''
        BEGIN
            -- Atualizar numeração
            UPDATE pedidos_compra_numeracao 
            SET ultimo_numero = ultimo_numero + 1,
                ano = CASE 
                    WHEN strftime('%Y', 'now') != ano THEN strftime('%Y', 'now')
                    ELSE ano 
                END
            WHERE id = 1;
            
            -- Se mudou o ano, resetar numeração
            UPDATE pedidos_compra_numeracao 
            SET ultimo_numero = 1
            WHERE id = 1 AND strftime('%Y', 'now') != ano;
            
            -- Atualizar o número do pedido
            UPDATE pedidos_compra 
            SET numero_pedido = (
                SELECT prefixo || '-' || strftime('%Y', 'now') || '-' || printf('%04d', ultimo_numero) 
                FROM pedidos_compra_numeracao 
                WHERE id = 1
            )
            WHERE id = NEW.id;
        END;
    `);
    
    // Criar trigger de histórico
    console.log('Criando trigger de histórico...');
    db.exec(`
        CREATE TRIGGER tr_historico_pedido_update
        AFTER UPDATE ON pedidos_compra
        BEGIN
            INSERT INTO pedidos_compra_historico (
                pedido_id, campo_alterado, valor_anterior, valor_novo, 
                usuario_alteracao, data_alteracao
            ) VALUES (
                NEW.id, 'status', OLD.status, NEW.status, 
                'sistema', datetime('now')
            )
            WHERE OLD.status != NEW.status;
        END;
    `);
    
    console.log('✅ Triggers corrigidos com sucesso!');
    
    // Teste do trigger
    console.log('\n=== TESTANDO TRIGGERS ===');
    
    // Limpar dados de teste anteriores
    db.exec(`DELETE FROM pedidos_compra WHERE observacoes LIKE '%TESTE%';`);
    
    // Inserir um pedido de teste
    const testInsert = db.prepare(`
        INSERT INTO pedidos_compra (
            fornecedor_id, data_pedido, status, valor_total, observacoes
        ) VALUES (?, ?, ?, ?, ?)
    `);
    
    const result = testInsert.run(1, '2024-01-15', 'orcamento', 1500.00, 'TESTE - Pedido automático');
    
    console.log('Pedido inserido com ID:', result.lastInsertRowid);
    
    // Verificar se o número foi gerado
    const pedidoTeste = db.prepare(`
        SELECT id, numero_pedido, fornecedor_id, status, valor_total 
        FROM pedidos_compra 
        WHERE id = ?
    `).get(result.lastInsertRowid);
    
    console.log('Pedido de teste:', pedidoTeste);
    
    if (pedidoTeste.numero_pedido) {
        console.log('✅ Trigger funcionando! Número gerado:', pedidoTeste.numero_pedido);
    } else {
        console.log('❌ Trigger não funcionou - número não gerado');
    }
    
    db.close();
    console.log('=== CORREÇÃO CONCLUÍDA ===');
    
} catch (error) {
    console.error('❌ Erro ao corrigir triggers:', error);
}

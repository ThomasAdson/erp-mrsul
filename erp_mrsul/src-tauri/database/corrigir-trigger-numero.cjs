const Database = require('better-sqlite3');
const path = require('path');

// Caminho para o banco de dados
const dbPath = path.join(__dirname, 'erp_mrsul.db');

try {
    const db = new Database(dbPath);
    
    console.log('=== CORRIGINDO TRIGGER DE NUMERAÇÃO ===');
    
    // Remover o trigger problemático
    console.log('Removendo trigger problemático...');
    db.exec(`DROP TRIGGER IF EXISTS tr_gerar_numero_pedido;`);
    
    // Criar trigger correto usando UPDATE em vez de tentar modificar NEW
    console.log('Criando trigger correto...');
    db.exec(`
        CREATE TRIGGER tr_gerar_numero_pedido
        AFTER INSERT ON pedidos_compra
        WHEN NEW.numero_pedido IS NULL OR NEW.numero_pedido = ''
        BEGIN
            -- Atualizar a numeração
            UPDATE pedidos_compra_numeracao 
            SET ano = CASE 
                    WHEN strftime('%Y', 'now') != ano THEN strftime('%Y', 'now')
                    ELSE ano 
                END,
                ultimo_numero = CASE
                    WHEN strftime('%Y', 'now') != ano THEN 1
                    ELSE ultimo_numero + 1
                END
            WHERE id = 1;
            
            -- Atualizar o número do pedido recém-inserido
            UPDATE pedidos_compra 
            SET numero_pedido = (
                SELECT prefixo || '-' || ano || '-' || printf('%04d', ultimo_numero) 
                FROM pedidos_compra_numeracao 
                WHERE id = 1
            )
            WHERE id = NEW.id AND (numero_pedido IS NULL OR numero_pedido = '');
        END;
    `);
    
    console.log('✅ Trigger corrigido com sucesso!');
    
    // Verificar se o trigger foi criado corretamente
    const triggers = db.prepare(`
        SELECT name, sql 
        FROM sqlite_master 
        WHERE type = 'trigger' 
        AND name = 'tr_gerar_numero_pedido'
    `).all();
    
    console.log('Trigger atualizado:', triggers);
    
    db.close();
    console.log('=== CORREÇÃO CONCLUÍDA ===');
    
} catch (error) {
    console.error('❌ Erro ao corrigir trigger:', error);
}

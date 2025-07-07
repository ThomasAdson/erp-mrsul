const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Implementando triggers dos pedidos de compra: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('=== CRIANDO TRIGGERS PARA PEDIDOS DE COMPRA ===');
    
    // Trigger para calcular valor total quando um item é inserido
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_calcular_valor_pedido_insert
        AFTER INSERT ON pedidos_compra_itens
        BEGIN
            UPDATE pedidos_compra
            SET valor_total = (
                SELECT COALESCE(SUM(valor_total), 0) 
                FROM pedidos_compra_itens 
                WHERE pedido_id = NEW.pedido_id
            ),
            valor_total_final = (
                SELECT COALESCE(SUM(valor_total), 0) 
                FROM pedidos_compra_itens 
                WHERE pedido_id = NEW.pedido_id
            ),
            updated_at = datetime('now', 'localtime')
            WHERE id = NEW.pedido_id;
        END;
    `);
    
    // Trigger para calcular valor total quando um item é atualizado
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_calcular_valor_pedido_update
        AFTER UPDATE ON pedidos_compra_itens
        BEGIN
            UPDATE pedidos_compra
            SET valor_total = (
                SELECT COALESCE(SUM(valor_total), 0) 
                FROM pedidos_compra_itens 
                WHERE pedido_id = NEW.pedido_id
            ),
            valor_total_final = (
                SELECT COALESCE(SUM(valor_total), 0) 
                FROM pedidos_compra_itens 
                WHERE pedido_id = NEW.pedido_id
            ),
            updated_at = datetime('now', 'localtime')
            WHERE id = NEW.pedido_id;
        END;
    `);
    
    // Trigger para calcular valor total quando um item é removido
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_calcular_valor_pedido_delete
        AFTER DELETE ON pedidos_compra_itens
        BEGIN
            UPDATE pedidos_compra
            SET valor_total = (
                SELECT COALESCE(SUM(valor_total), 0) 
                FROM pedidos_compra_itens 
                WHERE pedido_id = OLD.pedido_id
            ),
            valor_total_final = (
                SELECT COALESCE(SUM(valor_total), 0) 
                FROM pedidos_compra_itens 
                WHERE pedido_id = OLD.pedido_id
            ),
            updated_at = datetime('now', 'localtime')
            WHERE id = OLD.pedido_id;
        END;
    `);
    
    console.log('✅ Triggers criados com sucesso');
    
    console.log('\n=== VERIFICANDO TRIGGERS CRIADOS ===');
    const triggers = db.prepare(`
        SELECT name, sql FROM sqlite_master 
        WHERE type='trigger' AND name LIKE 'tr_calcular_valor_pedido%'
    `).all();
    
    triggers.forEach(trigger => {
        console.log(`✅ Trigger: ${trigger.name}`);
    });
    
    console.log('\n=== TESTANDO TRIGGERS ===');
    // Simular uma atualização para disparar o trigger
    db.exec(`
        UPDATE pedidos_compra_itens 
        SET valor_total = quantidade * preco_unitario 
        WHERE pedido_id = 6
    `);
    
    // Verificar resultado
    const resultado = db.prepare(`
        SELECT id, numero_pedido, valor_total, valor_total_final
        FROM pedidos_compra 
        WHERE id = 6
    `).get();
    
    console.log('Teste do Trigger - Pedido 6:');
    console.log(`Valor Total: ${resultado.valor_total}`);
    console.log(`Valor Total Final: ${resultado.valor_total_final}`);
    
    db.close();
    console.log('\n✅ Implementação concluída');
    
} catch (error) {
    console.error('❌ Erro:', error.message);
    console.error(error.stack);
}

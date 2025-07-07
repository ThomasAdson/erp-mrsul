const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Verificando triggers: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('=== TRIGGERS EXISTENTES ===');
    const triggers = db.prepare(`
        SELECT name, sql FROM sqlite_master 
        WHERE type='trigger'
        ORDER BY name
    `).all();
    
    triggers.forEach(trigger => {
        console.log(`\n--- Trigger: ${trigger.name} ---`);
        console.log(trigger.sql);
    });
    
    console.log('\n=== TESTANDO CÁLCULO MANUAL ===');
    // Testar se o cálculo está funcionando manualmente
    const pedido6 = db.prepare(`
        SELECT pc.id, pc.numero_pedido, pc.valor_total, pc.valor_total_final,
               SUM(pci.valor_total) as total_calculado
        FROM pedidos_compra pc
        LEFT JOIN pedidos_compra_itens pci ON pc.id = pci.pedido_id
        WHERE pc.id = 6
        GROUP BY pc.id
    `).get();
    
    console.log('Pedido 6 - Análise:');
    console.log(`Valor Total no BD: ${pedido6.valor_total}`);
    console.log(`Valor Total Final no BD: ${pedido6.valor_total_final}`);
    console.log(`Total Calculado dos Itens: ${pedido6.total_calculado}`);
    
    // Tentar corrigir manualmente
    console.log('\n=== CORRIGINDO VALOR TOTAL MANUALMENTE ===');
    db.exec(`
        UPDATE pedidos_compra 
        SET valor_total = (
            SELECT COALESCE(SUM(valor_total), 0) 
            FROM pedidos_compra_itens 
            WHERE pedido_id = pedidos_compra.id
        ),
        valor_total_final = (
            SELECT COALESCE(SUM(valor_total), 0) 
            FROM pedidos_compra_itens 
            WHERE pedido_id = pedidos_compra.id
        ),
        updated_at = datetime('now', 'localtime')
        WHERE id >= 6
    `);
    
    console.log('✅ Valores corrigidos');
    
    // Verificar resultado
    const pedidoCorrigido = db.prepare(`
        SELECT id, numero_pedido, valor_total, valor_total_final
        FROM pedidos_compra 
        WHERE id = 6
    `).get();
    
    console.log('\nPedido 6 - Após correção:');
    console.log(`Valor Total: ${pedidoCorrigido.valor_total}`);
    console.log(`Valor Total Final: ${pedidoCorrigido.valor_total_final}`);
    
    db.close();
    console.log('\n✅ Verificação concluída');
    
} catch (error) {
    console.error('❌ Erro:', error.message);
}

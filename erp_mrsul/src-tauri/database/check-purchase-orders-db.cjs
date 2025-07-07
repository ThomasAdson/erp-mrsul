const Database = require('better-sqlite3');
const path = require('path');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Conectando ao banco: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('\n=== VERIFICANDO TABELAS PEDIDOS_COMPRA ===');
    
    // Verificar se as tabelas existem
    const tables = db.prepare(`
        SELECT name FROM sqlite_master 
        WHERE type='table' AND name LIKE 'pedidos_compra%'
        ORDER BY name
    `).all();
    
    console.log('Tabelas encontradas:', tables.map(t => t.name));
    
    if (tables.length === 0) {
        console.log('\n❌ Nenhuma tabela de pedidos_compra encontrada!');
        db.close();
        return;
    }
    
    // Verificar estrutura da tabela pedidos_compra_itens
    if (tables.some(t => t.name === 'pedidos_compra_itens')) {
        console.log('\n=== ESTRUTURA pedidos_compra_itens ===');
        const schema = db.prepare(`
            SELECT sql FROM sqlite_master 
            WHERE type='table' AND name='pedidos_compra_itens'
        `).get();
        console.log(schema.sql);
        
        console.log('\n=== DADOS DE EXEMPLO ===');
        const sample = db.prepare('SELECT * FROM pedidos_compra_itens LIMIT 3').all();
        console.log(sample);
        
        console.log('\n=== TIPOS DE DADOS DAS COLUNAS ===');
        const pragma = db.prepare('PRAGMA table_info(pedidos_compra_itens)').all();
        pragma.forEach(col => {
            console.log(`${col.name}: ${col.type} (pk: ${col.pk}, notnull: ${col.notnull})`);
        });
    }
    
    // Verificar dados na tabela principal
    if (tables.some(t => t.name === 'pedidos_compra')) {
        console.log('\n=== PEDIDOS_COMPRA PRINCIPAL ===');
        const orders = db.prepare('SELECT id, numero_pedido, fornecedor_id FROM pedidos_compra LIMIT 3').all();
        console.log(orders);
    }
    
    db.close();
    console.log('\n✅ Verificação concluída');
    
} catch (error) {
    console.error('❌ Erro ao acessar o banco:', error.message);
}

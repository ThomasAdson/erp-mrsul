const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Verificando status válidos no banco: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('\n=== CONSTRAINT CHECK DA TABELA pedidos_compra ===');
    const schema = db.prepare(`
        SELECT sql FROM sqlite_master 
        WHERE type='table' AND name='pedidos_compra'
    `).get();
    
    console.log(schema.sql);
    
    console.log('\n=== STATUS ATUAIS NOS DADOS ===');
    const statuses = db.prepare(`
        SELECT DISTINCT status, COUNT(*) as count 
        FROM pedidos_compra 
        GROUP BY status 
        ORDER BY status
    `).all();
    
    console.log(statuses);
    
    db.close();
    console.log('\n✅ Verificação concluída');
    
} catch (error) {
    console.error('❌ Erro ao acessar o banco:', error.message);
}

const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Investigando triggers: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('=== TRIGGERS EXISTENTES ===');
    const triggers = db.prepare(`
        SELECT name, sql FROM sqlite_master 
        WHERE type='trigger' AND tbl_name='pedidos_compra'
    `).all();
    
    triggers.forEach(trigger => {
        console.log(`\nTrigger: ${trigger.name}`);
        console.log(trigger.sql);
    });
    
    console.log('\n=== TODOS OS TRIGGERS ===');
    const allTriggers = db.prepare(`
        SELECT name, tbl_name, sql FROM sqlite_master 
        WHERE type='trigger'
    `).all();
    
    allTriggers.forEach(trigger => {
        console.log(`\nTrigger: ${trigger.name} (tabela: ${trigger.tbl_name})`);
        console.log(trigger.sql);
    });
    
    db.close();
    console.log('\n✅ Investigação concluída');
    
} catch (error) {
    console.error('❌ Erro ao investigar triggers:', error.message);
}

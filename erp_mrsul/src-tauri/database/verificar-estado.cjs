const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Verificando estado do banco: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('=== TABELAS EXISTENTES ===');
    const tables = db.prepare(`SELECT name FROM sqlite_master WHERE type='table'`).all();
    tables.forEach(t => console.log(t.name));
    
    // Verificar se pedidos_compra existe
    if (tables.some(t => t.name === 'pedidos_compra')) {
        console.log('\n=== DADOS DA TABELA PEDIDOS_COMPRA ===');
        const count = db.prepare(`SELECT COUNT(*) as count FROM pedidos_compra`).get();
        console.log(`Registros: ${count.count}`);
    } else {
        console.log('\n⚠️  Tabela pedidos_compra não encontrada!');
    }
    
    db.close();
    console.log('\n✅ Verificação concluída');
    
} catch (error) {
    console.error('❌ Erro ao verificar banco:', error.message);
}

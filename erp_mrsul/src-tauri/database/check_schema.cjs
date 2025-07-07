const Database = require('better-sqlite3');
const db = new Database('erp_mrsul.db');

console.log('=== SCHEMA pedidos_compra_itens ===');
const schema = db.prepare('SELECT sql FROM sqlite_master WHERE type=? AND name=?').get('table', 'pedidos_compra_itens');
console.log(schema.sql);

console.log('\n=== SAMPLE DATA ===');
const sample = db.prepare('SELECT * FROM pedidos_compra_itens LIMIT 2').all();
console.log(sample);

console.log('\n=== COLUMN INFO ===');
const columns = db.prepare('PRAGMA table_info(pedidos_compra_itens)').all();
console.log(columns);

db.close();

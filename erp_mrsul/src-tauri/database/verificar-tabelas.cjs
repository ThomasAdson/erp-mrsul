const Database = require('better-sqlite3');
const db = new Database('X:/Thomas/ERP/erp_mrsul.db');

console.log('=== VERIFICAÇÃO DAS TABELAS ===');
console.log('Tabelas de pedidos:', db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'pedidos%'").all());

console.log('\n=== TRIGGERS EXISTENTES ===');
console.log('Triggers:', db.prepare("SELECT name, sql FROM sqlite_master WHERE type='trigger'").all());

db.close();

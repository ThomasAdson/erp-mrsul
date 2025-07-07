const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Verificando tipos de ID: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('=== SCHEMA FORNECEDORES ===');
    const fornecedorSchema = db.prepare(`SELECT sql FROM sqlite_master WHERE type='table' AND name='fornecedores'`).get();
    console.log(fornecedorSchema.sql);
    
    console.log('\n=== SCHEMA PEDIDOS_COMPRA ===');
    const pedidoSchema = db.prepare(`SELECT sql FROM sqlite_master WHERE type='table' AND name='pedidos_compra'`).get();
    console.log(pedidoSchema.sql);
    
    console.log('\n=== TIPOS DE ID NOS DADOS ===');
    const fornecedores = db.prepare(`SELECT id, nome_fantasia FROM fornecedores LIMIT 3`).all();
    console.log('Fornecedores:');
    fornecedores.forEach(f => console.log(`ID: ${f.id} (type: ${typeof f.id}), Nome: ${f.nome_fantasia}`));
    
    const pedidos = db.prepare(`SELECT id, numero_pedido, fornecedor_id FROM pedidos_compra LIMIT 3`).all();
    console.log('\nPedidos:');
    pedidos.forEach(p => console.log(`ID: ${p.id} (type: ${typeof p.id}), Numero: ${p.numero_pedido}, Fornecedor_ID: ${p.fornecedor_id} (type: ${typeof p.fornecedor_id})`));
    
    db.close();
    console.log('\n✅ Verificação concluída');
    
} catch (error) {
    console.error('❌ Erro ao acessar o banco:', error.message);
}

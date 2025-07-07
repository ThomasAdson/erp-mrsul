const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Debug completo dos pedidos: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('=== PEDIDOS EXISTENTES ===');
    const pedidos = db.prepare(`
        SELECT id, numero_pedido, fornecedor_id, status, valor_total, valor_total_final, 
               data_pedido, observacoes
        FROM pedidos_compra 
        ORDER BY id DESC
    `).all();
    
    pedidos.forEach(p => {
        console.log(`\n--- Pedido ${p.numero_pedido} ---`);
        console.log(`ID: ${p.id} (${typeof p.id})`);
        console.log(`Fornecedor ID: ${p.fornecedor_id} (${typeof p.fornecedor_id})`);
        console.log(`Status: ${p.status}`);
        console.log(`Valor Total: ${p.valor_total}`);
        console.log(`Valor Total Final: ${p.valor_total_final}`);
        console.log(`Data: ${p.data_pedido}`);
        console.log(`Observações: ${p.observacoes}`);
    });
    
    console.log('\n=== ITENS DOS PEDIDOS ===');
    const itens = db.prepare(`
        SELECT pci.id, pci.pedido_id, pci.material_id, pci.quantidade, 
               pci.preco_unitario, pci.valor_total,
               pc.numero_pedido
        FROM pedidos_compra_itens pci
        JOIN pedidos_compra pc ON pci.pedido_id = pc.id
        ORDER BY pci.pedido_id DESC
    `).all();
    
    itens.forEach(i => {
        console.log(`\n--- Item do Pedido ${i.numero_pedido} ---`);
        console.log(`Item ID: ${i.id} (${typeof i.id})`);
        console.log(`Pedido ID: ${i.pedido_id} (${typeof i.pedido_id})`);
        console.log(`Material ID: ${i.material_id} (${typeof i.material_id})`);
        console.log(`Quantidade: ${i.quantidade}`);
        console.log(`Preço Unit.: ${i.preco_unitario}`);
        console.log(`Valor Total: ${i.valor_total}`);
    });
    
    console.log('\n=== FORNECEDORES ===');
    const fornecedores = db.prepare(`
        SELECT id, nome_fantasia, cnpj 
        FROM fornecedores 
        ORDER BY nome_fantasia
    `).all();
    
    fornecedores.forEach(f => {
        console.log(`ID: ${f.id} (${typeof f.id}), Nome: ${f.nome_fantasia}, CNPJ: ${f.cnpj}`);
    });
    
    console.log('\n=== MATERIAIS (ALGUNS) ===');
    const materiais = db.prepare(`
        SELECT id, codigo_material_completo, descricao_completa
        FROM materiais 
        LIMIT 5
    `).all();
    
    materiais.forEach(m => {
        console.log(`ID: ${m.id} (${typeof m.id}), Código: ${m.codigo_material_completo}`);
    });
    
    db.close();
    console.log('\n✅ Debug concluído');
    
} catch (error) {
    console.error('❌ Erro:', error.message);
}

const Database = require('better-sqlite3');

// Caminho para o banco de dados
const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';

console.log('🧪 Testando criação de pedidos de compra...');
console.log(`📍 Caminho do banco: ${dbPath}`);

try {
    const db = new Database(dbPath);
    console.log('✅ Conectado ao banco SQLite');

    // 1. Verificar se há fornecedores disponíveis
    console.log('\n👥 Verificando fornecedores disponíveis...');
    const fornecedores = db.prepare('SELECT id, nome_fantasia FROM fornecedores LIMIT 5').all();
    
    if (fornecedores.length === 0) {
        console.log('⚠️  Nenhum fornecedor encontrado. Criando fornecedores de teste...');
        db.exec(`
            INSERT OR IGNORE INTO fornecedores (
                id, nome_fantasia, razao_social, cnpj, endereco, cidade, estado, 
                telefone, email, observacoes
            ) VALUES
            ('FORN001', 'Fornecedor Aço Brasil Ltda', 'Aço Brasil Industrial Ltda', '12.345.678/0001-90', 'Rua Industrial, 123', 'São Paulo', 'SP', '(11) 3456-7890', 'vendas@acobrasil.com.br', 'Fornecedor de materiais ferrosos'),
            ('FORN002', 'Materiais Industriais S.A.', 'Materiais Industriais S.A.', '23.456.789/0001-12', 'Av. das Indústrias, 456', 'Rio de Janeiro', 'RJ', '(21) 2345-6789', 'contato@matindustriais.com.br', 'Distribuidor de materiais diversos');
        `);
        console.log('✅ Fornecedores de teste criados');
        
        // Recarregar fornecedores
        const fornecedores = db.prepare('SELECT id, nome_fantasia FROM fornecedores LIMIT 5').all();
    }

    console.log('📋 Fornecedores disponíveis:');
    fornecedores.forEach((f, index) => {
        console.log(`${index + 1}. ${f.id} - ${f.nome_fantasia}`);
    });

    // 2. Verificar se há materiais disponíveis
    console.log('\n📦 Verificando materiais disponíveis...');
    const materiais = db.prepare('SELECT id, descricao_especificacao FROM materiais LIMIT 5').all();
    
    if (materiais.length === 0) {
        console.log('⚠️  Nenhum material encontrado. Criando materiais de teste...');
        db.exec(`
            INSERT OR IGNORE INTO materiais (
                id, categoria_id, codigo_especificacao, descricao_especificacao,
                material_composicao, unidade_medida, codigo_material_completo,
                descricao_completa, custo_padrao_por_unidade_compra, unidade_compra_padrao
            ) VALUES
            ('MAT001', 'CAT001', 'CH-1020-3', 'Chapa de Aço 1020 - 3mm', 'Aço Carbono 1020', 'KG', 'CH-1020-3-KG', 'Chapa de Aço Carbono 1020 espessura 3mm', 8.50, 'KG'),
            ('MAT002', 'CAT001', 'PU-100x50', 'Perfil U 100x50x4,75mm', 'Aço Carbono', 'M', 'PU-100x50-M', 'Perfil U de aço 100x50x4,75mm', 25.30, 'M');
        `);
        console.log('✅ Materiais de teste criados');
        
        // Recarregar materiais
        const materiais = db.prepare('SELECT id, descricao_especificacao FROM materiais LIMIT 5').all();
    }

    console.log('📋 Materiais disponíveis:');
    materiais.forEach((m, index) => {
        console.log(`${index + 1}. ${m.id} - ${m.descricao_especificacao}`);
    });

    // 3. Verificar estado atual da numeração
    console.log('\n🔢 Estado atual da numeração...');
    const numeracao = db.prepare('SELECT * FROM pedidos_compra_numeracao WHERE id = 1').get();
    if (numeracao) {
        console.log(`   - Último número: ${numeracao.ultimo_numero}`);
        console.log(`   - Ano: ${numeracao.ano}`);
        console.log(`   - Prefixo: ${numeracao.prefixo}`);
    } else {
        console.log('⚠️  Configuração de numeração não encontrada');
    }

    // 4. Simular criação de pedido usando a mesma lógica do Rust
    console.log('\n🚀 Simulando criação de pedido...');
    
    const currentYear = new Date().getFullYear();
    
    // Buscar configuração atual (mesma lógica do Rust)
    let atual = db.prepare('SELECT ultimo_numero, ano, prefixo FROM pedidos_compra_numeracao WHERE id = 1').get();
    
    if (!atual) {
        console.log('📝 Criando configuração inicial...');
        db.exec(`
            INSERT INTO pedidos_compra_numeracao (id, ultimo_numero, ano, prefixo) 
            VALUES (1, 0, ${currentYear}, 'PC')
        `);
        atual = { ultimo_numero: 0, ano: currentYear, prefixo: 'PC' };
    }

    // Determinar próximo número
    const [novoNumero, novoAno] = atual.ano !== currentYear ? [1, currentYear] : [atual.ultimo_numero + 1, atual.ano];
    
    // Atualizar numeração
    db.prepare(`
        UPDATE pedidos_compra_numeracao 
        SET ultimo_numero = ?, ano = ?
        WHERE id = 1
    `).run(novoNumero, novoAno);

    // Gerar número do pedido
    const numeroPedido = `${atual.prefixo}-${novoAno}-${novoNumero.toString().padStart(4, '0')}`;
    
    console.log(`✅ Próximo número gerado: ${numeroPedido}`);

    // 5. Criar pedido de teste
    console.log('\n📝 Criando pedido de teste...');
    
    const fornecedorId = fornecedores[0].id;
    const dataAtual = new Date().toISOString().split('T')[0];
    const dataEntrega = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const result = db.prepare(`
        INSERT INTO pedidos_compra (
            numero_pedido, fornecedor_id, data_pedido, 
            data_entrega_prevista, status, observacoes, 
            created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
        numeroPedido,
        fornecedorId,
        dataAtual,
        dataEntrega,
        'rascunho',
        'Pedido de teste criado via script',
        new Date().toISOString(),
        new Date().toISOString()
    );

    const pedidoId = result.lastInsertRowid;
    console.log(`✅ Pedido criado com ID: ${pedidoId}`);

    // Adicionar itens
    if (materiais.length > 0) {
        const materialId = materiais[0].id;
        const quantidade = 50;
        const precoUnitario = 10.00;
        const valorTotal = quantidade * precoUnitario;

        db.prepare(`
            INSERT INTO pedidos_compra_itens (
                pedido_id, material_id, quantidade, preco_unitario,
                valor_total, observacoes, created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `).run(
            pedidoId,
            materialId,
            quantidade,
            precoUnitario,
            valorTotal,
            'Item de teste',
            new Date().toISOString(),
            new Date().toISOString()
        );

        console.log(`✅ Item adicionado: ${quantidade} x ${materialId} = R$ ${valorTotal.toFixed(2)}`);
    }

    // 6. Verificar resultado
    console.log('\n📋 Verificando pedido criado...');
    const pedidoCriado = db.prepare(`
        SELECT p.*, f.nome_fantasia as fornecedor_nome
        FROM pedidos_compra p
        LEFT JOIN fornecedores f ON p.fornecedor_id = f.id
        WHERE p.id = ?
    `).get(pedidoId);

    if (pedidoCriado) {
        console.log(`✅ Pedido ${pedidoCriado.numero_pedido} criado com sucesso:`);
        console.log(`   - Fornecedor: ${pedidoCriado.fornecedor_nome} (${pedidoCriado.fornecedor_id})`);
        console.log(`   - Status: ${pedidoCriado.status}`);
        console.log(`   - Data do pedido: ${pedidoCriado.data_pedido}`);
        console.log(`   - Entrega prevista: ${pedidoCriado.data_entrega_prevista}`);
        console.log(`   - Valor total: R$ ${(pedidoCriado.valor_total_final || 0).toFixed(2)}`);
        
        const itens = db.prepare(`
            SELECT pi.*, m.descricao_especificacao as material_descricao
            FROM pedidos_compra_itens pi
            LEFT JOIN materiais m ON pi.material_id = m.id
            WHERE pi.pedido_id = ?
        `).all(pedidoId);

        console.log(`   - Itens (${itens.length}):`);
        itens.forEach((item, index) => {
            console.log(`     ${index + 1}. ${item.material_descricao}: ${item.quantidade} x R$ ${item.preco_unitario} = R$ ${item.valor_total}`);
        });
    }

    // 7. Mostrar estatísticas finais
    console.log('\n📊 ESTATÍSTICAS ATUAIS:');
    console.log('========================');
    
    const stats = db.prepare(`
        SELECT 
            COUNT(*) as total_pedidos,
            COUNT(CASE WHEN numero_pedido IS NOT NULL AND numero_pedido != '' THEN 1 END) as pedidos_com_numero
        FROM pedidos_compra
    `).get();

    console.log(`📦 Total de pedidos: ${stats.total_pedidos}`);
    console.log(`🔢 Pedidos com número: ${stats.pedidos_com_numero}`);

    const ultimosNumeros = db.prepare(`
        SELECT numero_pedido, status, data_pedido 
        FROM pedidos_compra 
        ORDER BY id DESC 
        LIMIT 3
    `).all();

    console.log('\n📋 Últimos pedidos criados:');
    ultimosNumeros.forEach((pedido, index) => {
        console.log(`${index + 1}. ${pedido.numero_pedido} - ${pedido.status} (${pedido.data_pedido})`);
    });

    db.close();
    console.log('\n🔒 Conexão fechada com sucesso');
    console.log('✅ Teste concluído com sucesso!');

} catch (error) {
    console.error('❌ Erro durante o teste:', error);
    process.exit(1);
}

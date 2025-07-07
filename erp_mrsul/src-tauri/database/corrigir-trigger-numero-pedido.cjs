const Database = require('better-sqlite3');

// Caminho para o banco de dados
const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';

console.log('🔧 Corrigindo trigger problemático do número do pedido...');
console.log(`📍 Caminho do banco: ${dbPath}`);

try {
    const db = new Database(dbPath);
    console.log('✅ Conectado ao banco SQLite');

    // 1. Verificar se o trigger problemático existe
    const triggerExists = db.prepare(`
        SELECT name FROM sqlite_master 
        WHERE type='trigger' AND name='tr_gerar_numero_pedido'
    `).get();

    if (triggerExists) {
        console.log('🗑️  Removendo trigger problemático tr_gerar_numero_pedido...');
        db.exec('DROP TRIGGER IF EXISTS tr_gerar_numero_pedido');
        console.log('✅ Trigger removido com sucesso');
    } else {
        console.log('ℹ️  Trigger tr_gerar_numero_pedido não encontrado');
    }

    // 2. Verificar se a tabela de numeração existe e tem dados
    const numeracaoExists = db.prepare(`
        SELECT name FROM sqlite_master 
        WHERE type='table' AND name='pedidos_compra_numeracao'
    `).get();

    if (numeracaoExists) {
        const numeracao = db.prepare('SELECT * FROM pedidos_compra_numeracao WHERE id = 1').get();
        if (numeracao) {
            console.log(`📊 Configuração atual da numeração:`);
            console.log(`   - Último número: ${numeracao.ultimo_numero}`);
            console.log(`   - Ano: ${numeracao.ano}`);
            console.log(`   - Prefixo: ${numeracao.prefixo}`);
        } else {
            console.log('📝 Inserindo configuração inicial da numeração...');
            db.exec(`
                INSERT INTO pedidos_compra_numeracao (id, ultimo_numero, ano, prefixo) 
                VALUES (1, 0, strftime('%Y', 'now'), 'PC');
            `);
            console.log('✅ Configuração inicial inserida');
        }
    } else {
        console.log('📝 Criando tabela de numeração...');
        db.exec(`
            CREATE TABLE pedidos_compra_numeracao (
                id INTEGER PRIMARY KEY DEFAULT 1,
                ultimo_numero INTEGER DEFAULT 0,
                ano INTEGER DEFAULT 0,
                prefixo TEXT DEFAULT 'PC',
                CHECK (id = 1)
            );
        `);
        
        db.exec(`
            INSERT INTO pedidos_compra_numeracao (id, ultimo_numero, ano, prefixo) 
            VALUES (1, 0, strftime('%Y', 'now'), 'PC');
        `);
        console.log('✅ Tabela de numeração criada e inicializada');
    }

    // 3. Verificar pedidos existentes sem número
    const pedidosSemNumero = db.prepare(`
        SELECT id, numero_pedido FROM pedidos_compra 
        WHERE numero_pedido IS NULL OR numero_pedido = ''
    `).all();

    if (pedidosSemNumero.length > 0) {
        console.log(`🔢 Encontrados ${pedidosSemNumero.length} pedidos sem número. Gerando números...`);
        
        const updateStmt = db.prepare('UPDATE pedidos_compra SET numero_pedido = ? WHERE id = ?');
        const updateNumeracao = db.prepare(`
            UPDATE pedidos_compra_numeracao 
            SET ultimo_numero = ?
            WHERE id = 1
        `);
        
        for (const pedido of pedidosSemNumero) {
            // Obter próximo número
            const numeracao = db.prepare('SELECT * FROM pedidos_compra_numeracao WHERE id = 1').get();
            const novoNumero = numeracao.ultimo_numero + 1;
            const numeroCompleto = `${numeracao.prefixo}-${numeracao.ano}-${novoNumero.toString().padStart(4, '0')}`;
            
            // Atualizar pedido
            updateStmt.run(numeroCompleto, pedido.id);
            
            // Atualizar contador
            updateNumeracao.run(novoNumero);
            
            console.log(`   ✅ Pedido ${pedido.id}: ${numeroCompleto}`);
        }
    } else {
        console.log('ℹ️  Todos os pedidos já possuem número');
    }

    // 4. Verificar triggers restantes
    console.log('\n📋 Triggers ativos para pedidos de compra:');
    const triggers = db.prepare(`
        SELECT name FROM sqlite_master 
        WHERE type='trigger' AND sql LIKE '%pedidos_compra%'
        ORDER BY name
    `).all();

    triggers.forEach((trigger, index) => {
        console.log(`${index + 1}. ${trigger.name}`);
    });

    // 5. Mostrar estatísticas
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

    if (stats.total_pedidos > 0) {
        const ultimosPedidos = db.prepare(`
            SELECT id, numero_pedido, status, data_pedido 
            FROM pedidos_compra 
            ORDER BY id DESC 
            LIMIT 5
        `).all();

        console.log('\n📋 Últimos pedidos:');
        ultimosPedidos.forEach(pedido => {
            console.log(`   ${pedido.numero_pedido} - ${pedido.status} (${pedido.data_pedido})`);
        });
    }

    db.close();
    console.log('\n🔒 Conexão fechada com sucesso');
    console.log('✅ Trigger corrigido com sucesso!');
    console.log('\nℹ️  A partir de agora, os números dos pedidos serão gerados pelo backend Rust.');

} catch (error) {
    console.error('❌ Erro ao corrigir trigger:', error);
    process.exit(1);
}

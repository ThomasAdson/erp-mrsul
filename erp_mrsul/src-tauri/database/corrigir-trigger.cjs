const Database = require('better-sqlite3');

// Caminho para o banco de dados
const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';

console.log('🔧 Corrigindo trigger problemático...');

try {
    const db = new Database(dbPath);
    console.log('✅ Conectado ao banco SQLite');

    // 1. Remover o trigger problemático
    console.log('🗑️ Removendo trigger problemático...');
    db.exec(`DROP TRIGGER IF EXISTS tr_gerar_numero_pedido;`);

    // 2. Criar um trigger correto (mais simples)
    console.log('✨ Criando trigger corrigido...');
    db.exec(`
        CREATE TRIGGER tr_gerar_numero_pedido
        BEFORE INSERT ON pedidos_compra
        WHEN NEW.numero_pedido IS NULL OR NEW.numero_pedido = ''
        BEGIN
            -- Atualizar contador na tabela de numeração
            INSERT OR REPLACE INTO pedidos_compra_numeracao (id, prefixo, ano, ultimo_numero)
            VALUES (
                1,
                'PC',
                strftime('%Y', 'now'),
                COALESCE((
                    SELECT ultimo_numero + 1 
                    FROM pedidos_compra_numeracao 
                    WHERE id = 1 AND ano = strftime('%Y', 'now')
                ), 1)
            );
        END;
    `);

    // 3. Vamos criar uma função mais simples no código Rust para gerar o número
    // Por enquanto, vamos desabilitar o trigger automático e fazer manual

    console.log('✅ Trigger corrigido com sucesso!');
    
    // 4. Verificar se a tabela de numeração existe e inicializar
    console.log('📋 Verificando tabela de numeração...');
    const count = db.prepare('SELECT COUNT(*) as count FROM pedidos_compra_numeracao').get();
    
    if (count.count === 0) {
        console.log('🏗️ Inicializando tabela de numeração...');
        db.exec(`
            INSERT INTO pedidos_compra_numeracao (id, prefixo, ano, ultimo_numero)
            VALUES (1, 'PC', strftime('%Y', 'now'), 0);
        `);
    }

    console.log('✅ Correção concluída!');
    db.close();

} catch (error) {
    console.error('❌ Erro ao corrigir trigger:', error);
    process.exit(1);
}

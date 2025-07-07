const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Removendo triggers problemáticos: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('=== REMOVENDO TRIGGERS ===');
    
    // Listar todos os triggers
    const triggers = db.prepare(`
        SELECT name, sql FROM sqlite_master 
        WHERE type='trigger'
    `).all();
    
    console.log(`${triggers.length} triggers encontrados`);
    
    // Remover triggers que referenciam pedidos_compra
    triggers.forEach(trigger => {
        if (trigger.sql.includes('pedidos_compra')) {
            console.log(`Removendo trigger: ${trigger.name}`);
            db.exec(`DROP TRIGGER IF EXISTS ${trigger.name}`);
        }
    });
    
    console.log('\n=== RESTAURANDO TABELA ===');
    
    // Agora renomear a tabela temporária
    db.exec(`ALTER TABLE pedidos_compra_temp RENAME TO pedidos_compra;`);
    console.log('✅ Tabela pedidos_compra restaurada');
    
    // Verificar se funcionou
    const finalData = db.prepare(`SELECT COUNT(*) as count FROM pedidos_compra`).get();
    console.log(`Registros na tabela restaurada: ${finalData.count}`);
    
    // Verificar o schema
    console.log('\n=== SCHEMA ATUAL ===');
    const schema = db.prepare(`SELECT sql FROM sqlite_master WHERE type='table' AND name='pedidos_compra'`).get();
    console.log(schema.sql);
    
    db.close();
    console.log('\n✅ Restauração concluída');
    
} catch (error) {
    console.error('❌ Erro ao restaurar tabela:', error.message);
}

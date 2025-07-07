const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log(`Restaurando tabela pedidos_compra: ${dbPath}`);

try {
    const db = new Database(dbPath);
    
    console.log('=== RESTAURANDO TABELA ===');
    
    // Verificar se a tabela temp tem dados
    const tempData = db.prepare(`SELECT COUNT(*) as count FROM pedidos_compra_temp`).get();
    console.log(`Registros na tabela temp: ${tempData.count}`);
    
    if (tempData.count > 0) {
        // Renomear a tabela temporária para a tabela principal
        db.exec(`ALTER TABLE pedidos_compra_temp RENAME TO pedidos_compra;`);
        console.log('✅ Tabela pedidos_compra restaurada');
        
        // Verificar se funcionou
        const finalData = db.prepare(`SELECT COUNT(*) as count FROM pedidos_compra`).get();
        console.log(`Registros na tabela restaurada: ${finalData.count}`);
        
        // Verificar o schema
        console.log('\n=== SCHEMA ATUAL ===');
        const schema = db.prepare(`SELECT sql FROM sqlite_master WHERE type='table' AND name='pedidos_compra'`).get();
        console.log(schema.sql);
        
    } else {
        console.log('⚠️  Tabela temporária vazia, precisamos recriar os dados');
    }
    
    db.close();
    console.log('\n✅ Restauração concluída');
    
} catch (error) {
    console.error('❌ Erro ao restaurar tabela:', error.message);
}

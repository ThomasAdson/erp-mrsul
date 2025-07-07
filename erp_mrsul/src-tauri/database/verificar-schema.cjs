const Database = require('better-sqlite3');

try {
    const db = new Database('X:\\Thomas\\ERP\\erp_mrsul.db');
    
    console.log('📋 Verificando estrutura das tabelas...\n');
    
    // Verificar tabela fornecedores
    try {
        const fornecedoresSchema = db.prepare("PRAGMA table_info(fornecedores)").all();
        console.log('📦 Estrutura da tabela fornecedores:');
        fornecedoresSchema.forEach(col => {
            console.log(`  - ${col.name}: ${col.type} ${col.notnull ? 'NOT NULL' : ''} ${col.dflt_value ? `DEFAULT ${col.dflt_value}` : ''}`);
        });
    } catch (error) {
        console.log('⚠️  Tabela fornecedores não existe ou erro:', error.message);
    }
    
    console.log('\n');
    
    // Verificar tabela materiais
    try {
        const materiaisSchema = db.prepare("PRAGMA table_info(materiais)").all();
        console.log('📦 Estrutura da tabela materiais:');
        materiaisSchema.forEach(col => {
            console.log(`  - ${col.name}: ${col.type} ${col.notnull ? 'NOT NULL' : ''} ${col.dflt_value ? `DEFAULT ${col.dflt_value}` : ''}`);
        });
    } catch (error) {
        console.log('⚠️  Tabela materiais não existe ou erro:', error.message);
    }
    
    console.log('\n');
    
    // Listar todas as tabelas
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name").all();
    console.log('📋 Todas as tabelas no banco:');
    tables.forEach((table, index) => {
        console.log(`${index + 1}. ${table.name}`);
    });
    
    db.close();
} catch (error) {
    console.error('❌ Erro:', error.message);
}

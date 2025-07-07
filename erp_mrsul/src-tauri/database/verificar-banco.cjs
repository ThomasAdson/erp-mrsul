const Database = require('better-sqlite3');
const path = require('path');

// Conectar ao banco de dados
const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
console.log('Caminho do banco:', dbPath);

const db = new Database(dbPath);

console.log('🔍 VERIFICANDO ESTRUTURA DO BANCO');
console.log('================================');

try {
  // Listar todas as tabelas
  console.log('\n1. ✅ Tabelas no banco:');
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('Tabelas encontradas:', tables.map(t => t.name).join(', '));

  // Se existir tabela materiais, mostrar estrutura
  if (tables.find(t => t.name === 'materiais')) {
    console.log('\n2. ✅ Estrutura da tabela materiais:');
    const tableInfo = db.prepare("PRAGMA table_info(materiais)").all();
    tableInfo.forEach(col => {
      console.log(`   ${col.name} | ${col.type} ${col.notnull ? '(NOT NULL)' : ''} ${col.dflt_value ? `DEFAULT ${col.dflt_value}` : ''}`);
    });

    // Contar materiais
    const count = db.prepare("SELECT COUNT(*) as total FROM materiais").get();
    console.log(`\n   Total de materiais: ${count.total}`);
  } else {
    console.log('\n❌ Tabela materiais não encontrada');
  }

} catch (error) {
  console.error('\n❌ Erro:', error.message);
} finally {
  db.close();
}

const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
const db = new Database(dbPath);

console.log('🔍 VERIFICANDO SCHEMA DA TABELA MATERIAIS');
console.log('=========================================');

try {
  // 1. Verificar estrutura da tabela
  console.log('\n1. ✅ Estrutura da tabela materiais:');
  const tableInfo = db.prepare("PRAGMA table_info(materiais)").all();
  tableInfo.forEach(col => {
    console.log(`   ${col.name}: ${col.type} ${col.notnull ? 'NOT NULL' : ''} ${col.pk ? 'PRIMARY KEY' : ''} ${col.dflt_value ? `DEFAULT ${col.dflt_value}` : ''}`);
  });

  // 2. Verificar foreign keys
  console.log('\n2. ✅ Foreign Keys da tabela materiais:');
  const foreignKeys = db.prepare("PRAGMA foreign_key_list(materiais)").all();
  if (foreignKeys.length > 0) {
    foreignKeys.forEach(fk => {
      console.log(`   ${fk.from} -> ${fk.table}.${fk.to}`);
    });
  } else {
    console.log('   Nenhuma foreign key encontrada');
  }

  // 3. Verificar se existe categorias e classes
  console.log('\n3. ✅ Verificando tabelas relacionadas:');
  const categorias = db.prepare("SELECT COUNT(*) as count FROM categorias").get();
  console.log(`   Categorias: ${categorias.count} registros`);
  
  const classes = db.prepare("SELECT COUNT(*) as count FROM classes").get();
  console.log(`   Classes: ${classes.count} registros`);

  // 4. Mostrar algumas categorias e classes para referência
  console.log('\n4. ✅ Estrutura da tabela categorias:');
  const catInfo = db.prepare("PRAGMA table_info(categorias)").all();
  catInfo.forEach(col => {
    console.log(`   ${col.name}: ${col.type}`);
  });

  console.log('\n5. ✅ Exemplos de categorias:');
  const catExamples = db.prepare("SELECT * FROM categorias LIMIT 5").all();
  catExamples.forEach(cat => {
    console.log(`   Categoria:`, cat);
  });

  console.log('\n6. ✅ Estrutura da tabela classes:');
  const classInfo = db.prepare("PRAGMA table_info(classes)").all();
  classInfo.forEach(col => {
    console.log(`   ${col.name}: ${col.type}`);
  });

} catch (error) {
  console.error('❌ Erro:', error.message);
} finally {
  db.close();
  console.log('\n🔒 Conexão fechada');
}

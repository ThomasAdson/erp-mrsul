const Database = require('better-sqlite3');
const db = new Database('erp_mrsul.db');

console.log('Estrutura da tabela pedidos_compra:');
const schema = db.prepare('PRAGMA table_info(pedidos_compra)').all();
schema.forEach(col => console.log(`${col.name}: ${col.type}`));

// Verificar se o campo comprovante_nome existe
const hasComprovante = schema.some(col => col.name === 'comprovante_nome');
console.log('\nCampo comprovante_nome existe?', hasComprovante);

if (!hasComprovante) {
  console.log('\nAdicionando campo comprovante_nome...');
  try {
    db.exec('ALTER TABLE pedidos_compra ADD COLUMN comprovante_nome TEXT');
    console.log('✅ Campo comprovante_nome adicionado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao adicionar campo:', error.message);
  }
}

db.close();

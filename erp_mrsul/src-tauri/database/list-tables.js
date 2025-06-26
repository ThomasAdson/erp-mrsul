import sqlite3 from 'sqlite3';
const path = 'X:\\Thomas\\ERP\\erp_mrsul.db';

const db = new sqlite3.Database(path, (err) => {
  if (err) {
    console.error('Erro ao conectar:', err.message);
    return;
  }
  console.log('✅ Conectado ao banco SQLite');
});

// Listar todas as tabelas
db.all("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name", [], (err, rows) => {
  if (err) {
    console.error('Erro ao listar tabelas:', err.message);
    return;
  }
  
  console.log('\n📋 TABELAS ENCONTRADAS:');
  console.log('========================');
  rows.forEach((row, index) => {
    console.log(`${index + 1}. ${row.name}`);
  });
  
  // Fechar conexão
  db.close((err) => {
    if (err) {
      console.error('Erro ao fechar:', err.message);
    } else {
      console.log('\n🔒 Conexão fechada com sucesso');
    }
  });
});

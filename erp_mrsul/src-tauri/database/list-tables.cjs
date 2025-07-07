const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../../data/erp_mrsul.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err.message);
    return;
  }
  console.log('Conectado ao banco de dados SQLite.');
});

// Listar todas as tabelas
db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, rows) => {
  if (err) {
    console.error('Erro ao listar tabelas:', err.message);
    return;
  }
  
  console.log('Tabelas encontradas:');
  rows.forEach(row => {
    console.log(`- ${row.name}`);
  });
  
  db.close();
});

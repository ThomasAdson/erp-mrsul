const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../../data/erp_mrsul.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err.message);
    return;
  }
  console.log('Conectado ao banco de dados SQLite.');
});

// Verificar a estrutura da tabela pedidos_compra
db.all("PRAGMA table_info(pedidos_compra)", (err, rows) => {
  if (err) {
    console.error('Erro ao verificar estrutura da tabela:', err.message);
    return;
  }
  
  console.log('Estrutura da tabela pedidos_compra:');
  rows.forEach(row => {
    console.log(`${row.cid}: ${row.name} (${row.type}) - NOT NULL: ${row.notnull}, DEFAULT: ${row.dflt_value}`);
  });
  
  // Verificar se o campo comprovante_nome existe
  const hasComprovanteNome = rows.some(row => row.name === 'comprovante_nome');
  console.log(`\nCampo comprovante_nome existe? ${hasComprovanteNome}`);
  
  // Verificar dados com comprovante_nome
  db.all("SELECT id, numero, comprovante_nome FROM pedidos_compra WHERE comprovante_nome IS NOT NULL AND comprovante_nome != ''", (err, rows) => {
    if (err) {
      console.error('Erro ao consultar dados:', err.message);
      return;
    }
    
    console.log('\nPedidos com comprovante_nome:');
    rows.forEach(row => {
      console.log(`ID: ${row.id}, Número: ${row.numero}, Comprovante: ${row.comprovante_nome}`);
    });
    
    db.close();
  });
});

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('X:\\Thomas\\ERP\\erp_mrsul.db');

console.log('Verificando estrutura da tabela pedidos_compra...');
db.all('PRAGMA table_info(pedidos_compra)', (err, rows) => {
  if (err) {
    console.error('Erro:', err);
    return;
  }
  
  console.log('Estrutura da tabela pedidos_compra:');
  rows.forEach(row => {
    console.log(`${row.name} (${row.type})`);
  });
  
  const comprovanteField = rows.find(row => row.name === 'comprovante_nome');
  console.log('\nCampo comprovante_nome existe?', !!comprovanteField);
  
  if (comprovanteField) {
    console.log('Dados do campo comprovante_nome:');
    db.all('SELECT numero, comprovante_nome FROM pedidos_compra WHERE comprovante_nome IS NOT NULL AND comprovante_nome != ""', (err, rows) => {
      if (err) {
        console.error('Erro ao buscar dados:', err);
        return;
      }
      
      console.log('Pedidos com comprovante:');
      rows.forEach(row => {
        console.log(`Pedido ${row.numero}: ${row.comprovante_nome}`);
      });
      
      db.close();
    });
  } else {
    db.close();
  }
});

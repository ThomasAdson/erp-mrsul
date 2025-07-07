const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

try {
  const db = new Database('X:/Thomas/ERP/erp_mrsul.db');
  
  // Verificar pedidos com comprovante
  const result = db.prepare('SELECT numero_pedido, comprovante_nome FROM pedidos_compra WHERE comprovante_nome IS NOT NULL').all();
  console.log('Pedidos com comprovante:', result);
  
  // Verificar se o arquivo existe fisicamente
  result.forEach(row => {
    const filePath = row.comprovante_nome;
    console.log(`\nVerificando arquivo: ${filePath}`);
    
    if (filePath.startsWith('file://')) {
      const localPath = filePath.replace('file://', '');
      console.log(`Caminho local: ${localPath}`);
      
      if (fs.existsSync(localPath)) {
        console.log('✅ Arquivo existe fisicamente');
        const stats = fs.statSync(localPath);
        console.log(`Tamanho: ${stats.size} bytes`);
      } else {
        console.log('❌ Arquivo NÃO existe fisicamente');
        
        // Verificar se o diretório existe
        const dir = path.dirname(localPath);
        if (fs.existsSync(dir)) {
          console.log(`Diretório existe: ${dir}`);
          const files = fs.readdirSync(dir);
          console.log(`Arquivos no diretório: ${files.join(', ')}`);
        } else {
          console.log(`Diretório NÃO existe: ${dir}`);
        }
      }
    }
  });
  
  db.close();
} catch (error) {
  console.error('Erro:', error);
}

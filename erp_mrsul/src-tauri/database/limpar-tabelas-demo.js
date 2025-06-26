import sqlite3 from 'sqlite3';

const path = 'X:\\Thomas\\ERP\\erp_mrsul.db';
const db = new sqlite3.Database(path);

// Função para executar queries com Promise
function queryAsync(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) reject(err);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

async function limparTabelasDemo() {
  try {
    console.log('🧹 REMOVENDO TABELAS DE DEMONSTRAÇÃO...\n');
    
    // 1. Deletar tabela filha primeiro (maintenance_parts)
    console.log('📦 1. Removendo tabela: maintenance_parts');
    await queryAsync('DROP TABLE IF EXISTS maintenance_parts');
    console.log('   ✅ Tabela maintenance_parts removida');
    
    // 2. Deletar tabela pai (maintenance_orders)
    console.log('\n📋 2. Removendo tabela: maintenance_orders');
    await queryAsync('DROP TABLE IF EXISTS maintenance_orders');
    console.log('   ✅ Tabela maintenance_orders removida');
    
    // 3. Verificar se as tabelas foram removidas
    console.log('\n🔍 3. Verificando tabelas restantes:');
    const tabelas = await new Promise((resolve, reject) => {
      db.all("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    
    console.log('   📋 TABELAS ATUAIS NO BANCO:');
    tabelas.forEach((tabela, index) => {
      console.log(`   ${index + 1}. ${tabela.name}`);
    });
    
    console.log('\n✅ Limpeza concluída com sucesso!');
    console.log('🎯 Banco voltou ao estado original para desenvolvimento futuro.');
    
  } catch (error) {
    console.error('❌ Erro na limpeza:', error.message);
  } finally {
    db.close();
  }
}

limparTabelasDemo();

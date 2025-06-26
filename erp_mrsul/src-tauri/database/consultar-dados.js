import sqlite3 from 'sqlite3';

const path = 'X:\\Thomas\\ERP\\erp_mrsul.db';
const db = new sqlite3.Database(path);

// Função para executar queries com Promise
function queryAsync(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

async function consultarBanco() {
  try {
    console.log('🔍 CONSULTANDO DADOS DO ERP...\n');
    
    // Consultar clientes
    console.log('👥 CLIENTES:');
    const clientes = await queryAsync('SELECT COUNT(*) as total FROM clients');
    console.log(`   Total de clientes: ${clientes[0].total}`);
    
    // Consultar projetos  
    console.log('\n📋 PROJETOS:');
    const projetos = await queryAsync('SELECT COUNT(*) as total FROM projects');
    console.log(`   Total de projetos: ${projetos[0].total}`);
    
    // Consultar equipamentos
    console.log('\n⚙️ EQUIPAMENTOS:');
    const equipamentos = await queryAsync('SELECT COUNT(*) as total FROM equipment');
    console.log(`   Total de equipamentos: ${equipamentos[0].total}`);
    
    // Consultar tipos de equipamento
    const tiposEquip = await queryAsync('SELECT equipment_type, COUNT(*) as qtd FROM equipment GROUP BY equipment_type');
    console.log('   Por tipo:');
    tiposEquip.forEach(tipo => {
      console.log(`   - ${tipo.equipment_type}: ${tipo.qtd}`);
    });
    
    // Consultar materiais
    console.log('\n📦 MATERIAIS:');
    const materiais = await queryAsync('SELECT COUNT(*) as total FROM materiais');
    console.log(`   Total de materiais: ${materiais[0].total}`);
    
    console.log('\n✅ Consulta concluída com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro na consulta:', error.message);
  } finally {
    db.close();
  }
}

consultarBanco();

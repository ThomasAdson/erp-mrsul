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

async function analisarCustos() {
  try {
    console.log('💰 ANÁLISE DE CUSTOS DE MATERIAIS\n');
    console.log('='.repeat(60));
    
    // 1. Verificar estrutura da tabela materiais
    console.log('\n📊 ESTRUTURA DA TABELA MATERIAIS:');
    console.log('-'.repeat(50));
    
    const estruturaMateriais = await queryAsync("PRAGMA table_info(materiais)");
    estruturaMateriais.forEach(col => {
      const tipo = col.type;
      const nullable = col.notnull ? 'NOT NULL' : 'NULLABLE';
      const pk = col.pk ? ' (PRIMARY KEY)' : '';
      console.log(`   ${col.name.padEnd(20)} | ${tipo.padEnd(15)} | ${nullable}${pk}`);
    });
    
    // 2. Verificar se há campos relacionados a custos na tabela materiais
    console.log('\n💰 CAMPOS RELACIONADOS A CUSTOS - MATERIAIS:');
    console.log('-'.repeat(50));
    
    const camposCustosMateriais = estruturaMateriais.filter(col => 
      col.name.toLowerCase().includes('cost') || 
      col.name.toLowerCase().includes('price') || 
      col.name.toLowerCase().includes('valor') ||
      col.name.toLowerCase().includes('preco') ||
      col.name.toLowerCase().includes('custo') ||
      col.name.toLowerCase().includes('kg') ||
      col.name.toLowerCase().includes('peso') ||
      col.name.toLowerCase().includes('densidade')
    );
    
    if (camposCustosMateriais.length > 0) {
      camposCustosMateriais.forEach(col => {
        console.log(`   ✅ ${col.name} (${col.type})`);
      });
    } else {
      console.log('   ❌ Nenhum campo de custo específico encontrado');
    }
    
    // 3. Verificar estrutura da tabela material_class
    console.log('\n� ESTRUTURA DA TABELA MATERIAL_CLASS:');
    console.log('-'.repeat(50));
    
    const estruturaClasses = await queryAsync("PRAGMA table_info(material_class)");
    estruturaClasses.forEach(col => {
      const tipo = col.type;
      const nullable = col.notnull ? 'NOT NULL' : 'NULLABLE';
      const pk = col.pk ? ' (PRIMARY KEY)' : '';
      console.log(`   ${col.name.padEnd(20)} | ${tipo.padEnd(15)} | ${nullable}${pk}`);
    });
    
    // 4. Verificar campos relacionados a custos na tabela classes
    console.log('\n💰 CAMPOS RELACIONADOS A CUSTOS - CLASSES:');
    console.log('-'.repeat(50));
    
    const camposCustosClasses = estruturaClasses.filter(col => 
      col.name.toLowerCase().includes('cost') || 
      col.name.toLowerCase().includes('price') || 
      col.name.toLowerCase().includes('valor') ||
      col.name.toLowerCase().includes('preco') ||
      col.name.toLowerCase().includes('custo') ||
      col.name.toLowerCase().includes('kg') ||
      col.name.toLowerCase().includes('peso') ||
      col.name.toLowerCase().includes('densidade')
    );
    
    if (camposCustosClasses.length > 0) {
      camposCustosClasses.forEach(col => {
        console.log(`   ✅ ${col.name} (${col.type})`);
      });
    } else {
      console.log('   ❌ Nenhum campo de custo específico encontrado');
    }
    
    // 5. Amostras de dados da tabela materiais
    console.log('\n� AMOSTRA DE DADOS - MATERIAIS:');
    console.log('-'.repeat(50));
    
    const countMateriais = await queryAsync("SELECT COUNT(*) as total FROM materiais");
    console.log(`Total de materiais: ${countMateriais[0].total}`);
    
    if (countMateriais[0].total > 0) {
      const materiais = await queryAsync("SELECT * FROM materiais LIMIT 3");
      materiais.forEach((material, index) => {
        console.log(`\n📋 Material ${index + 1}:`);
        Object.entries(material).forEach(([key, value]) => {
          console.log(`   ${key}: ${value}`);
        });
      });
    }
    
    // 6. Amostras de dados da tabela classes
    console.log('\n📂 AMOSTRA DE DADOS - CLASSES:');
    console.log('-'.repeat(50));
    
    const countClasses = await queryAsync("SELECT COUNT(*) as total FROM material_class");
    console.log(`Total de classes: ${countClasses[0].total}`);
    
    if (countClasses[0].total > 0) {
      const classes = await queryAsync("SELECT * FROM material_class LIMIT 5");
      classes.forEach((classe, index) => {
        console.log(`\n📁 Classe ${index + 1}:`);
        Object.entries(classe).forEach(([key, value]) => {
          console.log(`   ${key}: ${value}`);
        });
      });
    }
    
    // 7. Verificar se há relação entre materiais e classes
    console.log('\n� RELAÇÃO MATERIAIS-CLASSES:');
    console.log('-'.repeat(50));
    
    try {
      const relacao = await queryAsync(`
        SELECT 
          m.name as material_name,
          m.class_id,
          c.name as class_name
        FROM materiais m 
        LEFT JOIN material_class c ON m.class_id = c.id 
        LIMIT 5
      `);
      
      console.log('Exemplos de materiais com suas classes:');
      relacao.forEach((item, index) => {
        console.log(`   ${index + 1}. Material: ${item.material_name} | Classe: ${item.class_name || 'Sem classe'}`);
      });
    } catch (error) {
      console.log('   ❌ Erro ao verificar relação:', error.message);
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('✅ ANÁLISE CONCLUÍDA');
    
  } catch (error) {
    console.error('❌ Erro na análise:', error.message);
  } finally {
    db.close();
  }
}

analisarCustos();

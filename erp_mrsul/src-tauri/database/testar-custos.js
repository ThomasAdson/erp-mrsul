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

async function testarCamposCustos() {
  try {
    console.log('🧪 TESTANDO CAMPOS DE CUSTOS\n');
    console.log('='.repeat(60));
    
    // 1. Verificar estrutura atualizada
    console.log('\n📊 ESTRUTURA ATUALIZADA DA TABELA MATERIAIS:');
    console.log('-'.repeat(50));
    
    const estrutura = await queryAsync("PRAGMA table_info(materiais)");
    estrutura.forEach(col => {
      const isCusto = ['custo_padrao_por_unidade_compra', 'unidade_compra_padrao', 
                       'ultima_atualizacao_custo_padrao', 'peso_linear_kg_m', 
                       'peso_superficial_kg_m2', 'custo_por_unidade_estoque'].includes(col.name);
      const prefix = isCusto ? '💰' : '📋';
      console.log(`   ${prefix} ${col.name.padEnd(35)} | ${col.type.padEnd(15)}`);
    });
    
    // 2. Verificar se há materiais com dados de custos
    console.log('\n🔍 MATERIAIS COM DADOS DE CUSTOS:');
    console.log('-'.repeat(50));
    
    const materiaisComCustos = await queryAsync(`
      SELECT 
        codigo_material_completo,
        descricao_completa,
        unidade_medida,
        custo_padrao_por_unidade_compra,
        unidade_compra_padrao,
        peso_linear_kg_m,
        peso_superficial_kg_m2,
        custo_por_unidade_estoque
      FROM materiais 
      WHERE custo_padrao_por_unidade_compra IS NOT NULL 
         OR peso_linear_kg_m IS NOT NULL 
         OR peso_superficial_kg_m2 IS NOT NULL
      LIMIT 5
    `);
    
    if (materiaisComCustos.length > 0) {
      materiaisComCustos.forEach((material, index) => {
        console.log(`\n💰 Material ${index + 1}:`);
        console.log(`   Código: ${material.codigo_material_completo}`);
        console.log(`   Descrição: ${material.descricao_completa}`);
        console.log(`   Un. Medida: ${material.unidade_medida}`);
        console.log(`   Un. Compra: ${material.unidade_compra_padrao || 'N/A'}`);
        console.log(`   Custo Padrão: R$ ${material.custo_padrao_por_unidade_compra || 'N/A'}`);
        console.log(`   Peso Linear: ${material.peso_linear_kg_m || 'N/A'} kg/m`);
        console.log(`   Peso Superficial: ${material.peso_superficial_kg_m2 || 'N/A'} kg/m²`);
        console.log(`   Custo Estoque: R$ ${material.custo_por_unidade_estoque || 'N/A'}`);
      });
    } else {
      console.log('   ❌ Nenhum material com dados de custos encontrado');
      console.log('   📝 Os campos estão prontos para receber dados!');
    }
    
    // 3. Estatísticas dos campos
    console.log('\n📈 ESTATÍSTICAS DOS CAMPOS DE CUSTOS:');
    console.log('-'.repeat(50));
    
    const stats = await queryAsync(`
      SELECT 
        COUNT(*) as total_materiais,
        COUNT(custo_padrao_por_unidade_compra) as com_custo_padrao,
        COUNT(peso_linear_kg_m) as com_peso_linear,
        COUNT(peso_superficial_kg_m2) as com_peso_superficial,
        COUNT(custo_por_unidade_estoque) as com_custo_calculado
      FROM materiais
    `);
    
    const stat = stats[0];
    console.log(`   📦 Total de materiais: ${stat.total_materiais}`);
    console.log(`   💰 Com custo padrão: ${stat.com_custo_padrao}`);
    console.log(`   📏 Com peso linear: ${stat.com_peso_linear}`);
    console.log(`   📐 Com peso superficial: ${stat.com_peso_superficial}`);
    console.log(`   🧮 Com custo calculado: ${stat.com_custo_calculado}`);
    
    console.log('\n' + '='.repeat(60));
    console.log('✅ ESTRUTURA DE CUSTOS PRONTA PARA USO!');
    
  } catch (error) {
    console.error('❌ Erro no teste:', error.message);
  } finally {
    db.close();
  }
}

testarCamposCustos();

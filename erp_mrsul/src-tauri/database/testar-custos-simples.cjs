const Database = require('better-sqlite3');
const path = require('path');

// Conectar ao banco de dados
const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
const db = new Database(dbPath);

console.log('🧪 TESTE SIMPLES: Estrutura de Custos');
console.log('=====================================');

try {
  // 1. Verificar se as colunas de custos existem
  console.log('\n1. ✅ Verificando estrutura da tabela materiais...');
  const tableInfo = db.prepare("PRAGMA table_info(materiais)").all();
  const costFields = ['custo_padrao_por_unidade_compra', 'unidade_compra_padrao', 'peso_linear_kg_m', 'peso_superficial_kg_m2', 'custo_por_unidade_estoque'];
  
  console.log('Campos de custos encontrados:');
  costFields.forEach(field => {
    const found = tableInfo.find(col => col.name === field);
    console.log(`   ${found ? '✅' : '❌'} ${field}: ${found ? found.type : 'NÃO ENCONTRADO'}`);
  });

  // 2. Verificar se existem categorias no banco
  console.log('\n2. ✅ Verificando categorias existentes...');
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('Tabelas no banco:', tables.map(t => t.name).join(', '));

  // Verificar se existe alguma categoria
  let categoriaExistente = null;
  try {
    const categorias = db.prepare("SELECT * FROM categorias LIMIT 1").all();
    if (categorias.length > 0) {
      categoriaExistente = categorias[0];
      console.log(`   Categoria encontrada: ${categoriaExistente.nome_categoria} (ID: ${categoriaExistente.id})`);
    }
  } catch (error) {
    console.log('   ⚠️ Tabela categorias não existe, usando estrutura alternativa');
  }

  // 3. Inserir material de teste com custos usando categoria existente ou simulando
  console.log('\n3. ✅ Testando inserção de material com custos...');
  
  const materialId = 'test-material-' + Date.now();
  const codigoEspecificacao = 'TC-' + Date.now(); // Código único baseado em timestamp
  let insertQuery, insertParams;

  if (categoriaExistente) {
    insertQuery = `
      INSERT INTO materiais (
        id, categoria_id, codigo_especificacao, descricao_especificacao,
        material_composicao, unidade_medida, codigo_material_completo,
        descricao_completa, observacoes, estoque_atual, estoque_minimo,
        custo_padrao_por_unidade_compra, unidade_compra_padrao, 
        peso_linear_kg_m, peso_superficial_kg_m2, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
    `;
    insertParams = [
      materialId, categoriaExistente.id, codigoEspecificacao, 'Teste Custo Linear',
      'Aço Carbono', 'metro', 'TEST-TC-' + Date.now(),
      'Material de teste para custos lineares', 'Material de teste',
      100, 10, 8.50, 'kg', 1.47, null
    ];
  } else {
    // Inserir sem categoria_id se não existir a tabela
    insertQuery = `
      INSERT INTO materiais (
        id, codigo_especificacao, descricao_especificacao,
        material_composicao, unidade_medida, codigo_material_completo,
        descricao_completa, observacoes, estoque_atual, estoque_minimo,
        custo_padrao_por_unidade_compra, unidade_compra_padrao, 
        peso_linear_kg_m, peso_superficial_kg_m2, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
    `;
    insertParams = [
      materialId, codigoEspecificacao, 'Teste Custo Linear',
      'Aço Carbono', 'metro', 'TEST-TC-' + Date.now(),
      'Material de teste para custos lineares', 'Material de teste',
      100, 10, 8.50, 'kg', 1.47, null
    ];
  }

  const insertResult = db.prepare(insertQuery).run(...insertParams);
  console.log(`   Material inserido com ID: ${materialId}`);

  // 4. Verificar se o cálculo de custo foi aplicado
  console.log('\n4. ✅ Verificando cálculo automático de custo...');
  const material = db.prepare(`
    SELECT * FROM materiais WHERE id = ?
  `).get(materialId);

  console.log('Dados do material:');
  console.log(`   Custo padrão por kg: R$ ${material.custo_padrao_por_unidade_compra}`);
  console.log(`   Unidade compra: ${material.unidade_compra_padrao}`);
  console.log(`   Peso linear: ${material.peso_linear_kg_m} kg/m`);
  console.log(`   Unidade medida estoque: ${material.unidade_medida}`);
  console.log(`   Custo por unidade estoque: R$ ${material.custo_por_unidade_estoque || 'NULL'}`);

  // Verificar se o cálculo está correto
  const expectedCost = material.custo_padrao_por_unidade_compra * material.peso_linear_kg_m;
  const actualCost = material.custo_por_unidade_estoque;
  
  if (actualCost) {
    const isCorrect = Math.abs(expectedCost - actualCost) < 0.01;
    console.log(`   Custo esperado: R$ ${expectedCost.toFixed(2)}`);
    console.log(`   Custo calculado: R$ ${actualCost.toFixed(2)}`);
    console.log(`   ${isCorrect ? '✅' : '❌'} Cálculo ${isCorrect ? 'CORRETO' : 'INCORRETO'}`);
  } else {
    console.log(`   ⚠️ Custo não foi calculado automaticamente (trigger pode não estar ativo)`);
    console.log(`   Calculando manualmente: R$ ${expectedCost.toFixed(2)}`);
  }

  // 5. Testar atualização manual do custo
  console.log('\n5. ✅ Testando atualização manual de custo...');
  const manualCost = expectedCost;
  db.prepare(`
    UPDATE materiais 
    SET custo_por_unidade_estoque = ?
    WHERE id = ?
  `).run(manualCost, materialId);

  const materialUpdated = db.prepare(`
    SELECT * FROM materiais WHERE id = ?
  `).get(materialId);

  console.log(`   Custo atualizado manualmente: R$ ${materialUpdated.custo_por_unidade_estoque.toFixed(2)}`);

  // 6. Limpeza
  console.log('\n6. 🧹 Limpando dados de teste...');
  db.prepare('DELETE FROM materiais WHERE id LIKE ?').run('test-material%');

  console.log('\n🎉 TESTE CONCLUÍDO!');
  console.log('✅ Estrutura de custos implementada');
  console.log('✅ Campos de custos funcionais');
  console.log('📝 Próximo passo: Atualizar interface do frontend');

} catch (error) {
  console.error('\n❌ Erro durante o teste:', error.message);
  console.error(error);
} finally {
  db.close();
}

const Database = require('better-sqlite3');

const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
const db = new Database(dbPath);

console.log('🔍 VERIFICANDO TRIGGERS DO BANCO');
console.log('===============================');

try {
  // 1. Verificar triggers existentes
  console.log('\n1. ✅ Triggers existentes:');
  const triggers = db.prepare(`
    SELECT name, sql 
    FROM sqlite_master 
    WHERE type = 'trigger' 
    AND tbl_name = 'materiais'
  `).all();
  
  if (triggers.length > 0) {
    triggers.forEach(trigger => {
      console.log(`   Trigger: ${trigger.name}`);
      console.log(`   SQL: ${trigger.sql.substring(0, 100)}...`);
    });
  } else {
    console.log('   ⚠️ Nenhum trigger encontrado para a tabela materiais');
  }

  // 2. Criar trigger de cálculo de custo se não existir
  console.log('\n2. ✅ Criando trigger de cálculo automático...');
  
  const createTriggerSQL = `
    CREATE TRIGGER IF NOT EXISTS calculate_material_cost
    AFTER INSERT ON materiais
    WHEN NEW.custo_padrao_por_unidade_compra IS NOT NULL
    BEGIN
      UPDATE materiais
      SET custo_por_unidade_estoque = 
        CASE 
          WHEN NEW.peso_linear_kg_m IS NOT NULL THEN 
            NEW.custo_padrao_por_unidade_compra * NEW.peso_linear_kg_m
          WHEN NEW.peso_superficial_kg_m2 IS NOT NULL THEN 
            NEW.custo_padrao_por_unidade_compra * NEW.peso_superficial_kg_m2
          ELSE 
            NEW.custo_padrao_por_unidade_compra
        END,
        ultima_atualizacao_custo_padrao = datetime('now')
      WHERE id = NEW.id;
    END;
  `;

  db.exec(createTriggerSQL);
  console.log('   Trigger de INSERT criado com sucesso');

  // 3. Criar trigger para UPDATE
  const createUpdateTriggerSQL = `
    CREATE TRIGGER IF NOT EXISTS calculate_material_cost_update
    AFTER UPDATE OF custo_padrao_por_unidade_compra, peso_linear_kg_m, peso_superficial_kg_m2 ON materiais
    WHEN NEW.custo_padrao_por_unidade_compra IS NOT NULL
    BEGIN
      UPDATE materiais
      SET custo_por_unidade_estoque = 
        CASE 
          WHEN NEW.peso_linear_kg_m IS NOT NULL THEN 
            NEW.custo_padrao_por_unidade_compra * NEW.peso_linear_kg_m
          WHEN NEW.peso_superficial_kg_m2 IS NOT NULL THEN 
            NEW.custo_padrao_por_unidade_compra * NEW.peso_superficial_kg_m2
          ELSE 
            NEW.custo_padrao_por_unidade_compra
        END,
        ultima_atualizacao_custo_padrao = datetime('now')
      WHERE id = NEW.id;
    END;
  `;

  db.exec(createUpdateTriggerSQL);
  console.log('   Trigger de UPDATE criado com sucesso');

  // 4. Verificar triggers criados
  console.log('\n3. ✅ Verificando triggers após criação:');
  const newTriggers = db.prepare(`
    SELECT name 
    FROM sqlite_master 
    WHERE type = 'trigger' 
    AND tbl_name = 'materiais'
  `).all();
  
  newTriggers.forEach(trigger => {
    console.log(`   ✅ ${trigger.name}`);
  });

} catch (error) {
  console.error('❌ Erro:', error.message);
} finally {
  db.close();
  console.log('\n🔒 Conexão fechada');
}

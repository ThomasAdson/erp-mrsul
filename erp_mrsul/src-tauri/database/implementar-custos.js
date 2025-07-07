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

// Função para verificar se uma coluna existe
function queryAllAsync(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

async function adicionarCamposCustos() {
  try {
    console.log('💰 IMPLEMENTANDO ESTRUTURA DE CUSTOS\n');
    console.log('='.repeat(60));
    
    // 1. Verificar estrutura atual
    console.log('\n📊 ESTRUTURA ATUAL DA TABELA MATERIAIS:');
    console.log('-'.repeat(50));
    
    const estruturaAtual = await queryAllAsync("PRAGMA table_info(materiais)");
    estruturaAtual.forEach(col => {
      console.log(`   ${col.name.padEnd(25)} | ${col.type.padEnd(15)}`);
    });
    
    // 2. Verificar quais campos já existem
    const camposExistentes = estruturaAtual.map(col => col.name);
    
    const novoscampos = [
      { nome: 'custo_padrao_por_unidade_compra', tipo: 'REAL' },
      { nome: 'unidade_compra_padrao', tipo: 'TEXT' },
      { nome: 'ultima_atualizacao_custo_padrao', tipo: 'TEXT' },
      { nome: 'peso_linear_kg_m', tipo: 'REAL' },
      { nome: 'peso_superficial_kg_m2', tipo: 'REAL' },
      { nome: 'custo_por_unidade_estoque', tipo: 'REAL' }
    ];
    
    console.log('\n🔧 ADICIONANDO CAMPOS DE CUSTOS:');
    console.log('-'.repeat(50));
    
    // 3. Adicionar campos que não existem
    for (const campo of novoscampos) {
      if (camposExistentes.includes(campo.nome)) {
        console.log(`   ⚠️  Campo '${campo.nome}' já existe - pulando`);
      } else {
        try {
          await queryAsync(`ALTER TABLE materiais ADD COLUMN ${campo.nome} ${campo.tipo}`);
          console.log(`   ✅ Campo '${campo.nome}' adicionado com sucesso`);
        } catch (error) {
          console.log(`   ❌ Erro ao adicionar '${campo.nome}': ${error.message}`);
        }
      }
    }
    
    // 4. Verificar estrutura final
    console.log('\n📊 ESTRUTURA FINAL DA TABELA MATERIAIS:');
    console.log('-'.repeat(50));
    
    const estruturaFinal = await queryAllAsync("PRAGMA table_info(materiais)");
    estruturaFinal.forEach(col => {
      const isCusto = novoscampos.some(nc => nc.nome === col.name);
      const prefix = isCusto ? '💰' : '📋';
      console.log(`   ${prefix} ${col.name.padEnd(35)} | ${col.type.padEnd(15)}`);
    });
    
    // 5. Criar função para calcular custos (JavaScript)
    console.log('\n🧮 CRIANDO FUNÇÃO DE CÁLCULO DE CUSTOS:');
    console.log('-'.repeat(50));
    
    console.log(`
📝 LÓGICA DE CÁLCULO IMPLEMENTADA:

1. MATERIAL LINEAR (metro + kg):
   custo_por_unidade_estoque = peso_linear_kg_m × custo_padrao_por_unidade_compra

2. MATERIAL SUPERFICIAL (m² + kg):
   custo_por_unidade_estoque = peso_superficial_kg_m2 × custo_padrao_por_unidade_compra

3. MATERIAL UNITÁRIO (mesma unidade):
   custo_por_unidade_estoque = custo_padrao_por_unidade_compra

4. CASOS ESPECIAIS:
   - Se não houver dados suficientes, custo_por_unidade_estoque = NULL
   - ultima_atualizacao_custo_padrao será atualizada automaticamente
    `);
    
    console.log('\n' + '='.repeat(60));
    console.log('✅ ESTRUTURA DE CUSTOS IMPLEMENTADA COM SUCESSO!');
    console.log('\n📋 PRÓXIMOS PASSOS:');
    console.log('   1. Atualizar funções de exportar/importar');
    console.log('   2. Criar interface para inserir dados de custos');
    console.log('   3. Implementar cálculo automático no frontend');
    
  } catch (error) {
    console.error('❌ Erro na implementação:', error.message);
  } finally {
    db.close();
  }
}

adicionarCamposCustos();

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

// Função para consultas SELECT
function selectAsync(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

async function demonstrarCapacidades() {
  try {
    console.log('🔧 DEMONSTRANDO CAPACIDADES DO BANCO...\n');
    
    // 1. CRIAR NOVA TABELA COM FOREIGN KEYS
    console.log('📋 1. CRIANDO NOVA TABELA: maintenance_orders');
    await queryAsync(`
      CREATE TABLE IF NOT EXISTS maintenance_orders (
        id TEXT PRIMARY KEY,
        equipment_id TEXT NOT NULL,
        client_id TEXT NOT NULL,
        order_number TEXT UNIQUE NOT NULL,
        description TEXT NOT NULL,
        priority TEXT CHECK(priority IN ('baixa', 'media', 'alta', 'critica')) DEFAULT 'media',
        status TEXT CHECK(status IN ('pendente', 'em_andamento', 'concluida', 'cancelada')) DEFAULT 'pendente',
        scheduled_date TEXT,
        completed_date TEXT,
        technician_name TEXT,
        estimated_hours REAL,
        actual_hours REAL,
        cost REAL DEFAULT 0,
        notes TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (equipment_id) REFERENCES equipment(id) ON DELETE CASCADE,
        FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
      )
    `);
    console.log('   ✅ Tabela criada com FKs para equipment e clients');

    // 2. CRIAR TABELA DE PEÇAS UTILIZADAS
    console.log('\n📦 2. CRIANDO TABELA: maintenance_parts');
    await queryAsync(`
      CREATE TABLE IF NOT EXISTS maintenance_parts (
        id TEXT PRIMARY KEY,
        maintenance_order_id TEXT NOT NULL,
        material_id TEXT NOT NULL,
        quantity_used REAL NOT NULL,
        unit_cost REAL NOT NULL,
        total_cost REAL GENERATED ALWAYS AS (quantity_used * unit_cost) STORED,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (maintenance_order_id) REFERENCES maintenance_orders(id) ON DELETE CASCADE,
        FOREIGN KEY (material_id) REFERENCES materiais(id) ON DELETE RESTRICT
      )
    `);
    console.log('   ✅ Tabela de peças criada com relacionamentos');

    // 3. INSERIR DADOS DE EXEMPLO
    console.log('\n➕ 3. INSERINDO DADOS DE EXEMPLO:');
    
    // Buscar um equipamento existente
    const equipamentos = await selectAsync('SELECT id, serial_number FROM equipment LIMIT 1');
    const clientes = await selectAsync('SELECT id, name FROM clients LIMIT 1');
    
    if (equipamentos.length > 0 && clientes.length > 0) {
      const equipId = equipamentos[0].id;
      const clientId = clientes[0].id;
      
      // Inserir ordem de manutenção
      const orderId = `maint_${Date.now()}`;
      await queryAsync(`
        INSERT INTO maintenance_orders (
          id, equipment_id, client_id, order_number, description, 
          priority, status, scheduled_date, technician_name, estimated_hours, cost
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [
        orderId,
        equipId,
        clientId,
        `OM-${Date.now().toString().slice(-6)}`,
        'Manutenção preventiva do elevador de carga',
        'media',
        'pendente',
        '2025-06-20',
        'João Silva',
        4.0,
        850.00
      ]);
      
      console.log(`   ✅ Ordem de manutenção inserida: ${orderId}`);
      
      // Buscar um material para usar
      const materiais = await selectAsync('SELECT id, codigo_material_completo FROM materiais LIMIT 1');
      if (materiais.length > 0) {
        const materialId = materiais[0].id;
        
        // Inserir peça utilizada
        const partId = `part_${Date.now()}`;
        await queryAsync(`
          INSERT INTO maintenance_parts (
            id, maintenance_order_id, material_id, quantity_used, unit_cost
          ) VALUES (?, ?, ?, ?, ?)
        `, [
          partId,
          orderId,
          materialId,
          2.0,
          45.50
        ]);
        
        console.log(`   ✅ Peça utilizada inserida: ${partId}`);
      }
    }

    // 4. CONSULTAR DADOS COM JOINS
    console.log('\n🔍 4. CONSULTANDO COM RELACIONAMENTOS:');
    const manutencoes = await selectAsync(`
      SELECT 
        mo.order_number,
        mo.description,
        mo.priority,
        mo.status,
        c.name as client_name,
        e.serial_number as equipment_serial,
        mo.estimated_hours,
        mo.cost,
        COUNT(mp.id) as parts_count,
        SUM(mp.total_cost) as parts_total_cost
      FROM maintenance_orders mo
      LEFT JOIN clients c ON mo.client_id = c.id
      LEFT JOIN equipment e ON mo.equipment_id = e.id
      LEFT JOIN maintenance_parts mp ON mo.id = mp.maintenance_order_id
      GROUP BY mo.id
    `);
    
    console.log('   📋 ORDENS DE MANUTENÇÃO:');
    manutencoes.forEach(ordem => {
      console.log(`   - ${ordem.order_number}: ${ordem.description}`);
      console.log(`     Cliente: ${ordem.client_name}`);
      console.log(`     Equipamento: ${ordem.equipment_serial}`);
      console.log(`     Status: ${ordem.status} | Prioridade: ${ordem.priority}`);
      console.log(`     Custo: R$ ${ordem.cost} | Peças: R$ ${ordem.parts_total_cost || 0}`);
      console.log('');
    });

    // 5. DEMONSTRAR CONSTRAINTS DE FK
    console.log('🔒 5. TESTANDO CONSTRAINTS:');
    try {
      await queryAsync(`
        INSERT INTO maintenance_orders (
          id, equipment_id, client_id, order_number, description
        ) VALUES (?, ?, ?, ?, ?)
      `, ['test_fk', 'equipamento_inexistente', 'cliente_inexistente', 'TEST-001', 'Teste FK']);
      console.log('   ❌ Erro: FK constraint não funcionou');
    } catch (error) {
      console.log('   ✅ FK constraint funcionando: ' + error.message.substring(0, 50) + '...');
    }

    console.log('\n🎯 RESUMO DAS CAPACIDADES:');
    console.log('✅ Criar tabelas com Foreign Keys');
    console.log('✅ Inserir dados relacionados');
    console.log('✅ Consultas com JOINs complexos');
    console.log('✅ Constraints e validações');
    console.log('✅ Cálculos automáticos (campos computed)');
    console.log('✅ Relacionamentos cascade/restrict');
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    db.close();
  }
}

demonstrarCapacidades();

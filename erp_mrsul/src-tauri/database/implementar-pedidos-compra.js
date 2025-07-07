const Database = require('better-sqlite3');
const path = require('path');

// Caminho para o banco de dados
const dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';

console.log('🚀 Iniciando implementação do sistema de pedidos de compra...');
console.log(`📍 Caminho do banco: ${dbPath}`);

try {
    const db = new Database(dbPath);
    console.log('✅ Conectado ao banco SQLite');

    // 1. Criar tabela de pedidos de compra
    console.log('\n📝 Criando tabela pedidos_compra...');
    db.exec(`
        CREATE TABLE IF NOT EXISTS pedidos_compra (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numero_pedido TEXT UNIQUE NOT NULL,
            fornecedor_id INTEGER NOT NULL,
            data_pedido DATE NOT NULL DEFAULT (datetime('now', 'localtime')),
            data_entrega_prevista DATE,
            status TEXT NOT NULL DEFAULT 'rascunho' CHECK (status IN ('rascunho', 'enviado', 'confirmado', 'recebido_parcial', 'recebido_total', 'cancelado')),
            observacoes TEXT,
            valor_total DECIMAL(10,2) DEFAULT 0,
            valor_frete DECIMAL(10,2) DEFAULT 0,
            valor_desconto DECIMAL(10,2) DEFAULT 0,
            valor_total_final DECIMAL(10,2) DEFAULT 0,
            comprovante_pdf BLOB,
            comprovante_nome TEXT,
            created_at DATETIME DEFAULT (datetime('now', 'localtime')),
            updated_at DATETIME DEFAULT (datetime('now', 'localtime')),
            created_by TEXT,
            updated_by TEXT,
            FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id) ON DELETE RESTRICT
        );
    `);

    // 2. Criar tabela de itens do pedido
    console.log('📝 Criando tabela pedidos_compra_itens...');
    db.exec(`
        CREATE TABLE IF NOT EXISTS pedidos_compra_itens (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pedido_id INTEGER NOT NULL,
            material_id INTEGER NOT NULL,
            quantidade DECIMAL(10,3) NOT NULL,
            preco_unitario DECIMAL(10,2) NOT NULL,
            valor_total DECIMAL(10,2) NOT NULL,
            quantidade_recebida DECIMAL(10,3) DEFAULT 0,
            observacoes TEXT,
            created_at DATETIME DEFAULT (datetime('now', 'localtime')),
            updated_at DATETIME DEFAULT (datetime('now', 'localtime')),
            FOREIGN KEY (pedido_id) REFERENCES pedidos_compra(id) ON DELETE CASCADE,
            FOREIGN KEY (material_id) REFERENCES materiais(id) ON DELETE RESTRICT
        );
    `);

    // 3. Criar tabela de histórico de status
    console.log('📝 Criando tabela pedidos_compra_historico...');
    db.exec(`
        CREATE TABLE IF NOT EXISTS pedidos_compra_historico (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pedido_id INTEGER NOT NULL,
            status_anterior TEXT,
            status_novo TEXT NOT NULL,
            observacoes TEXT,
            created_at DATETIME DEFAULT (datetime('now', 'localtime')),
            created_by TEXT,
            FOREIGN KEY (pedido_id) REFERENCES pedidos_compra(id) ON DELETE CASCADE
        );
    `);

    // 4. Criar tabela de recebimentos
    console.log('📝 Criando tabela pedidos_compra_recebimentos...');
    db.exec(`
        CREATE TABLE IF NOT EXISTS pedidos_compra_recebimentos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pedido_id INTEGER NOT NULL,
            item_id INTEGER NOT NULL,
            quantidade_recebida DECIMAL(10,3) NOT NULL,
            data_recebimento DATE NOT NULL DEFAULT (datetime('now', 'localtime')),
            lote TEXT,
            observacoes TEXT,
            created_at DATETIME DEFAULT (datetime('now', 'localtime')),
            created_by TEXT,
            FOREIGN KEY (pedido_id) REFERENCES pedidos_compra(id) ON DELETE CASCADE,
            FOREIGN KEY (item_id) REFERENCES pedidos_compra_itens(id) ON DELETE CASCADE
        );
    `);

    // 5. Criar índices para melhor performance
    console.log('📝 Criando índices...');
    db.exec(`
        CREATE INDEX IF NOT EXISTS idx_pedidos_compra_numero ON pedidos_compra(numero_pedido);
        CREATE INDEX IF NOT EXISTS idx_pedidos_compra_fornecedor ON pedidos_compra(fornecedor_id);
        CREATE INDEX IF NOT EXISTS idx_pedidos_compra_status ON pedidos_compra(status);
        CREATE INDEX IF NOT EXISTS idx_pedidos_compra_data ON pedidos_compra(data_pedido);
        CREATE INDEX IF NOT EXISTS idx_pedidos_itens_pedido ON pedidos_compra_itens(pedido_id);
        CREATE INDEX IF NOT EXISTS idx_pedidos_itens_material ON pedidos_compra_itens(material_id);
        CREATE INDEX IF NOT EXISTS idx_pedidos_historico_pedido ON pedidos_compra_historico(pedido_id);
        CREATE INDEX IF NOT EXISTS idx_pedidos_recebimentos_pedido ON pedidos_compra_recebimentos(pedido_id);
    `);

    // 6. Criar triggers para atualizar totais e datas
    console.log('📝 Criando triggers...');
    
    // Trigger para atualizar updated_at em pedidos_compra
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_pedidos_compra_updated_at
        AFTER UPDATE ON pedidos_compra
        BEGIN
            UPDATE pedidos_compra 
            SET updated_at = datetime('now', 'localtime')
            WHERE id = NEW.id;
        END;
    `);

    // Trigger para atualizar updated_at em pedidos_compra_itens
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_pedidos_itens_updated_at
        AFTER UPDATE ON pedidos_compra_itens
        BEGIN
            UPDATE pedidos_compra_itens 
            SET updated_at = datetime('now', 'localtime')
            WHERE id = NEW.id;
        END;
    `);

    // Trigger para calcular valor_total do item quando inserido/atualizado
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_calcular_valor_item_insert
        AFTER INSERT ON pedidos_compra_itens
        BEGIN
            UPDATE pedidos_compra_itens 
            SET valor_total = quantidade * preco_unitario
            WHERE id = NEW.id;
            
            -- Atualizar total do pedido
            UPDATE pedidos_compra 
            SET valor_total = (
                SELECT COALESCE(SUM(valor_total), 0) 
                FROM pedidos_compra_itens 
                WHERE pedido_id = NEW.pedido_id
            ),
            valor_total_final = valor_total + COALESCE(valor_frete, 0) - COALESCE(valor_desconto, 0)
            WHERE id = NEW.pedido_id;
        END;
    `);

    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_calcular_valor_item_update
        AFTER UPDATE ON pedidos_compra_itens
        BEGIN
            UPDATE pedidos_compra_itens 
            SET valor_total = quantidade * preco_unitario
            WHERE id = NEW.id;
            
            -- Atualizar total do pedido
            UPDATE pedidos_compra 
            SET valor_total = (
                SELECT COALESCE(SUM(valor_total), 0) 
                FROM pedidos_compra_itens 
                WHERE pedido_id = NEW.pedido_id
            ),
            valor_total_final = valor_total + COALESCE(valor_frete, 0) - COALESCE(valor_desconto, 0)
            WHERE id = NEW.pedido_id;
        END;
    `);

    // Trigger para recalcular total quando item é removido
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_calcular_valor_item_delete
        AFTER DELETE ON pedidos_compra_itens
        BEGIN
            UPDATE pedidos_compra 
            SET valor_total = (
                SELECT COALESCE(SUM(valor_total), 0) 
                FROM pedidos_compra_itens 
                WHERE pedido_id = OLD.pedido_id
            ),
            valor_total_final = valor_total + COALESCE(valor_frete, 0) - COALESCE(valor_desconto, 0)
            WHERE id = OLD.pedido_id;
        END;
    `);

    // Trigger para recalcular total quando frete/desconto é alterado
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_calcular_valor_final_update
        AFTER UPDATE OF valor_frete, valor_desconto ON pedidos_compra
        BEGIN
            UPDATE pedidos_compra 
            SET valor_total_final = valor_total + COALESCE(NEW.valor_frete, 0) - COALESCE(NEW.valor_desconto, 0)
            WHERE id = NEW.id;
        END;
    `);

    // Trigger para registrar mudanças de status no histórico
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_historico_status_update
        AFTER UPDATE OF status ON pedidos_compra
        WHEN OLD.status != NEW.status
        BEGIN
            INSERT INTO pedidos_compra_historico (
                pedido_id, 
                status_anterior, 
                status_novo, 
                observacoes, 
                created_by
            ) VALUES (
                NEW.id,
                OLD.status,
                NEW.status,
                'Alteração automática de status',
                NEW.updated_by
            );
        END;
    `);

    // Trigger para atualizar quantidade recebida nos itens
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_atualizar_quantidade_recebida
        AFTER INSERT ON pedidos_compra_recebimentos
        BEGIN
            UPDATE pedidos_compra_itens 
            SET quantidade_recebida = (
                SELECT COALESCE(SUM(quantidade_recebida), 0) 
                FROM pedidos_compra_recebimentos 
                WHERE item_id = NEW.item_id
            )
            WHERE id = NEW.item_id;
            
            -- Verificar se o pedido foi totalmente recebido
            UPDATE pedidos_compra 
            SET status = CASE 
                WHEN (
                    SELECT COUNT(*) 
                    FROM pedidos_compra_itens 
                    WHERE pedido_id = NEW.pedido_id 
                    AND quantidade_recebida >= quantidade
                ) = (
                    SELECT COUNT(*) 
                    FROM pedidos_compra_itens 
                    WHERE pedido_id = NEW.pedido_id
                ) THEN 'recebido_total'
                WHEN (
                    SELECT COUNT(*) 
                    FROM pedidos_compra_itens 
                    WHERE pedido_id = NEW.pedido_id 
                    AND quantidade_recebida > 0
                ) > 0 THEN 'recebido_parcial'
                ELSE status
            END
            WHERE id = NEW.pedido_id;
        END;
    `);

    // 7. Criar função para gerar número do pedido
    console.log('📝 Criando função para gerar número do pedido...');
    
    // Criar tabela para controle de numeração
    db.exec(`
        CREATE TABLE IF NOT EXISTS pedidos_compra_numeracao (
            id INTEGER PRIMARY KEY DEFAULT 1,
            ultimo_numero INTEGER DEFAULT 0,
            ano INTEGER DEFAULT 0,
            prefixo TEXT DEFAULT 'PC',
            CHECK (id = 1)
        );
    `);

    // Inserir configuração inicial se não existir
    db.exec(`
        INSERT OR IGNORE INTO pedidos_compra_numeracao (id, ultimo_numero, ano, prefixo) 
        VALUES (1, 0, strftime('%Y', 'now'), 'PC');
    `);

    // Trigger para gerar número automático
    db.exec(`
        CREATE TRIGGER IF NOT EXISTS tr_gerar_numero_pedido
        BEFORE INSERT ON pedidos_compra
        WHEN NEW.numero_pedido IS NULL OR NEW.numero_pedido = ''
        BEGIN
            UPDATE pedidos_compra_numeracao 
            SET ultimo_numero = ultimo_numero + 1,
                ano = CASE 
                    WHEN strftime('%Y', 'now') != ano THEN strftime('%Y', 'now')
                    ELSE ano 
                END,
                ultimo_numero = CASE
                    WHEN strftime('%Y', 'now') != ano THEN 1
                    ELSE ultimo_numero + 1
                END
            WHERE id = 1;
            
            UPDATE NEW 
            SET numero_pedido = (
                SELECT prefixo || '-' || ano || '-' || printf('%04d', ultimo_numero) 
                FROM pedidos_compra_numeracao 
                WHERE id = 1
            );
        END;
    `);

    // 8. Verificar se tabelas foram criadas
    console.log('\n📋 Verificando tabelas criadas...');
    const tables = db.prepare(`
        SELECT name FROM sqlite_master 
        WHERE type='table' AND name LIKE 'pedidos_compra%'
        ORDER BY name
    `).all();

    console.log('✅ Tabelas de pedidos de compra criadas:');
    tables.forEach((table, index) => {
        console.log(`${index + 1}. ${table.name}`);
    });

    // 9. Inserir dados de teste se não existirem
    console.log('\n🧪 Verificando se existem dados de teste...');
    const pedidosCount = db.prepare('SELECT COUNT(*) as count FROM pedidos_compra').get();
    
    if (pedidosCount.count === 0) {
        console.log('📝 Inserindo dados de teste...');
        
        // Verificar se existem fornecedores
        const fornecedores = db.prepare('SELECT id, nome FROM fornecedores LIMIT 3').all();
        if (fornecedores.length === 0) {
            console.log('⚠️  Nenhum fornecedor encontrado. Criando fornecedores de teste...');
            db.exec(`
                INSERT INTO fornecedores (nome, email, telefone, endereco) VALUES
                ('Fornecedor Aço Brasil Ltda', 'vendas@acobrasil.com.br', '(11) 3456-7890', 'Rua Industrial, 123 - São Paulo/SP'),
                ('Materiais Industriais S.A.', 'contato@matindustriais.com.br', '(21) 2345-6789', 'Av. das Indústrias, 456 - Rio de Janeiro/RJ'),
                ('Distribuidora Metais & Cia', 'vendas@metaiscia.com.br', '(31) 3567-8901', 'Rua dos Metais, 789 - Belo Horizonte/MG');
            `);
            console.log('✅ Fornecedores de teste criados');
        }

        // Verificar se existem materiais
        const materiais = db.prepare('SELECT id, nome FROM materiais LIMIT 5').all();
        if (materiais.length === 0) {
            console.log('⚠️  Nenhum material encontrado. Criando materiais de teste...');
            db.exec(`
                INSERT INTO materiais (nome, unidade, preco, categoria_id, classe_id) VALUES
                ('Chapa de Aço 1020 - 3mm', 'KG', 8.50, 1, 1),
                ('Perfil U 100x50x4,75mm', 'M', 25.30, 1, 1),
                ('Tubo Redondo 50mm x 2mm', 'M', 18.75, 1, 1),
                ('Eletrodo E6013 3,25mm', 'KG', 12.80, 2, 2),
                ('Disco de Corte 4.1/2"', 'UN', 4.50, 3, 3);
            `);
            console.log('✅ Materiais de teste criados');
        }

        // Criar pedido de teste
        const stmt = db.prepare(`
            INSERT INTO pedidos_compra (
                fornecedor_id, 
                data_pedido, 
                data_entrega_prevista, 
                status, 
                observacoes,
                valor_frete,
                valor_desconto,
                created_by
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const pedidoId = stmt.run(
            1, // fornecedor_id
            new Date().toISOString().split('T')[0], // data_pedido
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // data_entrega_prevista (7 dias)
            'enviado',
            'Pedido de teste para validação do sistema',
            50.00, // valor_frete
            25.00, // valor_desconto
            'Sistema'
        ).lastInsertRowid;

        // Adicionar itens ao pedido
        const stmtItem = db.prepare(`
            INSERT INTO pedidos_compra_itens (
                pedido_id, 
                material_id, 
                quantidade, 
                preco_unitario,
                observacoes
            ) VALUES (?, ?, ?, ?, ?)
        `);

        stmtItem.run(pedidoId, 1, 100, 8.50, 'Chapa para estrutura principal');
        stmtItem.run(pedidoId, 2, 20, 25.30, 'Perfis para reforço');
        stmtItem.run(pedidoId, 3, 15, 18.75, 'Tubos para acabamento');

        console.log('✅ Pedido de teste criado com sucesso');
    }

    // 10. Mostrar estatísticas finais
    console.log('\n📊 ESTATÍSTICAS FINAIS:');
    console.log('========================');
    
    const stats = db.prepare(`
        SELECT 
            (SELECT COUNT(*) FROM pedidos_compra) as total_pedidos,
            (SELECT COUNT(*) FROM pedidos_compra_itens) as total_itens,
            (SELECT COUNT(*) FROM pedidos_compra_historico) as total_historico,
            (SELECT COUNT(*) FROM fornecedores) as total_fornecedores,
            (SELECT COUNT(*) FROM materiais) as total_materiais
    `).get();

    console.log(`📦 Pedidos de compra: ${stats.total_pedidos}`);
    console.log(`📋 Itens de pedidos: ${stats.total_itens}`);
    console.log(`📚 Registros de histórico: ${stats.total_historico}`);
    console.log(`🏪 Fornecedores: ${stats.total_fornecedores}`);
    console.log(`📦 Materiais: ${stats.total_materiais}`);

    db.close();
    console.log('\n🔒 Conexão fechada com sucesso');
    console.log('✅ Sistema de pedidos de compra implementado com sucesso!');

} catch (error) {
    console.error('❌ Erro ao implementar sistema de pedidos de compra:', error);
    process.exit(1);
}

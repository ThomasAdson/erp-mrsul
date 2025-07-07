/**
 * INTEGRAÇÃO INVENTOR API COM ERP MRSUL
 * 
 * Este script demonstra como extrair dados do Inventor e integrar com o ERP
 * Baseado na documentação da API do Inventor 2024
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

class InventorERPIntegration {
    constructor() {
        this.dbPath = 'X:\\Thomas\\ERP\\erp_mrsul.db';
        this.inventor = null;
        this.initDatabase();
    }

    /**
     * Inicializa conexão com banco de dados do ERP
     */
    initDatabase() {
        this.db = new sqlite3.Database(this.dbPath, (err) => {
            if (err) {
                console.error('Erro ao conectar com banco:', err);
            } else {
                console.log('✅ Conectado ao banco ERP');
                this.createTables();
            }
        });
    }

    /**
     * Cria tabelas para dados do Inventor
     */
    createTables() {
        const sql = `
            -- Tabela para componentes/peças
            CREATE TABLE IF NOT EXISTS inventor_components (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                part_number TEXT UNIQUE NOT NULL,
                description TEXT,
                material TEXT,
                mass REAL,
                volume REAL,
                density REAL,
                file_path TEXT,
                last_modified DATETIME DEFAULT CURRENT_TIMESTAMP,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            -- Tabela para BOMs (Lista de Materiais)
            CREATE TABLE IF NOT EXISTS inventor_boms (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                assembly_part_number TEXT NOT NULL,
                component_part_number TEXT NOT NULL,
                quantity INTEGER NOT NULL,
                item_number TEXT,
                level INTEGER DEFAULT 1,
                bom_view_type TEXT DEFAULT 'Structured',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (component_part_number) REFERENCES inventor_components(part_number)
            );

            -- Tabela para propriedades customizadas (iProperties)
            CREATE TABLE IF NOT EXISTS inventor_properties (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                part_number TEXT NOT NULL,
                property_set TEXT NOT NULL,
                property_name TEXT NOT NULL,
                property_value TEXT,
                property_type TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (part_number) REFERENCES inventor_components(part_number)
            );

            -- Tabela para histórico de mudanças
            CREATE TABLE IF NOT EXISTS inventor_changes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                document_path TEXT NOT NULL,
                change_type TEXT NOT NULL, -- 'save', 'open', 'close', 'bom_update'
                user_name TEXT,
                description TEXT,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `;

        this.db.exec(sql, (err) => {
            if (err) {
                console.error('Erro ao criar tabelas:', err);
            } else {
                console.log('✅ Tabelas do Inventor criadas/verificadas');
            }
        });
    }

    /**
     * Conecta com o Inventor via COM
     */
    connectToInventor() {
        try {
            // No Node.js Windows, usando ActiveXObject
            if (typeof ActiveXObject !== 'undefined') {
                this.inventor = new ActiveXObject("Inventor.Application");
                console.log('✅ Conectado ao Inventor');
                return true;
            } else {
                console.error('❌ ActiveXObject não disponível - Execute no Windows');
                return false;
            }
        } catch (error) {
            console.error('❌ Erro ao conectar com Inventor:', error.message);
            return false;
        }
    }

    /**
     * Extrai dados de BOM do documento ativo
     */
    extractBOMData() {
        if (!this.inventor) {
            console.error('❌ Inventor não conectado');
            return null;
        }

        try {
            const activeDoc = this.inventor.ActiveDocument;
            if (!activeDoc) {
                console.error('❌ Nenhum documento ativo no Inventor');
                return null;
            }

            // Verifica se é um assembly
            if (activeDoc.DocumentType !== 12290) { // kAssemblyDocumentObject
                console.error('❌ Documento ativo não é um assembly');
                return null;
            }

            const assemblyDef = activeDoc.ComponentDefinition;
            const bom = assemblyDef.BOM;
            
            // Habilita a visualização estruturada
            bom.StructuredViewEnabled = true;
            
            const bomView = bom.BOMViews.Item("Structured");
            const bomRows = bomView.BOMRows;

            const bomData = {
                assemblyName: activeDoc.DisplayName,
                assemblyPartNumber: this.getPartNumber(activeDoc),
                components: []
            };

            // Itera através das linhas do BOM
            for (let i = 1; i <= bomRows.Count; i++) {
                const row = bomRows.Item(i);
                const compDef = row.ComponentDefinitions.Item(1);
                const doc = compDef.Document;
                
                const component = {
                    itemNumber: row.ItemNumber,
                    partNumber: this.getPartNumber(doc),
                    description: this.getDescription(doc),
                    material: this.getMaterial(doc),
                    quantity: row.ItemQuantity,
                    level: 1 // Simplificado - pode ser calculado recursivamente
                };

                // Adiciona propriedades físicas se disponível
                if (compDef.MassProperties) {
                    const massProps = compDef.MassProperties;
                    component.mass = massProps.Mass;
                    component.volume = massProps.Volume;
                    component.density = massProps.Density;
                }

                bomData.components.push(component);
            }

            console.log(`✅ BOM extraído: ${bomData.components.length} componentes`);
            return bomData;

        } catch (error) {
            console.error('❌ Erro ao extrair BOM:', error.message);
            return null;
        }
    }

    /**
     * Obtém Part Number do documento
     */
    getPartNumber(document) {
        try {
            const propSet = document.PropertySets.Item("Design Tracking Properties");
            return propSet.Item("Part Number").Value || document.DisplayName;
        } catch (error) {
            return document.DisplayName;
        }
    }

    /**
     * Obtém descrição do documento
     */
    getDescription(document) {
        try {
            const propSet = document.PropertySets.Item("Design Tracking Properties");
            return propSet.Item("Description").Value || "";
        } catch (error) {
            return "";
        }
    }

    /**
     * Obtém material do documento
     */
    getMaterial(document) {
        try {
            const propSet = document.PropertySets.Item("Design Tracking Properties");
            return propSet.Item("Material").Value || "";
        } catch (error) {
            return "";
        }
    }

    /**
     * Salva dados de BOM no banco do ERP
     */
    saveBOMToERP(bomData) {
        if (!bomData) return;

        const stmt = this.db.prepare(`
            INSERT OR REPLACE INTO inventor_boms 
            (assembly_part_number, component_part_number, quantity, item_number, level)
            VALUES (?, ?, ?, ?, ?)
        `);

        // Limpa BOM anterior deste assembly
        this.db.run(
            'DELETE FROM inventor_boms WHERE assembly_part_number = ?',
            [bomData.assemblyPartNumber]
        );

        // Insere novos dados
        bomData.components.forEach(component => {
            stmt.run([
                bomData.assemblyPartNumber,
                component.partNumber,
                component.quantity,
                component.itemNumber,
                component.level
            ]);

            // Salva também dados do componente
            this.saveComponentToERP(component);
        });

        stmt.finalize();
        console.log(`✅ BOM salvo no ERP: ${bomData.components.length} componentes`);
    }

    /**
     * Salva dados do componente no ERP
     */
    saveComponentToERP(component) {
        const stmt = this.db.prepare(`
            INSERT OR REPLACE INTO inventor_components 
            (part_number, description, material, mass, volume, density)
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        stmt.run([
            component.partNumber,
            component.description,
            component.material,
            component.mass || null,
            component.volume || null,
            component.density || null
        ]);

        stmt.finalize();
    }

    /**
     * Registra mudanças no histórico
     */
    logChange(documentPath, changeType, description = '') {
        const stmt = this.db.prepare(`
            INSERT INTO inventor_changes 
            (document_path, change_type, user_name, description)
            VALUES (?, ?, ?, ?)
        `);

        const userName = this.inventor ? this.inventor.UserName : 'System';
        
        stmt.run([documentPath, changeType, userName, description]);
        stmt.finalize();
    }

    /**
     * Método principal para sincronização
     */
    async syncWithERP() {
        console.log('🔄 Iniciando sincronização Inventor ↔ ERP...');
        
        if (!this.connectToInventor()) {
            return false;
        }

        try {
            // Extrai dados do documento ativo
            const bomData = this.extractBOMData();
            
            if (bomData) {
                // Salva no banco do ERP
                this.saveBOMToERP(bomData);
                
                // Registra no histórico
                this.logChange(
                    this.inventor.ActiveDocument.FullFileName,
                    'bom_sync',
                    `Sincronizado ${bomData.components.length} componentes`
                );

                console.log('✅ Sincronização concluída com sucesso!');
                return true;
            }
        } catch (error) {
            console.error('❌ Erro na sincronização:', error.message);
            return false;
        }
    }

    /**
     * Configura eventos do Inventor (requer Add-in)
     */
    setupInventorEvents() {
        // Esta funcionalidade requer um Add-in personalizado
        // Por enquanto, pode ser executado manualmente ou via script
        console.log('ℹ️  Para eventos automáticos, implemente um Add-in do Inventor');
    }

    /**
     * Fecha conexões
     */
    close() {
        if (this.db) {
            this.db.close();
        }
        console.log('🔄 Conexões fechadas');
    }
}

// Exemplo de uso
async function main() {
    const integration = new InventorERPIntegration();
    
    // Executa sincronização
    await integration.syncWithERP();
    
    // Mantém processo ativo para desenvolvimento
    // integration.close();
}

// Executa se chamado diretamente
if (require.main === module) {
    main().catch(console.error);
}

module.exports = InventorERPIntegration;

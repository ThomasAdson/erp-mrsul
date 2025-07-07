#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import sqlite3 from "sqlite3";
import { promisify } from "util";
import * as path from "path";
import * as fs from "fs";

// Configuração do banco de dados
const DATABASE_PATH = "X:\\Thomas\\ERP\\erp_mrsul.db";

// Classe para gerenciar conexão SQLite com promessas
class SQLiteDatabase {
  private db: sqlite3.Database | null = null;

  constructor(private dbPath: string) {}

  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(this.dbPath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async close(): Promise<void> {
    if (!this.db) return;
    return new Promise((resolve, reject) => {
      this.db!.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async query(sql: string, params: any[] = []): Promise<any[]> {
    if (!this.db) throw new Error("Database not connected");
    
    return new Promise((resolve, reject) => {
      this.db!.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows || []);
        }
      });
    });
  }

  async run(sql: string, params: any[] = []): Promise<{ lastID: number; changes: number }> {
    if (!this.db) throw new Error("Database not connected");
    
    return new Promise((resolve, reject) => {
      this.db!.run(sql, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ lastID: this.lastID, changes: this.changes });
        }
      });
    });
  }

  async getSchema(): Promise<any[]> {
    return this.query(`
      SELECT name, type, sql 
      FROM sqlite_master 
      WHERE type IN ('table', 'view', 'index', 'trigger')
      ORDER BY type, name
    `);
  }

  async getTableInfo(tableName: string): Promise<any[]> {
    return this.query(`PRAGMA table_info(${tableName})`);
  }
}

// Instância do banco de dados (será inicializada na função main)
let database: SQLiteDatabase;

// Função para validar SQL (segurança básica)
function validateSQL(sql: string): { isValid: boolean; reason?: string } {
  const sqlTrimmed = sql.trim().toLowerCase();
  
  // Lista de comandos perigosos
  const dangerousCommands = [
    'drop table',
    'drop database',
    'drop schema',
    'truncate',
    'delete from sqlite_master',
    'pragma',
    'attach',
    'detach'
  ];

  for (const dangerous of dangerousCommands) {
    if (sqlTrimmed.includes(dangerous)) {
      return { isValid: false, reason: `Comando perigoso detectado: ${dangerous}` };
    }
  }

  return { isValid: true };
}

// Criar instância do servidor MCP
const server = new McpServer({
  name: "erp-sqlite-mcp",
  version: "1.0.0",
  capabilities: {
    tools: {},
    resources: {}
  },
});

// Registrar ferramentas do MCP
server.tool(
  "query-database",
  "Execute uma consulta SELECT no banco de dados ERP",
  {
    sql: z.string().describe("Comando SQL SELECT para executar"),
    limit: z.number().optional().describe("Limite de registros (padrão: 100)")
  },
  async ({ sql, limit = 100 }) => {
    try {
      const validation = validateSQL(sql);
      if (!validation.isValid) {
        return {
          content: [
            {
              type: "text",
              text: `Erro de validação: ${validation.reason}`
            }
          ]
        };
      }

      // Adicionar LIMIT se não estiver presente
      const sqlWithLimit = sql.toLowerCase().includes('limit') 
        ? sql 
        : `${sql} LIMIT ${limit}`;

      const results = await database.query(sqlWithLimit);
      
      return {
        content: [
          {
            type: "text",
            text: `Consulta executada com sucesso. ${results.length} registros encontrados:\n\n${JSON.stringify(results, null, 2)}`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Erro ao executar consulta: ${error instanceof Error ? error.message : String(error)}`
          }
        ]
      };
    }
  }
);

server.tool(
  "insert-data",
  "Inserir dados no banco de dados ERP",
  {
    table: z.string().describe("Nome da tabela"),
    data: z.record(z.any()).describe("Dados para inserir (objeto chave-valor)")
  },
  async ({ table, data }) => {
    try {
      const columns = Object.keys(data);
      const values = Object.values(data);
      const placeholders = columns.map(() => '?').join(', ');
      
      const sql = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`;
      
      const result = await database.run(sql, values);
      
      return {
        content: [
          {
            type: "text",
            text: `Dados inseridos com sucesso. ID: ${result.lastID}, Registros afetados: ${result.changes}`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Erro ao inserir dados: ${error instanceof Error ? error.message : String(error)}`
          }
        ]
      };
    }
  }
);

server.tool(
  "update-data",
  "Atualizar dados no banco de dados ERP",
  {
    table: z.string().describe("Nome da tabela"),
    data: z.record(z.any()).describe("Dados para atualizar"),
    where: z.string().describe("Condição WHERE (ex: id = 1)")
  },
  async ({ table, data, where }) => {
    try {
      const columns = Object.keys(data);
      const values = Object.values(data);
      const setClause = columns.map(col => `${col} = ?`).join(', ');
      
      const sql = `UPDATE ${table} SET ${setClause} WHERE ${where}`;
      
      const result = await database.run(sql, values);
      
      return {
        content: [
          {
            type: "text",
            text: `Dados atualizados com sucesso. Registros afetados: ${result.changes}`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Erro ao atualizar dados: ${error instanceof Error ? error.message : String(error)}`
          }
        ]
      };
    }
  }
);

server.tool(
  "delete-data",
  "Deletar dados do banco de dados ERP",
  {
    table: z.string().describe("Nome da tabela"),
    where: z.string().describe("Condição WHERE (ex: id = 1)")
  },
  async ({ table, where }) => {
    try {
      const sql = `DELETE FROM ${table} WHERE ${where}`;
      
      const result = await database.run(sql);
      
      return {
        content: [
          {
            type: "text",
            text: `Dados deletados com sucesso. Registros afetados: ${result.changes}`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Erro ao deletar dados: ${error instanceof Error ? error.message : String(error)}`
          }
        ]
      };
    }
  }
);

server.tool(
  "get-schema",
  "Obter estrutura do banco de dados (tabelas, views, índices)",
  {},
  async () => {
    try {
      const schema = await database.getSchema();
      
      return {
        content: [
          {
            type: "text",
            text: `Estrutura do banco de dados:\n\n${JSON.stringify(schema, null, 2)}`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Erro ao obter schema: ${error instanceof Error ? error.message : String(error)}`
          }
        ]
      };
    }
  }
);

server.tool(
  "get-table-info",
  "Obter informações detalhadas de uma tabela específica",
  {
    tableName: z.string().describe("Nome da tabela")
  },
  async ({ tableName }) => {
    try {
      const tableInfo = await database.getTableInfo(tableName);
      
      return {
        content: [
          {
            type: "text",
            text: `Informações da tabela '${tableName}':\n\n${JSON.stringify(tableInfo, null, 2)}`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Erro ao obter informações da tabela: ${error instanceof Error ? error.message : String(error)}`
          }
        ]
      };
    }
  }
);

server.tool(
  "list-tables",
  "Listar todas as tabelas do banco de dados",
  {},
  async () => {
    try {
      const tables = await database.query(`
        SELECT name FROM sqlite_master 
        WHERE type='table' AND name NOT LIKE 'sqlite_%'
        ORDER BY name
      `);
      
      const tableNames = tables.map(t => t.name);
      
      return {
        content: [
          {
            type: "text",
            text: `Tabelas disponíveis no banco:\n\n${tableNames.join('\n')}`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Erro ao listar tabelas: ${error instanceof Error ? error.message : String(error)}`
          }
        ]
      };
    }
  }
);

server.tool(
  "execute-ddl",
  "Executar comandos DDL (CREATE, ALTER, DROP) no banco de dados",
  {
    sql: z.string().describe("Comando DDL para executar (CREATE TABLE, ALTER TABLE, etc.)")
  },
  async ({ sql }) => {
    try {
      const sqlTrimmed = sql.trim().toLowerCase();
      
      // Permitir apenas comandos DDL seguros
      const allowedDDL = [
        'create table',
        'create index',
        'alter table',
        'create view'
      ];
      
      const isAllowed = allowedDDL.some(cmd => sqlTrimmed.startsWith(cmd));
      if (!isAllowed) {
        return {
          content: [
            {
              type: "text",
              text: `Erro: Apenas comandos DDL seguros são permitidos (CREATE TABLE, CREATE INDEX, ALTER TABLE, CREATE VIEW)`
            }
          ]
        };
      }
      
      // Verificar comandos perigosos específicos
      const dangerousCommands = [
        'drop table',
        'drop database',
        'drop schema',
        'truncate',
        'delete from sqlite_master'
      ];
      
      for (const dangerous of dangerousCommands) {
        if (sqlTrimmed.includes(dangerous)) {
          return {
            content: [
              {
                type: "text",
                text: `Erro: Comando perigoso detectado: ${dangerous}`
              }
            ]
          };
        }
      }
      
      const result = await database.run(sql);
      
      return {
        content: [
          {
            type: "text",
            text: `Comando DDL executado com sucesso. Registros afetados: ${result.changes}`
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Erro ao executar DDL: ${error instanceof Error ? error.message : String(error)}`
          }
        ]
      };
    }
  }
);

// Função principal
async function main() {
  try {
    // Verificar se o banco existe no caminho principal
    let dbPath = DATABASE_PATH;
    if (!fs.existsSync(DATABASE_PATH)) {
      console.error(`Banco não encontrado em: ${DATABASE_PATH}`);
      console.error(`Verifique se o banco de dados existe no caminho correto.`);
      process.exit(1);
    }

    // Inicializar e conectar ao banco com o caminho correto
    database = new SQLiteDatabase(dbPath);
    await database.connect();
    console.error(`Conectado ao banco SQLite: ${dbPath}`);

    // Configurar transporte stdio
    const transport = new StdioServerTransport();
    await server.connect(transport);
    
    console.error("ERP SQLite MCP Server rodando via stdio");
  } catch (error) {
    console.error("Erro fatal no servidor:", error);
    process.exit(1);
  }
}

// Lidar com sinais de encerramento
process.on('SIGINT', async () => {
  console.error("Recebido SIGINT, encerrando servidor...");
  await database.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.error("Recebido SIGTERM, encerrando servidor...");
  await database.close();
  process.exit(0);
});

// Executar servidor
main().catch((error) => {
  console.error("Erro fatal:", error);
  process.exit(1);
});

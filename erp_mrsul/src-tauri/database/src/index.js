#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
var stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
var zod_1 = require("zod");
var sqlite3_1 = require("sqlite3");
var fs_1 = require("fs");
// Configuração do banco de dados
var DATABASE_PATH = "X:\\Thomas\\ERP\\erp_mrsul.db";
var FALLBACK_DATABASE_PATH = "./erp_mrsul.db";
// Classe para gerenciar conexão SQLite com promessas
var SQLiteDatabase = /** @class */ (function () {
    function SQLiteDatabase(dbPath) {
        this.dbPath = dbPath;
        this.db = null;
    }
    SQLiteDatabase.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.db = new sqlite3_1.default.Database(_this.dbPath, function (err) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve();
                            }
                        });
                    })];
            });
        });
    };
    SQLiteDatabase.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.db)
                    return [2 /*return*/];
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.db.close(function (err) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve();
                            }
                        });
                    })];
            });
        });
    };
    SQLiteDatabase.prototype.query = function (sql_1) {
        return __awaiter(this, arguments, void 0, function (sql, params) {
            var _this = this;
            if (params === void 0) { params = []; }
            return __generator(this, function (_a) {
                if (!this.db)
                    throw new Error("Database not connected");
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.db.all(sql, params, function (err, rows) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve(rows || []);
                            }
                        });
                    })];
            });
        });
    };
    SQLiteDatabase.prototype.run = function (sql_1) {
        return __awaiter(this, arguments, void 0, function (sql, params) {
            var _this = this;
            if (params === void 0) { params = []; }
            return __generator(this, function (_a) {
                if (!this.db)
                    throw new Error("Database not connected");
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.db.run(sql, params, function (err) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve({ lastID: this.lastID, changes: this.changes });
                            }
                        });
                    })];
            });
        });
    };
    SQLiteDatabase.prototype.getSchema = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.query("\n      SELECT name, type, sql \n      FROM sqlite_master \n      WHERE type IN ('table', 'view', 'index', 'trigger')\n      ORDER BY type, name\n    ")];
            });
        });
    };
    SQLiteDatabase.prototype.getTableInfo = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.query("PRAGMA table_info(".concat(tableName, ")"))];
            });
        });
    };
    return SQLiteDatabase;
}());
// Instância do banco de dados
var database = new SQLiteDatabase(DATABASE_PATH);
// Função para validar SQL (segurança básica)
function validateSQL(sql) {
    var sqlTrimmed = sql.trim().toLowerCase();
    // Lista de comandos perigosos
    var dangerousCommands = [
        'drop table',
        'drop database',
        'drop schema',
        'truncate',
        'delete from sqlite_master',
        'pragma',
        'attach',
        'detach'
    ];
    for (var _i = 0, dangerousCommands_1 = dangerousCommands; _i < dangerousCommands_1.length; _i++) {
        var dangerous = dangerousCommands_1[_i];
        if (sqlTrimmed.includes(dangerous)) {
            return { isValid: false, reason: "Comando perigoso detectado: ".concat(dangerous) };
        }
    }
    return { isValid: true };
}
// Criar instância do servidor MCP
var server = new mcp_js_1.McpServer({
    name: "erp-sqlite-mcp",
    version: "1.0.0",
    capabilities: {
        tools: {},
        resources: {}
    },
});
// Registrar ferramentas do MCP
server.tool("query-database", "Execute uma consulta SELECT no banco de dados ERP", {
    sql: zod_1.z.string().describe("Comando SQL SELECT para executar"),
    limit: zod_1.z.number().optional().describe("Limite de registros (padrão: 100)")
}, function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var validation, sqlWithLimit, results, error_1;
    var sql = _b.sql, _c = _b.limit, limit = _c === void 0 ? 100 : _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                validation = validateSQL(sql);
                if (!validation.isValid) {
                    return [2 /*return*/, {
                            content: [
                                {
                                    type: "text",
                                    text: "Erro de valida\u00E7\u00E3o: ".concat(validation.reason)
                                }
                            ]
                        }];
                }
                sqlWithLimit = sql.toLowerCase().includes('limit')
                    ? sql
                    : "".concat(sql, " LIMIT ").concat(limit);
                return [4 /*yield*/, database.query(sqlWithLimit)];
            case 1:
                results = _d.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Consulta executada com sucesso. ".concat(results.length, " registros encontrados:\n\n").concat(JSON.stringify(results, null, 2))
                            }
                        ]
                    }];
            case 2:
                error_1 = _d.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Erro ao executar consulta: ".concat(error_1 instanceof Error ? error_1.message : String(error_1))
                            }
                        ]
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); });
server.tool("insert-data", "Inserir dados no banco de dados ERP", {
    table: zod_1.z.string().describe("Nome da tabela"),
    data: zod_1.z.record(zod_1.z.any()).describe("Dados para inserir (objeto chave-valor)")
}, function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var columns, values, placeholders, sql, result, error_2;
    var table = _b.table, data = _b.data;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                columns = Object.keys(data);
                values = Object.values(data);
                placeholders = columns.map(function () { return '?'; }).join(', ');
                sql = "INSERT INTO ".concat(table, " (").concat(columns.join(', '), ") VALUES (").concat(placeholders, ")");
                return [4 /*yield*/, database.run(sql, values)];
            case 1:
                result = _c.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Dados inseridos com sucesso. ID: ".concat(result.lastID, ", Registros afetados: ").concat(result.changes)
                            }
                        ]
                    }];
            case 2:
                error_2 = _c.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Erro ao inserir dados: ".concat(error_2 instanceof Error ? error_2.message : String(error_2))
                            }
                        ]
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); });
server.tool("update-data", "Atualizar dados no banco de dados ERP", {
    table: zod_1.z.string().describe("Nome da tabela"),
    data: zod_1.z.record(zod_1.z.any()).describe("Dados para atualizar"),
    where: zod_1.z.string().describe("Condição WHERE (ex: id = 1)")
}, function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var columns, values, setClause, sql, result, error_3;
    var table = _b.table, data = _b.data, where = _b.where;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                columns = Object.keys(data);
                values = Object.values(data);
                setClause = columns.map(function (col) { return "".concat(col, " = ?"); }).join(', ');
                sql = "UPDATE ".concat(table, " SET ").concat(setClause, " WHERE ").concat(where);
                return [4 /*yield*/, database.run(sql, values)];
            case 1:
                result = _c.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Dados atualizados com sucesso. Registros afetados: ".concat(result.changes)
                            }
                        ]
                    }];
            case 2:
                error_3 = _c.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Erro ao atualizar dados: ".concat(error_3 instanceof Error ? error_3.message : String(error_3))
                            }
                        ]
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); });
server.tool("delete-data", "Deletar dados do banco de dados ERP", {
    table: zod_1.z.string().describe("Nome da tabela"),
    where: zod_1.z.string().describe("Condição WHERE (ex: id = 1)")
}, function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var sql, result, error_4;
    var table = _b.table, where = _b.where;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                sql = "DELETE FROM ".concat(table, " WHERE ").concat(where);
                return [4 /*yield*/, database.run(sql)];
            case 1:
                result = _c.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Dados deletados com sucesso. Registros afetados: ".concat(result.changes)
                            }
                        ]
                    }];
            case 2:
                error_4 = _c.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Erro ao deletar dados: ".concat(error_4 instanceof Error ? error_4.message : String(error_4))
                            }
                        ]
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); });
server.tool("get-schema", "Obter estrutura do banco de dados (tabelas, views, índices)", {}, function () { return __awaiter(void 0, void 0, void 0, function () {
    var schema, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, database.getSchema()];
            case 1:
                schema = _a.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Estrutura do banco de dados:\n\n".concat(JSON.stringify(schema, null, 2))
                            }
                        ]
                    }];
            case 2:
                error_5 = _a.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Erro ao obter schema: ".concat(error_5 instanceof Error ? error_5.message : String(error_5))
                            }
                        ]
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); });
server.tool("get-table-info", "Obter informações detalhadas de uma tabela específica", {
    tableName: zod_1.z.string().describe("Nome da tabela")
}, function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var tableInfo, error_6;
    var tableName = _b.tableName;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                return [4 /*yield*/, database.getTableInfo(tableName)];
            case 1:
                tableInfo = _c.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Informa\u00E7\u00F5es da tabela '".concat(tableName, "':\n\n").concat(JSON.stringify(tableInfo, null, 2))
                            }
                        ]
                    }];
            case 2:
                error_6 = _c.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Erro ao obter informa\u00E7\u00F5es da tabela: ".concat(error_6 instanceof Error ? error_6.message : String(error_6))
                            }
                        ]
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); });
server.tool("list-tables", "Listar todas as tabelas do banco de dados", {}, function () { return __awaiter(void 0, void 0, void 0, function () {
    var tables, tableNames, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, database.query("\n        SELECT name FROM sqlite_master \n        WHERE type='table' AND name NOT LIKE 'sqlite_%'\n        ORDER BY name\n      ")];
            case 1:
                tables = _a.sent();
                tableNames = tables.map(function (t) { return t.name; });
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Tabelas dispon\u00EDveis no banco:\n\n".concat(tableNames.join('\n'))
                            }
                        ]
                    }];
            case 2:
                error_7 = _a.sent();
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Erro ao listar tabelas: ".concat(error_7 instanceof Error ? error_7.message : String(error_7))
                            }
                        ]
                    }];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Função principal
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var dbPath, transport, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    dbPath = DATABASE_PATH;
                    if (!fs_1.default.existsSync(DATABASE_PATH)) {
                        console.error("Banco principal n\u00E3o encontrado em: ".concat(DATABASE_PATH));
                        console.error("Tentando conectar ao banco local: ".concat(FALLBACK_DATABASE_PATH));
                        dbPath = FALLBACK_DATABASE_PATH;
                    }
                    // Conectar ao banco
                    return [4 /*yield*/, database.connect()];
                case 1:
                    // Conectar ao banco
                    _a.sent();
                    console.error("Conectado ao banco SQLite: ".concat(dbPath));
                    transport = new stdio_js_1.StdioServerTransport();
                    return [4 /*yield*/, server.connect(transport)];
                case 2:
                    _a.sent();
                    console.error("ERP SQLite MCP Server rodando via stdio");
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.error("Erro fatal no servidor:", error_8);
                    process.exit(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Lidar com sinais de encerramento
process.on('SIGINT', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error("Recebido SIGINT, encerrando servidor...");
                return [4 /*yield*/, database.close()];
            case 1:
                _a.sent();
                process.exit(0);
                return [2 /*return*/];
        }
    });
}); });
process.on('SIGTERM', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error("Recebido SIGTERM, encerrando servidor...");
                return [4 /*yield*/, database.close()];
            case 1:
                _a.sent();
                process.exit(0);
                return [2 /*return*/];
        }
    });
}); });
// Executar servidor
main().catch(function (error) {
    console.error("Erro fatal:", error);
    process.exit(1);
});

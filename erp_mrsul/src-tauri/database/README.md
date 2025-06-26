# ERP SQLite MCP Server

Este é um **Model Context Protocol (MCP) Server** que permite acesso direto ao banco de dados SQLite do sistema ERP MRSul através do Visual Studio Code.

## 🎯 **Funcionalidades**

- ✅ **Consultas SQL** - Execute comandos SELECT com segurança
- ✅ **Inserção de dados** - Adicione novos registros às tabelas
- ✅ **Atualização de dados** - Modifique registros existentes  
- ✅ **Exclusão de dados** - Remove registros com controle
- ✅ **Estrutura do banco** - Visualize schema, tabelas e colunas
- ✅ **Validação de segurança** - Previne comandos perigosos

## 🚀 **Como usar**

### 1. Compilar o projeto
```bash
npm run build
```

### 2. Executar o servidor
```bash
npm run start
```

### 3. Usar no VS Code
O servidor MCP se conecta automaticamente ao banco de dados em:
- **Caminho principal**: `X:\\Thomas\\ERP\\erp_mrsul.db`
- **Caminho alternativo**: `./erp_mrsul.db` (local)

## 🛠 **Ferramentas disponíveis**

### `query-database`
Execute consultas SELECT no banco de dados.
```
sql: "SELECT * FROM clients LIMIT 10"
limit: 100 (opcional)
```

### `insert-data`  
Insira novos registros em uma tabela.
```
table: "clients"
data: { "name": "Nova Empresa", "cnpj": "12345678000199" }
```

### `update-data`
Atualize registros existentes.
```
table: "clients"
data: { "name": "Empresa Atualizada" }
where: "id = 1"
```

### `delete-data`
Delete registros da tabela.
```
table: "clients"  
where: "id = 1"
```

### `get-schema`
Obtenha a estrutura completa do banco de dados.

### `get-table-info`
Obtenha informações detalhadas de uma tabela específica.
```
tableName: "clients"
```

### `list-tables`
Liste todas as tabelas disponíveis no banco.

## 🔒 **Segurança**

O servidor implementa validação básica para prevenir comandos perigosos:
- `DROP TABLE/DATABASE/SCHEMA`
- `TRUNCATE`
- `DELETE FROM sqlite_master`
- `PRAGMA`
- `ATTACH/DETACH`

## 📊 **Estrutura do banco ERP**

Principais tabelas disponíveis:
- `clients` - Clientes
- `projects` - Projetos  
- `equipment` - Equipamentos
- `material_class` - Classes de materiais
- `categorias` - Categorias
- `materiais` - Materiais

## 🔧 **Desenvolvimento**

Para desenvolvimento local:
```bash
npm run dev
```

## 📝 **Logs**

O servidor registra todas as operações e erros no console para auditoria e debugging.

---

**Configurado para integração com GitHub Copilot e assistentes IA via Model Context Protocol.**

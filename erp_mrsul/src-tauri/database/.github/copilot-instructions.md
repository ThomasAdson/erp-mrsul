<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# ERP SQLite MCP Server

Este é um MCP Server para acessar o banco de dados SQLite do sistema ERP MRSul.

## Instruções Específicas

- Este projeto implementa um Model Context Protocol (MCP) Server para SQLite
- O servidor conecta ao banco de dados `erp_mrsul.db` localizado em `X:\Thomas\ERP\erp_mrsul.db`
- Fornece ferramentas para consultar e modificar dados do ERP através de comandos SQL
- Você pode encontrar mais informações e exemplos em https://modelcontextprotocol.io/llms-full.txt

## Funcionalidades

- Consulta de dados das tabelas: clients, projects, equipment, material_class, categorias, materiais
- Execução de comandos SQL SELECT, INSERT, UPDATE, DELETE
- Listagem de estrutura de tabelas e schema do banco
- Backup e restore do banco de dados

## Segurança

- Implementa validação de comandos SQL para evitar operações perigosas
- Log de todas as operações executadas
- Controle de acesso baseado em tipos de operação (leitura/escrita)

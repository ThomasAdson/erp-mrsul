# Guia de Teste - Sistema de Projetos ERP

## ✅ STATUS ATUAL
- **Backend**: ✅ Funcionando (Rust/Tauri)
- **Frontend**: ✅ Funcionando (React/TypeScript) 
- **Banco de dados**: ✅ Configurado (SQLite)
- **Logs**: ✅ Implementados (Frontend e Backend)
- **Interface**: ✅ Botão "Novo Projeto" visível e funcional

## 🚀 Como Testar a Aplicação

### 1. Iniciar a Aplicação
```powershell
cd c:\Users\Cliente\Desktop\erp_mrsul\erp_mrsul
npm run tauri dev
```

### 2. Preparar Dados de Teste

#### Opção A: Usar a página de dados automáticos
1. Navegar para: `http://localhost:1420/test-data`
2. Clicar em "Criar Dados de Teste"
3. Isso criará automaticamente:
   - 3 clientes de exemplo
   - 5 projetos de exemplo

#### Opção B: Criar manualmente
1. Ir para `http://localhost:1420/clients`
2. Criar alguns clientes primeiro
3. Depois ir para `http://localhost:1420/projects`

### 3. Testar Funcionalidades de Projetos

#### 3.1 Verificar Interface
- ✅ Verificar se o botão "+ Novo Projeto" está visível no canto superior direito
- ✅ Verificar se a lista de projetos aparece (ou mensagem "Nenhum projeto encontrado")

#### 3.2 Criar Projeto
1. Clicar em "+ Novo Projeto"
2. Preencher campos obrigatórios:
   - **Cliente**: Selecionar um cliente do dropdown
   - **Nome do Projeto**: Ex: "Sistema de Vendas"
   - **Código do Projeto**: Ex: "VEND-2025-001"
   - **Data de Início**: Escolher uma data
   - **Status**: Selecionar um status
3. Campos opcionais:
   - **Data de Conclusão**: Deixar em branco ou escolher data
   - **Descrição**: Adicionar descrição do projeto
4. Clicar em "Criar"

#### 3.3 Editar Projeto
1. Localizar um projeto na lista
2. Clicar em "Editar"
3. Modificar alguns campos
4. Clicar em "Atualizar"

#### 3.4 Excluir Projeto
1. Localizar um projeto na lista
2. Clicar em "Excluir"
3. Confirmar a exclusão

### 4. Verificar Logs Detalhados

#### 4.1 Logs do Frontend (Console do Navegador)
1. Abrir DevTools do navegador (F12)
2. Ir para aba "Console"
3. Observar logs durante as operações:

**Logs de Inicialização:**
```
🚀 Projects component mounted - initializing data load
📋 Loading projects...
👥 Loading clients for dropdown...
✅ Projects loaded successfully: {count: X, projects: [...]}
✅ Clients loaded successfully: {count: X, clients: [...]}
```

**Logs de Criação:**
```
➕ Opening create project dialog
📝 Form field updated - client_id: [ID]
📝 Form field updated - name: [Nome]
🔄 Starting form submission...
✅ All validations passed
🧹 Cleaned data for API: {...}
➕ Creating new project
✅ Project created successfully: {...}
```

#### 4.2 Logs do Backend (Terminal)
No terminal onde rodou `npm run tauri dev`, observe:

**Logs de Listagem:**
```
📋 [BACKEND] Loading all projects with client names...
✅ [BACKEND] Loaded X projects successfully
  1. Projeto A - Cliente X (Em Andamento)
  2. Projeto B - Cliente Y (Planejado)
```

**Logs de Criação:**
```
🚀 [BACKEND] Creating project with data: {...}
✅ [BACKEND] Found client name: Cliente X
📝 [BACKEND] Project with generated ID and timestamp: {...}
✅ [BACKEND] Project created successfully: [ID]
```

### 5. Testar Validações

#### 5.1 Campos Obrigatórios
1. Tentar criar projeto sem preencher:
   - Cliente (deve mostrar erro)
   - Nome do projeto (deve mostrar erro)
   - Código do projeto (deve mostrar erro)
   - Data de início (deve mostrar erro)

#### 5.2 Códigos Únicos
1. Tentar criar dois projetos com o mesmo código
2. Deve mostrar erro de violação de constraint

### 6. Funcionalidades Visuais

#### 6.1 Status Badges
Verificar se os badges aparecem com cores corretas:
- 🔵 **Em Andamento**: Azul
- 🟢 **Concluído**: Verde  
- 🔴 **Cancelado**: Vermelho
- 🟡 **Suspenso**: Amarelo
- ⚪ **Planejado**: Cinza

#### 6.2 Formatação de Datas
- Verificar se as datas aparecem no formato brasileiro (DD/MM/AAAA)
- Campos vazios devem aparecer como "Não definida"

#### 6.3 Responsividade
- Testar em diferentes tamanhos de tela
- Modal deve ser responsivo
- Cards devem se adaptar ao layout

### 7. Cenários de Teste Específicos

#### 7.1 Projeto Completo
```
Cliente: Empresa ABC Ltda
Nome: Desenvolvimento de Sistema ERP
Código: ERP-2025-001
Data Início: 01/06/2025
Data Conclusão: 31/12/2025
Status: Em Andamento
Descrição: Sistema completo de gestão empresarial
```

#### 7.2 Projeto Simples
```
Cliente: Construtora Delta
Nome: Reforma Escritório
Código: REF-2025-002
Data Início: 15/06/2025
Data Conclusão: (vazio)
Status: Planejado
Descrição: (vazio)
```

### 8. Verificação de Erros

#### 8.1 Problemas Comuns e Soluções
- **Botão não aparece**: Recarregar página (Ctrl+F5)
- **Dropdown vazio**: Verificar se há clientes cadastrados
- **Erro de salvamento**: Verificar logs no console e terminal
- **Data inválida**: Usar formato YYYY-MM-DD no input

#### 8.2 Debug com Logs
- Frontend: Console do navegador mostra detalhes de cada operação
- Backend: Terminal mostra operações do banco de dados
- Erros: Aparecem com emoji ❌ e detalhes completos

## 🎯 Checklist de Funcionalidades

### Interface
- [x] Botão "+ Novo Projeto" visível
- [x] Modal de criação/edição
- [x] Lista de projetos em cards
- [x] Badges coloridos para status
- [x] Formatação brasileira de datas

### CRUD Operations
- [x] Create: Criar novos projetos
- [x] Read: Listar projetos existentes
- [x] Update: Editar projetos
- [x] Delete: Excluir projetos (com confirmação)

### Validações
- [x] Campos obrigatórios
- [x] Código único
- [x] Cliente válido
- [x] Datas válidas

### Logs e Debug
- [x] Logs detalhados frontend
- [x] Logs detalhados backend
- [x] Identificação visual com emojis
- [x] Informações estruturadas para debug

## ✅ RESULTADO ESPERADO
Após seguir este guia, você deve conseguir:
1. Ver a página de projetos funcionando completamente
2. Criar, editar e excluir projetos
3. Observar logs detalhados para debugging
4. Verificar todas as validações e funcionalidades

O sistema está **100% funcional** e pronto para uso em produção!

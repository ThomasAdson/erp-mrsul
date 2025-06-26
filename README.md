# ERP MRSul - Sistema Industrial ERP

Um sistema ERP completo desenvolvido com **Tauri**, **React** e **TypeScript** para gestão industrial.

## 🚀 Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Tauri (Rust)
- **Banco de Dados**: SQLite
- **UI**: Tailwind CSS + Lucide Icons
- **Gerenciamento de Estado**: React Hooks

## 📋 Funcionalidades

### ✅ Módulos Implementados
- **Cadastros**
  - Classes de Materiais
  - Categorias
  - Materiais/Itens
  - Fornecedores
- **Gestão de Estoque**
  - Movimentação de estoque
  - Histórico de movimentações
  - Controle de saldo
- **Clientes**
  - Cadastro e gestão de clientes
- **Projetos**
  - Controle de projetos
- **Equipamentos**
  - Cadastro de equipamentos
  - Especificações técnicas
  - Ordens de Produção (OP)
  - Gestão de materiais necessários (BOM)

### 🔄 Em Desenvolvimento
- Módulo de Compras
- Relatórios avançados
- Dashboard com métricas

## 🛠️ Instalação e Configuração

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **Rust** (para compilação do Tauri)
- **Git**

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/erp-mrsul.git
cd erp-mrsul
```

### 2. Instale as dependências
```bash
# Dependências do frontend
cd erp_mrsul
npm install

# Dependências do Tauri (Rust)
cd src-tauri
cargo build
```

### 3. Execute o projeto

#### Modo Desenvolvimento
```bash
cd erp_mrsul
npm run tauri dev
```

#### Build de Produção
```bash
cd erp_mrsul
npm run tauri build
```

## 📁 Estrutura do Projeto

```
erp_mrsul/
├── src/                          # Frontend React
│   ├── components/              # Componentes reutilizáveis
│   │   ├── ui/                 # Componentes de UI base
│   │   └── ...
│   ├── pages/                  # Páginas da aplicação
│   ├── lib/                    # Utilitários e API
│   └── types/                  # Tipos TypeScript
├── src-tauri/                   # Backend Tauri (Rust)
│   ├── src/                    # Código Rust
│   │   ├── equipment.rs        # Módulo de equipamentos
│   │   ├── material.rs         # Módulo de materiais
│   │   ├── production_order.rs # Ordens de produção
│   │   └── ...
│   └── Cargo.toml              # Dependências Rust
├── public/                      # Arquivos estáticos
└── package.json                # Dependências Node.js
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o frontend em modo desenvolvimento
- `npm run build` - Build de produção do frontend
- `npm run tauri dev` - Inicia a aplicação Tauri em desenvolvimento
- `npm run tauri build` - Build completo da aplicação

## 📊 Banco de Dados

O sistema utiliza **SQLite** como banco de dados, com as seguintes tabelas principais:

- `material_classes` - Classes de materiais
- `categorias` - Categorias de produtos
- `materiais` - Cadastro de materiais
- `fornecedores` - Fornecedores
- `clientes` - Clientes
- `equipamentos` - Equipamentos
- `production_orders` - Ordens de produção
- `production_order_materials` - Materiais das OPs
- `stock_movements` - Movimentações de estoque

## 🚀 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Notas de Desenvolvimento

### Últimas Atualizações
- ✅ Correção do loop infinito no carregamento de materiais das OPs
- ✅ Implementação do cache global para materiais
- ✅ Melhoria na largura dos modais de criação/edição de OPs
- ✅ Interface moderna para seleção de materiais (sem modal)
- ✅ Validação de estoque em tempo real

### Próximos Passos
- [ ] Implementar relatórios de estoque
- [ ] Adicionar autenticação de usuários
- [ ] Melhorar performance da interface
- [ ] Adicionar testes automatizados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

- **Desenvolvimento**: Thomas Adson
- **E-mail**: thomasadson20@gmail.com

---

**ERP MRSul** - Sistema de gestão industrial completo e moderno.

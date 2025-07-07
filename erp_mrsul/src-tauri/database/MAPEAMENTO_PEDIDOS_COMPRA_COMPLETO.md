📋 MAPEAMENTO COMPLETO: SISTEMA DE PEDIDOS DE COMPRA
=====================================================

## 🎯 **1. VISÃO GERAL DO SISTEMA**

O sistema de pedidos de compra do ERP Web é composto por:
- **Lista Principal**: Gestão e visualização de todos os pedidos
- **Formulário Modal**: Criação e edição de pedidos
- **Página de Perfil**: Detalhes completos de cada pedido individual
- **Sistema de Status**: Workflow completo do pedido
- **Integração**: Estoque, fornecedores, projetos e finanças

---

## 🗄️ **2. ESTRUTURA DO BANCO DE DADOS**

### **📋 Tabela Principal: `purchase_orders`**
```sql
CREATE TABLE purchase_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_id uuid REFERENCES fornecedores(id),
  projeto_id uuid REFERENCES projetos(id) NULL,
  order_code text UNIQUE NOT NULL,           -- Auto: "MRS-0001", "MRS-0002"...
  order_date date NOT NULL DEFAULT CURRENT_DATE,
  expected_delivery_date date NULL,
  status text NOT NULL DEFAULT 'Aguardando Aprovação',
  total_amount numeric NULL,                 -- Calculado automaticamente
  shipping_address text NULL,
  payment_terms text NULL,
  notes text NULL,
  comprovante_po_url text NULL,
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now()
);
```

### **📦 Tabela de Itens: `purchase_order_items`**
```sql
CREATE TABLE purchase_order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  purchase_order_id uuid REFERENCES purchase_orders(id),
  material_id uuid REFERENCES materiais(id),
  description text NULL,                     -- Opcional, usa material.descricao_completa
  quantity_ordered numeric NOT NULL CHECK > 0,
  unit text NOT NULL,                        -- Ex: "kg", "metro", "peça"
  unit_price numeric NULL CHECK >= 0,       -- Preço por unidade
  total_item_price numeric NULL,            -- quantity * unit_price (calculado)
  received_quantity numeric DEFAULT 0 CHECK >= 0,
  notes text NULL
);
```

### **📈 Tabela de Histórico: `purchase_order_status_history`**
```sql
CREATE TABLE purchase_order_status_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  purchase_order_id uuid REFERENCES purchase_orders(id),
  old_status text NULL,
  new_status text NOT NULL,
  changed_at timestamp DEFAULT now(),
  user_id uuid NULL,
  notes text NULL
);
```

---

## 🔄 **3. WORKFLOW DE STATUS**

### **Estados Possíveis:**
1. **"Aguardando Aprovação"** (inicial)
2. **"Aprovado"** 
3. **"Pedido Enviado"**
4. **"Parcialmente Recebido"** (alguns itens chegaram)
5. **"Pedido Recebido"** (todos os itens chegaram)
6. **"Cancelado"** (pode ser feito antes do recebimento)

### **Transições Permitidas:**
```
Aguardando Aprovação → Aprovado | Cancelado
Aprovado → Pedido Enviado | Cancelado
Pedido Enviado → Parcialmente Recebido | Pedido Recebido | Cancelado
Parcialmente Recebido → Pedido Recebido
```

---

## 🎨 **4. INTERFACE - LISTA PRINCIPAL**

### **📊 Tabela de Pedidos:**
- **Colunas:**
  - Código (link para perfil)
  - Fornecedor
  - Projeto (opcional)
  - Data Pedido
  - Entrega Prevista
  - Status (badge colorido)
  - Valor Total
  - Itens (popover com lista)
  - Comprovante (link se existir)
  - Ações de Status (botões condicionais)
  - Editar/Excluir

### **🔍 Funcionalidades:**
- Busca por código, fornecedor, status, projeto, notas
- Botões de ação por status
- Modal de recebimento
- Exportação para Excel/PDF
- Paginação

---

## 📝 **5. FORMULÁRIO MODAL**

### **📋 Campos do Cabeçalho:**
- **Código do Pedido** (auto-gerado, readonly)
- **Fornecedor*** (dropdown obrigatório)
- **Projeto** (dropdown opcional)
- **Data do Pedido*** (date picker, padrão hoje)
- **Entrega Prevista** (date picker opcional)
- **Status*** (dropdown, inicial: "Aguardando Aprovação")
- **Endereço de Entrega** (textarea)
- **Condições de Pagamento** (input)
- **Observações Gerais** (textarea)

### **📦 Seção de Itens:**
- **Adicionar Item:**
  - Material* (combobox com busca)
  - Descrição (auto-preenchida, editável)
  - Quantidade* (number input)
  - Unidade* (input, auto do material)
  - Preço Unitário (number input, opcional)
  
- **Lista de Itens:**
  - Tabela editável in-line
  - Cálculo automático de totais
  - Remoção de itens
  - Total geral do pedido

### **✅ Validações:**
- Fornecedor obrigatório
- Pelo menos 1 item no pedido
- Quantidade > 0
- Preço >= 0 (se informado)
- Código único (gerado automaticamente)

---

## 🏠 **6. PÁGINA DE PERFIL/DETALHES**

### **📄 Estrutura da Página:**

#### **🏷️ Cabeçalho do Pedido:**
- Título: "Pedido de Compra: MRS-0001"
- Subtítulo: "Fornecedor: Nome Fantasia"
- Badge de status (colorido)
- Botões: "Voltar" e "Gerar PDF"

#### **📊 Informações Principais:**
- **Grid Responsivo (3 colunas):**
  - Data do Pedido
  - Entrega Prevista  
  - Valor Total
  - Projeto Associado (se existir, com link)
  - Endereço de Entrega
  - Condições de Pagamento
  - Observações Gerais
  - Comprovante Principal (link se existir)

#### **📦 Tabela de Itens:**
- **Colunas:**
  - Material (código + descrição)
  - Descrição do Item
  - Qtd. Pedida
  - Unidade
  - Preço Unit.
  - Total Item
  - Qtd. Recebida

#### **📈 Histórico de Status:**
- **Tabela Cronológica:**
  - Data/Hora
  - Status Anterior (badge)
  - Novo Status (badge)
  - Notas/Detalhes

### **🖨️ Geração de PDF:**
- Layout profissional para impressão
- Logo da empresa (placeholder)
- Todas as informações do pedido
- Tabela de itens formatada
- Total destacado
- Rodapé com contatos

---

## ⚙️ **7. FUNCIONALIDADES AVANÇADAS**

### **📦 Recebimento de Pedidos:**
- Modal dedicado para recebimento
- Recebimento parcial ou total por item
- Campo para nota fiscal
- Upload de comprovante
- Atualização automática de estoque
- Histórico de recebimentos

### **💰 Integração Financeira:**
- Criação automática de contas a pagar
- Vínculo com pedido de compra
- Controle de pagamentos
- Relatórios financeiros

### **🔄 Ações por Status:**
- **Aguardando Aprovação:** Aprovar, Cancelar
- **Aprovado:** Enviar Pedido, Cancelar
- **Pedido Enviado:** Receber, Cancelar
- **Parcialmente Recebido:** Receber Restante
- **Pedido Recebido:** Visualizar (readonly)
- **Cancelado:** Visualizar (readonly)

### **📊 Relatórios e Exportação:**
- Exportação para Excel
- Geração de PDF individual
- Filtros avançados
- Métricas de fornecedores
- Análise de prazos

---

## 🚀 **8. APIS E ENDPOINTS**

### **CRUD Principal:**
- `GET /api/purchase-orders` - Listar pedidos
- `POST /api/purchase-orders` - Criar pedido
- `GET /api/purchase-orders/{id}` - Buscar por ID
- `PUT /api/purchase-orders/{id}` - Atualizar pedido
- `DELETE /api/purchase-orders/{id}` - Excluir pedido

### **Ações Especiais:**
- `POST /api/purchase-orders/{id}/update-status` - Alterar status
- `GET /api/purchase-orders/next-code` - Próximo código (RPC)

### **Suporte:**
- `GET /api/fornecedores` - Lista de fornecedores
- `GET /api/projetos` - Lista de projetos
- `GET /api/materials` - Lista de materiais

---

## 🎯 **9. IMPLEMENTAÇÃO NO ERP DESKTOP**

### **📋 Ordem de Implementação:**
1. **Estrutura do Banco (SQLite)**
2. **Backend Rust/Tauri (CRUD + Business Logic)**
3. **Frontend React (Lista + Modal)**
4. **Página de Perfil**
5. **Sistema de Status**
6. **Recebimento e Integrações**
7. **Relatórios e Exportação**

### **🔄 Melhorias Propostas:**
- Interface mais moderna
- Validações em tempo real
- Notificações push
- Backup automático
- Sincronização offline
- Relatórios avançados

---

🎉 **SISTEMA COMPLETO MAPEADO!**
=====================================
Todas as funcionalidades do sistema de pedidos de compra foram documentadas e estão prontas para implementação no ERP Desktop com melhorias significativas!

// Material Classes
export interface MaterialClass {
  id: string;
  code: string;
  name: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreateMaterialClassRequest {
  code: string;
  name: string;
}

export interface UpdateMaterialClassRequest {
  code?: string;
  name?: string;
}

// Client Interface
export interface Client {
  id: string;
  name: string;
  cnpj: string;
  address?: string;
  phone?: string;
  email?: string;
  notes?: string;
  created_at: string;
}

// Project Interface
export interface Project {
  id: string;
  client_id: string;
  client_name: string;
  name: string;
  code: string;
  start_date: string;
  end_date?: string;
  status: string;
  description?: string;
  created_at: string;
}

export interface CreateProjectRequest {
  client_id: string;
  name: string;
  code: string;
  start_date: string;
  end_date?: string;
  status: string;
  description?: string;
}

export interface UpdateProjectRequest {
  client_id: string;
  name: string;
  code: string;
  start_date: string;
  end_date?: string;
  status: string;
  description?: string;
}

// Project Status Options
export const PROJECT_STATUS_OPTIONS = [
  { value: 'Em Andamento', label: 'Em Andamento' },
  { value: 'Concluído', label: 'Concluído' },
  { value: 'Cancelado', label: 'Cancelado' },
  { value: 'Suspenso', label: 'Suspenso' },
  { value: 'Planejado', label: 'Planejado' }
] as const;

// Equipment Interface
export interface Equipment {
  id: string;
  client_id: string;
  client_name: string;
  project_id: string;
  project_name: string;
  project_code: string;
  equipment_type: string;
  serial_number: string;
  start_date?: string;
  end_date?: string;
  created_at: string;
}

export interface CreateEquipmentRequest {
  client_id: string;
  project_id: string;
  equipment_type: string;
  start_date: string;
  end_date?: string;
}

export interface UpdateEquipmentRequest {
  client_id: string;
  project_id: string;
  equipment_type: string;
  serial_number: string;
  start_date: string;
  end_date?: string;
}

// Equipment Type Options
export const EQUIPMENT_TYPE_OPTIONS = [
  { value: 'Elevador de Carga', label: 'Elevador de Carga', prefix: 'ELC' },
  { value: 'Esteira de Roletes', label: 'Esteira de Roletes', prefix: 'ER' },
  { value: 'Esteira Manta Plana', label: 'Esteira Manta Plana', prefix: 'EMP' },
  { value: 'Girador de Roletes', label: 'Girador de Roletes', prefix: 'GR' },
  { value: 'Strechador', label: 'Strechador', prefix: 'FW' },
  { value: 'Maquina Especial', label: 'Máquina Especial', prefix: null },
  { value: 'Equipamento Especial', label: 'Equipamento Especial', prefix: null }
] as const;

// Equipment Technical Specifications
export interface EquipmentSpecification {
  id: string;
  equipment_id: string;
  field_key: string;
  field_value: string;
  created_at: string;
  updated_at: string;
}

// Elevador de Carga Specifications
export interface ElevadorCargaSpecs {
  nome_elevador?: string;
  modelo_elevador?: string;
  tipo_elevador?: 'Autoportante' | 'Interno' | 'Alvenaria';
  identificacao_setor?: string;
  velocidade_elevacao?: string; // m/min
  carga_nominal?: string; // kg
  sentido_elevador?: '0/90°' | '0/180°' | '0/270°' | '0/360°';
  quantidade_paradas?: string;
  quantidade_portas?: string;
  tipo_portas?: 'Pivotante' | 'Automática Vertical' | 'Automática Horizontal';
  tensao_alimentacao?: string; // V
  potencia_equipamento?: string; // kW
  inversor_elevacao?: string;
  modelo_clp?: string;
  dimensoes_painel?: string;
  tipo_cabo_aco?: string;
  contrato_manutencao_vigente?: 'Sim' | 'Não';
  garantia?: string; // Calculated field
}

// Esteira de Roletes Specifications
export interface EsteiraRoletesSpecs {
  nome_esteira_roletes?: string;
  modelo_esteira_roletes?: string;
  massa_total_carga?: string; // kg
  diametro_externo_rolete?: string; // mm
  diametro_interno_rolete?: string; // mm
  comprimento_rolete?: string; // mm
  passo_roletes?: string; // mm
  velocidade_esteira?: string; // m/s
  quantidade_roletes?: string;
  quantidade_correntes?: string;
  tempo_aceleracao?: string; // s
  potencia_motoredutor?: string; // kW
}

// Girador de Roletes Specifications
export interface GiradorRoletesSpecs {
  nome_girador?: string;
  modelo_girador?: string;
  massa_total_carga?: string; // kg
  diametro_externo_rolete?: string; // mm
  diametro_interno_rolete?: string; // mm
  comprimento_rolete?: string; // mm
  passo_roletes?: string; // mm
  velocidade_esteira?: string; // m/s
  quantidade_roletes?: string;
  quantidade_correntes?: string;
  tempo_aceleracao?: string; // s
  potencia_motoredutor?: string; // kW
}

// Esteira Manta Plana Specifications
export interface EsteiraMantaPlanaSpecs {
  nome_esteira?: string;
  modelo_esteira?: string;
  capacidade_esteira?: string; // kg/h
  massa_material?: string; // kg
  massa_correia?: string; // kg
  comprimento_esteira?: string; // m
  diametro_rolete?: string; // mm
  largura_correia?: string; // mm
  velocidade_esteira?: string; // m/min
  potencia_motoredutor?: string; // kW
}

// Strechadeira Specifications
export interface StrechadoiraSpecs {
  nome_strechadeira?: string;
  modelo_strechadeira?: string;
  potencia_total?: string;
  dimensao_produto?: string;
  altura_produto?: string;
}

// Union type for all specifications
export type EquipmentSpecs = 
  | ElevadorCargaSpecs 
  | EsteiraRoletesSpecs 
  | GiradorRoletesSpecs 
  | EsteiraMantaPlanaSpecs 
  | StrechadoiraSpecs;

// Equipment field definitions for dynamic forms
export const EQUIPMENT_FIELD_DEFINITIONS = {
  'Elevador de Carga': [
    { key: 'nome_elevador', label: 'Nome Elevador', type: 'text' },
    { key: 'modelo_elevador', label: 'Modelo do Elevador', type: 'text' },
    { key: 'tipo_elevador', label: 'Tipo Elevador', type: 'select', options: ['Autoportante', 'Interno', 'Alvenaria'] },
    { key: 'identificacao_setor', label: 'Identificação Setor', type: 'text' },
    { key: 'velocidade_elevacao', label: 'Velocidade de Elevação (m/min)', type: 'number' },
    { key: 'carga_nominal', label: 'Carga Nominal (kg)', type: 'number' },
    { key: 'sentido_elevador', label: 'Sentido Elevador', type: 'select', options: ['0/90°', '0/180°', '0/270°', '0/360°'] },
    { key: 'quantidade_paradas', label: 'Quantidade de Paradas', type: 'number' },
    { key: 'quantidade_portas', label: 'Quantidade de Portas', type: 'number' },
    { key: 'tipo_portas', label: 'Tipo de Portas', type: 'select', options: ['Pivotante', 'Automática Vertical', 'Automática Horizontal'] },
    { key: 'tensao_alimentacao', label: 'Tensão Alimentação (V)', type: 'number' },
    { key: 'potencia_equipamento', label: 'Potência Equipamento (kW)', type: 'number' },
    { key: 'inversor_elevacao', label: 'Inversor Elevação', type: 'text' },
    { key: 'modelo_clp', label: 'Modelo CLP', type: 'text' },
    { key: 'dimensoes_painel', label: 'Dimensões Painel', type: 'text' },
    { key: 'tipo_cabo_aco', label: 'Tipo Cabo de Aço', type: 'text' },
    { key: 'contrato_manutencao_vigente', label: 'Contrato Manutenção Vigente', type: 'select', options: ['Sim', 'Não'] },
    { key: 'garantia', label: 'Garantia', type: 'text', readonly: true }
  ],
  'Esteira de Roletes': [
    { key: 'nome_esteira_roletes', label: 'Nome Esteira de Roletes', type: 'text' },
    { key: 'modelo_esteira_roletes', label: 'Modelo Esteira de Roletes', type: 'text' },
    { key: 'massa_total_carga', label: 'Massa Total Carga (kg)', type: 'number' },
    { key: 'diametro_externo_rolete', label: 'Diâmetro Externo Rolete (mm)', type: 'number' },
    { key: 'diametro_interno_rolete', label: 'Diâmetro Interno Rolete (mm)', type: 'number' },
    { key: 'comprimento_rolete', label: 'Comprimento Rolete (mm)', type: 'number' },
    { key: 'passo_roletes', label: 'Passo Roletes (mm)', type: 'number' },
    { key: 'velocidade_esteira', label: 'Velocidade Esteira (m/s)', type: 'number' },
    { key: 'quantidade_roletes', label: 'Quantidade Roletes', type: 'number' },
    { key: 'quantidade_correntes', label: 'Quantidade de Correntes', type: 'number' },
    { key: 'tempo_aceleracao', label: 'Tempo de Aceleração (s)', type: 'number' },
    { key: 'potencia_motoredutor', label: 'Potência Motoredutor (kW)', type: 'number' }
  ],
  'Girador de Roletes': [
    { key: 'nome_girador', label: 'Nome Girador', type: 'text' },
    { key: 'modelo_girador', label: 'Modelo Girador', type: 'text' },
    { key: 'massa_total_carga', label: 'Massa Total Carga (kg)', type: 'number' },
    { key: 'diametro_externo_rolete', label: 'Diâmetro Externo Rolete (mm)', type: 'number' },
    { key: 'diametro_interno_rolete', label: 'Diâmetro Interno Rolete (mm)', type: 'number' },
    { key: 'comprimento_rolete', label: 'Comprimento Rolete (mm)', type: 'number' },
    { key: 'passo_roletes', label: 'Passo Roletes (mm)', type: 'number' },
    { key: 'velocidade_esteira', label: 'Velocidade Esteira (m/s)', type: 'number' },
    { key: 'quantidade_roletes', label: 'Quantidade Roletes', type: 'number' },
    { key: 'quantidade_correntes', label: 'Quantidade de Correntes', type: 'number' },
    { key: 'tempo_aceleracao', label: 'Tempo de Aceleração (s)', type: 'number' },
    { key: 'potencia_motoredutor', label: 'Potência Motoredutor (kW)', type: 'number' }
  ],
  'Esteira Manta Plana': [
    { key: 'nome_esteira', label: 'Nome Esteira', type: 'text' },
    { key: 'modelo_esteira', label: 'Modelo Esteira', type: 'text' },
    { key: 'capacidade_esteira', label: 'Capacidade Esteira (kg/h)', type: 'number' },
    { key: 'massa_material', label: 'Massa do Material (kg)', type: 'number' },
    { key: 'massa_correia', label: 'Massa da Correia (kg)', type: 'number' },
    { key: 'comprimento_esteira', label: 'Comprimento Esteira (m)', type: 'number' },
    { key: 'diametro_rolete', label: 'Diâmetro Rolete (mm)', type: 'number' },
    { key: 'largura_correia', label: 'Largura da Correia (mm)', type: 'number' },
    { key: 'velocidade_esteira', label: 'Velocidade Esteira (m/min)', type: 'number' },
    { key: 'potencia_motoredutor', label: 'Potência Motoredutor (kW)', type: 'number' }
  ],
  'Strechador': [
    { key: 'nome_strechadeira', label: 'Nome Strechadeira', type: 'text' },
    { key: 'modelo_strechadeira', label: 'Modelo Strechadeira', type: 'text' },
    { key: 'potencia_total', label: 'Potência Total', type: 'text' },
    { key: 'dimensao_produto', label: 'Dimensão do Produto', type: 'text' },
    { key: 'altura_produto', label: 'Altura do Produto', type: 'text' }
  ]
} as const;

// Production Orders Interface
export interface ProductionOrder {
  id: string;
  equipment_id: string;
  codigo_op: string;
  descricao: string;
  status: ProductionOrderStatus;
  observacoes?: string;
  data_inicio_planejada?: string;
  data_termino_planejada?: string;
  data_inicio_real?: string;
  data_termino_real?: string;
  tempo_pausado_segundos: number;
  ultima_pausa_inicio?: string;
  sequence_number: number;
  created_at: string;
  updated_at: string;
  // Dados relacionados (joins)
  equipment_serial?: string;
  project_code?: string;
}

// Production Order with related details (equipment and project info)
export interface ProductionOrderWithDetails extends ProductionOrder {
  equipment_serial: string;
  project_code: string;
}

export interface CreateProductionOrderRequest {
  equipment_id: string;
  descricao: string;
  observacoes?: string;
  data_inicio_planejada?: string;
  data_termino_planejada?: string;
}

export interface UpdateProductionOrderRequest {
  descricao?: string;
  observacoes?: string;
  data_inicio_planejada?: string;
  data_termino_planejada?: string;
}

export interface UpdateProductionOrderStatusRequest {
  status: ProductionOrderStatus;
  data_inicio_real?: string;
  data_termino_real?: string;
  tempo_pausado_segundos?: number;
  ultima_pausa_inicio?: string;
}

export type ProductionOrderStatus = 'Pendente' | 'Em produção' | 'Pausada' | 'Finalizada';

export const PRODUCTION_ORDER_STATUS_OPTIONS: { value: ProductionOrderStatus; label: string; color: string }[] = [
  { value: 'Pendente', label: 'Pendente', color: 'text-gray-600 bg-gray-100' },
  { value: 'Em produção', label: 'Em produção', color: 'text-blue-600 bg-blue-100' },
  { value: 'Pausada', label: 'Pausada', color: 'text-yellow-600 bg-yellow-100' },
  { value: 'Finalizada', label: 'Finalizada', color: 'text-green-600 bg-green-100' }
];

// ===== PRODUCTION ORDER MATERIALS (BOM) =====

export interface ProductionOrderMaterial {
  id: string;
  production_order_id: string;
  material_id: string;
  material_name?: string;
  material_code?: string;
  material_unit?: string;
  quantity_required: number;
  current_stock?: number;
  consumed: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateProductionOrderMaterialRequest {
  production_order_id: string;
  material_id: string;
  quantity_required: number;
}

export interface UpdateProductionOrderMaterialRequest {
  quantity_required?: number;
  consumed?: boolean;
}
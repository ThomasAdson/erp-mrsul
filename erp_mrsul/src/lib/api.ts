/**
 * API Module for Tauri Desktop Application
 *
 * This module provides a safe interface for communicating with the Tauri backend.
 * It includes environment detection and user-friendly error handling for cases
 * where the user accidentally opens the app in a browser instead of the desktop app.
 *
 * Key Features:
 * - Automatic Tauri environment detection
 * - User-friendly error messages for browser vs desktop context
 * - Safe API call wrapper with comprehensive error handling
 * - Support for Material Classes, Categories, and Materials management
 */

import { invoke } from "@tauri-apps/api/core";
import {
  MaterialClass,
  CreateMaterialClassRequest,
  UpdateMaterialClassRequest,
  Client,
  Project,
  CreateProjectRequest,
  UpdateProjectRequest,
  Equipment,
  CreateEquipmentRequest,
  UpdateEquipmentRequest,
  ProductionOrder,
  CreateProductionOrderRequest,
  UpdateProductionOrderRequest,
  ProductionOrderStatus,
  ProductionOrderWithDetails,
  EquipmentSpecification,
  ProductionOrderMaterial,
  CreateProductionOrderMaterialRequest,
  UpdateProductionOrderMaterialRequest,
} from "@/types";

// Check if we're running in a Tauri context
const isTauriContext = () => {
  // Multiple checks for Tauri context
  if (typeof window === "undefined") return false;

  const win = window as any;
  const hasTauriGlobal = win.__TAURI__ !== undefined;
  const hasTauriAPI = win.__TAURI_INTERNALS__ !== undefined;
  const isInTauri = win.__TAURI_INVOKE__ !== undefined;

  // Also check for specific Tauri features
  console.log("Tauri Context Check:", {
    hasTauriGlobal,
    hasTauriAPI,
    isInTauri,
    userAgent: navigator.userAgent,
    location: window.location.href,
  });

  return (hasTauriGlobal || hasTauriAPI || isInTauri);
};

// Get user-friendly error message for Tauri unavailability
const getTauriUnavailableMessage = (): string => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "unknown";
  const isLocalhost = currentUrl.includes("localhost");

  if (isLocalhost) {
    return `Você está acessando através do navegador web em vez do aplicativo desktop.
Para usar todas as funcionalidades, feche esta aba do navegador e use a janela do APLICATIVO DESKTOP que abriu quando você executou "npm run tauri dev".

URL atual: ${currentUrl}

Se o aplicativo desktop não abriu, execute novamente o comando: npm run tauri dev`;
  } else {
    return `As APIs do Tauri não estão disponíveis neste contexto.
Certifique-se de que você está usando o aplicativo desktop compilado, não uma versão web.

URL atual: ${currentUrl}`;
  }
};

// Safe invoke wrapper that checks if Tauri is available
const safeInvoke = async <T>(command: string, args?: any): Promise<T> => {
  if (!isTauriContext()) {
    const message = getTauriUnavailableMessage();
    console.error("Tauri API not available:", message);
    throw new Error(message);
  }

  try {
    console.log(`Calling Tauri command '${command}' with args:`, args);
    return await invoke<T>(command, args);
  } catch (error) {
    console.error(`Tauri command '${command}' failed:`, error);
    console.error("Error details:", {
      name: (error as any)?.name,
      message: (error as any)?.message,
      stack: (error as any)?.stack,
      fullError: error
    });
    
    // Melhor formatação da mensagem de erro
    let errorMessage = `Erro ao executar comando '${command}'`;
    
    if (error && typeof error === 'object') {
      if ('message' in error && error.message) {
        errorMessage += `: ${error.message}`;
      } else if (typeof error === 'string') {
        errorMessage += `: ${error}`;
      } else {
        errorMessage += `: ${JSON.stringify(error)}`;
      }
    } else {
      errorMessage += `: ${String(error)}`;
    }
    
    throw new Error(errorMessage);
  }
};

export const createMaterialClass = async (
  data: CreateMaterialClassRequest,
): Promise<MaterialClass> => {
  return await safeInvoke<MaterialClass>("create_material_class", {
    code: data.code,
    name: data.name,
  });
};

export const getMaterialClass = async (id: string): Promise<MaterialClass> => {
  const all = await getAllMaterialClasses();
  const materialClass = all.find((c) => c.id === id);
  if (!materialClass) {
    throw new Error("Material class not found");
  }
  return materialClass;
};

export const getAllMaterialClasses = async (): Promise<MaterialClass[]> => {
  return await safeInvoke<MaterialClass[]>("list_material_classes");
};

export const updateMaterialClass = async (
  id: string,
  data: UpdateMaterialClassRequest,
): Promise<MaterialClass> => {
  return await safeInvoke<MaterialClass>("update_material_class", {
    id,
    code: data.code,
    name: data.name,
  });
};

export const deleteMaterialClass = async (id: string): Promise<boolean> => {
  throw new Error("Not implemented: deleteMaterialClass");
};

// --- Categorias ---
export interface Categoria {
  id: string;
  material_class_id: string;
  codigo_categoria: string;
  nome_categoria: string;
  created_at: string;
}

export const createCategoria = async (data: {
  material_class_id: string;
  codigo_categoria: string;
  nome_categoria: string;
}): Promise<Categoria> => {
  return await safeInvoke<Categoria>("create_categoria", {
    materialClassId: data.material_class_id,
    codigoCategoria: data.codigo_categoria,
    nomeCategoria: data.nome_categoria,
  });
};

export const getAllCategorias = async (): Promise<Categoria[]> => {
  return await safeInvoke<Categoria[]>("list_categorias");
};

export const updateCategoria = async (
  id: string,
  data: {
    material_class_id: string;
    codigo_categoria: string;
    nome_categoria: string;
  },
): Promise<Categoria> => {
  return await safeInvoke<Categoria>("update_categoria", {
    id,
    materialClassId: data.material_class_id,
    codigoCategoria: data.codigo_categoria,
    nomeCategoria: data.nome_categoria,
  });
};

export const deleteCategoria = async (id: string): Promise<boolean> => {
  return await safeInvoke<boolean>("delete_categoria", { id });
};

// --- Materiais ---
export interface Material {
  id: string;
  categoria_id: string;
  codigo_especificacao: string;
  descricao_especificacao: string;
  material_composicao: string;
  unidade_medida: string;
  codigo_material_completo: string;
  descricao_completa: string;
  observacoes?: string;
  created_at: string;
  estoque_atual: number;
  estoque_minimo?: number;
}

export const createMaterial = async (
  data: Omit<Material, "id">,
): Promise<Material> => {
  // Converte snake_case para camelCase para o backend Tauri
  const payload = {
    categoriaId: data.categoria_id,
    codigoEspecificacao: data.codigo_especificacao,
    descricaoEspecificacao: data.descricao_especificacao,
    materialComposicao: data.material_composicao,
    unidadeMedida: data.unidade_medida,
    codigoMaterialCompleto: data.codigo_material_completo,
    descricaoCompleta: data.descricao_completa,
    observacoes: data.observacoes,
    estoqueAtual: data.estoque_atual,
    estoqueMinimo: data.estoque_minimo,
    createdAt: data.created_at,
  };
  return await safeInvoke<Material>("create_material", payload);
};

export const getAllMateriais = async (): Promise<Material[]> => {
  return await safeInvoke<Material[]>("list_materiais");
};

export const updateMaterial = async (
  id: string,
  data: Partial<Material>,
): Promise<Material> => {
  return await safeInvoke<Material>("update_material", { id, ...data });
};

export const deleteMaterial = async (id: string): Promise<boolean> => {
  return await safeInvoke<boolean>("delete_material", { id });
};

// --- Clients ---

export const createClient = async (
  data: Omit<Client, "id" | "created_at">,
): Promise<Client> => {
  return await safeInvoke<Client>("create_client", { client: data });
};

export const getAllClients = async (): Promise<Client[]> => {
  return await safeInvoke<Client[]>("list_clients");
};

export const updateClient = async (
  id: string,
  data: Omit<Client, "id" | "created_at">,
): Promise<void> => {
  return await safeInvoke<void>("update_client", { id, client: data });
};

export const deleteClient = async (id: string): Promise<void> => {
  return await safeInvoke<void>("delete_client", { id });
};

// =============================================================================
// PROJECT API FUNCTIONS
// =============================================================================

export const createProject = async (
  data: CreateProjectRequest,
): Promise<Project> => {
  return await safeInvoke<Project>("create_project", { project: data });
};

export const getAllProjects = async (): Promise<Project[]> => {
  return await safeInvoke<Project[]>("list_projects");
};

export const updateProject = async (
  id: string,
  data: UpdateProjectRequest,
): Promise<void> => {
  return await safeInvoke<void>("update_project", { id, project: data });
};

export const deleteProject = async (id: string): Promise<void> => {
  return await safeInvoke<void>("delete_project", { id });
};

// =============================================================================
// EQUIPMENT API FUNCTIONS
// =============================================================================

export const createEquipment = async (
  data: CreateEquipmentRequest,
): Promise<Equipment> => {
  return await safeInvoke<Equipment>("create_equipment", { equipment: data });
};

export const getAllEquipment = async (): Promise<Equipment[]> => {
  return await safeInvoke<Equipment[]>("list_equipment");
};

export const getEquipment = async (id: string): Promise<Equipment> => {
  return await safeInvoke<Equipment>("get_equipment", { id });
};

export const updateEquipment = async (
  id: string,
  data: UpdateEquipmentRequest,
): Promise<void> => {
  return await safeInvoke<void>("update_equipment", { id, equipment: data });
};

export const deleteEquipment = async (id: string): Promise<void> => {
  return await safeInvoke<void>("delete_equipment", { id });
};

export const migrateEquipmentDatabase = async (): Promise<void> => {
  return await safeInvoke<void>("migrate_equipment_database", {});
};

// ===== PRODUCTION ORDERS API =====

export const createProductionOrder = async (data: CreateProductionOrderRequest): Promise<ProductionOrder> => {
  return await safeInvoke<ProductionOrder>("create_production_order", { request: data });
};

export const getAllProductionOrders = async (equipmentId?: string): Promise<ProductionOrderWithDetails[]> => {
  return await safeInvoke<ProductionOrderWithDetails[]>("list_production_orders", { equipment_id: equipmentId });
};

export const updateProductionOrder = async (
  id: string,
  data: UpdateProductionOrderRequest,
): Promise<ProductionOrder> => {
  return await safeInvoke<ProductionOrder>("update_production_order", { id, request: data });
};

export const deleteProductionOrder = async (id: string): Promise<boolean> => {
  return await safeInvoke<boolean>("delete_production_order", { id });
};

export const updateProductionOrderStatus = async (
  id: string,
  status: ProductionOrderStatus,
): Promise<ProductionOrder> => {
  return await safeInvoke<ProductionOrder>("update_production_order_status", { 
    request: {
      id: id, 
      new_status: status 
    }
  });
};

// ===== EQUIPMENT SPECIFICATIONS API =====

export const getEquipmentSpecifications = async (equipmentId: string): Promise<EquipmentSpecification[]> => {
  return await safeInvoke<EquipmentSpecification[]>("get_equipment_specifications_cmd", { 
    request: { equipment_id: equipmentId }
  });
};

export const saveEquipmentSpecifications = async (
  equipmentId: string, 
  specifications: Record<string, string>
): Promise<EquipmentSpecification[]> => {
  return await safeInvoke<EquipmentSpecification[]>("save_equipment_specifications_cmd", { 
    request: {
      equipment_id: equipmentId,
      specifications: specifications
    }
  });
};

export const deleteEquipmentSpecification = async (specificationId: string): Promise<boolean> => {
  return await safeInvoke<boolean>("delete_equipment_specification_cmd", { 
    request: { specification_id: specificationId }
  });
};

// ===== PRODUCTION ORDER FILES API =====

export interface ProductionOrderFile {
  id: string;
  production_order_id: string;
  file_name: string;
  original_name: string;
  file_path: string;
  file_size: number;
  mime_type?: string;
  created_at: string;
}

export const uploadFileToProductionOrder = async (
  productionOrderId: string,
  file: File
): Promise<ProductionOrderFile> => {
  // Converter arquivo para array de bytes
  const arrayBuffer = await file.arrayBuffer();
  const fileData = Array.from(new Uint8Array(arrayBuffer));
  
  return await safeInvoke<ProductionOrderFile>("upload_file_to_op", {
    request: {
      production_order_id: productionOrderId,
      file_name: file.name,
      file_data: fileData
    }
  });
};

export const getProductionOrderFiles = async (productionOrderId: string): Promise<ProductionOrderFile[]> => {
  return await safeInvoke<ProductionOrderFile[]>("get_op_files", {
    request: { production_order_id: productionOrderId }
  });
};

export const deleteProductionOrderFile = async (fileId: string): Promise<boolean> => {
  return await safeInvoke<boolean>("delete_op_file", {
    request: { file_id: fileId }
  });
};

export const downloadProductionOrderFile = async (fileId: string): Promise<Uint8Array> => {
  const data = await safeInvoke<number[]>("download_op_file", {
    request: { file_id: fileId }
  });
  return new Uint8Array(data);
};

// ===== STOCK MANAGEMENT API =====

export interface StockMovement {
  id: string;
  material_id: string;
  material_name?: string;
  movement_type: 'entrada' | 'saida';
  quantity: number;
  unit_cost?: number;
  total_cost?: number;
  reason: string;
  reference_document?: string;
  voucher_file_path?: string;
  responsible_user: string;
  supplier?: string;
  supplier_name?: string;
  storage_location?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateStockMovementRequest {
  material_id: string;
  movement_type: 'entrada' | 'saida';
  quantity: number;
  unit_cost?: number;
  reason: string;
  reference_document?: string;
  responsible_user: string;
  supplier?: string;
  storage_location?: string;
  voucher_file?: File;
}

export interface StockMovementFilters {
  material_id?: string;
  movement_type?: 'entrada' | 'saida';
  start_date?: string;
  end_date?: string;
  responsible_user?: string;
  limit?: number;
  offset?: number;
}

export const createStockMovement = async (request: CreateStockMovementRequest): Promise<StockMovement> => {
  let voucherFileData: number[] | undefined;
  let voucherFileName: string | undefined;

  if (request.voucher_file) {
    const arrayBuffer = await request.voucher_file.arrayBuffer();
    voucherFileData = Array.from(new Uint8Array(arrayBuffer));
    voucherFileName = request.voucher_file.name;
  }

  return await safeInvoke<StockMovement>("create_stock_movement", {
    request: {
      material_id: request.material_id,
      movement_type: request.movement_type,
      quantity: request.quantity,
      unit_cost: request.unit_cost,
      reason: request.reason,
      reference_document: request.reference_document,
      responsible_user: request.responsible_user,
      supplier: request.supplier,
      storage_location: request.storage_location,
      voucher_file_data: voucherFileData,
      voucher_file_name: voucherFileName,
    }
  });
};

export const getStockMovements = async (filters?: StockMovementFilters): Promise<StockMovement[]> => {
  return await safeInvoke<StockMovement[]>("get_stock_movements", {
    request: filters || {}
  });
};

export const getMaterialCurrentStock = async (materialId: string): Promise<number> => {
  return await safeInvoke<number>("get_material_current_stock", {
    request: { material_id: materialId }
  });
};

// ===== FORNECEDORES =====

export interface Fornecedor {
  id: string;
  nome_fantasia: string;
  razao_social: string;
  cnpj: string;
  inscricao_estadual?: string;
  endereco?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  telefone?: string;
  email?: string;
  observacoes?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateFornecedorRequest {
  nome_fantasia: string;
  razao_social: string;
  cnpj: string;
  inscricao_estadual?: string;
  endereco?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  telefone?: string;
  email?: string;
  observacoes?: string;
}

export interface UpdateFornecedorRequest {
  nome_fantasia?: string;
  razao_social?: string;
  cnpj?: string;
  inscricao_estadual?: string;
  endereco?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  telefone?: string;
  email?: string;
  observacoes?: string;
}

export const createFornecedor = async (request: CreateFornecedorRequest): Promise<Fornecedor> => {
  return await safeInvoke<Fornecedor>("create_fornecedor", { request });
};

export const getAllFornecedores = async (): Promise<Fornecedor[]> => {
  return await safeInvoke<Fornecedor[]>("get_all_fornecedores");
};

export const getFornecedorById = async (id: string): Promise<Fornecedor> => {
  return await safeInvoke<Fornecedor>("get_fornecedor_by_id", { id });
};

export const updateFornecedor = async (id: string, request: UpdateFornecedorRequest): Promise<Fornecedor> => {
  return await safeInvoke<Fornecedor>("update_fornecedor", { id, request });
};

export const deleteFornecedor = async (id: string): Promise<void> => {
  return await safeInvoke<void>("delete_fornecedor", { id });
};

// ===== PRODUCTION ORDER MATERIALS (BOM) =====

export const addProductionOrderMaterial = async (
  request: CreateProductionOrderMaterialRequest
): Promise<ProductionOrderMaterial> => {
  return await safeInvoke<ProductionOrderMaterial>("add_material_to_production_order", {
    productionOrderId: request.production_order_id,
    materialId: request.material_id,
    quantityRequired: request.quantity_required
  });
};

export const getProductionOrderMaterials = async (
  productionOrderId: string
): Promise<ProductionOrderMaterial[]> => {
  return await safeInvoke<ProductionOrderMaterial[]>("get_production_order_materials", {
    productionOrderId: productionOrderId
  });
};

export const updateProductionOrderMaterial = async (
  id: string,
  request: UpdateProductionOrderMaterialRequest
): Promise<ProductionOrderMaterial> => {
  return await safeInvoke<ProductionOrderMaterial>("update_production_order_material", {
    id: id,
    quantityRequired: request.quantity_required,
    consumed: request.consumed
  });
};

export const removeProductionOrderMaterial = async (id: string): Promise<void> => {
  return await safeInvoke<void>("remove_material_from_production_order", { id });
};

// ===== EXPORT TYPES =====

export type { 
  MaterialClass, 
  Project, 
  Equipment, 
  ProductionOrder, 
  ProductionOrderWithDetails, 
  EquipmentSpecification,
  ProductionOrderMaterial,
  CreateProductionOrderMaterialRequest,
  UpdateProductionOrderMaterialRequest
};

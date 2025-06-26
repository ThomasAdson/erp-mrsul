import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Plus, Edit2, Trash2, Package, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { MaterialCombobox } from '@/components/ui/MaterialCombobox';
import { useToast } from '@/lib/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  addProductionOrderMaterial,
  getProductionOrderMaterials,
  updateProductionOrderMaterial,
  removeProductionOrderMaterial,
  getAllMateriais,
  ProductionOrderMaterial,
  CreateProductionOrderMaterialRequest,
  UpdateProductionOrderMaterialRequest,
  Material,
} from '@/lib/api';

// Cache global para evitar múltiplos carregamentos
const materialsCache = new Map<string, Material[]>();
const productionOrderMaterialsCache = new Map<string, ProductionOrderMaterial[]>();
let isLoadingMaterials = false;

interface ProductionOrderMaterialsProps {
  productionOrderId: string;
  isEditable?: boolean;
}

interface MaterialWithValidation extends ProductionOrderMaterial {
  hasInsufficientStock?: boolean;
}

export default function ProductionOrderMaterials({ productionOrderId, isEditable = true }: ProductionOrderMaterialsProps) {
  const [materials, setMaterials] = useState<MaterialWithValidation[]>([]);
  const [allMaterials, setAllMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<ProductionOrderMaterial | null>(null);
  
  // Estados para adicionar material inline
  const [materialToAdd, setMaterialToAdd] = useState<string | null>(null);
  const [quantityToAdd, setQuantityToAdd] = useState<string>('1');
  const [isAddingMaterial, setIsAddingMaterial] = useState(false);

  const [editFormData, setEditFormData] = useState<UpdateProductionOrderMaterialRequest>({
    quantity_required: 1,
    consumed: false,
  });

  const { toast } = useToast();
  
  // Ref para controlar se o componente ainda está montado
  const isMountedRef = useRef(true);

  // Cleanup effect
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Função para carregar dados usando cache
  const loadData = useCallback(async () => {
    if (!productionOrderId || !isMountedRef.current) return;
    
    console.log('🔄 loadData: Carregando dados para OP:', productionOrderId);
    setLoading(true);
    
    try {
      // 1. Carregar todos os materiais (com cache)
      let allMaterialsData: Material[];
      if (materialsCache.has('all')) {
        allMaterialsData = materialsCache.get('all')!;
        console.log('✅ Materiais carregados do cache:', allMaterialsData.length);
      } else {
        if (isLoadingMaterials) {
          console.log('⏳ Aguardando carregamento de materiais em andamento...');
          return;
        }
        
        isLoadingMaterials = true;
        console.log('🔄 Carregando todos os materiais da API...');
        allMaterialsData = await getAllMateriais();
        materialsCache.set('all', allMaterialsData);
        isLoadingMaterials = false;
        console.log('✅ Materiais carregados da API:', allMaterialsData.length);
      }
      
      if (!isMountedRef.current) return;
      setAllMaterials(allMaterialsData);
      
      // 2. Carregar materiais da OP (com cache)
      const cacheKey = `op_${productionOrderId}`;
      let materialsData: ProductionOrderMaterial[];
      
      if (productionOrderMaterialsCache.has(cacheKey)) {
        materialsData = productionOrderMaterialsCache.get(cacheKey)!;
        console.log('✅ Materiais da OP carregados do cache:', materialsData.length);
      } else {
        console.log('🔄 Carregando materiais da OP da API...');
        materialsData = await getProductionOrderMaterials(productionOrderId);
        productionOrderMaterialsCache.set(cacheKey, materialsData);
        console.log('✅ Materiais da OP carregados da API:', materialsData.length);
      }
      
      if (!isMountedRef.current) return;
      
      // 3. Adicionar validação de estoque
      const materialsWithValidation: MaterialWithValidation[] = materialsData.map(material => {
        const materialDetail = allMaterialsData.find(m => m.id === material.material_id);
        const currentStock = materialDetail?.estoque_atual ?? 0;
        const hasInsufficientStock = material.quantity_required > currentStock;
        
        return {
          ...material,
          hasInsufficientStock
        };
      });
      
      setMaterials(materialsWithValidation);
      console.log('✅ Carregamento concluído com validação de estoque');
      
    } catch (error) {
      console.error('❌ Erro no carregamento:', error);
      if (isMountedRef.current) {
        toast({
          title: "Erro",
          description: "Erro ao carregar dados: " + (error as Error).message,
          variant: "destructive",
        });
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [productionOrderId, toast]);

  // Effect simples que só executa uma vez por productionOrderId
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Função para recarregar dados (limpa cache e recarrega)
  const reloadMaterials = useCallback(async () => {
    if (!productionOrderId) return;
    
    console.log('🔄 reloadMaterials: Limpando cache e recarregando...');
    
    // Limpar cache da OP específica
    const cacheKey = `op_${productionOrderId}`;
    productionOrderMaterialsCache.delete(cacheKey);
    
    // Recarregar dados
    await loadData();
  }, [productionOrderId, loadData]);

  const handleAddMaterial = async () => {
    if (!materialToAdd) {
      toast({
        title: "Atenção",
        description: "Selecione um material.",
        variant: "default",
      });
      return;
    }
    
    const quantity = parseFloat(quantityToAdd);
    if (isNaN(quantity) || quantity <= 0) {
      toast({
        title: "Atenção", 
        description: "Insira uma quantidade válida.",
        variant: "default",
      });
      return;
    }

    // Verificar se o material já foi adicionado
    const materialAlreadyExists = materials.find(m => m.material_id === materialToAdd);
    if (materialAlreadyExists) {
      toast({
        title: "Atenção",
        description: "Material já foi adicionado à esta OP.",
        variant: "default",
      });
      return;
    }

    if (isAddingMaterial) return; // Evitar múltiplas chamadas

    try {
      setIsAddingMaterial(true);
      
      const request: CreateProductionOrderMaterialRequest = {
        production_order_id: productionOrderId,
        material_id: materialToAdd,
        quantity_required: quantity,
      };

      console.log('🔄 Adicionando material:', request);
      await addProductionOrderMaterial(request);
      
      if (!isMountedRef.current) return;
      
      console.log('✅ Material adicionado com sucesso');
      toast({
        title: "Sucesso",
        description: "Material adicionado à OP com sucesso!",
      });
      
      // Limpar campos
      setMaterialToAdd(null);
      setQuantityToAdd('1');
      
      // Recarregar dados imediatamente
      await reloadMaterials();
      
    } catch (error) {
      console.error('❌ Erro ao adicionar material à OP:', error);
      if (isMountedRef.current) {
        toast({
          title: "Erro",
          description: "Erro ao adicionar material à OP: " + (error as Error).message,
          variant: "destructive",
        });
      }
    } finally {
      if (isMountedRef.current) {
        setIsAddingMaterial(false);
      }
    }
  };

  const openEditDialog = (material: ProductionOrderMaterial) => {
    setEditingMaterial(material);
    setEditFormData({
      quantity_required: material.quantity_required,
      consumed: material.consumed,
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdateMaterial = async () => {
    if (!editingMaterial) return;

    if (editFormData.quantity_required! <= 0) {
      toast({
        title: "Erro",
        description: "Informe uma quantidade válida.",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log('🔄 Atualizando material:', editingMaterial.id, editFormData);
      await updateProductionOrderMaterial(editingMaterial.id, editFormData);
      
      if (!isMountedRef.current) return;
      
      console.log('✅ Material atualizado com sucesso');
      toast({
        title: "Sucesso",
        description: "Material atualizado com sucesso!",
      });
      
      setIsEditDialogOpen(false);
      setEditingMaterial(null);
      
      // Recarregar dados imediatamente
      await reloadMaterials();
      
    } catch (error) {
      console.error('❌ Erro ao atualizar material:', error);
      if (isMountedRef.current) {
        toast({
          title: "Erro",
          description: "Erro ao atualizar material: " + (error as Error).message,
          variant: "destructive",
        });
      }
    }
  };

  const handleRemoveMaterial = async (id: string) => {
    if (!confirm('Tem certeza que deseja remover este material da OP?')) {
      return;
    }

    try {
      console.log('🔄 Removendo material:', id);
      await removeProductionOrderMaterial(id);
      
      if (!isMountedRef.current) return;
      
      console.log('✅ Material removido com sucesso');
      toast({
        title: "Sucesso",
        description: "Material removido da OP com sucesso!",
      });
      
      // Recarregar dados imediatamente
      await reloadMaterials();
      
    } catch (error) {
      console.error('❌ Erro ao remover material:', error);
      if (isMountedRef.current) {
        toast({
          title: "Erro",
          description: "Erro ao remover material: " + (error as Error).message,
          variant: "destructive",
        });
      }
    }
  };

  const getStockStatus = (necessaria: number, estoque?: number) => {
    if (estoque === undefined) return { status: 'unknown', color: 'bg-gray-500' };
    
    if (estoque >= necessaria) {
      return { status: 'available', color: 'bg-green-500' };
    } else if (estoque > 0) {
      return { status: 'partial', color: 'bg-yellow-500' };
    } else {
      return { status: 'unavailable', color: 'bg-red-500' };
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8">
          <div className="text-center">
            <p>Carregando materiais necessários...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg">Materiais Necessários (BOM)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {/* Seção para adicionar material inline */}
          {isEditable && (
            <div className="mb-6 p-4 bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/25">
              <h4 className="text-sm font-medium mb-3 text-muted-foreground">Adicionar Material</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2">
                  <Label htmlFor="material-select" className="text-xs text-muted-foreground">
                    Material
                  </Label>
                  <MaterialCombobox
                    materials={allMaterials}
                    value={materialToAdd}
                    onValueChange={setMaterialToAdd}
                    placeholder="Buscar e selecionar material..."
                    excludeIds={materials.map(m => m.material_id)}
                    showStock={true}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Label htmlFor="quantity-input" className="text-xs text-muted-foreground">
                      Quantidade
                    </Label>
                    <Input
                      id="quantity-input"
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={quantityToAdd}
                      onChange={(e) => setQuantityToAdd(e.target.value)}
                      placeholder="Qtd"
                      disabled={isAddingMaterial}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button
                      onClick={handleAddMaterial}
                      disabled={!materialToAdd || !quantityToAdd || isAddingMaterial}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isAddingMaterial ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Adicionando...
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4 mr-1" />
                          Adicionar
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Validação de estoque para o material selecionado */}
              {materialToAdd && quantityToAdd && (
                <div className="mt-3">
                  {(() => {
                    const selectedMaterial = allMaterials.find(m => m.id === materialToAdd);
                    const qty = parseFloat(quantityToAdd);
                    const currentStock = selectedMaterial?.estoque_atual ?? 0;
                    
                    if (!selectedMaterial) return null;
                    
                    if (qty > currentStock) {
                      return (
                        <div className="flex items-center gap-2 text-destructive text-sm">
                          <AlertTriangle className="h-4 w-4" />
                          <span>
                            Estoque insuficiente! Disponível: {currentStock} {selectedMaterial.unidade_medida}
                          </span>
                        </div>
                      );
                    } else {
                      return (
                        <div className="flex items-center gap-2 text-green-600 text-sm">
                          <span>✓ Estoque suficiente ({currentStock} {selectedMaterial.unidade_medida} disponível)</span>
                        </div>
                      );
                    }
                  })()}
                </div>
              )}
            </div>
          )}

          {materials.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Package className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Nenhum material necessário cadastrado</p>
              <p className="text-sm">
                {isEditable ? 'Use o formulário acima para adicionar materiais' : 'Esta OP não possui materiais definidos'}
              </p>
            </div>
          ) : (            
            <Table>              
              <TableHeader>
                <TableRow>
                  <TableHead>Código</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Qtd. Necessária</TableHead>
                  <TableHead>Unidade</TableHead>
                  <TableHead>Estoque Atual</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Consumo</TableHead>
                  {isEditable && <TableHead>Ações</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>                
                {materials.map((material) => {
                  const stockStatus = getStockStatus(
                    material.quantity_required, 
                    material.current_stock
                  );
                  
                  return (
                    <TableRow key={material.id} className={material.hasInsufficientStock ? 'bg-red-50' : ''}>
                      <TableCell className="font-medium font-mono text-sm">
                        {material.material_code}
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs truncate" title={material.material_name}>
                          {material.material_name}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {material.quantity_required}
                      </TableCell>
                      <TableCell>{material.material_unit}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{material.current_stock || 0}</span>
                          {material.hasInsufficientStock && (
                            <Badge variant="destructive" className="text-xs">
                              Insuficiente
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${stockStatus.color}`} />
                          <span className="text-sm">
                            {stockStatus.status === 'available' && 'Disponível'}
                            {stockStatus.status === 'partial' && 'Parcial'}
                            {stockStatus.status === 'unavailable' && 'Indisponível'}
                            {stockStatus.status === 'unknown' && 'Desconhecido'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={material.consumed ? "default" : "secondary"}>
                          {material.consumed ? 'Consumido' : 'Pendente'}
                        </Badge>
                      </TableCell>
                      {isEditable && (
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openEditDialog(material)}
                              title="Editar material"
                            >
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveMaterial(material.id)}
                              className="text-red-600 hover:text-red-800"
                              title="Remover material"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>          
          )}
        </CardContent>
      </Card>

      {/* Modal de Editar Material */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Editar Material da OP</DialogTitle>
            <DialogDescription>
              Ajuste a quantidade necessária e status de consumo.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            {editingMaterial && (
              <div className="bg-muted p-3 rounded-lg">
                <p className="font-medium font-mono text-sm">{editingMaterial.material_code}</p>
                <p className="text-sm">{editingMaterial.material_name}</p>
                <p className="text-sm text-muted-foreground">
                  Estoque atual: {editingMaterial.current_stock || 0} {editingMaterial.material_unit}
                </p>
              </div>
            )}
            
            <div className="grid gap-2">
              <Label htmlFor="edit_quantidade">Quantidade Necessária *</Label>
              <Input
                id="edit_quantidade"
                type="number"
                min="0.01"
                step="0.01"
                value={editFormData.quantity_required}
                onChange={(e) => setEditFormData(prev => ({ ...prev, quantity_required: parseFloat(e.target.value) || 0 }))}
                placeholder="Digite a quantidade"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="consumed"
                checked={editFormData.consumed}
                onChange={(e) => setEditFormData(prev => ({ ...prev, consumed: e.target.checked }))}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <Label htmlFor="consumed" className="text-sm">
                Material foi consumido
              </Label>
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              onClick={handleUpdateMaterial}
              disabled={!editFormData.quantity_required || editFormData.quantity_required <= 0}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Atualizar Material
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
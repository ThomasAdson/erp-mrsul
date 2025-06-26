import React, { useState, useEffect } from 'react';
import { Package, Plus, AlertCircle, Download, Upload, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/lib/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createStockMovement, getAllMateriais, getMaterialCurrentStock, getAllFornecedores } from '@/lib/api';
import type { Material, Fornecedor, CreateStockMovementRequest } from '@/lib/api';

const StockMovementPage = () => {  const [materials, setMaterials] = useState<Material[]>([]);
  const [filteredMaterials, setFilteredMaterials] = useState<Material[]>([]);
  const [materialSearchTerm, setMaterialSearchTerm] = useState<string>('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [currentStock, setCurrentStock] = useState<number | null>(null);
  
  // Estados para fornecedores
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [loadingFornecedores, setLoadingFornecedores] = useState(true);
  
  const [movementType, setMovementType] = useState<'entrada' | 'saida'>('entrada');  const [quantity, setQuantity] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [referenceDocument, setReferenceDocument] = useState<string>('');
  const [responsibleUser, setResponsibleUser] = useState<string>('');
  const [supplier, setSupplier] = useState<string>('');
  const [storageLocation, setStorageLocation] = useState<string>('');
  const [voucherFile, setVoucherFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMaterials, setLoadingMaterials] = useState(true);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const { toast } = useToast();  // Carregar materiais e fornecedores no mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Carregar materiais
        const materialsData = await getAllMateriais();
        setMaterials(materialsData);

        // Carregar fornecedores
        const fornecedoresData = await getAllFornecedores();
        setFornecedores(fornecedoresData);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar os dados necessários.",
          variant: "destructive",
        });
      } finally {
        setLoadingMaterials(false);
        setLoadingFornecedores(false);
      }
    };

    loadData();
  }, [toast]);

  // Carregar estoque atual quando material é selecionado
  useEffect(() => {
    if (selectedMaterial) {
      const loadCurrentStock = async () => {
        try {
          const stock = await getMaterialCurrentStock(selectedMaterial);
          setCurrentStock(stock);
        } catch (error) {
          console.error('Erro ao carregar estoque atual:', error);
          setCurrentStock(null);
        }
      };

      loadCurrentStock();
    } else {
      setCurrentStock(null);
    }
  }, [selectedMaterial]);

  // Filtrar materiais baseado no termo de busca
  useEffect(() => {
    if (!materialSearchTerm.trim()) {
      setFilteredMaterials(materials);
    } else {
      const searchTerm = materialSearchTerm.toLowerCase();
      const filtered = materials.filter(material => 
        material.codigo_material_completo.toLowerCase().includes(searchTerm) ||
        material.descricao_completa.toLowerCase().includes(searchTerm)
      );
      setFilteredMaterials(filtered);
    }
  }, [materials, materialSearchTerm]);

  // Carregar fornecedores no mount
  useEffect(() => {
    const loadFornecedores = async () => {
      try {
        const fornecedoresData = await getAllFornecedores();
        setFornecedores(fornecedoresData);
      } catch (error) {
        console.error('Erro ao carregar fornecedores:', error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar a lista de fornecedores.",
          variant: "destructive",
        });
      } finally {
        setLoadingFornecedores(false);
      }
    };

    loadFornecedores();
  }, [toast]);

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};

    if (!selectedMaterial) {
      errors.material = 'Selecione um material';
    }

    if (!quantity || isNaN(Number(quantity)) || Number(quantity) <= 0) {
      errors.quantity = 'Quantidade deve ser um número positivo';
    }    if (movementType === 'saida' && currentStock !== null && Number(quantity) > currentStock) {
      errors.quantity = `Quantidade insuficiente em estoque (disponível: ${currentStock})`;
    }

    if (!reason.trim()) {
      errors.reason = 'Motivo é obrigatório';
    }

    if (!responsibleUser.trim()) {
      errors.responsibleUser = 'Responsável é obrigatório';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {      const request: CreateStockMovementRequest = {
        material_id: selectedMaterial,
        movement_type: movementType,
        quantity: Number(quantity),
        reason: reason.trim(),
        reference_document: referenceDocument.trim() || undefined,
        responsible_user: responsibleUser.trim(),
        supplier: supplier.trim() || undefined,
        storage_location: storageLocation.trim() || undefined,
        voucher_file: voucherFile || undefined,
      };

      await createStockMovement(request);

      toast({
        title: "Sucesso",
        description: `Movimentação de ${movementType} registrada com sucesso!`,
        variant: "default",
      });      // Limpar formulário
      setSelectedMaterial('');
      setQuantity('');
      setReason('');
      setReferenceDocument('');
      setResponsibleUser('');
      setSupplier('');
      setStorageLocation('');
      setVoucherFile(null);
      setCurrentStock(null);
      setFormErrors({});

      // Reset file input
      const fileInput = document.getElementById('voucher-file') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }

    } catch (error) {
      console.error('Erro ao criar movimentação:', error);
      toast({
        title: "Erro",
        description: "Não foi possível registrar a movimentação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tamanho do arquivo (máximo 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "Erro",
          description: "O arquivo deve ter no máximo 10MB.",
          variant: "destructive",
        });
        e.target.value = '';
        return;
      }
      setVoucherFile(file);
    } else {
      setVoucherFile(null);
    }
  };

  const selectedMaterialData = materials.find(m => m.id === selectedMaterial);

  if (loadingMaterials) {
    return (
      <div className="flex-1 space-y-4 p-4 pt-6">
        <div className="flex items-center space-x-2">
          <Package className="h-6 w-6" />
          <h2 className="text-3xl font-bold tracking-tight">Movimentar Estoque</h2>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2 text-gray-600">Carregando materiais...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center space-x-2">
        <Package className="h-6 w-6" />
        <h2 className="text-3xl font-bold tracking-tight">Movimentar Estoque</h2>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {movementType === 'entrada' ? (
              <Download className="h-5 w-5 text-green-600" />
            ) : (
              <Upload className="h-5 w-5 text-red-600" />
            )}
            <span>Nova Movimentação</span>
          </CardTitle>
          <CardDescription>
            Registre entradas e saídas de materiais do estoque
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tipo de Movimentação */}
            <div className="space-y-2">
              <Label htmlFor="movement-type">Tipo de Movimentação</Label>
              <Select value={movementType} onValueChange={(value: 'entrada' | 'saida') => setMovementType(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entrada">
                    <div className="flex items-center space-x-2">
                      <Download className="h-4 w-4 text-green-600" />
                      <span>Entrada</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="saida">
                    <div className="flex items-center space-x-2">
                      <Upload className="h-4 w-4 text-red-600" />
                      <span>Saída</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>            {/* Material */}
            <div className="space-y-2">
              <Label htmlFor="material">Material *</Label>
              <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                <SelectTrigger className={formErrors.material ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Selecione um material" />
                </SelectTrigger>
                <SelectContent>
                  <div className="sticky top-0 bg-background p-2 border-b">
                    <Input
                      type="text"
                      placeholder="Digite o código ou descrição do material..."
                      value={materialSearchTerm}
                      onChange={(e) => setMaterialSearchTerm(e.target.value)}
                      className="w-full"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  {filteredMaterials.map((material) => (
                    <SelectItem key={material.id} value={material.id}>
                      <div className="flex flex-col">
                        <span className="font-bold text-base">{material.codigo_material_completo}</span>
                        <span className="text-sm text-gray-600">{material.descricao_completa}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formErrors.material && (
                <p className="text-sm text-red-500">{formErrors.material}</p>
              )}
            </div>{/* Informações do Material Selecionado */}
            {selectedMaterialData && (
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-4">
                  <div className="flex items-start space-x-2">
                    <Package className="h-4 w-4 text-blue-600 mt-0.5" />                    <div className="space-y-1">
                      <div><strong>Material:</strong> {selectedMaterialData.descricao_completa}</div>
                      <div><strong>Código:</strong> {selectedMaterialData.codigo_material_completo}</div>
                      <div><strong>Unidade:</strong> {selectedMaterialData.unidade_medida}</div>
                      {currentStock !== null && (
                        <div className="flex items-center space-x-2">
                          <strong>Estoque Atual:</strong>
                          <Badge variant={currentStock > 0 ? "default" : "destructive"}>
                            {currentStock} {selectedMaterialData.unidade_medida}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quantidade */}
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantidade *</Label>
              <Input
                id="quantity"
                type="number"
                step="0.01"
                min="0"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="0.00"
                className={formErrors.quantity ? 'border-red-500' : ''}
              />
              {formErrors.quantity && (
                <p className="text-sm text-red-500">{formErrors.quantity}</p>
              )}
            </div>            {/* Motivo */}
            <div className="space-y-2">
              <Label htmlFor="reason">Motivo *</Label>
              <Textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Descreva o motivo da movimentação..."
                className={formErrors.reason ? 'border-red-500' : ''}
              />
              {formErrors.reason && (
                <p className="text-sm text-red-500">{formErrors.reason}</p>
              )}
            </div>

            {/* Documento de Referência */}
            <div className="space-y-2">
              <Label htmlFor="reference-document">Documento de Referência</Label>
              <Input
                id="reference-document"
                value={referenceDocument}
                onChange={(e) => setReferenceDocument(e.target.value)}
                placeholder="Nota fiscal, ordem de compra, etc."
              />
            </div>

            {/* Responsável */}
            <div className="space-y-2">
              <Label htmlFor="responsible-user">Responsável *</Label>
              <Input
                id="responsible-user"
                value={responsibleUser}
                onChange={(e) => setResponsibleUser(e.target.value)}
                placeholder="Nome do responsável pela movimentação"
                className={formErrors.responsibleUser ? 'border-red-500' : ''}
              />
              {formErrors.responsibleUser && (
                <p className="text-sm text-red-500">{formErrors.responsibleUser}</p>
              )}
            </div>

            {/* Fornecedor */}
            <div className="space-y-2">
              <Label htmlFor="supplier">Fornecedor</Label>
              <Select value={supplier} onValueChange={setSupplier}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um fornecedor" />
                </SelectTrigger>
                <SelectContent>
                  {fornecedores.map((fornecedor) => (
                    <SelectItem key={fornecedor.id} value={fornecedor.id}>
                      <div className="flex flex-col">
                        <span className="font-bold text-base">{fornecedor.nome_fantasia}</span>
                        <span className="text-sm text-gray-600">{fornecedor.cnpj}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">
                Recomendado para movimentações de entrada
              </p>
            </div>

            {/* Local de Armazenamento */}
            <div className="space-y-2">
              <Label htmlFor="storage-location">Local de Armazenamento</Label>
              <Input
                id="storage-location"
                value={storageLocation}
                onChange={(e) => setStorageLocation(e.target.value)}
                placeholder="Ex: Estoque A1, Prateleira 2, Depósito Principal"
              />
              <p className="text-xs text-gray-500">
                Especifique onde o material será armazenado ou retirado
              </p>
            </div>

            {/* Comprovante */}
            <div className="space-y-2">
              <Label htmlFor="voucher-file">Comprovante (Arquivo)</Label>
              <Input
                id="voucher-file"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              />
              {voucherFile && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FileText className="h-4 w-4" />
                  <span>{voucherFile.name}</span>
                  <span>({(voucherFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                </div>
              )}
              <p className="text-xs text-gray-500">
                Formatos aceitos: PDF, JPG, PNG, DOC, DOCX (máx. 10MB)
              </p>
            </div>

            {/* Botões */}
            <div className="flex space-x-4">
              <Button type="submit" disabled={isLoading} className="flex-1">
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processando...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Registrar Movimentação</span>
                  </div>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockMovementPage;

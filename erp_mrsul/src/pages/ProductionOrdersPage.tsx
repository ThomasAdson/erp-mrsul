import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Plus, Edit2, Trash2, Play, Pause, Square, RotateCcw, Upload, FileText, Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/lib/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  getAllProductionOrders,
  createProductionOrder,
  updateProductionOrder,
  deleteProductionOrder,
  updateProductionOrderStatus,
  getEquipment,
  uploadFileToProductionOrder,
  getProductionOrderFiles,
  deleteProductionOrderFile,
  downloadProductionOrderFile,
  ProductionOrderFile,
} from '@/lib/api';
import {
  ProductionOrderWithDetails,
  CreateProductionOrderRequest,
  UpdateProductionOrderRequest,
  ProductionOrderStatus,
  Equipment,
} from '@/types';

// Tipo estendido para arquivos temporários no modal de criação
interface TempProductionOrderFile extends ProductionOrderFile {
  file_data?: File;
}

interface ProductionOrderFormData extends Omit<CreateProductionOrderRequest, 'equipment_id'> {
  equipment_id: string;
}

export default function ProductionOrdersPage() {
  const { equipmentId } = useParams<{ equipmentId: string }>();
  const [productionOrders, setProductionOrders] = useState<ProductionOrderWithDetails[]>([]);
  const [equipment, setEquipment] = useState<Equipment | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState<ProductionOrderWithDetails | null>(null);

  // Estados para gerenciamento de arquivos
  const [uploadedFiles, setUploadedFiles] = useState<ProductionOrderFile[]>([]);
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
    // Estados específicos para modal de criação
  const [createUploadedFiles, setCreateUploadedFiles] = useState<TempProductionOrderFile[]>([]);
  const [isUploadingCreateFile, setIsUploadingCreateFile] = useState(false);
  const createFileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<ProductionOrderFormData>({
    equipment_id: equipmentId || '',
    descricao: '',
    observacoes: '',
    data_inicio_planejada: '',
    data_termino_planejada: '',
  });

  const [editFormData, setEditFormData] = useState<UpdateProductionOrderRequest>({
    descricao: '',
    observacoes: '',
    data_inicio_planejada: '',
    data_termino_planejada: '',
  });

  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, [equipmentId]);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Carregar dados do equipamento se equipmentId foi fornecido
      if (equipmentId) {
        const equipmentData = await getEquipment(equipmentId);
        setEquipment(equipmentData);
        setFormData(prev => ({ ...prev, equipment_id: equipmentId }));
      }

      // Carregar ordens de produção
      const ordersData = await getAllProductionOrders(equipmentId);
      setProductionOrders(ordersData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar ordens de produção: " + (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOrder = async () => {
    try {
      await createProductionOrder(formData);
      
      toast({
        title: "Sucesso",
        description: "Ordem de produção criada com sucesso!",
      });
      
      setIsCreateDialogOpen(false);
      setFormData({
        equipment_id: equipmentId || '',
        descricao: '',
        observacoes: '',
        data_inicio_planejada: '',
        data_termino_planejada: '',
      });
      
      await loadData();
    } catch (error) {
      console.error('Erro ao criar ordem de produção:', error);
      toast({
        title: "Erro",
        description: "Erro ao criar ordem de produção: " + (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const handleUpdateOrder = async () => {
    if (!editingOrder) return;

    try {
      await updateProductionOrder(editingOrder.id, editFormData);
      
      toast({
        title: "Sucesso",
        description: "Ordem de produção atualizada com sucesso!",
      });
      
      setIsEditDialogOpen(false);
      setEditingOrder(null);
      await loadData();
    } catch (error) {
      console.error('Erro ao atualizar ordem de produção:', error);
      toast({
        title: "Erro",
        description: "Erro ao atualizar ordem de produção: " + (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteOrder = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta ordem de produção?')) {
      return;
    }

    try {
      await deleteProductionOrder(id);
      
      toast({
        title: "Sucesso",
        description: "Ordem de produção excluída com sucesso!",
      });
      
      await loadData();
    } catch (error) {
      console.error('Erro ao excluir ordem de produção:', error);
      toast({
        title: "Erro",
        description: "Erro ao excluir ordem de produção: " + (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const handleStatusChange = async (id: string, newStatus: ProductionOrderStatus) => {
    try {
      await updateProductionOrderStatus(id, newStatus);
      
      toast({
        title: "Sucesso",
        description: `Status alterado para: ${newStatus}`,
      });
      
      await loadData();
    } catch (error) {
      console.error('Erro ao alterar status:', error);
      toast({
        title: "Erro",
        description: "Erro ao alterar status: " + (error as Error).message,
        variant: "destructive",
      });
    }
  };

  // Funções para gerenciamento de arquivos no modal de edição
  const loadProductionOrderFiles = async (productionOrderId: string) => {
    try {
      setLoadingFiles(true);
      const files = await getProductionOrderFiles(productionOrderId);
      setUploadedFiles(files);
    } catch (error) {
      console.error('Erro ao carregar arquivos:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar arquivos da OP: " + (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setLoadingFiles(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    if (!editingOrder?.id) {
      toast({
        title: "Erro",
        description: "Nenhuma OP selecionada para upload.",
        variant: "destructive",
      });
      return;
    }

    const file = event.target.files[0];
    if (!file) return;

    // Verificar tamanho do arquivo (limite 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "Erro",
        description: "Arquivo muito grande. Tamanho máximo: 10MB",
        variant: "destructive",
      });
      return;
    }

    setIsUploadingFile(true);
    try {
      const uploadedFile = await uploadFileToProductionOrder(editingOrder.id, file);
      setUploadedFiles(prev => [...prev, uploadedFile]);
      
      toast({
        title: "Sucesso",
        description: `Arquivo "${file.name}" enviado com sucesso!`,
      });

      // Limpar input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Erro no upload:', error);
      toast({
        title: "Erro no Upload",
        description: "Erro ao enviar arquivo: " + (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setIsUploadingFile(false);
    }
  };

  const handleFileDownload = async (file: ProductionOrderFile) => {
    try {
      const fileData = await downloadProductionOrderFile(file.id);
      
      // Criar blob e download
      const blob = new Blob([fileData]);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.file_name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Sucesso",
        description: `Arquivo "${file.file_name}" baixado com sucesso!`,
      });
    } catch (error) {
      console.error('Erro no download:', error);
      toast({
        title: "Erro no Download",
        description: "Erro ao baixar arquivo: " + (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const handleFileDelete = async (file: ProductionOrderFile) => {
    if (!confirm(`Tem certeza que deseja excluir o arquivo "${file.file_name}"?`)) {
      return;
    }

    try {
      await deleteProductionOrderFile(file.id);
      setUploadedFiles(prev => prev.filter(f => f.id !== file.id));
      
      toast({
        title: "Sucesso",
        description: `Arquivo "${file.file_name}" excluído com sucesso!`,
      });
    } catch (error) {
      console.error('Erro ao excluir arquivo:', error);
      toast({
        title: "Erro",
        description: "Erro ao excluir arquivo: " + (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const openEditDialog = (order: ProductionOrderWithDetails) => {
    setEditingOrder(order);
    setEditFormData({
      descricao: order.descricao,
      observacoes: order.observacoes || '',
      data_inicio_planejada: order.data_inicio_planejada || '',
      data_termino_planejada: order.data_termino_planejada || '',
    });
    setIsEditDialogOpen(true);
    
    // Carregar arquivos da OP
    loadProductionOrderFiles(order.id);
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setEditingOrder(null);
    setUploadedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Função para upload de arquivos no modal de criação (arquivos temporários)
  const handleCreateFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('🔧 [DEBUG] handleCreateFileUpload chamado', event.target.files);
    
    if (!event.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0];
    if (!file) return;

    console.log('📁 [DEBUG] Arquivo selecionado:', file.name, 'Tamanho:', file.size);

    // Verificar tamanho do arquivo (limite 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "Erro",
        description: "Arquivo muito grande. Tamanho máximo: 10MB",
        variant: "destructive",
      });      return;
    }

    // Para o modal de criação, vamos apenas armazenar os arquivos em memória
    // até que a OP seja criada
    const tempFile: TempProductionOrderFile = {
      id: `temp-${Date.now()}`,
      production_order_id: 'temp',
      file_name: file.name,
      original_name: file.name,
      file_path: '',
      file_size: file.size,
      mime_type: file.type || 'application/octet-stream',
      created_at: new Date().toISOString(),
      file_data: file // Armazenar o arquivo temporariamente
    };

    setCreateUploadedFiles(prev => [...prev, tempFile]);
    
    toast({
      title: "Arquivo Preparado",
      description: `Arquivo "${file.name}" será enviado após criar a OP.`,
    });

    // Limpar input
    if (createFileInputRef.current) {
      createFileInputRef.current.value = '';
    }
  };

  const handleCreateFileDelete = (fileId: string) => {
    setCreateUploadedFiles(prev => prev.filter(f => f.id !== fileId));
    toast({
      title: "Arquivo Removido",
      description: "Arquivo removido da lista de upload.",
    });
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Pendente': { variant: 'secondary' as const, color: 'bg-gray-500' },
      'Em produção': { variant: 'default' as const, color: 'bg-blue-500' },
      'Pausada': { variant: 'destructive' as const, color: 'bg-yellow-500' },
      'Finalizada': { variant: 'default' as const, color: 'bg-green-500' },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Pendente'];
    
    return (
      <Badge variant={config.variant} className={config.color}>
        {status}
      </Badge>
    );
  };
  const getControlButtons = (order: ProductionOrderWithDetails) => {
    const status = order.status;
    const id = order.id;

    switch (status) {
      case 'Pendente':
        return (
          <Button
            size="sm"
            onClick={() => handleStatusChange(id, 'Em produção')}
            className="bg-green-600 hover:bg-green-700"
          >
            <Play className="w-4 h-4 mr-1" />
            Iniciar
          </Button>
        );
      
      case 'Em produção':
        return (
          <div className="flex flex-col gap-1">
            <Button
              size="sm"
              onClick={() => handleStatusChange(id, 'Pausada')}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              <Pause className="w-4 h-4 mr-1" />
              Pausar
            </Button>
            <Button
              size="sm"
              onClick={() => handleStatusChange(id, 'Finalizada')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Square className="w-4 h-4 mr-1" />
              Finalizar
            </Button>
          </div>
        );
      
      case 'Pausada':
        return (
          <div className="flex flex-col gap-1">
            <Button
              size="sm"
              onClick={() => handleStatusChange(id, 'Em produção')}
              className="bg-green-600 hover:bg-green-700"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Retomar
            </Button>
            <Button
              size="sm"
              onClick={() => handleStatusChange(id, 'Finalizada')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Square className="w-4 h-4 mr-1" />
              Finalizar
            </Button>
          </div>
        );
      
      case 'Finalizada':
        return (
          <Badge variant="outline" className="text-green-600">
            Concluída
          </Badge>
        );
      
      default:
        return null;
    }
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Carregando ordens de produção...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Ordens de Produção
            {equipment && (
              <span className="text-muted-foreground ml-2">
                - {equipment.equipment_type} {equipment.serial_number}
              </span>
            )}
          </h1>
          <p className="text-muted-foreground">
            Gerencie as ordens de produção
          </p>
        </div>
        <Button onClick={() => setIsCreateDialogOpen(true)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Nova OP
        </Button>
      </div>

      {/* Tabela de Ordens de Produção */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Ordens de Produção</CardTitle>
          <CardDescription>
            {productionOrders.length} ordem(ns) de produção encontrada(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código OP</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Início</TableHead>
                <TableHead>Término</TableHead>
                <TableHead>Início Real</TableHead>
                <TableHead>Término Real</TableHead>
                <TableHead>Tempo Pausado</TableHead>
                <TableHead>Controle</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>            <TableBody>
              {productionOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">
                    {order.codigo_op}
                  </TableCell>
                  <TableCell>{order.descricao}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    {order.data_inicio_planejada ? 
                      new Date(order.data_inicio_planejada).toLocaleDateString('pt-BR') : '-'}
                  </TableCell>
                  <TableCell>
                    {order.data_termino_planejada ? 
                      new Date(order.data_termino_planejada).toLocaleDateString('pt-BR') : '-'}
                  </TableCell>
                  <TableCell>
                    {order.data_inicio_real ? 
                      new Date(order.data_inicio_real).toLocaleDateString('pt-BR') : '-'}
                  </TableCell>
                  <TableCell>
                    {order.data_termino_real ? 
                      new Date(order.data_termino_real).toLocaleDateString('pt-BR') : '-'}
                  </TableCell>
                  <TableCell>
                    {order.tempo_pausado_segundos > 0 ? 
                      formatTime(order.tempo_pausado_segundos) : '-'}
                  </TableCell>
                  <TableCell>
                    {getControlButtons(order)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditDialog(order)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteOrder(order.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>      {/* Modal de Criar OP */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Nova Ordem de Produção</DialogTitle>
            <DialogDescription>
              Crie uma nova ordem de produção para o equipamento selecionado.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            {/* TESTE - Seção de Arquivos Visível */}
            <div className="bg-red-500 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">🚨 TESTE: Seção de Arquivos</h2>
              <p>Se você está vendo esta seção vermelha, o código está funcionando!</p>
              <Button className="mt-2 bg-white text-red-500">
                <Upload className="h-4 w-4 mr-2" />
                Botão de Teste
              </Button>
            </div>

            {/* Campos originais */}
            <div className="grid gap-2">
              <Label htmlFor="descricao">Descrição *</Label>
              <Input
                id="descricao"
                value={formData.descricao}
                onChange={(e) => setFormData(prev => ({ ...prev, descricao: e.target.value }))}
                placeholder="Digite a descrição da OP"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="observacoes">Observações</Label>
              <Textarea
                id="observacoes"
                value={formData.observacoes}
                onChange={(e) => setFormData(prev => ({ ...prev, observacoes: e.target.value }))}
                placeholder="Observações adicionais (opcional)"
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="data_inicio">Data Início Planejada</Label>
                <Input
                  id="data_inicio"
                  type="date"
                  value={formData.data_inicio_planejada}
                  onChange={(e) => setFormData(prev => ({ ...prev, data_inicio_planejada: e.target.value }))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="data_termino">Data Término Planejada</Label>
                <Input
                  id="data_termino"
                  type="date"
                  value={formData.data_termino_planejada}
                  onChange={(e) => setFormData(prev => ({ ...prev, data_termino_planejada: e.target.value }))}                />
              </div>
            </div>

            {/* Seção de Arquivos */}
            <div className="grid gap-4 border-t pt-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-blue-700">📁 Desenhos Técnicos/Documentos da OP</h3>
                <div className="flex gap-2">
                  <input
                    ref={createFileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.dwg"
                    onChange={handleCreateFileUpload}
                    style={{ display: 'none' }}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => createFileInputRef.current?.click()}
                    disabled={isUploadingCreateFile}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {isUploadingCreateFile ? 'Enviando...' : 'Carregar Arquivo'}
                  </Button>
                </div>
              </div>

              {/* Lista de Arquivos */}
              {loadingFiles ? (
                <div className="text-center py-4">
                  <p>Carregando arquivos...</p>
                </div>
              ) : createUploadedFiles.length > 0 ? (
                <div className="space-y-2">
                  {createUploadedFiles.map((file) => (
                    <Card key={file.id} className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm font-medium">{file.file_name}</p>
                            <p className="text-xs text-gray-500">
                              Adicionado em: {new Date(file.created_at).toLocaleDateString('pt-BR')} às {new Date(file.created_at).toLocaleTimeString('pt-BR')}
                            </p>
                          </div>
                        </div>                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCreateFileDelete(file.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Nenhum arquivo anexado</p>
                  <p className="text-sm">Clique em "Carregar Arquivo" para adicionar documentos</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              onClick={handleCreateOrder}
              disabled={!formData.descricao.trim()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Criar OP
            </Button>
          </div>
        </DialogContent>
      </Dialog>      {/* Modal de Editar OP */}
      <Dialog open={isEditDialogOpen} onOpenChange={closeEditDialog}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Ordem de Produção</DialogTitle>
            <DialogDescription>
              Edite as informações da ordem de produção e gerencie arquivos.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            {/* Informações Básicas */}
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Informações Básicas</h3>
              
              <div className="grid gap-2">
                <Label htmlFor="edit_descricao">Descrição *</Label>
                <Input
                  id="edit_descricao"
                  value={editFormData.descricao}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, descricao: e.target.value }))}
                  placeholder="Digite a descrição da OP"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="edit_observacoes">Observações</Label>
                <Textarea
                  id="edit_observacoes"
                  value={editFormData.observacoes}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, observacoes: e.target.value }))}
                  placeholder="Observações adicionais (opcional)"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit_data_inicio">Data Início Planejada</Label>
                  <Input
                    id="edit_data_inicio"
                    type="date"
                    value={editFormData.data_inicio_planejada}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, data_inicio_planejada: e.target.value }))}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit_data_termino">Data Término Planejada</Label>
                  <Input
                    id="edit_data_termino"
                    type="date"
                    value={editFormData.data_termino_planejada}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, data_termino_planejada: e.target.value }))}
                  />
                </div>
              </div>
            </div>            {/* Seção de Arquivos */}
            <div className="grid gap-4 border-t pt-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-blue-700">📁 Desenhos Técnicos/Documentos da OP</h3>
                <div className="flex gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.dwg"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploadingFile || !editingOrder?.id}
                    className="bg-blue-600 text-white hover:bg-blue-700"                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {isUploadingFile ? 'Enviando...' : 'Carregar Arquivo'}
                  </Button>
                </div>
              </div>

              {/* Lista de Arquivos */}
              {loadingFiles ? (
                <div className="text-center py-4">
                  <p>Carregando arquivos...</p>
                </div>
              ) : uploadedFiles.length > 0 ? (
                <div className="space-y-2">
                  {uploadedFiles.map((file) => (
                    <Card key={file.id} className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm font-medium">{file.file_name}</p>
                            <p className="text-xs text-gray-500">
                              Adicionado em: {new Date(file.created_at).toLocaleDateString('pt-BR')} às {new Date(file.created_at).toLocaleTimeString('pt-BR')}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFileDownload(file)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFileDelete(file)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Nenhum arquivo anexado</p>
                  <p className="text-sm">Clique em "Carregar Arquivo" para adicionar documentos</p>
                </div>
              )}
            </div>
          </div>
            <div className="flex justify-end gap-3 border-t pt-4">
            <Button variant="outline" onClick={closeEditDialog}>
              Cancelar
            </Button>
            <Button 
              onClick={handleUpdateOrder}
              disabled={!editFormData.descricao?.trim()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Atualizar OP
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

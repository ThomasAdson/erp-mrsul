import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CalendarIcon, Plus, Trash2, Edit2 } from 'lucide-react';
import { toast } from '@/lib/use-toast';
import { PurchaseOrder, PurchaseOrderItemWithMaterial } from '@/types';
import { Fornecedor, Material } from '@/lib/api';
import { invoke } from '@tauri-apps/api/core';
import { MaterialCombobox } from './ui/MaterialCombobox';

interface PurchaseOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  order?: PurchaseOrder;
  onSave: () => void;
}

interface FormData {
  numero_pedido: string;
  fornecedor_id: string;
  data_pedido: string;
  data_entrega_prevista: string;
  observacoes: string;
  status: string;
  valor_total: number;
  itens: PurchaseOrderItemWithMaterial[];
}

const statusOptions = [
  { value: 'rascunho', label: 'Rascunho', color: 'gray' },
  { value: 'enviado', label: 'Enviado', color: 'blue' },
  { value: 'confirmado', label: 'Confirmado', color: 'green' },
  { value: 'recebido_parcial', label: 'Recebido Parcial', color: 'yellow' },
  { value: 'recebido_total', label: 'Recebido Total', color: 'purple' },
  { value: 'cancelado', label: 'Cancelado', color: 'red' },
];

export const PurchaseOrderModal: React.FC<PurchaseOrderModalProps> = ({
  isOpen,
  onClose,
  order,
  onSave,
}) => {
  const [formData, setFormData] = useState<FormData>({
    numero_pedido: '',
    fornecedor_id: '',
    data_pedido: new Date().toISOString().split('T')[0],
    data_entrega_prevista: '',
    observacoes: '',
    status: 'rascunho',
    valor_total: 0,
    itens: [],
  });

  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [materiais, setMateriais] = useState<Material[]>([]);
  const [loading, setLoading] = useState(false);
  const [showItemForm, setShowItemForm] = useState(false);
  const [editingItem, setEditingItem] = useState<number | null>(null);
  const [itemForm, setItemForm] = useState({
    material_id: '',
    quantidade_solicitada: 0,
    preco_unitario: 0,
    observacoes: '',
  });

  const isEditing = !!order;

  useEffect(() => {
    if (isOpen) {
      loadFornecedores();
      loadMateriais();
      
      if (order) {
        setFormData({
          numero_pedido: order.numero || '',
          fornecedor_id: order.fornecedor_id,
          data_pedido: order.data_pedido.split('T')[0],
          data_entrega_prevista: order.data_entrega_prevista?.split('T')[0] || '',
          observacoes: order.observacoes || '',
          status: order.status,
          valor_total: order.valor_total,
          itens: [], // Will be populated by loadOrderItems
        });
        
        // Carregar os itens do pedido para edição após definir o formulário
        loadOrderItems(order.id);
      } else {
        // Reset form for new order
        setFormData({
          numero_pedido: '',
          fornecedor_id: '',
          data_pedido: new Date().toISOString().split('T')[0],
          data_entrega_prevista: '',
          observacoes: '',
          status: 'rascunho',
          valor_total: 0,
          itens: [],
        });
      }
    }
  }, [isOpen, order]);

  const loadFornecedores = async () => {
    try {
      const result = await invoke<Fornecedor[]>('get_all_fornecedores');
      setFornecedores(result);
    } catch (error) {
      console.error('Failed to load fornecedores:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao carregar fornecedores',
        variant: 'destructive',
      });
    }
  };

  const loadMateriais = async () => {
    try {
      const result = await invoke<Material[]>('list_materiais');
      setMateriais(result);
    } catch (error) {
      console.error('Failed to load materiais:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao carregar materiais',
        variant: 'destructive',
      });
    }
  };

  const loadOrderItems = async (orderId: string) => {
    try {
      const result = await invoke<PurchaseOrderItemWithMaterial[]>('get_purchase_order_items', { pedidoId: orderId });
      setFormData(prev => ({
        ...prev,
        itens: result,
        valor_total: calculateTotal(result)
      }));
    } catch (error) {
      console.error('Failed to load order items:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao carregar itens do pedido',
        variant: 'destructive',
      });
    }
  };

  const calculateTotal = (itens: PurchaseOrderItemWithMaterial[]) => {
    return itens.reduce((total, item) => total + (item.quantidade_solicitada * item.preco_unitario), 0);
  };

  const handleAddItem = () => {
    if (!itemForm.material_id || itemForm.quantidade_solicitada <= 0 || itemForm.preco_unitario < 0) {
      toast({
        title: 'Erro',
        description: 'Preencha todos os campos obrigatórios do item',
        variant: 'destructive',
      });
      return;
    }

    const material = materiais.find(m => m.id === itemForm.material_id);
    if (!material) return;

    const newItem: PurchaseOrderItemWithMaterial = {
      id: editingItem !== null ? formData.itens[editingItem].id : `temp-${Date.now()}`,
      pedido_compra_id: order?.id || '',
      material_id: itemForm.material_id,
      material_codigo: material.codigo_material_completo,
      material_descricao: material.descricao_completa,
      material_unidade: material.unidade_medida,
      quantidade_solicitada: itemForm.quantidade_solicitada,
      quantidade_recebida: 0,
      preco_unitario: itemForm.preco_unitario,
      valor_total: itemForm.quantidade_solicitada * itemForm.preco_unitario,
      observacoes: itemForm.observacoes,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    let newItens = [...formData.itens];
    if (editingItem !== null) {
      newItens[editingItem] = newItem;
      setEditingItem(null);
    } else {
      newItens.push(newItem);
    }

    const newTotal = calculateTotal(newItens);
    setFormData(prev => ({
      ...prev,
      itens: newItens,
      valor_total: newTotal,
    }));

    // Reset item form
    setItemForm({
      material_id: '',
      quantidade_solicitada: 0,
      preco_unitario: 0,
      observacoes: '',
    });
    setShowItemForm(false);
  };

  const handleEditItem = (index: number) => {
    const item = formData.itens[index];
    setItemForm({
      material_id: item.material_id,
      quantidade_solicitada: item.quantidade_solicitada,
      preco_unitario: item.preco_unitario,
      observacoes: item.observacoes || '',
    });
    setEditingItem(index);
    setShowItemForm(true);
  };

  const handleRemoveItem = (index: number) => {
    const newItens = formData.itens.filter((_, i) => i !== index);
    const newTotal = calculateTotal(newItens);
    setFormData(prev => ({
      ...prev,
      itens: newItens,
      valor_total: newTotal,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fornecedor_id || formData.itens.length === 0) {
      toast({
        title: 'Erro',
        description: 'Selecione um fornecedor e adicione pelo menos um item',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const orderData = {
        fornecedor_id: formData.fornecedor_id,
        projeto_id: null,
        data_entrega_prevista: formData.data_entrega_prevista || null,
        observacoes: formData.observacoes || null,
        termo_pagamento: null,
        condicao_entrega: null,
        itens: formData.itens.map(item => ({
          material_id: item.material_id,
          quantidade_solicitada: item.quantidade_solicitada,
          preco_unitario: item.preco_unitario,
          observacoes: item.observacoes || null,
        })),
      };

      if (isEditing) {
        // Para edição, só temos update_purchase_order_status por enquanto
        await invoke('update_purchase_order_status', {
          id: order.id,
          newStatus: formData.status,
          observacoes: 'Pedido atualizado via interface',
        });
        toast({
          title: 'Sucesso',
          description: 'Status do pedido atualizado com sucesso',
        });
      } else {
        await invoke('create_purchase_order', { request: orderData });
        toast({
          title: 'Sucesso',
          description: 'Pedido de compra criado com sucesso',
        });
      }

      onSave();
      onClose();
    } catch (error) {
      console.error('Failed to save purchase order:', error);
      toast({
        title: 'Erro',
        description: `Falha ao ${isEditing ? 'atualizar' : 'criar'} pedido de compra: ${error}`,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const selectedFornecedor = fornecedores.find(f => f.id === formData.fornecedor_id);
  const currentStatus = statusOptions.find(s => s.value === formData.status);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? 'Editar Pedido de Compra' : 'Novo Pedido de Compra'}
            {formData.numero_pedido && (
              <span className="text-muted-foreground ml-2">#{formData.numero_pedido}</span>
            )}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Informações Gerais</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="fornecedor">Fornecedor *</Label>
                <Select
                  value={formData.fornecedor_id}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, fornecedor_id: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um fornecedor" />
                  </SelectTrigger>
                  <SelectContent>
                    {fornecedores.map((fornecedor) => (
                      <SelectItem key={fornecedor.id} value={fornecedor.id}>
                        {fornecedor.nome_fantasia} ({fornecedor.cnpj})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={`bg-${status.color}-100 text-${status.color}-800`}>
                            {status.label}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="valor_total">Valor Total</Label>
                <Input
                  type="text"
                  value={`R$ ${formData.valor_total.toFixed(2)}`}
                  readOnly
                  className="bg-muted"
                />
              </div>

              <div>
                <Label htmlFor="data_pedido">Data do Pedido *</Label>
                <Input
                  type="date"
                  value={formData.data_pedido}
                  onChange={(e) => setFormData(prev => ({ ...prev, data_pedido: e.target.value }))}
                  required
                />
              </div>

              <div>
                <Label htmlFor="data_entrega">Data de Entrega Esperada</Label>
                <Input
                  type="date"
                  value={formData.data_entrega_prevista}
                  onChange={(e) => setFormData(prev => ({ ...prev, data_entrega_prevista: e.target.value }))}
                />
              </div>

              <div className="md:col-span-3">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea
                  value={formData.observacoes}
                  onChange={(e) => setFormData(prev => ({ ...prev, observacoes: e.target.value }))}
                  placeholder="Observações gerais do pedido..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Items Section */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Itens do Pedido</CardTitle>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setShowItemForm(true);
                    setEditingItem(null);
                    setItemForm({
                      material_id: '',
                      quantidade_solicitada: 0,
                      preco_unitario: 0,
                      observacoes: '',
                    });
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Item
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Add/Edit Item Form */}
              {showItemForm && (
                <Card className="mb-4">
                  <CardContent className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-2">
                        <Label>Material *</Label>
                        <MaterialCombobox
                          materials={materiais}
                          value={itemForm.material_id}
                          onValueChange={(value) => setItemForm(prev => ({ ...prev, material_id: value || '' }))}
                          placeholder="Buscar material..."
                          showStock={false}
                        />
                      </div>
                      <div>
                        <Label>Quantidade *</Label>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          value={itemForm.quantidade_solicitada}
                          onChange={(e) => setItemForm(prev => ({ ...prev, quantidade_solicitada: parseFloat(e.target.value) || 0 }))}
                        />
                      </div>
                      <div>
                        <Label>Preço Unitário</Label>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          value={itemForm.preco_unitario}
                          onChange={(e) => setItemForm(prev => ({ ...prev, preco_unitario: parseFloat(e.target.value) || 0 }))}
                        />
                      </div>
                      <div className="md:col-span-4">
                        <Label>Observações do Item</Label>
                        <Textarea
                          value={itemForm.observacoes}
                          onChange={(e) => setItemForm(prev => ({ ...prev, observacoes: e.target.value }))}
                          placeholder="Observações específicas deste item..."
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button type="button" onClick={handleAddItem} size="sm">
                        {editingItem !== null ? 'Atualizar' : 'Adicionar'} Item
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setShowItemForm(false);
                          setEditingItem(null);
                        }}
                        size="sm"
                      >
                        Cancelar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Items List */}
              {formData.itens.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Código</th>
                        <th className="text-left p-2">Descrição</th>
                        <th className="text-center p-2">Qtd</th>
                        <th className="text-center p-2">Unid</th>
                        <th className="text-right p-2">Preço Unit.</th>
                        <th className="text-right p-2">Total</th>
                        <th className="text-center p-2">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.itens.map((item, index) => (
                        <tr key={item.id} className="border-b hover:bg-muted/50">
                          <td className="p-2 font-mono">{item.material_codigo}</td>
                          <td className="p-2">{item.material_descricao}</td>
                          <td className="p-2 text-center">{item.quantidade_solicitada}</td>
                          <td className="p-2 text-center">{item.material_unidade}</td>
                          <td className="p-2 text-right">R$ {item.preco_unitario.toFixed(2)}</td>
                          <td className="p-2 text-right font-medium">R$ {item.valor_total.toFixed(2)}</td>
                          <td className="p-2 text-center">
                            <div className="flex gap-1 justify-center">
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleEditItem(index)}
                              >
                                <Edit2 className="h-3 w-3" />
                              </Button>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveItem(index)}
                                className="text-destructive hover:text-destructive"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="font-medium">
                        <td colSpan={5} className="p-2 text-right">Total Geral:</td>
                        <td className="p-2 text-right">R$ {formData.valor_total.toFixed(2)}</td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  Nenhum item adicionado ao pedido
                </div>
              )}
            </CardContent>
          </Card>

          {/* Form Actions */}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : (isEditing ? 'Atualizar' : 'Criar')} Pedido
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

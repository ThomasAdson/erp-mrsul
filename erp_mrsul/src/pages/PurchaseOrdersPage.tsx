import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/lib/use-toast';
import { PurchaseOrder, PurchaseOrderWithDetails } from '@/types';
import { invoke } from '@tauri-apps/api/core';
import { CalendarIcon, Package, Truck, CheckCircle, Plus, Eye, Edit2, Trash2, Search } from 'lucide-react';
import { PurchaseOrderModal } from '@/components/PurchaseOrderModal';
import { getAllFornecedores, Fornecedor } from '@/lib/api';

const statusConfig = {
  rascunho: { label: 'Rascunho', color: 'bg-gray-100 text-gray-800', icon: Package },
  enviado: { label: 'Enviado', color: 'bg-blue-100 text-blue-800', icon: Truck },
  confirmado: { label: 'Confirmado', color: 'bg-green-100 text-green-800', icon: CheckCircle },
  recebido_parcial: { label: 'Recebido Parcial', color: 'bg-yellow-100 text-yellow-800', icon: Package },
  recebido_total: { label: 'Recebido Total', color: 'bg-purple-100 text-purple-800', icon: CheckCircle },
  cancelado: { label: 'Cancelado', color: 'bg-red-100 text-red-800', icon: Package },
};

const PurchaseOrdersPage: React.FC = () => {
  const navigate = useNavigate();
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<PurchaseOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState<PurchaseOrder | undefined>();
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);

  useEffect(() => {
    loadPurchaseOrders();
    loadFornecedores();
  }, []);

  useEffect(() => {
    filterOrders();
  }, [purchaseOrders, searchTerm, statusFilter]);

  const loadPurchaseOrders = async () => {
    try {
      setIsLoading(true);
      const orders = await invoke<PurchaseOrder[]>('get_all_purchase_orders');
      setPurchaseOrders(orders);
    } catch (error) {
      console.error('Failed to load purchase orders:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao carregar pedidos de compra',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loadFornecedores = async () => {
    try {
      const suppliers = await getAllFornecedores();
      setFornecedores(suppliers);
    } catch (error) {
      console.error('Failed to load fornecedores:', error);
    }
  };

  const filterOrders = () => {
    let filtered = purchaseOrders;

    if (searchTerm) {
      filtered = filtered.filter(order => 
        order.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.fornecedor_id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    setFilteredOrders(filtered);
  };

  const handleViewOrder = (order: PurchaseOrder) => {
    navigate(`/purchase-orders/${order.id}`);
  };

  const handleEditOrder = async (order: PurchaseOrder) => {
    try {
      setIsLoading(true);
      // Carregar os detalhes completos do pedido para edição
      const details = await invoke('get_purchase_order_details', { id: order.id }) as PurchaseOrderWithDetails;
      setEditingOrder(details.pedido);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Failed to load order details for editing:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao carregar detalhes do pedido para edição',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteOrder = async (order: PurchaseOrder) => {
    if (!confirm(`Tem certeza que deseja excluir o pedido ${order.numero}?`)) {
      return;
    }

    toast({
      title: 'Funcionalidade não implementada',
      description: 'A funcionalidade de excluir pedidos ainda não foi implementada',
      variant: 'default',
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingOrder(undefined);
  };

  const handleModalSave = () => {
    loadPurchaseOrders();
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getFornecedorName = (fornecedorId: string) => {
    const fornecedor = fornecedores.find(f => f.id === fornecedorId);
    return fornecedor ? fornecedor.nome_fantasia : `ID: ${fornecedorId}`;
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Carregando pedidos de compra...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Pedidos de Compra</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie todos os pedidos de compra da empresa
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Novo Pedido
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar por número do pedido ou fornecedor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <select
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">Todos os status</option>
                {Object.entries(statusConfig).map(([key, config]) => (
                  <option key={key} value={key}>{config.label}</option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Orders List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Pedidos ({filteredOrders.length})
        </h2>
          
        {filteredOrders.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Nenhum pedido encontrado com os filtros aplicados'
                  : 'Nenhum pedido de compra encontrado'
                }
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filteredOrders.map((order) => {
              const statusInfo = statusConfig[order.status as keyof typeof statusConfig];
              const StatusIcon = statusInfo.icon;
              
              return (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">#{order.numero}</h3>
                        <p className="text-muted-foreground">Fornecedor: {getFornecedorName(order.fornecedor_id)}</p>
                      </div>
                      <Badge className={statusInfo.color}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {statusInfo.label}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Data do Pedido</p>
                        <p className="font-medium">{formatDate(order.data_pedido)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Valor Total</p>
                        <p className="font-medium">{formatCurrency(order.valor_total)}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewOrder(order)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Ver
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditOrder(order)}
                      >
                        <Edit2 className="h-3 w-3 mr-1" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteOrder(order)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Excluir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal */}
      <PurchaseOrderModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        order={editingOrder}
        onSave={handleModalSave}
      />
    </div>
  );
};

export default PurchaseOrdersPage;

import React, { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { PurchaseOrder, PurchaseOrderWithDetails, CreatePurchaseOrderRequest, PURCHASE_ORDER_STATUS } from '../types';

const PurchaseOrdersPage: React.FC = () => {
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<PurchaseOrderWithDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    loadPurchaseOrders();
  }, []);

  const loadPurchaseOrders = async () => {
    try {
      setIsLoading(true);
      const orders = await invoke<PurchaseOrder[]>('get_all_purchase_orders');
      setPurchaseOrders(orders);
      setError(null);
    } catch (err) {
      setError(err as string);
      console.error('Failed to load purchase orders:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadOrderDetails = async (orderId: string) => {
    try {
      const orderDetails = await invoke<PurchaseOrderWithDetails>('get_purchase_order_with_details', { id: orderId });
      setSelectedOrder(orderDetails);
    } catch (err) {
      setError(err as string);
      console.error('Failed to load order details:', err);
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      await invoke('update_purchase_order_status', {
        id: orderId,
        newStatus: newStatus,
        observacoes: `Status alterado para ${newStatus}`
      });
      await loadPurchaseOrders();
      if (selectedOrder && selectedOrder.pedido.id === orderId) {
        await loadOrderDetails(orderId);
      }
    } catch (err) {
      setError(err as string);
      console.error('Failed to update order status:', err);
    }
  };

  const createTestOrder = async () => {
    try {
      // Create a test order with real IDs from the database
      const testOrder: CreatePurchaseOrderRequest = {
        fornecedor_id: '29153e05-374d-4878-a989-03b609c465e6', // GGD Metals
        observacoes: 'Pedido de teste criado pela interface',
        itens: [
          {
            material_id: '325ae3f6-61c7-4ec5-8e2a-7fde4e7af7c5', // Tubo Quadrado - 20 x 20 x 1
            quantidade_solicitada: 10,
            preco_unitario: 25.50
          }
        ]
      };

      await invoke('create_purchase_order', { request: testOrder });
      await loadPurchaseOrders();
      setShowCreateModal(false);
    } catch (err) {
      setError(err as string);
      console.error('Failed to create test order:', err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case PURCHASE_ORDER_STATUS.RASCUNHO:
        return 'bg-gray-100 text-gray-800';
      case PURCHASE_ORDER_STATUS.ENVIADO:
        return 'bg-blue-100 text-blue-800';
      case PURCHASE_ORDER_STATUS.CONFIRMADO:
        return 'bg-yellow-100 text-yellow-800';
      case PURCHASE_ORDER_STATUS.RECEBIMENTO_PARCIAL:
        return 'bg-orange-100 text-orange-800';
      case PURCHASE_ORDER_STATUS.RECEBIDO:
        return 'bg-green-100 text-green-800';
      case PURCHASE_ORDER_STATUS.CANCELADO:
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return <div className="p-6">Carregando pedidos de compra...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Pedidos de Compra</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
        >
          Novo Pedido
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lista de Pedidos */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Lista de Pedidos ({purchaseOrders.length})
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {purchaseOrders.map((order) => (
                <div
                  key={order.id}
                  className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                    selectedOrder?.pedido.id === order.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => loadOrderDetails(order.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">{order.numero}</p>
                      <p className="text-sm text-gray-500">
                        Fornecedor: {order.fornecedor_id}
                      </p>
                      <p className="text-sm text-gray-500">
                        Data: {new Date(order.data_pedido).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        R$ {order.valor_total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {purchaseOrders.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  Nenhum pedido de compra encontrado
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detalhes do Pedido */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Detalhes do Pedido
            </h3>
            {selectedOrder ? (
              <div className="space-y-4">
                {/* Header do Pedido */}
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold">{selectedOrder.pedido.numero}</h4>
                      {selectedOrder.fornecedor && (
                        <p className="text-gray-600">
                          {selectedOrder.fornecedor.nome_fantasia} ({selectedOrder.fornecedor.cnpj})
                        </p>
                      )}
                    </div>
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(selectedOrder.pedido.status)}`}>
                      {selectedOrder.pedido.status}
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Data do Pedido:</span> {new Date(selectedOrder.pedido.data_pedido).toLocaleDateString('pt-BR')}
                    </div>
                    <div>
                      <span className="font-medium">Valor Total:</span> R$ {selectedOrder.pedido.valor_total.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Itens do Pedido */}
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Itens do Pedido</h5>
                  <div className="space-y-2">
                    {selectedOrder.itens.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <div>
                          <p className="font-medium">{item.material_codigo} - {item.material_descricao}</p>
                          <p className="text-sm text-gray-600">
                            Qtd: {item.quantidade_solicitada} {item.material_unidade}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">R$ {item.preco_unitario.toFixed(2)}</p>
                          <p className="text-sm text-gray-600">Total: R$ {item.valor_total.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ações */}
                <div className="pt-4 border-t">
                  <h5 className="font-medium text-gray-900 mb-2">Ações</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedOrder.pedido.status === PURCHASE_ORDER_STATUS.RASCUNHO && (
                      <button
                        onClick={() => updateOrderStatus(selectedOrder.pedido.id, PURCHASE_ORDER_STATUS.ENVIADO)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Enviar
                      </button>
                    )}
                    {selectedOrder.pedido.status === PURCHASE_ORDER_STATUS.ENVIADO && (
                      <button
                        onClick={() => updateOrderStatus(selectedOrder.pedido.id, PURCHASE_ORDER_STATUS.CONFIRMADO)}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Confirmar
                      </button>
                    )}
                    {selectedOrder.pedido.status === PURCHASE_ORDER_STATUS.CONFIRMADO && (
                      <button
                        onClick={() => updateOrderStatus(selectedOrder.pedido.id, PURCHASE_ORDER_STATUS.RECEBIDO)}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Marcar como Recebido
                      </button>
                    )}
                    {selectedOrder.pedido.status !== PURCHASE_ORDER_STATUS.CANCELADO && selectedOrder.pedido.status !== PURCHASE_ORDER_STATUS.RECEBIDO && (
                      <button
                        onClick={() => updateOrderStatus(selectedOrder.pedido.id, PURCHASE_ORDER_STATUS.CANCELADO)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Cancelar
                      </button>
                    )}
                  </div>
                </div>

                {/* Histórico */}
                {selectedOrder.historico.length > 0 && (
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Histórico</h5>
                    <div className="space-y-2">
                      {selectedOrder.historico.map((hist) => (
                        <div key={hist.id} className="text-sm p-2 bg-gray-50 rounded">
                          <p>
                            <span className="font-medium">{hist.status_novo}</span>
                            {hist.status_anterior && ` (de ${hist.status_anterior})`}
                          </p>
                          <p className="text-gray-600">
                            {new Date(hist.created_at).toLocaleString('pt-BR')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Selecione um pedido para ver os detalhes
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de Criação (simplificado para teste) */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Criar Pedido de Teste</h3>
              <p className="text-sm text-gray-600 mb-4">
                Este irá criar um pedido de teste com dados fictícios. Certifique-se de que existem fornecedores e materiais cadastrados.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  onClick={createTestOrder}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Criar Teste
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseOrdersPage;

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/lib/use-toast';
import { PurchaseOrder, PurchaseOrderWithDetails } from '@/types';
import { invoke } from '@tauri-apps/api/core';
import ReceivePurchaseOrderDialog from './ReceivePurchaseOrderDialog';
import { 
  Send, 
  CheckCircle, 
  Package, 
  XCircle, 
  Clock,
  Loader2,
  Truck
} from 'lucide-react';

interface PurchaseOrderStatusActionsProps {
  order: PurchaseOrder;
  onStatusUpdated: () => void;
  disabled?: boolean;
}

type StatusAction = {
  id: string;
  label: string;
  newStatus: string;
  variant: 'default' | 'destructive' | 'outline' | 'secondary';
  icon: React.ComponentType<{ className?: string }>;
  requiresConfirmation?: boolean;
  description?: string;
};

const statusActionsMap: Record<string, StatusAction[]> = {
  rascunho: [
    {
      id: 'send',
      label: 'Enviar',
      newStatus: 'enviado',
      variant: 'default',
      icon: Send,
      requiresConfirmation: true,
      description: 'Enviar pedido para o fornecedor'
    },
    {
      id: 'cancel',
      label: 'Cancelar',
      newStatus: 'cancelado',
      variant: 'destructive',
      icon: XCircle,
      requiresConfirmation: true,
      description: 'Cancelar este pedido'
    }
  ],
  enviado: [
    {
      id: 'confirm',
      label: 'Confirmar',
      newStatus: 'confirmado',
      variant: 'default',
      icon: CheckCircle,
      requiresConfirmation: true,
      description: 'Confirmar pedido com fornecedor'
    },
    {
      id: 'cancel',
      label: 'Cancelar',
      newStatus: 'cancelado',
      variant: 'destructive',
      icon: XCircle,
      requiresConfirmation: true,
      description: 'Cancelar este pedido'
    }
  ],
  confirmado: [
    {
      id: 'receive',
      label: 'Receber',
      newStatus: 'receive',
      variant: 'default',
      icon: Truck,
      requiresConfirmation: false,
      description: 'Registrar recebimento do pedido'
    },
    {
      id: 'cancel',
      label: 'Cancelar',
      newStatus: 'cancelado',
      variant: 'destructive',
      icon: XCircle,
      requiresConfirmation: true,
      description: 'Cancelar este pedido'
    }
  ],
  recebido_parcial: [
    {
      id: 'receive',
      label: 'Receber',
      newStatus: 'receive',
      variant: 'default',
      icon: Truck,
      requiresConfirmation: false,
      description: 'Registrar recebimento do pedido'
    }
  ],
  recebido_total: [],
  cancelado: []
};

export const PurchaseOrderStatusActions: React.FC<PurchaseOrderStatusActionsProps> = ({
  order,
  onStatusUpdated,
  disabled = false,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<StatusAction | null>(null);
  const [observations, setObservations] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [isReceiveDialogOpen, setIsReceiveDialogOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<PurchaseOrderWithDetails | null>(null);

  const availableActions = statusActionsMap[order.status] || [];

  const handleActionClick = async (action: StatusAction) => {
    if (action.id === 'receive') {
      // Carregar detalhes do pedido para o modal de recebimento
      try {
        setIsUpdating(true);
        const details = await invoke<PurchaseOrderWithDetails>('get_purchase_order_details', { id: order.id });
        setOrderDetails(details);
        setIsReceiveDialogOpen(true);
      } catch (error) {
        console.error('Failed to load order details:', error);
        toast({
          title: 'Erro',
          description: 'Falha ao carregar detalhes do pedido',
          variant: 'destructive',
        });
      } finally {
        setIsUpdating(false);
      }
    } else {
      setSelectedAction(action);
      setObservations('');
      if (action.requiresConfirmation) {
        setIsDialogOpen(true);
      } else {
        handleStatusUpdate(action);
      }
    }
  };

  const handleStatusUpdate = async (action: StatusAction) => {
    if (!action) return;

    try {
      setIsUpdating(true);
      
      await invoke('update_purchase_order_status', {
        id: order.id,
        newStatus: action.newStatus,
        observacoes: observations.trim() || undefined
      });

      toast({
        title: 'Status Atualizado',
        description: `Pedido ${order.numero} alterado para ${action.label}`,
      });

      setIsDialogOpen(false);
      setSelectedAction(null);
      setObservations('');
      onStatusUpdated();

    } catch (error) {
      console.error('Failed to update status:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao atualizar status do pedido',
        variant: 'destructive',
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleConfirm = () => {
    if (selectedAction) {
      handleStatusUpdate(selectedAction);
    }
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
    setSelectedAction(null);
    setObservations('');
  };

  const handleReceiveDialogClose = () => {
    setIsReceiveDialogOpen(false);
    setOrderDetails(null);
  };

  const handleReceiveDialogConfirm = () => {
    setIsReceiveDialogOpen(false);
    setOrderDetails(null);
    onStatusUpdated(); // Refresh the order data
  };

  if (availableActions.length === 0) {
    return (
      <Badge variant="outline" className="text-xs">
        Nenhuma ação disponível
      </Badge>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-1">
        {availableActions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.id}
              variant={action.variant}
              size="sm"
              className="h-7 text-xs px-2"
              onClick={() => handleActionClick(action)}
              disabled={disabled || isUpdating}
            >
              {isUpdating ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <Icon className="h-3 w-3 mr-1" />
              )}
              {action.label}
            </Button>
          );
        })}
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              Confirmar Ação: {selectedAction?.label}
            </DialogTitle>
            <DialogDescription>
              {selectedAction?.description}
              <br />
              <strong>Pedido:</strong> #{order.numero}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="observations">Observações (opcional)</Label>
              <Textarea
                id="observations"
                placeholder="Digite observações sobre esta mudança de status..."
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                rows={3}
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-4 border-t mt-4">
            <Button
              variant="outline"
              onClick={handleCancel}
              disabled={isUpdating}
            >
              Cancelar
            </Button>
            <Button
              variant={selectedAction?.variant || 'default'}
              onClick={handleConfirm}
              disabled={isUpdating}
            >
              {isUpdating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Atualizando...
                </>
              ) : (
                <>
                  {selectedAction?.icon && (
                    <selectedAction.icon className="h-4 w-4 mr-2" />
                  )}
                  Confirmar {selectedAction?.label}
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Receive Purchase Order Dialog */}
      <ReceivePurchaseOrderDialog
        isOpen={isReceiveDialogOpen}
        onClose={handleReceiveDialogClose}
        onConfirm={handleReceiveDialogConfirm}
        purchaseOrder={orderDetails}
        isProcessing={isUpdating}
      />
    </>
  );
};

export default PurchaseOrderStatusActions;

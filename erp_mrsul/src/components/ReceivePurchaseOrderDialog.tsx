import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from '@/lib/use-toast';
import { PurchaseOrderWithDetails, PurchaseOrderItemWithMaterial } from '@/types';
import { invoke } from '@tauri-apps/api/core';
import { Loader2, Upload, FileText, Trash2, Package } from 'lucide-react';

interface ReceivePurchaseOrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  purchaseOrder: PurchaseOrderWithDetails | null;
  isProcessing: boolean;
}

interface ItemToReceive {
  item_id: string;
  material_id: string;
  material_codigo: string;
  material_descricao: string;
  material_unidade: string;
  quantidade_solicitada: number;
  quantidade_recebida: number;
  quantidade_pendente: number;
  quantidade_receber_agora: number;
}

const ReceivePurchaseOrderDialog: React.FC<ReceivePurchaseOrderDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  purchaseOrder,
  isProcessing,
}) => {
  const [notaFiscalNumber, setNotaFiscalNumber] = useState('');
  const [comprovanteFile, setComprovanteFile] = useState<File | null>(null);
  const [comprovanteUrl, setComprovanteUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [itemsToReceive, setItemsToReceive] = useState<Record<string, number>>({});

  useEffect(() => {
    if (isOpen && purchaseOrder) {
      resetForm();
      initializeItemsToReceive();
    }
  }, [isOpen, purchaseOrder]);

  const resetForm = () => {
    setNotaFiscalNumber('');
    setComprovanteFile(null);
    setComprovanteUrl(null);
    setItemsToReceive({});
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const initializeItemsToReceive = () => {
    if (!purchaseOrder?.itens) return;
    
    const initialQuantities: Record<string, number> = {};
    purchaseOrder.itens.forEach(item => {
      const pending = item.quantidade_solicitada - item.quantidade_recebida;
      initialQuantities[item.id] = pending > 0 ? pending : 0;
    });
    setItemsToReceive(initialQuantities);
  };

  const prepareItemsData = (): ItemToReceive[] => {
    if (!purchaseOrder?.itens) return [];

    return purchaseOrder.itens.map(item => ({
      item_id: item.id,
      material_id: item.material_id,
      material_codigo: item.material_codigo,
      material_descricao: item.material_descricao,
      material_unidade: item.material_unidade,
      quantidade_solicitada: item.quantidade_solicitada,
      quantidade_recebida: item.quantidade_recebida,
      quantidade_pendente: item.quantidade_solicitada - item.quantidade_recebida,
      quantidade_receber_agora: itemsToReceive[item.id] || 0,
    }));
  };

  const handleQuantityChange = (itemId: string, value: string) => {
    const numValue = parseFloat(value);
    const item = purchaseOrder?.itens.find(i => i.id === itemId);
    
    if (!item) return;
    
    const maxQuantity = item.quantidade_solicitada - item.quantidade_recebida;
    
    if (value === '' || (numValue >= 0 && numValue <= maxQuantity)) {
      setItemsToReceive(prev => ({
        ...prev,
        [itemId]: value === '' ? 0 : numValue
      }));
    } else if (numValue > maxQuantity) {
      setItemsToReceive(prev => ({
        ...prev,
        [itemId]: maxQuantity
      }));
      toast({
        title: 'Quantidade Inválida',
        description: `Máximo ${maxQuantity} ${item.material_unidade} para este item.`,
        variant: 'default'
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type === 'application/pdf' || 
          file.type === 'text/xml' || 
          file.type === 'application/xml' || 
          file.name.toLowerCase().endsWith('.xml')) {
        setComprovanteFile(file);
        setComprovanteUrl(null);
      } else {
        toast({
          title: 'Tipo de Arquivo Inválido',
          description: 'Por favor, selecione um arquivo PDF ou XML.',
          variant: 'destructive',
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        setComprovanteFile(null);
      }
    }
  };

  const handleFileUpload = async (): Promise<string | null> => {
    if (!comprovanteFile || !purchaseOrder) return null;
    
    setIsUploading(true);
    
    try {
      // Converter arquivo para base64
      const arrayBuffer = await comprovanteFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const base64String = btoa(String.fromCharCode(...uint8Array));
      
      // Chamar função Tauri para salvar o arquivo
      const filePath = await invoke<string>('save_purchase_order_voucher', {
        orderId: purchaseOrder.pedido.id,
        orderNumber: purchaseOrder.pedido.numero,
        fileName: comprovanteFile.name,
        fileData: base64String,
        contentType: comprovanteFile.type
      });
      
      setComprovanteUrl(filePath);
      toast({
        title: 'Sucesso',
        description: `Comprovante "${comprovanteFile.name}" carregado com sucesso.`,
      });
      
      return filePath;
    } catch (error) {
      console.error('Erro no upload:', error);
      toast({
        title: 'Erro no Upload',
        description: 'Não foi possível carregar o comprovante.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const handleConfirmClick = async () => {
    if (!purchaseOrder || !purchaseOrder.pedido.id) return;
    
    if (!notaFiscalNumber.trim()) {
      toast({
        title: 'Obrigatório',
        description: 'Por favor, insira o número da Nota Fiscal.',
        variant: 'destructive'
      });
      return;
    }

    // Verificar se há itens para receber
    const totalToReceive = Object.values(itemsToReceive).reduce((sum, qty) => sum + qty, 0);
    if (totalToReceive === 0) {
      toast({
        title: 'Nenhum item para receber',
        description: 'Informe a quantidade recebida para pelo menos um item.',
        variant: 'default'
      });
      return;
    }

    try {
      // Upload do arquivo se necessário
      let finalComprovanteUrl = comprovanteUrl;
      if (comprovanteFile && !comprovanteUrl) {
        finalComprovanteUrl = await handleFileUpload();
        if (!finalComprovanteUrl) {
          toast({
            title: 'Falha no Upload',
            description: 'Comprovante não foi carregado. Verifique e tente novamente.',
            variant: 'destructive'
          });
          return;
        }
      }

      // Preparar dados para envio
      const itemsPayload = Object.entries(itemsToReceive)
        .filter(([_, qty]) => qty > 0)
        .map(([itemId, qty]) => ({
          item_id: itemId,
          quantity_received_now: qty
        }));

      // Chamar API para registrar recebimento
      await invoke('receive_purchase_order_items', {
        pedidoId: purchaseOrder.pedido.id,
        notaFiscalNumber: notaFiscalNumber.trim(),
        comprovanteUrl: finalComprovanteUrl,
        items: itemsPayload
      });

      toast({
        title: 'Recebimento Registrado',
        description: `Recebimento do pedido ${purchaseOrder.pedido.numero} registrado com sucesso.`,
      });

      onConfirm();
      
    } catch (error) {
      console.error('Erro ao registrar recebimento:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao registrar recebimento do pedido.',
        variant: 'destructive',
      });
    }
  };

  const removeFile = () => {
    setComprovanteFile(null);
    setComprovanteUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast({
      title: 'Comprovante Removido',
      description: 'A referência ao comprovante foi removida.',
    });
  };

  if (!isOpen || !purchaseOrder) return null;

  const itemsData = prepareItemsData();
  const totalToReceive = Object.values(itemsToReceive).reduce((sum, qty) => sum + qty, 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="lg:max-w-4xl md:max-w-3xl sm:max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>
            Receber Pedido: #{purchaseOrder.pedido.numero}
          </DialogTitle>
          <DialogDescription>
            Informe as quantidades recebidas para cada item, o número da Nota Fiscal e anexe o comprovante.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 py-2">
          {/* Nota Fiscal */}
          <div>
            <Label htmlFor="notaFiscalNumber">Número da Nota Fiscal *</Label>
            <Input
              id="notaFiscalNumber"
              value={notaFiscalNumber}
              onChange={(e) => setNotaFiscalNumber(e.target.value)}
              disabled={isProcessing || isUploading}
              className="mt-1"
              placeholder="Digite o número da nota fiscal"
            />
          </div>

          {/* Upload do Comprovante */}
          <div>
            <Label htmlFor="comprovanteFile">Arquivo da Nota Fiscal/Comprovante (PDF/XML)</Label>
            <div className="flex items-center gap-2 mt-1">
              <Input
                id="comprovanteFile"
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="application/pdf,text/xml,application/xml,.xml"
                className="hidden"
                disabled={isProcessing || isUploading}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={isProcessing || isUploading}
                className="flex-1"
              >
                {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <Upload className="mr-2 h-4 w-4" />
                {comprovanteFile ? comprovanteFile.name : 'Selecionar Arquivo'}
              </Button>
              {(comprovanteFile || comprovanteUrl) && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={removeFile}
                  disabled={isProcessing || isUploading}
                  className="text-destructive hover:text-destructive-foreground hover:bg-destructive h-9 w-9"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
            {comprovanteUrl && !comprovanteFile && (
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                Arquivo atual: 
                <span className="text-primary truncate">{comprovanteUrl.split('/').pop()}</span>
              </div>
            )}
          </div>

          {/* Tabela de Itens */}
          <div className="space-y-2 pt-4 border-t">
            <div className="flex justify-between items-center">
              <Label className="text-base font-medium">Itens do Pedido</Label>
              <div className="text-sm text-muted-foreground">
                Total a receber: <span className="font-medium">{totalToReceive}</span> itens
              </div>
            </div>
            
            {itemsData.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                Nenhum item neste pedido.
              </p>
            ) : (
              <div className="overflow-x-auto border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[200px]">Material</TableHead>
                      <TableHead className="w-24 text-right">Solicitada</TableHead>
                      <TableHead className="w-24 text-right">Recebida</TableHead>
                      <TableHead className="w-24 text-right">Pendente</TableHead>
                      <TableHead className="w-32 text-right">Receber Agora *</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {itemsData.map((item) => (
                      <TableRow key={item.item_id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{item.material_codigo}</p>
                            <p className="text-xs text-muted-foreground truncate max-w-xs" title={item.material_descricao}>
                              {item.material_descricao}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          {item.quantidade_solicitada} {item.material_unidade}
                        </TableCell>
                        <TableCell className="text-right">
                          {item.quantidade_recebida} {item.material_unidade}
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {item.quantidade_pendente} {item.material_unidade}
                        </TableCell>
                        <TableCell className="text-right">
                          <Input
                            type="number"
                            value={itemsToReceive[item.item_id] || 0}
                            onChange={(e) => handleQuantityChange(item.item_id, e.target.value)}
                            min="0"
                            max={item.quantidade_pendente}
                            step="0.01"
                            className="h-8 text-right w-20"
                            disabled={isProcessing || isUploading || item.quantidade_pendente === 0}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-2 pt-4 border-t bg-background">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isProcessing || isUploading}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleConfirmClick}
            disabled={
              isProcessing || 
              isUploading || 
              !notaFiscalNumber.trim() ||
              totalToReceive === 0
            }
          >
            {(isProcessing || isUploading) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isUploading ? 'Enviando Arquivo...' : (isProcessing ? 'Processando...' : 'Confirmar Recebimento')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReceivePurchaseOrderDialog;

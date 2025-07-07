import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from '@/lib/use-toast';
import { PurchaseOrderWithDetails, PurchaseOrderHistory } from '@/types';
import { invoke } from '@tauri-apps/api/core';
import PurchaseOrderStatusActions from '@/components/PurchaseOrderStatusActions';
import { 
  ArrowLeft, 
  Loader2, 
  FileText, 
  AlertCircle, 
  Edit2, 
  Package,
  Calendar,
  DollarSign,
  User,
  MapPin,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
  Download,
  Upload,
  Eye
} from 'lucide-react';

const statusConfig = {
  rascunho: { label: 'Rascunho', color: 'bg-gray-100 text-gray-800', icon: Package },
  enviado: { label: 'Enviado', color: 'bg-blue-100 text-blue-800', icon: Truck },
  confirmado: { label: 'Confirmado', color: 'bg-green-100 text-green-800', icon: CheckCircle },
  recebido_parcial: { label: 'Recebido Parcial', color: 'bg-yellow-100 text-yellow-800', icon: Package },
  recebido_total: { label: 'Recebido Total', color: 'bg-purple-100 text-purple-800', icon: CheckCircle },
  cancelado: { label: 'Cancelado', color: 'bg-red-100 text-red-800', icon: XCircle },
};

const PurchaseOrderDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState<PurchaseOrderWithDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUploadingComprovante, setIsUploadingComprovante] = useState(false);

  useEffect(() => {
    if (id) {
      loadOrderDetails();
    }
  }, [id]);

  const loadOrderDetails = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const details = await invoke<PurchaseOrderWithDetails>('get_purchase_order_details', { id });
      setOrderDetails(details);
    } catch (error) {
      console.error('Failed to load order details:', error);
      setError('Falha ao carregar detalhes do pedido');
      toast({
        title: 'Erro',
        description: 'Falha ao carregar detalhes do pedido',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleEdit = () => {
    navigate('/purchase-orders', { 
      state: { editOrderId: id } 
    });
  };

  const handleBack = () => {
    navigate('/purchase-orders');
  };

  const handleDownloadComprovante = async () => {
    if (!orderDetails?.pedido.comprovante_nome) return;
    
    try {
      const downloadPath = await invoke<string>('download_purchase_order_voucher', {
        voucherPath: orderDetails.pedido.comprovante_nome
      });
      
      toast({
        title: 'Download Concluído',
        description: `Arquivo baixado para: ${downloadPath}`,
      });
      
    } catch (error) {
      console.error('Erro ao fazer download:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao fazer download do comprovante',
        variant: 'destructive',
      });
    }
  };

  const handleViewComprovante = async () => {
    if (!orderDetails?.pedido.comprovante_nome) return;
    
    try {
      await invoke('open_purchase_order_voucher', {
        voucherPath: orderDetails.pedido.comprovante_nome
      });
      
      toast({
        title: 'Comprovante Aberto',
        description: 'O comprovante foi aberto no visualizador padrão',
      });
    } catch (error) {
      console.error('Error opening voucher:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível abrir o comprovante',
        variant: 'destructive',
      });
    }
  };

  const handleChangeComprovante = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf,text/xml,application/xml,.xml';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      
      if (file.type === 'application/pdf' || 
          file.type === 'text/xml' || 
          file.type === 'application/xml' || 
          file.name.toLowerCase().endsWith('.xml')) {
        
        try {
          setIsUploadingComprovante(true);
          
          // Simular upload do novo arquivo
          const timestamp = Date.now();
          const fileName = file.name;
          const mockUrl = `file://documents/purchase_orders/${orderDetails?.pedido.numero}/${timestamp}_${fileName}`;
          
          // Simular delay do upload
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Atualizar o comprovante no banco de dados
          await invoke('update_purchase_order_comprovante', {
            id: orderDetails?.pedido.id,
            comprovanteNome: mockUrl
          });
          
          toast({
            title: 'Comprovante Atualizado',
            description: `Novo comprovante "${fileName}" foi salvo com sucesso.`,
          });
          
          // Recarregar os detalhes do pedido
          loadOrderDetails();
          
        } catch (error) {
          console.error('Erro ao atualizar comprovante:', error);
          toast({
            title: 'Erro',
            description: 'Falha ao atualizar comprovante',
            variant: 'destructive',
          });
        } finally {
          setIsUploadingComprovante(false);
        }
      } else {
        toast({
          title: 'Tipo de Arquivo Inválido',
          description: 'Por favor, selecione um arquivo PDF ou XML.',
          variant: 'destructive',
        });
      }
    };
    input.click();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <p className="ml-3 text-muted-foreground">Carregando detalhes do pedido...</p>
      </div>
    );
  }

  if (error || !orderDetails) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <AlertCircle className="h-12 w-12 text-destructive mb-4" />
        <h2 className="text-xl font-semibold text-destructive mb-2">
          Erro ao Carregar Pedido
        </h2>
        <p className="text-muted-foreground mb-4">
          {error || 'Não foi possível encontrar o pedido solicitado.'}
        </p>
        <Button onClick={handleBack} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Lista
        </Button>
      </div>
    );
  }

  const { pedido, itens, fornecedor, projeto, historico } = orderDetails;
  const statusInfo = statusConfig[pedido.status as keyof typeof statusConfig];
  const StatusIcon = statusInfo.icon;

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Button onClick={handleBack} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Lista
        </Button>
        <div className="flex gap-2">
          <PurchaseOrderStatusActions
            order={pedido}
            onStatusUpdated={loadOrderDetails}
            disabled={isLoading}
          />
          <Button onClick={handleEdit} variant="default">
            <Edit2 className="mr-2 h-4 w-4" /> Editar Pedido
          </Button>
        </div>
      </div>

      {/* Main Details Card */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/50">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-2xl md:text-3xl">
                Pedido #{pedido.numero}
              </CardTitle>
              <p className="text-muted-foreground mt-1">
                {fornecedor ? `${fornecedor.nome_fantasia} - ${fornecedor.cnpj}` : 'Fornecedor não encontrado'}
              </p>
            </div>
            <Badge className={statusInfo.color}>
              <StatusIcon className="h-4 w-4 mr-2" />
              {statusInfo.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Data do Pedido</p>
                  <p className="font-medium">{formatDate(pedido.data_pedido)}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Entrega Prevista</p>
                  <p className="font-medium">
                    {pedido.data_entrega_prevista ? formatDate(pedido.data_entrega_prevista) : 'Não definida'}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Valor Total</p>
                  <p className="font-medium text-lg">{formatCurrency(pedido.valor_total)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Total de Itens</p>
                  <p className="font-medium">{itens.length}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Criado em</p>
                  <p className="font-medium">{formatDateTime(pedido.created_at)}</p>
                </div>
              </div>

              {pedido.updated_at !== pedido.created_at && (
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Última atualização</p>
                    <p className="font-medium">{formatDateTime(pedido.updated_at)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {pedido.observacoes && (
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium mb-2">Observações</h4>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">{pedido.observacoes}</p>
            </div>
          )}

          {pedido.comprovante_nome && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600" />
                Comprovante de Recebimento
              </h4>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Arquivo: <span className="font-medium text-blue-700">{pedido.comprovante_nome.split('/').pop()}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Clique nos botões para visualizar, baixar ou alterar o comprovante
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleViewComprovante}
                    disabled={isUploadingComprovante}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Visualizar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownloadComprovante}
                    disabled={isUploadingComprovante}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleChangeComprovante}
                    disabled={isUploadingComprovante}
                  >
                    {isUploadingComprovante ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Upload className="h-4 w-4 mr-2" />
                    )}
                    {isUploadingComprovante ? 'Enviando...' : 'Alterar'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Items Table */}
      <Card>
        <CardHeader>
          <CardTitle>Itens do Pedido</CardTitle>
        </CardHeader>
        <CardContent>
          {itens.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Nenhum item encontrado neste pedido.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Código</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Unidade</TableHead>
                    <TableHead className="text-right">Qtd. Solicitada</TableHead>
                    <TableHead className="text-right">Qtd. Recebida</TableHead>
                    <TableHead className="text-right">Preço Unit.</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {itens.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        {item.material_codigo}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{item.material_descricao}</p>
                          {item.observacoes && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {item.observacoes}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{item.material_unidade}</TableCell>
                      <TableCell className="text-right">
                        {item.quantidade_solicitada}
                      </TableCell>
                      <TableCell className="text-right">
                        {item.quantidade_recebida}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(item.preco_unitario)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(item.valor_total)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Status History */}
      {historico.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Status Anterior</TableHead>
                    <TableHead>Novo Status</TableHead>
                    <TableHead>Observações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {historico.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell>{formatDateTime(entry.created_at)}</TableCell>
                      <TableCell>
                        {entry.status_anterior ? (
                          <Badge variant="outline">
                            {statusConfig[entry.status_anterior as keyof typeof statusConfig]?.label || entry.status_anterior}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge className={statusConfig[entry.status_novo as keyof typeof statusConfig]?.color}>
                          {statusConfig[entry.status_novo as keyof typeof statusConfig]?.label || entry.status_novo}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {entry.observacoes || <span className="text-muted-foreground">-</span>}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PurchaseOrderDetailsPage;

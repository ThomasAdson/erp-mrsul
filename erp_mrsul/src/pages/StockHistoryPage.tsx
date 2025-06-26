import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { History, Download, Upload, Search, RefreshCw, Calendar, FileText, User } from 'lucide-react';
import { 
  getAllMateriais, 
  getStockMovements, 
  type Material, 
  type StockMovement, 
  type StockMovementFilters 
} from '@/lib/api';
import { useToast } from '@/lib/use-toast';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const StockHistoryPage = () => {  const [materials, setMaterials] = useState<Material[]>([]);
  const [filteredMaterials, setFilteredMaterials] = useState<Material[]>([]);
  const [materialSearchTerm, setMaterialSearchTerm] = useState<string>('');
  const [movements, setMovements] = useState<StockMovement[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMaterials, setLoadingMaterials] = useState(true);
    // Filtros
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [movementType, setMovementType] = useState<string>('all');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [responsibleUser, setResponsibleUser] = useState<string>('');

  const { toast } = useToast();
  // Carregar materiais no mount
  useEffect(() => {
    const loadMaterials = async () => {
      try {
        const materialsData = await getAllMateriais();
        setMaterials(materialsData);
      } catch (error) {
        console.error('Erro ao carregar materiais:', error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar a lista de materiais.",
          variant: "destructive",
        });
      } finally {
        setLoadingMaterials(false);
      }
    };

    loadMaterials();
  }, [toast]);

  // Carregar movimentações iniciais
  useEffect(() => {
    loadMovements();
  }, []);  const loadMovements = async () => {
    setIsLoading(true);
    try {
      const filters: StockMovementFilters = {};
      
      if (selectedMaterial && selectedMaterial !== 'all') filters.material_id = selectedMaterial;
      if (movementType && movementType !== 'all') filters.movement_type = movementType as 'entrada' | 'saida';
      if (startDate) filters.start_date = startDate;
      if (endDate) filters.end_date = endDate;
      if (responsibleUser.trim()) filters.responsible_user = responsibleUser.trim();
      
      // Limitar a 100 registros por padrão
      filters.limit = 100;
      filters.offset = 0;

      console.log('Requesting movements with filters:', filters);
      const movementsData = await getStockMovements(filters);
      console.log('Received movements data:', movementsData);
      setMovements(movementsData);
    } catch (error) {
      console.error('Erro ao carregar movimentações:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar as movimentações.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleSearch = () => {
    loadMovements();
  };
  const handleClearFilters = () => {
    setSelectedMaterial('all');
    setMovementType('all');
    setStartDate('');
    setEndDate('');
    setResponsibleUser('');  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'dd/MM/yyyy HH:mm', { locale: ptBR });
    } catch {
      return dateString;
    }
  };
  const getMaterialName = (materialId: string) => {
    const material = materials.find(m => m.id === materialId);
    return material ? material.descricao_especificacao : materialId;
  };

  if (loadingMaterials) {
    return (
      <div className="flex-1 space-y-4 p-4 pt-6">
        <div className="flex items-center space-x-2">
          <History className="h-6 w-6" />
          <h2 className="text-3xl font-bold tracking-tight">Histórico de Movimentações</h2>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2 text-gray-600">Carregando dados...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center space-x-2">
        <History className="h-6 w-6" />
        <h2 className="text-3xl font-bold tracking-tight">Histórico de Movimentações</h2>
      </div>

      {/* Card de Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Filtros de Pesquisa</span>
          </CardTitle>
          <CardDescription>
            Use os filtros abaixo para encontrar movimentações específicas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">            {/* Material */}
            <div className="space-y-2">
              <Label htmlFor="filter-material">Material</Label>
              <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos os materiais" />
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
                  <SelectItem value="all">Todos os materiais</SelectItem>
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
            </div>

            {/* Tipo de Movimentação */}
            <div className="space-y-2">
              <Label htmlFor="filter-type">Tipo de Movimentação</Label>
              <Select value={movementType} onValueChange={setMovementType}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos os tipos" />
                </SelectTrigger>                <SelectContent>
                  <SelectItem value="all">Todos os tipos</SelectItem>
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
            </div>

            {/* Responsável */}
            <div className="space-y-2">
              <Label htmlFor="filter-user">Responsável</Label>
              <Input
                id="filter-user"
                value={responsibleUser}
                onChange={(e) => setResponsibleUser(e.target.value)}
                placeholder="Nome do responsável"
              />
            </div>

            {/* Data Inicial */}
            <div className="space-y-2">
              <Label htmlFor="filter-start-date">Data Inicial</Label>
              <Input
                id="filter-start-date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* Data Final */}
            <div className="space-y-2">
              <Label htmlFor="filter-end-date">Data Final</Label>
              <Input
                id="filter-end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex space-x-2 mt-4">
            <Button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Pesquisando...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4" />
                  <span>Pesquisar</span>
                </div>
              )}
            </Button>
            <Button variant="outline" onClick={handleClearFilters}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Limpar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Card de Resultados */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Movimentações Encontradas</span>
            <Badge variant="secondary">
              {movements.length} registro{movements.length !== 1 ? 's' : ''}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {movements.length === 0 ? (
            <div className="text-center py-8">
              <History className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Nenhuma movimentação encontrada
              </h3>
              <p className="text-gray-500">
                Tente ajustar os filtros ou verifique se existem movimentações registradas.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>                <TableHeader>                  <TableRow>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Material</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead className="text-right">Quantidade</TableHead>
                    <TableHead>Motivo</TableHead>
                    <TableHead>Responsável</TableHead>
                    <TableHead>Fornecedor</TableHead>
                    <TableHead>Local</TableHead>
                    <TableHead>Documento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {movements.map((movement) => (
                    <TableRow key={movement.id}>
                      <TableCell className="font-mono text-sm">
                        {formatDate(movement.created_at)}
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs">
                          <div className="font-medium truncate">
                            {movement.material_name || getMaterialName(movement.material_id)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={movement.movement_type === 'entrada' ? 'default' : 'destructive'}
                          className="flex items-center space-x-1 w-fit"
                        >
                          {movement.movement_type === 'entrada' ? (
                            <Download className="h-3 w-3" />
                          ) : (
                            <Upload className="h-3 w-3" />
                          )}
                          <span>{movement.movement_type === 'entrada' ? 'Entrada' : 'Saída'}</span>
                        </Badge>
                      </TableCell>                      <TableCell className="text-right font-mono">
                        {movement.quantity.toLocaleString('pt-BR')}
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs">
                          <span className="truncate" title={movement.reason}>
                            {movement.reason}
                          </span>
                        </div>
                      </TableCell>                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3 text-gray-400" />
                          <span className="truncate">{movement.responsible_user}</span>
                        </div>
                      </TableCell>                      <TableCell>
                        <div className="max-w-xs">
                          <span className="text-sm text-gray-600 truncate" title={movement.supplier_name || ''}>
                            {movement.supplier_name || '-'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs">
                          <span className="text-sm text-gray-600 truncate" title={movement.storage_location || ''}>
                            {movement.storage_location || '-'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {movement.reference_document && (
                            <span className="text-sm text-gray-600 truncate" title={movement.reference_document}>
                              {movement.reference_document}
                            </span>
                          )}                          {movement.voucher_file_path && (
                            <FileText className="h-4 w-4 text-blue-600" />
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {movements.length >= 100 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center text-sm text-gray-600">
              <p>Mostrando até 100 registros. Use os filtros para refinar a pesquisa.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StockHistoryPage;

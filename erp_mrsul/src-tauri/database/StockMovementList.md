// src/components/stock/StockMovementList.tsx
'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Legend as RechartsLegend, Bar, ComposedChart, Line, Tooltip as RechartsTooltip } from 'recharts';
import type { TooltipProps as RechartsTooltipProps } from 'recharts/types/component/DefaultTooltipContent';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Search, Filter, CalendarIcon as CalendarIconLucide, Download, FileText, AlertTriangle, ChevronsUpDown } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { format, parseISO, isValid, parse, subDays, endOfDay, startOfDay, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import type { Material } from '@/lib/materialTypes';
import type { MovementViewAPI, StockReportItem, SaldoEvolutionPoint, WeeklySaldoEvolutionItem, Fornecedor as StockFornecedorType } from '@/lib/stockTypes';
import { cn } from '@/lib/utils';
import { fetchMaterialsAPI, fetchStockMovementsAPI, fetchStockReportAPI, fetchFornecedoresAPI as fetchStockSuppliersAPI } from '@/lib/apiClient';


const ALL_MATERIALS_FILTER_VALUE = "all_materials_filter";
const ALL_SUPPLIERS_FILTER_VALUE = "all_suppliers_filter";


const StockMovementList = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [filterMaterialId, setFilterMaterialId] = useState<string>(ALL_MATERIALS_FILTER_VALUE);
  const [filterType, setFilterType] = useState<'all' | 'Entrada' | 'Saída'>('all');
  const [filterDateRange, setFilterDateRange] = useState<DateRange | undefined>(() => ({
    from: startOfDay(subDays(new Date(), 29)),
    to: endOfDay(new Date()),
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof MovementViewAPI; direction: 'ascending' | 'descending' } | null>(null);

  const [reportSelectedMaterials, setReportSelectedMaterials] = useState<Material[]>([]);
  const [reportSupplierFilter, setReportSupplierFilter] = useState<string>(ALL_SUPPLIERS_FILTER_VALUE);
  const [reportData, setReportData] = useState<StockReportItem[] | null>(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [weeklyEvolutionData, setWeeklyEvolutionData] = useState<WeeklySaldoEvolutionItem[] | null>(null);
  const [evolutionData, setEvolutionData] = useState<SaldoEvolutionPoint[] | null>(null);


  const { data: materialsDataObj, isLoading: isLoadingMaterials } = useQuery<{materials: Material[], totalCount: number}, Error>({
    queryKey: ['allMaterialsForStockListFilter'],
    queryFn: () => fetchMaterialsAPI({ limit: 10000 }),
    onError: (err) => {
        toast({ title: 'Erro', description: `Não foi possível carregar materiais para filtro: ${err.message}`, variant: 'destructive' });
    }
  });
  const materials: Material[] = materialsDataObj?.materials || [];


  const { data: suppliers = [], isLoading: isLoadingSuppliers } = useQuery<StockFornecedorType[], Error>({
    queryKey: ['suppliersForStockReport'],
    queryFn: fetchStockSuppliersAPI,
  });


  const queryParams = useMemo(() => {
    const params = new URLSearchParams();
    if (filterMaterialId !== ALL_MATERIALS_FILTER_VALUE) {
      params.append('material_id', filterMaterialId);
    }
    if (filterType !== 'all') {
      params.append('tipo_movimentacao', filterType);
    }
    if (filterDateRange?.from) {
      params.append('start_date', format(filterDateRange.from, 'yyyy-MM-dd'));
    }
    if (filterDateRange?.to) {
      params.append('end_date', format(filterDateRange.to, 'yyyy-MM-dd'));
    }
    return params.toString();
  }, [filterMaterialId, filterType, filterDateRange]);

  const { data: movementsResponse, isLoading: isLoadingMovementsTrue, refetch: refetchMovements, isPreviousData: isPreviousMovementsData } = useQuery<{ movements: MovementViewAPI[]; totalCount: number }, Error>({
    queryKey: ['stockMovements', queryParams, currentPage, itemsPerPage],
    queryFn: () => {
      // console.log(`StockMovementList: Fetching movements with params: ${queryParams}, page: ${currentPage}, limit: ${itemsPerPage}`);
      return fetchStockMovementsAPI({ queryParams, page: currentPage, limit: itemsPerPage });
    },
    enabled: !!filterDateRange?.from && !!filterDateRange?.to,
    keepPreviousData: true,
    onSuccess: (data) => {
        // console.log('StockMovementList: Raw movements data received from API:', data);
    },
    onError: (error) => {
        console.error('StockMovementList: Error fetching movements:', error);
        toast({ title: 'Erro ao Buscar Movimentações', description: error.message, variant: 'destructive' });
    }
  });

  const isLoadingMovements = isLoadingMovementsTrue || isPreviousMovementsData;


  const movements = useMemo(() => movementsResponse?.movements || [], [movementsResponse]);
  const totalMovementCount = movementsResponse?.totalCount || 0;
  const totalMovementPages = Math.ceil(totalMovementCount / itemsPerPage);


  const handleGenerateReport = useCallback(async () => {
    if (!filterDateRange?.from || !filterDateRange?.to) {
      toast({ title: 'Atenção', description: 'Por favor, selecione um período (data inicial e final) para gerar o relatório.', variant: 'default' });
      return;
    }
    setIsGeneratingReport(true);
    setReportData(null);
    setWeeklyEvolutionData(null);
    setEvolutionData(null);

    const params = new URLSearchParams();
    params.append('startDate', format(filterDateRange.from, 'yyyy-MM-dd'));
    params.append('endDate', format(filterDateRange.to, 'yyyy-MM-dd'));
    
    const validMaterialIdsForReport = reportSelectedMaterials.map(m => m.id).filter(id => id && id !== ALL_MATERIALS_FILTER_VALUE);
    if (validMaterialIdsForReport.length > 0) {
        validMaterialIdsForReport.forEach(id => params.append('material_ids', id));
    }
    
    if (reportSupplierFilter && reportSupplierFilter !== ALL_SUPPLIERS_FILTER_VALUE) {
      params.append('supplierFilter', reportSupplierFilter);
    }

    try {
      const data = await fetchStockReportAPI(params.toString());
      // console.log('StockMovementList: Report data received:', data);
      setReportData(data.reportItems || []);
      setWeeklyEvolutionData(data.weeklyEvolutionData || []);
      if (data.evolutionData) {
        setEvolutionData(data.evolutionData);
      } else {
        setEvolutionData(null);
      }
    } catch (error: any) {
      toast({ title: 'Erro ao Gerar Relatório', description: error.message, variant: 'destructive' });
      setReportData([]);
      setWeeklyEvolutionData([]);
      setEvolutionData(null);
    } finally {
      setIsGeneratingReport(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterDateRange, reportSelectedMaterials, reportSupplierFilter, toast]); 

  useEffect(() => {
    if (filterDateRange?.from && filterDateRange?.to && !isGeneratingReport) {
        handleGenerateReport();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterDateRange, reportSelectedMaterials, reportSupplierFilter]);


  const filteredAndSortedMovements = useMemo(() => {
    let processedMovements = [...movements];
    
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      processedMovements = processedMovements.filter(mov =>
        mov.codigo_material_completo.toLowerCase().includes(lowerSearchTerm) ||
        mov.descricao_completa.toLowerCase().includes(lowerSearchTerm) ||
        (mov.nome_categoria && mov.nome_categoria.toLowerCase().includes(lowerSearchTerm)) ||
        (mov.nome_classe && mov.nome_classe.toLowerCase().includes(lowerSearchTerm)) ||
        (mov.fornecedor && mov.fornecedor.toLowerCase().includes(lowerSearchTerm)) ||
        (mov.nota_fiscal && mov.nota_fiscal.toLowerCase().includes(lowerSearchTerm)) ||
        (mov.motivo_saida && mov.motivo_saida.toLowerCase().includes(lowerSearchTerm)) ||
        (mov.rastreio && mov.rastreio.toLowerCase().includes(lowerSearchTerm))
      );
    }

    if (sortConfig !== null) {
      processedMovements.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];

        let comparison = 0;
        if (valA === null || valA === undefined) comparison = -1;
        else if (valB === null || valB === undefined) comparison = 1;
        else if (typeof valA === 'string' && typeof valB === 'string') {
          comparison = valA.localeCompare(valB);
        } else if (typeof valA === 'number' && typeof valB === 'number') {
          comparison = valA - valB;
        } else {
          try {
            const dateA = new Date(String(valA)).getTime();
            const dateB = new Date(String(valB)).getTime();
            if (!isNaN(dateA) && !isNaN(dateB)) {
              comparison = dateA - dateB;
            } else {
              comparison = String(valA).localeCompare(String(valB));
            }
          } catch (e) {
            comparison = String(valA).localeCompare(String(valB));
          }
        }
        return sortConfig.direction === 'ascending' ? comparison : comparison * -1;
      });
    }
    return processedMovements;
  }, [movements, searchTerm, sortConfig]);

  const requestSort = (key: keyof MovementViewAPI) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };


  const filteredReportData = useMemo(() => {
    if (!reportData) return [];
    return reportData.filter(item =>
      item.totalEntradas !== 0 ||
      item.totalSaidas !== 0 ||
      item.saldoPeriodo !== 0 ||
      item.estoqueAtual !== 0 // Considerar mostrar mesmo se saldo período é 0 mas tem estoque
    );
  }, [reportData]);


  const chartWeeklySaldoEvolutionData = useMemo(() => {
    if (!weeklyEvolutionData || weeklyEvolutionData.length === 0) {
        return { data: [], materialNames: [] };
    }
    const pivotedData: { [week: string]: any & { semana: string } } = {};
    const materialNamesSet = new Set<string>();
    const weekOrder: string[] = []; 

    weeklyEvolutionData.forEach(item => {
        const weekKey = item.semana; 
        if (!pivotedData[weekKey]) {
            pivotedData[weekKey] = { semana: weekKey };
            if(!weekOrder.includes(weekKey)) weekOrder.push(weekKey);
        }
        
        const materialKey = (item.nome_material || 'Desconhecido').replace(/[^a-zA-Z0-9_]/g, '_');
        pivotedData[weekKey][materialKey] = item.saldo_final_semana;
        materialNamesSet.add(materialKey);
    });
    
     weekOrder.sort((a, b) => {
        try {
            const dateA = parse(a.split(' - ')[0], 'dd/MM', new Date()); 
            const dateB = parse(b.split(' - ')[0], 'dd/MM', new Date());
            if (!isValid(dateA) || !isValid(dateB)) return 0;
            return dateA.getTime() - dateB.getTime();
        } catch (e) {
            console.error("Error parsing week for sort:", a, b, e);
            return 0;
        }
    });

    const finalChartData = weekOrder.map(weekKey => pivotedData[weekKey]);
    const materialNames = Array.from(materialNamesSet).sort();

    return { data: finalChartData, materialNames };
  }, [weeklyEvolutionData]);


  const exportToExcel = () => {
    const dataToExport = filteredReportData.length > 0 ? filteredReportData.map(item => ({
      'Material': item.nomeMaterial,
      'Unidade': item.unidade,
      'Total Entradas': item.totalEntradas,
      'Total Saídas': item.totalSaidas,
      'Saldo no Período': item.saldoPeriodo,
      'Estoque Atual': item.estoqueAtual,
    })) : [];

    if (dataToExport.length === 0) {
      toast({ title: "Sem dados", description: "Não há dados no relatório para exportar." });
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "RelatorioEstoque");
    XLSX.writeFile(workbook, `RelatorioEstoque_${format(new Date(), "yyyy-MM-dd")}.xlsx`);
    toast({ title: "Exportado", description: "Relatório exportado para Excel." });
  };

  const exportToPDF = () => {
    if (!filteredReportData || filteredReportData.length === 0) {
        toast({ title: "Sem dados", description: "Não há dados no relatório para exportar." });
        return;
    }
    const doc = new jsPDF();
    const tableColumn = ["Material", "Unidade", "Entradas", "Saídas", "Saldo Per.", "Est. Atual"];
    const tableRows: (string | number)[][] = [];

    filteredReportData.forEach(item => {
        const rowData = [
            item.nomeMaterial,
            item.unidade,
            item.totalEntradas,
            item.totalSaidas,
            item.saldoPeriodo,
            item.estoqueAtual
        ];
        tableRows.push(rowData);
    });

    doc.text("Relatório de Movimentação de Estoque", 14, 15);
    const periodFrom = filterDateRange?.from ? format(filterDateRange.from, "dd/MM/yyyy", { locale: ptBR }) : "N/A";
    const periodTo = filterDateRange?.to ? format(filterDateRange.to, "dd/MM/yyyy", { locale: ptBR }) : "N/A";
    doc.setFontSize(10);
    doc.text(`Período: ${periodFrom} - ${periodTo}`, 14, 22);
    
    (doc as any).autoTable({ 
        head: [tableColumn],
        body: tableRows,
        startY: 25,
        theme: 'grid',
        headStyles: { fillColor: [22, 160, 133] }, 
        styles: { fontSize: 8, cellPadding: 1.5 },
        columnStyles: { 0: { cellWidth: 60 } } 
    });
    doc.save(`RelatorioEstoque_${format(new Date(), "yyyy-MM-dd")}.pdf`);
    toast({ title: "Exportado", description: "Relatório exportado para PDF." });
  };

  const toggleReportMaterial = (material: Material) => {
    setReportSelectedMaterials(prev => {
      const isSelected = prev.find(m => m.id === material.id);
      if (isSelected) {
        return prev.filter(m => m.id !== material.id);
      } else {
        return [...prev, material];
      }
    });
  };


  return (
    <div className="space-y-6 p-0">
      <h1 className="text-3xl font-bold tracking-tight">Histórico de Movimentações</h1>

      <Card>
        <CardHeader>
          <CardTitle>Filtros Gerais</CardTitle>
          <CardDescription>Filtre as movimentações de estoque por material, tipo e período.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="filterMaterial">Material (Histórico)</Label>
              <Select value={filterMaterialId} onValueChange={setFilterMaterialId} disabled={isLoadingMaterials || isLoadingMovements}>
                <SelectTrigger id="filterMaterial">
                  <SelectValue placeholder={isLoadingMaterials ? "Carregando..." : "Todos os materiais"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL_MATERIALS_FILTER_VALUE}>Todos os materiais</SelectItem>
                  {materials.map(material => (
                    <SelectItem key={material.id} value={material.id!}>
                      {material.codigo_material_completo} - {material.descricao_completa}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="filterType">Tipo de Movimentação</Label>
              <Select value={filterType} onValueChange={(value) => setFilterType(value as 'all' | 'Entrada' | 'Saída')} disabled={isLoadingMovements}>
                <SelectTrigger id="filterType">
                  <SelectValue placeholder="Todos os tipos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os tipos</SelectItem>
                  <SelectItem value="Entrada">Entrada</SelectItem>
                  <SelectItem value="Saída">Saída</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-1 md:col-span-2">
              <Label htmlFor="filterDateRange">Período da Movimentação*</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="filterDateRange"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !filterDateRange && "text-muted-foreground"
                    )}
                    disabled={isLoadingMovements}
                  >
                    <CalendarIconLucide className="mr-2 h-4 w-4" />
                    {filterDateRange?.from ? (
                      filterDateRange.to ? (
                        <>
                          {format(filterDateRange.from, "dd/MM/yy", { locale: ptBR })} - {format(filterDateRange.to, "dd/MM/yy", { locale: ptBR })}
                        </>
                      ) : (
                        format(filterDateRange.from, "dd/MM/yy", { locale: ptBR })
                      )
                    ) : (
                      <span>Escolha um período</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={filterDateRange?.from}
                    selected={filterDateRange}
                    onSelect={setFilterDateRange}
                    numberOfMonths={2}
                    locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div>
            <Label htmlFor="searchTerm">Buscar em Movimentações (página atual)</Label>
            <Input
              id="searchTerm"
              type="text"
              placeholder="Buscar por código, descrição, fornecedor, nota fiscal, motivo, rastreio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={isLoadingMovements}
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Movimentações Registradas</CardTitle>
        </CardHeader>
        <CardContent>
          {(isLoadingMovements && !isPreviousMovementsData && movements.length === 0) ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="ml-2 text-muted-foreground">Carregando movimentações...</p>
            </div>
          ) : filteredAndSortedMovements.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">Nenhuma movimentação encontrada para os filtros selecionados.</p>
          ) : (
            <>
            <Table>
              <TableCaption>Lista de todas as movimentações de estoque. {isPreviousMovementsData ? '(Atualizando...)' : ''}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead onClick={() => requestSort('tipo_movimentacao')} className="cursor-pointer hover:bg-muted/50">Tipo</TableHead>
                  <TableHead onClick={() => requestSort('data_movimentacao')} className="cursor-pointer hover:bg-muted/50">Data</TableHead>
                  <TableHead onClick={() => requestSort('codigo_material_completo')} className="cursor-pointer hover:bg-muted/50">Material</TableHead>
                  <TableHead onClick={() => requestSort('quantidade')} className="cursor-pointer hover:bg-muted/50 text-right">Quantidade</TableHead>
                  <TableHead onClick={() => requestSort('unidade_medida')} className="cursor-pointer hover:bg-muted/50">Unidade</TableHead>
                  <TableHead onClick={() => requestSort('rastreio')} className="cursor-pointer hover:bg-muted/50">Rastreio/Detalhes</TableHead>
                  <TableHead onClick={() => requestSort('nota_fiscal')} className="cursor-pointer hover:bg-muted/50">Nota Fiscal</TableHead>
                  <TableHead className="w-[120px] text-center">Comprovante</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedMovements.map((mov) => {
                   const isLowStockAfterExit = mov.tipo_movimentacao === 'Saída' &&
                                               mov.estoque_minimo !== null &&
                                               mov.estoque_minimo !== undefined &&
                                               (mov.estoque_atual) < mov.estoque_minimo;
                  return (
                    <TableRow
                      key={mov.id}
                      className={cn(
                          mov.tipo_movimentacao === 'Entrada' && 'bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-800/40',
                          mov.tipo_movimentacao === 'Saída' && 'bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-800/40',
                          isLowStockAfterExit && 'border-l-4 border-red-500 dark:border-red-400'
                      )}
                    >
                      <TableCell>{mov.tipo_movimentacao}</TableCell>
                      <TableCell>{mov.data_movimentacao ? format(parseISO(mov.data_movimentacao), "dd/MM/yyyy HH:mm", { locale: ptBR }) : 'N/A'}</TableCell>
                      <TableCell>
                        <p className="font-medium">{mov.codigo_material_completo}</p>
                        <p className="text-xs text-muted-foreground">{mov.descricao_completa}</p>
                      </TableCell>
                      <TableCell className="text-right">{mov.quantidade}</TableCell>
                      <TableCell>{mov.unidade_medida}</TableCell>
                      <TableCell>{mov.rastreio || (mov.tipo_movimentacao === 'Entrada' ? mov.fornecedor : mov.motivo_saida)}</TableCell>
                      <TableCell>{mov.nota_fiscal}</TableCell>
                      <TableCell className="text-center">
                        {mov.comprovante_url ? (
                          <Button asChild variant="ghost" size="sm" className="px-2">
                            <a href={mov.comprovante_url} target="_blank" rel="noopener noreferrer" title="Ver Comprovante">
                              <FileText className="h-4 w-4 text-primary" />
                            </a>
                          </Button>
                        ) : (
                          <span className="text-xs text-muted-foreground">N/A</span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
             {totalMovementPages > 1 && (
                <div className="flex items-center justify-between mt-4 space-x-2 py-4">
                  <div className="text-sm text-muted-foreground">
                    Página {currentPage} de {totalMovementPages} (Total de {totalMovementCount} movimentações)
                  </div>
                  <div className="space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1 || isLoadingMovements}
                    >
                      Anterior
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.min(totalMovementPages, prev + 1))}
                      disabled={currentPage === totalMovementPages || isLoadingMovements}
                    >
                      Próxima
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Relatório de Estoque por Período</CardTitle>
          <CardDescription>Selecione os filtros e gere um relatório consolidado das movimentações.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Label>Materiais para Relatório (opcional)</Label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal" disabled={isLoadingMaterials || isGeneratingReport}>
                            {reportSelectedMaterials.length === 0 ? "Todos os materiais (com movimentação)" : 
                             reportSelectedMaterials.length === 1 ? reportSelectedMaterials[0].codigo_material_completo :
                             `${reportSelectedMaterials.length} materiais selecionados`}
                            <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                        <Command>
                            <CommandInput placeholder="Buscar material..." />
                            <CommandList className="max-h-[200px] overflow-y-auto">
                                <CommandEmpty>Nenhum material encontrado.</CommandEmpty>
                                <CommandGroup>
                                    {materials.map((material) => (
                                        <CommandItem
                                            key={material.id}
                                            value={`${material.codigo_material_completo} ${material.descricao_completa}`}
                                            onSelect={() => toggleReportMaterial(material)}
                                            className="cursor-pointer"
                                        >
                                            <Checkbox
                                                checked={reportSelectedMaterials.some(m => m.id === material.id)}
                                                className="mr-2"
                                                aria-hidden="true"
                                                tabIndex={-1}
                                            />
                                            {material.codigo_material_completo} - {material.descricao_completa}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <p className="text-xs text-muted-foreground mt-1">Selecione materiais ou deixe em branco para incluir todos com movimentação.</p>
            </div>
            <div>
              <Label htmlFor="reportSupplierFilter">Fornecedor (Relatório - opcional)</Label>
              <Select value={reportSupplierFilter} onValueChange={setReportSupplierFilter} disabled={isLoadingSuppliers || isGeneratingReport}>
                <SelectTrigger id="reportSupplierFilter">
                  <SelectValue placeholder={isLoadingSuppliers ? "Carregando..." : "Todos os fornecedores"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL_SUPPLIERS_FILTER_VALUE}>Todos os fornecedores</SelectItem>
                  {suppliers.map(supplier => (
                    <SelectItem key={supplier.id || supplier.nome_fantasia} value={supplier.nome_fantasia!}>
                      {supplier.nome_fantasia}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={handleGenerateReport} disabled={isGeneratingReport || !filterDateRange?.from || !filterDateRange?.to}>
            {isGeneratingReport && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Gerar/Atualizar Relatório
          </Button>

          {isGeneratingReport && !reportData && (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="ml-2 text-muted-foreground">Gerando relatório...</p>
            </div>
          )}
          
          {!isGeneratingReport && reportData === null && !weeklyEvolutionData && (
             <p className="text-center text-muted-foreground py-4">
               Use os filtros de data acima e clique em "Gerar/Atualizar Relatório" para ver os dados consolidados.
             </p>
          )}


          {filteredReportData && filteredReportData.length > 0 && !isGeneratingReport && (
            <div className="mt-6 space-y-4">
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={exportToExcel}><Download className="mr-2 h-4 w-4"/>Exportar Excel</Button>
                <Button variant="outline" onClick={exportToPDF}><FileText className="mr-2 h-4 w-4"/>Exportar PDF</Button>
              </div>
              <Table>
                <TableCaption>Resumo das movimentações no período selecionado.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Material</TableHead>
                    <TableHead>Unidade</TableHead>
                    <TableHead className="text-right">Total Entradas</TableHead>
                    <TableHead className="text-right">Total Saídas</TableHead>
                    <TableHead className="text-right">Saldo Período</TableHead>
                    <TableHead className="text-right">Estoque Atual</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReportData.map(item => (
                    <TableRow key={item.materialId}>
                      <TableCell>{item.nomeMaterial}</TableCell>
                      <TableCell>{item.unidade}</TableCell>
                      <TableCell className="text-right">{item.totalEntradas}</TableCell>
                      <TableCell className="text-right">{item.totalSaidas}</TableCell>
                      <TableCell className="text-right">{item.saldoPeriodo}</TableCell>
                      <TableCell className="text-right font-medium">{item.estoqueAtual}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          {filteredReportData && filteredReportData.length === 0 && !isGeneratingReport && reportData && reportData.length > 0 && (
             <p className="text-center text-muted-foreground py-4">Nenhum material atende aos critérios de exibição (ex: com movimentação no período).</p>
          )}
          {reportData && reportData.length === 0 && !isGeneratingReport && (
             <p className="text-center text-muted-foreground py-4">Nenhum dado encontrado para o relatório com os filtros selecionados.</p>
          )}


            {chartWeeklySaldoEvolutionData.data.length > 0 && !isGeneratingReport && (
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Evolução Semanal do Saldo por Material</h3>
                    <ResponsiveContainer width="100%" height={Math.max(400, chartWeeklySaldoEvolutionData.materialNames.length * 50)}>
                        <LineChart data={chartWeeklySaldoEvolutionData.data} margin={{ top: 5, right: 20, left: 20, bottom: 70 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="semana" angle={-45} textAnchor="end" height={80} interval={0} style={{ fontSize: '0.7rem' }} />
                            <YAxis style={{ fontSize: '0.75rem' }} allowDecimals={true} />
                            <RechartsTooltip 
                                 formatter={(value: ValueType, name: NameType, props: RechartsTooltipProps<ValueType, NameType>) => {
                                    const originalName = (name as string).replace(/_/g, ' '); 
                                    return [typeof value === 'number' ? value.toFixed(2) : value, originalName];
                                }}
                            />
                            <RechartsLegend wrapperStyle={{ fontSize: '0.8rem' }} />
                            {chartWeeklySaldoEvolutionData.materialNames.map((matKey, index) => { 
                                const colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];
                                const originalMaterialName = matKey.replace(/_/g, ' '); 
                                const strokeColor = colors[index % colors.length];
                                return (
                                    <Line
                                        key={matKey}
                                        type="monotone"
                                        dataKey={matKey} 
                                        stroke={strokeColor}
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        activeDot={{ r: 5 }}
                                        name={originalMaterialName} 
                                    />
                                );
                            })}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
            {(!weeklyEvolutionData || weeklyEvolutionData.length === 0) && !isGeneratingReport && reportData && (
                <p className="text-sm text-muted-foreground mt-4 text-center">
                    Nenhum dado de evolução semanal encontrado para os materiais e período selecionados.
                </p>
            )}

            {filteredReportData && filteredReportData.length > 0 && !isGeneratingReport &&(
                <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Comparativo Entradas vs. Saídas por Material (Período)</h3>
                <ResponsiveContainer width="100%" height={Math.max(400, filteredReportData.length * 40)}>
                    <ComposedChart
                    layout="vertical"
                    data={filteredReportData} 
                    margin={{ top: 5, right: 20, left: 100, bottom: 5 }} 
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" style={{ fontSize: '0.75rem' }} />
                    <YAxis dataKey="nomeMaterial" type="category" scale="band" width={150} style={{ fontSize: '0.70rem' }} interval={0} />
                    <RechartsTooltip formatter={(value: number) => value.toFixed(2)} />
                    <RechartsLegend wrapperStyle={{ fontSize: '0.8rem' }}/>
                    <Bar dataKey="totalEntradas" name="Total Entradas" barSize={20} fill="hsl(var(--chart-2))" />
                    <Bar dataKey="totalSaidas" name="Total Saídas" barSize={20} fill="hsl(var(--chart-1))" />
                    </ComposedChart>
                </ResponsiveContainer>
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
};
export default StockMovementList;

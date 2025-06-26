// src/components/stock/StockMovementForm.tsx
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarIcon, Loader2, Trash2, Upload, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';
import type { Material } from '@/lib/materialTypes';
import type { StockEntryFormData, StockExitFormData, StockEntryItem, StockExitItem, Fornecedor } from '@/lib/stockTypes';
import { cn } from '@/lib/utils';
import { MaterialCombobox } from '@/components/material/MaterialCombobox';
import { fetchMaterialsAPI, postStockEntryAPI, postStockExitAPI, fetchFornecedoresAPI } from '@/lib/apiClient';
import { supabase } from '@/lib/supabaseClient';


const StockMovementForm = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: materialsData, isLoading: isLoadingMaterials } = useQuery<{materials: Material[], totalCount: number}, Error>({
    queryKey: ['allMaterialsForStockForm'],
    queryFn: () => fetchMaterialsAPI({ limit: 10000 }), // Fetch a large list for comboboxes
    onError: (err) => {
      toast({ title: 'Erro', description: `Não foi possível carregar materiais: ${err.message}`, variant: 'destructive' });
    }
  });
  const materials: Material[] = materialsData?.materials || [];

  const { data: fornecedores = [], isLoading: isLoadingFornecedores } = useQuery<Fornecedor[], Error>({
    queryKey: ['fornecedoresForStockForm'],
    queryFn: fetchFornecedoresAPI,
    onError: (err) => {
      toast({ title: 'Erro', description: `Não foi possível carregar fornecedores: ${err.message}`, variant: 'destructive' });
    }
  });

  const [materialToAddToEntryList, setMaterialToAddToEntryList] = useState<string | null>(null);
  const [materialToAddToExitList, setMaterialToAddToExitList] = useState<string | null>(null);
  
  const entryProofFileRef = useRef<HTMLInputElement>(null);
  const [isUploadingEntryProof, setIsUploadingEntryProof] = useState(false);
  const NONE_SUPPLIER_VALUE = "__NONE__";


  const initialEntryData: StockEntryFormData = {
    items: [],
    data_entrada: new Date(),
    fornecedor: '',
    nota_fiscal: '',
    local_armazenamento: '',
    comprovante_url: '',
  };
  const [entryFormData, setEntryFormData] = useState<StockEntryFormData>(initialEntryData);

  const initialExitData: StockExitFormData = {
    items: [],
    data_saida: new Date(),
    motivo: 'Uso em produção',
    comprovante_url: '', // Added for consistency, can be used for exit proofs if needed
  };
  const [exitFormData, setExitFormData] = useState<StockExitFormData>(initialExitData);

  const entryMutation = useMutation({
    mutationFn: postStockEntryAPI,
    onSuccess: (data) => {
      toast({ title: 'Sucesso', description: data.message || 'Entrada de estoque registrada.' });
      setEntryFormData(initialEntryData);
      setMaterialToAddToEntryList(null); 
      if (entryProofFileRef.current) entryProofFileRef.current.value = ""; 
      queryClient.invalidateQueries({ queryKey: ['allMaterialsForStockForm'] });
      queryClient.invalidateQueries({ queryKey: ['materials'] }); // Invalidate paginated materials list as well
      queryClient.invalidateQueries({ queryKey: ['stockMovements'] });
    },
    onError: (error: Error) => {
      toast({ title: 'Erro ao Registrar Entrada', description: error.message, variant: 'destructive' });
    },
  });

  const exitMutation = useMutation({
    mutationFn: postStockExitAPI,
    onSuccess: (data) => {
      toast({ title: 'Sucesso', description: data.message || 'Saída de estoque registrada.' });
      setExitFormData(initialExitData);
      setMaterialToAddToExitList(null); 
      queryClient.invalidateQueries({ queryKey: ['allMaterialsForStockForm'] });
      queryClient.invalidateQueries({ queryKey: ['materials'] });
      queryClient.invalidateQueries({ queryKey: ['stockMovements'] });
    },
    onError: (error: Error) => {
      toast({ title: 'Erro ao Registrar Saída', description: error.message, variant: 'destructive' });
    },
  });


  // --- Entry Form Handlers ---
  const handleAddMaterialToEntryList = (materialId: string | null) => {
    if (materialId) {
      const material = materials.find(m => m.id === materialId);
      if (material && !entryFormData.items.find(item => item.material_id === materialId)) {
        setEntryFormData(prev => ({
          ...prev,
          items: [
            ...prev.items,
            {
              material_id: material.id,
              material_codigo_completo: material.codigo_material_completo,
              material_descricao_completa: material.descricao_completa,
              material_unidade_medida: material.unidade_medida,
              quantidade: 1
            }
          ]
        }));
      }
    }
    setMaterialToAddToEntryList(null);
  };

  const handleRemoveMaterialFromEntryList = (materialId: string) => {
    setEntryFormData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.material_id !== materialId)
    }));
  };

  const handleEntryItemQuantityChange = (materialId: string, quantidade: string) => {
    const qty = parseFloat(quantidade);
    setEntryFormData(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.material_id === materialId ? { ...item, quantidade: qty >= 0 ? qty : 0 } : item
      )
    }));
  };

  const handleEntryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEntryFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEntrySelectChange = (name: keyof Omit<StockEntryFormData, 'items' | 'data_entrada' | 'comprovante_url'>, value: string) => {
    setEntryFormData(prev => ({ ...prev, [name]: value }));
  };
  

  const handleEntryDateChange = (date?: Date) => {
    if (date) {
      setEntryFormData(prev => ({ ...prev, data_entrada: date }));
    }
  };
  
  const handleEntryProofUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    const file = event.target.files[0];
    if (!file) return;

    setIsUploadingEntryProof(true);
    const timestamp = Date.now();
    const safeFileName = file.name.replace(/[^a-zA-Z0-9-_\.]/g, '_');
    // Use 'stockentryproofs' - plural and all lowercase
    const filePath = `stockentryproofs/${timestamp}_${safeFileName}`; 

    try {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('stockentryproofs') // Corrected bucket name
        .upload(filePath, file);

      if (uploadError) {
        console.error("Supabase Storage Upload Error (Entry Proof):", JSON.stringify(uploadError, null, 2));
        throw uploadError;
      }

      const { data: publicUrlData } = supabase.storage
        .from('stockentryproofs') // Corrected bucket name
        .getPublicUrl(uploadData.path);

      if (!publicUrlData?.publicUrl) {
        throw new Error("Não foi possível obter a URL pública do comprovante.");
      }

      setEntryFormData(prev => ({ ...prev, comprovante_url: publicUrlData.publicUrl }));
      toast({ title: "Sucesso", description: `Comprovante "${file.name}" carregado.` });

    } catch (error: any) {
      console.error("Entry proof upload error (full details):", JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
      const errorMessage = error.message || (error.error && typeof error.error === 'string' ? error.error : null) || (typeof error === 'string' ? error : "Não foi possível carregar o comprovante.");
      toast({ title: "Erro no Upload do Comprovante", description: errorMessage, variant: "destructive" });
      setEntryFormData(prev => ({ ...prev, comprovante_url: '' }));
    } finally {
      setIsUploadingEntryProof(false);
      if (entryProofFileRef.current) entryProofFileRef.current.value = "";
    }
  };

  const handleRemoveEntryProof = () => {
    setEntryFormData(prev => ({ ...prev, comprovante_url: '' }));
    if (entryProofFileRef.current) {
      entryProofFileRef.current.value = "";
    }
    toast({ title: "Comprovante Removido", description: "A referência ao comprovante foi removida do formulário." });
  };


  // --- Exit Form Handlers ---
  const handleAddMaterialToExitList = (materialId: string | null) => {
    if (materialId) {
      const material = materials.find(m => m.id === materialId);
      if (material && !exitFormData.items.find(item => item.material_id === materialId)) {
        setExitFormData(prev => ({
          ...prev,
          items: [
            ...prev.items,
            {
              material_id: material.id,
              material_codigo_completo: material.codigo_material_completo,
              material_descricao_completa: material.descricao_completa,
              material_unidade_medida: material.unidade_medida,
              quantidade: 1
            }
          ]
        }));
      }
    }
    setMaterialToAddToExitList(null); 
  };

  const handleRemoveMaterialFromExitList = (materialId: string) => {
    setExitFormData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.material_id !== materialId)
    }));
  };

  const handleExitItemQuantityChange = (materialId: string, quantidade: string) => {
    const qty = parseFloat(quantidade);
    setExitFormData(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.material_id === materialId ? { ...item, quantidade: qty >= 0 ? qty : 0 } : item
      )
    }));
  };

  const handleExitInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExitFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleExitMotivoSelectChange = (value: string) => {
    setExitFormData(prev => ({ ...prev, motivo: value as StockExitFormData['motivo'] }));
  };

  const handleExitDateChange = (date?: Date) => {
    if (date) {
      setExitFormData(prev => ({ ...prev, data_saida: date }));
    }
  };

  // --- Submit Handlers ---
  const handleEntrySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (entryFormData.items.length === 0) {
      toast({ title: 'Erro de Validação', description: 'Adicione pelo menos um material à lista.', variant: 'destructive' });
      return;
    }
    if (entryFormData.items.some(item => item.quantidade <= 0)) {
      toast({ title: 'Erro de Validação', description: 'Todas as quantidades devem ser maiores que zero.', variant: 'destructive' });
      return;
    }

    const payload = {
      items: entryFormData.items.map(({ material_id, quantidade }) => ({ material_id, quantidade })),
      data_entrada: entryFormData.data_entrada.toISOString(),
      fornecedor: entryFormData.fornecedor,
      nota_fiscal: entryFormData.nota_fiscal,
      local_armazenamento: entryFormData.local_armazenamento,
      comprovante_url: entryFormData.comprovante_url,
    };
    entryMutation.mutate(payload);
  };

  const handleExitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (exitFormData.items.length === 0) {
      toast({ title: 'Erro de Validação', description: 'Adicione pelo menos um material à lista para saída.', variant: 'destructive' });
      return;
    }
    if (exitFormData.items.some(item => item.quantidade <= 0)) {
      toast({ title: 'Erro de Validação', description: 'Todas as quantidades para saída devem ser maiores que zero.', variant: 'destructive' });
      return;
    }

    for (const item of exitFormData.items) {
        const materialInState = materials.find(m => m.id === item.material_id);
        if (materialInState && (materialInState.estoque_atual ?? 0) < item.quantidade) {
            toast({
                title: 'Estoque Insuficiente',
                description: `Não há estoque suficiente para ${materialInState.codigo_material_completo}. Atual: ${materialInState.estoque_atual ?? 0}, Solicitado: ${item.quantidade}`,
                variant: 'destructive',
                duration: 7000,
            });
            return;
        }
    }

    const payload = {
      items: exitFormData.items.map(({ material_id, quantidade }) => ({ material_id, quantidade })),
      data_saida: exitFormData.data_saida.toISOString(),
      motivo: exitFormData.motivo,
      comprovante_url: exitFormData.comprovante_url, 
    };
    exitMutation.mutate(payload);
  };

  const motivoSaidaOptions: StockExitFormData['motivo'][] = ['Uso em produção', 'Descarte', 'Transferência', 'Outro'];


  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Movimentar Estoque</h1>
      <Tabs defaultValue="entrada" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="entrada">Registrar Entrada</TabsTrigger>
          <TabsTrigger value="saida">Registrar Saída</TabsTrigger>
        </TabsList>

        {/* Tab de Entrada */}
        <TabsContent value="entrada">
          <Card>
            <CardHeader>
              <CardTitle>Registrar Entrada de Materiais</CardTitle>
              <CardDescription>Adicione materiais e suas respectivas quantidades para entrada no estoque.</CardDescription>
            </CardHeader>
            <form onSubmit={handleEntrySubmit}>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="entry_material_id_combobox">Adicionar Material à Lista*</Label>
                  <MaterialCombobox
                    materials={materials.filter(m => !entryFormData.items.find(item => item.material_id === m.id))}
                    value={materialToAddToEntryList}
                    onChange={handleAddMaterialToEntryList}
                    isLoading={isLoadingMaterials || entryMutation.isLoading}
                    disabled={entryMutation.isLoading}
                    placeholder="Selecione ou digite para adicionar..."
                    searchPlaceholder="Buscar por código ou descrição..."
                    className="mt-1"
                  />
                </div>

                {entryFormData.items.length > 0 && (
                  <div className="space-y-2">
                    <Label className="font-medium">Materiais para Entrada:</Label>
                    <div className="max-h-60 overflow-y-auto border rounded-md">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead className="w-[150px]">Quantidade</TableHead>
                            <TableHead className="w-[100px]">Unidade</TableHead>
                            <TableHead className="w-[80px] text-right">Ação</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {entryFormData.items.map((item) => (
                            <TableRow key={item.material_id}>
                              <TableCell>
                                <p className="font-medium">{item.material_codigo_completo}</p>
                                <p className="text-xs text-muted-foreground">{item.material_descricao_completa}</p>
                              </TableCell>
                              <TableCell>
                                <Input
                                  type="number"
                                  value={item.quantidade}
                                  onChange={(e) => handleEntryItemQuantityChange(item.material_id, e.target.value)}
                                  min="0.01"
                                  step="any"
                                  required
                                  className="h-8"
                                  disabled={entryMutation.isLoading}
                                />
                              </TableCell>
                              <TableCell>{item.material_unidade_medida}</TableCell>
                              <TableCell className="text-right">
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleRemoveMaterialFromEntryList(item.material_id)}
                                  disabled={entryMutation.isLoading}
                                  aria-label="Remover material da entrada"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <Label htmlFor="entry_data_entrada">Data da Entrada*</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="entry_data_entrada"
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !entryFormData.data_entrada && "text-muted-foreground"
                          )}
                          disabled={entryMutation.isLoading}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {entryFormData.data_entrada ? format(entryFormData.data_entrada, "PPP", { locale: ptBR }) : <span>Escolha uma data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={entryFormData.data_entrada}
                          onSelect={handleEntryDateChange}
                          initialFocus
                          locale={ptBR}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="entry_fornecedor">Fornecedor</Label>
                    <Select
                        name="fornecedor"
                        value={entryFormData.fornecedor || NONE_SUPPLIER_VALUE}
                        onValueChange={(value) => handleEntrySelectChange('fornecedor', value === NONE_SUPPLIER_VALUE ? "" : value)}
                        disabled={isLoadingFornecedores || entryMutation.isLoading}
                    >
                        <SelectTrigger id="entry_fornecedor">
                            <SelectValue placeholder={isLoadingFornecedores ? "Carregando..." : "Selecione um fornecedor"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={NONE_SUPPLIER_VALUE}>Nenhum/Não especificado</SelectItem>
                            {fornecedores.map(f => (
                                <SelectItem key={f.id} value={f.nome_fantasia}>
                                    {f.nome_fantasia} {f.cnpj ? `(${f.cnpj})` : ''}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="entry_nota_fiscal">Nota Fiscal</Label>
                    <Input id="entry_nota_fiscal" name="nota_fiscal" value={entryFormData.nota_fiscal} onChange={handleEntryInputChange} disabled={entryMutation.isLoading} />
                  </div>
                  <div>
                    <Label htmlFor="entry_local_armazenamento">Local de Armazenamento</Label>
                    <Input id="entry_local_armazenamento" name="local_armazenamento" value={entryFormData.local_armazenamento} onChange={handleEntryInputChange} disabled={entryMutation.isLoading} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entry_proof_file_input">Comprovante/Nota Fiscal (PDF/Imagem)</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="entry_proof_file_input"
                      type="file"
                      ref={entryProofFileRef}
                      onChange={handleEntryProofUpload}
                      accept="application/pdf,image/*"
                      className="hidden" 
                      disabled={isUploadingEntryProof || entryMutation.isLoading}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => entryProofFileRef.current?.click()}
                      disabled={isUploadingEntryProof || entryMutation.isLoading}
                    >
                      {isUploadingEntryProof ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                      {isUploadingEntryProof ? "Enviando..." : "Carregar Arquivo"}
                    </Button>
                  </div>
                  {entryFormData.comprovante_url && (
                    <div className="mt-2 flex items-center justify-between p-2 border rounded-md bg-muted/50">
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="h-5 w-5 text-muted-foreground shrink-0" />
                        <a
                          href={entryFormData.comprovante_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline truncate"
                          title={decodeURIComponent(entryFormData.comprovante_url.split('/').pop()?.split('_').slice(1).join('_') || 'comprovante')}
                        >
                          {decodeURIComponent(entryFormData.comprovante_url.split('/').pop()?.split('_').slice(1).join('_') || 'comprovante')}
                        </a>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={handleRemoveEntryProof}
                        disabled={isUploadingEntryProof || entryMutation.isLoading}
                        className="text-destructive hover:text-destructive-foreground hover:bg-destructive h-7 w-7 p-0"
                        aria-label="Remover comprovante"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={entryMutation.isLoading || isLoadingMaterials || isLoadingFornecedores || entryFormData.items.length === 0}>
                  {entryMutation.isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Registrar Entrada
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {/* Tab de Saída */}
        <TabsContent value="saida">
          <Card>
            <CardHeader>
              <CardTitle>Registrar Saída de Materiais</CardTitle>
              <CardDescription>Adicione materiais e suas respectivas quantidades para saída do estoque.</CardDescription>
            </CardHeader>
            <form onSubmit={handleExitSubmit}>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="exit_material_id_combobox">Adicionar Material à Lista*</Label>
                  <MaterialCombobox
                    materials={materials.filter(m => !exitFormData.items.find(item => item.material_id === m.id))}
                    value={materialToAddToExitList}
                    onChange={handleAddMaterialToExitList}
                    isLoading={isLoadingMaterials || exitMutation.isLoading}
                    disabled={exitMutation.isLoading}
                    placeholder="Selecione ou digite para adicionar..."
                    searchPlaceholder="Buscar por código ou descrição..."
                    className="mt-1"
                  />
                </div>

                {exitFormData.items.length > 0 && (
                  <div className="space-y-2">
                    <Label className="font-medium">Materiais para Saída:</Label>
                     <div className="max-h-60 overflow-y-auto border rounded-md">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead className="w-[150px]">Quantidade</TableHead>
                            <TableHead className="w-[100px]">Unidade</TableHead>
                            <TableHead className="w-[80px] text-right">Ação</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {exitFormData.items.map((item) => {
                            const materialDetails = materials.find(m => m.id === item.material_id);
                            return (
                              <TableRow key={item.material_id}>
                                <TableCell>
                                  <p className="font-medium">{item.material_codigo_completo}</p>
                                  <p className="text-xs text-muted-foreground">{item.material_descricao_completa}</p>
                                  {materialDetails && <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Saldo Atual: {materialDetails.estoque_atual ?? 0} {materialDetails.unidade_medida}</p>}
                                </TableCell>
                                <TableCell>
                                  <Input
                                    type="number"
                                    value={item.quantidade}
                                    onChange={(e) => handleExitItemQuantityChange(item.material_id, e.target.value)}
                                    min="0.01"
                                    step="any"
                                    required
                                    className="h-8"
                                    disabled={exitMutation.isLoading}
                                  />
                                </TableCell>
                                <TableCell>{item.material_unidade_medida}</TableCell>
                                <TableCell className="text-right">
                                  <Button
                                    type="button"
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleRemoveMaterialFromExitList(item.material_id)}
                                    disabled={exitMutation.isLoading}
                                    aria-label="Remover material da saída"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <Label htmlFor="exit_data_saida">Data da Saída*</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="exit_data_saida"
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !exitFormData.data_saida && "text-muted-foreground"
                          )}
                          disabled={exitMutation.isLoading}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {exitFormData.data_saida ? format(exitFormData.data_saida, "PPP", { locale: ptBR }) : <span>Escolha uma data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={exitFormData.data_saida}
                          onSelect={handleExitDateChange}
                          initialFocus
                          locale={ptBR}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="exit_motivo">Motivo da Saída*</Label>
                    <Select
                      name="motivo"
                      value={exitFormData.motivo}
                      onValueChange={handleExitMotivoSelectChange}
                      required
                      disabled={exitMutation.isLoading}
                    >
                      <SelectTrigger id="exit_motivo">
                        <SelectValue placeholder="Selecione um motivo" />
                      </SelectTrigger>
                      <SelectContent>
                        {motivoSaidaOptions.map(option => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="exit_comprovante_url">URL do Comprovante (Saída)</Label>
                  <Input id="exit_comprovante_url" name="comprovante_url" type="url" placeholder="https://example.com/comprovante.pdf" value={exitFormData.comprovante_url ?? ''} onChange={handleExitInputChange} disabled={exitMutation.isLoading} />
                  <p className="text-xs text-muted-foreground mt-1">Insira a URL do comprovante (ex: requisição assinada). Upload direto não suportado para saídas no momento.</p>
                </div>

              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={exitMutation.isLoading || isLoadingMaterials || exitFormData.items.length === 0}>
                  {exitMutation.isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Registrar Saída
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StockMovementForm;


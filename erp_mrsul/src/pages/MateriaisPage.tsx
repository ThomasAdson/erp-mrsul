import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/lib/use-toast';
import { createMaterial, getAllMateriais, getAllCategorias, getAllMaterialClasses, updateMaterial, deleteMaterial, Categoria, Material } from '@/lib/api';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import * as XLSX from 'xlsx';

// Excel column headers mapping
const EXCEL_HEADERS = {
  codigo_classe: 'Código Classe',
  nome_classe: 'Nome Classe',
  codigo_categoria: 'Código Categoria',
  nome_categoria: 'Nome Categoria',
  codigo_especificacao: 'Código Especificação',
  descricao_especificacao: 'Descrição Especificação',
  material_composicao: 'Material (composição)',
  unidade_medida: 'Unidade Medida',
  codigo_material_completo: 'Código Material Completo',
  descricao_completa: 'Descrição Completa',
  estoque_atual: 'Estoque Atual',
  estoque_minimo: 'Estoque Mínimo',
  // Campos de custos
  custo_padrao_por_unidade_compra: 'Custo Padrão (R$)',
  unidade_compra_padrao: 'Unidade de Compra',
  peso_linear_kg_m: 'Peso Linear (kg/m)',
  peso_superficial_kg_m2: 'Peso Superficial (kg/m²)'
};

export default function MateriaisPage() {
  const [materiais, setMateriais] = useState<Material[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [form, setForm] = useState({
    categoria_id: '',
    codigo_especificacao: '',
    descricao_especificacao: '',
    material_composicao: '',
    unidade_medida: '',
    codigo_material_completo: '',
    descricao_completa: '',
    observacoes: '',
    estoque_atual: 0,
    estoque_minimo: 0,
    // Campos de custos
    custo_padrao_por_unidade_compra: '',
    unidade_compra_padrao: '',
    peso_linear_kg_m: '',
    peso_superficial_kg_m2: '',
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const fetchMateriais = async () => {
    setMateriais(await getAllMateriais());
  };
  const fetchCategorias = async () => {
    setCategorias(await getAllCategorias());
  };
  const fetchClasses = async () => {
    setClasses(await getAllMaterialClasses());
  };

  useEffect(() => {
    fetchMateriais();
    fetchCategorias();
    fetchClasses();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.categoria_id || !form.codigo_material_completo.trim() || !form.descricao_completa.trim()) {
      toast({ variant: 'destructive', title: 'Erro de validação', description: 'Preencha todos os campos obrigatórios.' });
      return;
    }

    // Validações para campos de custos
    if (form.custo_padrao_por_unidade_compra && !form.unidade_compra_padrao) {
      toast({ variant: 'destructive', title: 'Erro de validação', description: 'Se informar o custo padrão, informe também a unidade de compra.' });
      return;
    }

    if (form.peso_linear_kg_m && form.peso_superficial_kg_m2) {
      toast({ variant: 'destructive', title: 'Erro de validação', description: 'Informe apenas peso linear OU superficial, não ambos.' });
      return;
    }

    try {
      await createMaterial({
        categoria_id: form.categoria_id,
        codigo_especificacao: form.codigo_especificacao,
        descricao_especificacao: form.descricao_especificacao,
        material_composicao: form.material_composicao,
        unidade_medida: form.unidade_medida,
        codigo_material_completo: form.codigo_material_completo,
        descricao_completa: form.descricao_completa,
        observacoes: form.observacoes,
        estoque_atual: Number(form.estoque_atual),
        estoque_minimo: form.estoque_minimo ? Number(form.estoque_minimo) : undefined,
        created_at: new Date().toISOString(),
        // Campos de custos
        custo_padrao_por_unidade_compra: form.custo_padrao_por_unidade_compra ? Number(form.custo_padrao_por_unidade_compra) : undefined,
        unidade_compra_padrao: form.unidade_compra_padrao || undefined,
        peso_linear_kg_m: form.peso_linear_kg_m ? Number(form.peso_linear_kg_m) : undefined,
        peso_superficial_kg_m2: form.peso_superficial_kg_m2 ? Number(form.peso_superficial_kg_m2) : undefined,
      });
      setForm({
        categoria_id: '', codigo_especificacao: '', descricao_especificacao: '', material_composicao: '', unidade_medida: '', codigo_material_completo: '', descricao_completa: '', observacoes: '', estoque_atual: 0, estoque_minimo: 0,
        custo_padrao_por_unidade_compra: '', unidade_compra_padrao: '', peso_linear_kg_m: '', peso_superficial_kg_m2: '',
      });
      toast({ title: 'Item cadastrado!' });
      fetchMateriais();
    } catch (err: any) {
      // Log detalhado para debug
      console.error('Erro ao cadastrar material:', err, err?.message, err?.stack, form);
      toast({ variant: 'destructive', title: 'Erro', description: err?.message || String(err) });
    }
  };

  const startEdit = (mat: Material) => {
    setEditId(mat.id);
    setEditForm({ 
      ...mat,
      // Converter valores para string para os inputs
      custo_padrao_por_unidade_compra: mat.custo_padrao_por_unidade_compra?.toString() || '',
      peso_linear_kg_m: mat.peso_linear_kg_m?.toString() || '',
      peso_superficial_kg_m2: mat.peso_superficial_kg_m2?.toString() || '',
    });
    setEditModalOpen(true);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditForm({});
    setEditModalOpen(false);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm.categoria_id || !editForm.codigo_material_completo || !editForm.descricao_completa) {
      toast({ variant: 'destructive', title: 'Erro de validação', description: 'Preencha todos os campos obrigatórios.' });
      return;
    }

    // Validações para campos de custos
    if (editForm.custo_padrao_por_unidade_compra && !editForm.unidade_compra_padrao) {
      toast({ variant: 'destructive', title: 'Erro de validação', description: 'Se informar o custo padrão, informe também a unidade de compra.' });
      return;
    }

    if (editForm.peso_linear_kg_m && editForm.peso_superficial_kg_m2) {
      toast({ variant: 'destructive', title: 'Erro de validação', description: 'Informe apenas peso linear OU superficial, não ambos.' });
      return;
    }

    try {
      setSaving(true);
      await updateMaterial(editId!, {
        ...editForm,
        estoque_atual: Number(editForm.estoque_atual),
        estoque_minimo: editForm.estoque_minimo ? Number(editForm.estoque_minimo) : null,
        // Campos de custos
        custo_padrao_por_unidade_compra: editForm.custo_padrao_por_unidade_compra ? Number(editForm.custo_padrao_por_unidade_compra) : undefined,
        peso_linear_kg_m: editForm.peso_linear_kg_m ? Number(editForm.peso_linear_kg_m) : undefined,
        peso_superficial_kg_m2: editForm.peso_superficial_kg_m2 ? Number(editForm.peso_superficial_kg_m2) : undefined,
      });
      toast({ title: 'Material atualizado!' });
      cancelEdit();
      fetchMateriais();
    } catch (err: any) {
      toast({ variant: 'destructive', title: 'Erro', description: err.message });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Deseja realmente excluir este material?')) return;
    try {
      await deleteMaterial(id);
      toast({ title: 'Material excluído!' });
      fetchMateriais();
    } catch (err: any) {
      toast({ variant: 'destructive', title: 'Erro', description: err.message });
    }
  };

  // Função utilitária para sugerir o próximo código de especificação sequencial
  function getNextCodigoEspecificacao(materiaisCategoria: Material[]): string {
    if (materiaisCategoria.length === 0) return '001';
    const codigos = materiaisCategoria
      .map(m => m.codigo_especificacao)
      .map(c => parseInt(c, 10))
      .filter(n => !isNaN(n));
    const max = codigos.length > 0 ? Math.max(...codigos) : 0;
    return String(max + 1).padStart(3, '0');
  }

  // Atualiza campos automáticos ao selecionar categoria ou digitar descrição
  useEffect(() => {
    if (!form.categoria_id) return;
    const categoria = categorias.find(c => c.id === form.categoria_id);
    if (!categoria) return;
    // Busca materiais já cadastrados na categoria
    const materiaisCategoria = materiais.filter(m => m.categoria_id === categoria.id);
    // Sugere próximo código de especificação
    const nextCodigo = getNextCodigoEspecificacao(materiaisCategoria);
    // Busca classe da categoria
    const classe = categoria ? classes?.find(cl => cl.id === categoria.material_class_id) : undefined;
    // Monta código material completo
    const codigoMaterialCompleto = classe && categoria
      ? `${classe.code}-${categoria.codigo_categoria}-${nextCodigo}`
      : '';
    // Monta descrição completa
    const descricaoCompleta = categoria && form.descricao_especificacao
      ? `${categoria.nome_categoria} - ${form.descricao_especificacao}`
      : categoria?.nome_categoria || '';
    setForm(f => ({
      ...f,
      codigo_especificacao: nextCodigo,
      codigo_material_completo: codigoMaterialCompleto,
      descricao_completa: descricaoCompleta,
    }));
    // eslint-disable-next-line
  }, [form.categoria_id, materiais, categorias, classes]);

  // Atualiza descrição completa ao digitar descrição de especificação
  useEffect(() => {
    if (!form.categoria_id) return;
    const categoria = categorias.find(c => c.id === form.categoria_id);
    if (!categoria) return;
    setForm(f => ({
      ...f,
      descricao_completa: form.descricao_especificacao
        ? `${categoria.nome_categoria} - ${form.descricao_especificacao}`
        : categoria.nome_categoria,
    }));
    // eslint-disable-next-line
  }, [form.descricao_especificacao]);

  // Excel functions
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      materiais.map(mat => {
        const categoria = categorias.find(c => c.id === mat.categoria_id);
        const classe = categoria ? classes.find(cl => cl.id === categoria.material_class_id) : null;
        
        return {
          [EXCEL_HEADERS.codigo_classe]: classe?.codigo || '',
          [EXCEL_HEADERS.nome_classe]: classe?.nome || '',
          [EXCEL_HEADERS.codigo_categoria]: categoria?.codigo_categoria || '',
          [EXCEL_HEADERS.nome_categoria]: categoria?.nome_categoria || '',
          [EXCEL_HEADERS.codigo_especificacao]: mat.codigo_especificacao,
          [EXCEL_HEADERS.descricao_especificacao]: mat.descricao_especificacao,
          [EXCEL_HEADERS.material_composicao]: mat.material_composicao,
          [EXCEL_HEADERS.unidade_medida]: mat.unidade_medida,
          [EXCEL_HEADERS.codigo_material_completo]: mat.codigo_material_completo,
          [EXCEL_HEADERS.descricao_completa]: mat.descricao_completa,
          [EXCEL_HEADERS.estoque_atual]: mat.estoque_atual,
          [EXCEL_HEADERS.estoque_minimo]: mat.estoque_minimo,
          // Campos de custos
          [EXCEL_HEADERS.custo_padrao_por_unidade_compra]: mat.custo_padrao_por_unidade_compra || '',
          [EXCEL_HEADERS.unidade_compra_padrao]: mat.unidade_compra_padrao || '',
          [EXCEL_HEADERS.peso_linear_kg_m]: mat.peso_linear_kg_m || '',
          [EXCEL_HEADERS.peso_superficial_kg_m2]: mat.peso_superficial_kg_m2 || ''
        };
      })
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Materiais");
    XLSX.writeFile(workbook, "materiais.xlsx");
  };

  const handleGenerateTemplate = () => {
    const template = [{
      [EXCEL_HEADERS.codigo_classe]: "001",
      [EXCEL_HEADERS.nome_classe]: "Materia Prima",
      [EXCEL_HEADERS.codigo_categoria]: "0001",
      [EXCEL_HEADERS.nome_categoria]: "Tubo Quadrado",
      [EXCEL_HEADERS.codigo_especificacao]: "0001",
      [EXCEL_HEADERS.descricao_especificacao]: "20 x 20 x 1",
      [EXCEL_HEADERS.material_composicao]: "ASTM A36",
      [EXCEL_HEADERS.unidade_medida]: "metro",
      [EXCEL_HEADERS.codigo_material_completo]: "001-0001-0001",
      [EXCEL_HEADERS.descricao_completa]: "Tubo Quadrado 20 x 20 x 1 - ASTM A36",
      [EXCEL_HEADERS.estoque_atual]: "48",
      [EXCEL_HEADERS.estoque_minimo]: "12",
      // Campos de custos
      [EXCEL_HEADERS.custo_padrao_por_unidade_compra]: "4.8",
      [EXCEL_HEADERS.unidade_compra_padrao]: "kg",
      [EXCEL_HEADERS.peso_linear_kg_m]: "6.7824",
      [EXCEL_HEADERS.peso_superficial_kg_m2]: ""
    }];
    const worksheet = XLSX.utils.json_to_sheet(template);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Template");
    XLSX.writeFile(workbook, "template_materiais.xlsx");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Validate and transform data
        const materiaisToImport = jsonData.map((row: any) => {
          // Encontrar categoria pelo código ou nome
          const categoria = categorias.find(c => 
            c.codigo_categoria === row[EXCEL_HEADERS.codigo_categoria] || 
            c.nome_categoria === row[EXCEL_HEADERS.nome_categoria]
          );
          if (!categoria) {
            throw new Error(`Categoria não encontrada: ${row[EXCEL_HEADERS.codigo_categoria]} - ${row[EXCEL_HEADERS.nome_categoria]}`);
          }

          return {
            categoria_id: categoria.id,
            codigo_especificacao: row[EXCEL_HEADERS.codigo_especificacao],
            descricao_especificacao: row[EXCEL_HEADERS.descricao_especificacao],
            material_composicao: row[EXCEL_HEADERS.material_composicao],
            unidade_medida: row[EXCEL_HEADERS.unidade_medida],
            codigo_material_completo: row[EXCEL_HEADERS.codigo_material_completo],
            descricao_completa: row[EXCEL_HEADERS.descricao_completa],
            estoque_atual: Number(row[EXCEL_HEADERS.estoque_atual]) || 0,
            estoque_minimo: Number(row[EXCEL_HEADERS.estoque_minimo]) || 0,
            created_at: new Date().toISOString(),
            // Campos de custos
            custo_padrao_por_unidade_compra: row[EXCEL_HEADERS.custo_padrao_por_unidade_compra] ? Number(row[EXCEL_HEADERS.custo_padrao_por_unidade_compra]) : undefined,
            unidade_compra_padrao: row[EXCEL_HEADERS.unidade_compra_padrao] || undefined,
            peso_linear_kg_m: row[EXCEL_HEADERS.peso_linear_kg_m] ? Number(row[EXCEL_HEADERS.peso_linear_kg_m]) : undefined,
            peso_superficial_kg_m2: row[EXCEL_HEADERS.peso_superficial_kg_m2] ? Number(row[EXCEL_HEADERS.peso_superficial_kg_m2]) : undefined,
          };
        });

        // Import materials one by one
        for (const material of materiaisToImport) {
          await createMaterial(material);
        }

        toast({ title: `Importação concluída! ${materiaisToImport.length} materiais importados.` });
        fetchMateriais();
      } catch (err: any) {
        toast({ 
          variant: 'destructive', 
          title: 'Erro na importação', 
          description: err.message || 'Erro ao processar o arquivo.' 
        });
      }
      // Reset file input
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">      <Card>        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Itens</CardTitle>
          <div className="flex gap-2">
            <Button onClick={handleExport}>Exportar</Button>
            <Button onClick={handleGenerateTemplate}>Template</Button>
            <div className="relative">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".xlsx,.xls"
                onChange={handleImport}
              />
              <Button onClick={() => fileInputRef.current?.click()}>
                Importar
              </Button>
            </div>
            <Button onClick={() => setModalOpen(true)}>
              Adicionar Item
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-3.5 text-left text-sm font-semibold">Código</th>
                  <th className="px-4 py-3.5 text-left text-sm font-semibold">Descrição</th>
                  <th className="px-4 py-3.5 text-left text-sm font-semibold">Categoria</th>
                  <th className="px-4 py-3.5 text-right text-sm font-semibold">Custo/Un. Estoque</th>
                  <th className="px-4 py-3.5 text-right text-sm font-semibold">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {materiais.map(mat => (
                  <tr key={mat.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-4 text-sm font-mono">{mat.codigo_material_completo}</td>
                    <td className="px-4 py-4 text-sm">{mat.descricao_completa}</td>
                    <td className="px-4 py-4 text-sm">{categorias.find(c => c.id === mat.categoria_id)?.nome_categoria || mat.categoria_id}</td>
                    <td className="px-4 py-4 text-sm text-right font-mono">
                      {mat.custo_por_unidade_estoque ? 
                        `R$ ${mat.custo_por_unidade_estoque.toFixed(2)}` : 
                        <span className="text-muted-foreground">-</span>
                      }
                    </td>
                    <td className="px-4 py-4 text-sm text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => startEdit(mat)}>Editar</Button>
                        <Button size="sm" variant="ghost" className="text-destructive" onClick={() => handleDelete(mat.id)}>Excluir</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastrar Item</DialogTitle>
          </DialogHeader>
          <form onSubmit={e => { handleCreate(e); setModalOpen(false); }} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="categoria_id">Categoria</Label>
              <select id="categoria_id" name="categoria_id" value={form.categoria_id} onChange={handleChange} className="w-full border rounded p-2">
                <option value="">Selecione a categoria</option>
                {categorias.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.codigo_categoria} - {cat.nome_categoria}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="codigo_especificacao">Código Especificação</Label>
              <Input id="codigo_especificacao" name="codigo_especificacao" value={form.codigo_especificacao} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="descricao_especificacao">Descrição Especificação</Label>
              <Input id="descricao_especificacao" name="descricao_especificacao" value={form.descricao_especificacao} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="material_composicao">Material/Composição</Label>
              <Input id="material_composicao" name="material_composicao" value={form.material_composicao} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unidade_medida">Unidade de Medida</Label>
              <Input id="unidade_medida" name="unidade_medida" value={form.unidade_medida} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="codigo_material_completo">Código Material Completo</Label>
              <Input id="codigo_material_completo" name="codigo_material_completo" value={form.codigo_material_completo} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="descricao_completa">Descrição Completa</Label>
              <Input id="descricao_completa" name="descricao_completa" value={form.descricao_completa} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="observacoes">Observações</Label>
              <Input id="observacoes" name="observacoes" value={form.observacoes} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estoque_atual">Estoque Atual</Label>
              <Input id="estoque_atual" name="estoque_atual" type="number" value={form.estoque_atual} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estoque_minimo">Estoque Mínimo</Label>
              <Input id="estoque_minimo" name="estoque_minimo" type="number" value={form.estoque_minimo} onChange={handleChange} />
            </div>
            
            {/* Seção de Custos */}
            <div className="space-y-4 border-t pt-4">
              <h3 className="text-lg font-semibold text-muted-foreground">💰 Informações de Custos</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="custo_padrao_por_unidade_compra">Custo Padrão (R$)</Label>
                  <Input 
                    id="custo_padrao_por_unidade_compra" 
                    name="custo_padrao_por_unidade_compra" 
                    type="number" 
                    step="0.01"
                    placeholder="Ex: 8.50"
                    value={form.custo_padrao_por_unidade_compra} 
                    onChange={handleChange} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="unidade_compra_padrao">Unidade de Compra</Label>
                  <select 
                    id="unidade_compra_padrao" 
                    name="unidade_compra_padrao" 
                    value={form.unidade_compra_padrao} 
                    onChange={handleChange} 
                    className="w-full border rounded p-2"
                  >
                    <option value="">Selecione</option>
                    <option value="kg">kg (quilograma)</option>
                    <option value="metro">metro</option>
                    <option value="m2">m² (metro quadrado)</option>
                    <option value="peça">peça</option>
                    <option value="litro">litro</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="peso_linear_kg_m">Peso Linear (kg/m)</Label>
                  <Input 
                    id="peso_linear_kg_m" 
                    name="peso_linear_kg_m" 
                    type="number" 
                    step="0.001"
                    placeholder="Ex: 1.47"
                    value={form.peso_linear_kg_m} 
                    onChange={handleChange} 
                  />
                  <p className="text-xs text-muted-foreground">Para materiais vendidos por metro</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="peso_superficial_kg_m2">Peso Superficial (kg/m²)</Label>
                  <Input 
                    id="peso_superficial_kg_m2" 
                    name="peso_superficial_kg_m2" 
                    type="number" 
                    step="0.001"
                    placeholder="Ex: 23.5"
                    value={form.peso_superficial_kg_m2} 
                    onChange={handleChange} 
                  />
                  <p className="text-xs text-muted-foreground">Para materiais vendidos por m²</p>
                </div>
              </div>
            </div>
            
            <Button type="submit">Salvar</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modal de Edição */}
      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Item</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="edit_categoria_id">Categoria</Label>
              <select 
                id="edit_categoria_id" 
                name="categoria_id" 
                value={editForm.categoria_id || ''} 
                onChange={handleEditChange} 
                className="w-full border rounded p-2"
              >
                <option value="">Selecione a categoria</option>
                {categorias.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.codigo_categoria} - {cat.nome_categoria}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit_codigo_especificacao">Código Especificação</Label>
              <Input 
                id="edit_codigo_especificacao" 
                name="codigo_especificacao" 
                value={editForm.codigo_especificacao || ''} 
                onChange={handleEditChange} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit_descricao_especificacao">Descrição Especificação</Label>
              <Input 
                id="edit_descricao_especificacao" 
                name="descricao_especificacao" 
                value={editForm.descricao_especificacao || ''} 
                onChange={handleEditChange} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit_material_composicao">Material/Composição</Label>
              <Input 
                id="edit_material_composicao" 
                name="material_composicao" 
                value={editForm.material_composicao || ''} 
                onChange={handleEditChange} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit_unidade_medida">Unidade de Medida</Label>
              <Input 
                id="edit_unidade_medida" 
                name="unidade_medida" 
                value={editForm.unidade_medida || ''} 
                onChange={handleEditChange} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit_codigo_material_completo">Código Material Completo</Label>
              <Input 
                id="edit_codigo_material_completo" 
                name="codigo_material_completo" 
                value={editForm.codigo_material_completo || ''} 
                onChange={handleEditChange} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit_descricao_completa">Descrição Completa</Label>
              <Input 
                id="edit_descricao_completa" 
                name="descricao_completa" 
                value={editForm.descricao_completa || ''} 
                onChange={handleEditChange} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit_observacoes">Observações</Label>
              <Input 
                id="edit_observacoes" 
                name="observacoes" 
                value={editForm.observacoes || ''} 
                onChange={handleEditChange} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit_estoque_atual">Estoque Atual</Label>
              <Input 
                id="edit_estoque_atual" 
                name="estoque_atual" 
                type="number" 
                value={editForm.estoque_atual || 0} 
                onChange={handleEditChange} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit_estoque_minimo">Estoque Mínimo</Label>
              <Input 
                id="edit_estoque_minimo" 
                name="estoque_minimo" 
                type="number" 
                value={editForm.estoque_minimo || 0} 
                onChange={handleEditChange} 
              />
            </div>

            {/* Seção de Custos */}
            <div className="space-y-4 border-t pt-4">
              <h3 className="text-lg font-semibold text-muted-foreground">💰 Informações de Custos</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit_custo_padrao_por_unidade_compra">Custo Padrão (R$)</Label>
                  <Input 
                    id="edit_custo_padrao_por_unidade_compra" 
                    name="custo_padrao_por_unidade_compra" 
                    type="number" 
                    step="0.01"
                    placeholder="Ex: 8.50"
                    value={editForm.custo_padrao_por_unidade_compra || ''} 
                    onChange={handleEditChange} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit_unidade_compra_padrao">Unidade de Compra</Label>
                  <select 
                    id="edit_unidade_compra_padrao" 
                    name="unidade_compra_padrao" 
                    value={editForm.unidade_compra_padrao || ''} 
                    onChange={handleEditChange} 
                    className="w-full border rounded p-2"
                  >
                    <option value="">Selecione</option>
                    <option value="kg">kg (quilograma)</option>
                    <option value="metro">metro</option>
                    <option value="m2">m² (metro quadrado)</option>
                    <option value="peça">peça</option>
                    <option value="litro">litro</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit_peso_linear_kg_m">Peso Linear (kg/m)</Label>
                  <Input 
                    id="edit_peso_linear_kg_m" 
                    name="peso_linear_kg_m" 
                    type="number" 
                    step="0.001"
                    placeholder="Ex: 1.47"
                    value={editForm.peso_linear_kg_m || ''} 
                    onChange={handleEditChange} 
                  />
                  <p className="text-xs text-muted-foreground">Para materiais vendidos por metro</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit_peso_superficial_kg_m2">Peso Superficial (kg/m²)</Label>
                  <Input 
                    id="edit_peso_superficial_kg_m2" 
                    name="peso_superficial_kg_m2" 
                    type="number" 
                    step="0.001"
                    placeholder="Ex: 23.5"
                    value={editForm.peso_superficial_kg_m2 || ''} 
                    onChange={handleEditChange} 
                  />
                  <p className="text-xs text-muted-foreground">Para materiais vendidos por m²</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={saving}>
                {saving ? 'Salvando...' : 'Salvar'}
              </Button>
              <Button type="button" variant="outline" onClick={cancelEdit}>
                Cancelar
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

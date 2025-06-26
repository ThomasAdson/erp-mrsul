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
  categoria_id: 'Categoria ID',
  codigo_especificacao: 'Código Especificação',
  descricao_especificacao: 'Descrição Especificação',
  material_composicao: 'Material/Composição',
  unidade_medida: 'Unidade de Medida',
  codigo_material_completo: 'Código Material Completo',
  descricao_completa: 'Descrição Completa',
  observacoes: 'Observações',
  estoque_atual: 'Estoque Atual',
  estoque_minimo: 'Estoque Mínimo'
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
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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
      });
      setForm({
        categoria_id: '', codigo_especificacao: '', descricao_especificacao: '', material_composicao: '', unidade_medida: '', codigo_material_completo: '', descricao_completa: '', observacoes: '', estoque_atual: 0, estoque_minimo: 0,
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
    setEditForm({ ...mat });
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditForm({});
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
    try {
      setSaving(true);
      await updateMaterial(editId!, {
        ...editForm,
        estoque_atual: Number(editForm.estoque_atual),
        estoque_minimo: editForm.estoque_minimo ? Number(editForm.estoque_minimo) : null,
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
      materiais.map(mat => ({
        [EXCEL_HEADERS.categoria_id]: categorias.find(c => c.id === mat.categoria_id)?.nome_categoria || mat.categoria_id,
        [EXCEL_HEADERS.codigo_especificacao]: mat.codigo_especificacao,
        [EXCEL_HEADERS.descricao_especificacao]: mat.descricao_especificacao,
        [EXCEL_HEADERS.material_composicao]: mat.material_composicao,
        [EXCEL_HEADERS.unidade_medida]: mat.unidade_medida,
        [EXCEL_HEADERS.codigo_material_completo]: mat.codigo_material_completo,
        [EXCEL_HEADERS.descricao_completa]: mat.descricao_completa,
        [EXCEL_HEADERS.observacoes]: mat.observacoes,
        [EXCEL_HEADERS.estoque_atual]: mat.estoque_atual,
        [EXCEL_HEADERS.estoque_minimo]: mat.estoque_minimo
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Materiais");
    XLSX.writeFile(workbook, "materiais.xlsx");
  };

  const handleGenerateTemplate = () => {
    const template = [{
      [EXCEL_HEADERS.categoria_id]: "",
      [EXCEL_HEADERS.codigo_especificacao]: "",
      [EXCEL_HEADERS.descricao_especificacao]: "",
      [EXCEL_HEADERS.material_composicao]: "",
      [EXCEL_HEADERS.unidade_medida]: "",
      [EXCEL_HEADERS.codigo_material_completo]: "",
      [EXCEL_HEADERS.descricao_completa]: "",
      [EXCEL_HEADERS.observacoes]: "",
      [EXCEL_HEADERS.estoque_atual]: "",
      [EXCEL_HEADERS.estoque_minimo]: ""
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
          const categoria = categorias.find(c => c.nome_categoria === row[EXCEL_HEADERS.categoria_id]);
          if (!categoria) throw new Error(`Categoria não encontrada: ${row[EXCEL_HEADERS.categoria_id]}`);

          return {
            categoria_id: categoria.id,
            codigo_especificacao: row[EXCEL_HEADERS.codigo_especificacao],
            descricao_especificacao: row[EXCEL_HEADERS.descricao_especificacao],
            material_composicao: row[EXCEL_HEADERS.material_composicao],
            unidade_medida: row[EXCEL_HEADERS.unidade_medida],
            codigo_material_completo: row[EXCEL_HEADERS.codigo_material_completo],
            descricao_completa: row[EXCEL_HEADERS.descricao_completa],
            observacoes: row[EXCEL_HEADERS.observacoes],
            estoque_atual: Number(row[EXCEL_HEADERS.estoque_atual]) || 0,
            estoque_minimo: Number(row[EXCEL_HEADERS.estoque_minimo]) || 0,
            created_at: new Date().toISOString(),
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
                  <th className="px-4 py-3.5 text-right text-sm font-semibold">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {materiais.map(mat => (
                  <tr key={mat.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-4 text-sm font-mono">{mat.codigo_material_completo}</td>
                    <td className="px-4 py-4 text-sm">{mat.descricao_completa}</td>
                    <td className="px-4 py-4 text-sm">{categorias.find(c => c.id === mat.categoria_id)?.nome_categoria || mat.categoria_id}</td>
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
            <Button type="submit">Salvar</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/lib/use-toast';
import { createCategoria, getAllCategorias, Categoria, getAllMaterialClasses, MaterialClass, updateCategoria, deleteCategoria } from '@/lib/api';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import * as XLSX from 'xlsx';

// Excel column headers mapping
const EXCEL_HEADERS = {
  classe: 'Classe',
  codigo_categoria: 'Código',
  nome_categoria: 'Nome'
};

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [materialClassId, setMaterialClassId] = useState('');
  const [classes, setClasses] = useState<MaterialClass[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editCodigo, setEditCodigo] = useState('');
  const [editNome, setEditNome] = useState('');
  const [editClasseId, setEditClasseId] = useState('');
  const [saving, setSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Excel functions
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      categorias.map(cat => ({
        [EXCEL_HEADERS.classe]: classes.find(c => c.id === cat.material_class_id)?.name || cat.material_class_id,
        [EXCEL_HEADERS.codigo_categoria]: cat.codigo_categoria,
        [EXCEL_HEADERS.nome_categoria]: cat.nome_categoria
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Categorias");
    XLSX.writeFile(workbook, "categorias.xlsx");
  };

  const handleGenerateTemplate = () => {
    const template = [{
      [EXCEL_HEADERS.classe]: "",
      [EXCEL_HEADERS.codigo_categoria]: "",
      [EXCEL_HEADERS.nome_categoria]: ""
    }];
    const worksheet = XLSX.utils.json_to_sheet(template);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Template");
    XLSX.writeFile(workbook, "template_categorias.xlsx");
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
        const categoriasToImport = jsonData.map((row: any) => {
          const classe = classes.find(c => c.name === row[EXCEL_HEADERS.classe]);
          if (!classe) throw new Error(`Classe não encontrada: ${row[EXCEL_HEADERS.classe]}`);

          return {
            material_class_id: classe.id,
            codigo_categoria: row[EXCEL_HEADERS.codigo_categoria],
            nome_categoria: row[EXCEL_HEADERS.nome_categoria]
          };
        });

        // Import categories one by one
        for (const categoria of categoriasToImport) {
          await createCategoria(categoria);
        }

        toast({ title: `Importação concluída! ${categoriasToImport.length} categorias importadas.` });
        fetchCategorias();
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

  const fetchCategorias = async () => {
    setCategorias(await getAllCategorias());
  };
  const fetchClasses = async () => {
    setClasses(await getAllMaterialClasses());
  };

  useEffect(() => {
    fetchCategorias();
    fetchClasses();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!materialClassId || !codigo.trim() || !nome.trim()) {
      toast({ variant: 'destructive', title: 'Erro de validação', description: 'Preencha todos os campos obrigatórios.' });
      return;
    }
    try {
      await createCategoria({ material_class_id: materialClassId, codigo_categoria: codigo, nome_categoria: nome });
      setCodigo('');
      setNome('');
      setMaterialClassId('');
      toast({ title: 'Categoria criada!' });
      fetchCategorias();
    } catch (err: any) {
      console.error('Erro ao cadastrar categoria:', err, err?.message, err?.stack);
      toast({ variant: 'destructive', title: 'Erro', description: err?.message || String(err) });
    }
  };

  const startEdit = (cat: Categoria) => {
    setEditId(cat.id);
    setEditCodigo(cat.codigo_categoria);
    setEditNome(cat.nome_categoria);
    setEditClasseId(cat.material_class_id);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditCodigo('');
    setEditNome('');
    setEditClasseId('');
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editClasseId || !editCodigo.trim() || !editNome.trim()) {
      toast({ variant: 'destructive', title: 'Erro de validação', description: 'Preencha todos os campos obrigatórios.' });
      return;
    }
    try {
      setSaving(true);
      await updateCategoria(editId!, { material_class_id: editClasseId, codigo_categoria: editCodigo, nome_categoria: editNome });
      toast({ title: 'Categoria atualizada!' });
      cancelEdit();
      fetchCategorias();
    } catch (err: any) {
      toast({ variant: 'destructive', title: 'Erro', description: err.message });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Deseja realmente excluir esta categoria?')) return;
    try {
      await deleteCategoria(id);
      toast({ title: 'Categoria excluída!' });
      fetchCategorias();
    } catch (err: any) {
      toast({ variant: 'destructive', title: 'Erro', description: err.message });
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Categorias</CardTitle>
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
              Criar Categoria
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-3.5 text-left text-sm font-semibold">Código</th>
                  <th className="px-4 py-3.5 text-left text-sm font-semibold">Nome</th>
                  <th className="px-4 py-3.5 text-left text-sm font-semibold">Classe</th>
                  <th className="px-4 py-3.5 text-right text-sm font-semibold">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {categorias.map(cat => (
                  <tr key={cat.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-4 text-sm font-mono">{cat.codigo_categoria}</td>
                    <td className="px-4 py-4 text-sm">{cat.nome_categoria}</td>
                    <td className="px-4 py-4 text-sm">{classes.find(c => c.id === cat.material_class_id)?.name || cat.material_class_id}</td>
                    <td className="px-4 py-4 text-sm text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => startEdit(cat)}>Editar</Button>
                        <Button size="sm" variant="ghost" className="text-destructive" onClick={() => handleDelete(cat.id)}>Excluir</Button>
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
            <DialogTitle>Cadastrar Categoria</DialogTitle>
          </DialogHeader>
          <form onSubmit={e => { handleCreate(e); setModalOpen(false); }} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="materialClassId">Classe</Label>
              <select id="materialClassId" value={materialClassId} onChange={e => setMaterialClassId(e.target.value)} className="w-full border rounded p-2" disabled={classes.length === 0}>
                <option value="">Selecione a classe</option>
                {classes.map(c => (
                  <option key={c.id} value={c.id}>{c.code} - {c.name}</option>
                ))}
              </select>
              {classes.length === 0 && (
                <div className="text-sm text-destructive mt-1">Cadastre uma Classe antes de criar Categorias.</div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="codigo">Código</Label>
              <Input id="codigo" value={codigo} onChange={e => setCodigo(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <Button type="submit" disabled={classes.length === 0}>Salvar</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

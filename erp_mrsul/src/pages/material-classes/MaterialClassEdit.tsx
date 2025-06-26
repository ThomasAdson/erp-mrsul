import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getMaterialClass, updateMaterialClass } from '@/lib/api';
import { MaterialClass, UpdateMaterialClassRequest } from '@/types';
import { useToast } from '@/lib/use-toast';

const MaterialClassEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [materialClass, setMaterialClass] = useState<MaterialClass | null>(null);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      loadMaterialClass(id);
    }
  }, [id]);

  const loadMaterialClass = async (classId: string) => {
    try {
      setLoading(true);
      const data = await getMaterialClass(classId);
      setMaterialClass(data);
      setCode(data.code);
      setName(data.name);
    } catch (error) {
      console.error('Failed to load material class:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Falha ao carregar detalhes da classe de material",
      });
      navigate('/material-classes');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!id) return;
    
    // Basic validation
    if (!code.trim()) {
      toast({
        variant: "destructive",
        title: "Erro de validação",
        description: "O código da classe é obrigatório",
      });
      return;
    }
    
    if (!name.trim()) {
      toast({
        variant: "destructive",
        title: "Erro de validação",
        description: "O nome da classe é obrigatório",
      });
      return;
    }
    
    try {
      setSaving(true);
      
      const updateData: UpdateMaterialClassRequest = {
        code,
        name,
      };
      
      await updateMaterialClass(id, updateData);
      toast({
        title: "Sucesso",
        description: "Classe de material atualizada com sucesso",
      });
      navigate(`/material-classes/${id}`);
    } catch (error: any) {
      console.error('Failed to update material class:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message || "Falha ao atualizar classe de material",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-32">Carregando...</div>;
  }

  if (!materialClass) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-muted-foreground">Classe de material não encontrada</p>
        <Button variant="link" className="mt-2" onClick={() => navigate('/material-classes')}>
          Voltar para a lista
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Editar Classe de Material</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="code">Código</Label>
              <Input
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                disabled={saving}
              />
              <p className="text-sm text-muted-foreground">
                O código deve ser único e será usado para gerar códigos de materiais.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={saving}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => navigate(`/material-classes/${id}`)}
              disabled={saving}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? 'Salvando...' : 'Salvar'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default MaterialClassEdit;
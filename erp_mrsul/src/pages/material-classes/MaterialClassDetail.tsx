import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getMaterialClass } from '@/lib/api';
import { MaterialClass } from '@/types';
import { useToast } from '@/lib/use-toast';

const MaterialClassDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [materialClass, setMaterialClass] = useState<MaterialClass | null>(null);
  const [loading, setLoading] = useState(true);
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
    } catch (error) {
      console.error('Failed to load material class:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Falha ao carregar detalhes da classe de material",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-32">Carregando...</div>;
  }

  if (!materialClass) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-muted-foreground">Classe de material não encontrada</p>
        <Link to="/material-classes">
          <Button variant="link" className="mt-2">
            Voltar para a lista
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/material-classes">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-2xl font-bold">Detalhes da Classe de Material</h2>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl">Informações</CardTitle>
          <Link to={`/material-classes/${materialClass.id}/edit`}>
            <Button variant="outline" size="sm">
              <Pencil className="mr-2 h-4 w-4" /> Editar
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="pt-6">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Código</dt>
              <dd className="text-lg font-semibold">{materialClass.code}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Nome</dt>
              <dd className="text-lg">{materialClass.name}</dd>
            </div>
            {materialClass.created_at && (
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Criado em</dt>
                <dd className="text-sm">{new Date(materialClass.created_at).toLocaleString()}</dd>
              </div>
            )}
            {materialClass.updated_at && (
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Atualizado em</dt>
                <dd className="text-sm">{new Date(materialClass.updated_at).toLocaleString()}</dd>
              </div>
            )}
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categorias de Materiais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6 text-muted-foreground">
            Nenhuma categoria cadastrada nesta classe.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaterialClassDetail;
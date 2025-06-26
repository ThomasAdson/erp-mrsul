import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createMaterialClass } from '@/lib/api';
import { useToast } from '@/lib/use-toast';

const MaterialClassCreate = () => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
      setLoading(true);
      await createMaterialClass({ code, name });
      toast({
        title: "Sucesso",
        description: "Classe de material criada com sucesso",
      });
      navigate('/material-classes');
    } catch (error: any) {
      console.error('Failed to create material class:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message || "Falha ao criar classe de material",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Nova Classe de Material</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="code">Código</Label>
              <Input
                id="code"
                placeholder="Ex: MAT"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                disabled={loading}
              />
              <p className="text-sm text-muted-foreground">
                O código deve ser único e será usado para gerar códigos de materiais.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Ex: Matéria Prima"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => navigate('/material-classes')}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default MaterialClassCreate;
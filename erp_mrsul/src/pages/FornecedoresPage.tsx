import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/lib/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  createFornecedor,
  getAllFornecedores,
  updateFornecedor,
  deleteFornecedor,
  type Fornecedor,
  type CreateFornecedorRequest,
  type UpdateFornecedorRequest
} from '@/lib/api';

// Estados brasileiros
const ESTADOS_BRASIL = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

// Função para formatar CNPJ
const formatCNPJ = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  const match = digits.match(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})$/);
  if (!match) return digits;
  
  const [, group1, group2, group3, group4, group5] = match;
  let formatted = group1;
  if (group2) formatted += `.${group2}`;
  if (group3) formatted += `.${group3}`;
  if (group4) formatted += `/${group4}`;
  if (group5) formatted += `-${group5}`;
  
  return formatted;
};

// Função para formatar CEP
const formatCEP = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  const match = digits.match(/^(\d{0,5})(\d{0,3})$/);
  if (!match) return digits;
  
  const [, group1, group2] = match;
  if (group2) return `${group1}-${group2}`;
  return group1;
};

// Função para formatar telefone
const formatTelefone = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  const match = digits.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
  if (!match) return digits;
  
  const [, ddd, part1, part2] = match;
  let formatted = '';
  if (ddd) formatted += `(${ddd}`;
  if (part1) formatted += `) ${part1}`;
  if (part2) formatted += `-${part2}`;
  
  return formatted;
};

export default function FornecedoresPage() {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingFornecedor, setEditingFornecedor] = useState<Fornecedor | null>(null);

  const [formData, setFormData] = useState<CreateFornecedorRequest>({
    nome_fantasia: '',
    razao_social: '',
    cnpj: '',
    inscricao_estadual: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone: '',
    email: '',
    observacoes: '',
  });

  const [editFormData, setEditFormData] = useState<Partial<CreateFornecedorRequest>>({});

  const { toast } = useToast();

  useEffect(() => {
    loadFornecedores();
  }, []);
  const loadFornecedores = async () => {
    try {
      setLoading(true);
      const response = await getAllFornecedores();
      setFornecedores(response);
    } catch (error) {
      console.error('Erro ao carregar fornecedores:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar fornecedores: " + (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  const handleCreateFornecedor = async () => {
    try {
      const request = {
        ...formData,
        // Remover formatação do CNPJ para salvar
        cnpj: formData.cnpj.replace(/\D/g, ''),
        // Remover formatação do CEP para salvar
        cep: formData.cep?.replace(/\D/g, '') || '',
        // Remover formatação do telefone para salvar
        telefone: formData.telefone?.replace(/\D/g, '') || '',
      };

      await createFornecedor(request);
      
      toast({
        title: "Sucesso",
        description: "Fornecedor criado com sucesso!",
      });
      
      setIsCreateDialogOpen(false);
      setFormData({
        nome_fantasia: '',
        razao_social: '',
        cnpj: '',
        inscricao_estadual: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: '',
        telefone: '',
        email: '',
        observacoes: '',
      });
      
      await loadFornecedores();
    } catch (error) {
      console.error('Erro ao criar fornecedor:', error);
      toast({
        title: "Erro",
        description: "Erro ao criar fornecedor: " + (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const openEditDialog = (fornecedor: Fornecedor) => {
    setEditingFornecedor(fornecedor);
    setEditFormData({
      nome_fantasia: fornecedor.nome_fantasia,
      razao_social: fornecedor.razao_social,
      cnpj: formatCNPJ(fornecedor.cnpj),
      inscricao_estadual: fornecedor.inscricao_estadual || '',
      endereco: fornecedor.endereco || '',
      cidade: fornecedor.cidade || '',
      estado: fornecedor.estado || '',
      cep: fornecedor.cep ? formatCEP(fornecedor.cep) : '',
      telefone: fornecedor.telefone ? formatTelefone(fornecedor.telefone) : '',
      email: fornecedor.email || '',
      observacoes: fornecedor.observacoes || '',
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdateFornecedor = async () => {
    if (!editingFornecedor) return;

    try {
      const request = {
        ...editFormData,
        // Remover formatação para salvar
        cnpj: editFormData.cnpj ? editFormData.cnpj.replace(/\D/g, '') : undefined,
        cep: editFormData.cep ? editFormData.cep.replace(/\D/g, '') : undefined,
        telefone: editFormData.telefone ? editFormData.telefone.replace(/\D/g, '') : undefined,
      };      await updateFornecedor(editingFornecedor.id, request);
      
      toast({
        title: "Sucesso",
        description: "Fornecedor atualizado com sucesso!",
      });
      
      setIsEditDialogOpen(false);
      setEditingFornecedor(null);
      await loadFornecedores();
    } catch (error) {
      console.error('Erro ao atualizar fornecedor:', error);
      toast({
        title: "Erro",
        description: "Erro ao atualizar fornecedor: " + (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteFornecedor = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este fornecedor?')) {
      return;
    }    try {
      await deleteFornecedor(id);
      
      toast({
        title: "Sucesso",
        description: "Fornecedor excluído com sucesso!",
      });
      
      await loadFornecedores();
    } catch (error) {
      console.error('Erro ao excluir fornecedor:', error);
      toast({
        title: "Erro",
        description: "Erro ao excluir fornecedor: " + (error as Error).message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-center">
          <p>Carregando fornecedores...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Fornecedores
              </CardTitle>
              <CardDescription>
                {fornecedores.length} fornecedor(es) cadastrado(s)
              </CardDescription>
            </div>
            <Button onClick={() => setIsCreateDialogOpen(true)} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Novo Fornecedor
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {fornecedores.length === 0 ? (
            <div className="text-center py-8">
              <Building2 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-muted-foreground mb-4">Nenhum fornecedor cadastrado.</p>
              <Button 
                onClick={() => setIsCreateDialogOpen(true)} 
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="mr-2 h-4 w-4" />
                Cadastrar primeiro fornecedor
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome Fantasia</TableHead>
                  <TableHead>Razão Social</TableHead>
                  <TableHead>CNPJ</TableHead>
                  <TableHead>Cidade/UF</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fornecedores.map((fornecedor) => (
                  <TableRow key={fornecedor.id}>
                    <TableCell className="font-medium">
                      {fornecedor.nome_fantasia}
                    </TableCell>
                    <TableCell>{fornecedor.razao_social}</TableCell>
                    <TableCell>{formatCNPJ(fornecedor.cnpj)}</TableCell>
                    <TableCell>
                      {fornecedor.cidade && fornecedor.estado 
                        ? `${fornecedor.cidade}/${fornecedor.estado}` 
                        : fornecedor.cidade || fornecedor.estado || '-'}
                    </TableCell>
                    <TableCell>
                      {fornecedor.telefone ? formatTelefone(fornecedor.telefone) : '-'}
                    </TableCell>
                    <TableCell>{fornecedor.email || '-'}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openEditDialog(fornecedor)}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteFornecedor(fornecedor.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Modal de Criar Fornecedor */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Novo Fornecedor</DialogTitle>
            <DialogDescription>
              Cadastre um novo fornecedor no sistema.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="nome_fantasia">Nome Fantasia *</Label>
                <Input
                  id="nome_fantasia"
                  value={formData.nome_fantasia}
                  onChange={(e) => setFormData(prev => ({ ...prev, nome_fantasia: e.target.value }))}
                  placeholder="Nome fantasia do fornecedor"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="razao_social">Razão Social *</Label>
                <Input
                  id="razao_social"
                  value={formData.razao_social}
                  onChange={(e) => setFormData(prev => ({ ...prev, razao_social: e.target.value }))}
                  placeholder="Razão social do fornecedor"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input
                  id="cnpj"
                  value={formData.cnpj}
                  onChange={(e) => setFormData(prev => ({ ...prev, cnpj: formatCNPJ(e.target.value) }))}
                  placeholder="00.000.000/0000-00"
                  maxLength={18}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="inscricao_estadual">Inscrição Estadual</Label>
                <Input
                  id="inscricao_estadual"
                  value={formData.inscricao_estadual}
                  onChange={(e) => setFormData(prev => ({ ...prev, inscricao_estadual: e.target.value }))}
                  placeholder="Inscrição estadual"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                id="endereco"
                value={formData.endereco}
                onChange={(e) => setFormData(prev => ({ ...prev, endereco: e.target.value }))}
                placeholder="Endereço completo"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  value={formData.cidade}
                  onChange={(e) => setFormData(prev => ({ ...prev, cidade: e.target.value }))}
                  placeholder="Cidade"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="estado">Estado (UF)</Label>
                <Select 
                  value={formData.estado} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, estado: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                  <SelectContent>
                    {ESTADOS_BRASIL.map((uf) => (
                      <SelectItem key={uf} value={uf}>{uf}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cep">CEP</Label>
                <Input
                  id="cep"
                  value={formData.cep}
                  onChange={(e) => setFormData(prev => ({ ...prev, cep: formatCEP(e.target.value) }))}
                  placeholder="00000-000"
                  maxLength={9}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  value={formData.telefone}
                  onChange={(e) => setFormData(prev => ({ ...prev, telefone: formatTelefone(e.target.value) }))}
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="email@fornecedor.com"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="observacoes">Observações</Label>
              <Textarea
                id="observacoes"
                value={formData.observacoes}
                onChange={(e) => setFormData(prev => ({ ...prev, observacoes: e.target.value }))}
                placeholder="Observações adicionais sobre o fornecedor"
                rows={3}
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              onClick={handleCreateFornecedor}
              disabled={!formData.nome_fantasia.trim() || !formData.razao_social.trim() || !formData.cnpj.trim()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Criar Fornecedor
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Editar Fornecedor */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Fornecedor</DialogTitle>
            <DialogDescription>
              Edite as informações do fornecedor.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="edit_nome_fantasia">Nome Fantasia *</Label>
                <Input
                  id="edit_nome_fantasia"
                  value={editFormData.nome_fantasia || ''}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, nome_fantasia: e.target.value }))}
                  placeholder="Nome fantasia do fornecedor"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit_razao_social">Razão Social *</Label>
                <Input
                  id="edit_razao_social"
                  value={editFormData.razao_social || ''}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, razao_social: e.target.value }))}
                  placeholder="Razão social do fornecedor"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="edit_cnpj">CNPJ *</Label>
                <Input
                  id="edit_cnpj"
                  value={editFormData.cnpj || ''}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, cnpj: formatCNPJ(e.target.value) }))}
                  placeholder="00.000.000/0000-00"
                  maxLength={18}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit_inscricao_estadual">Inscrição Estadual</Label>
                <Input
                  id="edit_inscricao_estadual"
                  value={editFormData.inscricao_estadual || ''}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, inscricao_estadual: e.target.value }))}
                  placeholder="Inscrição estadual"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="edit_endereco">Endereço</Label>
              <Input
                id="edit_endereco"
                value={editFormData.endereco || ''}
                onChange={(e) => setEditFormData(prev => ({ ...prev, endereco: e.target.value }))}
                placeholder="Endereço completo"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="edit_cidade">Cidade</Label>
                <Input
                  id="edit_cidade"
                  value={editFormData.cidade || ''}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, cidade: e.target.value }))}
                  placeholder="Cidade"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit_estado">Estado (UF)</Label>
                <Select 
                  value={editFormData.estado || ''} 
                  onValueChange={(value) => setEditFormData(prev => ({ ...prev, estado: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                  <SelectContent>
                    {ESTADOS_BRASIL.map((uf) => (
                      <SelectItem key={uf} value={uf}>{uf}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit_cep">CEP</Label>
                <Input
                  id="edit_cep"
                  value={editFormData.cep || ''}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, cep: formatCEP(e.target.value) }))}
                  placeholder="00000-000"
                  maxLength={9}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="edit_telefone">Telefone</Label>
                <Input
                  id="edit_telefone"
                  value={editFormData.telefone || ''}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, telefone: formatTelefone(e.target.value) }))}
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit_email">E-mail</Label>
                <Input
                  id="edit_email"
                  type="email"
                  value={editFormData.email || ''}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="email@fornecedor.com"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="edit_observacoes">Observações</Label>
              <Textarea
                id="edit_observacoes"
                value={editFormData.observacoes || ''}
                onChange={(e) => setEditFormData(prev => ({ ...prev, observacoes: e.target.value }))}
                placeholder="Observações adicionais sobre o fornecedor"
                rows={3}
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              onClick={handleUpdateFornecedor}
              disabled={!editFormData.nome_fantasia?.trim() || !editFormData.razao_social?.trim() || !editFormData.cnpj?.trim()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Atualizar Fornecedor
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

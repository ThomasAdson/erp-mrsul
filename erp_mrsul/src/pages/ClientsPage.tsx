import { useEffect, useState } from 'react';
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/lib/use-toast';
import { Client } from '@/types';
import { createClient, getAllClients, updateClient, deleteClient } from '@/lib/api';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '../components/ui/textarea';

// CNPJ mask function
function maskCNPJ(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .slice(0, 18);
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    cnpj: '',
    address: '',
    phone: '',
    email: '',
    notes: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    try {
      setClients(await getAllClients());
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Falha ao carregar clientes: ' + err.message
      });
    }
  };  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!form.name.trim()) {
      toast({
        variant: 'destructive',
        title: 'Erro de validação',
        description: 'Nome é obrigatório'
      });
      return;
    }
    
    if (!form.cnpj.trim()) {
      toast({
        variant: 'destructive',
        title: 'Erro de validação',
        description: 'CNPJ é obrigatório'
      });
      return;
    }
    
    // Remove formatação do CNPJ para enviar apenas números
    const cleanedForm = {
      ...form,
      cnpj: form.cnpj.replace(/[^\d]/g, ''),
      address: form.address || undefined,
      phone: form.phone || undefined,
      email: form.email || undefined,
      notes: form.notes || undefined
    };
    
    console.log('Attempting to create/update client with form data:', cleanedForm);
    
    try {
      if (editingId) {
        console.log('Updating client with ID:', editingId);
        await updateClient(editingId, cleanedForm);
        toast({ title: 'Cliente atualizado com sucesso!' });
      } else {
        console.log('Creating new client...');
        const result = await createClient(cleanedForm);
        console.log('Client creation result:', result);
        toast({ title: 'Cliente cadastrado com sucesso!' });
      }
      setModalOpen(false);
      setForm({ name: '', cnpj: '', address: '', phone: '', email: '', notes: '' });
      setEditingId(null);
      loadClients();
    } catch (err: any) {
      console.error('Error in handleSubmit:', err);
      console.error('Error details:', {
        message: err?.message,
        stack: err?.stack,
        name: err?.name,
        fullError: err
      });
      
      let errorMessage = 'Erro desconhecido';
      if (err?.message) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      } else {
        errorMessage = JSON.stringify(err);
      }
      
      toast({
        variant: 'destructive',
        title: 'Erro ao salvar cliente',
        description: errorMessage
      });
    }
  };

  const startEdit = (client: Client) => {
    setEditingId(client.id);
    setForm({
      name: client.name,
      cnpj: client.cnpj,
      address: client.address || '',
      phone: client.phone || '',
      email: client.email || '',
      notes: client.notes || ''
    });
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Tem certeza que deseja excluir este cliente?')) return;
    try {
      await deleteClient(id);
      toast({ title: 'Cliente excluído com sucesso!' });
      loadClients();
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: err.message
      });
    }
  };

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Clientes</CardTitle>
          <Button onClick={() => {
            setEditingId(null);
            setForm({ name: '', cnpj: '', address: '', phone: '', email: '', notes: '' });
            setModalOpen(true);
          }}>
            <Plus className="mr-2 h-4 w-4" />
            Novo Cliente
          </Button>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-3.5 text-left text-sm font-semibold">Nome</th>
                  <th className="px-4 py-3.5 text-left text-sm font-semibold">CNPJ</th>
                  <th className="px-4 py-3.5 text-right text-sm font-semibold">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {clients.map(client => (
                  <tr key={client.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-4 text-sm">{client.name}</td>
                    <td className="px-4 py-4 text-sm font-mono">{client.cnpj}</td>
                    <td className="px-4 py-4 text-sm text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => startEdit(client)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(client.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
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
            <DialogTitle>{editingId ? 'Editar Cliente' : 'Novo Cliente'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                value={form.cnpj}
                onChange={e => setForm(f => ({ ...f, cnpj: maskCNPJ(e.target.value) }))}
                maxLength={18}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input
                id="address"
                value={form.address}
                onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Observações</Label>                <Textarea
                id="notes"
                value={form.notes}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm(f => ({ ...f, notes: e.target.value }))}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setModalOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit">
                {editingId ? 'Salvar' : 'Criar'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

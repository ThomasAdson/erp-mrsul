import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, Eye, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/lib/use-toast';
import { 
  getAllEquipment, 
  createEquipment, 
  updateEquipment, 
  deleteEquipment,
  getAllClients,
  getAllProjects,
  migrateEquipmentDatabase
} from '@/lib/api';
import { 
  Equipment, 
  CreateEquipmentRequest, 
  UpdateEquipmentRequest, 
  Client, 
  Project,
  EQUIPMENT_TYPE_OPTIONS 
} from '@/types';

interface EquipmentFormData extends Omit<CreateEquipmentRequest, 'client_id' | 'project_id'> {
  client_id: string;
  project_id: string;
  start_date: string;
  end_date?: string;
}

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);  const [searchTerm, setSearchTerm] = useState('');  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingEquipment, setEditingEquipment] = useState<Equipment | null>(null);const [formData, setFormData] = useState<EquipmentFormData>({
    client_id: '',
    project_id: '',
    equipment_type: '',
    start_date: '',
    end_date: '',
  });
  const [editFormData, setEditFormData] = useState<UpdateEquipmentRequest>({
    client_id: '',
    project_id: '',
    equipment_type: '',
    serial_number: '',
    start_date: '',
    end_date: '',
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  // Load initial data
  useEffect(() => {
    loadData();
  }, []);

  // Filter projects when selected client changes
  useEffect(() => {
    if (formData.client_id) {
      const clientProjects = projects.filter(p => p.client_id === formData.client_id);
      setFilteredProjects(clientProjects);
      
      // Reset project selection if current project doesn't belong to selected client
      if (formData.project_id && !clientProjects.find(p => p.id === formData.project_id)) {
        setFormData(prev => ({ ...prev, project_id: '' }));
      }
    } else {
      setFilteredProjects([]);
      setFormData(prev => ({ ...prev, project_id: '' }));
    }
  }, [formData.client_id, projects]);

  // Filter projects for edit form
  useEffect(() => {
    if (editFormData.client_id) {
      const clientProjects = projects.filter(p => p.client_id === editFormData.client_id);
      setFilteredProjects(clientProjects);
    }
  }, [editFormData.client_id, projects]);
  const loadData = async () => {
    try {
      setLoading(true);
      console.log('🔄 [FRONTEND] Loading equipment page data...');
      
      // Execute migration first to ensure table has correct schema
      console.log('🔄 [FRONTEND] Running equipment database migration...');
      await migrateEquipmentDatabase();
      console.log('✅ [FRONTEND] Equipment database migration completed');
      
      const [equipmentData, clientsData, projectsData] = await Promise.all([
        getAllEquipment(),
        getAllClients(),
        getAllProjects()
      ]);
      
      setEquipment(equipmentData);
      setClients(clientsData);
      setProjects(projectsData);
      
      console.log('✅ [FRONTEND] Equipment page data loaded:', {
        equipment: equipmentData.length,
        clients: clientsData.length,
        projects: projectsData.length
      });
    } catch (error) {
      console.error('❌ [FRONTEND] Failed to load equipment data:', error);
      toast({
        title: "Erro",
        description: "Falha ao carregar dados dos equipamentos.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
      if (!formData.client_id || !formData.project_id || !formData.equipment_type || !formData.start_date) {
      toast({
        title: "Erro",
        description: "Cliente, projeto, tipo de equipamento e data de início são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log('🔄 [FRONTEND] Creating equipment:', formData);
        const newEquipment = await createEquipment({
        client_id: formData.client_id,
        project_id: formData.project_id,
        equipment_type: formData.equipment_type,
        start_date: formData.start_date,
        end_date: formData.end_date || undefined,
      });
      
      console.log('✅ [FRONTEND] Equipment created successfully:', newEquipment);
      
      setEquipment(prev => [newEquipment, ...prev]);
      setIsCreateDialogOpen(false);
      resetForm();
      
      toast({
        title: "Sucesso",
        description: `Equipamento ${newEquipment.serial_number} criado com sucesso!`,
      });
    } catch (error) {
      console.error('❌ [FRONTEND] Failed to create equipment:', error);
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Falha ao criar equipamento.",
        variant: "destructive",
      });
    }
  };
  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
      if (!editingEquipment || !editFormData.client_id || !editFormData.project_id || !editFormData.equipment_type || !editFormData.start_date) {
      toast({
        title: "Erro",
        description: "Cliente, projeto, tipo de equipamento e data de início são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log('🔄 [FRONTEND] Updating equipment:', editingEquipment.id, editFormData);
      
      await updateEquipment(editingEquipment.id, editFormData);
      
      console.log('✅ [FRONTEND] Equipment updated successfully');
      
      // Reload data to get updated information      await loadData();
      
      setIsEditDialogOpen(false);
      setEditingEquipment(null);
      
      toast({
        title: "Sucesso",
        description: "Equipamento atualizado com sucesso!",
      });
    } catch (error) {
      console.error('❌ [FRONTEND] Failed to update equipment:', error);
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Falha ao atualizar equipamento.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (equipmentToDelete: Equipment) => {
    if (!confirm(`Tem certeza que deseja excluir o equipamento ${equipmentToDelete.serial_number}?`)) {
      return;
    }

    try {
      console.log('🔄 [FRONTEND] Deleting equipment:', equipmentToDelete.id);
      
      await deleteEquipment(equipmentToDelete.id);
      
      console.log('✅ [FRONTEND] Equipment deleted successfully');
      
      setEquipment(prev => prev.filter(eq => eq.id !== equipmentToDelete.id));
      
      toast({
        title: "Sucesso",
        description: "Equipamento excluído com sucesso!",
      });
    } catch (error) {
      console.error('❌ [FRONTEND] Failed to delete equipment:', error);
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Falha ao excluir equipamento.",
        variant: "destructive",
      });
    }
  };  const openEditDialog = (equipmentToEdit: Equipment) => {
    setEditingEquipment(equipmentToEdit);
    setEditFormData({
      client_id: equipmentToEdit.client_id,
      project_id: equipmentToEdit.project_id,
      equipment_type: equipmentToEdit.equipment_type,
      serial_number: equipmentToEdit.serial_number,
      start_date: equipmentToEdit.start_date || '',
      end_date: equipmentToEdit.end_date || '',
    });
    setIsEditDialogOpen(true);
  };
  const openViewDialog = (equipmentToView: Equipment) => {
    navigate(`/equipment/${equipmentToView.id}`);
  };
  const resetForm = () => {
    setFormData({
      client_id: '',
      project_id: '',
      equipment_type: '',
      start_date: '',
      end_date: '',
    });
  };

  const filteredEquipment = equipment.filter(eq =>
    eq.serial_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eq.equipment_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eq.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eq.project_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getEquipmentTypeOption = (type: string) => {
    return EQUIPMENT_TYPE_OPTIONS.find(option => option.value === type);
  };

  console.log('🔄 [FRONTEND] Equipment component rendering, loading:', loading);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Carregando equipamentos...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Equipamentos</h1>
          <p className="text-muted-foreground">
            Gerencie os equipamentos dos projetos
          </p>
        </div>
        <Button onClick={() => setIsCreateDialogOpen(true)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Novo Equipamento
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por número de série, tipo, cliente ou projeto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      {/* Equipment List/Grid */}
      {filteredEquipment.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground">
            {equipment.length === 0 
              ? "Nenhum equipamento cadastrado. Crie o primeiro equipamento!" 
              : "Nenhum equipamento encontrado com os critérios de busca."}
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEquipment.map((eq) => {
            const equipmentOption = getEquipmentTypeOption(eq.equipment_type);
            
            return (
              <Card key={eq.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{eq.serial_number}</CardTitle>
                      <CardDescription>{eq.equipment_type}</CardDescription>
                    </div>
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openViewDialog(eq)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEditDialog(eq)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(eq)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Cliente:</span> {eq.client_name}
                    </div>                    <div>
                      <span className="font-medium">Projeto:</span> {eq.project_code}
                    </div>
                    {eq.start_date && (
                      <div>
                        <span className="font-medium">Data de Início:</span> {new Date(eq.start_date).toLocaleDateString('pt-BR')}
                      </div>
                    )}
                    {eq.end_date && (
                      <div>
                        <span className="font-medium">Data de Término:</span> {new Date(eq.end_date).toLocaleDateString('pt-BR')}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Create Equipment Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Criar Novo Equipamento</DialogTitle>
            <DialogDescription>
              Adicione um novo equipamento ao sistema. O número de série será gerado automaticamente.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <Label htmlFor="client">Cliente *</Label>
              <select
                id="client"
                className="w-full mt-1 p-2 border rounded-md"
                value={formData.client_id}
                onChange={(e) => setFormData(prev => ({ ...prev, client_id: e.target.value }))}
                required
              >
                <option value="">Selecione um cliente</option>
                {clients.map(client => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="project">Projeto *</Label>
              <select
                id="project"
                className="w-full mt-1 p-2 border rounded-md"
                value={formData.project_id}
                onChange={(e) => setFormData(prev => ({ ...prev, project_id: e.target.value }))}
                required
                disabled={!formData.client_id}
              >
                <option value="">
                  {formData.client_id ? 'Selecione um projeto' : 'Primeiro selecione um cliente'}
                </option>
                {filteredProjects.map(project => (
                  <option key={project.id} value={project.id}>
                    {project.code} - {project.name}
                  </option>
                ))}
              </select>
            </div>            <div>
              <Label htmlFor="equipment_type">Tipo de Equipamento *</Label>
              <select
                id="equipment_type"
                className="w-full mt-1 p-2 border rounded-md"
                value={formData.equipment_type}
                onChange={(e) => setFormData(prev => ({ ...prev, equipment_type: e.target.value }))}
                required
              >
                <option value="">Selecione o tipo</option>
                {EQUIPMENT_TYPE_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label} {option.prefix && `(${option.prefix})`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="start_date">Data de Início *</Label>
              <Input
                id="start_date"
                type="date"
                value={formData.start_date}
                onChange={(e) => setFormData(prev => ({ ...prev, start_date: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="end_date">Data de Término</Label>
              <Input
                id="end_date"
                type="date"
                value={formData.end_date}
                onChange={(e) => setFormData(prev => ({ ...prev, end_date: e.target.value }))}
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsCreateDialogOpen(false);
                  resetForm();
                }}
              >
                Cancelar
              </Button>
              <Button type="submit">Criar Equipamento</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Editar Equipamento</DialogTitle>
            <DialogDescription>
              Modifique as informações do equipamento.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEdit} className="space-y-4">
            <div>
              <Label htmlFor="edit_client">Cliente *</Label>
              <select
                id="edit_client"
                className="w-full mt-1 p-2 border rounded-md"
                value={editFormData.client_id}
                onChange={(e) => setEditFormData(prev => ({ ...prev, client_id: e.target.value }))}
                required
              >
                <option value="">Selecione um cliente</option>
                {clients.map(client => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="edit_project">Projeto *</Label>
              <select
                id="edit_project"
                className="w-full mt-1 p-2 border rounded-md"
                value={editFormData.project_id}
                onChange={(e) => setEditFormData(prev => ({ ...prev, project_id: e.target.value }))}
                required
                disabled={!editFormData.client_id}
              >
                <option value="">
                  {editFormData.client_id ? 'Selecione um projeto' : 'Primeiro selecione um cliente'}
                </option>
                {filteredProjects.map(project => (
                  <option key={project.id} value={project.id}>
                    {project.code} - {project.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="edit_equipment_type">Tipo de Equipamento *</Label>
              <select
                id="edit_equipment_type"
                className="w-full mt-1 p-2 border rounded-md"
                value={editFormData.equipment_type}
                onChange={(e) => setEditFormData(prev => ({ ...prev, equipment_type: e.target.value }))}
                required
              >
                <option value="">Selecione o tipo</option>
                {EQUIPMENT_TYPE_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label} {option.prefix && `(${option.prefix})`}
                  </option>
                ))}
              </select>
            </div>            <div>
              <Label htmlFor="edit_serial_number">Número de Série *</Label>
              <Input
                id="edit_serial_number"
                value={editFormData.serial_number}
                onChange={(e) => setEditFormData(prev => ({ ...prev, serial_number: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="edit_start_date">Data de Início *</Label>
              <Input
                id="edit_start_date"
                type="date"
                value={editFormData.start_date}
                onChange={(e) => setEditFormData(prev => ({ ...prev, start_date: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="edit_end_date">Data de Término</Label>
              <Input
                id="edit_end_date"
                type="date"
                value={editFormData.end_date}
                onChange={(e) => setEditFormData(prev => ({ ...prev, end_date: e.target.value }))}
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsEditDialogOpen(false);
                  setEditingEquipment(null);
                }}
              >
                Cancelar
              </Button>
              <Button type="submit">Salvar Alterações</Button>
            </div>
          </form>        </DialogContent>
      </Dialog>
    </div>
  );
}

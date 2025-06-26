import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/lib/use-toast";
import { 
  createProject, 
  getAllProjects, 
  updateProject, 
  deleteProject,
  getAllClients 
} from "@/lib/api";
import { 
  Project, 
  CreateProjectRequest, 
  UpdateProjectRequest, 
  Client,
  PROJECT_STATUS_OPTIONS 
} from "@/types";

interface ProjectFormData {
  client_id: string;
  name: string;
  code: string;
  start_date: string;
  end_date: string;
  status: string;
  description: string;
}

const initialFormData: ProjectFormData = {
  client_id: '',
  name: '',
  code: '',
  start_date: '',
  end_date: '',
  status: 'Planejado',
  description: '',
};

export default function Projects() {
  console.log("🔧 Projects component is rendering");
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  console.log("🔧 Projects component state:", { 
    projectsCount: projects.length, 
    clientsCount: clients.length,
    isDialogOpen,
    isEditing 
  });
  // Load projects and clients on component mount
  useEffect(() => {
    console.log("🚀 Projects component mounted - initializing data load");
    loadProjects();
    loadClients();
  }, []);

  const loadProjects = async () => {
    try {
      console.log("📋 Loading projects...");
      const data = await getAllProjects();
      console.log("✅ Projects loaded successfully:", {
        count: data.length,
        projects: data.map(p => ({ id: p.id, name: p.name, client: p.client_name, status: p.status }))
      });
      setProjects(data);
    } catch (error) {
      console.error("❌ Error loading projects:", error);
      console.error("Error details:", {
        name: (error as any)?.name,
        message: (error as any)?.message,
        stack: (error as any)?.stack
      });
      toast({
        title: "Erro",
        description: "Falha ao carregar projetos",
        variant: "destructive",
      });
    }
  };

  const loadClients = async () => {
    try {
      console.log("👥 Loading clients for dropdown...");
      const data = await getAllClients();
      console.log("✅ Clients loaded successfully:", {
        count: data.length,
        clients: data.map(c => ({ id: c.id, name: c.name }))
      });
      setClients(data);
    } catch (error) {
      console.error("❌ Error loading clients:", error);
      console.error("Error details:", {
        name: (error as any)?.name,
        message: (error as any)?.message,
        stack: (error as any)?.stack
      });
      toast({
        title: "Erro",
        description: "Falha ao carregar clientes",
        variant: "destructive",
      });
    }
  };

  const cleanFormData = (data: ProjectFormData): CreateProjectRequest | UpdateProjectRequest => {
    const cleaned: any = {
      client_id: data.client_id.trim(),
      name: data.name.trim(),
      code: data.code.trim(),
      start_date: data.start_date,
      status: data.status,
    };

    // Only include end_date if it's not empty
    if (data.end_date && data.end_date.trim()) {
      cleaned.end_date = data.end_date;
    }

    // Only include description if it's not empty
    if (data.description && data.description.trim()) {
      cleaned.description = data.description.trim();
    }

    return cleaned;
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsEditing(false);
    setEditingId(null);
  };
  const openCreateDialog = () => {
    console.log("➕ Opening create project dialog");
    resetForm();
    setIsDialogOpen(true);
  };

  const openEditDialog = (project: Project) => {
    console.log("📝 Opening edit dialog for project:", {
      id: project.id,
      name: project.name,
      code: project.code,
      client: project.client_name
    });
    setFormData({
      client_id: project.client_id,
      name: project.name,
      code: project.code,
      start_date: project.start_date,
      end_date: project.end_date || '',
      status: project.status,
      description: project.description || '',
    });
    setIsEditing(true);
    setEditingId(project.id);
    setIsDialogOpen(true);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("🔄 Starting form submission...");
      console.log("📝 Raw form data:", formData);
      console.log("🔍 Form validation check:");
      
      if (!formData.client_id.trim()) {
        console.log("❌ Validation failed: Cliente é obrigatório");
        toast({
          title: "Erro",
          description: "Cliente é obrigatório",
          variant: "destructive",
        });
        return;
      }

      if (!formData.name.trim()) {
        console.log("❌ Validation failed: Nome do projeto é obrigatório");
        toast({
          title: "Erro",
          description: "Nome do projeto é obrigatório",
          variant: "destructive",
        });
        return;
      }

      if (!formData.code.trim()) {
        console.log("❌ Validation failed: Código do projeto é obrigatório");
        toast({
          title: "Erro",
          description: "Código do projeto é obrigatório",
          variant: "destructive",
        });
        return;
      }

      if (!formData.start_date) {
        console.log("❌ Validation failed: Data de início é obrigatória");
        toast({
          title: "Erro",
          description: "Data de início é obrigatória",
          variant: "destructive",
        });
        return;
      }

      console.log("✅ All validations passed");

      const cleanedData = cleanFormData(formData);
      console.log("🧹 Cleaned data for API:", cleanedData);

      if (isEditing && editingId) {
        console.log("📝 Updating existing project with ID:", editingId);
        await updateProject(editingId, cleanedData);
        console.log("✅ Project updated successfully!");
        toast({
          title: "Sucesso",
          description: "Projeto atualizado com sucesso!",
        });
      } else {
        console.log("➕ Creating new project");
        const newProject = await createProject(cleanedData);
        console.log("✅ Project created successfully:", newProject);
        toast({
          title: "Sucesso",
          description: "Projeto criado com sucesso!",
        });
      }

      console.log("🔄 Refreshing project list...");
      setIsDialogOpen(false);
      resetForm();
      await loadProjects();
      console.log("✅ Form submission completed successfully");
    } catch (error) {
      console.error("❌ Error saving project:", error);
      console.error("🔍 Detailed error information:", {
        name: (error as any)?.name,
        message: (error as any)?.message,
        stack: (error as any)?.stack,
        formData: formData,
        isEditing: isEditing,
        editingId: editingId
      });
      toast({
        title: "Erro",
        description: `Falha ao ${isEditing ? 'atualizar' : 'criar'} projeto: ${(error as any)?.message || 'Erro desconhecido'}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      console.log("🏁 Form submission process finished");
    }
  };
  const handleDelete = async (id: string) => {
    console.log("🗑️ Delete request for project ID:", id);
    
    if (!confirm("Tem certeza que deseja excluir este projeto?")) {
      console.log("❌ Delete cancelled by user");
      return;
    }

    try {
      console.log("🔄 Proceeding with project deletion...");
      await deleteProject(id);
      console.log("✅ Project deleted successfully");
      toast({
        title: "Sucesso",
        description: "Projeto excluído com sucesso!",
      });
      console.log("🔄 Refreshing project list after deletion...");
      await loadProjects();
    } catch (error) {
      console.error("❌ Error deleting project:", error);
      console.error("🔍 Delete error details:", {
        projectId: id,
        error: (error as any)?.message,
        stack: (error as any)?.stack
      });
      toast({
        title: "Erro",
        description: `Falha ao excluir projeto: ${(error as any)?.message || 'Erro desconhecido'}`,
        variant: "destructive",
      });
    }
  };
  const handleInputChange = (field: keyof ProjectFormData, value: string) => {
    console.log(`📝 Form field updated - ${field}:`, value);
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      console.log("📋 Updated form state:", newData);
      return newData;
    });
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('pt-BR');
    } catch {
      return dateString;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Em Andamento':
        return 'bg-blue-100 text-blue-800';
      case 'Concluído':
        return 'bg-green-100 text-green-800';
      case 'Cancelado':
        return 'bg-red-100 text-red-800';
      case 'Suspenso':
        return 'bg-yellow-100 text-yellow-800';
      case 'Planejado':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projetos</h1>
        
        <Button 
          onClick={openCreateDialog}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2"
        >
          + Novo Projeto
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEditing ? 'Editar Projeto' : 'Novo Projeto'}
            </DialogTitle>
          </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client_id">Cliente *</Label>
                  <select
                    id="client_id"
                    value={formData.client_id}
                    onChange={(e) => handleInputChange('client_id', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Selecione um cliente</option>
                    {clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    {PROJECT_STATUS_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do Projeto *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Digite o nome do projeto"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="code">Código do Projeto *</Label>
                  <Input
                    id="code"
                    type="text"
                    value={formData.code}
                    onChange={(e) => handleInputChange('code', e.target.value)}
                    placeholder="Digite o código do projeto"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start_date">Data de Início *</Label>
                  <Input
                    id="start_date"
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => handleInputChange('start_date', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end_date">Data de Conclusão</Label>
                  <Input
                    id="end_date"
                    type="date"
                    value={formData.end_date}
                    onChange={(e) => handleInputChange('end_date', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Digite a descrição do projeto"
                  rows={3}
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Salvando...' : (isEditing ? 'Atualizar' : 'Criar')}
                </Button>
              </div>            </form>
          </DialogContent>
        </Dialog>

      <div className="grid gap-4">
        {projects.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-gray-500">Nenhum projeto encontrado</p>
            </CardContent>
          </Card>
        ) : (
          projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">
                      Código: {project.code} | Cliente: {project.client_name}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(project.status)}`}>
                      {project.status}
                    </span>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditDialog(project)}
                      >
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(project.id)}
                      >
                        Excluir
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Início:</span> {formatDate(project.start_date)}
                  </div>
                  <div>
                    <span className="font-medium">Conclusão:</span> {project.end_date ? formatDate(project.end_date) : 'Não definida'}
                  </div>
                </div>
                {project.description && (
                  <div className="mt-3">
                    <span className="font-medium text-sm">Descrição:</span>
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  </div>
                )}
                <div className="mt-3 text-xs text-gray-500">
                  Criado em: {formatDate(project.created_at)}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

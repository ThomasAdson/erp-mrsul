import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit2, Settings, FileText, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useToast } from '@/lib/use-toast';
import { getEquipment, getEquipmentSpecifications, saveEquipmentSpecifications } from '@/lib/api';
import { Equipment, EQUIPMENT_TYPE_OPTIONS, EQUIPMENT_FIELD_DEFINITIONS } from '@/types';
import { ProductionOrdersSection } from '@/components/ProductionOrdersSection';

const EquipmentProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState<Equipment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [specifications, setSpecifications] = useState<Record<string, any>>({});
  const [savingSpecs, setSavingSpecs] = useState(false);
  const { toast } = useToast();
  useEffect(() => {
    if (id) {
      loadEquipment(id);
      loadSpecifications(id);
    }
  }, [id]);

  const loadEquipment = async (equipmentId: string) => {
    try {
      setLoading(true);
      setError(null);
      console.log('🔄 [FRONTEND] Loading equipment profile:', equipmentId);
      
      const data = await getEquipment(equipmentId);
      setEquipment(data);
      
      console.log('✅ [FRONTEND] Equipment profile loaded:', data);
    } catch (error) {
      console.error('❌ [FRONTEND] Failed to load equipment:', error);
      setError(error instanceof Error ? error.message : 'Erro ao carregar equipamento');
      toast({
        title: "Erro",
        description: "Não foi possível carregar os dados do equipamento.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadSpecifications = async (equipmentId: string) => {
    try {
      console.log('🔄 [FRONTEND] Loading equipment specifications:', equipmentId);
      
      // Carregar especificações existentes do banco de dados
      const existingSpecs = await getEquipmentSpecifications(equipmentId);
      
      // Converter array de especificações para objeto
      const specsObject: Record<string, any> = {};
      if (existingSpecs && existingSpecs.length > 0) {
        existingSpecs.forEach(spec => {
          specsObject[spec.field_key] = spec.field_value || '';
        });
      }
      
      setSpecifications(specsObject);
      console.log('✅ [FRONTEND] Equipment specifications loaded:', specsObject);
    } catch (error) {
      console.error('❌ [FRONTEND] Failed to load specifications:', error);
      // Não exibir toast de erro para especificações, pois é uma falha "silenciosa"
      // (pode não ter especificações salvas ainda)
    }
  };

  const getEquipmentTypeOption = (type: string) => {
    return EQUIPMENT_TYPE_OPTIONS.find(option => option.value === type);
  };
  const calculateGuarantee = (endDate: string | null) => {
    if (!endDate) return null;
    
    const end = new Date(endDate);
    // TODO: Check if maintenance contract is active
    // For now, assume no maintenance contract (+1 year)
    const guaranteeEnd = new Date(end);
    guaranteeEnd.setFullYear(guaranteeEnd.getFullYear() + 1);
    
    const now = new Date();
    const isActive = now <= guaranteeEnd;
    
    return {
      endDate: guaranteeEnd.toLocaleDateString('pt-BR'),
      isActive,
      daysRemaining: isActive ? Math.ceil((guaranteeEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : 0
    };
  };  const getFieldDefinitions = () => {
    if (!equipment) return [];
    return EQUIPMENT_FIELD_DEFINITIONS[equipment.equipment_type as keyof typeof EQUIPMENT_FIELD_DEFINITIONS] || [];
  };  const handleEditClick = async () => {
    if (!equipment) return;    
    setIsEditing(true);
    try {
      // Carregar especificações existentes do banco de dados
      const existingSpecs = await getEquipmentSpecifications(equipment.id);
      
      // Converter array de especificações para objeto
      const specsObject: Record<string, any> = {};
      if (existingSpecs && existingSpecs.length > 0) {
        existingSpecs.forEach(spec => {
          specsObject[spec.field_key] = spec.field_value || '';
        });
      }
      
      // Inicializar com field definitions e mesclar com dados existentes
      const fieldDefinitions = getFieldDefinitions();
      const initialSpecs: Record<string, any> = {};
      fieldDefinitions.forEach(field => {
        initialSpecs[field.key] = specsObject[field.key] || '';
      });
      
      setSpecifications(initialSpecs);
      console.log('📋 [FRONTEND] Loaded specifications:', initialSpecs);
      
      if (existingSpecs && existingSpecs.length > 0) {
        toast({
          title: "Especificações carregadas",
          description: `${existingSpecs.length} especificações encontradas.`,
          variant: "default",
        });
      }
    } catch (error) {
      console.error('❌ [FRONTEND] Failed to load specifications:', error);
      
      // Se o erro for por não ter especificações, apenas inicializar vazio
      const fieldDefinitions = getFieldDefinitions();
      const initialSpecs: Record<string, any> = {};
      fieldDefinitions.forEach(field => {
        initialSpecs[field.key] = '';
      });
      setSpecifications(initialSpecs);
      
      // Não mostrar toast de erro para equipamentos sem especificações
      console.log('📋 [FRONTEND] No specifications found, initialized empty form');
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSpecifications({});
  };  const handleSaveSpecifications = async () => {
    if (!equipment) return;
    
    try {
      setSavingSpecs(true);
      console.log('🔄 [FRONTEND] Starting save process for equipment specifications');
      console.log('🔄 [FRONTEND] Equipment ID:', equipment.id);
      console.log('🔄 [FRONTEND] Raw specifications:', specifications);
      
      // Filtrar apenas valores não vazios
      const filteredSpecs: Record<string, string> = {};
      Object.entries(specifications).forEach(([key, value]) => {
        if (value && value.toString().trim() !== '') {
          filteredSpecs[key] = value.toString();
        }
      });
      
      console.log('🔄 [FRONTEND] Filtered specifications to save:', filteredSpecs);
      console.log('🔄 [FRONTEND] Number of specifications to save:', Object.keys(filteredSpecs).length);
      
      const result = await saveEquipmentSpecifications(equipment.id, filteredSpecs);
      
      console.log('✅ [FRONTEND] Save result received:', result);
      console.log('✅ [FRONTEND] Number of specifications returned:', result.length);
      
      toast({
        title: "Especificações salvas!",
        description: `${result.length} especificações técnicas foram atualizadas com sucesso.`,
      });
      
      setIsEditing(false);
      console.log('✅ [FRONTEND] Save process completed successfully');
    } catch (error) {
      console.error('❌ [FRONTEND] Failed to save specifications:', error);
      toast({
        title: "Erro",
        description: "Não foi possível salvar as especificações.",
        variant: "destructive",
      });
    } finally {
      setSavingSpecs(false);
      console.log('🔄 [FRONTEND] Save process finished (finally block)');
    }
  };

  const handleSpecificationChange = (key: string, value: any) => {
    setSpecifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando equipamento...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Erro ao carregar equipamento</h3>
          <p className="text-muted-foreground mb-4">{error}</p>
          <div className="space-x-2">
            <Button onClick={() => id && loadEquipment(id)}>Tentar novamente</Button>
            <Button variant="outline" onClick={() => navigate('/equipment')}>
              Voltar para equipamentos
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!equipment) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Equipamento não encontrado</h3>
          <p className="text-muted-foreground mb-4">O equipamento solicitado não existe ou foi removido.</p>
          <Button onClick={() => navigate('/equipment')}>
            Voltar para equipamentos
          </Button>
        </div>
      </div>
    );
  }

  const equipmentOption = getEquipmentTypeOption(equipment.equipment_type);
  const guarantee = equipment.end_date ? calculateGuarantee(equipment.end_date) : null;
  const fieldDefinitions = getFieldDefinitions();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/equipment')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar</span>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{equipment.serial_number}</h1>
            <p className="text-muted-foreground">{equipment.equipment_type}</p>
          </div>        </div>
        <Button 
          className="flex items-center space-x-2"
          onClick={handleEditClick}
          disabled={isEditing}
        >
          <Edit2 className="h-4 w-4" />
          <span>{isEditing ? "Editando..." : "Editar"}</span>
        </Button>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Informações Gerais</span>
          </TabsTrigger>
          <TabsTrigger value="specs" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Especificações Técnicas</span>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Ordens de Produção</span>
          </TabsTrigger>
        </TabsList>

        {/* General Information Tab */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Informações Gerais
                {equipmentOption && (
                  <Badge variant="secondary">
                    {equipmentOption.prefix}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <Label className="font-medium text-muted-foreground">Número de Série</Label>
                  <p className="text-lg font-mono">{equipment.serial_number}</p>
                </div>
                
                <div>
                  <Label className="font-medium text-muted-foreground">Tipo de Equipamento</Label>
                  <p className="text-lg">{equipment.equipment_type}</p>
                </div>
                
                <div>
                  <Label className="font-medium text-muted-foreground">Cliente</Label>
                  <p className="text-lg">{equipment.client_name}</p>
                </div>
                
                <div>
                  <Label className="font-medium text-muted-foreground">Projeto</Label>
                  <p className="text-lg">{equipment.project_code} - {equipment.project_name}</p>
                </div>
                
                <div>
                  <Label className="font-medium text-muted-foreground">Data de Início</Label>
                  <p className="text-lg">
                    {equipment.start_date 
                      ? new Date(equipment.start_date).toLocaleDateString('pt-BR')
                      : 'Não definida'}
                  </p>
                </div>
                
                <div>
                  <Label className="font-medium text-muted-foreground">Data de Término</Label>
                  <p className="text-lg">
                    {equipment.end_date 
                      ? new Date(equipment.end_date).toLocaleDateString('pt-BR')
                      : 'Não definida'}
                  </p>
                </div>
                  {guarantee ? (
                  <div>
                    <Label className="font-medium text-muted-foreground">Garantia</Label>
                    <div className="flex items-center space-x-2">
                      <Badge variant={guarantee.isActive ? "default" : "secondary"}>
                        {guarantee.isActive ? "Ativa" : "Expirada"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        até {guarantee.endDate}
                      </span>
                    </div>
                    {guarantee.isActive && guarantee.daysRemaining > 0 && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {guarantee.daysRemaining} dias restantes
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <Label className="font-medium text-muted-foreground">Garantia</Label>
                    <p className="text-lg text-muted-foreground">Não definida</p>
                  </div>
                )}
                
                <div>
                  <Label className="font-medium text-muted-foreground">Data de Criação</Label>
                  <p className="text-lg">
                    {new Date(equipment.created_at).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>        {/* Technical Specifications Tab */}
        <TabsContent value="specs">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Especificações Técnicas
                {isEditing && (
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCancelEdit}
                      disabled={savingSpecs}
                    >
                      Cancelar
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSaveSpecifications}
                      disabled={savingSpecs}
                    >
                      {savingSpecs ? "Salvando..." : "Salvar"}
                    </Button>
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {fieldDefinitions.length > 0 ? (
                <div className="space-y-6">
                  {isEditing ? (
                    // Modo de edição - Formulário
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                      {fieldDefinitions.map((field: any, index: number) => (
                        <div key={index} className="space-y-2">
                          <Label htmlFor={field.key} className="font-medium">
                            {field.label}
                          </Label>
                          {field.type === 'select' ? (
                            <select
                              id={field.key}
                              value={specifications[field.key] || ''}
                              onChange={(e) => handleSpecificationChange(field.key, e.target.value)}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              disabled={field.readonly}
                            >
                              <option value="">Selecione...</option>
                              {field.options?.map((option: string) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          ) : field.type === 'number' ? (
                            <Input
                              id={field.key}
                              type="number"
                              value={specifications[field.key] || ''}
                              onChange={(e) => handleSpecificationChange(field.key, e.target.value)}
                              placeholder={`Digite ${field.label.toLowerCase()}`}
                              disabled={field.readonly}
                            />
                          ) : (
                            <Input
                              id={field.key}
                              type="text"
                              value={specifications[field.key] || ''}
                              onChange={(e) => handleSpecificationChange(field.key, e.target.value)}
                              placeholder={`Digite ${field.label.toLowerCase()}`}
                              disabled={field.readonly}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Modo de visualização - Tabela
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-border">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="px-4 py-3.5 text-left text-sm font-semibold">Especificação</th>
                            <th className="px-4 py-3.5 text-left text-sm font-semibold">Valor</th>
                            <th className="px-4 py-3.5 text-left text-sm font-semibold">Unidade</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-background">                          {fieldDefinitions.map((field: any, index: number) => (
                            <tr key={index} className="hover:bg-muted/50 transition-colors">
                              <td className="px-4 py-4 text-sm font-medium">{field.label}</td>
                              <td className="px-4 py-4 text-sm">
                                {specifications[field.key] ? (
                                  <span className="font-medium">{specifications[field.key]}</span>
                                ) : (
                                  <span className="text-muted-foreground">A definir</span>
                                )}
                              </td>
                              <td className="px-4 py-4 text-sm text-muted-foreground">
                                {field.type === 'number' && field.label.includes('(') ? 
                                  field.label.match(/\(([^)]+)\)/)?.[1] || '-' : '-'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {!isEditing && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-900 mb-1">
                            Como editar especificações
                          </h4>
                          <p className="text-sm text-blue-800">
                            Clique no botão "Editar" no canto superior direito para preencher as especificações técnicas deste equipamento.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Especificações não definidas</h3>
                  <p className="text-muted-foreground">
                    Não há especificações técnicas configuradas para este tipo de equipamento.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>        {/* Production Orders Tab */}
        <TabsContent value="orders">
          <ProductionOrdersSection equipmentId={equipment?.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EquipmentProfile;

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/lib/use-toast";
import { createClient, createProject } from "@/lib/api";
import { CreateProjectRequest } from "@/types";

export default function TestDataPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sampleClients = [
    {
      name: 'Empresa ABC Ltda',
      cnpj: '12.345.678/0001-90',
      address: 'Rua das Flores, 123, São Paulo, SP',
      phone: '(11) 98765-4321',
      email: 'contato@empresaabc.com.br',
      notes: 'Cliente principal de construção civil'
    },
    {
      name: 'Indústria XYZ S.A.',
      cnpj: '98.765.432/0001-10',
      address: 'Av. Industrial, 456, Santos, SP',
      phone: '(13) 87654-3210',
      email: 'vendas@industriaxyz.com.br',
      notes: 'Especializada em equipamentos industriais'
    },
    {
      name: 'Construtora Delta',
      cnpj: '11.222.333/0001-44',
      address: 'Rua dos Engenheiros, 789, Campinas, SP',
      phone: '(19) 76543-2109',
      email: 'projetos@construtoradelta.com.br',
      notes: 'Grandes projetos de infraestrutura'
    }
  ];

  const createTestData = async () => {
    setIsLoading(true);
    try {
      // Create clients first
      const createdClients = [];
      for (const clientData of sampleClients) {
        console.log('Creating client:', clientData);
        const client = await createClient(clientData);
        createdClients.push(client);
        console.log('Created client:', client);
      }

      // Create sample projects
      const sampleProjects: CreateProjectRequest[] = [
        {
          client_id: createdClients[0].id,
          name: 'Reforma do Escritório Central',
          code: 'REF-2025-001',
          start_date: '2025-06-15',
          end_date: '2025-08-30',
          status: 'Em Andamento',
          description: 'Reforma completa do escritório central incluindo modernização de sistemas elétricos e hidráulicos'
        },
        {
          client_id: createdClients[1].id,
          name: 'Instalação de Nova Linha de Produção',
          code: 'PROD-2025-002',
          start_date: '2025-07-01',
          end_date: '2025-12-15',
          status: 'Planejado',
          description: 'Instalação de equipamentos para nova linha de produção automatizada'
        },
        {
          client_id: createdClients[2].id,
          name: 'Construção do Complexo Residencial Jardins',
          code: 'CONST-2025-003',
          start_date: '2025-05-01',
          end_date: '2026-03-31',
          status: 'Em Andamento',
          description: 'Projeto de construção de complexo residencial com 200 unidades habitacionais'
        },
        {
          client_id: createdClients[0].id,
          name: 'Modernização do Sistema de TI',
          code: 'TI-2025-004',
          start_date: '2025-06-01',
          status: 'Planejado',
          description: 'Atualização completa da infraestrutura de TI da empresa'
        },
        {
          client_id: createdClients[1].id,
          name: 'Manutenção Preventiva Anual',
          code: 'MANUT-2025-005',
          start_date: '2025-04-01',
          end_date: '2025-04-30',
          status: 'Concluído',
          description: 'Manutenção preventiva anual de todos os equipamentos'
        }
      ];

      for (const projectData of sampleProjects) {
        console.log('Creating project:', projectData);
        const project = await createProject(projectData);
        console.log('Created project:', project);
      }

      toast({
        title: "Sucesso",
        description: `Dados de teste criados com sucesso! ${createdClients.length} clientes e ${sampleProjects.length} projetos.`,
      });
    } catch (error) {
      console.error('Error creating test data:', error);
      toast({
        title: "Erro",
        description: "Falha ao criar dados de teste",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dados de Teste</h1>
      
      <div className="space-y-4">
        <p className="text-gray-600">
          Esta página permite criar dados de teste para demonstrar a funcionalidade do sistema.
        </p>
        
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Criar Dados de Teste</h2>
          <p className="text-sm text-gray-600 mb-4">
            Isso criará 3 clientes e 5 projetos de exemplo.
          </p>
          
          <Button 
            onClick={createTestData} 
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? 'Criando...' : 'Criar Dados de Teste'}
          </Button>
        </div>
      </div>
    </div>
  );
}

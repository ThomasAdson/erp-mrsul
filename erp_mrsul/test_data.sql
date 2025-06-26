-- Test data for ERP system
-- This file contains sample data for testing the Projects functionality

-- Sample clients
INSERT OR IGNORE INTO clients (id, name, cnpj, address, phone, email, notes, created_at) VALUES
('client-1', 'Empresa ABC Ltda', '12.345.678/0001-90', 'Rua das Flores, 123, São Paulo, SP', '(11) 98765-4321', 'contato@empresaabc.com.br', 'Cliente principal de construção civil', datetime('now')),
('client-2', 'Indústria XYZ S.A.', '98.765.432/0001-10', 'Av. Industrial, 456, Santos, SP', '(13) 87654-3210', 'vendas@industriaxyz.com.br', 'Especializada em equipamentos industriais', datetime('now')),
('client-3', 'Construtora Delta', '11.222.333/0001-44', 'Rua dos Engenheiros, 789, Campinas, SP', '(19) 76543-2109', 'projetos@construtoradelta.com.br', 'Grandes projetos de infraestrutura', datetime('now'));

-- Sample projects
INSERT OR IGNORE INTO projects (id, client_id, name, code, start_date, end_date, status, description, created_at) VALUES
('project-1', 'client-1', 'Reforma do Escritório Central', 'REF-2025-001', '2025-06-15', '2025-08-30', 'Em Andamento', 'Reforma completa do escritório central incluindo modernização de sistemas elétricos e hidráulicos', datetime('now')),
('project-2', 'client-2', 'Instalação de Nova Linha de Produção', 'PROD-2025-002', '2025-07-01', '2025-12-15', 'Planejado', 'Instalação de equipamentos para nova linha de produção automatizada', datetime('now')),
('project-3', 'client-3', 'Construção do Complexo Residencial Jardins', 'CONST-2025-003', '2025-05-01', '2026-03-31', 'Em Andamento', 'Projeto de construção de complexo residencial com 200 unidades habitacionais', datetime('now')),
('project-4', 'client-1', 'Modernização do Sistema de TI', 'TI-2025-004', '2025-06-01', NULL, 'Planejado', 'Atualização completa da infraestrutura de TI da empresa', datetime('now')),
('project-5', 'client-2', 'Manutenção Preventiva Anual', 'MANUT-2025-005', '2025-04-01', '2025-04-30', 'Concluído', 'Manutenção preventiva anual de todos os equipamentos', datetime('now'));

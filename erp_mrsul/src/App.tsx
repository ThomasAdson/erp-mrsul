import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import MaterialClassesPage from './pages/material-classes/MaterialClassesPage';
import MaterialClassDetail from './pages/material-classes/MaterialClassDetail';
import MaterialClassCreate from './pages/material-classes/MaterialClassCreate';
import MaterialClassEdit from './pages/material-classes/MaterialClassEdit';
import Settings from './pages/Settings';
import Inventory from './pages/Inventory';
import Purchases from './pages/Purchases';
import ClientsPage from './pages/ClientsPage';
import Projects from './pages/Projects';
import Equipment from './pages/Equipment';
import EquipmentProfile from './pages/equipment/EquipmentProfile';
import CategoriasPage from './pages/CategoriasPage';
import MateriaisPage from './pages/MateriaisPage';
import TestDataPage from './pages/TestDataPage';
import StockMovementPage from './pages/StockMovementPage';
import StockHistoryPage from './pages/StockHistoryPage';
import FornecedoresPage from './pages/FornecedoresPage';
import PurchaseOrdersPage from './pages/PurchaseOrdersPage';
import PurchaseOrderDetailsPage from './pages/PurchaseOrderDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Dashboard /></Layout>} />
      <Route path="/material-classes" element={<Layout><MaterialClassesPage /></Layout>} />
      <Route path="/material-classes/create" element={<Layout><MaterialClassCreate /></Layout>} />
      <Route path="/material-classes/:id" element={<Layout><MaterialClassDetail /></Layout>} />
      <Route path="/material-classes/:id/edit" element={<Layout><MaterialClassEdit /></Layout>} />
      <Route path="/settings" element={<Layout><Settings /></Layout>} />
      <Route path="/inventory" element={<Layout><Inventory /></Layout>} />
      <Route path="/purchases" element={<Layout><Purchases /></Layout>} />
      <Route path="/purchase-orders" element={<Layout><PurchaseOrdersPage /></Layout>} />
      <Route path="/purchase-orders/:id" element={<Layout><PurchaseOrderDetailsPage /></Layout>} />
      <Route path="/clients" element={<Layout><ClientsPage /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/equipment" element={<Layout><Equipment /></Layout>} />
      <Route path="/equipment/:id" element={<Layout><EquipmentProfile /></Layout>} />
      <Route path="/categorias" element={<Layout><CategoriasPage /></Layout>} />
      <Route path="/materiais" element={<Layout><MateriaisPage /></Layout>} />
      <Route path="/fornecedores" element={<Layout><FornecedoresPage /></Layout>} />
      <Route path="/stock/movement" element={<Layout><StockMovementPage /></Layout>} />
      <Route path="/stock/history" element={<Layout><StockHistoryPage /></Layout>} />
      <Route path="/test-data" element={<Layout><TestDataPage /></Layout>} />
    </Routes>
  );
}

export default App;
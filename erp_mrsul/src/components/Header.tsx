import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const location = useLocation();
  
  // Determine title based on route
  const getTitle = () => {
    const path = location.pathname;
    
    if (path === '/') return 'Dashboard';
    if (path === '/material-classes') return 'Classes de Materiais';
    if (path === '/material-classes/create') return 'Nova Classe de Material';
    if (path.match(/\/material-classes\/[^/]+\/edit/)) return 'Editar Classe de Material';
    if (path.match(/\/material-classes\/[^/]+/)) return 'Detalhes da Classe de Material';
    
    return 'Industrial ERP';
  };
  
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-gray-800">{getTitle()}</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Usuário Admin</span>
      </div>
    </header>
  );
};

export default Header;
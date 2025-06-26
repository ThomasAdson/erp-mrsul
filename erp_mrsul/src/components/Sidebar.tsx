import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Database, 
  Package, 
  ShoppingCart,
  Users,
  FileText,
  Settings,
  HardHat
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  
  const menuItems = [
    {
      name: 'Cadastros',
      path: '/material-classes',
      icon: <Database className="w-5 h-5" />, 
      dropdown: [
        { name: 'Classes', path: '/material-classes' },
        { name: 'Categorias', path: '/categorias' },
        { name: 'Itens', path: '/materiais' },
        { name: 'Fornecedores', path: '/fornecedores' },
      ]
    },
    {
      name: 'Estoque',
      path: '/stock',
      icon: <Package className="w-5 h-5" />,
      dropdown: [
        { name: 'Movimentar Estoque', path: '/stock/movement' },
        { name: 'Histórico de Movimentações', path: '/stock/history' },
      ]
    },
    { name: 'Compras', path: '/purchases', icon: <ShoppingCart className="w-5 h-5" /> },
    { name: 'Clientes', path: '/clients', icon: <Users className="w-5 h-5" /> },
    { name: 'Projetos', path: '/projects', icon: <FileText className="w-5 h-5" /> },
    { name: 'Equipamentos', path: '/equipment', icon: <HardHat className="w-5 h-5" /> },
  ];

  return (
    <aside className="hidden md:flex md:flex-col w-64" style={{ backgroundColor: '#1D1D3A', color: '#fff' }}>
      <div className="p-4 border-b" style={{ borderColor: '#23234a' }}>
        <h1 className="text-xl font-bold">Industrial ERP</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              {item.dropdown ? (
                <details open={isActive(item.path)}>
                  <summary className="flex items-center gap-3 px-4 py-3 rounded-md transition-colors cursor-pointer text-gray-200 hover:text-white" style={{ backgroundColor: 'transparent' }}>
                    {item.icon}
                    <span>{item.name}</span>
                  </summary>
                  <ul className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((sub) => (
                      <li key={sub.path}>
                        <Link
                          to={sub.path}
                          className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors text-gray-200 hover:text-white`}
                        >
                          <span>{sub.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-gray-200 hover:text-white'
                  }`}
                  style={isActive(item.path)
                    ? { backgroundColor: '#23234a' }
                    : { backgroundColor: 'transparent', color: '#bfc2e2' }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t" style={{ borderColor: '#23234a' }}>
        <Link
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-gray-200 hover:text-white"
          style={{ backgroundColor: 'transparent', color: '#bfc2e2' }}
        >
          <Settings className="w-5 h-5" />
          <span>Configurações</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
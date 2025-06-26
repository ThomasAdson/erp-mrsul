import React from 'react';
import { Minimize, Square, X, Minus } from 'lucide-react';
import { getCurrentWindow } from '@tauri-apps/api/window';

const TitleBar = () => {
  const appWindow = getCurrentWindow();

  const handleMinimize = async () => {
    await appWindow.minimize();
  };

  const handleMaximize = async () => {
    const isMaximized = await appWindow.isMaximized();
    if (isMaximized) {
      await appWindow.unmaximize();
    } else {
      await appWindow.maximize();
    }
  };

  const handleClose = async () => {
    await appWindow.close();
  };

  return (
    <div 
      className="h-8 bg-blue-700 flex items-center justify-between px-4 select-none"
      data-tauri-drag-region
      style={{ backgroundColor: '#1e40af' }}
    >
      {/* Título do App */}
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
          <span className="text-blue-700 text-xs font-bold">E</span>
        </div>
        <span className="text-white text-sm font-medium">ERP MRSul</span>
      </div>

      {/* Botões de Controle */}
      <div className="flex items-center">
        <button
          onClick={handleMinimize}
          className="h-8 w-12 flex items-center justify-center hover:bg-blue-600 transition-colors"
          title="Minimizar"
        >
          <Minus className="h-4 w-4 text-white" />
        </button>
        
        <button
          onClick={handleMaximize}
          className="h-8 w-12 flex items-center justify-center hover:bg-blue-600 transition-colors"
          title="Maximizar"
        >
          <Square className="h-3 w-3 text-white" />
        </button>
        
        <button
          onClick={handleClose}
          className="h-8 w-12 flex items-center justify-center hover:bg-red-600 transition-colors"
          title="Fechar"
        >
          <X className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TitleBar;

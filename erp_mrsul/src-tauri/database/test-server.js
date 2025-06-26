import { execSync } from 'child_process';

try {
  console.log('Testando MCP Server...');
  
  // Testar se o servidor responde
  const result = execSync('node dist/index.js', {
    cwd: 'C:\\Users\\Cliente\\Desktop\\erp_mrsul\\erp_mrsul\\src-tauri\\database',
    timeout: 5000,
    encoding: 'utf8'
  });
  
  console.log('Servidor rodando com sucesso!');
} catch (error) {
  console.error('Erro no servidor:', error.message);
}

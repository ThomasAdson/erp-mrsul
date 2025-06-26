import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';

async function extractPDFContent() {
  try {
    console.log('📄 EXTRAINDO CONTEÚDO DO PDF...\n');
    
    const pdfPath = path.join(process.cwd(), 'inventor-api-guide.pdf');
    console.log(`🔍 Procurando arquivo: ${pdfPath}`);
    
    if (!fs.existsSync(pdfPath)) {
      throw new Error(`Arquivo não encontrado: ${pdfPath}`);
    }
    
    console.log('✅ Arquivo encontrado, lendo...');
    const dataBuffer = fs.readFileSync(pdfPath);
    
    console.log('� Processando PDF...');
    const data = await pdf(dataBuffer);
    
    console.log(`📋 Informações do PDF:`);
    console.log(`   Páginas: ${data.numpages}`);
    console.log(`   Tamanho do texto: ${data.text.length} caracteres\n`);
    
    // Salvar o conteúdo extraído
    const outputPath = path.join(process.cwd(), 'inventor-api-extracted.txt');
    fs.writeFileSync(outputPath, data.text);
    
    console.log(`✅ Conteúdo extraído e salvo em: ${outputPath}`);
    console.log('\n📖 Primeiras 1000 caracteres:');
    console.log('='.repeat(50));
    console.log(data.text.substring(0, 1000));
    console.log('='.repeat(50));
    
    // Tentar identificar seções importantes
    const sections = data.text.split(/\n\s*\n/);
    console.log(`\n📋 Encontradas ${sections.length} seções no documento`);
    
    // Procurar por APIs específicas
    const apiKeywords = ['API', 'Application', 'Document', 'PartDocument', 'AssemblyDocument', 'DrawingDocument'];
    console.log('\n🔍 Procurando por APIs importantes:');
    
    apiKeywords.forEach(keyword => {
      const matches = (data.text.match(new RegExp(keyword, 'gi')) || []).length;
      if (matches > 0) {
        console.log(`   ${keyword}: ${matches} ocorrências`);
      }
    });
    
  } catch (error) {
    console.error('❌ Erro ao extrair PDF:', error.message);
    console.log('\n💡 Alternativas:');
    console.log('1. Copie manualmente o conteúdo importante do PDF');
    console.log('2. Cole no arquivo inventor-api-reference.md');
    console.log('3. Eu posso então usar essas informações');
  }
}

extractPDFContent();

@echo off
echo Configurando MCP Filesystem para Claude Desktop...
echo.

REM Criar pasta de configuracao do Claude se nao existir
if not exist "%APPDATA%\Claude" (
    mkdir "%APPDATA%\Claude"
    echo Pasta Claude criada em %APPDATA%\Claude
)

REM Copiar arquivo de configuracao
copy "claude_desktop_config.json" "%APPDATA%\Claude\claude_desktop_config.json"

if %errorlevel% == 0 (
    echo ✅ Arquivo de configuracao copiado com sucesso!
    echo.
    echo Configuracao atual:
    echo - Acesso a: C:\Users\Cliente\Desktop\erp_web
    echo - Acesso a: C:\Users\Cliente\Desktop\erp_mrsul
    echo.
    echo ⚠️  IMPORTANTE: Reinicie o Claude Desktop para aplicar as configuracoes
    echo.
) else (
    echo ❌ Erro ao copiar arquivo de configuracao
)

echo Pressione qualquer tecla para continuar...
pause >nul

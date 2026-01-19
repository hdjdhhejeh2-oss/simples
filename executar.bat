@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul 2>&1
title IPIAL - Sistema de Gestao de Exames
cls

echo ============================================
echo IPIAL - Sistema de Gestao de Exames
echo ============================================
echo.

REM Verificar se Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python não encontrado no sistema!
    echo.
    echo 📦 Procurando instalador local...
    echo.
    
    REM Procurar por arquivos do Python Installer
    if exist "PYTHON INSTALLER\python-3.14.2-amd64.exe" (
        echo ✓ Instalador encontrado! Instalando Python...
        echo.
        start /wait "PYTHON INSTALLER\python-3.14.2-amd64.exe" /quiet InstallAllUsers=1 PrependPath=1
        
        REM Recarregar PATH do sistema
        for /f "tokens=2*" %%A in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v PATH') do set PATH=%%B
        
        REM Verificar se Python foi instalado
        python --version >nul 2>&1
        if errorlevel 1 (
            echo.
            echo ❌ Erro ao instalar Python!
            echo Por favor, tente novamente ou instale manualmente.
            pause
            goto :end
        )
        
        echo.
        echo ✓ Python instalado com sucesso!
        echo.
    ) else if exist "PYTHON INSTALLER\python-manager-25.2.msix" (
        echo ✓ Instalador MSIX encontrado! Instalando Python...
        echo.
        REM Instalar MSIX usando PowerShell
        powershell -NoProfile -ExecutionPolicy Bypass -Command "& {
            try {
                Add-AppxPackage -Path 'PYTHON INSTALLER\python-manager-25.2.msix'
                Write-Host '✓ Python instalado com sucesso!'
            } catch {
                Write-Host '❌ Erro ao instalar Python!'
                exit 1
            }
        }"
        
        if errorlevel 1 (
            echo.
            echo ❌ Erro ao instalar Python!
            echo Por favor, tente novamente ou instale manualmente.
            pause
            goto :end
        )
        echo.
    ) else (
        echo ❌ Nenhum instalador Python encontrado na pasta!
        echo.
        echo Por favor, coloque o instalador do Python em:
        echo PYTHON INSTALLER\
        echo.
        pause
        goto :end
    )
)

REM Obter a porta (padrão 8000)
set PORT=8000

echo ✓ Python encontrado!
echo.
echo Iniciando servidor HTTP na porta %PORT%...
echo.

REM Verificar se a porta já está em uso
netstat -ano | findstr :%PORT% >nul 2>&1
if not errorlevel 1 (
    echo ⚠️  Porta %PORT% já está em uso!
    set /p PORT="Digite uma porta alternativa (padrão 8001): "
    if "!PORT!"=="" set PORT=8001
)

echo Aguarde enquanto o servidor inicia...
timeout /t 2 /nobreak > nul

REM Abrir o navegador em background
start http://localhost:%PORT%/ >nul 2>&1

REM Iniciar o servidor em primeiro plano
echo.
echo ============================================
echo ✓ Servidor iniciado!
echo ============================================
echo.
echo URL: http://localhost:%PORT%/
echo.
echo Pressione CTRL+C para parar o servidor
echo.
echo.

python -m http.server %PORT%

:end
pause
endlocal

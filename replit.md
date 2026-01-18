# IPIAL - Sistema de Gestão de Exames

## Overview
Sistema de Gestão de Exames de Acesso para o IPIAL. Versão puramente frontend (estática).

## Project Architecture
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Data Storage**: Navegador (localStorage)
- **Templates**: Carregados dinamicamente via JavaScript

## Project Structure
```
├── index.html         # Ponto de entrada (abrir no navegador)
├── js/                # Módulos JavaScript
│   ├── constants.js
│   ├── export-import.js
│   ├── html-loader.js
│   ├── listeners.js
│   ├── listeners-forms.js
│   ├── render-dashboard.js
│   ├── render-pages.js
│   ├── render-publications.js
│   ├── state.js
│   └── storage.js
├── css/               # Estilos
├── html/              # Templates HTML
└── replit.md          # Documentação
```

## Como usar
Basta abrir o arquivo `index.html` em qualquer navegador moderno. Os dados serão salvos localmente no seu computador.

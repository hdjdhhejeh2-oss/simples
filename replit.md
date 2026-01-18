# IPIAL - Sistema de Gestão de Exames

## Overview
This is an exam management system (Sistema de Gestão de Exames de Acesso) for IPIAL. It provides a web interface for managing exam candidates, with features for registration, viewing results, and administrative functions.

## Project Architecture
- **Backend**: Node.js with Express.js serving on port 5000
- **Frontend**: Static HTML/CSS/JavaScript served by the Express app
- **Data Storage**: JSON file-based storage in `/data/ipial_data.json`

## Project Structure
```
├── server.js          # Express server with REST API
├── index.html         # Main entry point
├── js/                # Frontend JavaScript modules
│   ├── constants.js
│   ├── export-import.js
│   ├── html-loader.js
│   ├── listeners.js
│   ├── listeners-forms.js
│   ├── render-dashboard.js
│   ├── render-pages.js
│   ├── render-publications.js
│   ├── state.js
│   ├── storage.js
│   └── sync.js
├── css/               # Stylesheets
├── html/              # HTML templates
├── data/              # Data storage directory
└── package.json       # Node.js dependencies
```

## API Endpoints
- `GET /api/data` - Get all data
- `POST /api/data` - Save all data
- `GET /api/candidates` - List candidates
- `POST /api/candidates` - Add candidate
- `GET /api/candidates/:bi` - Get candidate by BI
- `PUT /api/candidates/:bi` - Update candidate
- `DELETE /api/candidates/:bi` - Delete candidate
- `GET /api/logs` - List logs
- `POST /api/logs` - Add log
- `GET /api/status` - Server status
- `POST /api/reset` - Reset data (requires password)

## Running the Application
```bash
npm install
npm start
```

The server runs on `0.0.0.0:5000` and serves both the API and static frontend files.

## Recent Changes
- 2026-01-18: Configured for Replit environment (port 5000, host 0.0.0.0)

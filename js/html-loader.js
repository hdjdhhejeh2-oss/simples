// html-loader.js - Templates embutidos para funcionamento sem servidor (CORS)

const HTMLLoader = {
  templates: {
    'login': `
<div class="login-container">
    <form class="login-form" id="loginForm">
        <div class="login-header">
            <div class="login-logo">I</div>
            <h1 class="login-h1">IPIAL</h1>
            <p class="login-subtitle">Sistema de Gestão de Exames</p>
        </div>

        <div id="loginError" class="error-message" style="display: none;">
            <span id="errorText"></span>
        </div>

        <div class="form-group">
            <label class="form-label">Utilizador</label>
            <input type="text" id="username" class="form-input" placeholder="admin" required>
        </div>

        <div class="form-group">
            <label class="form-label">Palavra-passe</label>
            <input type="password" id="password" class="form-input" placeholder="••••••••" required>
        </div>

        <button type="submit" class="submit-button">Acesso Restrito</button>

        <div class="login-divider">
            <button type="button" id="publicBtn" class="public-button">
                🔍 Consultar Resultados (Público)
            </button>
            <p class="status-text">
                <span id="publishStatus">⚪ Aguardando Publicação</span>
            </p>
        </div>
    </form>
</div>`,
    'admin-layout': `
<div class="app-container no-print">
    <aside class="sidebar no-print">
        <div class="sidebar-header">
            <div class="sidebar-logo">I</div>
            <div>
                <p class="sidebar-title">IPIAL</p>
                <p class="sidebar-subtitle">Gestão Académica</p>
            </div>
        </div>

        <nav class="sidebar-nav">
            <button class="nav-button active" data-tab="dashboard">
                📊 Dashboard
            </button>
            <button class="nav-button" data-tab="candidates">
                👥 Candidatos
            </button>
            <button class="nav-button" data-tab="publications">
                📄 Publicações
            </button>
        </nav>

        <div class="sidebar-footer">
            <button class="footer-button" id="exportBtn">⬇️ Exportar JSON</button>
            <button class="footer-button" id="importBtn">⬆️ Importar JSON</button>
            <input type="file" id="fileInput" accept=".json" style="display:none">
            <button class="footer-button logout" id="logoutBtn">🚪 Sair</button>
        </div>
    </aside>

    <main class="main-content">
        <div class="main-header no-print">
            <div>
                <h2 class="header-title" id="pageTitle">📊 Dashboard</h2>
                <p class="header-subtitle">IPIAL • Sistema de Exames de Acesso 2025</p>
            </div>
            <button class="add-button" id="addBtn" style="display: none;">+ Inscrever Candidato</button>
        </div>

        <div id="content"></div>
    </main>
</div>`,
    'dashboard': `
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-bottom: 32px;">
    <div class="stat-card">
        <div class="stat-icon total">📊</div>
        <div>
            <p class="stat-label">Inscritos</p>
            <p class="stat-number" id="statTotal">0</p>
        </div>
    </div>
    <div class="stat-card">
        <div class="stat-icon approved">✓</div>
        <div>
            <p class="stat-label">Aprovados</p>
            <p class="stat-number" id="statApproved">0</p>
        </div>
    </div>
    <div class="stat-card">
        <div class="stat-icon rejected">✗</div>
        <div>
            <p class="stat-label">Reprovados</p>
            <p class="stat-number" id="statRejected">0</p>
        </div>
    </div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">📊 Distribuição por Curso</h4>
        </div>
        <div id="courseDistribution" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        </div>
    </div>
</div>`,
    'candidates-list': `
<div class="card">
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nº</th>
                    <th>Nome</th>
                    <th>BI</th>
                    <th>Curso</th>
                    <th style="text-align: center;">Nota</th>
                    <th style="text-align: center;">Ações</th>
                </tr>
            </thead>
            <tbody id="candidatesTableBody">
            </tbody>
        </table>
    </div>
</div>`,
    'candidate-form': `
<div class="card">
    <form id="candidateForm" class="candidate-form">
        <div class="photo-upload-section">
            <div class="photo-preview" id="photoPreview">📸</div>
            <input type="file" id="photoInput" accept="image/*" style="display: none;">
            <button type="button" class="footer-button" onclick="document.getElementById('photoInput').click()">Carregar Foto</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="form-group">
                <label class="form-label">Nome Completo</label>
                <input type="text" id="candName" class="form-input" required>
            </div>
            <div class="form-group">
                <label class="form-label">BI / Passaporte</label>
                <input type="text" id="candBi" class="form-input" required>
            </div>
            <div class="form-group">
                <label class="form-label">Curso</label>
                <select id="candCourse" class="form-input" required>
                    <option value="Informática">Informática</option>
                    <option value="Construção Civil">Construção Civil</option>
                    <option value="Eletrônica">Eletrônica</option>
                    <option value="Mecânica">Mecânica</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Nota do Exame</label>
                <input type="number" id="candGrade" class="form-input" min="0" max="20" step="0.1">
            </div>
        </div>
        <div style="margin-top: 24px; display: flex; gap: 12px; justify-content: flex-end;">
            <button type="button" class="footer-button" id="cancelBtn">Cancelar</button>
            <button type="submit" class="submit-button" style="width: auto; padding: 0 32px;">Salvar Candidato</button>
        </div>
    </form>
</div>`,
    'publications': `
<div class="card">
    <div style="text-align: center; padding: 40px;">
        <h3 style="margin-bottom: 16px;">📢 Publicação de Resultados</h3>
        <p style="color: #64748b; margin-bottom: 32px;">Ao publicar, os resultados ficarão visíveis na área pública para consulta dos candidatos.</p>
        <button id="togglePublishBtn" class="submit-button" style="width: auto; padding: 0 48px;"></button>
    </div>
</div>`,
    'public-results': `
<div class="public-container">
    <div class="public-header">
        <h1 style="font-size: 32px; font-weight: 900; margin-bottom: 8px;">IPIAL</h1>
        <p style="opacity: 0.9;">Resultados dos Exames de Acesso 2025</p>
    </div>

    <div style="max-width: 1000px; margin: -40px auto 0; padding: 0 20px;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 32px;">
            <div class="card" style="text-align: center; border-top: 4px solid #3b82f6;">
                <p style="color: #64748b; font-size: 12px; margin: 0 0 8px 0;">Total Candidatos</p>
                <p style="font-size: 32px; font-weight: 900; color: #1e293b; margin: 0;" id="pubTotal">0</p>
            </div>
            <div class="card" style="text-align: center; border-top: 4px solid #22c55e;">
                <p style="color: #64748b; font-size: 12px; margin: 0 0 8px 0;">Aprovados</p>
                <p style="font-size: 32px; font-weight: 900; color: #22c55e; margin: 0;" id="pubApproved">0</p>
            </div>
            <div class="card" style="text-align: center; border-top: 4px solid #ef4444;">
                <p style="color: #64748b; font-size: 12px; margin: 0 0 8px 0;">Reprovados</p>
                <p style="font-size: 32px; font-weight: 900; color: #ef4444; margin: 0;" id="pubRejected">0</p>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 32px;">
            <div class="card">
                <h3 style="margin-bottom: 16px;">🏆 Top 10 Melhores Notas</h3>
                <div id="topRanking" style="display: flex; flex-direction: column; gap: 12px;">
                </div>
            </div>

            <div class="card">
                <h3 style="margin-bottom: 16px;">🔍 Consultar Resultado Individual</h3>
                <input type="text" id="searchBiPublic" class="form-input" placeholder="Digite o seu BI/Passaporte" style="margin-bottom: 16px;">
                <div id="publicSearchResult"></div>
            </div>
        </div>

        <div class="card">
            <h3 style="margin-bottom: 16px;">📋 Todos os Resultados</h3>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nº</th>
                            <th>Nome</th>
                            <th>BI</th>
                            <th>Curso</th>
                            <th style="text-align: center;">Nota</th>
                            <th style="text-align: center;">Resultado</th>
                        </tr>
                    </thead>
                    <tbody id="publicTableBody">
                    </tbody>
                </table>
            </div>
        </div>

        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px;">
            <p style="margin: 0;" id="publishDate">Publicado em: --</p>
        </div>
    </div>
</div>`
  },
  
  async loadTemplate(name) {
    return this.templates[name] || '';
  },
  
  async loadAllTemplates() {
    return this.templates;
  },
  
  getTemplate(name) {
    return this.templates[name] || '';
  }
};
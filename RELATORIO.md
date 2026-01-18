# Relatório Técnico de Desenvolvimento: Sistema IPIAL

## 1. Introdução
Este relatório descreve o processo de desenvolvimento do **Sistema de Gestão de Exames de Acesso do IPIAL**. O objetivo foi criar uma ferramenta ágil, intuitiva e de fácil implementação para a gestão académica.

## 2. Visão Geral do Projeto
O projeto foi concebido sob a premissa de **"Simplicidade e Funcionalidade"**. Ao contrário de sistemas complexos que exigem servidores robustos, optamos por uma arquitetura **Serverless Frontend**, onde toda a inteligência e armazenamento residem no lado do cliente.

## 3. Passo a Passo do Desenvolvimento

### Fase 1: Planeamento e Arquitetura
- **Definição de Requisitos**: Identificamos a necessidade de um sistema que pudesse registar candidatos, validar BIs, calcular médias e publicar resultados.
- **Escolha Tecnológica**: Decidimos usar tecnologias web puras (Vanilla JS) para garantir compatibilidade total e evitar a obsolescência de frameworks.

### Fase 2: Estruturação de Dados
- **Modelagem**: Criamos uma estrutura de dados flexível para candidatos, logs de atividade e configurações.
- **Persistência**: Implementamos o uso do `localStorage`. Isso permite que o utilizador feche o navegador e, ao voltar, todos os dados continuem lá, sem precisar de um servidor SQL.

### Fase 3: Desenvolvimento do Core (Lógica)
- **Motor de Estado (`state.js`)**: Desenvolvemos um gestor de estado centralizado. Sempre que um dado muda (ex: novo candidato), o sistema atualiza a interface e a base de dados simultaneamente.
- **Carregador de Templates (`html-loader.js`)**: Para manter o código limpo, os ecrãs (Login, Dashboard, Listas) foram separados em ficheiros HTML individuais e são carregados sob demanda.

### Fase 4: Interface e Experiência do Utilizador (UI/UX)
- **Design Modular**: O CSS foi dividido para facilitar a manutenção.
- **Responsividade**: O sistema adapta-se a computadores, tablets e telemóveis.
- **Feedback Visual**: Implementamos mensagens de sucesso, erro e diálogos de confirmação para ações críticas (como eliminar dados).

### Fase 5: Funcionalidades Avançadas
- **Sistema de Logs**: Cada ação importante é registada, permitindo auditoria básica.
- **Exportação/Importação**: Criamos uma ferramenta para que o utilizador possa fazer "Backup" dos seus dados em formato JSON, garantindo que a informação não fique presa apenas num computador.
- **Geração de Relatórios**: O sistema gera relatórios em HTML formatado para impressão instantânea.

## 4. Conclusão
O sistema representa uma solução eficiente e de custo zero de infraestrutura para o IPIAL. É uma prova de que aplicações robustas podem ser construídas com tecnologias simples quando bem arquitetadas.

## 5. Próximos Passos Sugeridos
- Implementação de exportação para Excel/PDF.
- Integração com serviços de nuvem para sincronização multi-dispositivo.
- Módulo de impressão de cartões de exame automáticos.

---
**Desenvolvido por Replit Agent**
*Janeiro de 2026*

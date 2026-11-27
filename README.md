# Clash Stats

Projeto acadêmico da disciplina Desenvolvimento de Interfaces (CEUB, 2/2026). Site estático de apresentação das estatísticas de uma conta de Clash Royale e dos três decks principais.

## Funcionalidades

- Perfil com troféus, melhor liga, idade da conta, vitórias e derrotas.
- Gráfico de rosca de vitórias e derrotas, com taxa de vitória no centro.
- Modais dos decks Zen Hog, Rocket Cycle e Splashyard, com oito cartas e estatísticas individuais.
- Carrossel manual dos três decks.
- Telas demonstrativas de cadastro, login e contato.
- Navegação pelo rodapé da página principal.
- Modo claro/escuro e aumento de fonte em 20%, com preferências armazenadas no `localStorage`.

## Tecnologias

HTML5, CSS3 (Flexbox e Grid), JavaScript puro, Canvas, Chart.js (via CDN jsDelivr), Git e GitHub. Não é necessário instalar pacotes npm.

## Estrutura

| Arquivo | Finalidade |
|---|---|
| `index.html`, `index.css` | Perfil, estatísticas, modais e rodapé |
| `login.html`, `login.css` | Tela de login |
| `cadastro.html`, `cadastro.css` | Tela de cadastro |
| `contato.html`, `contato.css` | Formulário de contato |
| `carrossel.html`, `carrossel.css` | Carrossel |
| `acessibilidade.html`, `acessibilidade-pagina.css` | Tela de preferências |
| `acessibilidade.css`, `acessibilidade.js` | Temas, tamanho de fonte e persistência |
| `grafico.js` | Gráfico geral |
| `modais.js` | Controle dos modais e gráficos individuais |
| `carrossel.js` | Navegação circular dos slides |
| `assets/` | Imagens PNG |

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Eduzeraaa/clash-stats.git
   cd clash-stats
   ```
2. Abra a pasta no VS Code e execute `index.html` com Live Server. Como alternativa, inicie um servidor local com Python:
   ```bash
   py -m http.server 8000
   ```
3. Acesse http://localhost:8000/index.html se estiver utilizando o servidor Python. Mantenha a conexão à internet para carregar o Chart.js.

## Processo de desenvolvimento

1. Criação da estrutura inicial e telas de cadastro e login (`564f967`, 25/11/2026).
2. Organização dos cards da página de estatísticas e das primeiras imagens (`ef751dc`, 26/11/2026).
3. Desenvolvimento de modais e gráficos dos decks com apoio de IA (`3cd88f1`, 26/11/2026).
4. Criação de rodapé, contato, carrossel e links de navegação (`641ffa7`, 27/11/2026).
5. Implementação de tema claro/escuro, aumento de fonte e adaptação dos gráficos (`9225754`, 27/11/2026)

## Acessibilidade

A interface possui contraste elevado nas combinações principais, textos alternativos na maioria das imagens, foco visual nos campos, navegação padrão por Tab e fechamento de modais por Escape. O modo claro e o tamanho de fonte ficam salvos no navegador. O projeto utiliza os critérios de contraste da WCAG 2.2 como referência, sem afirmar conformidade integral.

## Limitações e possíveis melhorias

- Estatísticas fixas, sem API ou banco de dados.
- Cadastro e login são demonstrativos, sem autenticação; contato não envia mensagens.
- Pesquisa e navbar superior não implementadas na versão analisada.
- Layout com dimensões fixas, sem responsividade completa.
- Melhorias futuras: rótulos de formulário, gestão de foco nos modais e alternativas textuais aos gráficos.
- As fontes e licenças das imagens precisam ser identificadas.

## Referências

- [Chart.js – Doughnut and Pie Charts](https://www.chartjs.org/docs/latest/charts/doughnut)
- [jsDelivr](https://www.jsdelivr.com/)
- [WCAG 2.2 – Contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [WCAG 2.2 – Contraste não textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast)

Projeto não oficial, sem afiliação com a Supercell. Desenvolvimento com apoio de ChatGPT e Codex.

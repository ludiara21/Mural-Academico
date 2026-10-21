# Mural Acadêmico — Checkpoint 1

## Problema e objetivo

A comunidade acadêmica precisa consultar comunicados institucionais, eventos, atividades, prazos e oportunidades em diferentes canais. O Mural Acadêmico é uma prova de conceito que centraliza a publicação e a pesquisa dessas informações para estudantes, professores, coordenadores e demais integrantes da instituição.

## Equipe
- Ludiara Rodrigues Lima
- Luiz Eduardo Lopes Soares
- Luiz Gustavo Batista Vaz

## Eixo tecnológico escolhido
**Eixo 3 — Tendências Emergentes e Novos Padrões da Web.** A aplicação implementa um Web Component nativo (`<aviso-card>`) com Custom Elements, que recebe dados em JavaScript e gera cartões de comunicados. O eixo foi selecionado no escopo aprovado.

## Acessibilidade
Estrutura semântica com `header`, `nav`, `main`, `footer`, `button`, campos com `label`, navegação por teclado, indicação visual de foco e região `role="status"` com `aria-live="polite"` para atualizações dinâmicas.

## Tecnologias
HTML5, CSS3, JavaScript, Web Components (Custom Elements), `localStorage`. Deploy previsto: Netlify. Notifications API prevista no escopo para etapas posteriores.

## Como executar
1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em um navegador moderno (Chrome, Edge ou Firefox). Não há dependências para instalar.
3. Para desenvolvimento, opcionalmente use a extensão Live Server do VS Code.

## Como testar
1. Confira os cartões de exemplo na página inicial.
2. Digite uma palavra no campo de pesquisa e observe o filtro dos cartões.
3. Escolha uma categoria para filtrar.
4. Preencha o formulário e clique em **Publicar comunicado**.
5. Verifique se aparece um novo cartão e a mensagem acessível de sucesso.
6. Atualize a página e confirme que o comunicado permanece salvo no mesmo navegador (localStorage).
7. Abra as ferramentas de desenvolvedor e inspecione a tag personalizada `<aviso-card>`.

## Limitações desta PoC
Os dados são salvos apenas no navegador/dispositivo utilizado, sem sincronização entre usuários. Não há autenticação, moderação nem notificações push nesta etapa. Os dois avisos iniciais são dados ilustrativos, não comunicados institucionais reais.

## Entrega
Checkpoint 1: repositório público, histórico de commits de integrantes, README e demonstração funcional do Eixo 3 e acessibilidade.

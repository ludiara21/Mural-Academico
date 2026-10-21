// Eixo 3: Web Component nativo e reutilizável para os comunicados.
class AvisoCard extends HTMLElement {
  connectedCallback() { this.renderizar(); }
  set comunicado(dados) { this._comunicado = dados; this.renderizar(); }
  renderizar() {
    if (!this._comunicado) return;
    const { titulo, categoria, descricao, data } = this._comunicado;
    // textContent evita interpretar como HTML o texto digitado por usuários.
    this.replaceChildren();
    const artigo = document.createElement('article'); artigo.className = 'cartao';
    const etiqueta = document.createElement('span'); etiqueta.className = 'etiqueta'; etiqueta.textContent = categoria;
    const h3 = document.createElement('h3'); h3.textContent = titulo;
    const p = document.createElement('p'); p.textContent = descricao;
    const pequeno = document.createElement('p'); pequeno.className = 'data'; pequeno.textContent = `Publicado em ${data}`;
    artigo.append(etiqueta, h3, p, pequeno); this.append(artigo);
  }
}
customElements.define('aviso-card', AvisoCard);

const CHAVE = 'mural-academico-comunicados-v1';
const exemplos = [
  { id: 1, titulo: 'Boas-vindas ao Mural Acadêmico', categoria: 'Comunicado', descricao: 'Acompanhe neste espaço as novidades da comunidade acadêmica.', data: '21/10/2026' },
  { id: 2, titulo: 'Semana de Tecnologia', categoria: 'Evento', descricao: 'Consulte os canais institucionais para acompanhar a programação de eventos.', data: '21/10/2026' }
];
function carregar() {
  try { const salvo = JSON.parse(localStorage.getItem(CHAVE)); return Array.isArray(salvo) ? salvo : exemplos; }
  catch { return exemplos; }
}
let comunicados = carregar();
const lista = document.querySelector('#lista');
const contador = document.querySelector('#contador');
const status = document.querySelector('#status');
function anunciar(mensagem) { status.textContent = mensagem; }
function renderizar() {
  const termo = document.querySelector('#pesquisa').value.trim().toLocaleLowerCase('pt-BR');
  const categoria = document.querySelector('#filtro').value;
  const encontrados = comunicados.filter(c => (!categoria || c.categoria === categoria) && `${c.titulo} ${c.descricao}`.toLocaleLowerCase('pt-BR').includes(termo));
  lista.replaceChildren();
  encontrados.forEach(comunicado => { const card = document.createElement('aviso-card'); card.comunicado = comunicado; lista.append(card); });
  if (!encontrados.length) { const vazio = document.createElement('p'); vazio.className = 'vazio'; vazio.textContent = 'Nenhum comunicado encontrado.'; lista.append(vazio); }
  contador.textContent = `${encontrados.length} comunicado(s) encontrado(s).`;
}
document.querySelector('#pesquisa').addEventListener('input', renderizar);
document.querySelector('#filtro').addEventListener('change', renderizar);
document.querySelector('#formulario').addEventListener('submit', evento => {
  evento.preventDefault();
  const titulo = document.querySelector('#titulo').value.trim();
  const categoria = document.querySelector('#categoria').value;
  const descricao = document.querySelector('#descricao').value.trim();
  if (!titulo || !categoria || !descricao) { anunciar('Preencha todos os campos.'); return; }
  comunicados.unshift({ id: Date.now(), titulo, categoria, descricao, data: new Date().toLocaleDateString('pt-BR') });
  try { localStorage.setItem(CHAVE, JSON.stringify(comunicados)); }
  catch { anunciar('Comunicado adicionado nesta sessão, mas não foi possível salvá-lo no navegador.'); renderizar(); return; }
  evento.target.reset(); document.querySelector('#pesquisa').value = ''; document.querySelector('#filtro').value = '';
  renderizar(); anunciar('Comunicado publicado com sucesso!');
});
renderizar();

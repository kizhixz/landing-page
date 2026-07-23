// ============================================================
// RUBY CODEX — Documentation / Study Notebook App
// Data comes from script.js (MODULES/CHALLENGES/PROJECTS)
// and docs-data.js (DOCS_DATA). This file owns all the UI.
// ============================================================

// ---------- Navigation Tree ----------
const NAV = [
  { key: 'inicio', icon: '🚀', label: 'Começando', items: [
    { type: 'home', label: 'Visão Geral' },
    { type: 'module', id: 'introducao' },
  ]},
  { key: 'sintaxe', icon: '📝', label: 'Sintaxe Básica', items: [
    { type: 'module', id: 'sintaxe' },
    { type: 'module', id: 'tipos-dados' },
    { type: 'module', id: 'operadores' },
  ]},
  { key: 'controle', icon: '🔀', label: 'Controle de Fluxo', items: [
    { type: 'module', id: 'condicionais' },
    { type: 'module', id: 'loops' },
  ]},
  { key: 'metodos', icon: '⚙️', label: 'Métodos & Blocos', items: [
    { type: 'module', id: 'metodos' },
    { type: 'module', id: 'blocos-procs-lambdas' },
  ]},
  { key: 'dados', icon: '🗂️', label: 'Estruturas de Dados', items: [
    { type: 'module', id: 'estruturas-dados' },
    { type: 'module', id: 'enumerables' },
  ]},
  { key: 'oo', icon: '🧩', label: 'Orientação a Objetos', items: [
    { type: 'module', id: 'oo-ruby' },
    { type: 'module', id: 'modulos-mixins' },
  ]},
  { key: 'erros', icon: '🛡️', label: 'Erros & Arquivos', items: [
    { type: 'module', id: 'excecoes' },
    { type: 'module', id: 'arquivos-io' },
  ]},
  { key: 'regex', icon: '🔎', label: 'Regex & Lógica', items: [
    { type: 'module', id: 'regex' },
    { type: 'module', id: 'logica-programacao' },
  ]},
  { key: 'avancado', icon: '⚡', label: 'Tópicos Avançados', items: [
    { type: 'module', id: 'avancados' },
    { type: 'module', id: 'boas-praticas' },
  ]},
  { key: 'ecossistema', icon: '🌐', label: 'Ecossistema Ruby', items: [
    { type: 'module', id: 'web-frameworks' },
    { type: 'module', id: 'apis' },
    { type: 'module', id: 'banco-dados' },
    { type: 'module', id: 'testes' },
    { type: 'module', id: 'automacao' },
    { type: 'module', id: 'discord-bot' },
    { type: 'module', id: 'gems' },
  ]},
  { key: 'pratica', icon: '🏋️', label: 'Prática', items: [
    { type: 'exercises', label: 'Exercícios' },
    { type: 'challenges', label: 'Desafios' },
    { type: 'projects', label: 'Projetos' },
  ]},
  { key: 'referencia', icon: '📚', label: 'Referência', items: [
    { type: 'reference', label: 'Referência Rápida' },
    { type: 'favorites', label: 'Favoritos' },
    { type: 'history', label: 'Histórico' },
  ]},
];

const CALLOUT = {
  'tip':       { cls: 'c-summary', label: 'Resumo' },
  'info':      { cls: 'c-tip',     label: 'Dica' },
  'error-box': { cls: 'c-warn',    label: 'Atenção' },
  'note':      { cls: 'c-info',    label: 'Observação' },
};

// ---------- Storage ----------
const LS = {
  read: 'rubycodex_read',
  fav: 'rubycodex_fav',
  hist: 'rubycodex_hist',
  collapsed: 'rubycodex_collapsed',
  theme: 'rubycodex_theme',
};
const store = {
  get(k, fallback) { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); },
};

// ---------- Lookups ----------
const MOD_BY_ID = Object.fromEntries(MODULES.map(m => [m.id, m]));
const MOD_ORDER = [];
NAV.forEach(cat => cat.items.forEach(it => { if (it.type === 'module') MOD_ORDER.push(it.id); }));

const ROUTE = {
  home: () => '#/',
  module: (id) => `#/m/${id}`,
  exercises: () => '#/exercicios',
  challenges: () => '#/desafios',
  projects: () => '#/projetos',
  reference: () => '#/referencia',
  favorites: () => '#/favoritos',
  history: () => '#/historico',
};
function itemRoute(it) {
  return it.type === 'module' ? ROUTE.module(it.id) : ROUTE[it.type]();
}
function itemLabel(it) {
  if (it.type === 'module') return MOD_BY_ID[it.id]?.title || it.id;
  return it.label;
}
function itemIcon(it) {
  if (it.type === 'module') return MOD_BY_ID[it.id]?.icon || '📄';
  return { home: '🏠', exercises: '🏋️', challenges: '🎯', projects: '🛠️', reference: '📖', favorites: '⭐', history: '🕘' }[it.type] || '📄';
}

// ---------- Utils ----------
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function slug(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 60);
}
function stripHtml(html) {
  const d = document.createElement('div'); d.innerHTML = html; return d.textContent || '';
}
const $ = (sel, el = document) => el.querySelector(sel);

// ---------- Ruby syntax highlighter ----------
const RUBY_KW = new Set(['def','end','if','elsif','else','unless','case','when','then','while','until','for','in','do','begin','rescue','ensure','raise','retry','yield','return','next','break','redo','class','module','self','super','nil','true','false','and','or','not','require','require_relative','include','extend','attr_accessor','attr_reader','attr_writer','new','lambda','proc','puts','print','loop','private','public','protected','defined?']);
function highlightRuby(code) {
  const re = /(#(?!\{)[^\n]*)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(:[A-Za-z_]\w*[?!=]?)|(@@?[A-Za-z_]\w*|\$[A-Za-z_]\w*)|(\b\d[\d_]*(?:\.\d+)?\b)|([A-Za-z_]\w*[?!]?)/g;
  let out = '', last = 0, m;
  while ((m = re.exec(code))) {
    out += esc(code.slice(last, m.index));
    const t = m[0]; let cls = '';
    if (m[1]) cls = 'tok-c';
    else if (m[2] || m[3]) cls = 'tok-s';
    else if (m[4]) cls = 'tok-sym';
    else if (m[5]) cls = 'tok-v';
    else if (m[6]) cls = 'tok-n';
    else if (m[7]) { cls = RUBY_KW.has(m[7]) ? 'tok-k' : (/^[A-Z]/.test(m[7]) ? 'tok-v' : ''); }
    out += cls ? `<span class="${cls}">${esc(t)}</span>` : esc(t);
    last = m.index + t.length;
  }
  out += esc(code.slice(last));
  return out;
}

// ---------- Favorites / History / Read ----------
function isFav(id) { return store.get(LS.fav, []).includes(id); }
function toggleFav(id) {
  const favs = store.get(LS.fav, []);
  const i = favs.indexOf(id);
  if (i >= 0) favs.splice(i, 1); else favs.push(id);
  store.set(LS.fav, favs);
  updateProgress();
  return i < 0;
}
function isRead(id) { return store.get(LS.read, []).includes(id); }
function toggleRead(id) {
  const read = store.get(LS.read, []);
  const i = read.indexOf(id);
  if (i >= 0) read.splice(i, 1); else read.push(id);
  store.set(LS.read, read);
  updateProgress();
  return i < 0;
}
function pushHistory(id) {
  let h = store.get(LS.hist, []).filter(e => e.id !== id);
  h.unshift({ id, t: Date.now() });
  h = h.slice(0, 40);
  store.set(LS.hist, h);
}
function timeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return 'agora';
  if (s < 3600) return `${Math.floor(s / 60)} min atrás`;
  if (s < 86400) return `${Math.floor(s / 3600)} h atrás`;
  return `${Math.floor(s / 86400)} d atrás`;
}

// ============================================================
// SIDEBAR
// ============================================================
function renderSidebar() {
  const collapsed = new Set(store.get(LS.collapsed, []));
  const chevron = `<svg class="nav-cat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
  const html = NAV.map(cat => {
    const isCol = collapsed.has(cat.key);
    const items = cat.items.map(it => {
      const route = itemRoute(it);
      return `<li><a class="nav-link" href="${route}" data-route="${route}">${esc(itemLabel(it))}</a></li>`;
    }).join('');
    return `<div class="nav-cat ${isCol ? 'collapsed' : ''}" data-cat="${cat.key}">
      <button class="nav-cat-btn" data-toggle="${cat.key}">
        <span class="nav-cat-icon">${cat.icon}</span>
        <span class="nav-cat-label">${esc(cat.label)}</span>
        ${chevron}
      </button>
      <ul class="nav-cat-items">${items}</ul>
    </div>`;
  }).join('');
  $('#navTree').innerHTML = html;

  $('#navTree').addEventListener('click', (e) => {
    const toggle = e.target.closest('[data-toggle]');
    if (toggle) {
      const key = toggle.dataset.toggle;
      const set = new Set(store.get(LS.collapsed, []));
      set.has(key) ? set.delete(key) : set.add(key);
      store.set(LS.collapsed, [...set]);
      toggle.closest('.nav-cat').classList.toggle('collapsed');
    }
    const link = e.target.closest('.nav-link');
    if (link && window.innerWidth <= 920) closeSidebar();
  });
}

function setActiveNav(route) {
  document.querySelectorAll('.nav-link').forEach(a => {
    const active = a.dataset.route === route;
    a.classList.toggle('active', active);
    if (active) {
      const cat = a.closest('.nav-cat');
      if (cat && cat.classList.contains('collapsed')) {
        cat.classList.remove('collapsed');
        const set = new Set(store.get(LS.collapsed, []));
        set.delete(cat.dataset.cat); store.set(LS.collapsed, [...set]);
      }
    }
  });
}

function updateProgress() {
  const read = store.get(LS.read, []).length;
  const favs = store.get(LS.fav, []).length;
  const total = MODULES.length;
  const pct = Math.round((read / total) * 100);
  $('#progressPct').textContent = pct + '%';
  $('#progressBar').style.width = pct + '%';
  $('#progressRead').textContent = read;
  $('#progressFav').textContent = favs;
}

// ============================================================
// RENDER HELPERS
// ============================================================
function crumbs(parts) {
  return `<nav class="crumbs">` + parts.map((p, i) => {
    const last = i === parts.length - 1;
    const el = last
      ? `<span class="cur">${esc(p.label)}</span>`
      : `<a href="${p.href}">${esc(p.label)}</a>`;
    return el + (last ? '' : `<span class="sep">/</span>`);
  }).join('') + `</nav>`;
}
function iconLink(href, label) {
  return `<a class="btn" href="${href}">${esc(label)}</a>`;
}
function codeBlock(section) {
  const lang = section.lang || 'ruby';
  const body = lang === 'ruby' ? highlightRuby(section.code) : esc(section.code);
  const note = section.comment ? `<div class="code-note">${esc(section.comment)}</div>` : '';
  return `<div class="code-block">
    <div class="code-head">
      <div class="code-dots"><i></i><i></i><i></i></div>
      <span class="code-lang">${esc(lang)}</span>
      <button class="code-copy" data-copy>${copyIcon()}<span>Copiar</span></button>
    </div>
    <pre><code>${body}</code></pre>
    ${note}
  </div>`;
}
function callout(section) {
  const c = CALLOUT[section.style] || CALLOUT.note;
  return `<div class="callout ${c.cls}">
    <span class="callout-ico">${section.icon || '📝'}</span>
    <div class="callout-body"><span class="callout-title">${esc(section.title || c.label)}</span>${section.content}</div>
  </div>`;
}
function copyIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
}
function extLinkIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
}

// ============================================================
// PAGE: MODULE
// ============================================================
function renderModule(id) {
  const m = MOD_BY_ID[id];
  if (!m) return renderNotFound();
  pushHistory(id);

  const levelName = { basico: 'Fundamentos', intermediario: 'Intermediário', avancado: 'Avançado' }[m.level] || m.level;
  const cat = NAV.find(c => c.items.some(it => it.type === 'module' && it.id === id));

  // Sections
  const body = m.sections.map(s => {
    if (s.type === 'text') {
      const id2 = slug(s.title);
      return `<h2 id="${id2}" class="h-anchor" data-toc="${esc(s.title)}">${esc(s.title)}<a class="anchor" href="#/m/${m.id}?s=${id2}" aria-label="Link">#</a></h2>${s.content}`;
    }
    if (s.type === 'code') {
      return `<h3>${esc(s.title)}</h3>${codeBlock(s)}`;
    }
    if (s.type === 'info') return callout(s);
    return '';
  }).join('');

  // Exercises
  let exHtml = '';
  if (m.exercises && m.exercises.length) {
    const list = m.exercises.map(ex => exerciseRow(ex)).join('');
    exHtml = `<h2 id="exercicios" class="doc-section-title h-anchor" data-toc="Exercícios">Exercícios <span class="cnt">${m.exercises.length}</span></h2>
      <p style="color:var(--text-mute);font-size:14px;margin-top:-6px">Responda para fixar. Digite a resposta e verifique — use a dica se travar.</p>
      <div class="ex-list">${list}</div>`;
  }

  // Related (same category)
  let relHtml = '';
  if (cat) {
    const related = cat.items.filter(it => it.type === 'module' && it.id !== id).map(it => MOD_BY_ID[it.id]).filter(Boolean);
    if (related.length) {
      relHtml = `<div class="related"><h2 class="doc-section-title h-anchor" id="relacionados" data-toc="Páginas relacionadas">Páginas relacionadas</h2>
        <div class="related-grid">${related.map(r => `
          <a class="related-card" href="#/m/${r.id}">
            <div class="rc-ico">${r.icon}</div>
            <div class="rc-t">${esc(r.title)}</div>
            <div class="rc-d">${esc(r.description)}</div>
          </a>`).join('')}</div></div>`;
    }
  }

  // Pager
  const idx = MOD_ORDER.indexOf(id);
  const prev = idx > 0 ? MOD_BY_ID[MOD_ORDER[idx - 1]] : null;
  const next = idx < MOD_ORDER.length - 1 ? MOD_BY_ID[MOD_ORDER[idx + 1]] : null;
  const pager = `<div class="pager">
    ${prev ? `<a href="#/m/${prev.id}"><div class="pg-dir">← Anterior</div><div class="pg-t">${esc(prev.title)}</div></a>` : '<span></span>'}
    ${next ? `<a class="pg-next" href="#/m/${next.id}"><div class="pg-dir">Próximo →</div><div class="pg-t">${esc(next.title)}</div></a>` : '<span></span>'}
  </div>`;

  const fav = isFav(id), read = isRead(id);
  const docLink = (m.docs && m.docs[0])
    ? `<a class="btn" href="${esc(m.docs[0])}" target="_blank" rel="noopener">${extLinkIcon()} Documentação oficial</a>` : '';

  setContent(`<article class="doc">
    ${crumbs([{ label: 'Início', href: '#/' }, { label: cat ? cat.label : 'Módulo', href: cat ? itemRoute(cat.items[0]) : '#/' }, { label: m.title }])}
    <header class="doc-head">
      <div class="doc-eyebrow">
        <span class="doc-badge lvl-${m.level}">Módulo ${m.number}</span>
        <span class="doc-badge lvl-${m.level}">${esc(levelName)}</span>
      </div>
      <h1 class="doc-h1"><span class="doc-h1-icon">${m.icon}</span>${esc(m.title)}</h1>
      <p class="doc-lede">${esc(m.description)}</p>
      <div class="doc-actions">
        <button class="btn ${read ? 'is-active' : ''}" data-read="${id}">${read ? '✓ Concluído' : 'Marcar como concluído'}</button>
        <button class="btn ${fav ? 'is-active' : ''}" data-fav="${id}">${fav ? '★ Favoritado' : '☆ Favoritar'}</button>
        ${docLink}
      </div>
      <div class="doc-topics">${(m.topics || []).map(t => `<span class="topic-chip">${esc(t)}</span>`).join('')}</div>
    </header>
    <div class="prose">${body}</div>
    ${exHtml}
    ${relHtml}
    ${pager}
  </article>`);
}

function exerciseRow(ex) {
  const done = isRead('ex:' + ex.id);
  return `<div class="ex ${done ? 'done' : ''}" data-ex="${ex.id}">
    <div class="ex-q" data-ex-toggle>
      <span class="ex-diff ${ex.difficulty}">${ex.difficulty}</span>
      <span class="ex-text">${esc(ex.question)}</span>
      <span class="ex-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
    </div>
    <div class="ex-answer">
      <div class="ex-input-row">
        <input class="ex-input" type="text" placeholder="Sua resposta…" data-ex-input />
        <button class="btn btn-primary" data-ex-check>Verificar</button>
        <button class="btn" data-ex-hint>💡 Dica</button>
      </div>
      <div class="ex-feedback" hidden></div>
      <div class="ex-hint" hidden>${esc(ex.hint)}</div>
    </div>
  </div>`;
}

// ============================================================
// PAGE: HOME
// ============================================================
function renderHome() {
  const totalEx = MODULES.reduce((a, m) => a + (m.exercises ? m.exercises.length : 0), 0);
  const cats = NAV.filter(c => !['pratica', 'referencia'].includes(c.key)).map(c => {
    const first = c.items[0];
    const names = c.items.map(itemLabel).join(' · ');
    return `<a class="cat-card" href="${itemRoute(first)}">
      <div class="cat-card-top"><span class="cat-card-ico">${c.icon}</span><span class="cat-card-n">${esc(c.label)}</span></div>
      <div class="cat-card-items">${esc(names)}</div>
      <div class="cat-card-count">${c.items.length} ${c.items.length === 1 ? 'página' : 'páginas'} →</div>
    </a>`;
  }).join('');

  const hist = store.get(LS.hist, []).slice(0, 6);
  const histHtml = hist.length ? `<div class="recent-list">${hist.map(h => {
    const m = MOD_BY_ID[h.id]; if (!m) return '';
    return `<a class="recent-row" href="#/m/${m.id}"><span class="recent-ico">${m.icon}</span><span class="recent-t">${esc(m.title)}</span><span class="recent-meta">${timeAgo(h.t)}</span></a>`;
  }).join('')}</div>` : `<div class="empty-note">Nenhuma página visitada ainda. Comece pela <a href="#/m/introducao" style="color:var(--accent)">Introdução</a>.</div>`;

  setContent(`<div class="doc">
    <section class="home-hero">
      <span class="home-kicker"><span class="dot"></span>Caderno de Estudos · Baseado na documentação oficial</span>
      <h1 class="home-title">Seu segundo cérebro para dominar <span class="hl">Ruby</span></h1>
      <p class="home-sub">Uma wiki de estudos organizada como um caderno inteligente: pesquise qualquer assunto, leia a teoria, veja exemplos, treine com exercícios e volte quando precisar. Do zero ao nível profissional.</p>
      <div class="home-cta">
        <a class="btn btn-primary" href="#/m/introducao">Começar pela Introdução →</a>
        <button class="btn" data-open-search>🔍 Pesquisar &nbsp;<kbd>Ctrl K</kbd></button>
      </div>
    </section>

    <div class="home-stats">
      <div class="home-stat"><div class="n">${MODULES.length}</div><div class="l">Módulos de estudo</div></div>
      <div class="home-stat"><div class="n">${totalEx}</div><div class="l">Exercícios</div></div>
      <div class="home-stat"><div class="n">${CHALLENGES.length + PROJECTS.length}</div><div class="l">Desafios & Projetos</div></div>
      <div class="home-stat"><div class="n">${DOCS_DATA.length}</div><div class="l">Cartões de referência</div></div>
    </div>

    <h2 class="home-h2">Explorar por categoria</h2>
    <p class="home-h2-sub">Navegue pela barra lateral ou escolha um tema para começar.</p>
    <div class="cat-grid">${cats}</div>

    <h2 class="home-h2" style="margin-top:44px">Continue de onde parou</h2>
    <p class="home-h2-sub">Seu histórico recente de estudos.</p>
    ${histHtml}
  </div>`);
}

// ============================================================
// PAGE: EXERCISES (all)
// ============================================================
function renderExercises() {
  const all = [];
  MODULES.forEach(m => (m.exercises || []).forEach(ex => all.push({ ...ex, mod: m })));

  setContent(`<div class="doc">
    ${crumbs([{ label: 'Início', href: '#/' }, { label: 'Prática', href: '#/exercicios' }, { label: 'Exercícios' }])}
    <header class="doc-head">
      <div class="doc-eyebrow"><span class="doc-badge">Prática</span></div>
      <h1 class="doc-h1"><span class="doc-h1-icon">🏋️</span>Exercícios</h1>
      <p class="doc-lede">${all.length} exercícios de todos os módulos. Filtre por dificuldade e treine.</p>
      <div class="filter-row" id="exFilter" style="margin-top:16px">
        <button class="chip-btn active" data-f="all">Todos</button>
        <button class="chip-btn" data-f="facil">Fácil</button>
        <button class="chip-btn" data-f="medio">Médio</button>
        <button class="chip-btn" data-f="dificil">Difícil</button>
      </div>
    </header>
    <div class="ex-list" id="exAll">${all.map(ex => exerciseRowWithMod(ex)).join('')}</div>
  </div>`);

  $('#exFilter').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-f]'); if (!btn) return;
    $('#exFilter').querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.f;
    $('#exAll').querySelectorAll('.ex').forEach(row => {
      row.style.display = (f === 'all' || row.dataset.diff === f) ? '' : 'none';
    });
  });
}
function exerciseRowWithMod(ex) {
  const done = isRead('ex:' + ex.id);
  return `<div class="ex ${done ? 'done' : ''}" data-ex="${ex.id}" data-diff="${ex.difficulty}">
    <div class="ex-q" data-ex-toggle>
      <span class="ex-diff ${ex.difficulty}">${ex.difficulty}</span>
      <span class="ex-text">${esc(ex.question)}<br><a href="#/m/${ex.mod.id}" style="font-size:12px;color:var(--text-faint);font-weight:400" onclick="event.stopPropagation()">${ex.mod.icon} ${esc(ex.mod.title)}</a></span>
      <span class="ex-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
    </div>
    <div class="ex-answer">
      <div class="ex-input-row">
        <input class="ex-input" type="text" placeholder="Sua resposta…" data-ex-input />
        <button class="btn btn-primary" data-ex-check>Verificar</button>
        <button class="btn" data-ex-hint>💡 Dica</button>
      </div>
      <div class="ex-feedback" hidden></div>
      <div class="ex-hint" hidden>${esc(ex.hint)}</div>
    </div>
  </div>`;
}

// ============================================================
// PAGE: CHALLENGES
// ============================================================
function renderChallenges() {
  const cards = CHALLENGES.map(c => `
    <div class="info-card">
      <div class="info-card-top"><span class="info-card-ico">${c.icon}</span><span class="info-card-title">${esc(c.title)}</span></div>
      <div class="info-card-desc">${esc(c.description)}</div>
      <div class="info-card-meta"><span class="ex-diff ${c.difficulty}">${c.difficulty}</span></div>
      <details style="margin-top:12px">
        <summary style="cursor:pointer;font-size:13px;color:var(--accent);font-weight:600">Ver dica</summary>
        <div class="ex-hint" style="display:block;margin-top:8px">${esc(c.hint)}</div>
      </details>
      <div class="info-card-foot"><span>Desafio prático</span><span class="pts">+${c.points} pts</span></div>
    </div>`).join('');

  setContent(`<div class="doc">
    ${crumbs([{ label: 'Início', href: '#/' }, { label: 'Prática', href: '#/desafios' }, { label: 'Desafios' }])}
    <header class="doc-head">
      <div class="doc-eyebrow"><span class="doc-badge">Prática</span></div>
      <h1 class="doc-h1"><span class="doc-h1-icon">🎯</span>Desafios</h1>
      <p class="doc-lede">Problemas reais para testar o que você aprendeu. Tente resolver antes de ver a dica.</p>
    </header>
    <div class="card-grid">${cards}</div>
  </div>`);
}

// ============================================================
// PAGE: PROJECTS
// ============================================================
function renderProjects() {
  const levelName = { iniciante: 'Iniciante', intermediario: 'Intermediário', avancado: 'Avançado' };
  const cards = PROJECTS.map(p => `
    <div class="info-card">
      <div class="info-card-top"><span class="info-card-title">${esc(p.title)}</span></div>
      <div class="info-card-desc">${esc(p.description)}</div>
      <div class="info-card-meta">${(p.techs || []).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      <div class="info-card-foot"><span>${esc(levelName[p.level] || p.level)}</span></div>
      <div style="margin-top:10px;font-size:13px;color:var(--text-mute)"><strong style="color:var(--text)">Como fazer:</strong> ${esc(p.details)}</div>
    </div>`).join('');

  setContent(`<div class="doc">
    ${crumbs([{ label: 'Início', href: '#/' }, { label: 'Prática', href: '#/projetos' }, { label: 'Projetos' }])}
    <header class="doc-head">
      <div class="doc-eyebrow"><span class="doc-badge">Prática</span></div>
      <h1 class="doc-h1"><span class="doc-h1-icon">🛠️</span>Projetos</h1>
      <p class="doc-lede">Construa aplicações completas para consolidar o aprendizado — do simples ao avançado.</p>
    </header>
    <div class="card-grid">${cards}</div>
  </div>`);
}

// ============================================================
// PAGE: REFERENCE (quick docs)
// ============================================================
function renderReference() {
  const categories = [...new Set(DOCS_DATA.map(d => d.category))];
  setContent(`<div class="doc">
    ${crumbs([{ label: 'Início', href: '#/' }, { label: 'Referência Rápida' }])}
    <header class="doc-head">
      <div class="doc-eyebrow"><span class="doc-badge">Referência</span></div>
      <h1 class="doc-h1"><span class="doc-h1-icon">📖</span>Referência Rápida</h1>
      <p class="doc-lede">Cartões de consulta com sintaxe e exemplos. Filtre por categoria e copie o que precisar.</p>
      <div class="filter-row" id="refFilter" style="margin-top:16px">
        <button class="chip-btn active" data-c="all">Todas</button>
        ${categories.map(c => `<button class="chip-btn" data-c="${esc(c)}">${esc(c)}</button>`).join('')}
      </div>
    </header>
    <div class="ref-grid" id="refGrid"></div>
  </div>`);
  renderRefCards('all');
  $('#refFilter').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-c]'); if (!btn) return;
    $('#refFilter').querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderRefCards(btn.dataset.c);
  });
}
function renderRefCards(cat) {
  const list = cat === 'all' ? DOCS_DATA : DOCS_DATA.filter(d => d.category === cat);
  $('#refGrid').innerHTML = list.map(d => `
    <div class="doc-ref">
      <div class="doc-ref-head"><span class="doc-ref-title">${esc(d.title)}</span><span class="doc-ref-cat">${esc(d.category)}</span></div>
      <div class="doc-ref-desc">${esc(d.desc)}</div>
      <div class="code-block" style="margin:0;border:0;border-radius:0;box-shadow:none">
        <div class="code-head"><div class="code-dots"><i></i><i></i><i></i></div><span class="code-lang">ruby</span><button class="code-copy" data-copy>${copyIcon()}<span>Copiar</span></button></div>
        <pre><code>${highlightRuby(d.code)}</code></pre>
      </div>
      ${d.url ? `<a class="doc-ref-link" href="${esc(d.url)}" target="_blank" rel="noopener">${extLinkIcon()} Documentação oficial</a>` : ''}
    </div>`).join('');
}

// ============================================================
// PAGE: FAVORITES / HISTORY
// ============================================================
function renderFavorites() {
  const favs = store.get(LS.fav, []).map(id => MOD_BY_ID[id]).filter(Boolean);
  const body = favs.length
    ? `<div class="related-grid">${favs.map(m => `<a class="related-card" href="#/m/${m.id}"><div class="rc-ico">${m.icon}</div><div class="rc-t">${esc(m.title)}</div><div class="rc-d">${esc(m.description)}</div></a>`).join('')}</div>`
    : `<div class="empty-note">Você ainda não favoritou páginas. Abra um módulo e clique em <strong>☆ Favoritar</strong> para guardá-lo aqui.</div>`;
  setContent(`<div class="doc">
    ${crumbs([{ label: 'Início', href: '#/' }, { label: 'Favoritos' }])}
    <header class="doc-head">
      <div class="doc-eyebrow"><span class="doc-badge">★ Salvos</span></div>
      <h1 class="doc-h1"><span class="doc-h1-icon">⭐</span>Favoritos</h1>
      <p class="doc-lede">Suas páginas marcadas para acesso rápido.</p>
    </header>${body}</div>`);
}
function renderHistory() {
  const hist = store.get(LS.hist, []);
  const body = hist.length
    ? `<div class="recent-list">${hist.map(h => { const m = MOD_BY_ID[h.id]; if (!m) return ''; return `<a class="recent-row" href="#/m/${m.id}"><span class="recent-ico">${m.icon}</span><span class="recent-t">${esc(m.title)}</span><span class="recent-meta">${timeAgo(h.t)}</span></a>`; }).join('')}</div>
       <button class="btn" id="clearHist" style="margin-top:16px">Limpar histórico</button>`
    : `<div class="empty-note">Nenhuma página no histórico ainda.</div>`;
  setContent(`<div class="doc">
    ${crumbs([{ label: 'Início', href: '#/' }, { label: 'Histórico' }])}
    <header class="doc-head">
      <div class="doc-eyebrow"><span class="doc-badge">🕘 Recentes</span></div>
      <h1 class="doc-h1"><span class="doc-h1-icon">🕘</span>Histórico</h1>
      <p class="doc-lede">As últimas páginas que você visitou.</p>
    </header>${body}</div>`);
  const clr = $('#clearHist');
  if (clr) clr.addEventListener('click', () => { store.set(LS.hist, []); renderHistory(); });
}

function renderNotFound() {
  setContent(`<div class="doc"><header class="doc-head"><h1 class="doc-h1">🤔 Página não encontrada</h1><p class="doc-lede">Volte para a <a href="#/" style="color:var(--accent)">página inicial</a>.</p></header></div>`);
}

// ============================================================
// CONTENT MOUNT + TOC
// ============================================================
function setContent(html) {
  const el = $('#content');
  el.innerHTML = html;
  buildTOC();
  window.scrollTo(0, 0);
  el.focus({ preventScroll: true });
}

function buildTOC() {
  const toc = $('#toc');
  const heads = [...document.querySelectorAll('#content .h-anchor[id]')];
  if (heads.length < 2) { toc.innerHTML = ''; return; }
  toc.innerHTML = `<div class="toc-title">Nesta página</div><ul>${heads.map(h =>
    `<li><a href="#${h.id}" data-target="${h.id}">${esc(h.dataset.toc || h.textContent.replace('#', ''))}</a></li>`
  ).join('')}</ul>`;
  toc.querySelectorAll('a').forEach(a => a.addEventListener('click', (e) => {
    e.preventDefault();
    const t = document.getElementById(a.dataset.target);
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
  syncTOC();
}
function syncTOC() {
  const links = [...document.querySelectorAll('#toc a')];
  if (!links.length) return;
  const marker = 120;
  let current = links[0];
  for (const a of links) {
    const t = document.getElementById(a.dataset.target);
    if (t && t.getBoundingClientRect().top <= marker) current = a;
  }
  links.forEach(a => a.classList.toggle('active', a === current));
}

// ============================================================
// ROUTER
// ============================================================
function router() {
  const raw = location.hash.slice(1) || '/';
  const [path, query] = raw.split('?');
  const seg = path.split('/').filter(Boolean); // e.g. ['m','introducao']
  let activeRoute = '#/';

  if (seg.length === 0) { renderHome(); activeRoute = '#/'; }
  else if (seg[0] === 'm' && seg[1]) { renderModule(seg[1]); activeRoute = ROUTE.module(seg[1]); }
  else if (path === '/exercicios') { renderExercises(); activeRoute = '#/exercicios'; }
  else if (path === '/desafios') { renderChallenges(); activeRoute = '#/desafios'; }
  else if (path === '/projetos') { renderProjects(); activeRoute = '#/projetos'; }
  else if (path === '/referencia') { renderReference(); activeRoute = '#/referencia'; }
  else if (path === '/favoritos') { renderFavorites(); activeRoute = '#/favoritos'; }
  else if (path === '/historico') { renderHistory(); activeRoute = '#/historico'; }
  else { renderNotFound(); }

  setActiveNav(activeRoute);
  updateProgress();

  // deep-link to section
  if (query) {
    const s = new URLSearchParams(query).get('s');
    if (s) { const t = document.getElementById(s); if (t) setTimeout(() => t.scrollIntoView({ block: 'start' }), 40); }
  }
}

// ============================================================
// SEARCH
// ============================================================
let SEARCH_INDEX = [];
function buildSearchIndex() {
  const idx = [];
  MODULES.forEach(m => {
    idx.push({ kind: 'Módulo', icon: m.icon, title: m.title, sub: m.description, route: ROUTE.module(m.id),
      hay: (m.title + ' ' + m.description + ' ' + (m.topics || []).join(' ')).toLowerCase() });
    (m.sections || []).forEach(s => {
      if (s.type === 'text') {
        idx.push({ kind: 'Seção', icon: '📄', title: s.title, sub: m.title, route: `${ROUTE.module(m.id)}?s=${slug(s.title)}`,
          hay: (s.title + ' ' + stripHtml(s.content || '')).toLowerCase() });
      }
    });
    (m.exercises || []).forEach(ex => {
      idx.push({ kind: 'Exercício', icon: '🏋️', title: ex.question, sub: m.title, route: `${ROUTE.module(m.id)}?s=exercicios`,
        hay: (ex.question + ' ' + ex.answer).toLowerCase() });
    });
  });
  CHALLENGES.forEach(c => idx.push({ kind: 'Desafio', icon: c.icon, title: c.title, sub: c.description, route: '#/desafios', hay: (c.title + ' ' + c.description).toLowerCase() }));
  PROJECTS.forEach(p => idx.push({ kind: 'Projeto', icon: '🛠️', title: p.title, sub: p.description, route: '#/projetos', hay: (p.title + ' ' + p.description + ' ' + (p.techs || []).join(' ')).toLowerCase() }));
  DOCS_DATA.forEach(d => idx.push({ kind: 'Referência', icon: '📖', title: d.title, sub: d.desc, route: '#/referencia', hay: (d.title + ' ' + d.desc + ' ' + d.code).toLowerCase() }));
  SEARCH_INDEX = idx;
}

function searchQuery(q) {
  q = q.trim().toLowerCase();
  if (!q) return [];
  const words = q.split(/\s+/);
  const scored = [];
  for (const it of SEARCH_INDEX) {
    const title = it.title.toLowerCase();
    if (!words.every(w => it.hay.includes(w))) continue;
    let score = 0;
    if (title === q) score += 200;
    if (title.startsWith(q)) score += 90;
    if (title.includes(q)) score += 55;
    for (const w of words) { if (title.includes(w)) score += 12; if (it.sub.toLowerCase().includes(w)) score += 4; }
    if (it.kind === 'Módulo') score += 8;
    scored.push({ it, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 28).map(s => s.it);
}

let searchResults = [], searchSel = 0;
function renderSearchResults(q) {
  const box = $('#searchResults');
  if (!q.trim()) {
    const favs = store.get(LS.fav, []).map(id => MOD_BY_ID[id]).filter(Boolean).slice(0, 4);
    const hist = store.get(LS.hist, []).map(h => MOD_BY_ID[h.id]).filter(Boolean).slice(0, 4);
    const sugg = (hist.length ? hist : MODULES.slice(0, 5));
    searchResults = sugg.map(m => ({ kind: 'Módulo', icon: m.icon, title: m.title, sub: m.description, route: ROUTE.module(m.id) }));
    box.innerHTML = (favs.length ? group('★ Favoritos', favs.map(m => ({ kind: 'Módulo', icon: m.icon, title: m.title, sub: m.description, route: ROUTE.module(m.id) }))) : '')
      + group(hist.length ? '🕘 Recentes' : '💡 Sugestões', searchResults);
    searchResults = (favs.length ? favs.map(m => ({ route: ROUTE.module(m.id) })) : []).concat(searchResults);
    // rebuild flat list for keyboard nav
    flattenSearchDOM();
    return;
  }
  const res = searchQuery(q);
  searchResults = res;
  if (!res.length) {
    box.innerHTML = `<div class="search-empty"><div class="big">🔍</div>Nenhum resultado para "<strong>${esc(q)}</strong>".<br>Tente outro termo, como "array", "each" ou "classe".</div>`;
    return;
  }
  // group by kind
  const order = ['Módulo', 'Seção', 'Referência', 'Exercício', 'Desafio', 'Projeto'];
  const groups = {};
  res.forEach(r => { (groups[r.kind] = groups[r.kind] || []).push(r); });
  box.innerHTML = order.filter(k => groups[k]).map(k => group(k + 's', groups[k], q)).join('');
  flattenSearchDOM();
}
function group(label, items, q) {
  return `<div class="search-group-label">${esc(label)}</div>` + items.map(it => `
    <a class="search-item" href="${it.route}" data-route="${it.route}">
      <span class="search-item-ico">${it.icon}</span>
      <span class="search-item-main"><span class="search-item-t">${q ? mark(it.title, q) : esc(it.title)}</span><span class="search-item-d">${esc(it.sub || '')}</span></span>
      <span class="search-item-cat">${esc(it.kind || '')}</span>
    </a>`).join('');
}
function mark(text, q) {
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return esc(text);
  return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
}
function flattenSearchDOM() {
  const items = [...document.querySelectorAll('#searchResults .search-item')];
  searchSel = 0;
  items.forEach((el, i) => el.classList.toggle('sel', i === 0));
}
function moveSearchSel(dir) {
  const items = [...document.querySelectorAll('#searchResults .search-item')];
  if (!items.length) return;
  items[searchSel]?.classList.remove('sel');
  searchSel = (searchSel + dir + items.length) % items.length;
  const el = items[searchSel];
  el.classList.add('sel');
  el.scrollIntoView({ block: 'nearest' });
}
function openSelectedSearch() {
  const items = [...document.querySelectorAll('#searchResults .search-item')];
  const el = items[searchSel];
  if (el) { location.hash = el.dataset.route; closeSearch(); }
}
function openSearch() {
  $('#searchModal').classList.add('open');
  $('#searchModal').setAttribute('aria-hidden', 'false');
  const input = $('#searchInput');
  input.value = ''; renderSearchResults('');
  setTimeout(() => input.focus(), 20);
}
function closeSearch() {
  $('#searchModal').classList.remove('open');
  $('#searchModal').setAttribute('aria-hidden', 'true');
}

// ============================================================
// SIDEBAR MOBILE
// ============================================================
function openSidebar() { $('#sidebar').classList.add('open'); $('#scrim').classList.add('show'); }
function closeSidebar() { $('#sidebar').classList.remove('open'); $('#scrim').classList.remove('show'); }

// ============================================================
// THEME
// ============================================================
function initTheme() {
  const saved = store.get(LS.theme, null);
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) document.documentElement.setAttribute('data-theme', 'light');
  $('#themeBtn').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', cur);
    store.set(LS.theme, cur);
  });
}

// ============================================================
// GLOBAL EVENT WIRING
// ============================================================
function initEvents() {
  // theme + menu
  $('#menuBtn').addEventListener('click', () => {
    $('#sidebar').classList.contains('open') ? closeSidebar() : openSidebar();
  });
  $('#scrim').addEventListener('click', closeSidebar);

  // search open/close
  $('#searchBtn').addEventListener('click', openSearch);
  $('#searchClose').addEventListener('click', closeSearch);
  $('#searchModal').addEventListener('click', (e) => { if (e.target.id === 'searchModal') closeSearch(); });
  $('#searchInput').addEventListener('input', (e) => renderSearchResults(e.target.value));
  $('#searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); moveSearchSel(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); moveSearchSel(-1); }
    else if (e.key === 'Enter') { e.preventDefault(); openSelectedSearch(); }
    else if (e.key === 'Escape') { closeSearch(); }
  });
  $('#searchResults').addEventListener('click', (e) => {
    const item = e.target.closest('.search-item');
    if (item) { e.preventDefault(); location.hash = item.dataset.route; closeSearch(); }
  });

  // global keyboard
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
    else if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
    else if (e.key === 'Escape') { closeSearch(); closeSidebar(); }
  });

  // content-level clicks (copy, fav, read, exercises, open-search)
  $('#content').addEventListener('click', (e) => {
    const copy = e.target.closest('[data-copy]');
    if (copy) return handleCopy(copy);

    const favBtn = e.target.closest('[data-fav]');
    if (favBtn) {
      const on = toggleFav(favBtn.dataset.fav);
      favBtn.classList.toggle('is-active', on);
      favBtn.textContent = on ? '★ Favoritado' : '☆ Favoritar';
      return;
    }
    const readBtn = e.target.closest('[data-read]');
    if (readBtn) {
      const on = toggleRead(readBtn.dataset.read);
      readBtn.classList.toggle('is-active', on);
      readBtn.textContent = on ? '✓ Concluído' : 'Marcar como concluído';
      return;
    }
    if (e.target.closest('[data-open-search]')) return openSearch();

    // exercises
    const toggle = e.target.closest('[data-ex-toggle]');
    if (toggle) { toggle.closest('.ex').classList.toggle('open'); return; }
    const check = e.target.closest('[data-ex-check]');
    if (check) return handleExCheck(check);
    const hint = e.target.closest('[data-ex-hint]');
    if (hint) { const h = hint.closest('.ex-answer').querySelector('.ex-hint'); h.hidden = !h.hidden; return; }
  });
  $('#content').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.matches('[data-ex-input]')) {
      const btn = e.target.closest('.ex-answer').querySelector('[data-ex-check]');
      handleExCheck(btn);
    }
  });

  // scroll: toc spy + to-top
  const toTop = $('#toTop');
  window.addEventListener('scroll', () => {
    syncTOC();
    toTop.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  window.addEventListener('hashchange', router);
}

function handleCopy(btn) {
  const code = btn.closest('.code-block').querySelector('code');
  const text = code.innerText;
  navigator.clipboard?.writeText(text).then(() => {
    btn.classList.add('copied');
    const span = btn.querySelector('span'); const old = span.textContent; span.textContent = 'Copiado!';
    setTimeout(() => { btn.classList.remove('copied'); span.textContent = old; }, 1400);
  }).catch(() => {});
}
function handleExCheck(btn) {
  const ex = btn.closest('.ex');
  const id = ex.dataset.ex;
  const input = ex.querySelector('[data-ex-input]');
  const feedback = ex.querySelector('.ex-feedback');
  const answer = findExerciseAnswer(id);
  const norm = s => String(s).toLowerCase().trim().replace(/\s+/g, ' ');
  const user = norm(input.value);
  feedback.hidden = false;
  if (!user) { feedback.className = 'ex-feedback no'; feedback.textContent = 'Digite uma resposta primeiro.'; return; }
  const ok = answer && (norm(answer) === user || norm(answer).includes(user) && user.length > 2);
  if (ok) {
    feedback.className = 'ex-feedback ok'; feedback.textContent = '✓ Correto! Muito bem.';
    ex.classList.add('done');
    if (!isRead('ex:' + id)) toggleRead('ex:' + id);
  } else {
    feedback.className = 'ex-feedback no'; feedback.textContent = `✗ Não é bem isso. Resposta esperada: "${answer}". Tente entender o porquê.`;
  }
}
function findExerciseAnswer(id) {
  for (const m of MODULES) { const ex = (m.exercises || []).find(e => e.id === id); if (ex) return ex.answer; }
  return null;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSidebar();
  buildSearchIndex();
  initEvents();
  updateProgress();
  router();
});

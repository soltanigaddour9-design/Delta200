import { AREAS, TOPICS, areaById, topicById, topicsOf, SCHOLARS, scholarById, scholarSlug } from './data/index.js';
import { QUALS, qualById } from './data/quals.js';
import { GLOSSARY } from './data/glossary.js';
import { renderViz } from './viz.js';
import { GAMES, mountGame } from './games.js';
import { S, save, resetAll, recordRecall, topicStage, dueTopics, nextDueLabel, mastery, streak, level, addXP, touchDay, saveQuiz, bestScore, cardsDue } from './store.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const md = s => esc(s).replace(/\/([^\/<>*\n]{1,60}?)\//g, '<span class="ipa">/$1/</span>').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
const view = $('#view');
let morphPending = false;

/* ---------------- navigation ---------------- */
const QUAL_COLORS = { delta1: '#5b8cff', delta2: '#ff8a3d', delta3: '#c084fc', diptesol: '#9be15d' };
function buildNav() {
  const groups = [
    ['Start', [['#/', 'Home', '#d4ff3a'], ['#/map', 'Knowledge map', '#f5f1e8', TOPICS.length]]],
    ['Knowledge', AREAS.map(a => [`#/area/${a.id}`, a.name, a.c, topicsOf(a.id).length])],
    ['Qualifications', QUALS.map(q => [`#/qual/${q.id}`, q.title, QUAL_COLORS[q.id]])],
    ['Library', [['#/scholars', 'Scholars and sources', '#ffcf6b', SCHOLARS.length], ['#/glossary', 'Glossary', '#f5d0a9', GLOSSARY.length]]],
    ['Practise', [['#/arcade', 'Games arcade', '#ff4fd8', GAMES.length], ['#/focus', 'Focus room', '#5eead4'], ['#/progress', 'My progress', '#facc15']]]
  ];
  $('#nav').innerHTML = groups.map(([h, items]) => `<h6>${h}</h6>` + items.map(([href, label, c, cnt]) => `<a href="${href}" style="--c:${c}"><span class="nd"></span>${esc(label)}${cnt ? `<span class="cnt">${cnt}</span>` : ''}</a>`).join('')).join('');
  $('#tabbar').innerHTML = [['#/', '⌂', 'Home'], ['#/map', '✦', 'Learn'], ['#/quals', '◎', 'Exams'], ['#/arcade', '▶', 'Games'], ['#/scholars', '✎', 'Scholars']].map(([h, i, l]) => `<a href="${h}"><i>${i}</i>${l}</a>`).join('');
}
function markNav(hash) {
  let key = hash.split('?')[0];
  const tm = key.match(/^#\/topic\/([\w-]+)/); if (tm) { const t = topicById(tm[1]); if (t) key = '#/area/' + t.area; }
  if (key.startsWith('#/game/')) key = '#/arcade';
  if (key.startsWith('#/scholar/')) key = '#/scholars';
  const tabKey = key.startsWith('#/area') || key === '#/map' ? '#/map' : key.startsWith('#/qual') ? '#/quals' : key;
  $$('#nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === key));
  $$('#tabbar a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === tabKey));
}
function updateMe() {
  const ids = TOPICS.map(t => t.id);
  const p = mastery(ids);
  $('#meRing').style.setProperty('--p', Math.max(2, p));
  const lv = level();
  $('#meLevel').textContent = `Level ${lv.n} · ${lv.name}`;
}
function crumbs(items) {
  $('#crumbs').innerHTML = items.map((it, i) => i === items.length - 1 ? `<span class="here">${esc(it[0])}</span>` : `<a href="${it[1]}">${esc(it[0])}</a><span class="sep">/</span>`).join('');
}

/* ---------------- router ---------------- */
const routes = [
  [/^#\/?$/, home], [/^#\/map$/, mapView], [/^#\/area\/([\w-]+)$/, areaView], [/^#\/topic\/([\w-]+)$/, topicView],
  [/^#\/quals$/, qualsView], [/^#\/qual\/([\w-]+)$/, qualView], [/^#\/arcade$/, arcadeView], [/^#\/game\/([\w-]+(?:\?.*)?)$/, gameView],
  [/^#\/focus$/, focusView], [/^#\/glossary$/, glossaryView], [/^#\/progress$/, progressView],
  [/^#\/scholars$/, scholarsView], [/^#\/scholar\/([\w-]+)$/, scholarView]
];
let cleanup = null;
function render() {
  const hash = location.hash || '#/';
  if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
  let matched = false;
  for (const [re, fn] of routes) {
    const m = hash.match(re);
    if (m) { matched = true; cleanup = fn(...m.slice(1)) || null; break; }
  }
  if (!matched) cleanup = home() || null;
  markNav(hash); updateMe();
  view.classList.remove('view-enter'); void view.offsetWidth; view.classList.add('view-enter');
  if (morphPending) { const h = $('.hero', view); if (h) h.style.viewTransitionName = 'morph'; }
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.body.classList.remove('menu-open');
  afterRender();
}
function go() {
  if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const t = document.startViewTransition(() => render());
    t.finished.finally(() => { requestAnimationFrame(() => { document.body.style.outline = '1px solid transparent'; requestAnimationFrame(() => { document.body.style.outline = ''; }); }); morphPending = false; $$('[style*="view-transition-name"]').forEach(el => { if (el.id !== 'sidebar') el.style.viewTransitionName = ''; }); });
  } else { render(); morphPending = false; }
}
window.addEventListener('hashchange', go);
document.addEventListener('click', e => {
  const m = e.target.closest('[data-morph]');
  if (m && m.getAttribute('href') && m.getAttribute('href') !== location.hash) { m.style.viewTransitionName = 'morph'; morphPending = true; }
});

/* ---------------- shared bits ---------------- */
function setSection(id) { document.body.dataset.section = id; }
const WAVES = `<svg class="waves" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="wg" x1="0" x2="1"><stop offset="0" stop-color="var(--accent)" stop-opacity="0"/><stop offset=".45" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--accent2)"/></linearGradient></defs><path d="M0,210 C220,120 380,280 620,170 S1000,60 1200,140"/><path d="M0,240 C260,150 420,300 660,200 S1020,90 1200,170"/><path d="M0,180 C200,90 400,250 600,150 S980,40 1200,110"/></svg>`;
function hero({ eyebrow, title, lead, meta = '', extra = '' }) {
  return `<section class="hero"><span class="depth"></span>${WAVES}<div class="squares"><i></i><i></i><i></i><i></i></div><div class="eyebrow">${esc(eyebrow)}</div><h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}${meta ? `<div class="meta">${meta}</div>` : ''}${extra}</section>`;
}
const chip = (t, c) => `<span class="chip${c ? ' c' : ''}"${c ? ` style="--c:${c}"` : ''}>${esc(t)}</span>`;
const qualChip = q => chip(q, q.startsWith('Delta M1') ? QUAL_COLORS.delta1 : q.startsWith('Delta M2') ? QUAL_COLORS.delta2 : q.startsWith('Delta M3') ? QUAL_COLORS.delta3 : QUAL_COLORS.diptesol);
function topicCard(t) {
  const a = areaById(t.area); const st = topicStage(t.id);
  return `<a class="card link rv" href="#/topic/${t.id}" data-morph style="--c:${a.c}"><span class="glow"></span>
    <div class="top"><span class="icon-tile">${a.icon}</span><span class="chip c" style="--c:${a.c}">${esc(nextDueLabel(S.topics[t.id]))}</span></div>
    <h3>${esc(t.title)}</h3><p>${esc(t.one)}</p>
    <div class="bar"><i data-w="${st * 20}"></i></div>
    <div class="foot"><span>${(t.quals || []).slice(0, 3).map(esc).join(' · ')}</span><span class="arrow"></span></div></a>`;
}
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2600); }
let confettiRun = 0;
export function confetti() {
  const c = $('#confetti'), x = c.getContext('2d'); const run = ++confettiRun; c.style.display = 'block'; c.width = innerWidth; c.height = innerHeight;
  const col = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#d4ff3a';
  const P = Array.from({ length: 140 }, () => ({ x: innerWidth / 2, y: innerHeight / 2, vx: (Math.random() - .5) * 16, vy: Math.random() * -16 - 4, r: Math.random() * 6 + 3, c: [col, '#fff', '#ff4fd8', '#5b8cff', '#ff8a3d'][Math.floor(Math.random() * 5)], a: Math.random() * 6 }));
  let f = 0; (function tick() { x.clearRect(0, 0, c.width, c.height); P.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .45; p.a += .1; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6); x.restore(); }); if (run !== confettiRun) return; if (++f < 120) requestAnimationFrame(tick); else { x.clearRect(0, 0, c.width, c.height); c.style.display = 'none'; } })();
}
window.kaderToast = toast; window.kaderConfetti = confetti;

function afterRender() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0, rootMargin: '0px 0px -40px 0px' });
  $$('.rv', view).forEach((el, i) => { el.style.transitionDelay = `${Math.min(i, 8) * 45}ms`; io.observe(el); });
  requestAnimationFrame(() => setTimeout(() => $$('.bar i[data-w]', view).forEach(b => b.style.width = b.dataset.w + '%'), 120));
  $$('.card.link', view).forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', px * 100 + '%'); card.style.setProperty('--my', py * 100 + '%');
      card.style.transform = `perspective(900px) rotateX(${(.5 - py) * 5}deg) rotateY(${(px - .5) * 6}deg) translateY(-3px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
  $$('[data-count]', view).forEach(el => { const to = +el.dataset.count; let n = 0; const st = Math.max(1, Math.ceil(to / 30)); const iv = setInterval(() => { n = Math.min(to, n + st); el.textContent = n; if (n >= to) clearInterval(iv); }, 30); });
}

/* ---------------- HOME ---------------- */
function home() {
  setSection('home'); crumbs([['Home', '#/']]);
  const due = dueTopics(); const started = Object.keys(S.topics).length;
  const nextNew = TOPICS.find(t => !topicStage(t.id)) || TOPICS[0];
  const dayIndex = Math.floor(Date.now() / 864e5);
  const gotd = GAMES[dayIndex % GAMES.length];
  const sotd = SCHOLARS[(dayIndex * 7) % SCHOLARS.length];
  const glossDue = cardsDue(GLOSSARY.map(g => g.id)).length;
  view.innerHTML = `
  <section class="hero home-hero">
    <canvas id="particles"></canvas>
    <div class="copy">
      <div class="eyebrow">Delta · DipTESOL · Kader's lab</div>
      <h1 class="serif">Think like<span class="line2">a trainer.</span></h1>
      <p class="lead">${TOPICS.length} topics across the Delta and DipTESOL syllabus. Each one is explained simply, backed by the scholars who matter, shown in a real classroom and then tested on you. You recall, you play, and the app schedules the review.</p>
      <div class="actions">
        <a class="btn accent" href="${due.length ? `#/topic/${due[0].id}` : `#/topic/${nextNew.id}`}" data-morph><span class="arrow">${due.length ? `Review ${due.length} due` : 'Start next topic'}</span></a>
        <a class="btn" href="#/map" data-morph><span class="arrow">Open the knowledge map</span></a>
      </div>
      <div class="stats">
        <div class="stat"><b data-count="${TOPICS.length}">0</b><span>topics</span></div>
        <div class="stat"><b data-count="${GLOSSARY.length}">0</b><span>terms</span></div>
        <div class="stat"><b data-count="${SCHOLARS.length}">0</b><span>scholars</span></div>
        <div class="stat"><b>${streak()}</b><span>day streak</span></div>
      </div>
    </div>
    <div class="portrait">
      <span class="blob"></span><span class="halo"></span><span class="orb"></span><span class="orbit o1"><i></i></span><span class="orbit o2"><i></i></span>
      <img class="me-cut" src="assets/kader-cutout.webp" alt="Kader">
      <div class="badge b-a">✓ <span>Delta Module 1 <b>passed</b></span></div>
      <div class="badge b-b">◷ <span><b>${due.length}</b> reviews due today</span></div>
      <div class="badge b-c">✦ <span>Level <b>${level().n}</b> · ${esc(level().name)}</span></div>
    </div>
  </section>
  <div class="strip">${[.12, .3, .55, 1, .2, 1, .55, .3, .12].map(o => `<i style="--o:${o}"></i>`).join('')}</div>

  <div class="section-title"><div><h2>Today's mission</h2><p>Four small things. Real effort, visible to you.</p></div></div>
  <div class="grid g4">
    <a class="card link mission rv" style="--c:#d4ff3a" href="${due.length ? `#/topic/${due[0].id}` : '#/progress'}" data-morph><span class="glow"></span><span class="k">Spaced review</span><h3>${due.length ? `${due.length} topic${due.length > 1 ? 's' : ''} due` : 'Nothing due yet'}</h3><p>${due.length ? esc(topicById(due[0].id)?.title || '') : 'Learn a topic and the app brings it back on day 2, 5, 12 and 30.'}</p><span class="go arrow">Go </span></a>
    <a class="card link mission rv" style="--c:${areaById(nextNew.area).c}" href="#/topic/${nextNew.id}" data-morph><span class="glow"></span><span class="k">Next new topic</span><h3>${esc(nextNew.title)}</h3><p>${esc(nextNew.one)}</p><span class="go arrow">Learn </span></a>
    <a class="card link mission rv" style="--c:#ff4fd8" href="#/game/${gotd.id}" data-morph><span class="glow"></span><span class="k">Game of the day</span><h3>${gotd.emoji} ${esc(gotd.name)}</h3><p>${esc(gotd.desc)}</p><span class="go arrow">Play </span></a>
    <a class="card link mission rv" style="--c:#ffcf6b" href="#/scholar/${sotd.id}" data-morph><span class="glow"></span><span class="k">Scholar of the day</span><h3>${esc(sotd.name)} <small style="font-family:var(--sans);font-size:14px;color:var(--muted)">${sotd.first}</small></h3><p>${esc(sotd.works[0].idea)}.</p><span class="go arrow">Meet them </span></a>
  </div>

  <div class="section-title"><div><h2>Your WOOP for today</h2><p>Dream for 60 seconds, then name the obstacle and the plan. Saved on this device.</p></div></div>
  <div class="card rv" style="--c:#d4ff3a"><div class="woop">
    ${[['w', 'Wish', 'e.g. Know cohesion well enough to teach it'], ['o', 'Outcome', 'e.g. I explain it without notes'], ['ob', 'Obstacle', 'e.g. I reach for my phone after 5 minutes'], ['p', 'Plan', 'If I want my phone, then I write it on the parking list']].map(([k, l, ph]) => `<label><b>${l}</b><textarea rows="3" data-woop="${k}" placeholder="${ph}">${esc(S.woop[k])}</textarea></label>`).join('')}
  </div></div>

  <div class="section-title"><div><h2>Where everything lives</h2><p>Twelve knowledge areas, each with its own colour.</p></div><a class="btn sm" href="#/map" data-morph><span class="arrow">All areas </span></a></div>
  <div class="grid g4">${AREAS.slice(0, 8).map(areaCard).join('')}</div>
  `;
  $$('[data-woop]').forEach(t => t.addEventListener('input', () => { S.woop[t.dataset.woop] = t.value; save(); }));
  return particles($('#particles'));
}
function particles(canvas) {
  if (!canvas) return;
  const x = canvas.getContext('2d'); let w, h, raf; const dpr = Math.min(2, devicePixelRatio || 1);
  const size = () => { const r = canvas.getBoundingClientRect(); w = r.width; h = r.height; canvas.width = w * dpr; canvas.height = h * dpr; x.setTransform(dpr, 0, 0, dpr, 0, 0); };
  size(); addEventListener('resize', size);
  const P = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.8 + .4, s: Math.random() * .0006 + .0002, p: Math.random() * 6.28, c: ['#d4ff3a', '#ffffff', '#c4a7ff', '#ffb36b'][Math.floor(Math.random() * 4)] }));
  (function tick(t) { x.clearRect(0, 0, w, h); P.forEach(p => { p.y -= p.s; if (p.y < -0.02) p.y = 1.02; const a = .35 + .35 * Math.sin(t / 900 + p.p); x.globalAlpha = a; x.fillStyle = p.c; x.beginPath(); x.arc(p.x * w, p.y * h, p.r, 0, 6.28); x.fill(); }); raf = requestAnimationFrame(tick); })(0);
  return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); };
}
function areaCard(a) {
  const ids = topicsOf(a.id).map(t => t.id);
  return `<a class="card link area-card rv" href="#/area/${a.id}" data-morph style="--c:${a.c}"><span class="glow"></span>
  <div class="top"><span class="icon-tile">${a.icon}</span><span class="muted" style="font-size:12px">${esc(a.group)}</span></div>
  <h3>${esc(a.name)}</h3><p>${esc(a.blurb)}</p><div class="bar"><i data-w="${mastery(ids)}"></i></div>
  <div class="foot"><span>${ids.length} topics · ${mastery(ids)}% mastered</span><span class="arrow"></span></div></a>`;
}

/* ---------------- MAP & AREA ---------------- */
function mapView() {
  setSection('map'); crumbs([['Home', '#/'], ['Knowledge map', '#/map']]);
  const groups = [...new Set(AREAS.map(a => a.group))];
  view.innerHTML = hero({ eyebrow: 'Knowledge map', title: 'Everything a diploma <em>teacher</em> knows', lead: `${TOPICS.length} topics in 12 areas. Delta Module 1, 2, 3 and the DipTESOL draw on the same body of knowledge, so each topic shows which qualification uses it.`, meta: [['Delta M1', QUAL_COLORS.delta1], ['Delta M2', QUAL_COLORS.delta2], ['Delta M3', QUAL_COLORS.delta3], ['DipTESOL', QUAL_COLORS.diptesol]].map(([t, c]) => chip(t, c)).join('') }) +
    groups.map(g => `<div class="section-title"><div><h2>${esc(g)}</h2></div></div><div class="grid g3">${AREAS.filter(a => a.group === g).map(areaCard).join('')}</div>`).join('');
}
function areaView(id) {
  const a = areaById(id); if (!a) return home();
  setSection(id); crumbs([['Home', '#/'], ['Map', '#/map'], [a.name, `#/area/${id}`]]);
  const ts = topicsOf(id);
  view.innerHTML = hero({ eyebrow: a.group, title: esc(a.name), lead: esc(a.blurb), meta: `${chip(ts.length + ' topics')} ${chip(mastery(ts.map(t => t.id)) + '% mastered', a.c)}`, extra: `<div class="actions" style="display:flex;gap:10px;margin-top:22px;flex-wrap:wrap"><a class="btn accent" href="#/topic/${(ts.find(t => !topicStage(t.id)) || ts[0]).id}" data-morph><span class="arrow">Continue </span></a><a class="btn" href="#/game/flashcards?area=${id}"><span class="arrow">Flashcards for this area </span></a></div>` }) +
    `<div class="grid g3">${ts.map(topicCard).join('')}</div>`;
}

/* ---------------- TOPIC ---------------- */
function topicView(id) {
  const t = topicById(id); if (!t) return home();
  const a = areaById(t.area); setSection(t.area);
  crumbs([['Map', '#/map'], [a.name, `#/area/${a.id}`], [t.title, `#/topic/${id}`]]);
  const list = topicsOf(t.area); const i = list.indexOf(t); const prev = list[i - 1], next = list[i + 1];
  const st = S.topics[id];
  const steps = [['predict', 'Predict'], ['understand', 'Understand'], ['sources', 'Who says so'], ['class', 'In the classroom'], ['exam', 'Exam angle'], ['watch', 'Watch out'], ['recall', 'Close and recall'], ['check', 'Check yourself']];
  view.innerHTML = hero({ eyebrow: a.name, title: esc(t.title), lead: esc(t.one), meta: (t.quals || []).map(qualChip).join('') + chip(nextDueLabel(st), a.c) }) + `
  <div class="topic-layout"><div>
    <section class="step" id="predict"><div class="sh"><span class="n">1</span><h2>Predict first</h2><small>30 seconds</small></div>
      <p>Answer in your head before you read. Guessing first makes the explanation stick.</p>
      <p style="font-size:18px;color:#fff;font-weight:600">${md(t.predict.q)}</p>
      <button class="btn sm reveal-btn" data-reveal="pa">Show the answer</button><div class="answer" id="pa">${md(t.predict.a)}</div></section>

    <section class="step" id="understand"><div class="sh"><span class="n">2</span><h2>Understand</h2></div>
      ${t.explain.map(p => `<p>${md(p)}</p>`).join('')}
      ${t.kid ? `<div class="kid"><span class="e">💡</span><p><b>Like you're 12:</b> ${md(t.kid)}</p></div>` : ''}
      ${renderViz(t.viz)}
      <ul class="points">${t.points.map(p => `<li>${md(p)}</li>`).join('')}</ul></section>

    <section class="step" id="sources"><div class="sh"><span class="n">3</span><h2>Who says so</h2><small>${t.refs.length} sources</small></div>
      <p>The scholars behind this topic. In an essay, cite them as (Name, year) and say what they found.</p>
      <div class="refs">${t.refs.map(r => refCard(r, a.c)).join('')}</div></section>

    <section class="step" id="class"><div class="sh"><span class="n">4</span><h2>In the classroom</h2></div>
      <div class="classroom">${t.classroom.map((c, j) => `<div class="scene"><span class="ic">${['🧑‍🏫', '📝', '🗣️', '🎯'][j % 4]}</span><p>${md(c)}</p></div>`).join('')}</div></section>

    <section class="step" id="exam"><div class="sh"><span class="n">5</span><h2>Exam angle</h2></div>
      <div class="exam-list">${t.exam.map(e => `<div class="exam-item">${qualChip(e[0])}<span>${md(e[1])}</span></div>`).join('')}</div>
</section>

    <section class="step" id="watch"><div class="sh"><span class="n">6</span><h2>Watch out</h2></div><div class="warn">${md(t.confuse)}</div></section>

    <section class="step" id="recall"><div class="sh"><span class="n">7</span><h2>Close and recall</h2><small class="timer" id="rtimer">3:00</small></div>
      <p>Scroll so the explanation is out of sight. Write everything you remember about <b>${esc(t.title)}</b> in 3 minutes. No peeking. Then check against the key points.</p>
      <div class="recall-grid"><div><textarea id="dump" rows="9" placeholder="Type from memory..."></textarea>
        <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap"><button class="btn sm" id="startT">Start 3-minute timer</button><button class="btn sm accent" id="checkDump">I'm done, show the checklist</button></div></div>
        <div id="checkWrap" style="display:none"><p class="muted" style="font-size:13.5px">Tick only what you really wrote. Points where your words matched are pre-ticked. Adjust honestly.</p><div class="checklist" id="checklist"></div>
        <button class="btn accent" id="saveRecall" style="margin-top:12px">Save and schedule my review</button></div></div></section>

    <section class="step" id="check"><div class="sh"><span class="n">8</span><h2>Check yourself</h2><small id="qscore"></small></div>
      ${t.quiz.map((q, qi) => `<div class="q" data-q="${qi}"><div class="qt">${qi + 1}. ${md(q.q)}</div><div class="opts">${q.o.map((o, oi) => `<button class="opt" data-o="${oi}">${md(o)}</button>`).join('')}</div><div class="why">${md(q.why)}</div></div>`).join('')}</section>

    <div class="pager">${prev ? `<a href="#/topic/${prev.id}" data-morph><small>← Previous</small><b>${esc(prev.title)}</b></a>` : '<span></span>'}${next ? `<a class="next" href="#/topic/${next.id}" data-morph><small>Next →</small><b>${esc(next.title)}</b></a>` : `<a class="next" href="#/area/${a.id}"><small>Done</small><b>Back to ${esc(a.name)}</b></a>`}</div>
  </div>
  <aside class="toc"><b>On this page</b>${steps.map((s, k) => `<a href="#${s[0]}" data-scroll="${s[0]}"><span>${k + 1}</span>${s[1]}</a>`).join('')}
    <div class="mini">${st ? `Stage ${st.stage} of 5<br>${esc(nextDueLabel(st))}${st.recall !== undefined ? `<br>Last recall: ${st.recall}%` : ''}` : 'Not started yet. Finish step 7 to start the review ladder.'}</div></aside></div>`;

  $$('[data-scroll]', view).forEach(l => l.addEventListener('click', e => { e.preventDefault(); $('#' + l.dataset.scroll).scrollIntoView({ behavior: 'smooth' }); }));
  $$('[data-reveal]', view).forEach(b => b.addEventListener('click', () => { $('#' + b.dataset.reveal).classList.add('show'); b.remove(); addXP(1); }));
  // quiz
  let right = 0, answered = 0;
  $$('.q', view).forEach(qel => {
    const q = t.quiz[+qel.dataset.q];
    $$('.opt', qel).forEach(b => b.addEventListener('click', () => {
      if (qel.dataset.done) return; qel.dataset.done = 1; answered++;
      const ok = +b.dataset.o === q.a; if (ok) right++;
      b.classList.add(ok ? 'right' : 'wrong'); if (!ok) $$('.opt', qel)[q.a].classList.add('right');
      $('.why', qel).classList.add('show');
      $('#qscore').textContent = `${right} / ${answered}`;
      if (answered === t.quiz.length) { const pct = Math.round(right / answered * 100); saveQuiz(id, pct); addXP(right * 3); if (pct === 100) { confetti(); toast('Perfect score. Nice work.'); } }
    }));
  });
  // recall timer
  let left = 180, iv = null;
  $('#startT').addEventListener('click', () => {
    if (iv) return; $('#dump').focus();
    iv = setInterval(() => { left--; $('#rtimer').textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`; if (left <= 0) { clearInterval(iv); iv = null; toast('Time. Now check what you remembered.'); $('#checkDump').click(); } }, 1000);
  });
  $('#checkDump').addEventListener('click', () => {
    const txt = $('#dump').value.toLowerCase();
    const words = new Set(txt.match(/[a-z]{4,}/g) || []);
    $('#checklist').innerHTML = t.points.map((p, k) => {
      const key = (p.toLowerCase().replace(/\*\*/g, '').match(/[a-z]{5,}/g) || []).filter(w => !STOP.has(w));
      const hits = key.filter(w => words.has(w)).length;
      const pre = key.length && hits / key.length >= .3;
      return `<label><input type="checkbox" ${pre ? 'checked' : ''}><span>${md(p)}</span></label>`;
    }).join('');
    $('#checkWrap').style.display = 'block'; $('#checkWrap').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  $('#saveRecall').addEventListener('click', () => {
    const boxes = $$('#checklist input'); const pct = Math.round(boxes.filter(b => b.checked).length / boxes.length * 100);
    const r = recordRecall(id, pct); updateMe();
    toast(`Recall ${pct}%. ${nextDueLabel(r)}.`); if (pct >= 70) confetti();
    $('.toc .mini').innerHTML = `Stage ${r.stage} of 5<br>${esc(nextDueLabel(r))}<br>Last recall: ${pct}%`;
  });
  touchDay();
  return () => clearInterval(iv);
}
const STOP = new Set(['about', 'their', 'there', 'which', 'would', 'could', 'should', 'these', 'those', 'other', 'where', 'while', 'being', 'because', 'learners', 'learner', 'students', 'teacher', 'teachers', 'often', 'something', 'example', 'things', 'using', 'means', 'makes', 'every']);

/* ---------------- SCHOLARS ---------------- */
const initials = n => n.replace(/\bet al\.?/g, '').split(/[\s,]+/).filter(w => w && w !== 'and' && /^[A-ZÀ-ÖØ-ÞŠŽÖ]/.test(w) && !/^[A-Z]\.$/.test(w)).slice(0, 2).map(w => w[0]).join('') || n[0];
const scholarColor = s => areaById(s.areas[0]).c;
function refCard(r, c) {
  const s = scholarById(scholarSlug(r[0]));
  return `<a class="ref" href="#/scholar/${scholarSlug(r[0])}" style="--c:${c || scholarColor(s)}"><span class="av">${esc(initials(r[0]))}</span><div><b>${esc(r[0])} <em>${esc(r[1])}</em></b><i>${esc(r[2])}</i><span>${esc(r[3])}</span></div></a>`;
}
function scholarCard(s) {
  const c = scholarColor(s); const w = s.works[0];
  return `<a class="card link sch-card rv" href="#/scholar/${s.id}" data-morph style="--c:${c}"><span class="glow"></span>
    <div class="top"><span class="av big">${esc(initials(s.name))}</span><span class="yr">${s.first}</span></div>
    <h3>${esc(s.name)}</h3><p>${esc(w.idea)}</p>
    <div class="foot"><span class="dots">${s.areas.map(id => `<i style="--c:${areaById(id).c}" title="${esc(areaById(id).name)}"></i>`).join('')}</span><span>${s.topics.length} topic${s.topics.length > 1 ? 's' : ''}</span></div></a>`;
}
function scholarsView() {
  setSection('scholars'); crumbs([['Home', '#/'], ['Scholars and sources', '#/scholars']]);
  const works = SCHOLARS.reduce((n, s) => n + s.works.length, 0);
  const decades = {}; SCHOLARS.forEach(s => { const d = Math.floor(s.first / 10) * 10; (decades[d] = decades[d] || []).push(s); });
  const ds = Object.keys(decades).map(Number).sort((x, y) => x - y);
  view.innerHTML = hero({ eyebrow: 'Library · scholars and sources', title: 'Stand on <em>their</em> shoulders', lead: `${SCHOLARS.length} researchers and writers behind the ${TOPICS.length} topics, with ${works} key works. Each card gives the one idea you need to cite, and links to the topics that use it.`, meta: chip(`${SCHOLARS.length} scholars`, '#ffcf6b') + chip(`${works} works`, '#ff6bd6') + chip(`${ds[0]}s to ${ds[ds.length - 1]}s`, '#7cf5ff') }) + `
  <div class="sch-tools rv"><input type="text" id="schQ" placeholder="Search a name, a book or an idea... e.g. noticing, Swain, washback"><div class="chips-row" id="schAreas"><button class="chipbtn on" data-a="">All areas</button>${AREAS.map(x => `<button class="chipbtn" data-a="${x.id}" style="--c:${x.c}">${esc(x.name)}</button>`).join('')}</div></div>
  <div class="section-title"><div><h2>A timeline of ideas</h2><p>Scroll sideways. From Ebbinghaus's forgetting curve to the 2020 CEFR Companion Volume.</p></div><a class="btn sm" href="#/game/who-said-it" data-morph><span class="arrow">Play Who Said It? </span></a></div>
  <div class="tline rv"><div class="tl-track">${ds.map(d => `<div class="dec"><span class="dy">${d}s · ${decades[d].length}</span><div class="list">${decades[d].sort((x, y) => x.first - y.first).map(s => `<a href="#/scholar/${s.id}" style="--c:${scholarColor(s)}"><i></i>${esc(s.name)}<small>${s.first}</small></a>`).join('')}</div></div>`).join('')}</div></div>
  <div class="section-title"><div><h2>The hall</h2><p id="schCount">${SCHOLARS.length} scholars</p></div></div>
  <div class="grid g4" id="schGrid"></div>`;
  let area = '';
  const draw = () => {
    const q = $('#schQ').value.trim().toLowerCase();
    const list = SCHOLARS.filter(s => (!area || s.areas.includes(area)) && (!q || (s.name + ' ' + s.works.map(w => w.work + ' ' + w.idea).join(' ')).toLowerCase().includes(q)));
    $('#schGrid').innerHTML = list.map(scholarCard).join('') || '<div class="empty-state">No scholar matches that search.</div>';
    $('#schCount').textContent = `${list.length} scholar${list.length === 1 ? '' : 's'}`;
    $$('#schGrid .rv').forEach(el => el.classList.add('in'));
  };
  $('#schQ').addEventListener('input', draw);
  $$('#schAreas .chipbtn').forEach(b => b.addEventListener('click', () => { area = b.dataset.a; $$('#schAreas .chipbtn').forEach(x => x.classList.toggle('on', x === b)); draw(); }));
  draw();
}
function scholarView(id) {
  const s = scholarById(id); if (!s) return scholarsView();
  setSection('scholars'); crumbs([['Scholars', '#/scholars'], [s.name, `#/scholar/${id}`]]);
  const c = scholarColor(s);
  const related = SCHOLARS.filter(x => x.id !== s.id && x.topics.some(t => s.topics.includes(t))).slice(0, 8);
  view.innerHTML = `<section class="hero sch-hero" style="--c:${c}"><span class="depth"></span>${WAVES}<div class="sch-orb"><span>${esc(initials(s.name))}</span></div><div>
    <div class="eyebrow">Scholar · first cited work ${s.first}</div><h1>${esc(s.name)}</h1>
    <p class="lead">${esc(s.works[0].idea)}.</p><div class="meta">${s.areas.map(x => chip(areaById(x).name, areaById(x).c)).join('')}</div></div></section>
  <div class="section-title"><div><h2>Key works</h2><p>What to cite, and the idea in one line.</p></div></div>
  <div class="works">${s.works.sort((x, y) => x.year - y.year).map(w => `<div class="work rv" style="--c:${c}"><span class="wy">${w.year}</span><div><b>${esc(w.work)}</b><p>${esc(w.idea)}.</p><small>Cite as: ${esc(s.name)} (${w.year})</small></div></div>`).join('')}</div>
  <div class="section-title"><div><h2>Where this matters</h2><p>Topics that rely on this work.</p></div></div>
  <div class="grid g3">${s.topics.map(topicById).map(topicCard).join('')}</div>
  ${related.length ? `<div class="section-title"><div><h2>Read alongside</h2><p>Scholars cited in the same topics.</p></div></div><div class="grid g4">${related.map(scholarCard).join('')}</div>` : ''}`;
}

/* ---------------- QUALIFICATIONS ---------------- */
function qualsView() {
  setSection('quals'); crumbs([['Home', '#/'], ['Qualifications', '#/quals']]);
  view.innerHTML = hero({ eyebrow: 'Qualifications', title: 'Four doors, <em>one</em> body of knowledge', lead: 'Delta is three modules from Cambridge. The DipTESOL is four units from Trinity College London. Each guide shows the format, what examiners want, common mistakes, and the topics to study.' }) +
    `<div class="grid g2">${QUALS.map(q => `<a class="card link qual-card rv" href="#/qual/${q.id}" data-morph style="--c:${QUAL_COLORS[q.id]}"><span class="glow"></span><div class="big">${esc(q.big)}</div><h3>${esc(q.title)}</h3><p>${esc(q.short)}</p><span class="go arrow" style="color:${QUAL_COLORS[q.id]}">Open the guide </span></a>`).join('')}</div>`;
}
function qualView(id) {
  const q = qualById(id); if (!q) return qualsView();
  setSection(id); crumbs([['Home', '#/'], ['Qualifications', '#/quals'], [q.title, `#/qual/${id}`]]);
  view.innerHTML = hero({ eyebrow: q.org, title: esc(q.title), lead: esc(q.intro), meta: q.chips.map(c => chip(c, QUAL_COLORS[id])).join('') }) + `
  <div class="section-title"><div><h2>At a glance</h2></div></div>
  <div class="table-wrap rv"><table class="t"><thead><tr>${q.table.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${q.table.rows.map(r => `<tr>${r.map(c => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
  ${q.sections.map(s => `<div class="section-title"><div><h2>${esc(s.h)}</h2></div></div><div class="card rv prose">${s.body}</div>`).join('')}
  <div class="section-title"><div><h2>Study these topics</h2><p>The knowledge this ${q.id === 'diptesol' ? 'qualification' : 'module'} draws on most.</p></div></div>
  <div class="grid g3">${q.topics.map(topicById).filter(Boolean).map(topicCard).join('')}</div>
  <div class="section-title"><div><h2>Core bookshelf</h2><p>The works cited most across this ${q.id === 'diptesol' ? 'qualification' : 'module'}'s topics. Start here for essays and background reading.</p></div><a class="btn sm" href="#/scholars" data-morph><span class="arrow">All scholars </span></a></div>
  <div class="refs shelf">${shelf(q.topics).map(r => refCard(r)).join('')}</div>
  <p class="muted" style="margin-top:26px;font-size:13px">Sources: ${q.sources.map(s => `<a href="${s[1]}" target="_blank" rel="noopener" style="text-decoration:underline">${esc(s[0])}</a>`).join(' · ')}. Formats change, so check your centre's current handbook before you submit anything.</p>`;
}

function shelf(ids) {
  const m = new Map();
  ids.map(topicById).filter(Boolean).forEach(t => t.refs.forEach(r => { const k = r[0] + '|' + r[2]; const e = m.get(k) || { r, n: 0 }; e.n++; m.set(k, e); }));
  return [...m.values()].sort((x, y) => y.n - x.n || x.r[1] - y.r[1]).slice(0, 12).map(e => e.r);
}

/* ---------------- ARCADE & GAMES ---------------- */
function arcadeView() {
  setSection('arcade'); crumbs([['Home', '#/'], ['Games arcade', '#/arcade']]);
  view.innerHTML = hero({ eyebrow: 'Games arcade', title: 'Learn by <em>pulling</em> it out', lead: 'Every game makes you retrieve, sort, order or diagnose. That effort is what builds memory. Your best scores are saved.' }) +
    `<div class="grid g3">${GAMES.map(g => `<a class="card link game-card rv" href="#/game/${g.id}" data-morph style="--c:${g.c}"><span class="glow"></span><span class="emoji">${g.emoji}</span><h3>${esc(g.name)}</h3><p>${esc(g.desc)}</p><div class="best"><span>${esc(g.skill)}</span><span>${bestScore(g.id) !== undefined ? 'Best: ' + bestScore(g.id) : 'Not played yet'}</span></div></a>`).join('')}</div>`;
}
function gameView(raw) {
  const [id] = raw.split('?'); const g = GAMES.find(x => x.id === id); if (!g) return arcadeView();
  setSection('arcade'); crumbs([['Arcade', '#/arcade'], [g.name, `#/game/${id}`]]);
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  view.innerHTML = hero({ eyebrow: g.skill, title: `${g.emoji} ${esc(g.name)}`, lead: esc(g.how) }) + `<div class="game-shell" id="game"></div>`;
  touchDay();
  return mountGame(id, $('#game'), { area: params.get('area'), toast, confetti, updateMe });
}

/* ---------------- FOCUS ROOM ---------------- */
function focusView() {
  setSection('focus'); crumbs([['Home', '#/'], ['Focus room', '#/focus']]);
  const sessions = S.focus.sessions || [];
  view.innerHTML = hero({ eyebrow: 'Focus room', title: 'One block. <em>25 minutes.</em>', lead: 'Phone in another room. One concrete first action. Urges go on the parking list, not into your hands.' }) + `
  <div class="focus-wrap">
    <div class="card rv" style="text-align:center">
      <div class="clock"><svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="10"/><circle id="arc" cx="100" cy="100" r="90" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round" stroke-dasharray="565.5" stroke-dashoffset="0"/></svg><div class="t"><div><span id="clk">25:00</span><small id="mode">Focus block</small></div></div></div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn accent" id="fStart">Start</button><button class="btn" id="fReset">Reset</button><button class="btn" id="fBreak">5-min break</button></div>
      <p class="muted" style="margin-top:16px;font-size:13.5px">${sessions.length} focus blocks completed · ${sessions.filter(s => s.d === new Date().toISOString().slice(0, 10)).length} today</p>
    </div>
    <div class="grid" style="gap:16px">
      <div class="card rv"><h3>Before you start</h3><div class="checklist">${['My phone is in another room', 'The blocker is on', 'I wrote my first action', 'Water is on the desk'].map(x => `<label><input type="checkbox"><span>${x}</span></label>`).join('')}</div>
        <p style="margin:14px 0 6px" class="muted">My first action (one concrete sentence)</p><input type="text" id="firstAct" value="${esc(S.focus.first || '')}" placeholder="e.g. Recall the 5 cohesion devices from memory"></div>
      <div class="card rv"><h3>Parking list</h3><p>An urge appears? Write it here and keep working. Check the list at the break.</p>
        <div style="display:flex;gap:8px"><input type="text" id="parkIn" placeholder="coffee, food, phone, bed..."><button class="btn sm accent" id="parkAdd">Park</button></div>
        <div class="park" id="park" style="margin-top:12px"></div></div>
    </div>
  </div>`;
  const total = { focus: 1500, brk: 300 }; let mode = 'focus', left = total.focus, iv = null;
  const draw = () => { $('#clk').textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`; $('#arc').style.strokeDashoffset = 565.5 * (1 - left / total[mode]); $('#mode').textContent = mode === 'focus' ? 'Focus block' : 'Break'; };
  const stop = () => { clearInterval(iv); iv = null; $('#fStart').textContent = 'Start'; };
  $('#fStart').addEventListener('click', () => {
    if (iv) { stop(); return; }
    $('#fStart').textContent = 'Pause';
    iv = setInterval(() => { left--; draw(); if (left <= 0) { stop(); if (mode === 'focus') { S.focus.sessions.push({ d: new Date().toISOString().slice(0, 10), t: Date.now() }); addXP(20); save(); confetti(); toast('Block complete. Take your 5-minute break.'); mode = 'brk'; left = total.brk; } else { toast('Break over. Ready for the next block?'); mode = 'focus'; left = total.focus; } draw(); } }, 1000);
  });
  $('#fReset').addEventListener('click', () => { stop(); mode = 'focus'; left = total.focus; draw(); });
  $('#fBreak').addEventListener('click', () => { stop(); mode = 'brk'; left = total.brk; draw(); });
  $('#firstAct').addEventListener('input', e => { S.focus.first = e.target.value; save(); });
  const drawPark = () => { $('#park').innerHTML = (S.focus.park || []).slice(-12).reverse().map(p => `<div><span>${esc(p.t)}</span><small>${new Date(p.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small></div>`).join('') || '<div class="muted">Empty. Good.</div>'; };
  const addPark = () => { const v = $('#parkIn').value.trim(); if (!v) return; S.focus.park.push({ t: v, at: Date.now() }); save(); $('#parkIn').value = ''; drawPark(); toast('Parked. Back to work.'); };
  $('#parkAdd').addEventListener('click', addPark); $('#parkIn').addEventListener('keydown', e => { if (e.key === 'Enter') addPark(); });
  draw(); drawPark();
  return () => clearInterval(iv);
}

/* ---------------- GLOSSARY ---------------- */
function glossaryView() {
  setSection('glossary'); crumbs([['Home', '#/'], ['Glossary', '#/glossary']]);
  view.innerHTML = hero({ eyebrow: 'Glossary', title: `${GLOSSARY.length} terms, <em>plain</em> English`, lead: 'Every definition is short enough to write in an exam, with an example. Use it to check, then go and recall with flashcards.' }) + `
  <div class="gloss-tools"><input type="search" id="gq" placeholder="Search terms or definitions..."><a class="btn accent" href="#/game/flashcards"><span class="arrow">Recall with flashcards </span></a></div>
  <div class="filter-chips" id="gf"><button class="on" data-a="">All</button>${AREAS.map(a => `<button data-a="${a.id}">${esc(a.name)}</button>`).join('')}</div>
  <div class="gloss-cols" id="glist"></div>`;
  let area = '';
  const draw = () => {
    const q = $('#gq').value.trim().toLowerCase();
    const items = GLOSSARY.filter(g => (!area || g.area === area) && (!q || (g.term + ' ' + g.def).toLowerCase().includes(q)));
    $('#glist').innerHTML = items.map(g => { const a = areaById(g.area); return `<div class="term"><h4>${esc(g.term)} ${chip(a.name, a.c)}</h4><p>${md(g.def)}</p>${g.ex ? `<div class="ex">${md(g.ex)}</div>` : ''}</div>`; }).join('') || '<div class="empty">No terms match.</div>';
  };
  $('#gq').addEventListener('input', draw);
  $$('#gf button').forEach(b => b.addEventListener('click', () => { $$('#gf button').forEach(x => x.classList.remove('on')); b.classList.add('on'); area = b.dataset.a; draw(); }));
  draw();
}

/* ---------------- PROGRESS ---------------- */
function progressView() {
  setSection('progress'); crumbs([['Home', '#/'], ['My progress', '#/progress']]);
  const all = TOPICS.map(t => t.id); const due = dueTopics(); const lv = level();
  const ring = (p, c) => `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="9"/><circle cx="50" cy="50" r="42" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round" stroke-dasharray="263.9" stroke-dashoffset="${263.9 * (1 - p / 100)}" style="transition:stroke-dashoffset 1.2s"/></svg>`;
  const upcoming = Object.entries(S.topics).filter(([, t]) => t.due).sort((a, b) => a[1].due - b[1].due).slice(0, 10);
  view.innerHTML = hero({ eyebrow: 'My progress', title: `Level ${lv.n}: <em>${esc(lv.name)}</em>`, lead: 'Effort you control, made visible. A full week of blocks matters more than any single score.', meta: `${chip(`${S.xp || 0} XP`, '#facc15')} ${chip(`${streak()} day streak`)} ${chip(`${(S.focus.sessions || []).length} focus blocks`)} ${chip(`${mastery(all)}% of all topics mastered`)}` }) + `
  <div class="section-title"><div><h2>Due for review</h2><p>The ladder: learn, then day 2, 5, 12 and 30.</p></div></div>
  <div class="due-list">${due.length ? due.map(d => { const t = topicById(d.id); if (!t) return ''; const a = areaById(t.area); return `<a class="due" href="#/topic/${t.id}" style="--c:${a.c}" data-morph><span class="nd"></span>${esc(t.title)}<small>Stage ${d.stage} · last recall ${d.recall}%</small></a>`; }).join('') : '<div class="empty">Nothing due today. Learn a new topic or play a game.</div>'}</div>
  <div class="section-title"><div><h2>Mastery by area</h2></div></div>
  <div class="rings">${AREAS.map(a => { const p = mastery(topicsOf(a.id).map(t => t.id)); return `<a class="pring rv" href="#/area/${a.id}">${ring(p, a.c)}<b>${esc(a.name)}</b><small>${p}%</small></a>`; }).join('')}</div>
  <div class="section-title"><div><h2>Coming up</h2></div></div>
  <div class="due-list">${upcoming.length ? upcoming.map(([id, t]) => { const tp = topicById(id); if (!tp) return ''; const a = areaById(tp.area); return `<a class="due" href="#/topic/${id}" style="--c:${a.c}"><span class="nd"></span>${esc(tp.title)}<small>${esc(nextDueLabel(t))}</small></a>`; }).join('') : '<div class="empty">Your review calendar fills up as you finish step 6 on topics.</div>'}</div>
  <div class="section-title"><div><h2>Game records</h2></div></div>
  <div class="grid g4">${GAMES.map(g => `<div class="card" style="--c:${g.c}"><span class="emoji" style="font-size:26px">${g.emoji}</span><h3 style="font-size:18px;margin-top:8px">${esc(g.name)}</h3><p>${bestScore(g.id) !== undefined ? 'Best: ' + bestScore(g.id) : 'Not played yet'}</p></div>`).join('')}</div>
  <p style="margin-top:30px"><button class="btn sm" id="reset">Reset all progress on this device</button></p>`;
  $('#reset').addEventListener('click', () => { if (confirm('Delete all progress saved in this browser?')) resetAll(); });
}

/* ---------------- search ---------------- */
function setupSearch() {
  const layer = $('#searchLayer'), input = $('#searchInput'), out = $('#searchResults');
  const idx = [
    ...TOPICS.map(t => ({ t: t.title, s: t.one, h: `#/topic/${t.id}`, c: areaById(t.area).c, k: areaById(t.area).name })),
    ...GLOSSARY.map(g => ({ t: g.term, s: g.def, h: `#/glossary`, c: areaById(g.area).c, k: 'Glossary' })),
    ...QUALS.map(q => ({ t: q.title, s: q.short, h: `#/qual/${q.id}`, c: QUAL_COLORS[q.id], k: 'Guide' })),
    ...GAMES.map(g => ({ t: g.name, s: g.desc, h: `#/game/${g.id}`, c: g.c, k: 'Game' })),
    ...SCHOLARS.map(s => ({ t: s.name, s: s.works.map(w => w.work + ' ' + w.idea).join(' '), h: `#/scholar/${s.id}`, c: '#ffcf6b', k: 'Scholar' }))
  ];
  let sel = 0, res = [];
  const open = () => { layer.hidden = false; input.value = ''; draw(); setTimeout(() => input.focus(), 30); };
  const close = () => { layer.hidden = true; };
  const draw = () => {
    const q = input.value.trim().toLowerCase();
    res = (q ? idx.filter(i => (i.t + ' ' + i.s).toLowerCase().includes(q)).sort((a, b) => (b.t.toLowerCase().includes(q)) - (a.t.toLowerCase().includes(q))) : idx.slice(0, 8)).slice(0, 30);
    sel = 0; out.innerHTML = res.map((r, i) => `<a href="${r.h}" class="${i === 0 ? 'on' : ''}" style="--c:${r.c}"><span class="nd"></span>${esc(r.t)}<small>${esc(r.k)}</small></a>`).join('') || '<div class="empty">Nothing found</div>';
  };
  $('#searchBtn').addEventListener('click', open);
  layer.addEventListener('click', e => { if (e.target === layer || e.target.closest('a')) close(); });
  input.addEventListener('input', draw);
  input.addEventListener('keydown', e => {
    const links = $$('a', out);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length; links.forEach((l, i) => l.classList.toggle('on', i === sel)); links[sel]?.scrollIntoView({ block: 'nearest' }); }
    if (e.key === 'Enter' && links[sel]) { location.hash = links[sel].getAttribute('href'); close(); }
    if (e.key === 'Escape') close();
  });
  document.addEventListener('keydown', e => { if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); open(); } if (e.key === 'Escape') close(); });
}

/* ---------------- boot ---------------- */
buildNav(); setupSearch();
{ let raf = 0; addEventListener('pointermove', e => { if (raf) return; raf = requestAnimationFrame(() => { document.body.style.setProperty('--px', e.clientX + 'px'); document.body.style.setProperty('--py', e.clientY + 'px'); raf = 0; }); }, { passive: true }); }
$('#menuBtn').addEventListener('click', () => document.body.classList.toggle('menu-open'));
view.addEventListener('click', () => document.body.classList.remove('menu-open'));
render();

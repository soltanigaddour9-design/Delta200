import { GLOSSARY } from './data/glossary.js';
import { AREAS, TOPICS, areaById, topicById, SCHOLARS } from './data/index.js';
import { SORT_SETS, ORDER_SETS, ERROR_ITEMS, ERROR_TYPES, TEST_ITEMS, TEST_TYPES, PHON_ITEMS, IPA_KEYS } from './data/gamedata.js';
import { S, gradeCard, cardState, cardsDue, bestScore, addXP, recordRecall, nextDueLabel, dueTopics } from './store.js';

const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const $ = (s, r) => r.querySelector(s); const $$ = (s, r) => [...r.querySelectorAll(s)];

export const GAMES = [
  { id: 'flashcards', name: 'Flashcards', emoji: '🃏', c: '#5eead4', skill: 'Retrieval · spacing', desc: 'Recall the term before you flip. Cards you miss come back sooner.', how: 'Read the front, say the answer out loud, then flip. Grade yourself honestly: Again, Hard, Good or Easy. The app spaces each card.' },
  { id: 'term-writer', name: 'Term Writer', emoji: '✍️', c: '#5b8cff', skill: 'Delta M1 Paper 1 Task 1', desc: 'Read a definition and type the exact term, like Paper 1 Task 1.', how: 'Ten definitions. Type the ELT term. Small spelling slips are accepted.' },
  { id: 'match', name: 'Term Match', emoji: '🧩', c: '#22d3ee', skill: 'Terminology', desc: 'Pair each term with its definition as fast as you can.', how: 'Click a term, then its definition. Fewer moves and less time give a higher score.' },
  { id: 'sort', name: 'Sort It', emoji: '🗂️', c: '#fbbf24', skill: 'Concepts', desc: 'Drag examples into the right category: validity or reliability, top-down or bottom-up, and more.', how: 'Choose a set. Click or drag each card into a box, then press Check.' },
  { id: 'order', name: 'Lesson Builder', emoji: '🧱', c: '#ff8a3d', skill: 'Lesson staging', desc: 'Put the stages of PPP, TBL, skills lessons and more in order.', how: 'Choose a framework. Drag the stages, or use the arrows, then Check.' },
  { id: 'error-doctor', name: 'Error Doctor', emoji: '🩺', c: '#f472b6', skill: 'Learner language', desc: 'Diagnose the cause of real learner errors from Arabic-speaking and other learners.', how: 'Read the learner\'s sentence and choose the most likely cause of the error.' },
  { id: 'test-detective', name: 'Test Detective', emoji: '🔍', c: '#ff5a5f', skill: 'Assessment', desc: 'Read a testing situation and name the principle at stake.', how: 'Each case shows a testing situation. Which principle does it show?' },
  { id: 'phoneme-lab', name: 'Phoneme Lab', emoji: '🔊', c: '#a78bfa', skill: 'Phonemic script', desc: 'Hear a word, pick or type its phonemic transcription. Training for DipTESOL Unit 3.', how: 'Mode 1: choose the right transcription. Mode 2: type it with the IPA keyboard. Press the speaker to hear the word.' },
  { id: 'sprint', name: 'Exam Sprint', emoji: '⚡', c: '#d4ff3a', skill: 'Mixed recall', desc: '60 seconds of rapid questions from every topic.', how: 'Answer as many questions as you can in 60 seconds. Wrong answers show the right one.' },
  { id: 'who-said-it', name: 'Who Said It?', emoji: '🎓', c: '#ffcf6b', skill: 'Scholars and sources', desc: 'Read a famous idea and name the scholar behind it. Essential for citing in essays.', how: 'Each round shows an idea and the year. Pick the scholar. The book or article appears after you answer.' },
  { id: 'time-machine', name: 'Time Machine', emoji: '⏳', c: '#7cf5ff', skill: 'History of ideas', desc: 'Put five landmark works in the order they were published.', how: 'Drag the works, or use the arrows, from oldest at the top to newest at the bottom. Then check.' },
  { id: 'brain-dump', name: 'Brain Dump', emoji: '🧠', c: '#c084fc', skill: 'Free recall', desc: 'Pick a topic, write everything you remember in 3 minutes, then check.', how: 'Choose a topic. The timer starts when you type. Then tick the key points you really wrote. Your review is scheduled.' }
];

export function mountGame(id, el, ctx) {
  const fn = { 'flashcards': flashcards, 'term-writer': termWriter, 'match': match, 'sort': sortGame, 'order': orderGame, 'error-doctor': errorDoctor, 'test-detective': testDetective, 'phoneme-lab': phonemeLab, 'sprint': sprint, 'brain-dump': brainDump, 'who-said-it': whoSaidIt, 'time-machine': timeMachine }[id];
  return fn ? fn(el, ctx) : null;
}
const areaSelect = (sel) => `<select id="areaSel"><option value="">All areas</option>${AREAS.map(a => `<option value="${a.id}" ${sel === a.id ? 'selected' : ''}>${esc(a.name)}</option>`).join('')}</select>`;
const finish = (ctx, id, score, label) => { const rec = bestScore(id, score); addXP(Math.max(5, Math.round(score / 2))); ctx.updateMe(); if (rec && score > 0) { ctx.confetti(); ctx.toast(`New best: ${label}`); } return rec && score > 0; };

/* ---------- Flashcards ---------- */
function flashcards(el, ctx) {
  let area = ctx.area || '', mode = 'term', queue = [], cur = null, done = 0;
  const build = () => {
    const pool = GLOSSARY.filter(g => !area || g.area === area);
    const due = shuffle(cardsDue(pool.map(g => g.id)).filter(id => (S.cards[id] || {}).seen));
    const fresh = shuffle(pool.filter(g => !(S.cards[g.id] || {}).seen).map(g => g.id)).slice(0, 15);
    queue = [...due, ...fresh]; done = 0; next();
  };
  const next = () => {
    cur = queue.shift();
    if (!cur) { $('#fc', el).innerHTML = `<div class="result"><div class="big">✓</div><h3 class="serif" style="font-size:28px;margin:10px 0">Session complete</h3><p class="muted">${done} cards reviewed. Cards come back on their own schedule.</p><button class="btn accent" id="again">Another 15 new cards</button></div>`; $('#again', el).onclick = build; if (done) { ctx.confetti(); bestScore('flashcards', done); } return; }
    const g = GLOSSARY.find(x => x.id === cur); const a = areaById(g.area); const st = cardState(cur);
    const front = mode === 'term' ? `<h3>${esc(g.term)}</h3><p class="muted">Say the definition, then flip.</p>` : `<p>${esc(g.def)}</p><p class="muted" style="margin-top:12px">What is the term?</p>`;
    const back = mode === 'term' ? `<p>${esc(g.def)}</p><p class="muted" style="font-style:italic">${esc(g.ex || '')}</p>` : `<h3>${esc(g.term)}</h3><p class="muted" style="font-style:italic">${esc(g.ex || '')}</p>`;
    $('#fc', el).innerHTML = `<div class="prog"><i style="width:${(done / (done + queue.length + 1)) * 100}%"></i></div>
      <div class="flash" id="card" style="--c:${a.c}"><div class="inner"><div class="face"><small>${esc(a.name)} · box ${st.box}</small>${front}</div><div class="face back"><small>Answer</small>${back}</div></div></div>
      <div class="grade" id="grade" style="visibility:hidden">${['Again', 'Hard', 'Good', 'Easy'].map((g2, i) => `<button class="btn ${i === 2 ? 'accent' : ''}" data-g="${i}">${g2}</button>`).join('')}</div>
      <p class="muted" style="text-align:center;margin-top:12px;font-size:13px">${queue.length + 1} left · Space flips · keys 1 to 4 grade</p>`;
    $('#card', el).onclick = flip; $$('[data-g]', el).forEach(b => b.onclick = () => grade(+b.dataset.g));
  };
  const flip = () => { $('#card', el).classList.toggle('flip'); $('#grade', el).style.visibility = 'visible'; };
  const grade = g => { if (!cur) return; gradeCard(cur, g); if (g === 0) queue.splice(Math.min(3, queue.length), 0, cur); done++; ctx.updateMe(); next(); };
  const key = e => { if (/input|select|textarea/i.test(e.target.tagName)) return; if (e.code === 'Space') { e.preventDefault(); flip(); } if (['1', '2', '3', '4'].includes(e.key) && $('#grade', el)?.style.visibility === 'visible') grade(+e.key - 1); };
  el.innerHTML = `<div class="game-head">${areaSelect(area)}<select id="modeSel"><option value="term">Term → definition</option><option value="def">Definition → term</option></select><div class="score"><span class="chip">${cardsDue(GLOSSARY.map(g => g.id)).filter(id => (S.cards[id] || {}).seen).length} due overall</span></div></div><div id="fc"></div>`;
  $('#areaSel', el).onchange = e => { area = e.target.value; build(); };
  $('#modeSel', el).onchange = e => { mode = e.target.value; queue.unshift(cur); next(); };
  document.addEventListener('keydown', key); build();
  return () => document.removeEventListener('keydown', key);
}

/* ---------- Term Writer ---------- */
const norm = s => s.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
function lev(a, b) { const m = a.length, n = b.length; const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]); for (let j = 1; j <= n; j++) d[0][j] = j; for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[m][n]; }
function termWriter(el, ctx) {
  let area = ctx.area || '', items = [], i = 0, score = 0;
  const start = () => { items = shuffle(GLOSSARY.filter(g => !area || g.area === area)).slice(0, 10); i = 0; score = 0; show(); };
  const show = () => {
    if (i >= items.length) { const rec = finish(ctx, 'term-writer', score, `${score}/10`); $('#tw', el).innerHTML = `<div class="result"><div class="big">${score}/${items.length}</div><p class="muted">${rec ? 'A new personal best.' : 'Keep going: missed terms are worth a flashcard round.'}</p><button class="btn accent" id="again">Play again</button></div>`; $('#again', el).onclick = start; return; }
    const g = items[i];
    $('#tw', el).innerHTML = `<div class="prog"><i style="width:${i * 10}%"></i></div><div class="scenario"><div class="who">Definition ${i + 1} of ${items.length} · ${esc(areaById(g.area).name)}</div><p style="font-size:19px;margin:0">${esc(g.def)}</p></div>
      <div style="display:flex;gap:10px"><input type="text" id="ans" placeholder="Type the term..." autocomplete="off"><button class="btn accent" id="go">Check</button></div><div id="fb" style="margin-top:14px"></div>`;
    const inp = $('#ans', el); inp.focus();
    const check = () => {
      if (inp.disabled) { i++; show(); return; }
      const a = norm(inp.value), t = norm(g.term); const ok = a && (a === t || (t.length > 5 && lev(a, t) <= 2) || t.split(' ').some(w => w.length > 3 && a === w && t.split(' ').length === 1));
      if (ok) score++;
      inp.disabled = true; $('#go', el).textContent = 'Next';
      $('#fb', el).innerHTML = `<div class="answer show" style="border-color:${ok ? '#34d399' : '#ff5a5f'}">${ok ? '✓ Correct' : '✗ The term is'}: <b>${esc(g.term)}</b><br><span class="muted">${esc(g.ex || '')}</span></div>`;
    };
    $('#go', el).onclick = check; inp.onkeydown = e => { if (e.key === 'Enter') check(); };
  };
  el.innerHTML = `<div class="game-head">${areaSelect(area)}<div class="score"><span class="chip">Best: ${bestScore('term-writer') ?? 0}/10</span></div></div><div id="tw"></div>`;
  $('#areaSel', el).onchange = e => { area = e.target.value; start(); }; start();
}

/* ---------- Match ---------- */
function match(el, ctx) {
  let area = ctx.area || '', t0, iv, moves = 0, left = 0, sel = null;
  const start = () => {
    clearInterval(iv); moves = 0; sel = null;
    const pairs = shuffle(GLOSSARY.filter(g => !area || g.area === area)).slice(0, 6); left = pairs.length;
    const tiles = shuffle([...pairs.map(p => ({ k: p.id, t: p.term, term: 1 })), ...pairs.map(p => ({ k: p.id, t: p.def.length > 110 ? p.def.slice(0, 107) + '...' : p.def }))]);
    $('#board', el).innerHTML = `<div class="tiles">${tiles.map((t, i) => `<button class="tile" data-k="${t.k}" data-i="${i}" style="${t.term ? 'font-family:var(--serif);font-size:17px;color:#fff' : ''}">${esc(t.t)}</button>`).join('')}</div>`;
    t0 = Date.now(); iv = setInterval(() => { $('#mt', el).textContent = Math.floor((Date.now() - t0) / 1000) + 's'; }, 250);
    $$('.tile', el).forEach(b => b.onclick = () => {
      if (b.classList.contains('done') || b === sel) return;
      if (!sel) { sel = b; b.classList.add('sel'); return; }
      moves++; $('#mm', el).textContent = moves + ' moves';
      if (sel.dataset.k === b.dataset.k) { sel.classList.remove('sel'); sel.classList.add('done'); b.classList.add('done'); left--; sel = null; if (!left) end(); }
      else { const a = sel; a.classList.remove('sel'); a.classList.add('bad'); b.classList.add('bad'); setTimeout(() => { a.classList.remove('bad'); b.classList.remove('bad'); }, 450); sel = null; }
    });
  };
  const end = () => { clearInterval(iv); const secs = Math.round((Date.now() - t0) / 1000); const score = Math.max(10, 200 - secs - moves * 4); finish(ctx, 'match', score, `${score} points`); $('#board', el).insertAdjacentHTML('afterbegin', `<div class="result"><div class="big">${score}</div><p class="muted">${secs} seconds, ${moves} moves</p><button class="btn accent" id="again">New board</button></div>`); $('#again', el).onclick = start; };
  el.innerHTML = `<div class="game-head">${areaSelect(area)}<div class="score"><span class="chip timer" id="mt">0s</span><span class="chip" id="mm">0 moves</span></div></div><div id="board"></div>`;
  $('#areaSel', el).onchange = e => { area = e.target.value; start(); }; start();
  return () => clearInterval(iv);
}

/* ---------- Sort ---------- */
function sortGame(el, ctx) {
  let set = SORT_SETS[0], picked = null;
  const start = () => {
    picked = null;
    $('#sg', el).innerHTML = `<p class="muted">Click a card, then click a box (or drag it).</p><div class="chips-pool" id="pool">${shuffle(set.items.map((it, i) => ({ t: it[0], b: it[1], i }))).map(it => `<span class="dchip" draggable="true" data-b="${it.b}" data-i="${it.i}">${esc(it.t)}</span>`).join('')}</div>
      <div class="buckets" style="grid-template-columns:repeat(${Math.min(set.buckets.length, 3)},minmax(0,1fr))">${set.buckets.map((b, i) => `<div class="bucket" data-bucket="${i}"><h4>${esc(b)}</h4><div class="chips-pool"></div></div>`).join('')}</div>
      <div style="display:flex;gap:10px;margin-top:16px"><button class="btn accent" id="chk">Check</button><button class="btn" id="rst">Shuffle again</button></div><div id="res" style="margin-top:12px"></div>`;
    $$('.dchip', el).forEach(c => {
      c.onclick = () => { $$('.dchip', el).forEach(x => x.classList.remove('picked')); picked = c; c.classList.add('picked'); };
      c.ondragstart = e => { picked = c; e.dataTransfer.setData('text', c.dataset.i); };
    });
    $$('.bucket', el).forEach(b => {
      b.onclick = e => { if (e.target.classList.contains('dchip')) return; if (picked) { $('.chips-pool', b).appendChild(picked); picked.classList.remove('picked', 'ok', 'no'); picked = null; } };
      b.ondragover = e => { e.preventDefault(); b.classList.add('over'); }; b.ondragleave = () => b.classList.remove('over');
      b.ondrop = e => { e.preventDefault(); b.classList.remove('over'); if (picked) { $('.chips-pool', b).appendChild(picked); picked.classList.remove('picked', 'ok', 'no'); picked = null; } };
    });
    $('#chk', el).onclick = () => {
      let ok = 0, placed = 0;
      $$('.bucket', el).forEach(b => $$('.dchip', b).forEach(c => { placed++; const good = c.dataset.b === b.dataset.bucket; c.classList.toggle('ok', good); c.classList.toggle('no', !good); if (good) ok++; }));
      const total = set.items.length; const pct = Math.round(ok / total * 100);
      $('#res', el).innerHTML = `<b>${ok} / ${total}</b> correct${placed < total ? ` · ${total - placed} still in the pool` : ''}`;
      if (placed === total) finish(ctx, 'sort', pct, `${pct}%`);
    };
    $('#rst', el).onclick = start;
  };
  el.innerHTML = `<div class="game-head"><select id="setSel">${SORT_SETS.map(s => `<option value="${s.id}">${esc(s.title)}</option>`).join('')}</select></div><div id="sg"></div>`;
  $('#setSel', el).onchange = e => { set = SORT_SETS.find(s => s.id === e.target.value); start(); }; start();
}

/* ---------- Order ---------- */
function orderGame(el, ctx) {
  let set = ORDER_SETS[0], drag = null;
  const start = () => {
    let items = shuffle(set.steps.map((s, i) => ({ s, i }))); if (items.every((x, k) => x.i === k)) items.reverse();
    $('#og', el).innerHTML = `<div class="order-list" id="ol">${items.map(x => `<div class="order-item" draggable="true" data-i="${x.i}"><span class="h">⋮⋮</span><span>${esc(x.s)}</span><span class="mv"><button data-d="-1" aria-label="Up">↑</button><button data-d="1" aria-label="Down">↓</button></span></div>`).join('')}</div>
      <div style="display:flex;gap:10px;margin-top:16px"><button class="btn accent" id="chk">Check order</button><button class="btn" id="rst">Shuffle</button></div><div id="res" style="margin-top:12px"></div>`;
    const ol = $('#ol', el);
    $$('.order-item', el).forEach(it => {
      it.ondragstart = () => { drag = it; it.classList.add('dragging'); }; it.ondragend = () => { it.classList.remove('dragging'); drag = null; };
      it.ondragover = e => { e.preventDefault(); if (!drag || drag === it) return; const r = it.getBoundingClientRect(); ol.insertBefore(drag, e.clientY < r.top + r.height / 2 ? it : it.nextSibling); };
      $$('[data-d]', it).forEach(b => b.onclick = () => { const d = +b.dataset.d; if (d < 0 && it.previousElementSibling) ol.insertBefore(it, it.previousElementSibling); if (d > 0 && it.nextElementSibling) ol.insertBefore(it.nextElementSibling, it); $$('.order-item', el).forEach(x => x.classList.remove('ok', 'no')); });
    });
    $('#chk', el).onclick = () => { const els = $$('.order-item', el); let ok = 0; els.forEach((x, k) => { const g = +x.dataset.i === k; x.classList.toggle('ok', g); x.classList.toggle('no', !g); if (g) ok++; }); const pct = Math.round(ok / els.length * 100); $('#res', el).innerHTML = `<b>${ok} / ${els.length}</b> in the right place${pct === 100 ? '. Perfect.' : '. Red ones are out of place.'}`; if (pct === 100) finish(ctx, 'order', 100, 'perfect order'); else bestScore('order', pct); };
    $('#rst', el).onclick = start;
  };
  el.innerHTML = `<div class="game-head"><select id="setSel">${ORDER_SETS.map(s => `<option value="${s.id}">${esc(s.title)}</option>`).join('')}</select></div><div id="og"></div>`;
  $('#setSel', el).onchange = e => { set = ORDER_SETS.find(s => s.id === e.target.value); start(); }; start();
}

/* ---------- Generic MCQ engine for Error Doctor and Test Detective ---------- */
function mcqGame(el, ctx, id, items, options, who) {
  let list = [], i = 0, score = 0;
  const start = () => { list = shuffle(items); i = 0; score = 0; show(); };
  const show = () => {
    if (i >= list.length) { const pct = Math.round(score / list.length * 100); finish(ctx, id, pct, `${pct}%`); el.querySelector('#mg').innerHTML = `<div class="result"><div class="big">${score}/${list.length}</div><p class="muted">${pct >= 80 ? 'Strong diagnosis.' : 'Review the explanations and try again.'}</p><button class="btn accent" id="again">Play again</button></div>`; $('#again', el).onclick = start; return; }
    const it = list[i];
    $('#mg', el).innerHTML = `<div class="prog"><i style="width:${i / list.length * 100}%"></i></div><div class="scenario"><div class="who">${who} ${i + 1} of ${list.length}</div><q>${esc(it.s)}</q></div><div class="opts">${options.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join('')}</div><div class="why" id="why"></div><button class="btn accent" id="nx" style="margin-top:14px;display:none">Next</button>`;
    $$('.opt', el).forEach(b => b.onclick = () => {
      if (el.dataset.lock) return; el.dataset.lock = 1;
      const ok = +b.dataset.k === it.a; if (ok) score++;
      b.classList.add(ok ? 'right' : 'wrong'); if (!ok) $$('.opt', el)[it.a].classList.add('right');
      $('#why', el).textContent = it.why; $('#why', el).classList.add('show'); $('#nx', el).style.display = 'inline-flex';
    });
    $('#nx', el).onclick = () => { delete el.dataset.lock; i++; show(); };
  };
  el.innerHTML = `<div id="mg"></div>`; start();
}
function errorDoctor(el, ctx) { mcqGame(el, ctx, 'error-doctor', ERROR_ITEMS, ERROR_TYPES, 'Learner sentence'); }
function testDetective(el, ctx) { mcqGame(el, ctx, 'test-detective', TEST_ITEMS, TEST_TYPES, 'Case'); }

/* ---------- Phoneme Lab ---------- */
function speak(word) { try { const u = new SpeechSynthesisUtterance(word); u.lang = 'en-GB'; u.rate = .85; const v = speechSynthesis.getVoices().find(v => /en-GB/i.test(v.lang)); if (v) u.voice = v; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} }
const ipaNorm = s => s.replace(/[ˈˌ/\s]/g, '').replace(/:/g, 'ː').replace(/g/g, 'ɡ');
function phonemeLab(el, ctx) {
  let mode = 'choose', list = [], i = 0, score = 0;
  const start = () => { list = shuffle(PHON_ITEMS).slice(0, 10); i = 0; score = 0; show(); };
  const head = it => `<div class="prog"><i style="width:${i * 10}%"></i></div><div style="text-align:center"><div class="big-word">${esc(it[0])}</div><button class="btn sm" id="say">🔊 Hear it</button></div>`;
  const show = () => {
    if (i >= list.length) { const pct = score * 10; finish(ctx, 'phoneme-lab', pct, `${score}/10`); $('#pl', el).innerHTML = `<div class="result"><div class="big">${score}/10</div><p class="muted">British model transcriptions, stress marked with ˈ.</p><button class="btn accent" id="again">Play again</button></div>`; $('#again', el).onclick = start; return; }
    const it = list[i];
    if (mode === 'choose') {
      const opts = shuffle([it[1], ...it[2]]);
      $('#pl', el).innerHTML = head(it) + `<div class="opts" style="margin-top:18px">${opts.map(o => `<button class="opt ipa" style="font-size:22px;text-align:center" data-o="${esc(o)}">/${esc(o)}/</button>`).join('')}</div><button class="btn accent" id="nx" style="margin-top:14px;display:none">Next</button>`;
      $$('.opt', el).forEach(b => b.onclick = () => { if (el.dataset.lock) return; el.dataset.lock = 1; const ok = b.dataset.o === it[1]; if (ok) score++; b.classList.add(ok ? 'right' : 'wrong'); if (!ok) $$('.opt', el).find(x => x.dataset.o === it[1]).classList.add('right'); $('#nx', el).style.display = 'inline-flex'; });
    } else {
      $('#pl', el).innerHTML = head(it) + `<div class="ipa-out" id="out" style="margin-top:18px"></div><div class="kb">${IPA_KEYS.map(k => `<button data-k="${k}">${k}</button>`).join('')}<button data-k="⌫" style="min-width:64px">⌫</button></div><div style="display:flex;gap:10px"><button class="btn accent" id="chk">Check</button><button class="btn accent" id="nx" style="display:none">Next</button></div><div id="fb" style="margin-top:12px"></div>`;
      let typed = '';
      $$('.kb button', el).forEach(b => b.onclick = () => { if (el.dataset.lock) return; typed = b.dataset.k === '⌫' ? typed.slice(0, -1) : typed + b.dataset.k; $('#out', el).textContent = typed ? `/${typed}/` : ''; });
      $('#chk', el).onclick = () => { if (el.dataset.lock) return; el.dataset.lock = 1; const ok = ipaNorm(typed) === ipaNorm(it[1]); if (ok) score++; $('#fb', el).innerHTML = `<div class="answer show" style="border-color:${ok ? '#34d399' : '#ff5a5f'}">${ok ? '✓ Correct' : '✗ Model answer'}: <span class="ipa" style="font-size:22px">/${esc(it[1])}/</span></div>`; $('#chk', el).style.display = 'none'; $('#nx', el).style.display = 'inline-flex'; };
    }
    $('#say', el).onclick = () => speak(it[0]); speak(it[0]);
    $('#nx', el).onclick = () => { delete el.dataset.lock; i++; show(); };
  };
  el.innerHTML = `<div class="game-head"><select id="modeSel"><option value="choose">Mode 1: choose the transcription</option><option value="type">Mode 2: type it with IPA keys</option></select><div class="score"><span class="chip">Best: ${bestScore('phoneme-lab') ?? 0}%</span></div></div><div id="pl"></div>`;
  $('#modeSel', el).onchange = e => { mode = e.target.value; delete el.dataset.lock; start(); }; start();
  return () => { try { speechSynthesis.cancel(); } catch (e) {} };
}

/* ---------- Exam Sprint ---------- */
function sprint(el, ctx) {
  let iv, left, score, pool;
  const all = TOPICS.flatMap(t => t.quiz.map(q => ({ ...q, t })));
  const start = () => {
    pool = shuffle(all); left = 60; score = 0; clearInterval(iv);
    iv = setInterval(() => { left--; $('#st', el).textContent = left + 's'; if (left <= 0) end(); }, 1000); show();
  };
  const show = () => {
    const q = pool.shift(); if (!q) return end(); const a = areaById(q.t.area);
    $('#sp', el).innerHTML = `<div class="scenario" style="--c:${a.c}"><div class="who" style="color:${a.c}">${esc(a.name)} · ${esc(q.t.title)}</div><p style="font-size:18px;margin:0;color:#fff">${esc(q.q.replace(/\*\*/g, ''))}</p></div><div class="opts">${q.o.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.replace(/\*\*/g, ''))}</button>`).join('')}</div>`;
    $$('.opt', el).forEach(b => b.onclick = () => { const ok = +b.dataset.k === q.a; b.classList.add(ok ? 'right' : 'wrong'); if (!ok) $$('.opt', el)[q.a].classList.add('right'); if (ok) score++; $('#ss', el).textContent = score + ' correct'; $$('.opt', el).forEach(x => x.disabled = true); setTimeout(show, ok ? 450 : 1300); });
  };
  const end = () => { clearInterval(iv); finish(ctx, 'sprint', score, `${score} correct`); $('#sp', el).innerHTML = `<div class="result"><div class="big">${score}</div><p class="muted">correct answers in 60 seconds</p><button class="btn accent" id="again">Sprint again</button></div>`; $('#again', el).onclick = start; };
  el.innerHTML = `<div class="game-head"><div class="score" style="margin-left:0"><span class="chip timer" id="st">60s</span><span class="chip" id="ss">0 correct</span><span class="chip">Best: ${bestScore('sprint') ?? 0}</span></div></div><div id="sp"><div class="result"><div class="big">⚡</div><p class="muted">${all.length} questions in the pool.</p><button class="btn accent" id="go">Start the sprint</button></div></div>`;
  $('#go', el).onclick = start;
  return () => clearInterval(iv);
}

/* ---------- Brain Dump ---------- */
function brainDump(el, ctx) {
  const due = dueTopics().map(d => d.id);
  let topic = topicById(due[0]) || TOPICS[Math.floor(Math.random() * TOPICS.length)], iv, left = 180, started = false;
  const render = () => {
    clearInterval(iv); left = 180; started = false;
    $('#bd', el).innerHTML = `<div class="scenario"><div class="who">${esc(areaById(topic.area).name)} · ${esc(nextDueLabel(S.topics[topic.id]))}</div><q style="font-style:normal">${esc(topic.title)}</q></div>
      <textarea id="txt" rows="10" placeholder="Write everything you remember. The 3-minute timer starts when you type..."></textarea>
      <div style="display:flex;gap:10px;margin-top:12px;align-items:center"><span class="timer" id="bt">3:00</span><button class="btn accent" id="done">Done, show the key points</button></div><div id="chk" style="margin-top:16px"></div>`;
    $('#txt', el).oninput = () => { if (started) return; started = true; iv = setInterval(() => { left--; $('#bt', el).textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`; if (left <= 0) { clearInterval(iv); ctx.toast('Time. Check your recall.'); reveal(); } }, 1000); };
    $('#done', el).onclick = reveal;
  };
  const reveal = () => {
    clearInterval(iv);
    $('#chk', el).innerHTML = `<p class="muted">Tick only the points you really wrote.</p><div class="checklist">${topic.points.map(p => `<label><input type="checkbox"><span>${esc(p.replace(/\*\*/g, ''))}</span></label>`).join('')}</div><button class="btn accent" id="save" style="margin-top:12px">Save and schedule review</button>`;
    $('#save', el).onclick = () => { const b = $$('#chk input', el); const pct = Math.round(b.filter(x => x.checked).length / b.length * 100); const r = recordRecall(topic.id, pct); finish(ctx, 'brain-dump', pct, `${pct}% recall`); ctx.toast(`Recall ${pct}%. ${nextDueLabel(r)}.`); $('#save', el).disabled = true; };
  };
  el.innerHTML = `<div class="game-head"><select id="tsel">${TOPICS.map(t => `<option value="${t.id}" ${t.id === topic.id ? 'selected' : ''}>${due.includes(t.id) ? '● ' : ''}${esc(areaById(t.area).name)}: ${esc(t.title)}</option>`).join('')}</select><button class="btn sm" id="rnd">Random topic</button></div><div id="bd"></div>`;
  $('#tsel', el).onchange = e => { topic = topicById(e.target.value); render(); };
  $('#rnd', el).onclick = () => { topic = TOPICS[Math.floor(Math.random() * TOPICS.length)]; $('#tsel', el).value = topic.id; render(); };
  render();
  return () => clearInterval(iv);
}

/* ---------- Who Said It? ---------- */
function allRefs(area) {
  const seen = new Set(), out = [];
  TOPICS.filter(t => !area || t.area === area).forEach(t => t.refs.forEach(r => { const k = r[0] + r[2]; if (!seen.has(k)) { seen.add(k); out.push({ who: r[0], year: r[1], work: r[2], idea: r[3], area: t.area }); } }));
  return out;
}
function whoSaidIt(el, ctx) {
  let area = ctx.area || '', list = [], i = 0, score = 0;
  const start = () => { const pool = allRefs(area); list = shuffle(pool.filter((r, k, arr) => arr.findIndex(x => x.idea === r.idea) === k)).slice(0, 10); i = 0; score = 0; show(); };
  const show = () => {
    if (i >= list.length) { const pct = score * 10; finish(ctx, 'who-said-it', pct, `${score}/10`); $('#ws', el).innerHTML = `<div class="result"><div class="big">${score}/${list.length}</div><p class="muted">${score >= 8 ? 'You can cite like a trainer.' : 'Visit the Scholars hall, then try again.'}</p><button class="btn accent" id="again">Play again</button> <a class="btn" href="#/scholars">Scholars hall</a></div>`; $('#again', el).onclick = start; return; }
    const r = list[i]; const a = areaById(r.area);
    const names = [...new Set(allRefs('').map(x => x.who))].filter(n => n !== r.who);
    const sameArea = shuffle([...new Set(allRefs(r.area).map(x => x.who))].filter(n => n !== r.who));
    const opts = shuffle([r.who, ...[...sameArea, ...shuffle(names)].filter((n, k, arr) => arr.indexOf(n) === k).slice(0, 3)]);
    $('#ws', el).innerHTML = `<div class="prog"><i style="width:${i * 10}%"></i></div><div class="scenario" style="--c:${a.c}"><div class="who" style="color:${a.c}">${esc(a.name)} · ${r.year}</div><q style="font-style:normal">${esc(r.idea)}</q></div><div class="opts">${opts.map(o => `<button class="opt" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div><div class="why" id="why"></div><button class="btn accent" id="nx" style="margin-top:14px;display:none">Next</button>`;
    $$('.opt', el).forEach(b => b.onclick = () => {
      if (el.dataset.lock) return; el.dataset.lock = 1;
      const ok = b.dataset.o === r.who; if (ok) score++;
      b.classList.add(ok ? 'right' : 'wrong'); if (!ok) $$('.opt', el).find(x => x.dataset.o === r.who).classList.add('right');
      $('#why', el).innerHTML = `<b>${esc(r.who)} (${r.year})</b>, <i>${esc(r.work)}</i>`; $('#why', el).classList.add('show'); $('#nx', el).style.display = 'inline-flex';
    });
    $('#nx', el).onclick = () => { delete el.dataset.lock; i++; show(); };
  };
  el.innerHTML = `<div class="game-head">${areaSelect(area)}<div class="score"><span class="chip">Best: ${bestScore('who-said-it') ?? 0}%</span></div></div><div id="ws"></div>`;
  $('#areaSel', el).onchange = e => { area = e.target.value; delete el.dataset.lock; start(); }; start();
}

/* ---------- Time Machine ---------- */
function timeMachine(el, ctx) {
  let drag = null, set = [];
  const start = () => {
    const pool = shuffle(allRefs(''));
    set = []; const years = new Set();
    for (const r of pool) { if (!years.has(r.year)) { years.add(r.year); set.push(r); } if (set.length === 5) break; }
    const correct = [...set].sort((x, y) => x.year - y.year);
    let items = shuffle(set); if (items.every((x, k) => x === correct[k])) items.reverse();
    $('#tm', el).innerHTML = `<p class="muted">Oldest at the top, newest at the bottom.</p><div class="order-list" id="ol">${items.map(r => `<div class="order-item" draggable="true" data-y="${r.year}"><span class="h">⋮⋮</span><span><b>${esc(r.who)}</b>: <i>${esc(r.work)}</i><br><small class="muted">${esc(r.idea)}</small> <small class="yr-reveal">${r.year}</small></span><span class="mv"><button data-d="-1" aria-label="Up">↑</button><button data-d="1" aria-label="Down">↓</button></span></div>`).join('')}</div>
      <div style="display:flex;gap:10px;margin-top:16px"><button class="btn accent" id="chk">Check order</button><button class="btn" id="rst">New set</button></div><div id="res" style="margin-top:12px"></div>`;
    const ol = $('#ol', el);
    $$('.order-item', el).forEach(it => {
      it.ondragstart = () => { drag = it; it.classList.add('dragging'); }; it.ondragend = () => { it.classList.remove('dragging'); drag = null; };
      it.ondragover = e => { e.preventDefault(); if (!drag || drag === it) return; const r = it.getBoundingClientRect(); ol.insertBefore(drag, e.clientY < r.top + r.height / 2 ? it : it.nextSibling); };
      $$('[data-d]', it).forEach(b => b.onclick = () => { const d = +b.dataset.d; if (d < 0 && it.previousElementSibling) ol.insertBefore(it, it.previousElementSibling); if (d > 0 && it.nextElementSibling) ol.insertBefore(it.nextElementSibling, it); $$('.order-item', el).forEach(x => x.classList.remove('ok', 'no')); });
    });
    $('#chk', el).onclick = () => {
      const els = $$('.order-item', el); const ys = [...set].map(r => r.year).sort((x, y) => x - y); let ok = 0;
      els.forEach((x, k) => { const g = +x.dataset.y === ys[k]; x.classList.toggle('ok', g); x.classList.toggle('no', !g); if (g) ok++; });
      el.classList.add('show-years');
      const pct = ok * 20; $('#res', el).innerHTML = `<b>${ok} / 5</b> in the right place. Years are now shown.`;
      if (pct === 100) finish(ctx, 'time-machine', 100, 'perfect timeline'); else bestScore('time-machine', pct);
    };
    $('#rst', el).onclick = () => { el.classList.remove('show-years'); start(); };
  };
  el.innerHTML = `<div class="game-head"><div class="score" style="margin-left:0"><span class="chip">Best: ${bestScore('time-machine') ?? 0}%</span></div></div><div id="tm"></div>`;
  start();
}

// The IELTS world: views, paper-cut illustrations, charts and purposeful games.
import { IELTS_SECTIONS, COLOUR_CODE, WRITING_CRITERIA, SPEAKING_CRITERIA, EXAM_FACTS, VIP_LOOP, VIP_LINKS,
  TASK1_PLAN, TASK1_SHAPE, TASK1_BUDGET, TASK1_TYPES, SIX_MIN_PLAN, TASK2_SHAPE, PEEL, TASK2_TYPES, T2_PROMPTS, T2_TYPE_NAMES,
  SPEAK_DIAGNOSIS, FRAMES, FRAME_DECIDER, SPEAK_TIMES, SPEAK_QUESTIONS, VOCAB_TRUTH, VOCAB, OVERUSED,
  PARAGRAPHS, PICK_TWO, OVERVIEW_Q, OVERVIEW_WHY, GROUP_IT, PRECISION, UPGRADE, REGISTER, ERRORS } from './data/ielts.js';
import { S, save, addXP, bestScore } from './store.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const secOf = id => IELTS_SECTIONS.find(s => s.id === id);
const t1ById = id => TASK1_TYPES.find(t => t.id === id);
const t2ById = id => TASK2_TYPES.find(t => t.id === id);
const frameById = id => FRAMES.find(f => f.id === id);
const store = () => { S.ielts = S.ielts || { vocab: {}, plans: [] }; S.ielts.vocab = S.ielts.vocab || {}; S.ielts.plans = S.ielts.plans || []; return S.ielts; };
let X = null; // context from app.js

export const IELTS_NAV = IELTS_SECTIONS.map(s => [s.href, s.name, s.c]);

export const IELTS_GAMES = [
  { id: 'planner', name: '6-Minute Planner', area: 'Task 2', trains: 'Task Response', icon: '⏱', why: 'Your writing problem is planning, not language. This runs the five steps with a timer until they are automatic.' },
  { id: 'decoder', name: 'Question Decoder', area: 'Task 2', trains: 'Task Response', icon: '🔎', why: 'Name the question type in seconds, then choose the thesis that answers every part. This kills knowledge telling at the start.' },
  { id: 'picktwo', name: 'Pick Two', area: 'Task 2', trains: 'Task Response', icon: '✌', why: 'Too many ideas and too few ideas are the same problem: no rule for choosing. Practise choosing the two that prove your answer.' },
  { id: 'paragraph', name: 'Paragraph Builder', area: 'Task 2', trains: 'Coherence and Cohesion', icon: '🧱', why: 'Cut the sentence that only shows knowledge, then order Point, Explain, Example, Link.' },
  { id: 'overview', name: 'Overview Spotter', area: 'Task 1', trains: 'Task Achievement', icon: '👁', why: 'No overview, no band 7. Train your eye for the big picture with no numbers.' },
  { id: 'groupit', name: 'Group It', area: 'Task 1', trains: 'Coherence and Cohesion', icon: '🗂', why: 'Body paragraphs are groups, not a tour of the chart. Sort the data by logic.' },
  { id: 'precision', name: 'Data Precision', area: 'Task 1', trains: 'Task Achievement and Lexis', icon: '🎯', why: 'Doubled, tripled, just under a quarter: accurate language is where Task 1 marks hide.' },
  { id: 'upgrade', name: 'Upgrade It', area: 'C2 vocabulary', trains: 'Lexical Resource', icon: '⬆', why: 'Choose the precise, natural word, not the fanciest one. The trap options are real band 7 mistakes.' },
  { id: 'register', name: 'Register Sort', area: 'C2 vocabulary', trains: 'Lexical Resource', icon: '⚖', why: 'Idioms win marks in speaking and lose them in essays. Sort each phrase into its world.' },
  { id: 'errors', name: 'Error Hunter', area: 'Accuracy', trains: 'Grammatical Range and Accuracy', icon: '🐞', why: 'A 9 needs almost every sentence error-free. These are the slips that keep strong writers at 7.' },
  { id: 'frames', name: 'Frame Trainer', area: 'Speaking', trains: 'Fluency and Coherence', icon: '🎙', why: 'You speak on intuition with no time control. Pick the frame in one second, then speak to a visual timer.' }
];

/* ======================= illustrations (original paper-cut SVG) ======================= */
const SHADOW = id => `<filter id="${id}" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity=".28"/></filter>`;
function artCorridor() {
  const slats = Array.from({ length: 15 }, (_, i) => { const x = i * (400 / 14); const xi = 172 + i * (56 / 14); return `<polygon points="${x},0 ${x + 13},0 ${xi + 2},118 ${xi},118" fill="${i % 2 ? '#1a1406' : '#d7a14a'}" opacity="${i % 2 ? 1 : .9}"/>`; }).join('');
  const ribsL = Array.from({ length: 13 }, (_, i) => { const y = i * 25; const t = y / 300; return `<line x1="0" y1="${y}" x2="172" y2="${118 + t * 82}" stroke="#4f78ff" stroke-width="1.2" opacity=".55"/>`; }).join('');
  const ribsR = Array.from({ length: 13 }, (_, i) => { const y = i * 25; const t = y / 300; return `<line x1="400" y1="${y}" x2="228" y2="${118 + t * 82}" stroke="#4f78ff" stroke-width="1.2" opacity=".55"/>`; }).join('');
  const vL = Array.from({ length: 9 }, (_, i) => { const x = i * 19; const t = x / 172; return `<line x1="${x}" y1="${t * 118}" x2="${x}" y2="${300 - t * 100}" stroke="#0e1f63" stroke-width="2" opacity=".55"/>`; }).join('');
  const vR = Array.from({ length: 9 }, (_, i) => { const x = 400 - i * 19; const t = (400 - x) / 172; return `<line x1="${x}" y1="${t * 118}" x2="${x}" y2="${300 - t * 100}" stroke="#0e1f63" stroke-width="2" opacity=".55"/>`; }).join('');
  return `<svg class="iart" viewBox="0 0 400 300" aria-hidden="true"><defs>${SHADOW('ic1')}<linearGradient id="door" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf7a"/><stop offset=".6" stop-color="#ff6a3d"/><stop offset="1" stop-color="#b8341e"/></linearGradient><linearGradient id="fl" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1d3fb0"/><stop offset="1" stop-color="#c98a3a"/></linearGradient></defs>
    <polygon points="0,0 400,0 228,118 172,118" fill="#0f0b03"/>${slats}
    <polygon points="0,0 172,118 172,200 0,300" fill="#1f45c8"/>${vL}${ribsL}
    <polygon points="400,0 228,118 228,200 400,300" fill="#2550dc"/>${vR}${ribsR}
    <polygon points="0,300 400,300 228,200 172,200" fill="url(#fl)"/>
    <g opacity=".35" stroke="#0a1a55">${Array.from({ length: 8 }, (_, i) => `<line x1="${i * 57}" y1="300" x2="${172 + i * 8}" y2="200"/>`).join('')}${Array.from({ length: 5 }, (_, i) => { const y = 210 + i * 20; const t = (y - 200) / 100; return `<line x1="${172 - t * 172}" y1="${y}" x2="${228 + t * 172}" y2="${y}"/>`; }).join('')}</g>
    <line x1="0" y1="2" x2="172" y2="118" stroke="#ffc46b" stroke-width="3" opacity=".9"/><line x1="400" y1="2" x2="228" y2="118" stroke="#ffc46b" stroke-width="3" opacity=".9"/>
    <rect x="172" y="118" width="56" height="82" fill="url(#door)"/><rect x="186" y="128" width="28" height="72" fill="#ff8a3d" opacity=".55"/>
    <polygon points="172,118 162,112 162,206 172,200" fill="#2a1c05" filter="url(#ic1)"/>
    <g filter="url(#ic1)"><circle cx="70" cy="160" r="9" fill="#ff5a36"/><circle cx="96" cy="150" r="8" fill="#ffc21a"/><circle cx="120" cy="146" r="7" fill="#23afa9"/></g></svg>`;
}
function artTask1() {
  const bars = [[150, 62], [178, 92], [206, 74], [234, 118], [262, 140]];
  return `<svg class="iart" viewBox="0 0 400 300" aria-hidden="true"><defs>${SHADOW('ic2')}<clipPath id="hole"><path d="M118,96 C118,50 168,30 214,40 C262,50 300,86 300,140 C300,198 258,236 206,238 C150,240 118,204 118,160 Z"/></clipPath></defs>
    <path d="M70,40 L340,30 L360,270 L60,280 Z" fill="var(--pp3)" filter="url(#ic2)"/>
    <path d="M118,96 C118,50 168,30 214,40 C262,50 300,86 300,140 C300,198 258,236 206,238 C150,240 118,204 118,160 Z" fill="#0b5f93"/>
    <g clip-path="url(#hole)"><rect x="100" y="20" width="220" height="240" fill="#0f78b8"/>
      ${bars.map(([x, h], i) => `<rect x="${x}" y="${230 - h}" width="22" height="${h}" rx="3" fill="${['#7fd3ff', '#4cc0f5', '#21a8ea', '#1694d6', '#0b7ec0'][i]}" filter="url(#ic2)"/>`).join('')}
      <polyline points="140,190 170,160 198,170 226,120 256,96 290,70" fill="none" stroke="#e9f8ff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" filter="url(#ic2)"/>
      ${[[170, 160], [226, 120], [290, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#fff"/>`).join('')}</g>
    <path d="M118,96 C118,50 168,30 214,40 C262,50 300,86 300,140" fill="none" stroke="var(--pp)" stroke-width="10" filter="url(#ic2)"/>
    <g filter="url(#ic2)" fill="#1aa3e0"><path d="M84,64 l16,-6 l-4,14 z"/><path d="M60,110 l12,-12 l4,14 z"/><circle cx="96" cy="34" r="6"/><text x="44" y="78" font-family="Zilla Slab, serif" font-weight="700" font-size="26">%</text><path d="M312,40 l18,4 l-10,12 z"/><text x="318" y="92" font-family="Zilla Slab, serif" font-weight="700" font-size="22">↗</text></g></svg>`;
}
function artTask2() {
  const strips = [['Introduction', 70], ['Body 1', 108], ['Body 2', 146], ['Conclusion', 184]];
  return `<svg class="iart" viewBox="0 0 400 300" aria-hidden="true"><defs>${SHADOW('ic3')}</defs>
    <path d="M40,250 L360,250 L360,272 L40,272 Z" fill="var(--pp2)"/>
    <path d="M90,248 C90,248 110,238 200,238 C290,238 310,248 310,248 Z" fill="#1d1238"/>
    ${strips.map(([t, y], i) => `<g filter="url(#ic3)" transform="rotate(${-6 + i * 3} 200 ${y})"><rect x="${96 + i * 6}" y="${y}" width="${210 - i * 12}" height="30" rx="4" fill="${i === 0 || i === 3 ? '#ff7a21' : '#ffb06b'}"/><text x="${110 + i * 6}" y="${y + 20}" font-family="Zilla Slab, serif" font-weight="700" font-size="14" fill="#2a1450">${t}</text></g>`).join('')}
    <g filter="url(#ic3)" transform="translate(300 34) rotate(28)"><path d="M0,0 L22,0 L22,70 L11,96 L0,70 Z" fill="#ff7a21"/><path d="M11,60 L11,92" stroke="#2a1450" stroke-width="2.5"/><circle cx="11" cy="58" r="4" fill="#2a1450"/><rect x="-2" y="-22" width="26" height="24" rx="3" fill="#fff3e6"/></g>
    <g fill="#ffb06b" filter="url(#ic3)"><circle cx="64" cy="58" r="5"/><path d="M48,110 l14,-4 l-6,12 z"/><circle cx="348" cy="150" r="4"/><path d="M76,32 l10,8 l-12,4 z"/></g></svg>`;
}
function artSpeaking() {
  return `<svg class="iart" viewBox="0 0 400 300" aria-hidden="true"><defs>${SHADOW('ic4')}<clipPath id="bub"><path d="M90,60 C90,40 110,30 140,30 L300,30 C326,30 340,44 340,70 L340,170 C340,196 324,206 300,206 L190,206 L140,250 L150,206 L130,206 C104,206 90,194 90,170 Z"/></clipPath></defs>
    <path d="M90,60 C90,40 110,30 140,30 L300,30 C326,30 340,44 340,70 L340,170 C340,196 324,206 300,206 L190,206 L140,250 L150,206 L130,206 C104,206 90,194 90,170 Z" fill="var(--pp3)" filter="url(#ic4)"/>
    <g clip-path="url(#bub)">${[150, 120, 92, 66, 42].map((r, i) => `<circle cx="215" cy="230" r="${r}" fill="${['#ff9a8c', '#ff7a6b', '#f2554a', '#e5382b', '#b8231a'][i]}" filter="url(#ic4)"/>`).join('')}</g>
    ${[['A-R', 40, 70, '#fff'], ['STAR', 32, 150, '#ffd9d4'], ['PPF', 330, 236, '#fff'], ['AREC', 348, 96, '#ffd9d4']].map(([t, x, y, c]) => `<g filter="url(#ic4)" transform="translate(${x} ${y}) rotate(${x > 200 ? 8 : -8})"><rect x="-30" y="-16" width="60" height="32" rx="7" fill="${c}"/><text x="0" y="6" text-anchor="middle" font-family="Zilla Slab, serif" font-weight="700" font-size="15" fill="#08302e">${t}</text></g>`).join('')}</svg>`;
}
function artVocab() {
  const ribs = Array.from({ length: 30 }, (_, i) => { const x = 60 + i * 9.6; const amp = 14 * Math.sin((i / 29) * Math.PI); return `<path d="M${x},30 C${x + amp},100 ${x - amp},170 ${x},240" stroke="${i % 2 ? '#c99300' : '#ffd23f'}" stroke-width="9" fill="none"/>`; }).join('');
  const chev = Array.from({ length: 10 }, (_, i) => `<path d="M${30 + i * 36},300 L${48 + i * 36},270 L${66 + i * 36},300" fill="none" stroke="${i % 2 ? '#f4f1ea' : '#2a2a2a'}" stroke-width="14"/>`).join('');
  return `<svg class="iart" viewBox="0 0 400 300" aria-hidden="true"><defs>${SHADOW('ic5')}<linearGradient id="gl" x1="0" x2="1"><stop offset="0" stop-color="#7a5600"/><stop offset=".5" stop-color="#ffe07a"/><stop offset="1" stop-color="#7a5600"/></linearGradient></defs>
    <rect x="44" y="20" width="312" height="230" fill="#0c0c0c" filter="url(#ic5)"/><g opacity=".95">${ribs}</g><rect x="44" y="20" width="312" height="230" fill="url(#gl)" opacity=".18"/>
    <rect x="44" y="20" width="312" height="230" fill="none" stroke="#2b2b2b" stroke-width="10"/>${chev}
    ${[['precise', 90, 96], ['natural', 210, 70], ['C2', 300, 160]].map(([t, x, y]) => `<g filter="url(#ic5)"><rect x="${x - 6}" y="${y - 22}" width="${t.length * 13 + 16}" height="32" rx="4" fill="#f4f1ea"/><text x="${x + 2}" y="${y}" font-family="Zilla Slab, serif" font-weight="700" font-size="20" fill="#111">${t}</text></g>`).join('')}</svg>`;
}
function artPlay() {
  return `<svg class="iart" viewBox="0 0 400 300" aria-hidden="true"><defs>${SHADOW('ic6')}</defs>
    ${Array.from({ length: 16 }, (_, i) => `<rect x="${i * 25}" y="0" width="12" height="300" fill="${i % 2 ? '#1a0e08' : '#e9a23b'}" opacity=".22"/>`).join('')}
    <g filter="url(#ic6)"><path d="M90,90 h60 a14,14 0 1,1 28,0 h60 v60 a14,14 0 1,0 0,28 v60 h-60 a14,14 0 1,1 -28,0 h-60 z" fill="#ffd23f"/></g>
    <g filter="url(#ic6)" transform="translate(150 -10) rotate(12 120 120)"><path d="M150,70 h56 a13,13 0 1,1 26,0 h56 v112 h-138 z" fill="#1f3fae"/><text x="196" y="138" font-family="Zilla Slab, serif" font-weight="700" font-size="34" fill="#ffd23f">9</text></g>
    <g filter="url(#ic6)"><rect x="40" y="200" width="70" height="70" rx="12" fill="#fff" transform="rotate(-12 75 235)"/>${[[60, 220], [90, 250], [75, 235]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="#d8432a" transform="rotate(-12 75 235)"/>`).join('')}</g></svg>`;
}
const ART = { hub: artCorridor, task1: artTask1, task2: artTask2, speaking: artSpeaking, vocab: artVocab, play: artPlay };

/* ======================= shared UI ======================= */
function ihero({ sec, eyebrow, title, lead, chips = [], art = true, small = false }) {
  return `<section class="ihero hero-morph ${small ? 'small' : ''}"><div class="ih-copy"><div class="ieyebrow">${esc(eyebrow)}</div><h1>${title}</h1>${lead ? `<p class="ilead">${lead}</p>` : ''}${chips.length ? `<div class="ichips">${chips.map(c => `<span class="ichip">${esc(c)}</span>`).join('')}</div>` : ''}</div>${art ? `<div class="ih-art">${ART[sec]()}</div>` : ''}</section>`;
}
const ititle = (h, p = '', right = '') => `<div class="ititle"><div><h2>${h}</h2>${p ? `<p>${p}</p>` : ''}</div>${right}</div>`;
const ibtn = (href, label, cls = '') => `<a class="ibtn ${cls}" href="${href}" data-morph>${esc(label)}<span>→</span></a>`;
function colourKey() {
  return `<div class="ckey">${COLOUR_CODE.map(([c, n, m]) => `<span><i style="--k:${c}"></i><b>${n}</b> ${esc(m)}</span>`).join('')}</div>`;
}
function vipPanel(key) {
  const links = VIP_LINKS[key] || [];
  return `<div class="ipanel vip"><div class="vip-head"><span class="vip-badge">VIP</span><div><h3>Use it with your IELTS Advantage VIP course</h3><p>Same rule as your handbook: watch, quiz, recall, use, all on the same day.</p></div></div>
    <div class="loop">${VIP_LOOP.map(([k, v], i) => `<div><b>${i + 1}. ${k}</b><span>${esc(v)}</span></div>`).join('')}</div>
    <ul class="vip-links">${links.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join('')}</ul></div>`;
}
function criteriaCards(list) {
  return `<div class="igrid g4">${list.map(c => `<div class="ipanel crit"><span class="ck">${esc(c.k)}</span><h4>${esc(c.name)}</h4><p><b>Band 9:</b> ${esc(c.nine)}</p><p class="yourisk">${esc(c.you)}</p></div>`).join('')}</div>`;
}
function gameCard(g) {
  return `<a class="ipanel gcard" href="#/ielts/play/${g.id}" data-morph><span class="gicon">${g.icon}</span><div><span class="gtag">${esc(g.area)} · ${esc(g.trains)}</span><h4>${esc(g.name)}</h4><p>${esc(g.why)}</p></div><span class="gbest">${bestScore('i-' + g.id) != null ? 'Best ' + bestScore('i-' + g.id) + '%' : 'Play'}</span></a>`;
}
const gamesFor = area => IELTS_GAMES.filter(g => g.area === area);
function finish(id, pct, label) {
  const rec = bestScore('i-' + id, pct); addXP(Math.max(5, Math.round(pct / 2))); X.updateMe();
  if (rec && pct > 0) { X.confetti(); X.toast(`New best: ${label}`); }
  return rec;
}

/* ======================= charts ======================= */
const SER = ['#1aa3e0', '#ff7a21', '#e5382b', '#18b26b', '#8b5cf6', '#ffc21a'];
const fmt = n => Number(n).toLocaleString('en-GB');
function svgLine(c, W = 560, H = 300) {
  const L = 46, R = 16, T = 18, B = 40, w = W - L - R, h = H - T - B, n = c.x.length;
  const X1 = i => L + (w * i) / (n - 1), Y1 = v => T + h - (h * v) / c.max;
  const grid = Array.from({ length: 5 }, (_, i) => { const v = (c.max / 4) * i; return `<line x1="${L}" x2="${W - R}" y1="${Y1(v)}" y2="${Y1(v)}" class="gl"/><text x="${L - 8}" y="${Y1(v) + 4}" text-anchor="end" class="tk">${fmt(v)}${c.unit === '%' ? '%' : ''}</text>`; }).join('');
  const xs = c.x.map((x, i) => `<text x="${X1(i)}" y="${H - 14}" text-anchor="middle" class="tk">${esc(x)}</text>`).join('');
  const lines = c.series.map(([name, vals], k) => `<polyline points="${vals.map((v, i) => `${X1(i)},${Y1(v)}`).join(' ')}" fill="none" stroke="${SER[k]}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" class="ln"/>${vals.map((v, i) => `<circle cx="${X1(i)}" cy="${Y1(v)}" r="4.5" fill="#fff" stroke="${SER[k]}" stroke-width="2.5"/>`).join('')}`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" class="chart">${grid}${xs}${lines}</svg>${legend(c.series.map(s => s[0]))}`;
}
function svgBar(c, W = 560, H = 300) {
  const L = 46, R = 16, T = 18, B = 40, w = W - L - R, h = H - T - B, n = c.x.length, m = c.series.length;
  const gw = w / n, bw = Math.min(26, (gw - 18) / m), Y1 = v => T + h - (h * v) / c.max;
  const grid = Array.from({ length: 5 }, (_, i) => { const v = (c.max / 4) * i; return `<line x1="${L}" x2="${W - R}" y1="${Y1(v)}" y2="${Y1(v)}" class="gl"/><text x="${L - 8}" y="${Y1(v) + 4}" text-anchor="end" class="tk">${fmt(v)}</text>`; }).join('');
  const bars = c.x.map((x, i) => { const x0 = L + gw * i + (gw - bw * m) / 2; return c.series.map(([, vals], k) => `<rect x="${x0 + k * bw}" y="${Y1(vals[i])}" width="${bw - 3}" height="${T + h - Y1(vals[i])}" rx="2" fill="${SER[k]}" class="br"/>`).join('') + `<text x="${L + gw * i + gw / 2}" y="${H - 14}" text-anchor="middle" class="tk">${esc(x)}</text>`; }).join('');
  return `<svg viewBox="0 0 ${W} ${H}" class="chart">${grid}${bars}<text x="${L}" y="12" class="tk">${esc(c.unit)}</text></svg>${c.series.length > 1 ? legend(c.series.map(s => s[0])) : ''}`;
}
function svgPie(title, slices, size = 220) {
  const r = size / 2 - 14, cx = size / 2, cy = size / 2 + 6; let a0 = -Math.PI / 2; const tot = slices.reduce((s, x) => s + x[1], 0);
  const segs = slices.map(([lab, v], k) => { const a1 = a0 + (v / tot) * Math.PI * 2, mid = (a0 + a1) / 2, big = a1 - a0 > Math.PI ? 1 : 0;
    const p = `M${cx},${cy} L${cx + r * Math.cos(a0)},${cy + r * Math.sin(a0)} A${r},${r} 0 ${big} 1 ${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)} Z`;
    const t = v >= 6 ? `<text x="${cx + r * .64 * Math.cos(mid)}" y="${cy + r * .64 * Math.sin(mid) + 4}" text-anchor="middle" class="pl">${v}%</text>` : '';
    a0 = a1; return `<path d="${p}" fill="${SER[k]}" stroke="#fffdf6" stroke-width="2" class="sl"/>${t}`; }).join('');
  return `<figure class="pie"><svg viewBox="0 0 ${size} ${size + 12}">${segs}</svg><figcaption>${esc(title)}</figcaption></figure>`;
}
const legend = names => `<div class="legend">${names.map((n, k) => `<span><i style="background:${SER[k]}"></i>${esc(n)}</span>`).join('')}</div>`;
function chartHTML(t) {
  const c = t.chart;
  if (c.type === 'line') return svgLine(c);
  if (c.type === 'bar') return svgBar(c);
  if (c.type === 'pie') return `<div class="pies">${c.charts.map(([y, s]) => svgPie(y, s)).join('')}</div>${legend(c.charts[0][1].map(s => s[0]))}`;
  if (c.type === 'table') return `<div class="itable-wrap"><table class="itable"><thead><tr>${c.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${c.rows.map(r => `<tr>${r.map((v, i) => `<td>${i ? fmt(v) : esc(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if (c.type === 'mixed') return `<div class="mixed"><div>${svgBar(c.bar, 420, 280)}</div><div>${svgPie(c.pie[0], c.pie[1], 200)}${legend(c.pie[1].map(s => s[0]))}</div></div>`;
  if (c.type === 'process') return `<ol class="process">${c.steps.map((s, i) => `<li><span>${i + 1}</span>${esc(s)}</li>`).join('')}</ol>`;
  if (c.type === 'map') return `<div class="maps">${c.panels.map(([title, items]) => `<figure><figcaption>${esc(title)}</figcaption><svg viewBox="0 0 100 100" class="map">${items.map(([k, x, y, w, h, lab]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${k === 'road' ? 0 : 2}" class="mk ${k}"/>${lab ? `<text x="${x + w / 2}" y="${y + h / 2 + 1.6}" text-anchor="middle" class="ml">${esc(lab)}</text>` : ''}`).join('')}<text x="94" y="7" class="ml" text-anchor="middle">N ↑</text></svg></figure>`).join('')}</div>`;
  return '';
}
function chartCard(t, withPrompt = true) {
  return `<div class="chart-card">${withPrompt ? `<p class="q-blue">${esc(t.prompt)}</p>` : ''}${chartHTML(t)}<p class="sample-note">Invented data for practice.</p></div>`;
}

/* ======================= views ======================= */
function base(sec, crumbsList) { X.setSection(secOf(sec).sec); X.crumbs(crumbsList); }

function hubView() {
  base('hub', [['Home', '#/'], ['IELTS', '#/ielts']]);
  const doors = IELTS_SECTIONS.filter(s => s.id !== 'hub');
  const blurbs = { task1: `${TASK1_TYPES.length} visual types, one 4-paragraph shape`, task2: `${TASK2_TYPES.length} question types, one 6-minute plan`, speaking: `${FRAMES.length} frames for 3 parts, with timing`, vocab: `${VOCAB.reduce((n, g) => n + g.items.length, 0)} phrases tagged for speaking or writing`, play: `${IELTS_GAMES.length} games, each with a learning purpose` };
  X.view.innerHTML = ihero({ sec: 'hub', eyebrow: 'IELTS Academic · Writing and Speaking', title: 'The corridor <em>to 9</em>', lead: 'Five doors. Each one trains one thing your profile says you need: answer first, choose two ideas, know where to stop, and give every spoken answer a shape.', chips: ['Writing Task 1', 'Writing Task 2', 'Speaking', 'C2 vocabulary'] }) + `
  <div class="doors">${doors.map((s, i) => `<a class="door" href="${s.href}" data-morph style="--dc:${s.c}"><span class="dnum">0${i + 1}</span><span class="dk"></span><h3>${esc(s.name)}</h3><p>${esc(blurbs[s.id])}</p><span class="dgo">Enter</span></a>`).join('')}</div>
  ${ititle('Where you stand', 'From your last results (General Training, July 2026). Honest targets, not wishes.')}
  <div class="igrid g3">
    <div class="ipanel stand"><span class="big">7.0 → 9</span><h4>Writing</h4><p>The rarest 9 in IELTS. Treat 8.5 as a strong result and 9 as the stretch. Your block is planning, not English.</p></div>
    <div class="ipanel stand"><span class="big">8.0 → 9</span><h4>Speaking</h4><p>Your closest 9. Keep the fluency, add shape and timing, and remove pauses that search for words.</p></div>
    <div class="ipanel stand"><span class="big">Academic</span><h4>This section</h4><p>Task 1 here is the Academic version (graphs, tables, maps, processes). Task 2 and Speaking are the same in both tests.</p></div></div>
  ${ititle('Built around how you learn', 'The same colour code as your copybook. Every page asks you before it tells you.')}
  <div class="ipanel">${colourKey()}<ul class="rules"><li><b>Answer first.</b> Every writing tool makes you write your answer before you see a model.</li><li><b>Pick two.</b> Never more than two main ideas in Task 2.</li><li><b>Word budget.</b> Task 1: 170 to 190 words. Task 2: 290 to 320 words. Then stop.</li><li><b>Asked, not told.</b> Every page ends with a game that tests you.</li></ul></div>
  ${ititle('The exam in three lines')}
  <div class="igrid g3">${EXAM_FACTS.map(([a, b, c]) => `<div class="ipanel fact"><h4>${a}</h4><span class="big sm">${b}</span><p>${esc(c)}</p></div>`).join('')}</div>`;
}

function task1View() {
  base('task1', [['IELTS', '#/ielts'], ['Task 1', '#/ielts/task1']]);
  X.view.innerHTML = ihero({ sec: 'task1', eyebrow: 'Writing Task 1 · Academic', title: 'Graphs, tables, <em>maps</em> and processes', lead: 'Seven kinds of visual, one shape. Your job is to select and compare, never to copy every number.', chips: ['20 minutes', '150+ words', 'Overview = band 7 gate'] }) + `
  ${ititle('The 3-minute plan', 'Before you write a word. Same order every time.')}
  <div class="steps4">${TASK1_PLAN.map(([a, t, b], i) => `<div class="ipanel stp"><span class="sn">${i + 1}</span><h4>${a} <small>${t}</small></h4><p>${esc(b)}</p></div>`).join('')}</div>
  ${ititle('The shape: four paragraphs', esc(TASK1_BUDGET))}
  <div class="layers">${TASK1_SHAPE.map(([a, w, b], i) => `<div class="layer l${i}"><b>${a}</b><span class="lw">${w}</span><p>${esc(b)}</p></div>`).join('')}</div>
  ${ititle('Choose a visual', 'Each page has a chart, what to look for, how to group, and a model. Write your overview before you look.')}
  <div class="igrid g4">${TASK1_TYPES.map(t => `<a class="ipanel tcard" href="#/ielts/task1/${t.id}" data-morph><div class="thumb">${thumb(t)}</div><h4>${esc(t.name)}</h4><span class="ttag">${esc(t.time)}</span><p>${esc(t.what)}</p></a>`).join('')}</div>
  ${ititle('What a 9 looks like in Task 1')}
  ${criteriaCards(WRITING_CRITERIA)}
  ${vipPanel('task1')}
  ${ititle('Practise it', 'Each game trains one criterion.')}
  <div class="igrid g3">${gamesFor('Task 1').map(gameCard).join('')}</div>`;
}
function thumb(t) {
  const k = t.chart.type;
  if (k === 'line') return `<svg viewBox="0 0 100 60"><polyline points="6,50 30,40 52,44 74,22 94,10" fill="none" stroke="#1aa3e0" stroke-width="5" stroke-linecap="round"/><polyline points="6,30 30,24 52,36 74,30 94,32" fill="none" stroke="#ff7a21" stroke-width="5" stroke-linecap="round"/></svg>`;
  if (k === 'bar') return `<svg viewBox="0 0 100 60">${[[8, 30], [22, 42], [40, 20], [54, 34], [72, 12], [86, 46]].map(([x, h], i) => `<rect x="${x}" y="${56 - h}" width="11" height="${h}" fill="${i % 2 ? '#ff7a21' : '#1aa3e0'}"/>`).join('')}</svg>`;
  if (k === 'pie') return `<svg viewBox="0 0 100 60"><circle cx="30" cy="30" r="24" fill="#1aa3e0"/><path d="M30,30 L30,6 A24,24 0 0 1 52,38 Z" fill="#ff7a21"/><circle cx="72" cy="30" r="24" fill="#1aa3e0"/><path d="M72,30 L72,6 A24,24 0 0 1 94,22 Z" fill="#e5382b"/></svg>`;
  if (k === 'table') return `<svg viewBox="0 0 100 60">${[0, 1, 2, 3].map(r => [0, 1, 2].map(cc => `<rect x="${8 + cc * 30}" y="${6 + r * 13}" width="26" height="10" rx="2" fill="${r === 0 ? '#1aa3e0' : '#fff'}" opacity="${r === 0 ? 1 : .85}"/>`).join('')).join('')}</svg>`;
  if (k === 'mixed') return `<svg viewBox="0 0 100 60">${[[6, 20], [18, 30], [30, 40], [42, 26], [54, 48]].map(([x, h]) => `<rect x="${x}" y="${56 - h}" width="9" height="${h}" fill="#1aa3e0"/>`).join('')}<circle cx="82" cy="30" r="15" fill="#ff7a21"/><path d="M82,30 L82,15 A15,15 0 0 1 96,34 Z" fill="#e5382b"/></svg>`;
  if (k === 'process') return `<svg viewBox="0 0 100 60">${[10, 38, 66].map((x, i) => `<rect x="${x}" y="20" width="22" height="20" rx="4" fill="${i === 1 ? '#ff7a21' : '#1aa3e0'}"/>`).join('')}<path d="M33,30 h4 M61,30 h4" stroke="#1d1400" stroke-width="3"/></svg>`;
  return `<svg viewBox="0 0 100 60"><rect x="4" y="6" width="44" height="48" rx="3" fill="#fff"/><rect x="52" y="6" width="44" height="48" rx="3" fill="#fff"/><rect x="8" y="10" width="22" height="16" fill="#8ccf6b"/><rect x="56" y="10" width="22" height="16" fill="#ff7a21"/><rect x="8" y="40" width="36" height="10" fill="#1aa3e0"/><rect x="56" y="40" width="36" height="10" fill="#1aa3e0"/></svg>`;
}

function task1Detail(id) {
  const t = t1ById(id); if (!t) return task1View();
  base('task1', [['IELTS', '#/ielts'], ['Task 1', '#/ielts/task1'], [t.name, `#/ielts/task1/${id}`]]);
  const i = TASK1_TYPES.indexOf(t), prev = TASK1_TYPES[(i + TASK1_TYPES.length - 1) % TASK1_TYPES.length], next = TASK1_TYPES[(i + 1) % TASK1_TYPES.length];
  X.view.innerHTML = ihero({ sec: 'task1', eyebrow: `Task 1 · ${t.time}`, title: esc(t.name), lead: esc(t.what), small: true, art: false }) + `
  <div class="split"><div>${chartCard(t)}</div>
    <div class="ipanel stack">
      <h4>What to look for</h4><ul>${t.look.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      <h4>How to group the body paragraphs</h4><p>${esc(t.group)}</p>
      <h4>Overview formula</h4><p class="formula">${esc(t.overview)}</p>
      <h4>Tense</h4><p>${esc(t.tense)}</p>
      <div class="trap"><b>Trap</b> ${esc(t.trap)}</div></div></div>
  ${ititle('Answer first: write your overview', 'Two sentences, no numbers. Then reveal the model and compare.')}
  <div class="ipanel try"><p class="q-blue">Write the overview for this ${esc(t.name.toLowerCase())}.</p><textarea id="mine" rows="4" placeholder="Overall, ..."></textarea>
    <div class="row"><button class="ibtn" id="reveal">Reveal the model</button><span class="wc" id="wc">0 words</span></div>
    <div class="model" id="model" hidden>${[['Introduction', t.model.intro, 'p-intro'], ['Overview', t.model.overview, 'p-over'], ['Body (first sentences)', t.model.body, 'p-body']].map(([a, b, c]) => `<div class="mp ${c}"><span>${a}</span><p>${esc(b)}</p></div>`).join('')}
      <div class="selfcheck"><b>Check yours:</b> <label><input type="checkbox"> Starts with "Overall"</label><label><input type="checkbox"> No numbers</label><label><input type="checkbox"> Main trend or main change</label><label><input type="checkbox"> A comparison</label></div></div></div>
  ${ititle('Language for this visual')}
  <div class="ipanel"><div class="lang">${t.lang.map(x => `<span>${esc(x)}</span>`).join('')}</div></div>
  <div class="prevnext"><a class="ibtn ghost" href="#/ielts/task1/${prev.id}">← ${esc(prev.name)}</a><a class="ibtn" href="#/ielts/play/overview" data-morph>Overview Spotter<span>→</span></a><a class="ibtn ghost" href="#/ielts/task1/${next.id}">${esc(next.name)} →</a></div>`;
  const ta = $('#mine'); ta.oninput = () => { $('#wc').textContent = (ta.value.trim().split(/\s+/).filter(Boolean).length) + ' words'; };
  $('#reveal').onclick = () => { if (!ta.value.trim()) { X.toast('Answer first: write your overview, then reveal.'); ta.focus(); return; } $('#model').hidden = false; addXP(5); X.updateMe(); };
}

function task2View() {
  base('task2', [['IELTS', '#/ielts'], ['Task 2', '#/ielts/task2']]);
  X.view.innerHTML = ihero({ sec: 'task2', eyebrow: 'Writing Task 2 · Academic and General', title: 'One answer, <em>two ideas</em>, four paragraphs', lead: 'You write more than others and score less because you tell what you know. A 9 answers the exact question, with one position and two ideas that prove it.', chips: ['40 minutes', '290 to 320 words', 'Counts double'] }) + `
  ${ititle('The 6-minute plan', 'From your handbook. Run it with the timer until it is automatic.', ibtn('#/ielts/play/planner', 'Open the timed planner'))}
  <div class="steps5">${SIX_MIN_PLAN.map(([a, s, b], i) => `<div class="ipanel stp"><span class="sn">${i + 1}</span><h4>${a} <small>${s >= 60 ? s / 60 + ' min' : s + ' s'}</small></h4><p>${esc(b)}</p></div>`).join('')}</div>
  ${ititle('The shape and the word budget', 'Total 290 to 320 words, then stop. Longer essays do not score higher; they give you more errors and less time to check.')}
  <div class="budget">${TASK2_SHAPE.map(([a, w, b], i) => `<div class="bseg b${i}" style="flex:${[45, 115, 115, 35][i]}"><b>${a}</b><span>${w}</span><p>${esc(b)}</p></div>`).join('')}</div>
  ${ititle('Inside a body paragraph', 'Point, Explain, Example, Link. Anything else is knowledge telling: cut it.')}
  <div class="peel">${PEEL.map(([a, b, c]) => `<div class="ipanel" style="--k:${c}"><span class="pk">${a[0]}</span><h4>${a}</h4><p>${esc(b)}</p></div>`).join('')}</div>
  ${ititle('Six question types', 'Every Task 2 question is one of these. Each page gives you one decided structure, not a menu.')}
  <div class="igrid g3">${TASK2_TYPES.map(t => `<a class="ipanel qcard" href="#/ielts/task2/${t.id}" data-morph style="--k:${t.c}"><span class="qdot"></span><h4>${esc(t.name)}</h4><p class="q-blue sm">${esc(t.spot[0])}</p><p>${esc(t.decide)}</p></a>`).join('')}</div>
  ${ititle('What a 9 looks like in Task 2')}
  ${criteriaCards(WRITING_CRITERIA)}
  ${vipPanel('task2')}
  ${ititle('Practise it')}
  <div class="igrid g2">${gamesFor('Task 2').map(gameCard).join('')}</div>`;
}

function task2Detail(id) {
  const t = t2ById(id); if (!t) return task2View();
  base('task2', [['IELTS', '#/ielts'], ['Task 2', '#/ielts/task2'], [t.name, `#/ielts/task2/${id}`]]);
  const i = TASK2_TYPES.indexOf(t), prev = TASK2_TYPES[(i + 5) % 6], next = TASK2_TYPES[(i + 1) % 6];
  X.view.innerHTML = ihero({ sec: 'task2', eyebrow: 'Task 2 · question type', title: esc(t.name), lead: esc(t.decide), small: true, art: false }) + `
  <div class="split"><div class="ipanel stack"><h4>How to spot it</h4>${t.spot.map(s => `<p class="q-blue">${esc(s)}</p>`).join('')}
      <h4>Your structure</h4><div class="plan2">${[['Introduction', 'Paraphrase + your answer']].concat(t.plan).concat([['Conclusion', 'Your answer again, in new words']]).map(([a, b]) => `<div><b>${a}</b><span>${esc(b)}</span></div>`).join('')}</div>
      <h4>Thesis formula</h4><p class="formula">${esc(t.thesis)}</p><div class="trap"><b>Trap</b> ${esc(t.trap)}</div></div>
    <div class="ipanel try"><h4>Answer first</h4><p class="q-blue">${esc(t.prompt)}</p><p class="hint">Write your one-sentence answer (thesis). Then reveal a model introduction.</p>
      <textarea id="mine" rows="4" placeholder="I believe that..."></textarea><div class="row"><button class="ibtn" id="reveal">Reveal the model</button></div>
      <div class="model" id="model" hidden><div class="mp p-intro"><span>Model introduction</span><p>${esc(t.intro)}</p></div>
      <div class="selfcheck"><b>Check yours:</b> <label><input type="checkbox"> Answers every part</label><label><input type="checkbox"> One clear position</label><label><input type="checkbox"> Names my two reasons</label></div></div></div></div>
  <div class="prevnext"><a class="ibtn ghost" href="#/ielts/task2/${prev.id}">← ${esc(prev.name)}</a><a class="ibtn" href="#/ielts/play/decoder" data-morph>Question Decoder<span>→</span></a><a class="ibtn ghost" href="#/ielts/task2/${next.id}">${esc(next.name)} →</a></div>`;
  $('#reveal').onclick = () => { if (!$('#mine').value.trim()) { X.toast('Answer first: write your thesis, then reveal.'); $('#mine').focus(); return; } $('#model').hidden = false; addXP(5); X.updateMe(); };
}

function speakingView() {
  base('speaking', [['IELTS', '#/ielts'], ['Speaking', '#/ielts/speaking']]);
  X.view.innerHTML = ihero({ sec: 'speaking', eyebrow: 'Speaking · organise your ideas', title: 'Fluent is not enough. <em>Shape it.</em>', lead: 'Four frames, three parts, one decision per question. No more methods than that.', chips: ['A-R', 'STAR', 'Past, Present, Future', 'A-R-E-C'] }) + `
  <div class="igrid g3 diag"><div class="ipanel g"><h4>Your strength</h4><p>${esc(SPEAK_DIAGNOSIS.strength)}</p></div><div class="ipanel r"><h4>Your risk</h4><p>${esc(SPEAK_DIAGNOSIS.risk)}</p></div><div class="ipanel b"><h4>The fix</h4><p>${esc(SPEAK_DIAGNOSIS.fix)}</p></div></div>
  ${ititle('The one-second decision', 'Ask these in order. The first yes gives you the frame.')}
  <div class="decider">${FRAME_DECIDER.map(([q, f, id]) => `<div class="dq"><span>${esc(q)}</span><a href="#fr-${id}">${esc(f)}</a></div>`).join('')}</div>
  ${ititle('The four frames', 'The coloured bar is a clock: each box gets its share of the time. Say the model aloud before you read it.')}
  <div class="frames">${FRAMES.map(f => frameCard(f)).join('')}</div>
  ${ititle('How long to speak')}
  <div class="igrid g3">${SPEAK_TIMES.map(([a, b, c]) => `<div class="ipanel fact"><h4>${a}</h4><span class="big sm">${esc(b)}</span><p>${esc(c)}</p></div>`).join('')}</div>
  ${ititle('What a 9 sounds like')}
  ${criteriaCards(SPEAKING_CRITERIA)}
  ${vipPanel('speaking')}
  ${ititle('Practise it')}
  <div class="igrid g2">${gamesFor('Speaking').map(gameCard).join('')}${gameCard(IELTS_GAMES.find(g => g.id === 'register'))}</div>`;
  $$('.frame .reveal').forEach(b => b.onclick = () => { b.nextElementSibling.hidden = false; b.remove(); });
}
const BOXC = ['#e5382b', '#ff8a00', '#2f6bff', '#18b26b'];
function frameCard(f) {
  const segs = f.boxes.map((b, i) => { const end = i < f.boxes.length - 1 ? f.boxes[i + 1][2] : f.secs; return [b, end - b[2]]; });
  return `<div class="ipanel frame" id="fr-${f.id}"><div class="fh"><span class="fname">${esc(f.name)}</span><span class="fpart">${esc(f.part)}</span></div><p class="fwhen">${esc(f.when)}</p>
    <div class="fbar">${segs.map(([b, d], i) => `<span style="flex:${d};--k:${BOXC[i]}"><b>${esc(b[0])}</b><small>${Math.round(d)}s</small></span>`).join('')}</div>
    <ul class="fboxes">${f.boxes.map((b, i) => `<li style="--k:${BOXC[i]}"><b>${esc(b[0])}</b> ${esc(b[1])}</li>`).join('')}</ul>
    <div class="launch">${f.launch.map(l => `<span>${esc(l)}</span>`).join('')}</div>
    <p class="q-blue">${esc(f.q)}</p><button class="ibtn ghost reveal">I said it aloud. Show the model.</button><p class="fmodel" hidden>${esc(f.model)}</p></div>`;
}

function vocabView() {
  base('vocab', [['IELTS', '#/ielts'], ['C2 vocabulary', '#/ielts/vocab']]);
  const st = store();
  const all = VOCAB.reduce((n, g) => n + g.items.length, 0);
  X.view.innerHTML = ihero({ sec: 'vocab', eyebrow: 'C2 vocabulary · speaking and writing', title: 'The <em>exact</em> word, in the right room', lead: esc(VOCAB_TRUTH), chips: [`${all} phrases`, 'W = writing', 'S = speaking', 'B = both'] }) + `
  <div class="vtools ipanel"><input id="vq" type="text" placeholder="Search a word or a meaning..."><div class="vfilter">${[['', 'All'], ['W', 'Writing'], ['S', 'Speaking'], ['B', 'Both']].map(([k, l]) => `<button data-f="${k}" class="${k ? '' : 'on'}">${l}</button>`).join('')}</div><label class="testme"><input type="checkbox" id="vtest"> Test me (hide meanings)</label></div>
  <div class="vgroups-nav">${VOCAB.map(g => `<a href="#vg-${g.id}" style="--k:${g.c}">${esc(g.name)}</a>`).join('')}</div>
  <div id="vlist"></div>
  ${ititle('Drop these: phrases examiners see too often', 'Not errors, but they signal memorised language. Use the alternative.')}
  <div class="ipanel overused">${OVERUSED.map(([a, b]) => `<div><s>${esc(a)}</s><span>→</span><b>${esc(b)}</b></div>`).join('')}</div>
  ${vipPanel('vocab')}
  ${ititle('Practise it')}
  <div class="igrid g2">${gamesFor('C2 vocabulary').map(gameCard).join('')}</div>`;
  let f = '', q = '';
  const draw = () => {
    const test = $('#vtest').checked;
    $('#vlist').innerHTML = VOCAB.map(g => {
      const items = g.items.map((it, k) => ({ it, k })).filter(({ it }) => (!f || it[1] === f || (f !== 'B' && it[1] === 'B')) && (!q || (it[0] + ' ' + it[2] + ' ' + it[3]).toLowerCase().includes(q)));
      if (!items.length) return '';
      return `<section class="vgroup" id="vg-${g.id}" style="--k:${g.c}"><div class="vg-head"><h3>${esc(g.name)}</h3><span>${esc(g.for)} · ${items.length}</span></div><div class="vrows">${items.map(({ it, k }) => {
        const id = g.id + k, n = st.vocab[id] || 0;
        return `<div class="vrow ${test ? 'hide' : ''}" data-id="${id}"><div class="vw"><b>${esc(it[0])}</b><span class="tag t${it[1]}">${it[1] === 'W' ? 'Writing' : it[1] === 'S' ? 'Speaking' : 'Both'}</span></div><div class="vm"><span class="mean">${esc(it[2])}</span><span class="ex">${esc(it[3])}</span>${it[4] ? `<span class="note">${esc(it[4])}</span>` : ''}</div><div class="vact">${test ? `<button class="show">Show</button>` : ''}<button class="ok" title="I knew it">✓</button><button class="gap" title="Gap">?</button><span class="ticks">${'●'.repeat(Math.min(3, n))}${'○'.repeat(Math.max(0, 3 - n))}</span></div></div>`;
      }).join('')}</div></section>`;
    }).join('') || '<div class="ipanel">No phrase matches that search.</div>';
    $$('#vlist .vrow').forEach(r => {
      const id = r.dataset.id;
      const sb = $('.show', r); if (sb) sb.onclick = () => { r.classList.remove('hide'); sb.remove(); };
      $('.ok', r).onclick = () => { st.vocab[id] = Math.min(3, (st.vocab[id] || 0) + 1); save(); addXP(1); r.classList.remove('hide'); r.classList.add('flash-g'); $('.ticks', r).textContent = '●'.repeat(st.vocab[id]) + '○'.repeat(3 - st.vocab[id]); };
      $('.gap', r).onclick = () => { st.vocab[id] = 0; save(); r.classList.remove('hide'); r.classList.add('flash-o'); $('.ticks', r).textContent = '○○○'; };
    });
  };
  $('#vq').oninput = e => { q = e.target.value.trim().toLowerCase(); draw(); };
  $$('.vfilter button').forEach(b => b.onclick = () => { f = b.dataset.f; $$('.vfilter button').forEach(x => x.classList.toggle('on', x === b)); draw(); });
  $('#vtest').onchange = draw;
  draw();
}

function playView() {
  base('play', [['IELTS', '#/ielts'], ['Games', '#/ielts/play']]);
  const areas = [...new Set(IELTS_GAMES.map(g => g.area))];
  X.view.innerHTML = ihero({ sec: 'play', eyebrow: 'IELTS practice games', title: 'Play with a <em>purpose</em>', lead: 'Every game trains one band descriptor and one habit from your profile. If a game cannot say what it trains, it is not here.', chips: [`${IELTS_GAMES.length} games`, 'Writing', 'Speaking', 'Vocabulary', 'Accuracy'] }) +
    areas.map(a => `${ititle(esc(a))}<div class="igrid g2">${IELTS_GAMES.filter(g => g.area === a).map(gameCard).join('')}</div>`).join('');
}

function gameView(id) {
  const g = IELTS_GAMES.find(x => x.id === id); if (!g) return playView();
  base('play', [['IELTS', '#/ielts'], ['Games', '#/ielts/play'], [g.name, `#/ielts/play/${id}`]]);
  X.view.innerHTML = ihero({ sec: 'play', eyebrow: `${g.area} · trains ${g.trains}`, title: `${g.icon} ${esc(g.name)}`, lead: esc(g.why), small: true, art: false }) + `<div class="ipanel igame" id="ig"></div>`;
  return GAMES_IMPL[id]($('#ig'));
}

/* ======================= games ======================= */
function mcq(el, id, rounds, render) {
  let i = 0, score = 0, list = rounds;
  const show = () => {
    if (i >= list.length) { const pct = Math.round(score / list.length * 100); finish(id, pct, `${pct}%`); el.innerHTML = `<div class="iresult"><span class="big">${score}/${list.length}</span><p>${pct >= 80 ? 'Strong. Now use it in a real paragraph today.' : 'Read the green explanations, then play again tomorrow: spacing beats repeating.'}</p><button class="ibtn" id="again">Play again</button></div>`; $('#again', el).onclick = () => { i = 0; score = 0; list = shuffle(rounds); show(); }; return; }
    el.innerHTML = `<div class="iprog"><i style="width:${i / list.length * 100}%"></i></div>` + render(list[i], i, list.length);
    $$('.iopt', el).forEach(b => b.onclick = () => {
      if (el.dataset.lock) return; el.dataset.lock = 1;
      const ok = b.dataset.ok === '1'; if (ok) score++;
      b.classList.add(ok ? 'right' : 'wrong'); if (!ok) { const r = $$('.iopt', el).find(x => x.dataset.ok === '1'); if (r) r.classList.add('right'); }
      const w = $('.iwhy', el); if (w) w.classList.add('show');
      $('.inext', el).hidden = false;
    });
    $('.inext', el).onclick = () => { delete el.dataset.lock; i++; show(); };
  };
  list = shuffle(rounds); show();
}
const nextBtn = '<button class="ibtn inext" hidden>Next</button>';

const GAMES_IMPL = {
  decoder(el) {
    let i = 0, score = 0, list = shuffle(T2_PROMPTS), stage = 0;
    const types = Object.keys(T2_TYPE_NAMES);
    const show = () => {
      if (i >= list.length) { const pct = Math.round(score / (list.length * 2) * 100); finish('decoder', pct, `${pct}%`); el.innerHTML = `<div class="iresult"><span class="big">${pct}%</span><p>Type and thesis, ${list.length} questions.</p><button class="ibtn" id="again">Play again</button></div>`; $('#again', el).onclick = () => { i = 0; score = 0; list = shuffle(T2_PROMPTS); stage = 0; show(); }; return; }
      const p = list[i];
      if (stage === 0) {
        el.innerHTML = `<div class="iprog"><i style="width:${i / list.length * 100}%"></i></div><p class="step-l">Step 1 of 2 · What type is it?</p><p class="q-blue big-q">${esc(p.q)}</p><div class="iopts two">${types.map(t => `<button class="iopt" data-t="${t}">${esc(T2_TYPE_NAMES[t])}</button>`).join('')}</div><div class="iwhy"></div>${nextBtn}`;
        $$('.iopt', el).forEach(b => b.onclick = () => { if (el.dataset.lock) return; el.dataset.lock = 1; const ok = b.dataset.t === p.type; if (ok) score++; b.classList.add(ok ? 'right' : 'wrong'); if (!ok) $$('.iopt', el).find(x => x.dataset.t === p.type).classList.add('right'); const tt = t2ById(p.type); $('.iwhy', el).innerHTML = `<b>${esc(tt.name)}.</b> ${esc(tt.decide)}`; $('.iwhy', el).classList.add('show'); $('.inext', el).hidden = false; });
        $('.inext', el).onclick = () => { delete el.dataset.lock; stage = 1; show(); };
      } else {
        const opts = shuffle([[p.good, 1], ...p.bad.map(b => [b, 0])]);
        el.innerHTML = `<div class="iprog"><i style="width:${(i + .5) / list.length * 100}%"></i></div><p class="step-l">Step 2 of 2 · Which thesis answers every part?</p><p class="q-blue big-q">${esc(p.q)}</p><div class="iopts">${opts.map(([t, ok]) => `<button class="iopt" data-ok="${ok}">${esc(t)}</button>`).join('')}</div><div class="iwhy">A band 9 thesis gives a clear position (or answers both questions) and names the reasons. The others describe the topic, sit on the fence or drift off the question.</div>${nextBtn}`;
        $$('.iopt', el).forEach(b => b.onclick = () => { if (el.dataset.lock) return; el.dataset.lock = 1; const ok = b.dataset.ok === '1'; if (ok) score++; b.classList.add(ok ? 'right' : 'wrong'); if (!ok) $$('.iopt', el).find(x => x.dataset.ok === '1').classList.add('right'); $('.iwhy', el).classList.add('show'); $('.inext', el).hidden = false; });
        $('.inext', el).onclick = () => { delete el.dataset.lock; stage = 0; i++; show(); };
      }
    };
    show();
  },

  picktwo(el) {
    let i = 0, score = 0, list = shuffle(PICK_TWO);
    const show = () => {
      if (i >= list.length) { const pct = Math.round(score / (list.length * 2) * 100); finish('picktwo', pct, `${pct}%`); el.innerHTML = `<div class="iresult"><span class="big">${pct}%</span><p>Every idea you rejected was true. That is the point: true is not enough, it has to prove your answer.</p><button class="ibtn" id="again">Play again</button></div>`; $('#again', el).onclick = () => { i = 0; score = 0; list = shuffle(PICK_TWO); show(); }; return; }
      const p = list[i]; const ideas = shuffle(p.ideas); let picked = [];
      el.innerHTML = `<div class="iprog"><i style="width:${i / list.length * 100}%"></i></div><p class="q-blue big-q">${esc(p.q)}</p><p class="pos">Your answer: <b>${esc(p.pos)}</b></p><p class="step-l">Pick the two ideas that best prove it.</p><div class="iopts">${ideas.map((d, k) => `<button class="iopt" data-k="${k}">${esc(d[0])}<small class="fb"></small></button>`).join('')}</div><button class="ibtn" id="chk" disabled>Check my two</button>${nextBtn}`;
      $$('.iopt', el).forEach(b => b.onclick = () => { if (el.dataset.lock) return; const k = +b.dataset.k; if (picked.includes(k)) { picked = picked.filter(x => x !== k); b.classList.remove('sel'); } else if (picked.length < 2) { picked.push(k); b.classList.add('sel'); } $('#chk', el).disabled = picked.length !== 2; });
      $('#chk', el).onclick = () => { el.dataset.lock = 1; $$('.iopt', el).forEach((b, k) => { const d = ideas[k]; b.classList.add(d[1] ? 'right' : (picked.includes(k) ? 'wrong' : 'dim')); $('.fb', b).textContent = d[2]; }); score += picked.filter(k => ideas[k][1]).length; $('#chk', el).hidden = true; $('.inext', el).hidden = false; };
      $('.inext', el).onclick = () => { delete el.dataset.lock; i++; show(); };
    };
    show();
  },

  paragraph(el) {
    let i = 0, score = 0, list = shuffle(PARAGRAPHS);
    const show = () => {
      if (i >= list.length) { const pct = Math.round(score / list.length * 100); finish('paragraph', pct, `${pct}%`); el.innerHTML = `<div class="iresult"><span class="big">${score}/${list.length}</span><p>Perfect paragraphs: the off-topic sentence cut and the four in PEEL order.</p><button class="ibtn" id="again">Play again</button></div>`; $('#again', el).onclick = () => { i = 0; score = 0; list = shuffle(PARAGRAPHS); show(); }; return; }
      const p = list[i];
      let items = shuffle([...p.s.map((s, k) => ({ s, k })), { s: p.cut, k: -1 }]);
      el.innerHTML = `<div class="iprog"><i style="width:${i / list.length * 100}%"></i></div><p class="q-blue">${esc(p.q)}</p><p class="step-l">1. Cut (✂) the sentence that only shows knowledge. 2. Put the other four in order: Point, Explain, Example, Link.</p><div class="plist" id="pl">${items.map(x => `<div class="pitem" data-k="${x.k}"><button class="cut" title="Cut">✂</button><span class="ps">${esc(x.s)}</span><span class="pmv"><button data-d="-1">↑</button><button data-d="1">↓</button></span></div>`).join('')}</div><button class="ibtn" id="chk">Check</button><div class="iwhy" id="why"></div>${nextBtn}`;
      const pl = $('#pl', el);
      $$('.pitem', el).forEach(it => {
        $('.cut', it).onclick = () => { $$('.pitem', el).forEach(x => x !== it && x.classList.remove('cutout')); it.classList.toggle('cutout'); };
        $$('[data-d]', it).forEach(b => b.onclick = () => { const d = +b.dataset.d; if (d < 0 && it.previousElementSibling) pl.insertBefore(it, it.previousElementSibling); if (d > 0 && it.nextElementSibling) pl.insertBefore(it.nextElementSibling, it); });
      });
      $('#chk', el).onclick = () => {
        const all = $$('.pitem', el), cut = all.find(x => x.classList.contains('cutout')), kept = all.filter(x => !x.classList.contains('cutout'));
        const cutOk = cut && cut.dataset.k === '-1', orderOk = kept.length === 4 && kept.every((x, k) => +x.dataset.k === k);
        kept.forEach((x, k) => { x.classList.toggle('ok', +x.dataset.k === k); x.classList.toggle('no', +x.dataset.k !== k); });
        if (cut) cut.classList.add(cutOk ? 'ok' : 'no');
        if (cutOk && orderOk) score++;
        const roles = ['Point', 'Explain', 'Example', 'Link'];
        $('#why', el).innerHTML = `${cutOk ? '✓ Right cut.' : '✗ The sentence to cut was: <i>' + esc(p.cut) + '</i>'} It is true, but it does not prove the point. ${orderOk ? '✓ Order correct.' : '✗ Correct order: ' + roles.map((r, k) => `<b>${r}</b>: ${esc(p.s[k].slice(0, 48))}...`).join(' ')}`;
        $('#why', el).classList.add('show'); $('#chk', el).hidden = true; $('.inext', el).hidden = false;
      };
      $('.inext', el).onclick = () => { i++; show(); };
    };
    show();
  },

  overview(el) {
    const rounds = TASK1_TYPES.map(t => ({ t, q: OVERVIEW_Q[t.id] }));
    mcq(el, 'overview', rounds, ({ t, q }) => `<p class="step-l">${esc(t.name)} · choose the best overview</p>${chartCard(t)}<div class="iopts">${q.o.map((o, k) => `<button class="iopt" data-ok="${k === q.best ? 1 : 0}">${esc(o)}</button>`).join('')}</div><div class="iwhy">${esc(OVERVIEW_WHY)}</div>${nextBtn}`);
  },

  groupit(el) {
    let i = 0, score = 0, total = 0, list = shuffle(GROUP_IT);
    const show = () => {
      if (i >= list.length) { const pct = Math.round(score / total * 100); finish('groupit', pct, `${pct}%`); el.innerHTML = `<div class="iresult"><span class="big">${pct}%</span><p>Group by logic, not by position on the page.</p><button class="ibtn" id="again">Play again</button></div>`; $('#again', el).onclick = () => { i = 0; score = 0; total = 0; list = shuffle(GROUP_IT); show(); }; return; }
      const g = list[i], t = t1ById(g.type), items = shuffle(g.items); let sel = null;
      el.innerHTML = `<div class="iprog"><i style="width:${i / list.length * 100}%"></i></div><p class="step-l">${esc(t.name)} · tap a feature, then tap its paragraph</p>${chartCard(t, false)}<div class="pool" id="pool">${items.map(([s, b], k) => `<button class="gchip" data-b="${b}" data-k="${k}">${esc(s)}</button>`).join('')}</div>
        <div class="gbins"><div class="gbin" data-bin="1"><h5>Body 1</h5><p>${esc(g.b1)}</p><div class="gin"></div></div><div class="gbin" data-bin="2"><h5>Body 2</h5><p>${esc(g.b2)}</p><div class="gin"></div></div></div><button class="ibtn" id="chk">Check</button><div class="iwhy" id="why">Each body paragraph should hold data that behaves the same way. That is what makes Body 1 and Body 2 easy to follow.</div>${nextBtn}`;
      $$('.gchip', el).forEach(c => c.onclick = () => { $$('.gchip', el).forEach(x => x.classList.remove('sel')); sel = c; c.classList.add('sel'); });
      $$('.gbin', el).forEach(b => b.onclick = e => { if (!sel || e.target.classList.contains('gchip')) return; $('.gin', b).appendChild(sel); sel.classList.remove('sel'); sel = null; });
      $('#chk', el).onclick = () => { let ok = 0; $$('.gbin', el).forEach(b => $$('.gchip', b).forEach(c => { const g2 = c.dataset.b === b.dataset.bin; c.classList.add(g2 ? 'ok' : 'no'); if (g2) ok++; })); $$('#pool .gchip', el).forEach(c => c.classList.add('no')); score += ok; total += g.items.length; $('#why', el).classList.add('show'); $('#chk', el).hidden = true; $('.inext', el).hidden = false; };
      $('.inext', el).onclick = () => { i++; show(); };
    };
    show();
  },

  precision(el) {
    mcq(el, 'precision', PRECISION, (p) => { const t = t1ById(p.type); return `<p class="step-l">${esc(t.name)} · choose the accurate phrase</p>${chartCard(t, false)}<p class="gapline">${esc(p.s).replace('____', '<span class="gap">____</span>')}</p><div class="iopts three">${p.o.map((o, k) => `<button class="iopt" data-ok="${k === p.a ? 1 : 0}">${esc(o)}</button>`).join('')}</div><div class="iwhy">${esc(p.why)}</div>${nextBtn}`; });
  },

  upgrade(el) {
    mcq(el, 'upgrade', UPGRADE, (u) => { const opts = shuffle(u.o.map((o, k) => [o, k === 0 ? 1 : 0])); return `<p class="step-l">Band 6 sentence</p><p class="q-blue big-q">${esc(u.base)}</p><p class="step-l">Which version is precise, natural and correct?</p><div class="iopts">${opts.map(([o, ok]) => `<button class="iopt" data-ok="${ok}">${esc(o)}</button>`).join('')}</div><div class="iwhy">${esc(u.why)}</div>${nextBtn}`; });
  },

  register(el) {
    const items = shuffle(REGISTER); let k = 0, score = 0;
    const names = { S: 'Speaking only', W: 'Writing only', B: 'Both' };
    const show = () => {
      if (k >= items.length) { const pct = Math.round(score / items.length * 100); finish('register', pct, `${pct}%`); el.innerHTML = `<div class="iresult"><span class="big">${score}/${items.length}</span><p>Rule of thumb: idioms and thinking-aloud phrases belong in speaking; nominal, impersonal phrases belong in essays.</p><button class="ibtn" id="again">Play again</button></div>`; $('#again', el).onclick = () => GAMES_IMPL.register(el); return; }
      const [p, a] = items[k];
      el.innerHTML = `<div class="iprog"><i style="width:${k / items.length * 100}%"></i></div><p class="step-l">Where does this phrase belong?</p><p class="big-word">${esc(p)}</p><div class="iopts three">${['S', 'W', 'B'].map(x => `<button class="iopt" data-ok="${x === a ? 1 : 0}">${names[x]}</button>`).join('')}</div><div class="iwhy">${a === 'S' ? 'Conversational or idiomatic: natural in speaking, too informal for an essay.' : a === 'W' ? 'Formal and written: fine in an essay, but it would sound stiff in conversation.' : 'Neutral: works naturally in both.'}</div>${nextBtn}`;
      $$('.iopt', el).forEach(b => b.onclick = () => { if (el.dataset.lock) return; el.dataset.lock = 1; const ok = b.dataset.ok === '1'; if (ok) score++; b.classList.add(ok ? 'right' : 'wrong'); if (!ok) $$('.iopt', el).find(x => x.dataset.ok === '1').classList.add('right'); $('.iwhy', el).classList.add('show'); $('.inext', el).hidden = false; });
      $('.inext', el).onclick = () => { delete el.dataset.lock; k++; show(); };
    };
    show();
  },

  errors(el) {
    let i = 0, score = 0, list = shuffle(ERRORS);
    const show = () => {
      if (i >= list.length) { const pct = Math.round(score / list.length * 100); finish('errors', pct, `${pct}%`); el.innerHTML = `<div class="iresult"><span class="big">${score}/${list.length}</span><p>Log the ones you missed in red in your copybook. They are your personal checklist for the last 4 minutes.</p><button class="ibtn" id="again">Play again</button></div>`; $('#again', el).onclick = () => { i = 0; score = 0; list = shuffle(ERRORS); show(); }; return; }
      const e = list[i];
      el.innerHTML = `<div class="iprog"><i style="width:${i / list.length * 100}%"></i></div><p class="step-l">Tap the part with the error</p><p class="esent">${e.c.map((c, k) => `<button class="echunk" data-k="${k}">${esc(c)}</button>`).join(' ')}</p><div class="iwhy">${esc(e.fix)}</div>${nextBtn}`;
      $$('.echunk', el).forEach(b => b.onclick = () => { if (el.dataset.lock) return; el.dataset.lock = 1; const ok = +b.dataset.k === e.a; if (ok) score++; b.classList.add(ok ? 'right' : 'wrong'); $$('.echunk', el)[e.a].classList.add('right'); $('.iwhy', el).classList.add('show'); $('.inext', el).hidden = false; });
      $('.inext', el).onclick = () => { delete el.dataset.lock; i++; show(); };
    };
    show();
  },

  planner(el) {
    const st = store(); let timer = null, step = -1, left = 0, total = 0, prompt = T2_PROMPTS[Math.floor(Math.random() * T2_PROMPTS.length)].q;
    const data = { decode: '', answer: '', dump: '', i1: '', i2: '', w1: '', w2: '', e1: '', e2: '' };
    const fmtT = s => `${Math.floor(s / 60)}:${String(Math.max(0, s) % 60).padStart(2, '0')}`;
    const stepBody = k => {
      if (k === 0) return `<input id="f-decode" type="text" placeholder="The question in 8 words or fewer" value="${esc(data.decode)}"><small id="w8"></small>`;
      if (k === 1) return `<input id="f-answer" type="text" placeholder="My answer in one sentence" value="${esc(data.answer)}">`;
      if (k === 2) return `<textarea id="f-dump" rows="4" placeholder="Idea dump: everything, fast">${esc(data.dump)}</textarea><div class="two"><input id="f-i1" type="text" placeholder="Idea 1 (circled)" value="${esc(data.i1)}"><input id="f-i2" type="text" placeholder="Idea 2 (circled)" value="${esc(data.i2)}"></div>`;
      if (k === 3) return `<div class="two"><div><b>Body 1:</b> ${esc(data.i1 || '...')}<input id="f-w1" type="text" placeholder="why" value="${esc(data.w1)}"><input id="f-e1" type="text" placeholder="example" value="${esc(data.e1)}"></div><div><b>Body 2:</b> ${esc(data.i2 || '...')}<input id="f-w2" type="text" placeholder="why" value="${esc(data.w2)}"><input id="f-e2" type="text" placeholder="example" value="${esc(data.e2)}"></div></div>`;
      return `<div class="skel"><p><b class="c-b">Q</b> ${esc(data.decode)}</p><p><b>Intro</b> paraphrase + ${esc(data.answer)}</p><p><b>Body 1</b> ${esc(data.i1)} · why: ${esc(data.w1)} · e.g. ${esc(data.e1)}</p><p><b>Body 2</b> ${esc(data.i2)} · why: ${esc(data.w2)} · e.g. ${esc(data.e2)}</p><p><b>Conclusion</b> ${esc(data.answer)}</p></div><div class="selfcheck"><label><input type="checkbox"> Every paragraph proves my answer</label><label><input type="checkbox"> My answer covers every part of the question</label><label><input type="checkbox"> Two ideas only</label></div>`;
    };
    const grab = () => { Object.keys(data).forEach(k => { const f = $('#f-' + k, el); if (f) data[k] = f.value; }); };
    const render = () => {
      if (step < 0) {
        el.innerHTML = `<p class="step-l">Question</p><p class="q-blue big-q" id="pq">${esc(prompt)}</p><div class="row"><button class="ibtn ghost" id="newq">Another question</button><button class="ibtn ghost" id="own">Use my own question</button></div><button class="ibtn lg" id="go">Start the 6 minutes</button>
          ${st.plans.length ? `<h4 class="saved-h">Your saved plans (${st.plans.length})</h4><div class="saved">${st.plans.slice().reverse().slice(0, 8).map((p, k) => `<div class="ipanel sp"><small>${esc(p.date)} · ${esc(p.time)}</small><p class="q-blue sm">${esc(p.q)}</p><p><b>${esc(p.answer)}</b></p><p>1. ${esc(p.i1)} · 2. ${esc(p.i2)}</p><button class="ibtn ghost sm copy" data-k="${st.plans.length - 1 - k}">Copy for the AI plan checker</button></div>`).join('')}</div>` : ''}`;
        $('#newq', el).onclick = () => { prompt = T2_PROMPTS[Math.floor(Math.random() * T2_PROMPTS.length)].q; render(); };
        $('#own', el).onclick = () => { const p = $('#pq', el); p.contentEditable = 'true'; p.focus(); p.oninput = () => { prompt = p.textContent; }; };
        $('#go', el).onclick = () => { step = 0; total = 0; startStep(); };
        $$('.copy', el).forEach(b => b.onclick = async () => { const p = st.plans[+b.dataset.k]; const txt = `Here is the question and my 6-minute plan. Does my one-sentence answer cover every part of the question? Are my two ideas the strongest available? Do not write the essay.\n\nQuestion: ${p.q}\nAnswer: ${p.answer}\nBody 1: ${p.i1} (why: ${p.w1}; example: ${p.e1})\nBody 2: ${p.i2} (why: ${p.w2}; example: ${p.e2})`; try { await navigator.clipboard.writeText(txt); X.toast('Copied with the plan-checker prompt.'); } catch (e) { X.toast('Copy is blocked here. Select the text instead.'); } });
        return;
      }
      const [name, , help] = SIX_MIN_PLAN[step];
      el.innerHTML = `<div class="pbar">${SIX_MIN_PLAN.map(([n, s], k) => `<span class="${k < step ? 'done' : k === step ? 'now' : ''}" style="flex:${s}">${n}</span>`).join('')}</div>
        <div class="ptime"><span class="pt" id="pt">${fmtT(left)}</span><small>total ${fmtT(total)}</small></div><p class="q-blue sm">${esc(prompt)}</p><h4>${step + 1}. ${esc(name)}</h4><p class="hint">${esc(help)}</p><div class="pbody">${stepBody(step)}</div>
        <div class="row">${step > 0 ? '<button class="ibtn ghost" id="back">Back</button>' : ''}<button class="ibtn" id="nx">${step < 4 ? 'Next step' : 'Save this plan'}</button></div>`;
      const d = $('#f-decode', el); if (d) { const upd = () => { const n = d.value.trim().split(/\s+/).filter(Boolean).length; $('#w8', el).textContent = `${n} words${n > 8 ? ': too long' : ''}`; }; d.oninput = upd; upd(); }
      $('#nx', el).onclick = () => { grab(); if (step < 4) { step++; startStep(); } else { clearInterval(timer); const now = new Date(); st.plans.push({ ...data, q: prompt, date: now.toISOString().slice(0, 10), time: fmtT(total) }); if (st.plans.length > 40) st.plans.shift(); save(); finish('planner', total <= 390 ? 100 : 70, `plan in ${fmtT(total)}`); X.toast(`Plan saved in ${fmtT(total)}.`); step = -1; render(); } };
      const bk = $('#back', el); if (bk) bk.onclick = () => { grab(); step--; startStep(); };
    };
    const startStep = () => { clearInterval(timer); left = SIX_MIN_PLAN[step][1]; render(); timer = setInterval(() => { left--; total++; const p = $('#pt', el); if (p) { p.textContent = fmtT(left); p.classList.toggle('over', left < 0); } }, 1000); };
    render();
    return () => clearInterval(timer);
  },

  frames(el) {
    let timer = null, rec = null, chunks = [], stream = null, wantRec = false;
    const stopAll = () => { clearInterval(timer); try { if (rec && rec.state !== 'inactive') rec.stop(); } catch (e) {} try { stream && stream.getTracks().forEach(t => t.stop()); } catch (e) {} };
    const pick = () => {
      stopAll();
      const part = el.dataset.part || '';
      const pool = SPEAK_QUESTIONS.filter(q => !part || q.part === +part);
      const q = pool[Math.floor(Math.random() * pool.length)];
      el.innerHTML = `<div class="row parts">${['', '1', '2', '3'].map(p => `<button class="pbtn ${p === part ? 'on' : ''}" data-p="${p}">${p ? 'Part ' + p : 'Any part'}</button>`).join('')}<label class="rec"><input type="checkbox" id="wr" ${wantRec ? 'checked' : ''}> Record me</label></div>
        <p class="step-l">Part ${q.part} · step 1: which frame?</p><p class="q-blue big-q">${esc(q.q)}</p>${q.cues ? `<ul class="cues">${q.cues.map(c => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}
        <div class="iopts four">${FRAMES.map(f => `<button class="iopt" data-f="${f.id}">${esc(f.name)}</button>`).join('')}</div><div class="iwhy"></div><button class="ibtn inext" hidden>Speak now</button>`;
      $$('.pbtn', el).forEach(b => b.onclick = () => { el.dataset.part = b.dataset.p; pick(); });
      $('#wr', el).onchange = e => { wantRec = e.target.checked; };
      $$('.iopt', el).forEach(b => b.onclick = () => { if (el.dataset.lock) return; el.dataset.lock = 1; const ok = b.dataset.f === q.f; b.classList.add(ok ? 'right' : 'wrong'); if (!ok) $$('.iopt', el).find(x => x.dataset.f === q.f).classList.add('right'); const f = frameById(q.f); $('.iwhy', el).innerHTML = `<b>${esc(f.name)}</b>: ${esc(f.when)}`; $('.iwhy', el).classList.add('show'); $('.inext', el).hidden = false; el._ok = ok; });
      $('.inext', el).onclick = () => { delete el.dataset.lock; q.part === 2 ? prep(q) : speak(q); };
    };
    const prep = q => {
      const f = frameById(q.f); let left = 60;
      el.innerHTML = `<p class="step-l">Part 2 · 1 minute to prepare · ${esc(f.name)}</p><p class="q-blue">${esc(q.q)}</p><div class="ptime"><span class="pt" id="pt">1:00</span></div><div class="notes">${f.boxes.map((b, i) => `<div style="--k:${BOXC[i]}"><b>${esc(b[0])}</b><textarea rows="3" placeholder="2 or 3 key words"></textarea></div>`).join('')}</div><button class="ibtn lg" id="go">Start speaking</button>`;
      timer = setInterval(() => { left--; $('#pt', el).textContent = `0:${String(Math.max(0, left)).padStart(2, '0')}`; if (left <= 0) { clearInterval(timer); speak(q, [...$$('.notes textarea', el)].map(t => t.value)); } }, 1000);
      $('#go', el).onclick = () => { clearInterval(timer); speak(q, [...$$('.notes textarea', el)].map(t => t.value)); };
    };
    const speak = async (q, notes = []) => {
      clearInterval(timer);
      const f = frameById(q.f), dur = q.part === 1 ? 20 : q.part === 2 ? 120 : 45, k = dur / f.secs;
      const marks = f.boxes.map(b => b[2] * k);
      if (wantRec) { try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); rec = new MediaRecorder(stream); chunks = []; rec.ondataavailable = e => chunks.push(e.data); rec.start(); } catch (e) { rec = null; X.toast('Recording is not available here. Use your phone recorder instead.'); } }
      let t = 0;
      el.innerHTML = `<p class="step-l">Part ${q.part} · ${esc(f.name)} · ${dur} seconds</p><p class="q-blue">${esc(q.q)}</p><div class="sclock"><div class="sbar">${f.boxes.map((b, i) => `<span style="flex:${((i < f.boxes.length - 1 ? marks[i + 1] : dur) - marks[i])};--k:${BOXC[i]}" data-i="${i}">${esc(b[0])}</span>`).join('')}<i class="needle" id="nd"></i></div><div class="snow" id="snow"></div><div class="ptime"><span class="pt" id="pt">0:00</span><small>/ ${Math.floor(dur / 60)}:${String(dur % 60).padStart(2, '0')}</small></div></div><button class="ibtn" id="stop">I've finished</button>`;
      const tick = () => {
        const cur = marks.reduce((a, m, i) => t >= m ? i : a, 0); const b = f.boxes[cur];
        $('#snow', el).innerHTML = `<span style="--k:${BOXC[cur]}">${esc(b[0])}</span><p>${esc(b[1])}</p>${notes[cur] ? `<em>Your notes: ${esc(notes[cur])}</em>` : ''}`;
        $$('.sbar span', el).forEach((s, i) => s.classList.toggle('on', i === cur));
        $('#nd', el).style.left = Math.min(100, t / dur * 100) + '%';
        $('#pt', el).textContent = `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
        if (t >= dur) { $('#pt', el).classList.add('over'); }
      };
      tick(); timer = setInterval(() => { t++; tick(); if (t >= dur + 15) end(q, t, dur); }, 1000);
      $('#stop', el).onclick = () => end(q, t, dur);
    };
    const end = (q, t, dur) => {
      clearInterval(timer);
      const done = () => {
        const url = chunks.length ? URL.createObjectURL(new Blob(chunks, { type: chunks[0].type || 'audio/webm' })) : '';
        try { stream && stream.getTracks().forEach(tr => tr.stop()); } catch (e) {}
        const ratio = t / dur;
        el.innerHTML = `<p class="step-l">Self-check · you spoke for ${t} seconds (target ${dur})</p><p class="timing ${ratio < .7 ? 'o' : ratio > 1.2 ? 'r' : 'g'}">${ratio < .7 ? 'Too short: add detail in the longest box.' : ratio > 1.2 ? 'Too long: find your stop signal earlier.' : 'On time. Good control.'}</p>${url ? `<audio controls src="${url}"></audio>` : ''}
          <div class="selfcheck big">${['My first sentence answered the question', 'I moved through every box of the frame', 'I stopped close to the time', 'I never stopped to search for a word', 'I used one natural phrase from the C2 bank'].map(c => `<label><input type="checkbox"> ${esc(c)}</label>`).join('')}</div><div class="row"><button class="ibtn" id="save">Save and next question</button></div>`;
        $('#save', el).onclick = () => { const n = $$('.selfcheck input', el).filter(x => x.checked).length; const pct = Math.round((n / 5) * 80 + (el._ok ? 20 : 0)); finish('frames', pct, `${pct}%`); pick(); };
      };
      if (rec && rec.state !== 'inactive') { rec.onstop = done; try { rec.stop(); } catch (e) { done(); } } else done();
    };
    pick();
    return stopAll;
  }
};

/* ======================= routes and search ======================= */
export function ieltsRoutes(ctx) {
  X = ctx;
  return [
    [/^#\/ielts$/, hubView], [/^#\/ielts\/task1$/, task1View], [/^#\/ielts\/task1\/([\w-]+)$/, task1Detail],
    [/^#\/ielts\/task2$/, task2View], [/^#\/ielts\/task2\/([\w-]+)$/, task2Detail], [/^#\/ielts\/speaking$/, speakingView],
    [/^#\/ielts\/vocab$/, vocabView], [/^#\/ielts\/play$/, playView], [/^#\/ielts\/play\/([\w-]+)$/, gameView]
  ];
}
export function ieltsNavKey(key) {
  const m = key.match(/^#\/ielts\/(task1|task2|play)\//); if (m) return '#/ielts/' + m[1];
  return key;
}
export function ieltsSearch() {
  return [
    ...IELTS_SECTIONS.map(s => ({ t: s.name, s: 'IELTS', h: s.href, c: s.c, k: 'IELTS' })),
    ...TASK1_TYPES.map(t => ({ t: `Task 1: ${t.name}`, s: t.what + ' ' + t.lang.join(' '), h: `#/ielts/task1/${t.id}`, c: '#ffc21a', k: 'IELTS' })),
    ...TASK2_TYPES.map(t => ({ t: `Task 2: ${t.name}`, s: t.spot.join(' ') + ' ' + t.decide, h: `#/ielts/task2/${t.id}`, c: '#8b5cf6', k: 'IELTS' })),
    ...FRAMES.map(f => ({ t: `Speaking frame: ${f.name}`, s: f.full + ' ' + f.when, h: `#/ielts/speaking`, c: '#23afa9', k: 'IELTS' })),
    ...IELTS_GAMES.map(g => ({ t: g.name, s: g.why, h: `#/ielts/play/${g.id}`, c: '#ff5a36', k: 'IELTS game' })),
    ...VOCAB.flatMap(g => g.items.map(it => ({ t: it[0], s: it[2] + ' ' + it[3], h: '#/ielts/vocab', c: '#f2b705', k: 'C2 word' })))
  ];
}

// Progress store: everything is saved in this browser (localStorage).
const KEY = 'kaderlab.v1';
const DAY = 864e5;

function defaults() {
  return { topics: {}, cards: {}, quiz: {}, games: {}, focus: { sessions: [], park: [], first: '' }, woop: { w: '', o: '', ob: '', p: '' }, days: [], xp: 0 };
}
function load() {
  try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch (e) { return defaults(); }
}
export const S = load();
export function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private mode */ } }
export function resetAll() { try { localStorage.removeItem(KEY); } catch (e) {} location.hash = '#/'; location.reload(); }

export const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); };
const dayKey = () => new Date().toISOString().slice(0, 10);

export function touchDay() {
  const k = dayKey();
  if (!S.days.includes(k)) { S.days.push(k); if (S.days.length > 400) S.days.shift(); save(); }
}
export function streak() {
  let n = 0; const d = new Date();
  for (;;) { const k = d.toISOString().slice(0, 10); if (S.days.includes(k)) { n++; d.setDate(d.getDate() - 1); } else break; }
  return n;
}
export function addXP(n) { S.xp = (S.xp || 0) + n; touchDay(); save(); }
const LEVELS = ['Explorer', 'Apprentice', 'Practitioner', 'Analyst', 'Specialist', 'Expert', 'Diploma ready'];
export function level() { const lv = Math.min(LEVELS.length - 1, Math.floor(Math.sqrt((S.xp || 0) / 40))); return { n: lv + 1, name: LEVELS[lv] }; }

// Topic review ladder: learn (day 1) -> day 2 -> day 5 -> day 12 -> day 30 -> mastered
const GAPS = [1, 3, 7, 18];
export function recordRecall(id, pct) {
  const t = S.topics[id] || { stage: 0 };
  if (!t.stage) t.stage = 1;
  else if (pct >= 70) t.stage = Math.min(5, t.stage + 1);
  else t.stage = Math.max(1, t.stage - 1);
  t.recall = pct; t.last = Date.now();
  t.due = t.stage >= 5 ? null : today() + GAPS[t.stage - 1] * DAY;
  S.topics[id] = t; addXP(pct >= 70 ? 15 : 8); save();
  return t;
}
export function topicStage(id) { return (S.topics[id] && S.topics[id].stage) || 0; }
export function dueTopics() {
  const now = today() + DAY - 1;
  return Object.entries(S.topics).filter(([, t]) => t.due && t.due <= now).map(([id, t]) => ({ id, ...t })).sort((a, b) => a.due - b.due);
}
export function nextDueLabel(t) {
  if (!t || !t.stage) return 'Not started';
  if (t.stage >= 5) return 'Mastered';
  const days = Math.round((t.due - today()) / DAY);
  return days <= 0 ? 'Review today' : days === 1 ? 'Review tomorrow' : `Review in ${days} days`;
}
export function mastery(ids) {
  if (!ids.length) return 0;
  const sum = ids.reduce((s, id) => s + topicStage(id), 0);
  return Math.round((sum / (ids.length * 5)) * 100);
}

// Flashcard boxes (Leitner)
const BOX = [0, 1, 2, 4, 8, 16, 32];
export function cardState(id) { return S.cards[id] || { box: 0, due: 0 }; }
export function gradeCard(id, g) { // g: 0 again, 1 hard, 2 good, 3 easy
  const c = cardState(id);
  if (g === 0) c.box = 0; else if (g === 1) c.box = Math.max(1, c.box); else c.box = Math.min(6, c.box + (g === 3 ? 2 : 1));
  c.due = today() + BOX[c.box] * DAY; c.seen = (c.seen || 0) + 1;
  S.cards[id] = c; addXP(g >= 2 ? 2 : 1); save();
}
export function cardsDue(ids) { const now = today() + DAY - 1; return ids.filter(id => cardState(id).due <= now); }

export function bestScore(game, val) {
  if (val === undefined) return S.games[game];
  if (S.games[game] === undefined || val > S.games[game]) { S.games[game] = val; save(); return true; }
  return false;
}
export function saveQuiz(id, pct) { if (!S.quiz[id] || pct > S.quiz[id]) { S.quiz[id] = pct; save(); } }

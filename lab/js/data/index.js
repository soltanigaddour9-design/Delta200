import { LANGUAGE } from './t-language.js';
import { SKILLS } from './t-skills.js';
import { LEARNING } from './t-learning.js';
import { ASSESS } from './t-assess.js';
import { DESIGN } from './t-design.js';
import { EXTRA } from './t-extra.js';
import { REFS } from './refs.js';

export const AREAS = [
  { id: 'grammar',   name: 'Grammar',               icon: '◆', c: '#5b8cff', group: 'Language systems', blurb: 'How English builds meaning: tense, aspect, modality, clauses, and how to analyse and teach them.' },
  { id: 'lexis',     name: 'Lexis',                 icon: '◇', c: '#22d3ee', group: 'Language systems', blurb: 'Words, chunks and collocation: what knowing a word means and how vocabulary is learned.' },
  { id: 'phonology', name: 'Phonology',             icon: '◉', c: '#a78bfa', group: 'Language systems', blurb: 'Sounds, stress, connected speech and intonation, plus how to teach them for intelligibility.' },
  { id: 'discourse', name: 'Discourse',             icon: '❖', c: '#2dd4bf', group: 'Language systems', blurb: 'Language beyond the sentence: cohesion, coherence, genre, spoken interaction and pragmatics.' },
  { id: 'skills',    name: 'Language skills',       icon: '▲', c: '#ff8a3d', group: 'Skills',           blurb: 'Reading, listening, speaking and writing: the processes behind them and how to teach them.' },
  { id: 'learners',  name: 'Learners and SLA',      icon: '✦', c: '#f472b6', group: 'Learning',         blurb: 'How second languages are acquired, and how learners differ in age, motivation and strategy.' },
  { id: 'method',    name: 'Methodology',           icon: '✶', c: '#fbbf24', group: 'Teaching',         blurb: 'Approaches and methods, lesson frameworks, clarifying language, feedback and classroom management.' },
  { id: 'assess',    name: 'Assessment',            icon: '◈', c: '#ff5a5f', group: 'Teaching',         blurb: 'Validity, reliability, washback, test types and how to evaluate a test for a purpose.' },
  { id: 'materials', name: 'Materials',             icon: '▣', c: '#fde047', group: 'Teaching',         blurb: 'Evaluating, adapting and designing materials, and reading the assumptions behind them.' },
  { id: 'design',    name: 'Course design',         icon: '⬡', c: '#c084fc', group: 'Planning',         blurb: 'Needs analysis, diagnostic testing, syllabus types and course planning for Delta Module 3.' },
  { id: 'pd',        name: 'Professional development', icon: '✚', c: '#34d399', group: 'Planning',      blurb: 'Reflection, observation, experimental practice and academic writing for the diploma assignments.' },
  { id: 'contexts',  name: 'Teaching contexts',     icon: '◐', c: '#38bdf8', group: 'Planning',         blurb: 'Specialisms: EAP, CLIL, young learners, ESP and business English, exam classes, one-to-one and online, and Arabic-speaking learners.' }
];

const AREA_ORDER = ['grammar', 'lexis', 'phonology', 'discourse', 'skills', 'learners', 'method', 'assess', 'materials', 'design', 'pd', 'contexts'];
export const TOPICS = [...LANGUAGE, ...SKILLS, ...LEARNING, ...ASSESS, ...DESIGN, ...EXTRA]
  .map((t, i) => ({ ...t, refs: REFS[t.id] || [], _i: i }))
  .sort((a, b) => AREA_ORDER.indexOf(a.area) - AREA_ORDER.indexOf(b.area) || a._i - b._i);

/* Scholars: built from every topic's references */
const slug = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const S_MAP = new Map();
TOPICS.forEach(t => t.refs.forEach(([who, year, work, idea]) => {
  const id = slug(who);
  if (!S_MAP.has(id)) S_MAP.set(id, { id, name: who, works: [], topics: new Set(), areas: new Set() });
  const s = S_MAP.get(id);
  if (!s.works.some(w => w.work === work)) s.works.push({ year, work, idea, topic: t.id });
  s.topics.add(t.id); s.areas.add(t.area);
}));
export const SCHOLARS = [...S_MAP.values()].map(s => ({ ...s, topics: [...s.topics], areas: [...s.areas], first: Math.min(...s.works.map(w => +w.year)) }))
  .sort((a, b) => a.name.localeCompare(b.name));
export const scholarById = id => SCHOLARS.find(s => s.id === id);
export const scholarSlug = slug;
export const areaById = id => AREAS.find(a => a.id === id);
export const topicById = id => TOPICS.find(t => t.id === id);
export const topicsOf = areaId => TOPICS.filter(t => t.area === areaId);

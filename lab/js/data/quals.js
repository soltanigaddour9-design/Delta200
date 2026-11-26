// Qualification guides
const AI_URL = 'https://www.cambridgeenglish.org/Images/745146-guidance-for-use-of-generative-ai-tools-on-celta-and-delta.pdf';
export const QUALS = [
{ id: 'delta1', org: 'Cambridge English · Delta', title: 'Delta Module 1', big: 'M1', short: 'Understanding language, methodology and resources for teaching. Two 90-minute papers, 200 marks.',
  intro: 'A written exam testing how precisely you can analyse language, learners\' texts, tests and materials. You passed it in June 2026, so use this guide to keep the knowledge alive and to support Module 2 and the DipTESOL.',
  chips: ['2 papers × 90 min', '30-minute break', '200 marks', 'Pass · Merit · Distinction'],
  table: { head: ['Paper and task', 'Marks', 'What you do'], rows: [
    ['**Paper 1 Task 1**', '6', 'Give the ELT term for each of six definitions.'],
    ['**Paper 1 Task 2**', '12', 'Define four terms and give an example of each (2 marks for the definition, 1 for the example).'],
    ['**Paper 1 Task 3**', '12', 'Identify a set number of language features in a text, each with an example.'],
    ['**Paper 1 Task 4**', '20', 'Identify key strengths and weaknesses of a learner\'s text in given areas (e.g. organisation, grammar, range of lexis), with an example of each.'],
    ['**Paper 1 Task 5**', '50', 'An authentic text: identify features typical of its genre, then analyse the form, meaning, use and pronunciation of underlined language.'],
    ['**Paper 2 Task 1**', '18', 'A test extract with its context and purpose: identify positive and negative features and apply each to the learner.'],
    ['**Paper 2 Task 2**', '42', 'Published coursebook material: identify the purpose of specified exercises and stages, how they combine, and key assumptions about learning.'],
    ['**Paper 2 Task 3**', '40', 'A further longer written response on teaching resources and methodology, as set in the paper.']
  ] },
  sections: [
    { h: 'How to win marks', body: `<ul>
      <li><b>Precision beats length.</b> Give exactly the number of points asked for. Extra points take time and earn nothing.</li>
      <li><b>Always exemplify.</b> Examples from the text carry marks in Tasks 2 to 5.</li>
      <li><b>Apply to the learner.</b> In Paper 2 Task 1, each feature must be linked to this learner and this purpose.</li>
      <li><b>Write phonemic script accurately</b> in Task 5 and mark stress.</li>
      <li><b>Manage time by marks:</b> Task 5 is half of Paper 1. Many candidates do Tasks 4 and 5 first.</li></ul>
      <div class="callout"><h4>Purpose vs assumption (Paper 2 Task 2)</h4><p>Purpose = what the exercise does for these learners at this point. Assumption = the belief about learning behind it ("learners notice form better after meeting it in context").</p></div>` },
    { h: 'Common mistakes', body: `<ul><li>Writing <b>use</b> when the task asks for <b>meaning</b>.</li><li>Generic test comments ("the test is valid") without pointing to an item.</li><li>Describing an activity instead of stating its purpose.</li><li>Inaccurate phonemic transcription or missing stress marks.</li><li>Running out of time on the high-mark tasks.</li></ul>` }
  ],
  topics: ['mfp', 'sentence-grammar', 'tense-aspect', 'modality', 'emphasis', 'spoken-grammar', 'corpus-frequency', 'cohesion', 'coherence-genre', 'academic-style', 'phonemes', 'connected-speech', 'interlanguage', 'test-principles', 'cefr-marking', 'evaluating-tests', 'materials-assumptions', 'coursebook-debate', 'methods-history', 'alt-methods'],
  sources: [['Cambridge: How Delta is assessed', 'https://www.cambridgeenglish.org/Images/562272-how-delta-is-assessed.pdf'], ['Cambridge: Delta Module One description', 'https://www.cambridgeenglish.org/br/Images/22080-delta-module-one-description.pdf'], ['Cambridge: Summary of changes to Module One (2015)', 'https://www.cambridgeenglish.org/images/174149-summary-of-changes-to-delta-module-one-examination-for-2015.pdf']] },

{ id: 'delta2', org: 'Cambridge English · Delta', title: 'Delta Module 2', big: 'M2', short: 'Developing professional practice. Five assignments: four LSAs and a two-part Professional Development Assignment.',
  intro: 'A coursework module done through an approved centre. Your teaching is observed and assessed. It is where theory meets your real classroom, and where planning and honest reflection matter most.',
  chips: ['Portfolio of coursework', '4 LSAs', '1 externally assessed lesson', 'PDA in 2 parts'],
  table: { head: ['Component', 'What it includes', 'Length'], rows: [
    ['**2 Language Systems Assignments**', 'Background essay on a grammar, lexis, phonology or discourse area; lesson plan; observed lesson; post-lesson evaluation', 'Essay 2,000 to 2,500 words'],
    ['**2 Language Skills Assignments**', 'Background essay on a reading, listening, speaking or writing area; lesson plan; observed lesson; post-lesson evaluation', 'Essay 2,000 to 2,500 words'],
    ['**External assessment**', 'One of the four LSAs is observed and assessed by an external Cambridge assessor', 'Not applicable'],
    ['**PDA Part A: Reflection and Action**', 'Reflective writing at stages of the course, based on an action plan and your strengths and weaknesses', '2,000 to 2,500 words'],
    ['**PDA Part B: Experimental Practice**', 'Research, plan, teach and evaluate a lesson using an approach unfamiliar to you', '1,500 to 2,000 words (current Cambridge summary)']
  ] },
  sections: [
    { h: 'The LSA background essay', body: `<ul><li><b>Narrow the focus</b>: "Helping B2 learners use hedging in discussion essays", not "Writing".</li><li><b>Analysis</b>: precise description of the language or skill area, with examples.</li><li><b>Learner problems</b>: specific, exemplified, with causes (L1, overgeneralisation, processing).</li><li><b>Teaching solutions</b>: each solution answers a problem, with a rationale from the literature.</li><li><b>Respect the word limit.</b> Over-length essays cannot get the higher grades.</li></ul>` },
    { h: 'The lesson plan and lesson', body: `<ul><li>Group profile and individual learner profiles linked to the lesson focus.</li><li>Main aim and sub-aims stated in terms of learning outcomes.</li><li>Stage aims, timing, interaction patterns, materials.</li><li>Anticipated problems with solutions (meaning, form, pronunciation, task).</li><li>Rationale linking the plan to the background essay.</li></ul>
      <div class="callout"><h4>Post-lesson evaluation</h4><p>Was the aim achieved? What is your evidence? What would you change? Examiners reward honest, specific evaluation over self-praise.</p></div>` },
    { h: 'Rules on AI', body: `<p>Cambridge does not allow any part of an assignment's main body to be produced, paraphrased or rewritten by a generative AI tool. Failing to follow the guidance can be treated as malpractice. <a href="${AI_URL}" target="_blank" rel="noopener" style="text-decoration:underline">Read the guidance</a>.</p>` }
  ],
  topics: ['lesson-planning', 'academic-writing', 'reflective-practice', 'teacher-cognition', 'experimental-practice', 'lesson-frameworks', 'clarifying', 'teacher-talk', 'error-correction', 'teaching-reading', 'extensive-reading', 'listening', 'speaking', 'writing', 'teaching-pron', 'classroom-management', 'arabic-learners'],
  sources: [['Cambridge: How Delta is assessed', 'https://www.cambridgeenglish.org/Images/562272-how-delta-is-assessed.pdf'], ['Cambridge: Delta Module Two description', 'https://www.cambridgeenglish.org/br/Images/22086-delta-module-two-description.pdf'], ['Cambridge: AI guidance for CELTA and Delta', AI_URL]] },

{ id: 'delta3', org: 'Cambridge English · Delta', title: 'Delta Module 3', big: 'M3', short: 'Extending practice and ELT specialism. One extended assignment of 4,000 to 4,500 words.',
  intro: 'You design a course for real learners in a specialism: you review the literature, analyse needs, test learners, propose a course and its assessment. Submitted in June or December.',
  chips: ['4,000 to 4,500 words', 'Option 1: ELT specialism', 'Option 2: ELT management', 'June or December'],
  table: { head: ['Part', 'What it does', 'Weighting', 'Old handbook word guide'], rows: [
    ['**1 Introduction: review and key issues**', 'Literature on the specialism and the key issues for these learners', '25% (grasp of topic)', 'about 1,100'],
    ['**2 Needs analysis and commentary**', 'Tools, diagnostic test, results and the priorities they lead to', '20%', 'about 800'],
    ['**3 Course proposal**', 'Syllabus type, aims and objectives, sequence, materials, rationale', '25%', 'about 1,100'],
    ['**4 Assessment proposal**', 'Formative and summative assessment and course evaluation', '20%', 'about 1,100'],
    ['**5 Conclusion**', 'How the course meets the needs identified', 'with presentation', 'about 400']
  ] },
  sections: [
    { h: 'The thread examiners look for', body: `<p>Every part must connect. A key issue from Part 1 is measured in Part 2, becomes a priority, shapes the course in Part 3, and is assessed in Part 4. If you cannot write one sentence showing that chain for each priority, the link is missing.</p>
      <div class="callout"><h4>Choosing a specialism</h4><p>Narrow it: "pre-sessional EAP for health sciences students in Saudi Arabia" works better than "EAP". Young learner specialisms need a specified age range.</p></div>` },
    { h: 'Common weaknesses', body: `<ul><li>Generic placement tests used as diagnostic tests.</li><li>Results described but not interpreted or prioritised.</li><li>A course plan that does not follow from the priorities.</li><li>Assessment that does not match course objectives.</li><li>Too many bullet points and tables in place of argued prose.</li></ul>` },
    { h: 'Rules on AI', body: `<p>Cambridge lists "establishing course priorities and objectives from needs analysis and diagnostic test data" and "producing a course plan or assessment schedule" as tasks that must not be done with AI, and the main body must not be produced, paraphrased or rewritten by AI. <a href="${AI_URL}" target="_blank" rel="noopener" style="text-decoration:underline">Read the guidance</a>.</p>` }
  ],
  topics: ['m3-assignment', 'needs-analysis', 'diagnostic-testing', 'syllabus-types', 'course-planning', 'test-types', 'alt-assessment', 'cefr-marking', 'eap', 'academic-style', 'esp-business', 'clil', 'young-learners', 'exam-classes', 'one-to-one-online', 'arabic-learners', 'l1-translanguaging'],
  sources: [['Cambridge: Delta Module Three examination report', 'https://www.cambridgeEnglish.org/Images/347251-delta-module-three-standard-and-eltm-options-examination-report.pdf'], ['Cambridge: How Delta is assessed', 'https://www.cambridgeenglish.org/Images/562272-how-delta-is-assessed.pdf'], ['Cambridge: AI guidance for CELTA and Delta', AI_URL]] },

{ id: 'diptesol', org: 'Trinity College London · Level 7', title: 'Trinity DipTESOL', big: 'Dip', short: 'Four units: a written assessment, a research portfolio, a phonology interview and assessed teaching.',
  intro: 'Trinity\'s Level 7 diploma, at the same level as Delta. Its signature is a dedicated phonology interview and a more flexible research element. Trinity has introduced an updated specification, so check which one your course provider follows.',
  chips: ['4 units', 'Level 7', 'Phonology interview', '600 hours total qualification time'],
  table: { head: ['Unit', 'Assessment', 'What is assessed'], rows: [
    ['**Unit 1: Language, teaching and learning**', 'Externally assessed. Older specification: 3-hour written paper. Updated specification: a remotely assessed essay with a pre-assessment discussion.', 'Older paper: Section 1 language (four short compulsory questions), Section 2 learning and teaching (one essay), Section 3 professional development (one essay).'],
    ['**Unit 2: The teacher as a developmental, reflective practitioner**', 'Coursework portfolio, internally assessed and externally moderated', 'Observation instrument(s) with rationale and evaluation, a developmental record of your teaching, and an independent research project. In the updated specification, portfolio elements are linked under one topic.'],
    ['**Unit 3: Phonology in classroom practice**', 'Interview, about 30 minutes, externally assessed', 'A talk on a prepared topic with discussion, phonemic transcription, and discussion of phonology theory and its classroom application.'],
    ['**Unit 4: Teaching practice**', 'Internally assessed lessons plus a lesson assessed by a Trinity examiner', 'Learner analysis, lesson preparation, delivery and self-evaluation.']
  ] },
  sections: [
    { h: 'Delta and DipTESOL side by side', body: `<ul><li><b>Same level</b> (Level 7) and widely recognised by employers.</li><li><b>Delta</b> is modular: you can take modules separately and in any order.</li><li><b>DipTESOL</b> has an explicit phonology unit and a research project tied to your context.</li><li>The knowledge base is almost identical: language analysis, skills, methodology, assessment, reflection.</li></ul>
      <div class="callout"><h4>Kader's note</h4><p>You told me wanting both diplomas comes partly from insecurity. This guide is here so you know the field. It is not a reason to take both. Finish Delta first, and add the DipTESOL only if a job you want asks for it.</p></div>` },
    { h: 'Preparing for the phonology interview', body: `<ul><li>Practise <b>phonemic transcription</b> daily with the Phoneme Lab game.</li><li>Be ready to describe sounds by voicing, place and manner.</li><li>Link every theory point to a <b>classroom activity</b> and a <b>learner problem</b>.</li><li>Know connected speech, stress, intonation functions and the Lingua Franca Core debate.</li></ul>` }
  ],
  topics: ['phonemes', 'transcription', 'word-stress', 'connected-speech', 'intonation', 'accents-elf', 'teaching-pron', 'sound-spelling', 'spoken-grammar', 'reflective-practice', 'observation', 'lesson-planning', 'teacher-talk', 'mfp', 'clt', 'usage-based', 'test-principles', 'academic-writing'],
  sources: [['Trinity: DipTESOL overview', 'https://www.trinitycollege.com/site/?id=202'], ['Trinity: DipTESOL qualification summary', 'https://trinitycollege.com/resource/?id=9020'], ['Trinity: DipTESOL unit structure', 'https://www.trinitycollege.com/resource?id=5132']] }
];
export const qualById = id => QUALS.find(q => q.id === id);

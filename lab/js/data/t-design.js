// Course design, Professional development, Teaching contexts
export const DESIGN = [
/* ===================== COURSE DESIGN ===================== */
{ id: 'needs-analysis', area: 'design', title: 'Needs analysis',
  one: 'Before designing a course, find out what learners need to do with English, what they lack, what they want, and what the context allows.',
  quals: ['Delta M3', 'DipTESOL U1'],
  predict: { q: 'Hutchinson and Waters divide target needs into three. What are they?', a: '**Necessities** (what the target situation demands), **lacks** (the gap between current ability and necessities) and **wants** (what learners feel they need).' },
  explain: [
    '**Target situation analysis (TSA)** looks at the language and skills learners will need (Munby\'s Communicative Needs Processor). **Present situation analysis (PSA)** looks at learners\' current ability and background. **Learning needs** concern how learners learn best.',
    '**Means analysis** (Holliday and Cooke) looks at the context: time, resources, institutional constraints, teacher skills, culture.',
    'Data sources and tools: **questionnaires**, **interviews**, **diagnostic tests**, **observation**, **analysis of target texts and tasks**, consultation with stakeholders (subject lecturers, employers). Use **triangulation**: several sources and methods.'
  ],
  kid: 'A doctor does not prescribe medicine before examining the patient. Needs analysis is the examination.',
  viz: { type: 'layers', cap: 'Layers of needs analysis', items: [['Target situation', 'necessities: what they must do'], ['Present situation', 'lacks: what they can do now'], ['Learner wants', 'what they think they need'], ['Means', 'time, resources, constraints']] },
  points: [
    '**Necessities, lacks, wants** (Hutchinson and Waters).',
    '**TSA, PSA, learning needs, means analysis**.',
    '**Objective** needs (from data) vs **subjective** needs (feelings, wants).',
    '**Triangulation** of sources and methods.',
    'Needs analysis is **ongoing**, not only at the start.',
    'Results must lead to **prioritised** course aims.'
  ],
  classroom: [
    'For your Al Maarifa pre-sessional students: questionnaire on study background and confidence, interviews with two nursing lecturers about tasks students struggle with, a diagnostic writing task, and analysis of first-year assignment briefs.',
    'Finding: lecturers say students cannot paraphrase sources; students want more speaking. Your course prioritises source use, with speaking through seminar tasks.'
  ],
  exam: [
    ['Delta M3', 'Part 2 (needs analysis and commentary) is 20% of the assessment. You must explain your tools, summarise results, and justify priorities with reference to the literature.'],
    ['DipTESOL U1', 'Essays on course design need needs analysis vocabulary.']
  ],
  confuse: 'Collecting lots of data is not analysis. Examiners want you to **interpret** results and **prioritise**, explaining why some needs come first.',
  names: ['Hutchinson and Waters', 'Munby', 'Brown (J. D.)', 'Long (Second Language Needs Analysis)', 'Holliday and Cooke'],
  quiz: [
    { q: 'The gap between what learners can do and what the target situation demands is...', o: ['wants', 'lacks', 'necessities', 'means'], a: 1, why: 'Hutchinson and Waters\' "lacks".' },
    { q: 'Means analysis looks at...', o: ['learner errors', 'the teaching context and constraints', 'phonology', 'grammar'], a: 1, why: 'Time, resources, institution, culture.' }
  ] },

{ id: 'diagnostic-testing', area: 'design', title: 'Diagnostic testing for course design',
  one: 'A diagnostic test shows what learners can and cannot do in the areas the course must cover. It feeds directly into objectives.',
  quals: ['Delta M3', 'Delta M1'],
  predict: { q: 'Should a Delta M3 diagnostic test cover general English?', a: 'No. It should test the **skills and language identified as necessary** for the target situation of your specialism, so results lead to course priorities.' },
  explain: [
    'The diagnostic test is designed after or alongside the needs analysis. It should sample the **target skills** (e.g. for EAP: reading academic texts, writing an argument, listening to lectures) and give **detailed information**, not just a score.',
    'Use **analytic** criteria for productive skills to see specific strengths and weaknesses. Keep it **practical** for your context.',
    'Results are summarised (tables, charts) and interpreted: what most learners lack, individual differences, and what this means for the course.'
  ],
  kid: 'It is the scan before the operation. You need to see exactly where the problem is.',
  viz: { type: 'flow', cap: 'From test to priorities', steps: [['Needs analysis', 'what matters'], ['Diagnostic test', 'can they do it?'], ['Results', 'patterns, gaps'], ['Priorities', 'course objectives']] },
  points: [
    'Test the **target skills** found in the needs analysis.',
    'Aim for **diagnostic detail**, not one total score.',
    'Use **analytic scales** for writing and speaking.',
    'Consider **validity, reliability, practicality**.',
    'Present results clearly and **interpret** them.',
    'Link results directly to **course objectives**.'
  ],
  classroom: [
    'Diagnostic for health science EAP: a 300-word source-based paragraph (analytic: content, source use, organisation, accuracy), a reading with inference items, a 5-minute lecture note-taking task.',
    'Result: 80% can find main ideas, 30% paraphrase without copying. Source use becomes objective 1.'
  ],
  exam: [
    ['Delta M3', 'The diagnostic test goes in the appendices; its rationale and results go in Part 2. Examiners check that course priorities follow from results.'],
    ['Delta M1', 'Diagnostic testing terms can appear in Paper 1 Task 2.']
  ],
  confuse: 'A placement test is not a diagnostic test. Using a generic placement test for M3 is a common weakness.',
  names: ['Hughes', 'Alderson (Diagnosing Foreign Language Proficiency)'],
  quiz: [
    { q: 'A good M3 diagnostic test should...', o: ['test general grammar', 'sample the target skills from the needs analysis', 'be a proficiency test', 'have one total score only'], a: 1, why: 'It must inform course priorities.' },
    { q: 'For productive skills in diagnostic testing, use...', o: ['holistic only', 'analytic criteria', 'no criteria', 'multiple choice'], a: 1, why: 'Detailed information about strengths and weaknesses.' }
  ] },

{ id: 'syllabus-types', area: 'design', title: 'Syllabus types and design principles',
  one: 'A syllabus selects and sequences content. Its organising unit (structures, functions, tasks, topics, skills, lexis) reflects beliefs about language and learning.',
  quals: ['Delta M3', 'DipTESOL U1', 'Delta M1'],
  predict: { q: 'What is the difference between a synthetic and an analytic syllabus?', a: 'Wilkins: **synthetic** syllabuses break language into pieces taught one by one for learners to put together (structural). **Analytic** syllabuses present whole chunks of language use (tasks, topics) for learners to analyse.' },
  explain: [
    'Types: **structural** (grammar), **lexical**, **functional-notional** (Wilkins), **situational**, **topic-based**, **skills-based**, **task-based**, **content-based** (CLIL), **process** and **negotiated** syllabuses (Breen, Candlin). Most real courses are **multi-layered** or **integrated**.',
    '**Product-oriented** syllabuses focus on what learners will know; **process-oriented** on how they learn. White distinguishes **Type A** (what is to be learned, interventionist) and **Type B** (how it is learned, non-interventionist).',
    'Design principles: selection by need and frequency, **sequencing** by difficulty, usefulness and learnability, **recycling** (cyclical or spiral syllabus), balance of skills and systems, and coherence with assessment.'
  ],
  kid: 'A syllabus is the map of a journey. Some maps list the cities (grammar points), some list the activities (tasks), some list the topics (themes). Most good maps show several at once.',
  viz: { type: 'scale', cap: 'From synthetic to analytic (Wilkins)', from: 'synthetic', to: 'analytic', items: [[8, 'structural'], [26, 'lexical'], [44, 'functional-notional'], [62, 'skills-based'], [78, 'task-based'], [94, 'process or negotiated']] },
  points: [
    '**Synthetic vs analytic** (Wilkins); **Type A vs Type B** (White).',
    '**Product vs process** syllabuses.',
    'Main types: structural, lexical, functional-notional, situational, topic, skills, task, content, negotiated.',
    '**Multi-layered** syllabuses combine organising strands.',
    '**Sequencing** principles and **recycling** (spiral).',
    'Syllabus choice must follow from **needs** and fit the **context**.'
  ],
  classroom: [
    'Your M3 EAP course: a skills-based main strand (source use, academic writing, lecture listening), a lexical strand (AWL items), and topic-based content from health sciences, all linked to weekly tasks.',
    'Spiral: paraphrasing appears in weeks 1, 3, 6 and 9 with increasing complexity.'
  ],
  exam: [
    ['Delta M3', 'Part 3 (course proposal, 25%) must justify the syllabus type and design with literature and needs analysis results.'],
    ['DipTESOL U1', 'Section 2 essays may ask you to compare syllabus types for a context.']
  ],
  confuse: 'A syllabus is not a list of coursebook units. It is a principled selection and sequence of content.',
  names: ['Wilkins', 'White', 'Nunan (Syllabus Design)', 'Breen', 'Candlin', 'Graves'],
  quiz: [
    { q: 'A grammar-based syllabus is...', o: ['analytic', 'synthetic', 'negotiated', 'process'], a: 1, why: 'Language is broken into separate items.' },
    { q: 'A negotiated syllabus...', o: ['is fixed before the course', 'is decided with learners during the course', 'has no content', 'is only for children'], a: 1, why: 'Learners shape content and process.' }
  ] },

{ id: 'course-planning', area: 'design', title: 'Goals, objectives and course evaluation',
  one: 'A course turns priorities into goals, measurable objectives and a sequence of units, then checks whether it worked.',
  quals: ['Delta M3', 'DipTESOL U1'],
  predict: { q: 'Is "improve writing" a good course objective?', a: 'Too vague. A better objective: "By week 8, learners will be able to write a 300-word source-based paragraph that paraphrases two sources accurately with correct APA citations."' },
  explain: [
    '**Aims or goals** are broad statements of course purpose. **Objectives** are specific, measurable outcomes, often written as **can-do statements** or **SMART** objectives.',
    'A **course plan** shows the sequence of units or weeks, with objectives, content, tasks, materials and assessment. It should show **recycling**, progression and balance.',
    '**Course evaluation** asks whether the course met learners\' needs: formative (during, e.g. learner feedback, observation) and summative (after, e.g. results, questionnaires, stakeholder views).'
  ],
  kid: 'A goal is "get fit". An objective is "run 5 km in 30 minutes by March". The course plan is the weekly training schedule.',
  viz: { type: 'flow', cap: 'Course design chain', steps: [['Needs', 'analysis and test'], ['Priorities', 'what matters most'], ['Goals and objectives', 'SMART, can-do'], ['Course plan', 'sequence, materials'], ['Assessment and evaluation', 'did it work?']] },
  points: [
    '**Goals** (broad) vs **objectives** (specific, measurable).',
    '**SMART** and **can-do** formulations.',
    'Plan shows **sequence, recycling, progression**.',
    'Course plan links objectives to **tasks, materials and assessment**.',
    '**Formative and summative** course evaluation.',
    'Consider **constraints** found in means analysis.'
  ],
  classroom: [
    '20-hour EAP module over 5 weeks: week 1 reading for main ideas and note-making; week 2 paraphrasing; week 3 synthesising two sources; week 4 drafting a paragraph; week 5 revision and assessment. Each week has one can-do objective.',
    'Mid-course evaluation: a 5-question survey and a short focus group.'
  ],
  exam: [
    ['Delta M3', 'The course plan usually appears as an appendix; the main text explains and justifies it. Part 4 covers assessment and evaluation (20%).'],
    ['DipTESOL U1', 'Questions on planning link goals, objectives and assessment.']
  ],
  confuse: 'Objectives describe what **learners** will be able to do, not what the teacher will do ("The teacher will present..." is not an objective).',
  names: ['Graves (Designing Language Courses)', 'Nation and Macalister (Language Curriculum Design)', 'Richards (Curriculum Development)'],
  quiz: [
    { q: 'Which is a good objective?', o: ['The teacher will teach hedging.', 'Learners will be able to use three hedging devices in a 250-word discussion paragraph.', 'Improve writing.', 'Cover unit 5.'], a: 1, why: 'Learner-focused, specific, measurable.' },
    { q: 'Course evaluation during the course is...', o: ['summative', 'formative', 'diagnostic testing', 'placement'], a: 1, why: 'It informs changes while the course runs.' }
  ] },

{ id: 'm3-assignment', area: 'design', title: 'Writing the Module 3 extended assignment',
  one: 'Five parts, one thread: the literature, your learners\' needs, the course and its assessment must all connect.',
  quals: ['Delta M3'],
  predict: { q: 'What is the most common weakness in Module 3 assignments, according to examiners?', a: 'A weak **link between parts**: needs analysis results that do not clearly lead to course priorities, or an assessment plan that does not match course objectives.' },
  explain: [
    'The extended assignment is **4,000 to 4,500 words** with five parts: **(1) Introduction: review and key issues**, **(2) Needs analysis and commentary**, **(3) Course proposal**, **(4) Assessment proposal**, **(5) Conclusion**. Appendices hold the needs analysis tools, diagnostic test, results and course plan.',
    'Examiner reports give the weighting as grasp of topic **25%**, needs analysis and commentary **20%**, course proposal **25%** and assessment **20%**; the rest relates to presentation and overall organisation.',
    'Each part must refer to **literature** and to your **specific learners**. The thread: key issues from the literature → needs analysis findings → priorities → course design → assessment.'
  ],
  kid: 'It is like building a bridge. Every piece must connect to the next, or the car falls into the river.',
  viz: { type: 'flow', cap: 'The five parts and the thread', steps: [['1 Review and key issues', 'literature on the specialism'], ['2 Needs analysis', 'tools, results, priorities'], ['3 Course proposal', 'syllabus, plan, rationale'], ['4 Assessment', 'formative, summative, evaluation'], ['5 Conclusion', 'how the course meets needs']] },
  points: [
    '**Five parts**, 4,000 to 4,500 words, plus appendices.',
    'Old handbook guidance on proportions: roughly 1,100 words for the introduction, 800 for needs analysis, 1,100 each for course and assessment, 400 for the conclusion.',
    '**Choose a narrow specialism** focus (e.g. EAP for health sciences students, not "EAP").',
    'Every claim about learners needs **evidence** from your data.',
    '**Cite** the literature on the specialism, needs analysis, syllabus design and assessment.',
    'Follow Cambridge rules on **AI use**: the main body must be your own writing.'
  ],
  classroom: [
    'Your specialism: pre-sessional EAP for health sciences students at Al Maarifa. Key issues might include academic literacies, source use, discipline-specific genres and the transition from school to university.',
    'Check your thread with one sentence per part. If you cannot write it, the link is missing.'
  ],
  exam: [
    ['Delta M3', 'Submitted in June or December. Check the latest Cambridge handbook and examiner report for current criteria before submission.']
  ],
  confuse: 'Do not treat the parts as separate essays. Repeat key words that connect them (e.g. "source use", identified in Part 1, measured in Part 2, prioritised in Part 3, assessed in Part 4).',
  names: ['Cambridge Delta Module Three examination reports', 'Graves', 'Hyland (EAP)', 'Long (needs analysis)'],
  quiz: [
    { q: 'How many parts does the Module 3 extended assignment have?', o: ['3', '4', '5', '6'], a: 2, why: 'Introduction, needs analysis, course proposal, assessment, conclusion.' },
    { q: 'The word limit is...', o: ['2,000 to 2,500', '4,000 to 4,500', '6,000', 'No limit'], a: 1, why: 'Excluding appendices and references.' }
  ] },

/* ===================== PROFESSIONAL DEVELOPMENT ===================== */
{ id: 'reflective-practice', area: 'pd', title: 'Reflective practice and action research',
  one: 'Teachers grow by looking systematically at their own teaching, trying changes, and checking the effects.',
  quals: ['Delta M2', 'DipTESOL U2'],
  predict: { q: 'What is the difference between reflection-in-action and reflection-on-action?', a: 'Schön: **in-action** happens during teaching (adjusting on the spot); **on-action** happens afterwards (thinking back and planning change).' },
  explain: [
    '**Schön**: reflection-in-action and reflection-on-action. **Kolb\'s cycle**: concrete experience, reflective observation, abstract conceptualisation, active experimentation. **Gibbs\' cycle** adds feelings and an action plan.',
    '**Action research** (Kemmis and McTaggart; Burns): plan, act, observe, reflect, in cycles, to solve a real classroom problem. **Exploratory practice** (Allwright) focuses on understanding classroom life rather than solving problems.',
    'Tools: teaching journals, recordings of lessons, peer observation, student feedback, critical incidents.'
  ],
  kid: 'Reflection is replaying the football match video to see why you lost, then practising that move on Monday.',
  viz: { type: 'cycle', cap: 'Action research cycle', steps: ['Plan a change', 'Act in class', 'Observe and collect data', 'Reflect and revise'] },
  points: [
    '**Reflection-in-action** vs **reflection-on-action** (Schön).',
    '**Kolb** and **Gibbs** cycles.',
    '**Action research** cycles: plan, act, observe, reflect.',
    '**Exploratory practice** (Allwright).',
    'Data: recordings, journals, observation, learner feedback.',
    'Reflection must lead to **action**, not only description.'
  ],
  classroom: [
    'Your question: "Do my EAP students use my written feedback?" Action: add a 10-minute revision slot after feedback. Observe: compare second drafts. Reflect: what changed?',
    'Record one lesson and count your instruction time. Many teachers are surprised.'
  ],
  exam: [
    ['Delta M2', 'The PDA Part A (Reflection and Action, 2,000 to 2,500 words) is reflective writing at stages of the course, with an action plan based on your strengths and weaknesses.'],
    ['DipTESOL U2', 'The coursework portfolio includes reflective and developmental work and an independent research project.']
  ],
  confuse: 'Reflection is not a diary of feelings. It analyses evidence, connects to theory, and leads to concrete changes.',
  names: ['Schön', 'Kolb', 'Gibbs', 'Burns', 'Allwright', 'Farrell'],
  quiz: [
    { q: 'Adjusting your plan in the middle of a lesson is...', o: ['reflection-on-action', 'reflection-in-action', 'summative evaluation', 'needs analysis'], a: 1, why: 'Reflection happening during the action.' },
    { q: 'The action research cycle is...', o: ['teach, test, teach', 'plan, act, observe, reflect', 'engage, study, activate', 'read, write, speak'], a: 1, why: 'Kemmis and McTaggart.' }
  ] },

{ id: 'observation', area: 'pd', title: 'Observation and feedback',
  one: 'Focused observation with a clear instrument tells you far more than a general impression. Feedback should be specific and developmental.',
  quals: ['DipTESOL U2', 'Delta M2', 'DipTESOL U4'],
  predict: { q: 'Why use an observation instrument instead of free notes?', a: 'An instrument focuses attention on one aspect (e.g. teacher questions, error correction, student talk) and collects evidence that can be analysed.' },
  explain: [
    'Observation can be **developmental** (to help the teacher grow) or **evaluative** (to judge). Peer observation is usually developmental.',
    'Instruments include **seating charts** with interaction lines, **tallies** of question types, **timelines** of stages, **transcripts** of feedback moments, and **checklists**. Each should have a clear focus and rationale.',
    'Good feedback describes evidence, asks questions, links to aims, and agrees on next steps. Models include the "reflective conversation" and coaching approaches.'
  ],
  kid: 'Observation with an instrument is like using a magnifying glass on one part of a painting instead of glancing at the whole wall.',
  viz: { type: 'flow', cap: 'Observation cycle', steps: [['Pre-observation', 'agree focus'], ['Observe', 'use the instrument'], ['Analyse', 'evidence, patterns'], ['Feedback', 'questions, next steps']] },
  points: [
    '**Developmental** vs **evaluative** observation.',
    '**Instruments** focus and structure evidence.',
    '**Pre-observation** meetings agree on focus.',
    'Feedback: **evidence-based**, specific, forward-looking.',
    'Observe **others** to learn, not only to judge.',
    'Reflect on your own **teaching beliefs** through observation.'
  ],
  classroom: [
    'Instrument: a tally of display vs referential questions in a colleague\'s lesson. Result: 18 display, 3 referential. Discussion: how could referential questions increase student talk?',
    'Video self-observation of your error correction during a speaking task, using Lyster and Ranta categories.'
  ],
  exam: [
    ['DipTESOL U2', 'Includes observation work using observation instrument(s) with a rationale and evaluation of their use (older specification).'],
    ['Delta M2', 'Delta requires observing other teachers and reflecting; the PDA can use observation data.']
  ],
  confuse: 'An instrument that tries to record everything records nothing useful. Narrow the focus.',
  names: ['Wajnryb (Classroom Observation Tasks)', 'Richards and Farrell', 'Malderez'],
  quiz: [
    { q: 'Peer observation is usually...', o: ['evaluative', 'developmental', 'a test', 'unnecessary'], a: 1, why: 'Its purpose is professional growth.' },
    { q: 'A good observation instrument...', o: ['records everything', 'focuses on one aspect with clear categories', 'is a grade sheet', 'is optional'], a: 1, why: 'Focus gives usable evidence.' }
  ] },

{ id: 'experimental-practice', area: 'pd', title: 'Experimental practice',
  one: 'Try an approach or technique you have never used, research it, teach it, and evaluate it honestly.',
  quals: ['Delta M2', 'DipTESOL U2'],
  predict: { q: 'Should Experimental Practice show that the new approach worked?', a: 'Not necessarily. It should show **honest, evidence-based evaluation**. A thoughtful analysis of why something partly failed can be very strong.' },
  explain: [
    'In Delta Module Two, **Part B Experimental Practice** asks you to investigate an approach, method or procedure **unfamiliar to you**, plan and teach a lesson using it, and evaluate it.',
    'Typical choices: Dogme, TBL (if you usually teach PPP), the Silent Way, Test-Teach-Test, flipped learning, the Lexical Approach, CLL, TPR with adults.',
    'Structure: background (theory and practice), rationale for choosing it, lesson plan, post-lesson evaluation with evidence, and implications for your future teaching. Cambridge guidance gives the word count; recent official summaries state 1,500 to 2,000 words.'
  ],
  kid: 'Taste a dish you have never cooked, follow a new recipe, then honestly tell everyone how it went and what you would change.',
  viz: { type: 'flow', cap: 'Experimental Practice', steps: [['Choose', 'unfamiliar approach'], ['Research', 'theory and practice'], ['Plan and teach', 'one lesson'], ['Evaluate', 'evidence, learners\' views'], ['Implications', 'future practice']] },
  points: [
    'Choose something **genuinely new to you**.',
    'Explain the **theory and principles** clearly.',
    'Plan a lesson that **faithfully applies** them.',
    'Collect **evidence**: learner feedback, recordings, observer notes.',
    'Evaluate **honestly**: strengths, problems, reasons.',
    'Draw **implications** for your teaching.'
  ],
  classroom: [
    'You usually teach PPP. Experimental Practice: a Dogme lesson with your pre-sessional class, starting from students\' weekend stories and building language from what emerges.',
    'Evidence: board record of emergent language, a 3-question learner survey, your reflection log.'
  ],
  exam: [
    ['Delta M2', 'PDA Part B. Check the current handbook for the exact word count and requirements.'],
    ['DipTESOL U2', 'The independent research project can include similar classroom experimentation.']
  ],
  confuse: 'Do not choose an approach you already use regularly. The point is to experiment and grow.',
  names: ['Thornbury and Meddings (Dogme)', 'Willis (TBL)', 'Gattegno (Silent Way)'],
  quiz: [
    { q: 'Experimental Practice should be...', o: ['an approach you use every day', 'an approach unfamiliar to you', 'a test', 'a coursebook unit'], a: 1, why: 'It is about extending your practice.' },
    { q: 'A strong evaluation is...', o: ['always positive', 'honest and evidence-based', 'very short', 'only about the teacher'], a: 1, why: 'Examiners value critical, evidence-based reflection.' }
  ] },

{ id: 'academic-writing', area: 'pd', title: 'Writing diploma assignments',
  one: 'Diploma essays reward focus, precise terminology, critical use of sources and clear links between theory and your learners.',
  quals: ['Delta M2', 'Delta M3', 'DipTESOL U2', 'DipTESOL U1'],
  predict: { q: 'Your background essay topic is "Phonology". What is wrong with it?', a: 'It is far too broad. A focused topic such as "Helping B1 Arabic-speaking learners hear weak forms in connected speech" allows depth within the word limit.' },
  explain: [
    'A Delta **background essay** (2,000 to 2,500 words) usually has: introduction (focus and rationale), **analysis** of the language or skill area, **learner problems** (with examples and causes), **teaching solutions** (with rationale), and conclusion.',
    'Write **critically**: compare sources, show limits of ideas, apply them to **your** learners. Avoid long quotes and textbook summaries.',
    'Respect word limits (examiners penalise over-length), use consistent referencing (e.g. Harvard), and follow the **AI rules**: the main body must be your own work.'
  ],
  kid: 'A diploma essay is a laser, not a torch. A narrow beam goes deep; a wide beam only lights up the surface.',
  viz: { type: 'flow', cap: 'LSA background essay shape', steps: [['Introduction', 'focus, rationale'], ['Analysis', 'language or skill'], ['Learner problems', 'examples, causes'], ['Teaching solutions', 'activities, rationale'], ['Conclusion', 'link to lesson']] },
  points: [
    '**Narrow the focus** to allow depth.',
    'Analysis must be **precise** and **exemplified**.',
    '**Problems and solutions** must match each other.',
    '**Critical** engagement with sources.',
    '**Word limits** and **referencing** conventions.',
    '**Plan first**: one-sentence argument, then sections.'
  ],
  classroom: [
    'Before drafting, write one sentence answering: "What does my essay argue about which learners?" Keep it visible while writing.',
    'Problem-solution table: each learner problem in one column, the matching solution and its source in the next.'
  ],
  exam: [
    ['Delta M2', 'Four LSAs, each with a background essay of 2,000 to 2,500 words, a lesson plan and a post-lesson evaluation.'],
    ['Delta M3', 'The same writing skills apply to the extended assignment.'],
    ['DipTESOL U1', 'Timed essays in the written paper need the same focus and structure.']
  ],
  confuse: 'Describing many theories is not criticality. Criticality means evaluating them and deciding what fits your learners.',
  names: ['Cambridge Delta handbook', 'Wallace and Wray (Critical Reading and Writing for Postgraduates)'],
  quiz: [
    { q: 'A good background essay topic is...', o: ['Grammar', 'Speaking skills', 'Using fall-rise intonation to signal reservation at C1', 'Teaching English'], a: 2, why: 'Narrow and specific.' },
    { q: 'Criticality in an essay means...', o: ['criticising your learners', 'evaluating sources and applying them to your context', 'quoting a lot', 'using difficult words'], a: 1, why: 'Weighing ideas, not just reporting them.' }
  ] },

/* ===================== TEACHING CONTEXTS ===================== */
{ id: 'eap', area: 'contexts', title: 'English for Academic Purposes',
  one: 'EAP prepares learners to study in English: reading and writing academic texts, listening to lectures, discussing ideas and using sources.',
  quals: ['Delta M3', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'What is the difference between EGAP and ESAP?', a: '**EGAP** (English for General Academic Purposes) teaches skills across disciplines. **ESAP** (English for Specific Academic Purposes) focuses on the genres and language of one discipline, such as nursing.' },
  explain: [
    'EAP covers academic literacy: **reading** and **note-making**, **source use** (summarising, paraphrasing, citing), **academic writing** (genres like essays, reports, reflective writing), **listening to lectures**, **seminar** speaking and **critical thinking**.',
    'Key debates: **EGAP vs ESAP**, **study skills vs academic literacies** (Lea and Street: writing as social practice), and how to teach **plagiarism** avoidance and **AI** use responsibly.',
    'Pre-sessional and foundation courses are intensive and assessment-driven; needs analysis should involve subject lecturers and target assignments.'
  ],
  kid: 'EAP is a bridge between school English and university English. The students must learn to carry new kinds of luggage across it: sources, arguments and lectures.',
  viz: { type: 'quad', cap: 'EAP skills', items: [['Reading', 'academic texts, note-making'], ['Writing', 'genres, source use, citation'], ['Listening', 'lectures, note-taking'], ['Speaking', 'seminars, presentations']] },
  points: [
    '**EGAP vs ESAP** (Hyland, Jordan).',
    '**Source use**: summary, paraphrase, synthesis, citation.',
    '**Genre** awareness: what disciplines expect.',
    '**Academic literacies** view (Lea and Street).',
    '**Hedging, stance, nominalisation** in academic language.',
    '**Critical thinking** and responsible AI use.'
  ],
  classroom: [
    'Your Al Maarifa students: health sciences. ESAP tasks: read a short clinical study abstract, take notes, write a paragraph synthesising two sources, present a poster.',
    'Lecturer interview reveals that students copy from sources. Course priority: paraphrasing and synthesis with citation practice.'
  ],
  exam: [
    ['Delta M3', 'EAP is a popular specialism. Narrow it: "pre-sessional EAP for health sciences students in Saudi Arabia".'],
    ['Delta M2', 'Skills LSAs in academic writing or lecture listening suit EAP groups.']
  ],
  confuse: 'EAP is not "difficult general English". It is driven by academic tasks and genres.',
  names: ['Hyland', 'Jordan', 'de Chazal', 'Alexander, Argent and Spencer', 'Lea and Street', 'Swales'],
  quiz: [
    { q: 'ESAP focuses on...', o: ['general academic skills', 'the language and genres of one discipline', 'business English', 'young learners'], a: 1, why: 'Specific academic purposes.' },
    { q: 'The academic literacies approach sees writing as...', o: ['a set of grammar rules', 'a social practice shaped by disciplines', 'spelling', 'only for native speakers'], a: 1, why: 'Lea and Street.' }
  ] },

{ id: 'young-learners', area: 'contexts', title: 'Teaching young learners',
  one: 'Children learn through doing, playing, routine and stories. Short attention spans need variety, movement and clear structure.',
  quals: ['Delta M3', 'DipTESOL U1', 'Delta M2'],
  predict: { q: 'Should 5-year-olds learn grammar rules?', a: 'Generally no. Young children learn holistically through meaningful, repeated language in songs, stories, routines and games, not through explicit rules.' },
  explain: [
    '**Piaget**: children learn by acting on the world, through developmental stages. **Vygotsky**: learning through social interaction and the ZPD. **Bruner**: scaffolding and routines (formats).',
    'Principles: **here-and-now** language, **TPR**, **songs and chants**, **stories** (with repetition), **routines**, **visuals and realia**, short varied activities, **phonics** for literacy, positive classroom management.',
    'Older children and teenagers need more challenge, choice, identity and relevance. In Delta M3, YL specialisms must specify an age range.'
  ],
  kid: 'Young children learn English the way they learn to play a game: by playing it with you, many times, with laughter.',
  viz: { type: 'quad', cap: 'YL toolkit', items: [['Move', 'TPR, action songs'], ['Story', 'repetition, pictures'], ['Routine', 'hello song, calendar'], ['Play', 'games with clear rules']] },
  points: [
    '**Piaget, Vygotsky, Bruner** inform YL teaching.',
    '**TPR**, songs, chants, stories.',
    '**Routines** give security and language.',
    '**Here-and-now**, concrete language.',
    'Short **varied** activities, movement, visuals.',
    '**Phonics** for early literacy.'
  ],
  classroom: [
    'Your KG3 boys: morning routine song, TPR for action verbs, a picture story with a repeated line they chant, phonics for "s, a, t", and a movement game to finish.',
    'Classroom management: clear signals (clap pattern), praise specific behaviours, keep instructions with demonstration.'
  ],
  exam: [
    ['Delta M3', 'YL specialism requires a defined age range and attention to cognitive development, parents and school context.'],
    ['DipTESOL U1', 'Essays on teaching YLs should link theory to activities.']
  ],
  confuse: 'Fun alone is not enough. Every game needs a language aim and lots of meaningful repetition.',
  names: ['Cameron (Teaching Languages to Young Learners)', 'Pinter', 'Piaget', 'Vygotsky', 'Bruner', 'Asher'],
  quiz: [
    { q: 'Bruner\'s "formats" are...', o: ['tests', 'routines that scaffold language', 'textbook layouts', 'grammar rules'], a: 1, why: 'Predictable routines support language learning.' },
    { q: 'Which suits 5-year-olds best?', o: ['Grammar rules', 'TPR and songs', 'Essay writing', 'Long lectures'], a: 1, why: 'Physical, playful, repetitive.' }
  ] },

{ id: 'esp-business', area: 'contexts', title: 'ESP and Business English',
  one: 'ESP serves learners who need English for a job or field. Content, tasks and materials come from the target situation.',
  quals: ['Delta M3', 'DipTESOL U1'],
  predict: { q: 'Does an ESP teacher need to be an expert in the learners\' profession?', a: 'Not an expert, but they need enough understanding to analyse the language and tasks, and they collaborate with learners and subject experts.' },
  explain: [
    '**ESP** (English for Specific Purposes) includes EAP and **EOP** (English for Occupational Purposes): medical English, aviation English, English for engineers, Business English.',
    'Key features (Dudley-Evans and St John): designed to meet specific needs, uses the underlying methodology and activities of the discipline, centres on the language, skills, discourse and genres of those activities.',
    '**Business English**: meetings, negotiations, presentations, emails, socialising, intercultural communication. Learners are often time-poor and expect immediate relevance.'
  ],
  kid: 'ESP is a tailor-made suit. General English is a suit from the shop: it fits many people, but not perfectly.',
  viz: { type: 'layers', cap: 'ESP branches', items: [['ESP', 'specific purposes'], ['EAP and EOP', 'academic and occupational'], ['Medical, business, aviation...', 'specific fields']] },
  points: [
    'ESP = **EAP + EOP**.',
    'Course content from **target situation analysis**.',
    'Use **authentic** workplace texts and tasks.',
    '**Subject specialists** as collaborators.',
    'Business English: meetings, negotiation, presentations, emails, intercultural skills.',
    'Learners often value **efficiency** and **relevance**.'
  ],
  classroom: [
    'Medical English for nurses: handover role plays using real handover structures (e.g. SBAR: situation, background, assessment, recommendation).',
    'Business English one-to-one: practise the learner\'s next real meeting using their own slides.'
  ],
  exam: [
    ['Delta M3', 'ESP and Business English are common specialisms; needs analysis must include the workplace.'],
    ['DipTESOL U1', 'Essays may ask how needs analysis shapes ESP courses.']
  ],
  confuse: 'ESP is not only vocabulary lists. Genres, tasks and interaction patterns of the field matter as much.',
  names: ['Hutchinson and Waters', 'Dudley-Evans and St John', 'Basturkmen', 'Frendo (Business English)'],
  quiz: [
    { q: 'ESP includes...', o: ['only Business English', 'EAP and EOP', 'only children', 'only grammar'], a: 1, why: 'Academic and occupational purposes.' },
    { q: 'ESP content should come from...', o: ['a general coursebook', 'the target situation', 'random topics', 'the teacher\'s hobbies'], a: 1, why: 'Target situation analysis.' }
  ] },

{ id: 'exam-classes', area: 'contexts', title: 'Exam classes',
  one: 'Exam courses must build real language ability and exam skills at the same time, using the exam\'s format and criteria wisely.',
  quals: ['Delta M3', 'DipTESOL U1'],
  predict: { q: 'Is doing practice tests every lesson the best exam preparation?', a: 'No. Constant testing without teaching causes **negative washback** and little improvement. Combine skill development, strategy training, feedback and timed practice.' },
  explain: [
    'Exam classes (IELTS, Cambridge exams, TOEFL) need: understanding of **format and criteria**, **task-type training**, **strategies** (time management, planning), **language development**, and **mock tests** with feedback.',
    'Teachers should use the **public band descriptors** to give criterion-referenced feedback (e.g. IELTS Writing: Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy).',
    'Risks: **teaching to the test**, motivation drops, narrow learning. Benefits: clear goals, high motivation, measurable progress.'
  ],
  kid: 'Training for a race is not running the race every day. You train strength, technique and pace, and only sometimes run the full distance.',
  viz: { type: 'cycle', cap: 'Exam class cycle', steps: ['Learn the task type', 'Build the skill and language', 'Timed practice', 'Feedback on criteria', 'Mock under exam conditions'] },
  points: [
    'Know the **format, task types and criteria**.',
    'Teach **skills and language**, not only test practice.',
    'Use **band descriptors** for feedback.',
    'Plan **mocks** at intervals, not constantly.',
    'Manage **washback** positively.',
    'Train **exam strategies**: time, planning, checking.'
  ],
  classroom: [
    'IELTS Writing Task 2: teach a 6-minute planning routine (decode the question, answer first, pick two ideas, skeleton, check), then timed writing, then feedback on one criterion at a time.',
    'Listening: train the jump rule (never search backwards) and keep a paraphrase log of every error.'
  ],
  exam: [
    ['Delta M3', '"Exam classes" (e.g. IELTS preparation) is a common specialism; analyse the exam as part of the target situation.'],
    ['DipTESOL U1', 'Essays on washback can use exam classes as an example.']
  ],
  confuse: 'Knowing the exam well does not mean learners have the language. Without development, strategy training hits a ceiling.',
  names: ['Hughes (washback)', 'Alderson and Wall', 'Green (IELTS washback)'],
  quiz: [
    { q: 'Doing only practice tests often causes...', o: ['positive washback', 'negative washback and little improvement', 'better reliability', 'more creativity'], a: 1, why: 'Testing without teaching.' },
    { q: 'IELTS Writing criteria include...', o: ['Fluency and Coherence', 'Task Response', 'Pronunciation', 'Reading speed'], a: 1, why: 'TR, CC, LR, GRA.' }
  ] },

{ id: 'one-to-one-online', area: 'contexts', title: 'One-to-one and online teaching',
  one: 'One-to-one teaching is fully personalised and intense. Online teaching needs deliberate design for interaction and attention.',
  quals: ['Delta M3', 'Delta M2'],
  predict: { q: 'What is the biggest advantage and the biggest challenge of one-to-one teaching?', a: 'Advantage: **complete personalisation** to the learner\'s needs and pace. Challenge: **intensity and lack of peers**; the learner cannot rest or learn from classmates.' },
  explain: [
    '**One-to-one**: needs analysis is continuous; the learner can shape content (negotiated syllabus); the teacher must vary roles (partner, coach, model) and manage intensity. Recording and transcribing learner speech gives rich feedback.',
    '**Online**: synchronous (live) and asynchronous (self-paced) modes; tools for interaction (breakout rooms, chat, collaborative boards); screen fatigue; clear routines; cameras and connectivity issues.',
    'Both contexts suit **emergent language** teaching (Dogme-style), using what the learner brings.'
  ],
  kid: 'One-to-one is a private tennis lesson. You hit lots of balls, but you never get a break unless the coach plans one.',
  viz: { type: 'compare', cap: 'One-to-one: pros and cons', a: { t: 'Advantages', items: ['Full personalisation', 'Flexible pace', 'Learner shapes content', 'Lots of speaking time'] }, b: { t: 'Challenges', items: ['Intensity, fatigue', 'No peer interaction', 'Teacher must play many roles', 'Relationship management'] } },
  points: [
    'One-to-one: **continuous needs analysis**, negotiated content.',
    'Vary **teacher roles** and pace to manage intensity.',
    'Use **recordings** for feedback.',
    'Online: **synchronous** vs **asynchronous**.',
    'Design **interaction** deliberately online.',
    'Plan for **technical** problems.'
  ],
  classroom: [
    'Preply-style lesson: learner brings an email they need to write; you co-plan, they draft, you reformulate, they notice differences.',
    'Online class: a 3-minute warmer in the chat, then breakout rooms with a shared document for task outcomes.'
  ],
  exam: [
    ['Delta M3', 'One-to-one and online or blended learning are possible specialisms.'],
    ['Delta M2', 'Some centres allow assessed lessons online; check centre rules.']
  ],
  confuse: 'One-to-one is not a small group class. Pair work, mingles and peer correction must be replaced with other techniques.',
  names: ['Wisniewska (Learning One-to-One)', 'Osborne (Teaching English One-to-One)', 'Hockly (online teaching)'],
  quiz: [
    { q: 'A key challenge of one-to-one teaching is...', o: ['too many students', 'intensity and no peers', 'lack of personalisation', 'exam pressure'], a: 1, why: 'The learner works without breaks or peers.' },
    { q: 'Asynchronous online learning is...', o: ['live', 'self-paced, not at the same time', 'face to face', 'only video calls'], a: 1, why: 'Learners work at different times.' }
  ] }
];

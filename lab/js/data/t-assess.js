// Assessment and Materials
export const ASSESS = [
/* ===================== ASSESSMENT ===================== */
{ id: 'test-principles', area: 'assess', title: 'Principles of assessment',
  one: 'A good test measures what it claims to measure (validity), does so consistently (reliability), is practical, and has positive effects on teaching (washback).',
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1'],
  predict: { q: 'A speaking test is scored by one teacher who has no criteria. What is the main problem?', a: '**Reliability**: another teacher, or the same teacher on another day, might give a different score. Clear criteria and rater training improve it.' },
  explain: [
    '**Validity**: does the test measure what it intends to? Types: **construct validity** (measures the underlying ability), **content validity** (samples the syllabus or target skills), **face validity** (looks appropriate to users), **criterion-related validity** (agrees with other measures; **concurrent** and **predictive**).',
    '**Reliability**: consistency of results. **Inter-rater** (between markers) and **intra-rater** (same marker over time). Affected by test length, clear instructions, objective items and rater training.',
    '**Practicality** (time, cost, resources), **washback** (the effect of the test on teaching and learning, positive or negative), **authenticity** (tasks resemble real use) and **impact** (effects on society and stakeholders).'
  ],
  kid: 'A bathroom scale is reliable if it shows the same weight every time. It is valid if it shows your real weight, not your height.',
  viz: { type: 'quad', cap: 'The big four', items: [['Validity', 'measures the right thing'], ['Reliability', 'measures consistently'], ['Practicality', 'possible with time and resources'], ['Washback', 'effect on teaching and learning']] },
  points: [
    '**Construct, content, face, criterion-related** (concurrent, predictive) validity.',
    '**Inter-rater** and **intra-rater** reliability.',
    '**Washback**: positive when the test encourages useful learning (e.g. a speaking test makes teachers teach speaking).',
    '**Authenticity**: tasks like real-life language use (Bachman and Palmer).',
    'There is often **tension** between reliability and validity: very objective items may not test real skills.',
    '**Practicality** decides what is possible in real institutions.'
  ],
  classroom: [
    'Your foundation programme tests writing with multiple-choice grammar items. Reliable and practical, but weak construct validity for writing, and negative washback (students stop writing).',
    'A rubric with band descriptors and a standardisation meeting with colleagues improves inter-rater reliability.'
  ],
  exam: [
    ['Delta M1', 'Paper 2 Task 1 (18 marks): you get a test extract with its context and purpose, and identify positive and negative features with reference to these principles, applied to the learner.'],
    ['Delta M3', 'The assessment proposal must justify validity, reliability and practicality for your course.'],
    ['DipTESOL U1', 'Section 2 essays on assessment need precise use of these terms.']
  ],
  confuse: 'Face validity is not "real" validity. A test can look appropriate and still measure the wrong thing.',
  names: ['Hughes (Testing for Language Teachers)', 'Bachman and Palmer', 'Brown (H. D.)', 'Messick', 'Alderson'],
  quiz: [
    { q: 'Two teachers give very different scores to the same essay. The problem is...', o: ['face validity', 'inter-rater reliability', 'washback', 'practicality'], a: 1, why: 'Consistency between markers.' },
    { q: 'A writing test with only gap-fill grammar items lacks...', o: ['reliability', 'practicality', 'construct validity', 'face to face contact'], a: 2, why: 'It does not measure writing ability.' },
    { q: 'Positive washback means...', o: ['the test is easy', 'the test encourages good teaching and learning', 'students pass', 'it is cheap'], a: 1, why: 'Its effects on teaching are beneficial.' }
  ] },

{ id: 'test-types', area: 'assess', title: 'Types of tests and assessment',
  one: 'Tests differ by purpose (placement, diagnostic, progress, achievement, proficiency), by what they compare against, and by item design.',
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1'],
  predict: { q: 'What is the difference between a diagnostic test and a placement test?', a: 'A **placement** test puts learners in the right level. A **diagnostic** test identifies specific strengths and weaknesses to guide teaching.' },
  explain: [
    'By purpose: **placement**, **diagnostic**, **progress** (during a course), **achievement** (end of course, based on the syllabus), **proficiency** (general ability, not tied to a course, e.g. IELTS).',
    '**Formative** assessment supports learning during the course; **summative** assessment judges learning at the end. **Norm-referenced** tests compare learners with each other; **criterion-referenced** tests compare them with descriptors (e.g. CEFR).',
    '**Direct** tests measure the skill itself (writing an essay); **indirect** tests measure related abilities (error recognition). **Discrete-point** tests check one item at a time; **integrative** tests combine skills (cloze, dictation). **Objective** vs **subjective** scoring.'
  ],
  kid: 'A placement test is the doctor\'s waiting-room form. A diagnostic test is the blood test that shows what exactly is wrong.',
  viz: { type: 'flow', cap: 'Tests across a course', steps: [['Placement', 'which class?'], ['Diagnostic', 'which gaps?'], ['Progress', 'how is it going?'], ['Achievement', 'did they learn the syllabus?']] },
  points: [
    '**Placement, diagnostic, progress, achievement, proficiency**.',
    '**Formative vs summative**; **assessment for learning** (Black and Wiliam).',
    '**Norm-referenced vs criterion-referenced**.',
    '**Direct vs indirect**; **discrete-point vs integrative**.',
    '**Objective vs subjective** scoring; **analytic vs holistic** rating scales.',
    '**High-stakes** tests have strong washback.'
  ],
  classroom: [
    'Diagnostic test for your M3 EAP course: a writing task, a short reading with inference items, and a listening note-taking task. You use results to prioritise course objectives.',
    'A weekly 10-minute vocabulary quiz is formative if you use results to reteach.'
  ],
  exam: [
    ['Delta M1', 'Terms: **diagnostic**, **criterion-referenced**, **integrative**, **washback**, **discrete-point**. Paper 2 Task 1 requires you to judge a test for its stated purpose.'],
    ['Delta M3', 'Part 2 needs a diagnostic test; Part 4 an assessment plan with formative and summative elements.']
  ],
  confuse: 'Achievement tests are based on what was taught. Proficiency tests are not tied to any course. IELTS is proficiency, not achievement.',
  names: ['Hughes', 'Black and Wiliam', 'Council of Europe (CEFR)', 'Bachman'],
  quiz: [
    { q: 'IELTS is a...', o: ['placement test', 'proficiency test', 'achievement test', 'diagnostic test'], a: 1, why: 'It measures general ability, not a specific course.' },
    { q: 'A test that compares learners against CEFR descriptors is...', o: ['norm-referenced', 'criterion-referenced', 'indirect', 'discrete-point'], a: 1, why: 'Performance is judged against criteria.' }
  ] },

{ id: 'test-items', area: 'assess', title: 'Testing the skills and item design',
  one: 'Each item type tests something specific and has known weaknesses. Good test writers match item types to the construct.',
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1'],
  predict: { q: 'What is the problem with multiple-choice items where the correct option is much longer than the others?', a: 'Test-wise learners guess it. Good **distractors** must be plausible and similar in length and form.' },
  explain: [
    'Common item types: **multiple choice**, **true, false or not given**, **gap fill**, **cloze** (every nth word deleted), **C-test** (second half of every second word deleted), **matching**, **ordering**, **short answer**, **transformation**, **essay**, **interview**, **role play**.',
    'For **productive skills**, use **rating scales**: **holistic** (one overall score) or **analytic** (separate criteria such as task achievement, coherence, range, accuracy). Analytic scales give better diagnostic information.',
    'Item writing principles: test one thing, clear instructions, plausible distractors, no clues across items, appropriate difficulty, avoid testing background knowledge.'
  ],
  kid: 'A test item is a fishing net. A net with big holes misses small fish (it does not discriminate). A net in the wrong lake catches the wrong fish (invalid).',
  viz: { type: 'compare', cap: 'Rating scales', a: { t: 'Holistic', items: ['One overall band', 'Fast', 'Less diagnostic', 'Good for large-scale screening'] }, b: { t: 'Analytic', items: ['Several criteria', 'Slower', 'Rich diagnostic feedback', 'IELTS uses four criteria'] } },
  points: [
    'Match **item type** to the **construct**.',
    '**Distractors** must be plausible.',
    '**Cloze** and **C-test** are integrative item types.',
    '**Holistic vs analytic** rating scales.',
    '**Item analysis**: facility (difficulty) and discrimination.',
    '**Test specifications** describe what is tested and how.'
  ],
  classroom: [
    'Write a reading test for nursing students with three item types: matching headings (main ideas), short answer (detail), and one inference question.',
    'Speaking assessment with an analytic scale (fluency, accuracy, range, interaction) so students see what to improve.'
  ],
  exam: [
    ['Delta M1', 'In Paper 2 Task 1 you comment on item types: e.g. "true or false items allow 50% guessing, which reduces reliability".'],
    ['Delta M3', 'Your assessment proposal should include sample items and a rationale.']
  ],
  confuse: 'A test can be hard without being good. Difficulty is not the same as quality.',
  names: ['Hughes', 'Alderson, Clapham and Wall', 'Weir', 'Fulcher'],
  quiz: [
    { q: 'A C-test deletes...', o: ['every 7th word', 'the second half of every second word', 'all verbs', 'nothing'], a: 1, why: 'Learners restore the missing parts.' },
    { q: 'An analytic scale...', o: ['gives one score', 'scores separate criteria', 'is only for reading', 'is always unreliable'], a: 1, why: 'Separate criteria give diagnostic information.' }
  ] },

{ id: 'alt-assessment', area: 'assess', title: 'Assessment for learning and alternative assessment',
  one: 'Assessment can drive learning: clear criteria, self and peer assessment, portfolios and feedback that tells learners how to improve.',
  quals: ['Delta M3', 'DipTESOL U1', 'Delta M2'],
  predict: { q: 'What makes assessment "for learning" rather than "of learning"?', a: 'It is used **during** learning to give feedback and adjust teaching. Learners understand the goals, see where they are and know the next step.' },
  explain: [
    '**Assessment for learning** (Black and Wiliam, 1998): sharing success criteria, effective questioning, feedback that moves learners forward, peer and self-assessment, and using results to adapt teaching.',
    '**Alternative assessment**: **portfolios** (collections of work over time), **projects**, **learner journals**, **self-assessment** with can-do statements, **peer assessment**, **conferences**.',
    'Advantages: authenticity, positive washback, learner autonomy. Challenges: reliability, time, and learners\' training in using criteria.'
  ],
  kid: 'Assessment of learning is the final score on the board. Assessment for learning is the coach telling you at half-time what to change.',
  viz: { type: 'cycle', cap: 'Assessment for learning', steps: ['Share clear criteria', 'Learners attempt', 'Feedback on next steps', 'Learners improve', 'Teacher adapts'] },
  points: [
    '**Formative** feedback should be specific and actionable.',
    '**Success criteria** shared before the task.',
    '**Self- and peer assessment** build autonomy.',
    '**Portfolios** show progress over time.',
    '**Can-do statements** (e.g. CEFR-based) support self-assessment.',
    'Mix alternative and traditional assessment for reliability and validity.'
  ],
  classroom: [
    'Before writing, students read a short checklist (clear thesis, two supported points, hedging, accurate referencing). They self-check before submitting and peer-check one partner.',
    'A speaking portfolio of three recordings across the term, with reflections on progress.'
  ],
  exam: [
    ['Delta M3', 'Strong assessment proposals combine formative and summative assessment and explain how each serves course aims.'],
    ['DipTESOL U1', 'Essays on assessment benefit from discussing assessment for learning.']
  ],
  confuse: 'A grade on its own is not formative feedback. Learners need information they can act on.',
  names: ['Black and Wiliam', 'Hattie and Timperley (feedback)', 'Brown and Hudson (alternatives)'],
  quiz: [
    { q: 'A key feature of assessment for learning is...', o: ['final grades only', 'feedback learners can act on', 'secret criteria', 'external exams'], a: 1, why: 'Feedback that moves learning forward.' },
    { q: 'A main challenge of portfolio assessment is...', o: ['negative washback', 'reliability and time', 'no authenticity', 'too easy'], a: 1, why: 'Scoring varied work consistently takes effort.' }
  ] },

{ id: 'evaluating-tests', area: 'assess', title: 'Evaluating a test for a purpose',
  one: 'A step-by-step method for judging any test: purpose, construct, items, scoring, washback and fit to the learner.',
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1'],
  predict: { q: 'Is a test "good" or "bad" in itself?', a: 'Neither. A test is good **for a purpose and a learner**. A strong grammar test may be a poor placement test for a speaking course.' },
  explain: [
    'Start with the **purpose and context**: who are the learners, what decision will the results support?',
    'Then check the **construct**: does the test measure the skills the purpose needs? Check **content**: does it sample the syllabus or target language use? Look at **item types**, **instructions**, **scoring** and **length**.',
    'Consider **reliability** (objectivity, number of items, rater criteria), **practicality** and **washback**. Always link each point to the **specific learner** described.'
  ],
  kid: 'Judging a test is like judging shoes: running shoes are great for a race and terrible for a wedding. Ask what the test is for first.',
  viz: { type: 'flow', cap: 'A test evaluation routine', steps: [['Purpose', 'what decision?'], ['Construct', 'right skills?'], ['Items', 'types, instructions'], ['Scoring', 'reliable?'], ['Effects', 'washback on this learner']] },
  points: [
    'Begin with **purpose** and **learner**.',
    'Judge **construct** and **content** fit.',
    'Analyse **items**: guessing, clarity, distractors, difficulty.',
    'Check **scoring**: answer key, criteria, rater training.',
    'Consider **washback** and **practicality**.',
    'In Delta Paper 2 Task 1, each point needs **a feature plus its effect on this learner**.'
  ],
  classroom: [
    'Example: a placement test for your pre-sessional programme has 40 grammar MCQs and no writing. For EAP placement, writing and reading are central, so construct validity is weak. But it is quick to mark (practical) and reliable.',
    'You might suggest adding a short timed writing task with a simple analytic scale.'
  ],
  exam: [
    ['Delta M1', 'Paper 2 Task 1: marks come from identifying positive and negative features **and** applying each to the learner and purpose described. Generic points without application lose marks.'],
    ['Delta M3', 'Evaluate your own diagnostic test honestly in the commentary.']
  ],
  confuse: 'Listing terms ("it has validity") without evidence from the test earns nothing. Point to the exact item and explain its effect.',
  names: ['Hughes', 'Bachman and Palmer (test usefulness)', 'Weir'],
  quiz: [
    { q: 'The first question when evaluating a test is...', o: ['How long is it?', 'What is its purpose and who is it for?', 'Is it multiple choice?', 'Is it new?'], a: 1, why: 'Quality depends on purpose.' },
    { q: 'In Delta Paper 2 Task 1, each point should...', o: ['define a term', 'identify a feature and apply it to the learner', 'be a list of item types', 'describe the teacher'], a: 1, why: 'Application to the learner earns the extra marks.' }
  ] },

/* ===================== MATERIALS ===================== */
{ id: 'evaluating-materials', area: 'materials', title: 'Evaluating and selecting materials',
  one: 'Choose materials against your learners\' needs and principles, using a systematic checklist, not just a quick look.',
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1'],
  predict: { q: 'What are the three stages of materials evaluation suggested by many writers?', a: '**Pre-use** (predictive: will it work?), **in-use** (how is it working?), **post-use** (retrospective: did it work?).' },
  explain: [
    '**Impressionistic** evaluation is a quick overview; **in-depth** evaluation examines specific units against criteria (Cunningsworth, McGrath).',
    'Criteria include: fit with learners\' needs and level, syllabus coverage, methodology, skills balance, authenticity, cultural appropriacy, visual design, teacher support, cost and availability.',
    'Tomlinson argues materials should have **impact**, help learners feel at ease, develop confidence, be relevant, require investment, expose learners to authentic language, and draw attention to linguistic features.'
  ],
  kid: 'Choosing a coursebook is like choosing a car for your family. A sports car is beautiful but useless for six people.',
  viz: { type: 'flow', cap: 'Evaluation stages', steps: [['Pre-use', 'predict suitability'], ['In-use', 'observe and adapt'], ['Post-use', 'reflect, decide to keep or change']] },
  points: [
    '**Pre-use, in-use, post-use** evaluation.',
    '**Impressionistic** vs **in-depth** evaluation.',
    'Criteria: needs, level, methodology, skills, authenticity, culture, design, support.',
    '**Tomlinson\'s principles** of materials development.',
    '**Cultural appropriacy**: e.g. topics suitable for Saudi contexts.',
    'Evaluation must refer to **your** learners and context.'
  ],
  classroom: [
    'Your EAP team compares two academic skills books. You check one unit each against needs: health-related texts, note-taking, referencing, and level. You choose the one with better source-use tasks.',
    'Post-use survey of students: which units helped most?'
  ],
  exam: [
    ['Delta M1', 'Paper 2 Tasks 2 and 3 involve published materials: identify the purpose of activities and stages and the assumptions behind them, and comment on them in relation to learners.'],
    ['Delta M3', 'The course proposal should justify chosen materials.']
  ],
  confuse: 'An attractive coursebook is not necessarily a principled one. Evaluate the tasks, not the photos.',
  names: ['Cunningsworth', 'Tomlinson', 'McGrath', 'McDonough and Shaw'],
  quiz: [
    { q: 'Evaluation done after using a coursebook is...', o: ['predictive', 'retrospective (post-use)', 'impressionistic', 'diagnostic'], a: 1, why: 'Post-use evaluation looks back.' },
    { q: 'Which is a key criterion for selecting materials?', o: ['Number of colours', 'Fit with learners\' needs', 'Publisher fame', 'Price only'], a: 1, why: 'Needs come first.' }
  ] },

{ id: 'adapting-materials', area: 'materials', title: 'Adapting and supplementing materials',
  one: 'Teachers rarely use a coursebook as it is. They add, delete, modify, simplify and reorder to fit learners.',
  quals: ['Delta M2', 'Delta M1', 'DipTESOL U4'],
  predict: { q: 'Your coursebook reading is about skiing. Your learners have never seen snow. What can you do?', a: 'Adapt: change the topic to a local equivalent, add schema-building visuals, or replace the text while keeping the task type.' },
  explain: [
    'McDonough and Shaw list techniques: **adding** (extending or expanding), **deleting** (subtracting or abridging), **modifying** (rewriting or restructuring), **simplifying**, and **reordering**.',
    'Reasons to adapt: level mismatch, cultural inappropriacy, irrelevance, too much or too little practice, poor task design, mismatch with exam needs.',
    '**Supplementing** adds extra materials: authentic texts, teacher-made worksheets, digital tools, learner-generated content.'
  ],
  kid: 'A coursebook is a recipe. A good cook changes the spice, removes the ingredient the guests are allergic to, and adds a side dish.',
  viz: { type: 'quad', cap: 'Adaptation techniques', items: [['Add', 'more practice, extra stage'], ['Delete', 'remove irrelevant parts'], ['Modify', 'rewrite, personalise, localise'], ['Reorder', 'change the sequence']] },
  points: [
    '**Adding, deleting, modifying, simplifying, reordering** (McDonough and Shaw).',
    '**Localising** content for culture and interests.',
    '**Personalising** tasks to learners\' lives.',
    '**Supplementing** with authentic and learner-generated materials.',
    'Adapt with a principle, not at random.',
    'Copyright and institutional rules apply to supplementary materials.'
  ],
  classroom: [
    'The book\'s listening is a party conversation. You keep the task type but add a clinic reception dialogue for your health students.',
    'A grammar exercise has 20 identical items. Delete 10 and add 3 personalised sentences about their own studies.'
  ],
  exam: [
    ['Delta M2', 'Lesson materials are often adapted; your plan should explain why.'],
    ['DipTESOL U4', 'Assessors value appropriate adaptation to the group.']
  ],
  confuse: 'Adapting is not the same as replacing everything. Preserving what works saves time and keeps coherence with the course.',
  names: ['McDonough and Shaw', 'Tomlinson', 'Islam and Mares'],
  quiz: [
    { q: 'Changing a text\'s topic to fit local culture is...', o: ['deleting', 'modifying (localising)', 'reordering', 'testing'], a: 1, why: 'The material is rewritten for relevance.' },
    { q: 'Adapting materials should be...', o: ['random', 'principled', 'avoided', 'only for young learners'], a: 1, why: 'Based on learners\' needs and clear reasons.' }
  ] },

{ id: 'authentic-materials', area: 'materials', title: 'Authentic materials and designing your own',
  one: 'Authentic texts show real language; graded texts make it accessible. The task, not only the text, makes a text right for a level.',
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M3'],
  predict: { q: 'Can beginners use authentic materials?', a: 'Yes, with simple tasks. A real menu or bus timetable works at A1 if the task is "find the price of tea".' },
  explain: [
    '**Authentic materials** were made for native or expert users, not for teaching: articles, menus, podcasts, lectures. They provide real language and motivation.',
    'Widdowson separated **genuineness** (a property of the text) from **authenticity** (the relationship between the reader and the text: using it for a real purpose). A genuine text used for a grammar drill is not used authentically.',
    'When designing materials: start from aims, choose or write a text, design tasks from easy to demanding, check instructions and layout, pilot and revise. **Corpus tools** and **learner dictionaries** help writers choose frequent, natural language.'
  ],
  kid: 'An authentic text is a real fish from the sea. A graded text is the same fish cleaned and cooked for children. Both can be healthy food.',
  viz: { type: 'compare', cap: 'Authentic vs graded', a: { t: 'Authentic', items: ['Real language, real purpose', 'Motivating, current', 'Can be too difficult', 'Grade the task'] }, b: { t: 'Graded or created', items: ['Controlled vocabulary', 'Targets specific features', 'Can sound artificial', 'Good for focused practice'] } },
  points: [
    '**Authentic** vs **graded** or **pedagogic** texts.',
    '**Genuineness** vs **authenticity** (Widdowson).',
    '**Grade the task, not the text**.',
    'Design: aims → text → tasks → instructions → pilot.',
    'Use **corpora** and frequency data.',
    'Consider copyright and accessibility.'
  ],
  classroom: [
    'EAP: an authentic patient information leaflet. Low-level task: find the dose. Higher-level task: identify hedging and the writer\'s purpose.',
    'You write a short gapped text about Saudi Vision 2030 health goals, using AWL items you want to recycle.'
  ],
  exam: [
    ['Delta M1', 'Paper 1 Task 5 uses an authentic text; you identify genre features. Paper 2 materials tasks ask about assumptions, e.g. "learners benefit from exposure to authentic language".'],
    ['Delta M3', 'Specialist courses (EAP, ESP) rely on authentic texts from the target situation.']
  ],
  confuse: 'Authentic does not mean "good" and graded does not mean "bad". Each serves different aims.',
  names: ['Widdowson', 'Tomlinson', 'Gilmore', 'Nunan'],
  quiz: [
    { q: 'Widdowson argued authenticity is...', o: ['a property of the text', 'about how a reader engages with the text', 'only for advanced learners', 'about photos'], a: 1, why: 'Genuineness is in the text; authenticity is in the use.' },
    { q: 'To use an authentic text with low levels...', o: ['avoid it', 'simplify the task', 'translate it all', 'pre-teach every word'], a: 1, why: 'Grade the task.' }
  ] },

{ id: 'materials-assumptions', area: 'materials', title: 'Reading the purpose and assumptions in materials',
  one: 'Every exercise has a purpose, and every sequence assumes something about how people learn languages. Diploma candidates must name both.',
  quals: ['Delta M1', 'DipTESOL U1'],
  predict: { q: 'A unit starts with a speaking task, then shows a grammar box, then a controlled exercise. What assumption might lie behind starting with speaking?', a: 'For example: "Activating learners\' existing knowledge and engaging them personally increases motivation and helps them notice gaps before the language focus."' },
  explain: [
    'A **purpose** describes what an exercise is for, linked to the learner: "to activate schema so learners can predict content in the reading", "to provide controlled practice of the form in a meaningful context".',
    'An **assumption** is a belief about learning behind the design: "learners notice form better after meeting it in context", "personalisation increases memorability", "controlled practice should precede freer use".',
    'Good answers are **specific to the material** and phrased as principles about learning or teaching, not descriptions of the activity.'
  ],
  kid: 'Every step in a recipe has a reason: you rest the dough so it rises. Every step in a coursebook has a reason too, and a belief behind it.',
  viz: { type: 'compare', cap: 'Purpose vs assumption', a: { t: 'Purpose', items: ['What this exercise does', 'For these learners', '"To give controlled practice of..."', 'Specific to the activity'] }, b: { t: 'Assumption', items: ['Belief about learning', 'Behind the design', '"Learners need context before form"', 'A principle, not a description'] } },
  points: [
    '**Purpose** = function of the activity for learners.',
    '**Assumption** = belief about learning or language behind it.',
    'Link each purpose to the **learner** and the **next stage**.',
    'Common assumptions: noticing, personalisation, controlled before free practice, schema activation, peer learning, recycling.',
    'Avoid description: "Students read a text" is not a purpose.',
    'Practise on real coursebook units every week.'
  ],
  classroom: [
    'Take one unit of your EAP coursebook. For each exercise write one purpose and one assumption. Compare with a colleague.',
    'Use this skill when planning: every stage in your own lesson plan should have a purpose you can state.'
  ],
  exam: [
    ['Delta M1', 'Paper 2 Task 2 (42 marks): identify the purpose of specified exercises and stages in published material, and comment on key assumptions about language learning. Paper 2 Task 3 (40 marks) is a further longer response on materials and methodology.'],
    ['DipTESOL U1', 'Questions on materials evaluation need the same thinking.']
  ],
  confuse: 'Writing "the purpose is to practise grammar" is too general. Say which grammar, what kind of practice, and why at that point.',
  names: ['Cunningsworth', 'Tomlinson', 'Delta Module One examination reports'],
  quiz: [
    { q: 'Which is an assumption, not a purpose?', o: ['To practise the past simple', 'Learners remember language better when it is personalised', 'To introduce the topic', 'To check answers'], a: 1, why: 'It is a belief about learning.' },
    { q: '"Students read the text and answer questions" is...', o: ['a purpose', 'a description', 'an assumption', 'a principle'], a: 1, why: 'It describes what happens, not why.' }
  ] }
];

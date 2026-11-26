// Language skills: reading, listening, speaking, writing
export const SKILLS = [
{ id: 'reading-processes', area: 'skills', title: 'How reading works',
  one: 'Reading combines decoding words (bottom-up) with using knowledge and expectations (top-down). Good readers switch between them.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Your student can read every word of a medical article aloud but cannot say what it is about. What is missing?', a: '**Top-down processing**: background knowledge (schema), purpose and the ability to build meaning from the whole text. Decoding alone is not comprehension.' },
  explain: [
    '**Bottom-up processing** builds meaning from small units: letters, words, grammar. **Top-down processing** uses background knowledge (**schema**), context and predictions to interpret the text. The **interactive model** says readers use both at the same time.',
    'Readers read for different purposes using different **subskills**: **skimming** (gist), **scanning** (specific information), **reading for detail**, **inferring** meaning and attitude, **deducing** word meaning from context, understanding text organisation.',
    '**Intensive reading** studies short texts closely; **extensive reading** means reading large amounts of easy, enjoyable text (graded readers) for fluency and vocabulary.'
  ],
  kid: 'Reading is building a jigsaw. Bottom-up is looking closely at each piece. Top-down is looking at the picture on the box. You need both.',
  viz: { type: 'compare', cap: 'Two directions of processing', a: { t: 'Bottom-up', items: ['Letters and sounds', 'Word recognition', 'Grammar parsing', 'Builds up to meaning'] }, b: { t: 'Top-down', items: ['Schema and world knowledge', 'Predicting from title and images', 'Purpose for reading', 'Interprets down to detail'] } },
  points: [
    '**Interactive model**: bottom-up and top-down work together.',
    '**Schema**: content schema (topic knowledge) and formal schema (knowledge of text structure).',
    'Subskills: **skim, scan, detail, infer, deduce meaning, follow argument**.',
    '**Text difficulty** comes from vocabulary load, sentence length, organisation, cultural assumptions and topic familiarity.',
    '**Extensive reading** builds fluency, vocabulary and motivation (Day and Bamford).',
    'Reading in L2 is slowed when readers know fewer than about **95 to 98%** of the words in a text.'
  ],
  classroom: [
    'Before a nursing text about infection control, students brainstorm what they know (activating content schema) and predict the headings (formal schema).',
    'Speed reading race with short graded texts to build fluency, then a reflection: Did you understand more when you read faster or slower?'
  ],
  exam: [
    ['Delta M1', 'Terms: **schema**, **top-down**, **skimming**, **scanning**, **extensive reading**. Paper 2 Task 2 often includes reading materials; you identify the purpose of each task.'],
    ['Delta M2', 'A reading LSA needs a specific subskill or problem (e.g. "inferring writer stance in academic texts"), not "reading" in general.']
  ],
  confuse: 'Skimming and scanning are not the same. Skimming = general idea; scanning = finding specific information like a date or name.',
  names: ['Grabe and Stoller', 'Nuttall', 'Day and Bamford', 'Goodman ("psycholinguistic guessing game")'],
  quiz: [
    { q: 'Finding a date in a timetable is...', o: ['skimming', 'scanning', 'inferring', 'intensive reading'], a: 1, why: 'Looking for a specific piece of information.' },
    { q: 'Knowledge of how a research article is organised is...', o: ['content schema', 'formal schema', 'bottom-up skill', 'phonics'], a: 1, why: 'Formal schema = knowledge of text structure.' }
  ] },

{ id: 'teaching-reading', area: 'skills', title: 'Teaching reading lessons',
  one: 'A reading lesson should develop readers, not only test comprehension. Plan pre-, while- and post-reading stages with a clear purpose.',
  quals: ['Delta M2', 'Delta M1', 'DipTESOL U4'],
  predict: { q: 'Is answering 10 comprehension questions "teaching reading"?', a: 'Often it is only **testing** reading. Teaching reading means developing strategies and subskills, e.g. showing learners how to infer meaning or find the main idea.' },
  explain: [
    'A typical framework: **pre-reading** (generate interest, activate schema, pre-teach blocking vocabulary), **while-reading** (gist task first, then detail or inference tasks), **post-reading** (respond to the content, focus on language, follow-up speaking or writing).',
    'Task design matters: tasks should match **real reading purposes** and the text type. Avoid questions answerable without reading.',
    '**Strategy training**: model the strategy (think aloud), practise it, then reflect. Examples: predicting, questioning the text, summarising each paragraph.'
  ],
  kid: 'Pre-reading is warming up before running. While-reading is the run. Post-reading is talking about the race afterwards.',
  viz: { type: 'flow', cap: 'A reading lesson', steps: [['Lead-in', 'interest, schema'], ['Pre-teach', 'only blocking words'], ['Gist task', 'general idea'], ['Detail or inference', 'deeper tasks'], ['Response', 'discuss, write, language focus']] },
  points: [
    '**Pre-reading**: interest, prediction, schema, minimal vocabulary.',
    '**Gist before detail**: give a reason to read the whole text quickly first.',
    '**While-reading tasks** match purpose: true or false, matching headings, ordering, inference questions.',
    '**Post-reading**: personal response, critical thinking, language noticing.',
    '**Strategy training** makes learners better readers beyond this text.',
    'Use **authentic** or **graded** texts according to aims and level.'
  ],
  classroom: [
    'Your EAP students read a journal abstract. Gist: "What problem does the study address?" Detail: "What was the sample size?" Inference: "Is the writer confident about the results? Which words show this?"',
    'Think-aloud: you read the first paragraph aloud, saying what you predict and question. Students then do the same in pairs.'
  ],
  exam: [
    ['Delta M2', 'Reading LSAs are judged on whether the lesson develops a specific subskill and on how well tasks match the text.'],
    ['DipTESOL U4', 'Assessed skills lessons need clear staging and a rationale for each task.']
  ],
  confuse: 'Pre-teaching every unknown word removes the reading challenge. Pre-teach only words that block the main tasks.',
  names: ['Nuttall', 'Grabe and Stoller', 'Harmer', 'Field (for the comprehension approach critique)'],
  quiz: [
    { q: 'Why give a gist task before a detailed task?', o: ['It is shorter', 'It encourages reading the whole text for overall meaning first', 'It tests grammar', 'It replaces post-reading'], a: 1, why: 'General understanding first supports detailed reading.' },
    { q: 'Which vocabulary should you pre-teach?', o: ['All new words', 'Words that block the main task', 'No words ever', 'Only idioms'], a: 1, why: 'Leave other words for learners to deduce.' }
  ] },

{ id: 'listening', area: 'skills', title: 'How listening works and how to teach it',
  one: 'Listening is real-time decoding plus meaning-building. Most coursebooks test comprehension; better lessons train the process.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Your learners understand the transcript when they read it, but not the audio. Why?', a: 'The problem is **decoding**: recognising words in fast connected speech (linking, weak forms, elision). They know the language; they cannot hear it.' },
  explain: [
    'Listening is harder than reading because it happens in **real time**, cannot be re-read, and involves **connected speech**, accents and speed. Listeners combine **bottom-up decoding** (sounds into words) with **top-down meaning building**.',
    'John Field criticised the **comprehension approach** (listen, answer questions, check answers), because it tests rather than teaches. He proposed a **process approach**: train decoding skills (word boundaries, weak forms) and listening strategies.',
    'Useful activities: **dictation** and **dictogloss**, **transcript work** after listening, **micro-listening** on short chunks, predicting, and listening for different purposes (gist, specific information, detail, attitude).'
  ],
  kid: 'Listening is catching words thrown at you very fast. If the words stick together, you need practice catching them as a group.',
  viz: { type: 'flow', cap: 'A process listening sequence', steps: [['Predict', 'topic, words'], ['Gist listen', 'main idea'], ['Detail listen', 'task'], ['Micro-listen', 'replay a hard 5 seconds'], ['Transcript', 'notice what blocked you']] },
  points: [
    '**Real-time processing** and **connected speech** make listening difficult.',
    '**Bottom-up**: segmenting speech, recognising words in weak forms.',
    '**Top-down**: schema, prediction, context.',
    '**Comprehension approach** tests; **process approach** teaches (Field).',
    'Use **authentic** recordings with graded tasks; the task, not the text, controls difficulty.',
    'Listening problems: speed, accent, unknown vocabulary, losing attention, inability to hear word boundaries.'
  ],
  classroom: [
    'After a lecture extract, play one 6-second segment three times. Students write it word by word, then compare with the transcript and mark linking and weak forms.',
    'Note-taking for EAP: students listen to a mini lecture and fill a skeleton outline (main points, examples), then rebuild the lecture in pairs.'
  ],
  exam: [
    ['Delta M1', 'Terms: **dictogloss**, **bottom-up**, **process approach**, **micro-listening**. Materials tasks often include listening activities to analyse.'],
    ['Delta M2', 'A listening LSA on "decoding connected speech in lectures" shows strong theory-practice links.']
  ],
  confuse: '"Practice makes perfect" is not enough for listening. Repeated testing without feedback on why learners failed does little. Always analyse the problem moments.',
  names: ['Field (Listening in the Language Classroom)', 'Vandergrift and Goh (metacognition)', 'Rost'],
  quiz: [
    { q: 'Field\'s main criticism of typical listening lessons is that they...', o: ['use too much audio', 'test comprehension rather than teach listening', 'are too short', 'use authentic texts'], a: 1, why: 'The comprehension approach checks answers but does not train the process.' },
    { q: 'A dictogloss is...', o: ['reading aloud', 'listening and reconstructing a text in groups', 'a phonemic chart', 'a test type'], a: 1, why: 'Learners note key words, then rebuild the text together.' }
  ] },

{ id: 'speaking', area: 'skills', title: 'Speaking and how to teach it',
  one: 'Speaking needs fluency, accuracy and complexity, plus interactional skills. Lessons should give real reasons to talk and support to improve.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Is a discussion activity alone enough to improve speaking?', a: 'Usually not. Learners need **preparation**, a reason to speak, **feedback**, and often **repetition** of the task. Otherwise they practise what they already can do.' },
  explain: [
    'Researchers describe speaking performance in terms of **complexity, accuracy and fluency (CAF)**. Learners have limited attention, so a focus on one may reduce the others (Skehan).',
    'Speaking includes **interactional** skills (turn-taking, repair, backchannelling) and **transactional** skills (giving information). Learners need **communication strategies**: paraphrasing, asking for clarification, using fillers.',
    'Effective sequences: **pre-task planning**, the task, **feedback** (content and language), **task repetition**. Planning time improves complexity and fluency; repetition improves all three.'
  ],
  kid: 'Speaking is like driving. Fluency is driving without stopping. Accuracy is not breaking the rules. Complexity is taking difficult roads. Beginners can\'t do all three at once.',
  viz: { type: 'cycle', cap: 'A speaking task cycle', steps: ['Plan with a model', 'Do the task', 'Feedback on language', 'Repeat the task better'] },
  points: [
    '**CAF**: complexity, accuracy, fluency; trade-offs (Skehan).',
    '**Interactional** vs **transactional** speaking.',
    '**Communication strategies**: circumlocution, approximation, appeals for help.',
    '**Planning time** and **task repetition** improve performance (Bygate).',
    'Accuracy-focused practice (controlled) and fluency-focused practice (freer) both have a place.',
    'Feedback can be **delayed** (after the task) to protect fluency.'
  ],
  classroom: [
    'Seminar practice: students prepare a 1-minute position on screen time for children, discuss in groups of three, get delayed feedback on two useful phrases, then switch groups and repeat. The second round is visibly better.',
    'With anxious speakers, start in pairs, give time to write notes, and avoid on-the-spot correction in front of the class.'
  ],
  exam: [
    ['Delta M1', 'Terms: **CAF**, **communication strategy**, **interactional**, **task repetition**.'],
    ['Delta M2', 'A speaking LSA must focus on a subskill (e.g. "turn-taking in group discussions" or "giving extended answers"), not "speaking".']
  ],
  confuse: '"Speaking lesson" is not the same as "a lesson where students speak a lot". It needs a specific speaking aim and a way to see improvement.',
  names: ['Bygate', 'Skehan', 'Thornbury (How to Teach Speaking)', 'Goh and Burns'],
  quiz: [
    { q: 'Task repetition mainly helps because...', o: ['learners get bored', 'attention freed in the second attempt goes to language', 'it is easier to mark', 'it replaces feedback'], a: 1, why: 'Learners know the content already, so they can improve form and fluency.' },
    { q: '"I don\'t know the word, it\'s a thing you use to open a bottle" is...', o: ['an error', 'a communication strategy', 'a discourse marker', 'backchannelling'], a: 1, why: 'Circumlocution keeps communication going.' }
  ] },

{ id: 'writing', area: 'skills', title: 'Writing: product, process and genre',
  one: 'Three approaches see writing differently: as a final product, as a process of drafting, or as a social genre. Good teaching combines them.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Your students write one draft in class and you correct every error. Which approach is this?', a: 'A **product approach**. It focuses on the final text. A process approach would include planning, drafting, feedback and redrafting.' },
  explain: [
    'The **product approach** studies a model, practises its features, then produces a similar text. Strong on form, weak on thinking and planning.',
    'The **process approach** focuses on what writers do: brainstorming, planning, drafting, peer and teacher feedback, revising, editing. Strong on ideas, but can neglect genre conventions.',
    'The **genre approach** analyses how texts achieve social purposes (stages, language features), then supports learners from joint construction to independent writing. A **process-genre** approach combines both (Badger and White).'
  ],
  kid: 'Product: copy a beautiful cake from a photo. Process: plan, bake, taste, fix, bake again. Genre: know that a birthday cake needs candles and a wedding cake needs layers.',
  viz: { type: 'flow', cap: 'Process-genre writing cycle', steps: [['Analyse a model', 'genre, stages'], ['Plan', 'ideas, outline'], ['Draft', 'focus on meaning'], ['Feedback', 'peer, teacher'], ['Revise and edit', 'content then accuracy']] },
  points: [
    '**Product**: model → controlled practice → imitate.',
    '**Process**: plan → draft → feedback → revise → edit (Raimes, White and Arndt).',
    '**Genre**: purpose, audience, stages, language; teaching-learning cycle (Martin, Hyland).',
    '**Process-genre**: combine thinking processes with genre knowledge.',
    'Writing subskills: organising ideas, paragraphing, cohesion, register, accuracy.',
    'Many learners transfer L1 rhetorical patterns (**contrastive rhetoric**, Kaplan), a controversial but useful idea.'
  ],
  classroom: [
    'EAP: students deconstruct a model discussion essay (thesis, two body paragraphs, concession, conclusion), co-write one paragraph on the board with you, then write their own with a peer-feedback checklist.',
    'Planning first: before writing, students write their one-sentence answer to the essay question. This is the planning habit many learners lack.'
  ],
  exam: [
    ['Delta M1', 'Terms: **process approach**, **genre approach**, **product approach**. Materials tasks ask what assumptions writing activities make.'],
    ['Delta M2', 'A writing LSA should target a specific genre or subskill, e.g. "writing a discussion essay conclusion" or "hedging".']
  ],
  confuse: 'Process writing does not mean "no attention to accuracy". Editing for accuracy comes last, after content and organisation.',
  names: ['Hyland', 'White and Arndt', 'Badger and White', 'Raimes', 'Kaplan'],
  quiz: [
    { q: 'The genre approach emphasises...', o: ['grammar drills', 'how texts achieve social purposes', 'free writing without models', 'spelling'], a: 1, why: 'Purpose, audience, stages and language features.' },
    { q: 'In process writing, accuracy editing comes...', o: ['first', 'last', 'never', 'during brainstorming'], a: 1, why: 'Content and organisation first, then accuracy.' }
  ] },

{ id: 'writing-feedback', area: 'skills', title: 'Feedback on writing',
  one: 'Feedback works when it is focused, understood and used. Marking every error rarely helps; a revision step always does.',
  quals: ['Delta M2', 'Delta M1', 'DipTESOL U1'],
  predict: { q: 'Should you correct every error in a student essay?', a: 'Usually no. **Selective, focused feedback** on patterns, with a chance to revise, is more useful than covering the page in red.' },
  explain: [
    'Feedback can address **content and organisation** or **language**. On drafts, content first; on final versions, accuracy.',
    '**Direct correction** gives the correct form; **indirect feedback** marks the error (sometimes with a **correction code** like "WW" for wrong word) so learners correct it themselves. Indirect feedback encourages noticing; direct may suit errors beyond the learner\'s level.',
    '**Peer feedback** with clear criteria, **teacher conferences** and **self-assessment checklists** build learner independence. The key: learners must **use** the feedback in a revision.'
  ],
  kid: 'Feedback is like a coach watching you play. If the coach shouts 50 things, you remember none. If the coach shows you two things and you practise them, you improve.',
  viz: { type: 'compare', cap: 'Direct vs indirect feedback', a: { t: 'Direct', items: ['Teacher writes the correct form', 'Fast for learners', 'Good for untreatable or advanced errors', 'Less learner thinking'] }, b: { t: 'Indirect', items: ['Error marked or coded', 'Learner self-corrects', 'Encourages noticing', 'Needs known language'] } },
  points: [
    '**Focus**: content and organisation on drafts, accuracy on final versions.',
    '**Selective** feedback on recurring patterns beats total correction.',
    '**Correction codes** must be taught and used consistently.',
    '**Peer feedback** needs criteria and training.',
    '**Conferencing**: short one-to-one talks about the draft.',
    '**Revision** is where learning happens; build it into the schedule.'
  ],
  classroom: [
    'Error log: each student keeps a list of their top three error types (e.g. articles, run-on sentences) and checks every new essay for those first.',
    'Two-colour feedback: green for one strength to keep, orange for two things to fix in the next draft.'
  ],
  exam: [
    ['Delta M2', 'Writing LSAs and the PDA often involve feedback experiments; justify your approach with research (e.g. Ferris, Truscott debate).'],
    ['Delta M1', 'Paper 1 Task 4 asks you to identify strengths and weaknesses in a learner text. Practise naming them precisely with examples.']
  ],
  confuse: 'Truscott (1996) argued grammar correction is ineffective; Ferris argued it helps when done well. Present both sides in essays.',
  names: ['Ferris', 'Truscott', 'Hyland and Hyland', 'Bitchener'],
  quiz: [
    { q: 'Indirect feedback means...', o: ['the teacher gives the correct form', 'the error is marked so the learner corrects it', 'no feedback', 'oral feedback only'], a: 1, why: 'The learner does the correcting.' },
    { q: 'What makes written feedback effective?', o: ['More red ink', 'A revision step where learners use it', 'Grading only', 'Correcting every error'], a: 1, why: 'Learners must act on it.' }
  ] },

{ id: 'skills-integration', area: 'skills', title: 'Subskills, strategies and integrated skills',
  one: 'Each skill breaks into subskills; learners can be trained in strategies. Real communication integrates skills, so lessons often do too.',
  quals: ['Delta M2', 'Delta M1', 'DipTESOL U4'],
  predict: { q: 'What is the difference between a skill and a strategy?', a: 'A **skill** is an automatic ability (e.g. recognising a word). A **strategy** is a conscious action a learner chooses to solve a problem (e.g. guessing a word from context).' },
  explain: [
    '**Subskills** are the component abilities of a skill: for listening, recognising word boundaries, identifying the main point, inferring attitude. Diploma lessons and essays must target a **specific subskill**.',
    '**Strategies** are conscious, goal-directed actions. **Metacognitive** strategies (planning, monitoring, evaluating) are especially useful (Vandergrift for listening).',
    'In real life skills combine: we read then write, listen then speak. **Integrated skills** lessons (and content-based lessons) reflect this.'
  ],
  kid: 'Football is the skill. Passing, shooting and heading are subskills. Deciding to pass to a free player is a strategy.',
  viz: { type: 'layers', cap: 'From skill to subskill', items: [['Skill', 'Listening'], ['Subskills', 'gist, detail, inference, decoding'], ['Strategies', 'predict, monitor, ask for repetition']] },
  points: [
    'Choose **one subskill** as the main aim of a skills lesson.',
    '**Strategies** are teachable: model, practise, reflect.',
    '**Metacognitive** strategies help learners manage their own learning.',
    '**Integrated skills** lessons mirror real communication.',
    'Sub-aims can include language and other skills.',
    'Assessment of skills should match the subskill taught.'
  ],
  classroom: [
    'Lecture to summary: students listen to a 5-minute talk, take notes (listening), discuss notes (speaking), then write a 100-word summary (writing).',
    'Metacognitive diary after a listening task: What did I find hard? What will I try next time?'
  ],
  exam: [
    ['Delta M2', 'Skills LSAs fail when the aim is too broad ("improve reading"). Name the subskill and the learner problem.'],
    ['DipTESOL U4', 'Lesson plans need clear main aims and sub-aims; skills and systems are often integrated.']
  ],
  confuse: 'A strategy taught once is not learned. Strategy training needs repetition across lessons.',
  names: ['Oxford (strategies)', 'Vandergrift', 'Munby (subskills taxonomy)'],
  quiz: [
    { q: 'Planning how to approach a listening task is a...', o: ['cognitive skill', 'metacognitive strategy', 'subskill of writing', 'phoneme'], a: 1, why: 'Planning, monitoring and evaluating are metacognitive.' },
    { q: 'A good skills LSA aim is...', o: ['to improve speaking', 'to develop learners\' ability to take turns politely in group discussions', 'to teach English', 'to do a reading'], a: 1, why: 'Specific subskill, specific context.' }
  ] }
];

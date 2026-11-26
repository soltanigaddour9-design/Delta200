// Learners and SLA, Methodology
export const LEARNING = [
/* ===================== LEARNERS AND SLA ===================== */
{ id: 'early-sla', area: 'learners', title: 'Behaviourism, innatism and Krashen',
  one: 'Three early ideas still shape teaching: learning as habit formation, language as an innate faculty, and acquisition through comprehensible input.',
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M2'],
  predict: { q: 'Krashen says we acquire language through input. What kind of input?', a: '**Comprehensible input**: language slightly above the learner\'s current level, "i+1", understood with the help of context.' },
  explain: [
    '**Behaviourism** (Skinner): learning is habit formation through stimulus, response and reinforcement. It produced **Audiolingualism** and drills. Errors were seen as bad habits, often caused by the L1 (**contrastive analysis**).',
    '**Innatism** (Chomsky): children are born with a **Language Acquisition Device** and **Universal Grammar**. Children produce forms they never heard ("I goed"), so language cannot be pure imitation.',
    '**Krashen\'s Monitor Model** has five hypotheses: **acquisition-learning** (unconscious vs conscious), **monitor** (learned rules only edit output), **natural order**, **input** (i+1) and **affective filter** (anxiety blocks input). Very influential, but criticised as hard to test.'
  ],
  kid: 'Behaviourism: learning is like training a dog with treats. Chomsky: kids are born with a language app already installed. Krashen: listen to lots of stories you can almost understand, and the language grows by itself.',
  viz: { type: 'timeline', cap: 'How the ideas developed', items: [['1950s', 'Behaviourism', 'Skinner: habits, drills'], ['1959', 'Chomsky\'s review', 'Language is creative'], ['1970s', 'Natural order studies', 'Morpheme order'], ['1982', 'Krashen', 'Input and the affective filter']] },
  points: [
    '**Behaviourism**: stimulus, response, reinforcement; errors as bad habits.',
    '**Contrastive analysis** predicted errors from L1 differences; many predicted errors did not happen, and other errors appeared.',
    '**Chomsky**: LAD, Universal Grammar, creativity of language.',
    '**Krashen\'s five hypotheses**: acquisition-learning, monitor, natural order, input, affective filter.',
    'Krashen\'s legacy: lots of comprehensible input, low anxiety, extensive reading and listening.',
    'Criticism: the acquisition-learning split is hard to test; input alone does not produce accurate output (see Swain).'
  ],
  classroom: [
    'Your low-anxiety warmers and extensive reading programme are Krashen in action: lots of input with a low affective filter.',
    'A choral drill of "Would you like a coffee?" is behaviourist practice. Useful for pronunciation and confidence, not enough on its own.'
  ],
  exam: [
    ['Delta M1', 'Terms: **affective filter**, **comprehensible input**, **contrastive analysis**, **Universal Grammar**, **natural order hypothesis**.'],
    ['DipTESOL U1', 'Section 2 essays on learning often ask you to evaluate one theory critically.']
  ],
  confuse: 'Krashen\'s "learning" and "acquisition" are technical terms. In his model, learned knowledge cannot become acquired knowledge (the non-interface position). Many researchers disagree.',
  names: ['Skinner', 'Chomsky', 'Krashen', 'Lado (contrastive analysis)', 'Lightbown and Spada (How Languages Are Learned)'],
  quiz: [
    { q: 'The affective filter refers to...', o: ['grammar rules', 'emotional factors like anxiety that block input', 'a test', 'the L1'], a: 1, why: 'High anxiety raises the filter.' },
    { q: 'Which theory produced Audiolingualism?', o: ['Innatism', 'Behaviourism', 'Sociocultural theory', 'Interactionism'], a: 1, why: 'Habit formation through drills.' }
  ] },

{ id: 'interaction-output', area: 'learners', title: 'Interaction, output and noticing',
  one: 'Learners acquire language when they negotiate meaning, are pushed to produce, and consciously notice gaps between their language and the target.',
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M2'],
  predict: { q: 'Canadian immersion students understood French very well after years of input, but their grammar stayed weak. Why?', a: 'Merrill **Swain** argued they had too few chances for **pushed output**. Producing language makes learners notice what they cannot say yet.' },
  explain: [
    '**Long\'s Interaction Hypothesis**: conversation helps acquisition when speakers **negotiate meaning** (clarification requests, confirmation checks, comprehension checks). This makes input comprehensible and draws attention to form.',
    '**Swain\'s Output Hypothesis**: producing language helps learners **notice gaps**, **test hypotheses** and reflect on language (metalinguistic function).',
    '**Schmidt\'s Noticing Hypothesis**: input only becomes intake when learners **notice** it consciously. Teachers can help through input enhancement (bolding, highlighting) and tasks that focus attention.'
  ],
  kid: 'You learn a sport by playing, not only by watching. When you try and fail, you notice what you need to fix.',
  viz: { type: 'flow', cap: 'From input to acquisition', steps: [['Input', 'what learners hear and read'], ['Noticing', 'conscious attention'], ['Intake', 'processed input'], ['Output', 'pushed production'], ['Acquisition', 'restructured interlanguage']] },
  points: [
    '**Negotiation of meaning**: clarification requests, confirmation checks, comprehension checks (Long).',
    '**Pushed output** reveals gaps (Swain).',
    '**Noticing**: input becomes intake through attention (Schmidt).',
    '**Noticing the gap**: comparing your own output with a model.',
    'Implications: pair and group tasks, information gaps, reformulation, dictogloss.',
    '**Focus on form** within meaningful tasks (Long) links these ideas to teaching.'
  ],
  classroom: [
    'Dictogloss: students reconstruct a text about hospital hygiene. When they argue about "has been" vs "was", they notice the gap and negotiate form.',
    'Reformulation: a student writes a paragraph; you rewrite it naturally; they compare and notice differences.'
  ],
  exam: [
    ['Delta M1', 'Terms: **negotiation of meaning**, **noticing**, **intake**, **pushed output**, **input enhancement**.'],
    ['Delta M2', 'LSA background essays often justify tasks with interaction and noticing research.']
  ],
  confuse: 'Interaction is not just "students talking". It helps acquisition when there is a communication problem to solve and attention to form.',
  names: ['Long', 'Swain', 'Schmidt', 'Gass', 'Ellis'],
  quiz: [
    { q: '"Sorry, do you mean the red one?" is a...', o: ['comprehension check', 'confirmation check', 'drill', 'recast'], a: 1, why: 'The speaker checks they understood correctly.' },
    { q: 'Swain\'s Output Hypothesis says output helps learners...', o: ['relax', 'notice gaps in their knowledge', 'memorise lists', 'avoid errors'], a: 1, why: 'Trying to say something shows what you cannot yet say.' }
  ] },

{ id: 'sociocultural', area: 'learners', title: 'Sociocultural theory and scaffolding',
  one: 'Learning happens first between people, then inside the learner. The teacher\'s job is to support learners just beyond what they can do alone.',
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M2'],
  predict: { q: 'What is the "zone of proximal development"?', a: 'The gap between what a learner can do **alone** and what they can do **with help** from a more knowledgeable person. Teaching should target this zone.' },
  explain: [
    '**Vygotsky** saw learning as social: we learn through interaction mediated by tools, especially language. Knowledge moves from the social plane (with others) to the individual plane.',
    'The **Zone of Proximal Development (ZPD)** is where learning is possible with support. **Scaffolding** (Wood, Bruner and Ross) is temporary support that is gradually removed as the learner becomes independent.',
    'In class, scaffolding includes models, sentence frames, guiding questions, pair work with stronger peers, and chunking tasks. **Private speech** (talking to yourself) is also part of learning.'
  ],
  kid: 'Learning to ride a bike with stabilisers. First your dad holds the bike, then just the seat, then he lets go. That is scaffolding.',
  viz: { type: 'layers', cap: 'The zone of proximal development', items: [['Can do alone', 'current level'], ['ZPD', 'can do with help: teach here'], ['Cannot do yet', 'even with help']] },
  points: [
    'Learning is **social** and **mediated** by language and tools.',
    '**ZPD**: between independent and assisted performance.',
    '**Scaffolding**: support that is gradually withdrawn.',
    '**Collaborative dialogue** (Swain) links output and sociocultural theory.',
    'Peer support works when tasks require cooperation.',
    'Implications: modelling, joint construction, staged tasks, fading support.'
  ],
  classroom: [
    'Writing a paragraph: first you write one together on the board (joint construction), then pairs write one with sentence frames, then individuals write without frames. The scaffolding fades.',
    'Group a confident student with less confident ones for a seminar task, with clear roles so everyone speaks.'
  ],
  exam: [
    ['Delta M1', 'Terms: **ZPD**, **scaffolding**, **mediation**, **private speech**.'],
    ['DipTESOL U1', 'Essays on learning theory often contrast cognitive and sociocultural views.']
  ],
  confuse: 'Scaffolding is not just "helping". It is **temporary** help designed to be removed. If support is never withdrawn, it is a crutch.',
  names: ['Vygotsky', 'Bruner', 'Lantolf', 'Swain (collaborative dialogue)'],
  quiz: [
    { q: 'Scaffolding should be...', o: ['permanent', 'gradually removed', 'avoided', 'only from the teacher'], a: 1, why: 'Support fades as competence grows.' },
    { q: 'The ZPD is the area where a learner...', o: ['cannot learn', 'can succeed with help', 'is bored', 'has mastered a skill'], a: 1, why: 'Assisted performance.' }
  ] },

{ id: 'interlanguage', area: 'learners', title: 'Interlanguage, errors and developmental sequences',
  one: 'Learners build their own developing system. Errors show that system at work; many follow predictable stages whatever the teaching.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'A learner who once said "went" now says "goed". Are they getting worse?', a: 'No. They have noticed the -ed rule and are **overgeneralising** it. This is progress in their interlanguage, often called U-shaped learning.' },
  explain: [
    '**Interlanguage** (Selinker) is the learner\'s system between L1 and target language. It is systematic, dynamic and can **fossilise** (stop developing) in some areas.',
    '**Corder** distinguished **errors** (systematic, show gaps in competence) from **mistakes** (slips, the learner can self-correct). **Error analysis** classifies errors: **interlingual** (from L1 transfer) and **intralingual** or **developmental** (overgeneralisation, simplification).',
    'Research found **developmental sequences**: for example, negation and question formation develop in stages, and morphemes like -ing appear before third person -s. Teaching cannot skip stages easily (Pienemann\'s **teachability hypothesis**).'
  ],
  kid: 'Interlanguage is like a building under construction. Some walls are temporary, some will be knocked down and rebuilt. Errors show where the builders are working.',
  viz: { type: 'flow', cap: 'Interlanguage continuum', steps: [['L1', 'Arabic, French...'], ['Interlanguage', 'systematic, changing'], ['Target language', 'English'], ['Fossilisation', 'can stop at any point']] },
  points: [
    '**Interlanguage**: systematic, dynamic, permeable (Selinker).',
    '**Errors vs mistakes** (Corder).',
    '**Interlingual** (L1 transfer) vs **intralingual** (overgeneralisation, simplification) errors.',
    '**Fossilisation**: features that stop developing.',
    '**Developmental sequences** and the **teachability hypothesis** (Pienemann).',
    '**Avoidance**: learners avoid difficult structures, so absence of errors can hide gaps.'
  ],
  classroom: [
    'Error log for Saudi EAP students: "He is doctor" (L1 transfer: Arabic has no indefinite article), "the book which I read it" (transfer), "She don\'t" (simplification). Students classify errors before correcting them.',
    'Do not expect third person -s to be accurate just because you taught it this week. It is late-acquired.'
  ],
  exam: [
    ['Delta M1', 'Paper 1 Task 4 and Paper 2 Task 1 need precise error description. Terms: **overgeneralisation**, **fossilisation**, **L1 transfer**, **interlanguage**.'],
    ['Delta M2', 'Learner problems sections should classify likely errors with causes.']
  ],
  confuse: 'Not every error comes from the L1. Many errors are developmental and appear in learners of all L1s.',
  names: ['Selinker', 'Corder', 'Pienemann', 'Lightbown and Spada', 'Swan and Smith (Learner English)'],
  quiz: [
    { q: '"I goed" is an example of...', o: ['L1 transfer', 'overgeneralisation', 'a slip', 'fossilisation'], a: 1, why: 'The regular -ed rule is applied to an irregular verb.' },
    { q: 'According to Corder, a mistake is...', o: ['a systematic gap in knowledge', 'a slip the learner can self-correct', 'L1 interference', 'a fossilised error'], a: 1, why: 'Performance slip, not competence gap.' }
  ] },

{ id: 'individual-differences', area: 'learners', title: 'Individual differences',
  one: 'Learners differ in age, aptitude, personality, anxiety, beliefs and strategies. Some popular ideas, like learning styles, have weak evidence.',
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1'],
  predict: { q: 'Should you match activities to "visual", "auditory" and "kinaesthetic" learners?', a: 'Research gives **no good evidence** that matching teaching to a preferred learning style improves learning (Pashler and colleagues, 2008). Use varied modes because content needs them, not to match styles.' },
  explain: [
    '**Age**: the **Critical Period Hypothesis** suggests a native-like accent is rare if learning starts after puberty. But older learners often learn faster at first, thanks to cognitive maturity and strategies.',
    '**Aptitude** (Carroll): phonetic coding, grammatical sensitivity, rote memory, inductive learning ability. **Working memory** also predicts learning.',
    '**Personality and affect**: anxiety (Horwitz\'s foreign language classroom anxiety), willingness to communicate, self-confidence, beliefs about learning. **Learner strategies** (Oxford) vary in type and frequency.',
    '**Learning styles** are popular, but the "meshing hypothesis" (match teaching to style) is not supported by evidence. Preferences exist; matching does not help.'
  ],
  kid: 'Every student is a different plant. Some need more sun, some more water. But the old idea that some plants only drink through their leaves is a myth.',
  viz: { type: 'quad', cap: 'Main individual differences', items: [['Age', 'Critical period, rate vs ultimate attainment'], ['Aptitude', 'Memory, sound coding, grammar sensitivity'], ['Affect', 'Anxiety, confidence, willingness to communicate'], ['Strategies and beliefs', 'Oxford\'s strategy types, beliefs about learning']] },
  points: [
    '**Critical Period Hypothesis**: strongest evidence for accent; rate favours older learners at first.',
    '**Aptitude** and **working memory** predict speed of learning.',
    '**Anxiety** can lower performance and willingness to communicate.',
    '**Strategies**: memory, cognitive, compensation, metacognitive, affective, social (Oxford).',
    '**Learning styles meshing** is a neuromyth; vary input for content reasons.',
    'Course design must still respond to differences: pacing, support, choice.'
  ],
  classroom: [
    'Anxious speakers in your pre-sessional group: give planning time, use pairs before plenary, and normalise mistakes.',
    'Instead of VAK labels, use dual coding (words plus visuals) for everyone, because it helps memory in general.'
  ],
  exam: [
    ['Delta M1', 'Terms: **critical period**, **aptitude**, **willingness to communicate**, **learner strategies**.'],
    ['Delta M3', 'Needs analysis should include learner differences: anxiety, previous learning, beliefs, strategies.'],
    ['DipTESOL U1', 'A critical view of learning styles shows up-to-date knowledge.']
  ],
  confuse: 'Saying "learners have different learning styles, so I matched activities" in an essay will look outdated. Refer to the evidence and offer a better rationale.',
  names: ['Pashler et al. (2008)', 'Carroll', 'Horwitz', 'Oxford', 'Dörnyei', 'Lenneberg'],
  quiz: [
    { q: 'The evidence for teaching to individual learning styles (VAK matching) is...', o: ['very strong', 'weak or absent', 'proven in neuroscience', 'only for children'], a: 1, why: 'Studies do not support the meshing hypothesis.' },
    { q: 'The Critical Period Hypothesis is most supported for...', o: ['vocabulary', 'pronunciation and accent', 'reading speed', 'writing'], a: 1, why: 'Native-like accent is rare after puberty.' }
  ] },

{ id: 'motivation', area: 'learners', title: 'Motivation and autonomy',
  one: 'Motivation is why learners start and keep going. Modern theories link it to identity, future selves and a sense of autonomy and competence.',
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1', 'Delta M2'],
  predict: { q: 'Is wanting a better job (instrumental) a weaker motivation than loving the culture (integrative)?', a: 'Not necessarily. Instrumental motivation can be very strong. Current models focus on the learner\'s **ideal L2 self** and the learning experience rather than this old split.' },
  explain: [
    '**Gardner**: **integrative** (wanting to join a community) vs **instrumental** (practical goals) motivation.',
    '**Self-Determination Theory** (Deci and Ryan): **intrinsic** motivation grows when learners feel **autonomy**, **competence** and **relatedness**. Extrinsic motivation can be internalised.',
    '**Dörnyei\'s L2 Motivational Self System**: the **ideal L2 self** (who I want to become), the **ought-to L2 self** (what others expect) and the **L2 learning experience** (the class, teacher, materials).',
    '**Learner autonomy** (Holec): the ability to take charge of one\'s learning. It must be developed, not assumed.'
  ],
  kid: 'Motivation is the fuel. Some people fill up because they love driving, others because they need to get to work. Both cars move. The best fuel is a clear picture of where you want to go, plus a road that feels good to drive.',
  viz: { type: 'layers', cap: "Dörnyei's L2 Motivational Self System", items: [['Ideal L2 self', 'Who I want to become'], ['Ought-to L2 self', 'What others expect of me'], ['L2 learning experience', 'The class, teacher, materials, success']] },
  points: [
    '**Integrative vs instrumental** (Gardner).',
    '**Intrinsic vs extrinsic**; SDT needs: autonomy, competence, relatedness.',
    '**L2 Motivational Self System** (Dörnyei).',
    '**Demotivation** often comes from the learning experience: boredom, failure, poor relationships.',
    '**Motivational strategies**: clear goals, success experiences, choice, relevance, feedback on progress.',
    '**Autonomy**: learner training, self-assessment, choice, reflection.'
  ],
  classroom: [
    'Ask your health science students to describe themselves in five years using English in a hospital (ideal L2 self). Link each unit to that picture.',
    'Show progress visibly: a can-do checklist that students tick, so they feel competence.'
  ],
  exam: [
    ['Delta M1', 'Terms: **integrative motivation**, **intrinsic motivation**, **ideal L2 self**, **learner autonomy**.'],
    ['Delta M3', 'Needs analysis should include motivation and learner wants; the course should build autonomy.'],
    ['Delta M2', 'The PDA reflection often involves learner motivation in your context.']
  ],
  confuse: 'Positive fantasies about a future self can reduce effort unless paired with concrete plans. Vision works best with a path (Oettingen; Dörnyei also stresses a "roadmap").',
  names: ['Gardner', 'Deci and Ryan', 'Dörnyei', 'Holec', 'Benson'],
  quiz: [
    { q: 'In Dörnyei\'s model, the "ideal L2 self" is...', o: ['what others expect', 'who the learner wants to become', 'the textbook', 'the teacher\'s goal'], a: 1, why: 'A vision of the future self using the L2.' },
    { q: 'According to SDT, intrinsic motivation grows with...', o: ['rewards only', 'autonomy, competence and relatedness', 'tests', 'punishment'], a: 1, why: 'The three basic psychological needs.' }
  ] },

{ id: 'memory-practice', area: 'learners', title: 'Memory, practice and automaticity',
  one: 'Declarative knowledge becomes automatic skill through practice. Retrieval, spacing and manageable cognitive load make that practice effective.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Which helps memory more: rereading notes three times, or testing yourself once?', a: 'Testing yourself. **Retrieval practice** produces better long-term memory than rereading (Roediger and Karpicke, 2006).' },
  explain: [
    '**Skill acquisition theory** (DeKeyser): knowledge starts **declarative** (knowing that), becomes **procedural** (knowing how) with practice, and finally **automatic**. This supports the idea of meaningful practice.',
    '**Explicit knowledge** is conscious (rules you can explain); **implicit knowledge** is unconscious and used fluently. They are related, but the exact interface is debated (strong, weak and non-interface positions).',
    'From cognitive psychology: **retrieval practice**, **spaced practice**, **interleaving** and managing **cognitive load** (Sweller) help learning. Highlighting and rereading feel productive but help little (Dunlosky et al., 2013).'
  ],
  kid: 'At first you think about every step when you drive. After lots of practice, you drive while chatting. That is automaticity.',
  viz: { type: 'flow', cap: 'Skill acquisition', steps: [['Declarative', 'I know the rule'], ['Proceduralised', 'I can use it slowly'], ['Automatic', 'I use it without thinking']] },
  points: [
    '**Declarative → procedural → automatic** (DeKeyser, Anderson).',
    '**Explicit vs implicit** knowledge; interface positions.',
    '**Retrieval practice** strengthens memory.',
    '**Spacing** beats massing (cramming).',
    '**Cognitive load**: avoid overloading working memory with extraneous detail.',
    '**Usage-based** views: language emerges from many encounters with frequent patterns (Ellis).'
  ],
  classroom: [
    'Start each lesson with a 3-minute retrieval quiz on last week\'s language, without notes. Then a quick peer check.',
    'Spiral the syllabus: return to modals of deduction in week 2, 5 and 9 with new contexts.'
  ],
  exam: [
    ['Delta M1', 'Terms: **automaticity**, **declarative knowledge**, **implicit knowledge**, **interface**.'],
    ['Delta M2', 'Justifying a practice stage or a recycling plan with skill acquisition and retrieval research strengthens background essays.']
  ],
  confuse: 'Practice does not mean mechanical drills only. DeKeyser stresses **meaningful** practice where learners connect form and meaning.',
  names: ['DeKeyser', 'Anderson (ACT)', 'Ellis (N.)', 'Roediger and Karpicke', 'Sweller', 'Dunlosky'],
  quiz: [
    { q: 'Knowing a rule you can explain is...', o: ['implicit knowledge', 'explicit or declarative knowledge', 'automatic knowledge', 'procedural knowledge'], a: 1, why: 'Conscious, statable knowledge.' },
    { q: 'Which technique has strong evidence for long-term retention?', o: ['highlighting', 'rereading', 'spaced retrieval practice', 'copying notes'], a: 2, why: 'Rated high utility by Dunlosky et al.' }
  ] },

/* ===================== METHODOLOGY ===================== */
{ id: 'methods-history', area: 'method', title: 'A history of methods and approaches',
  one: 'From translation to tasks: each method answered the weaknesses of the one before. Diploma candidates must evaluate them critically.',
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M2'],
  predict: { q: 'What is the difference between an approach and a method?', a: 'Anthony (1963): an **approach** is a set of beliefs about language and learning; a **method** is an overall plan based on an approach; a **technique** is a classroom activity. Richards and Rodgers used approach, design and procedure.' },
  explain: [
    '**Grammar-Translation**: rules and translation of literary texts, little speaking. **Direct Method**: target language only, oral focus, inductive grammar. **Audiolingualism**: behaviourist drills, dialogues, accuracy.',
    '**Humanistic methods** (1970s): **Silent Way** (Gattegno), **Suggestopedia** (Lozanov), **Community Language Learning** (Curran), **Total Physical Response** (Asher). **Natural Approach** (Krashen and Terrell).',
    '**Communicative Language Teaching** (from the 1970s) focused on meaning and communicative competence. Later: **Task-Based Language Teaching**, the **Lexical Approach**, **CLIL**, **Dogme**. Many now speak of a **post-method condition** (Kumaravadivelu): principled eclecticism based on context.'
  ],
  kid: 'Teaching methods are like fashions. Each new one fixes something the old one got wrong, and sometimes the old style comes back in a new form.',
  viz: { type: 'timeline', cap: 'Main methods', items: [['1800s', 'Grammar-Translation', 'rules, translation'], ['1900s', 'Direct Method', 'L2 only, oral'], ['1950s', 'Audiolingualism', 'drills, habits'], ['1970s', 'Humanistic methods', 'TPR, Silent Way'], ['1970s on', 'CLT', 'meaning, functions'], ['1990s on', 'TBLT, Lexical, CLIL', 'tasks, chunks, content'], ['2000s', 'Post-method', 'principled eclecticism']] },
  points: [
    '**Approach, method, technique** (Anthony); **approach, design, procedure** (Richards and Rodgers).',
    '**Grammar-Translation, Direct Method, Audiolingualism**: key features and their theories of learning.',
    '**Humanistic**: Silent Way, Suggestopedia, CLL, TPR.',
    '**CLT** and the **Natural Approach**.',
    '**TBLT, Lexical Approach, CLIL, Dogme** (Thornbury and Meddings: conversation-driven, materials-light, focus on emergent language).',
    '**Post-method**: particularity, practicality, possibility (Kumaravadivelu).'
  ],
  classroom: [
    'TPR with your KG3 boys: "Touch your nose, jump, sit down." Pure Asher.',
    'Using Arabic briefly to clarify a medical term with EAP students is not "going back to Grammar-Translation". Judicious L1 use is supported by current research (e.g. translanguaging).'
  ],
  exam: [
    ['Delta M1', 'Paper 2 materials tasks ask what assumptions about learning lie behind activities, which often means naming the approach (e.g. "drills reflect behaviourist assumptions").'],
    ['DipTESOL U1', 'Section 2 essays often ask you to evaluate a method or approach for a context.']
  ],
  confuse: 'CLT is an approach, not a method. It has strong and weak versions (Howatt): the strong version says language is learned through communication; the weak version adds communication to existing teaching.',
  names: ['Richards and Rodgers', 'Larsen-Freeman', 'Howatt', 'Kumaravadivelu', 'Asher', 'Gattegno', 'Lozanov', 'Thornbury and Meddings'],
  quiz: [
    { q: 'Which method uses commands and physical responses?', o: ['Silent Way', 'Total Physical Response', 'Grammar-Translation', 'Suggestopedia'], a: 1, why: 'Asher\'s TPR.' },
    { q: 'Audiolingualism is based on...', o: ['sociocultural theory', 'behaviourism', 'innatism', 'the Lexical Approach'], a: 1, why: 'Habit formation through drilling.' },
    { q: 'Kumaravadivelu\'s post-method pedagogy stresses...', o: ['one best method', 'context-sensitive principles', 'translation', 'drills'], a: 1, why: 'Particularity, practicality, possibility.' }
  ] },

{ id: 'clt', area: 'method', title: 'Communicative Language Teaching',
  one: 'CLT aims for communicative competence: knowing how to use language appropriately, not only correctly.',
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M2'],
  predict: { q: 'Hymes said grammar is not enough. What else do speakers need?', a: '**Communicative competence**: knowing what to say, to whom, when and how. Grammatical knowledge plus the rules of use.' },
  explain: [
    '**Hymes** (1972) coined communicative competence in reaction to Chomsky\'s narrow "competence". **Canale and Swain** (1980) divided it into **grammatical**, **sociolinguistic**, **discourse** and **strategic** competence.',
    'CLT principles: meaningful communication, **information gaps**, authentic materials, **fluency** alongside accuracy, learner-centred interaction, functions and notions (Wilkins).',
    'Criticisms: may neglect accuracy, may not suit all cultures and exam systems, and "communicative" activities can be superficial. Many contexts use a **weak version** of CLT combined with explicit grammar.'
  ],
  kid: 'Knowing all the rules of football does not make you a good player. You need to play matches with real opponents.',
  viz: { type: 'quad', cap: 'Canale and Swain: communicative competence', items: [['Grammatical', 'Vocabulary, grammar, pronunciation'], ['Sociolinguistic', 'Appropriate language for the context'], ['Discourse', 'Building coherent texts'], ['Strategic', 'Repairing breakdowns, compensating']] },
  points: [
    '**Communicative competence** (Hymes).',
    'Four components (Canale and Swain).',
    '**Information gap**, **opinion gap**, **reasoning gap** (Prabhu) activities.',
    '**Functional-notional** syllabuses (Wilkins).',
    '**Strong vs weak** CLT (Howatt).',
    'Context: CLT must be adapted to local cultures of learning.'
  ],
  classroom: [
    'Information gap: Student A has a patient\'s chart, Student B the doctor\'s notes. They must talk to complete both.',
    'In exam-oriented contexts (like many Saudi schools), combine explicit grammar with communicative practice so learners see the value for both exams and real use.'
  ],
  exam: [
    ['Delta M1', 'Terms: **communicative competence**, **strategic competence**, **information gap**, **functional syllabus**.'],
    ['DipTESOL U1', 'Essays often ask you to evaluate CLT in your teaching context.']
  ],
  confuse: '"Communicative" does not mean "no grammar" or "speaking only". CLT includes reading, writing and focus on form.',
  names: ['Hymes', 'Canale and Swain', 'Wilkins', 'Widdowson', 'Littlewood', 'Prabhu'],
  quiz: [
    { q: 'Using gestures to explain a word you forgot shows...', o: ['grammatical competence', 'strategic competence', 'discourse competence', 'sociolinguistic competence'], a: 1, why: 'Strategies to compensate for breakdowns.' },
    { q: 'Who coined "communicative competence"?', o: ['Chomsky', 'Hymes', 'Krashen', 'Skinner'], a: 1, why: 'Dell Hymes, 1972.' }
  ] },

{ id: 'tblt', area: 'method', title: 'Task-Based Language Teaching',
  one: 'In TBLT, learners first use language to complete a meaningful task; focus on language comes from what they needed.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1', 'Delta M3'],
  predict: { q: 'Is "fill the gaps with the past simple" a task in TBLT terms?', a: 'No. It is an **exercise**. A task has a primary focus on **meaning**, a **gap**, learners use their own resources, and there is a clear **non-linguistic outcome** (Ellis).' },
  explain: [
    'Ellis\'s criteria for a task: primary focus on **meaning**, some kind of **gap** (information, opinion, reasoning), learners rely on **their own linguistic resources**, and a **clearly defined outcome** other than using language.',
    '**Willis\'s framework** (1996): **pre-task** (topic and task introduction), **task cycle** (task, planning, report), **language focus** (analysis and practice).',
    '**Task-based** (tasks are the syllabus units) vs **task-supported** (tasks are used within a structural syllabus). Long\'s **focus on form** happens when attention to language arises during meaning-focused work.'
  ],
  kid: 'In TBLT you cook first and learn the recipe words you needed afterwards. In PPP you learn the recipe first, then cook.',
  viz: { type: 'flow', cap: "Willis's TBL framework", steps: [['Pre-task', 'topic, task instructions'], ['Task', 'pairs or groups'], ['Planning', 'prepare report'], ['Report', 'present to class'], ['Language focus', 'analysis, practice']] },
  points: [
    '**Task criteria** (Ellis): meaning, gap, own resources, outcome.',
    '**Willis framework**: pre-task, task cycle (task, planning, report), language focus.',
    '**Task-based vs task-supported** teaching.',
    '**Focused vs unfocused** tasks.',
    '**Task complexity** and sequencing (Robinson, Skehan).',
    'Criticisms: may neglect accuracy for low levels; assessment and coursebook fit can be hard (Swan\'s critique).'
  ],
  classroom: [
    'Task for health students: in groups, decide which three patients should be seen first in an emergency department, then report and justify. Language focus afterwards on language of comparison and justification they struggled with.',
    'Record their report, then show transcripts and reformulate.'
  ],
  exam: [
    ['Delta M1', 'Know Willis\'s stages and Ellis\'s criteria; materials tasks may ask which assumptions underlie a task-based activity.'],
    ['Delta M2', 'Experimental Practice in the PDA is often a TBL or Dogme lesson if you normally teach PPP.'],
    ['Delta M3', 'A task-based syllabus is a possible course design choice, justified by needs.']
  ],
  confuse: 'A "task" in everyday coursebook language (any activity) is not a "task" in TBLT. Use the technical definition in essays.',
  names: ['Willis', 'Ellis', 'Long', 'Skehan', 'Nunan', 'Prabhu', 'Swan (critique)'],
  quiz: [
    { q: 'In Willis\'s framework, language focus comes...', o: ['first', 'after the task cycle', 'never', 'in the pre-task only'], a: 1, why: 'Analysis and practice follow the task.' },
    { q: 'Which is a task by Ellis\'s criteria?', o: ['Repeat after me', 'Plan a 3-day trip for a visitor with a budget and agree on one plan', 'Change these sentences to the passive', 'Copy the vocabulary'], a: 1, why: 'Meaning, gap, own resources, outcome.' }
  ] },

{ id: 'lesson-frameworks', area: 'method', title: 'Lesson frameworks: PPP, TTT, ESA and guided discovery',
  one: 'Frameworks give lessons a shape. Each rests on assumptions about learning, and each fits some aims and learners better than others.',
  quals: ['Delta M2', 'Delta M1', 'DipTESOL U4'],
  predict: { q: 'When is Test-Teach-Test better than PPP?', a: 'When learners may already partly know the language. The first test shows what they know, so you teach only what is missing.' },
  explain: [
    '**PPP**: **Presentation** (context and clarification), **Practice** (controlled), **Production** (freer use). Clear and predictable, but assumes language is learned in the order taught.',
    '**TTT**: **Test** (a task to see what learners know), **Teach** (focus on gaps), **Test** (another task). Efficient for mixed or higher levels.',
    '**ESA** (Harmer): **Engage**, **Study**, **Activate**, in flexible orders (straight arrows, boomerang, patchwork). **Guided discovery**: learners work out rules from examples with guiding questions. **Task-based** frameworks reverse PPP.'
  ],
  kid: 'PPP is "watch me, then try with help, then try alone". TTT is "try first, I watch, then I help you fix, then you try again".',
  viz: { type: 'compare', cap: 'PPP vs TTT', a: { t: 'PPP', items: ['Presentation in context', 'Controlled practice', 'Freer production', 'Good for new language, low levels'] }, b: { t: 'TTT', items: ['Task to test', 'Teach the gaps', 'Task to test again', 'Good when learners partly know it'] } },
  points: [
    '**PPP**: presentation, practice, production; criticised for assuming linear learning.',
    '**TTT**: diagnose first, teach the gap.',
    '**ESA**: engage, study, activate; flexible sequences (Harmer).',
    '**Guided discovery**: inductive, learner-centred clarification.',
    '**TBL** framework: task before language focus.',
    'Choice depends on aims, level, learner familiarity with the language and context.'
  ],
  classroom: [
    'TTT with your B2 EAP group: they write a paragraph comparing two treatments; you see they already handle comparatives but not "whereas, while, in contrast"; you teach those; they rewrite.',
    'PPP with KG3: a picture story for "can", drilling "I can jump", then a game where they mime.'
  ],
  exam: [
    ['Delta M2', 'Your lesson plan must justify the framework choice in terms of learners and aims; assessors look for this.'],
    ['Delta M1', 'Paper 2 Task 2 asks for the purpose of stages in material that often follows PPP or TTT.'],
    ['DipTESOL U4', 'Lesson plans need a clear rationale for staging.']
  ],
  confuse: 'Do not present PPP as "bad" and TBL as "good". Show when each is appropriate and why.',
  names: ['Harmer', 'Scrivener (ARC)', 'Willis', 'Thornbury'],
  quiz: [
    { q: 'In TTT, the first "test" is used to...', o: ['give marks', 'find out what learners already know', 'practise drilling', 'end the lesson'], a: 1, why: 'It diagnoses gaps.' },
    { q: 'ESA stands for...', o: ['Explain, Show, Assess', 'Engage, Study, Activate', 'Elicit, Study, Apply', 'Engage, Speak, Act'], a: 1, why: 'Harmer\'s framework.' }
  ] },

{ id: 'teaching-grammar', area: 'method', title: 'Approaches to teaching grammar',
  one: 'Grammar can be taught deductively or inductively, as forms in isolation or as focus on form within communication.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Is giving the rule first (deductive) wrong?', a: 'No. **Deductive** teaching is efficient for complex rules and analytical adults. **Inductive** teaching can be more memorable and engaging. Choose by learner, rule and context.' },
  explain: [
    '**Deductive**: rule first, then examples and practice. **Inductive**: examples first, learners work out the rule (guided discovery).',
    '**Focus on forms** (Long): teaching grammar items one by one in a structural syllabus. **Focus on form**: briefly drawing attention to language when it arises during communication. **Focus on meaning**: no attention to form.',
    '**Consciousness-raising** tasks (Ellis) help learners notice and understand a feature without requiring immediate production. Research shows explicit instruction helps, especially with practice (Norris and Ortega, 2000).'
  ],
  kid: 'Deductive: I give you the rule of the game, then you play. Inductive: you watch people play, work out the rule, then play.',
  viz: { type: 'compare', cap: 'Deductive vs inductive', a: { t: 'Deductive', items: ['Rule then examples', 'Fast, clear', 'Suits analytical adults', 'Less discovery'] }, b: { t: 'Inductive', items: ['Examples then rule', 'Engaging, memorable', 'Takes time', 'Risk of wrong rule'] } },
  points: [
    '**Deductive** vs **inductive**.',
    '**Focus on forms** vs **focus on form** vs **focus on meaning** (Long).',
    '**Consciousness-raising** tasks (Ellis).',
    '**Explicit instruction** is effective, especially with practice (Norris and Ortega).',
    '**Noticing** and **input enhancement** link to SLA theory.',
    'Grammar as **a skill** ("grammaring", Larsen-Freeman), not only knowledge.'
  ],
  classroom: [
    'Guided discovery with EAP students: six sentences with "while" and "whereas". Questions: Do they show contrast or time? Where is the comma? Students form the rule.',
    'Focus on form during a speaking task: you note "the patient was died", and after the task you briefly contrast "died" and "was killed".'
  ],
  exam: [
    ['Delta M1', 'Terms: **inductive**, **deductive**, **focus on form**, **consciousness-raising**, **guided discovery**.'],
    ['Delta M2', 'Systems LSA lesson plans need a rationale for inductive or deductive choices.']
  ],
  confuse: '"Focus on form" (singular) and "focus on forms" (plural) are different concepts. Examiners notice which one you mean.',
  names: ['Long', 'Ellis', 'Thornbury (How to Teach Grammar)', 'Larsen-Freeman', 'Norris and Ortega'],
  quiz: [
    { q: 'Briefly correcting a form while learners complete a communicative task is...', o: ['focus on forms', 'focus on form', 'grammar-translation', 'deductive presentation'], a: 1, why: 'Attention to form arising within meaning-focused work.' },
    { q: 'A consciousness-raising task mainly aims to...', o: ['get learners to produce the form immediately', 'help learners notice and understand a feature', 'test them', 'replace practice'], a: 1, why: 'Awareness first; production may follow later.' }
  ] },

{ id: 'clarifying', area: 'method', title: 'Clarifying language: context, CCQs, timelines, drilling',
  one: 'Clarification makes meaning, form and pronunciation clear. It starts with a context, checks understanding precisely, and models sound.',
  quals: ['Delta M2', 'DipTESOL U4', 'Delta M1'],
  predict: { q: 'Why is "Do you understand?" a poor checking question?', a: 'Learners often say yes when they don\'t, from politeness or fear. **CCQs** test understanding directly.' },
  explain: [
    'A clear **context** (a story, a situation, a text) shows meaning before explanation. **Eliciting** brings language from learners.',
    '**Concept checking questions (CCQs)** use simple language and target the key concept: for "used to": Do I do it now? Did I do it many times? **Timelines** show time and duration visually.',
    '**Drilling** (choral, individual, substitution, back-chaining) helps pronunciation and confidence. **Board work**: clear form with colours, stress marks, phonemic script. **Instruction checking questions (ICQs)** check that learners know what to do.'
  ],
  kid: 'Explaining a word is like showing a photo, not describing the photo. Then you check with tiny questions, not "OK?".',
  viz: { type: 'flow', cap: 'Clarification sequence', steps: [['Context', 'story, situation'], ['Elicit', 'the target language'], ['Meaning', 'CCQs, timeline'], ['Form', 'board, colours'], ['Pronunciation', 'model, drill']] },
  points: [
    '**Context first**: meaning is clearer in a situation.',
    '**CCQs**: short, simple, target the core concept, with predictable answers.',
    '**Timelines** for tense and aspect.',
    '**Drilling**: choral, individual, substitution, back-chaining.',
    '**Board work**: form, colour coding, stress, phonemic script.',
    '**ICQs** for instructions ("Are you writing or speaking?").'
  ],
  classroom: [
    'Teaching "should have" for regret: context of a student who missed the deadline. CCQs: Did he submit on time? (No.) Is it a good idea now? (It\'s too late.) Is he sorry? (Yes.)',
    'ICQ after instructions for a reading task: "Are you reading every word or only finding the dates?"'
  ],
  exam: [
    ['Delta M2', 'Lesson plans must include anticipated problems and solutions, often CCQs and timelines.'],
    ['DipTESOL U4', 'Assessors look for clear clarification and checking.']
  ],
  confuse: 'CCQs that use the target language ("Did he use to smoke?") do not check anything. Use different, simpler words.',
  names: ['Scrivener (Learning Teaching)', 'Harmer', 'Gower, Phillips and Walters'],
  quiz: [
    { q: 'Which is the best CCQ for "I\'ve lost my keys"?', o: ['Do you understand?', 'Do I have my keys now?', 'What is the present perfect?', 'Did you lose your keys?'], a: 1, why: 'It checks the present result.' },
    { q: 'An ICQ checks...', o: ['concept', 'that learners know what to do', 'pronunciation', 'spelling'], a: 1, why: 'Instruction checking questions.' }
  ] },

{ id: 'error-correction', area: 'method', title: 'Oral corrective feedback',
  one: 'Teachers correct speech in different ways, from recasts to prompts. Prompts that make learners self-correct often lead to more uptake.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1', 'DipTESOL U4'],
  predict: { q: 'A student says "Yesterday I go to the hospital." You say "Oh, you went to the hospital?" What type of feedback is this?', a: 'A **recast**: you reformulate the error correctly without signalling it directly. Recasts are common but learners often miss them.' },
  explain: [
    '**Lyster and Ranta** (1997) identified six types: **explicit correction**, **recast**, **clarification request** ("Sorry?"), **metalinguistic feedback** ("Past tense?"), **elicitation** ("Yesterday I...?"), **repetition** of the error with rising intonation.',
    '**Recasts** were the most frequent but led to the least **uptake**. **Prompts** (elicitation, metalinguistic, clarification, repetition) push learners to self-correct.',
    'Decisions: **immediate vs delayed** correction, **accuracy vs fluency** stages, which errors to treat (global errors that block meaning first), who corrects (self, peer, teacher).'
  ],
  kid: 'Correcting is like being a GPS. A recast quietly shows the right road. A prompt says "Recalculating... which turn did you miss?" so you find it yourself.',
  viz: { type: 'scale', cap: 'Lyster and Ranta: from implicit to explicit', from: 'implicit', to: 'explicit', items: [[8, 'recast'], [28, 'clarification request'], [46, 'repetition'], [64, 'elicitation'], [82, 'metalinguistic'], [96, 'explicit correction']] },
  points: [
    'Six feedback types (Lyster and Ranta).',
    '**Recasts** are frequent but often unnoticed; **prompts** lead to more self-repair.',
    '**Uptake** = the learner\'s response to feedback.',
    '**Global errors** (block meaning) vs **local errors** (Burt and Kiparsky).',
    '**Delayed feedback** after fluency tasks protects flow.',
    'Correction decisions depend on aim of the stage, learner and error type.'
  ],
  classroom: [
    'During controlled practice of past simple, use elicitation: "Yesterday I...?" During the seminar discussion, note errors and do a 5-minute delayed feedback slot.',
    'Finger correction: point to the finger that represents the wrong word to elicit self-correction.'
  ],
  exam: [
    ['Delta M1', 'Terms: **recast**, **uptake**, **metalinguistic feedback**, **elicitation**, **global error**.'],
    ['Delta M2', 'A good PDA focus: "My oral correction techniques" with a recording and analysis.'],
    ['DipTESOL U4', 'Assessors note whether correction matches the stage aim.']
  ],
  confuse: 'Correction is not always good or always bad. Research supports corrective feedback in general; the question is which type, when and how much.',
  names: ['Lyster and Ranta', 'Ellis', 'Burt and Kiparsky', 'Long (recasts)'],
  quiz: [
    { q: '"Yesterday I...?" (waiting for the learner) is...', o: ['a recast', 'elicitation', 'explicit correction', 'metalinguistic'], a: 1, why: 'The teacher pauses to elicit the correct form.' },
    { q: 'Which type produced the least uptake in Lyster and Ranta\'s study?', o: ['recast', 'elicitation', 'metalinguistic', 'clarification'], a: 0, why: 'Learners often did not notice recasts as correction.' }
  ] },

{ id: 'classroom-management', area: 'method', title: 'Classroom management and interaction',
  one: 'Good management makes learning possible: clear instructions, varied interaction patterns, purposeful monitoring and balanced teacher talk.',
  quals: ['Delta M2', 'DipTESOL U4', 'DipTESOL U2'],
  predict: { q: 'Is lower teacher talking time (TTT) always better?', a: 'Not always. **Quality** of teacher talk matters: modelling, scaffolding, rich input. Reduce unnecessary talk, not useful talk.' },
  explain: [
    '**Instructions**: short, staged, with demonstration, ICQs, materials given after instructions.',
    '**Interaction patterns**: T-S, S-S pairs, groups, mingles, open class. Vary them to match aims. **Seating** affects interaction.',
    '**Monitoring**: active (listening for language, helping) vs passive. **Teacher talk**: grading language, eliciting, wait time, display vs referential questions.',
    'Management also includes rapport, routines, discipline and **classroom culture**, which you know well from Al Hussan.'
  ],
  kid: 'A teacher is like an orchestra conductor. You don\'t play every instrument, but you decide who plays when, and you listen carefully to everyone.',
  viz: { type: 'quad', cap: 'Interaction patterns', items: [['T to class', 'presentations, feedback'], ['Pairs', 'practice, checking'], ['Groups', 'tasks, discussions'], ['Mingle', 'surveys, information gaps']] },
  points: [
    '**Instructions**: demonstrate, chunk, ICQ.',
    '**Interaction patterns** chosen for aim.',
    '**Monitoring** for content and language.',
    '**Teacher talk**: graded, purposeful; **wait time** after questions.',
    '**Display questions** (teacher knows the answer) vs **referential questions** (real questions).',
    '**Rapport and routines** reduce problems.'
  ],
  classroom: [
    'Instead of "Discuss the question in groups", say: "Three minutes. Each person gives one reason. Ahmed is the writer." Then ICQ: "How many reasons each?"',
    'Use referential questions in EAP: "What would you do if a patient refused treatment?" instead of display questions only.'
  ],
  exam: [
    ['Delta M2', 'Assessed lessons are evaluated on management as well as aims; the post-lesson evaluation should comment on it honestly.'],
    ['DipTESOL U2', 'Observation instruments often focus on teacher talk, questioning or interaction patterns.']
  ],
  confuse: 'Monitoring is not walking around silently. It means collecting language and checking understanding for later feedback.',
  names: ['Scrivener', 'Harmer', 'Walsh (classroom interactional competence)'],
  quiz: [
    { q: '"What\'s the past of go?" (teacher knows) is a...', o: ['referential question', 'display question', 'CCQ', 'ICQ'], a: 1, why: 'The answer is already known to the teacher.' },
    { q: 'Wait time means...', o: ['time before class', 'pausing after a question to let learners think', 'homework time', 'break time'], a: 1, why: 'Longer wait time leads to fuller answers.' }
  ] },

{ id: 'autonomy-differentiation', area: 'method', title: 'Learner training, differentiation and mixed ability',
  one: 'Every class is mixed. Differentiate by task, support and outcome, and train learners to manage their own learning.',
  quals: ['Delta M2', 'Delta M3', 'DipTESOL U4'],
  predict: { q: 'Three students finish early and two are lost. What can you plan in advance?', a: 'Extension tasks for fast finishers and support (frames, examples, partner help) for others. This is **differentiation** by task and support.' },
  explain: [
    '**Differentiation** can be by **task** (different tasks), **support** (scaffolding, frames, glossaries), **outcome** (same task, different expected outcomes), **grouping** and **time**.',
    '**Learner training** develops strategies and awareness: how to keep vocabulary records, how to self-assess, how to use AI and dictionaries well.',
    '**Mixed-ability** includes level, speed, motivation, confidence and background. Planning for it is part of lesson design, not a reaction during class.'
  ],
  kid: 'A good PE teacher sets the high jump bar at different heights so everyone can jump and still be challenged.',
  viz: { type: 'quad', cap: 'Ways to differentiate', items: [['Task', 'different tasks for different groups'], ['Support', 'frames, models, glossaries'], ['Outcome', 'same task, different targets'], ['Grouping', 'mixed or similar levels, roles']] },
  points: [
    'Differentiate by **task, support, outcome, grouping, time**.',
    '**Fast finisher** tasks should extend, not just add more of the same.',
    '**Learner training**: strategies, reflection, self-assessment.',
    '**Autonomy** grows through choice and responsibility.',
    'Mixed ability is about more than level.',
    'Plan differentiation in the lesson plan with specific ideas.'
  ],
  classroom: [
    'Writing task: weaker students get a paragraph frame, stronger students must include two hedging devices and a counter-argument.',
    'AI as a learning partner: train students to ask AI to quiz them rather than to write for them.'
  ],
  exam: [
    ['Delta M2', 'Lesson plans should show anticipated differences and how you will respond.'],
    ['Delta M3', 'Course design must address learner differences found in the needs analysis.']
  ],
  confuse: 'Differentiation does not mean planning a separate lesson for every learner. A few well-designed options are enough.',
  names: ['Tomlinson (C. A.)', 'Prodromou (mixed ability)', 'Ellis and Sinclair (learner training)'],
  quiz: [
    { q: 'Giving a paragraph frame to some learners is differentiation by...', o: ['outcome', 'support', 'time', 'grouping'], a: 1, why: 'Extra scaffolding.' },
    { q: 'A good fast-finisher task...', o: ['repeats the same exercise', 'extends thinking or language', 'is free time', 'is homework'], a: 1, why: 'It should add challenge.' }
  ] },

{ id: 'technology', area: 'method', title: 'Technology, online and blended learning',
  one: 'Technology helps when it adds something real to learning. Frameworks like SAMR help you judge that.',
  quals: ['Delta M3', 'Delta M2', 'DipTESOL U2'],
  predict: { q: 'Is putting a worksheet into a PDF "using technology"?', a: 'Technically yes, but it is only **substitution** (SAMR). The learning is the same. Real value comes when technology changes or enables new tasks.' },
  explain: [
    '**SAMR** (Puentedura): **Substitution**, **Augmentation**, **Modification**, **Redefinition**. The higher levels transform learning tasks.',
    '**Blended learning** combines face-to-face and online work. **Flipped learning** moves input outside class and practice inside. **Online teaching** needs clear routines, interaction design and attention to cognitive load.',
    '**AI tools** can generate practice, give feedback and simulate conversations, but raise issues of accuracy, dependence, academic integrity and assessment validity.'
  ],
  kid: 'A pencil and a tablet can both draw. The question is: can the tablet do something the pencil can\'t?',
  viz: { type: 'layers', cap: 'SAMR', items: [['Substitution', 'same task, digital tool'], ['Augmentation', 'small improvement'], ['Modification', 'task redesigned'], ['Redefinition', 'new task, impossible before']] },
  points: [
    '**SAMR** for evaluating tech use.',
    '**Blended** and **flipped** models.',
    '**Online interaction**: breakout rooms, chat, collaborative documents.',
    '**AI**: practice and feedback partner, not a replacement for learner effort.',
    '**Digital literacy** for learners and teachers.',
    'Evaluate tools by learning value, not novelty.'
  ],
  classroom: [
    'Redefinition: your EAP students record a 2-minute podcast on a health topic for real listeners and get comments from another class.',
    'AI quizmaster: students paste their notes and ask AI to question them one item at a time.'
  ],
  exam: [
    ['Delta M3', 'An online or blended learning specialism is possible; needs analysis should include learners\' access and digital skills.'],
    ['Delta M2', 'A PDA experimental practice can test a technology-supported technique.']
  ],
  confuse: 'Engagement with a tool is not proof of learning. Collect evidence of language improvement.',
  names: ['Puentedura (SAMR)', 'Dudeney, Hockly and Pegrum', 'Sharma and Barrett'],
  quiz: [
    { q: 'In SAMR, a task that would be impossible without technology is...', o: ['substitution', 'augmentation', 'modification', 'redefinition'], a: 3, why: 'Redefinition creates new tasks.' },
    { q: 'Flipped learning moves...', o: ['practice outside class', 'input outside class and practice inside', 'tests online', 'grammar out'], a: 1, why: 'Learners study input before class.' }
  ] }
];

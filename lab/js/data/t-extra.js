// Extra syllabus topics added in version 2
export const EXTRA = [
/* ===================== GRAMMAR ===================== */
{ id: 'sentence-grammar', area: 'grammar', title: `Word classes, phrases and clause elements`,
  one: `The basic labels you need to analyse any sentence: word classes, phrases and the clause elements S, V, O, C and A.`,
  quals: ['Delta M1', 'DipTESOL U1'],
  predict: { q: `In "The nurse gave the patient a leaflet yesterday", what is "the patient"?`, a: `The **indirect object** (Oi). "A leaflet" is the direct object (Od) and "yesterday" is an adverbial (A).` },
  explain: [
    `**Word classes** split into open classes (noun, verb, adjective, adverb), which accept new words, and closed classes (determiner, pronoun, preposition, conjunction, auxiliary), which rarely change.`,
    `Words group into **phrases** built around a head: noun phrase ("the tired nurse"), verb phrase ("has been working"), adjective phrase ("very tired"), adverb phrase ("quite slowly") and prepositional phrase ("in the ward").`,
    `Phrases play roles in the clause: **Subject, Verb, Object, Complement, Adverbial**. Quirk and colleagues describe seven basic patterns: SV, SVO, SVC, SVA, SVOO, SVOC and SVOA. A **simple** sentence has one clause, a **compound** sentence joins clauses with "and, but, or", and a **complex** sentence has a subordinate clause.`
  ],
  kid: `Words are Lego bricks. Phrases are small models. The clause is the full scene, and each model has a job: who does it, what happens, to whom, where and when.`,
  viz: { type: 'flow', cap: 'Clause elements in one sentence', steps: [['S', 'The nurse'], ['V', 'gave'], ['Oi', 'the patient'], ['Od', 'a leaflet'], ['A', 'yesterday']] },
  points: [
    `**Open vs closed** word classes.`,
    `**Phrases** have heads: NP, VP, AdjP, AdvP, PP.`,
    `**Clause elements**: S, V, O (direct and indirect), C (subject and object complement), A.`,
    `Seven basic clause patterns (Quirk et al. 1985).`,
    `**Simple, compound, complex** sentences; **finite vs non-finite** clauses ("to finish early" has no tense).`,
    `Subordinate clauses can be **nominal, relative or adverbial**.`
  ],
  classroom: [
    `EAP learners write "Because the cost was high. The project stopped." Showing them that an adverbial clause cannot stand alone fixes the fragment fast.`,
    `Give learners a long academic sentence and ask them to find the main verb first. Suddenly the sentence becomes readable.`
  ],
  exam: [
    ['Delta M1', `Paper 1 Task 3 and Task 5 reward precise labels: "an adverbial clause of reason" scores, "a because sentence" does not.`],
    ['DipTESOL U1', `Language analysis questions expect correct metalanguage for word class and clause function.`]
  ],
  confuse: `Object vs complement. In "She met a doctor", "a doctor" is a different person: object. In "She became a doctor", it describes the subject: subject complement.`,
  names: ['Quirk et al.', 'Biber et al.', 'Parrott'],
  quiz: [
    { q: `In "They elected her chair", "chair" is...`, o: ['a direct object', 'an object complement', 'an adverbial', 'an indirect object'], a: 1, why: `It describes the object "her": SVOC.` },
    { q: `Which is a closed word class?`, o: ['Nouns', 'Adjectives', 'Prepositions', 'Verbs'], a: 2, why: `New prepositions almost never enter the language.` },
    { q: `"Although she was tired, she finished the shift" is...`, o: ['simple', 'compound', 'complex', 'a fragment'], a: 2, why: `It has a subordinate (adverbial) clause.` }
  ] },

{ id: 'emphasis', area: 'grammar', title: `Emphasis: cleft sentences, fronting and inversion`,
  one: `English moves information around to highlight it: cleft sentences, fronting, negative inversion and emphatic "do".`,
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M2'],
  predict: { q: `Why say "What I need is a holiday" instead of "I need a holiday"?`, a: `It is a **wh-cleft**. It builds suspense and puts "a holiday" in the focus position at the end, where English places new and important information.` },
  explain: [
    `English likes **end-focus**: new information comes last. Speakers rearrange clauses to control what is in focus.`,
    `**It-clefts** focus one element: "It was Ali who called." **Wh-clefts** (pseudo-clefts) delay the focus: "What surprised me was the price." **Fronting** moves an element to the start: "This I cannot accept."`,
    `**Inversion** after negative or limiting adverbials is formal and emphatic: "Never have I seen...", "Not only did she..., but...", "Hardly had we arrived when...". **Conditional inversion** drops "if": "Had I known...", "Should you need help...". In speech, emphatic **do** ("I do like it") and stress do the same job.`
  ],
  kid: `Imagine a spotlight on a stage. Clefts, fronting and inversion move the actors so the spotlight lands on the one you want.`,
  viz: { type: 'compare', cap: 'Neutral vs emphatic', a: { t: 'Neutral', items: ['I need a holiday.', 'Ali called.', 'I have never seen this.', 'If I had known...'] }, b: { t: 'Emphatic', items: ['What I need is a holiday.', 'It was Ali who called.', 'Never have I seen this.', 'Had I known...'] } },
  points: [
    `**End-focus** and **end-weight** (Quirk et al.).`,
    `**It-cleft**: It + be + focus + who or that clause.`,
    `**Wh-cleft**: What + clause + be + focus.`,
    `**Fronting** for contrast or linking.`,
    `**Negative inversion** after never, rarely, not only, hardly, no sooner, under no circumstances.`,
    `**Conditional inversion**: had, should, were.`
  ],
  classroom: [
    `Advanced class: students rewrite a flat complaint email ("The delivery was late") with clefts ("What really frustrated us was..."). They feel the persuasive power at once.`,
    `For speaking, drill the stress: "I DID send it!" contrasts with "I sent it".`
  ],
  exam: [
    ['Delta M1', `Paper 1 Task 5 texts often contain clefts or inversion. Name the form and its function (focus, contrast, formality).`],
    ['Delta M2', `A C1 systems LSA on "emphasis and focus" is a strong choice: clear form, clear meaning, real communicative value.`]
  ],
  confuse: `Inversion here is subject-auxiliary inversion, as in questions. It is not a question: "Never have I seen..." is a statement.`,
  names: ['Quirk et al.', 'Halliday', 'Swan'],
  quiz: [
    { q: `"It was the price that shocked me" is...`, o: ['a wh-cleft', 'an it-cleft', 'fronting', 'inversion'], a: 1, why: `It + be + focus + that clause.` },
    { q: `Which needs inversion?`, o: ['Usually...', 'Not only...', 'Although...', 'Because...'], a: 1, why: `"Not only did they..." Negative and limiting adverbials trigger inversion.` }
  ] },

{ id: 'spoken-grammar', area: 'grammar', title: `Spoken grammar`,
  one: `Corpus research shows that speech has its own grammar: heads, tails, ellipsis, vague language and discourse markers are normal, not mistakes.`,
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M2', 'DipTESOL U3'],
  predict: { q: `"That teacher, she's amazing." Is this an error?`, a: `No. It is a **head** (a topic placed before the clause). Corpus studies by **Carter and McCarthy** show it is common in fluent speech.` },
  explain: [
    `Speech is built in real time, so it looks different from writing. The CANCODE corpus work of **Carter and McCarthy** described features that written grammars ignored.`,
    `**Heads** put the topic first ("That restaurant, is it still open?"). **Tails** add a comment at the end ("It's lovely, that cake"). **Situational ellipsis** drops what is obvious ("Sounds good", "Want a coffee?").`,
    `**Vague language** ("and stuff", "sort of", "around ten") keeps talk friendly. **Discourse markers** (well, right, anyway, I mean) manage the conversation, and **backchannels** (mm, yeah, really?) show listening. Speakers chain clauses with "and" and "so" rather than build long subordinate structures.`
  ],
  kid: `Writing is like a planned speech. Talking is like jazz: you make it up as you go, so it has its own rules.`,
  viz: { type: 'quad', cap: 'Four common spoken features', items: [['Heads', 'That film, it was brilliant'], ['Tails', 'He is clever, your brother'], ['Ellipsis', 'Seen it? Yeah, loved it'], ['Vague language', 'sort of, and stuff, ish']] },
  points: [
    `**Heads** and **tails**.`,
    `**Situational ellipsis** of subjects and auxiliaries.`,
    `**Vague language** and **hedges**.`,
    `**Discourse markers** and **backchannels**.`,
    `**Add-on** clause chaining instead of heavy subordination.`,
    `Coursebook dialogues are often scripted and miss these features.`
  ],
  classroom: [
    `Play a short authentic conversation and give learners a scripted coursebook version of the same exchange. They list what is missing in the scripted one: "well", "you know", tails, ellipsis.`,
    `Speaking practice: learners add one head and one tail to their weekend story. It sounds more natural at once.`
  ],
  exam: [
    ['Delta M1', `Paper 1 Task 5 can use a transcript. Identify spoken features and their functions.`],
    ['Delta M2', `A speaking LSA can target discourse markers or spoken grammar for fluency.`],
    ['DipTESOL U3', `Features of connected speech and spoken discourse support your phonology discussion.`]
  ],
  confuse: `Spoken grammar is not "wrong grammar". It is standard in speech. The question is whether learners need to use it or only understand it.`,
  names: ['Carter and McCarthy', 'Biber et al.', 'Thornbury and Slade'],
  quiz: [
    { q: `"Lovely place, this" contains...`, o: ['a head', 'a tail', 'inversion', 'a cleft'], a: 1, why: `"this" comes at the end as a tail.` },
    { q: `Which corpus project is linked to Carter and McCarthy?`, o: ['BNC', 'CANCODE', 'COCA', 'Brown'], a: 1, why: `The Cambridge and Nottingham Corpus of Discourse in English.` }
  ] },

/* ===================== LEXIS ===================== */
{ id: 'corpus-frequency', area: 'lexis', title: `Corpora, frequency and word lists`,
  one: `Corpora show how words really behave, and frequency lists tell you which words learners need first.`,
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1'],
  predict: { q: `How many word families does a learner need to read an authentic novel comfortably?`, a: `About **8,000 to 9,000 word families** to know 98% of the words (Nation 2006). Spoken English needs about 6,000 to 7,000.` },
  explain: [
    `A **corpus** is a large, principled collection of real texts stored on computer. **Concordance lines** show a word in many contexts, which reveals collocation, **colligation** (grammatical company) and **semantic prosody** (for example, "cause" usually goes with bad things).`,
    `Frequency matters. The first 2,000 word families cover around 80% of ordinary written text (West's General Service List, 1953). **Coxhead's Academic Word List** (2000) has 570 families that cover about 10% of academic texts.`,
    `For reading without a dictionary, learners need about **98% coverage** (Hu and Nation 2000). **Sinclair** showed that speakers rely on the **idiom principle**: they use ready-made chunks far more than free word-by-word choice.`
  ],
  kid: `A corpus is like a giant library you can search in a second. It tells you which words people really use most, so you learn those first.`,
  viz: { type: 'layers', cap: 'Vocabulary coverage', items: [['First 1,000 families', 'the everyday core'], ['Second 1,000', 'about 80% together'], ['Academic Word List', 'about 10% of academic text'], ['Technical and low-frequency', 'subject-specific words']] },
  points: [
    `**Corpus** and **concordance**.`,
    `**Collocation, colligation, semantic prosody**.`,
    `**Frequency**: high-frequency words first (West 1953).`,
    `**AWL**: 570 families, about 10% of academic text (Coxhead 2000).`,
    `**98% coverage** for comfortable reading (Hu and Nation 2000).`,
    `**Idiom principle** vs open-choice principle (Sinclair 1991).`
  ],
  classroom: [
    `Your Al Maarifa EAP students check their essay vocabulary against the AWL with a free online profiler and set themselves ten target words a week.`,
    `Show eight concordance lines for "make" and "do". Learners work out the patterns themselves: make a decision, do research.`
  ],
  exam: [
    ['Delta M1', `Terms: **concordance**, **semantic prosody**, **colligation**, **lexical density**.`],
    ['Delta M3', `Corpus tools and word lists give your EAP course design evidence for selecting vocabulary.`],
    ['DipTESOL U1', `Essays on vocabulary selection should cite frequency research.`]
  ],
  confuse: `"Word" can mean a word form, a lemma (go, goes, went) or a word family (develop, development, developer). Always check which unit a study counts.`,
  names: ['Sinclair', 'West', 'Coxhead', 'Nation', 'Hu and Nation'],
  quiz: [
    { q: `The Academic Word List contains...`, o: ['2,000 words', '570 word families', '10,000 lemmas', '100 phrases'], a: 1, why: `Coxhead (2000).` },
    { q: `"Cause" tends to go with negative things. This is...`, o: ['colligation', 'semantic prosody', 'polysemy', 'hyponymy'], a: 1, why: `The word carries an evaluative "aura" from its usual context.` }
  ] },

/* ===================== PHONOLOGY ===================== */
{ id: 'transcription', area: 'phonology', title: `Phonemic transcription in practice`,
  one: `How to transcribe natural speech accurately: conventions, stress marks, weak forms, endings and the usual traps.`,
  quals: ['DipTESOL U3', 'Delta M1', 'Delta M2'],
  predict: { q: `How many syllables does "comfortable" have in natural speech? Transcribe it.`, a: `Usually three: /ˈkʌmftəbl/. Transcribe the sound, not the spelling.` },
  explain: [
    `Use **slashes** for phonemic transcription (/kæt/) and **square brackets** for phonetic detail ([kʰæt]). Put the stress mark **ˈ** before the stressed syllable and the length mark **ː** on long vowels.`,
    `Transcribe what is said. Silent letters disappear ("listen" /ˈlɪsn/), "th" is /θ/ or /ð/, and unstressed function words usually take **weak forms**: "to" /tə/, "of" /əv/, "can" /kən/.`,
    `Watch the endings. Past "-ed" is /t/ after voiceless sounds ("washed" /wɒʃt/), /d/ after voiced sounds ("played" /pleɪd/) and /ɪd/ after t or d ("wanted"). Plural and third-person "-s" is /s/, /z/ or /ɪz/ by the same logic.`
  ],
  kid: `Transcription is like writing a secret code for sounds. You write exactly what your ears hear, not what your eyes see.`,
  viz: { type: 'flow', cap: 'A safe transcription routine', steps: [['Say it', 'naturally, aloud'], ['Count syllables', 'mark the stress'], ['Consonants', 'voicing, endings'], ['Vowels', 'long, short, diphthong'], ['Weak forms', 'schwa in unstressed words']] },
  points: [
    `Slashes for phonemes, brackets for phonetic detail.`,
    `Stress mark ˈ before the stressed syllable; ˌ for secondary stress.`,
    `**Weak forms** with /ə/ in unstressed function words.`,
    `**-ed** endings: /t/, /d/, /ɪd/.`,
    `**-s** endings: /s/, /z/, /ɪz/.`,
    `**Syllabic consonants**: "bottle" /ˈbɒtl/, "button" /ˈbʌtn/.`
  ],
  classroom: [
    `Write "washed, played, wanted" on the board. Learners hold their throats to feel voicing and sort the endings into three columns.`,
    `Phonemic chart race: learners point to the sounds of a mystery word for a partner to guess.`
  ],
  exam: [
    ['DipTESOL U3', `The phonology interview expects confident, accurate use of phonemic script. Check the current Trinity specification for the exact tasks.`],
    ['Delta M1', `Paper 1 Task 5 asks about pronunciation features of text items. Accurate transcription earns the marks.`],
    ['Delta M2', `LSA plans should give the phonemic form of target items and predict pronunciation problems.`]
  ],
  confuse: `British models (e.g. RP) are non-rhotic: "car" is /kɑː/. Many American speakers say the r. State which model you use and stay consistent.`,
  names: ['Roach', 'Underhill', 'Wells'],
  quiz: [
    { q: `The final sound of "washed" is...`, o: ['/d/', '/t/', '/ɪd/', '/ed/'], a: 1, why: `/ʃ/ is voiceless, so the ending is /t/.` },
    { q: `Which shows primary stress correctly?`, o: ['/fəˈtɒɡrəfə/', '/ˈfətɒɡrəfə/', '/fətɒɡˈrəfə/', '/fətɒɡrəˈfə/'], a: 0, why: `"photographer": stress on the second syllable.` }
  ] },

{ id: 'accents-elf', area: 'phonology', title: `Accents, intelligibility and English as a Lingua Franca`,
  one: `Most English conversations happen between non-native speakers. The goal is being understood, not sounding like a native speaker.`,
  quals: ['DipTESOL U3', 'Delta M1', 'DipTESOL U1'],
  predict: { q: `For international intelligibility, which matters more: the "th" sound or the difference between long and short vowels?`, a: `Vowel length. In **Jenkins's Lingua Franca Core**, vowel length contrasts are core, while /θ/ and /ð/ are not.` },
  explain: [
    `**Levis** (2005) contrasted two principles: the **nativeness principle** (sound like a native speaker) and the **intelligibility principle** (be understood). Most current research supports the second.`,
    `**Munro and Derwing** (1995) showed that **accentedness**, **comprehensibility** (how easy you are to understand) and **intelligibility** (how much is actually understood) are partly independent. A strong accent can be fully intelligible.`,
    `**Jenkins** (2000) proposed the **Lingua Franca Core**: features that matter for understanding between non-native speakers, such as most consonants, word-initial consonant clusters, vowel length contrasts and nuclear (tonic) stress. Weak forms, some vowel qualities and the "th" sounds are less critical.`
  ],
  kid: `The aim is not to copy the Queen or a Hollywood actor. The aim is that people around the world understand you easily.`,
  viz: { type: 'compare', cap: 'Lingua Franca Core (simplified)', a: { t: 'Core: teach and practise', items: ['Most consonants', 'Initial clusters (street, spring)', 'Long vs short vowels', 'Nuclear stress placement'] }, b: { t: 'Less critical for ELF', items: ['th sounds', 'Weak forms', 'Exact vowel quality', 'Pitch movement details'] } },
  points: [
    `**Nativeness vs intelligibility** principle (Levis 2005).`,
    `**Accentedness, comprehensibility, intelligibility** (Munro and Derwing 1995).`,
    `**Lingua Franca Core** (Jenkins 2000).`,
    `Learners still need to **understand** native-speaker features such as weak forms.`,
    `Prioritise features that cause breakdowns for your learners.`,
    `Teacher accents: a clear non-native model is a valid model.`
  ],
  classroom: [
    `For Saudi learners, /p/ vs /b/ ("park" vs "bark") causes real breakdowns, so it gets priority over perfect "th".`,
    `Use recordings of Indian, Nigerian, Spanish and Chinese speakers of English for listening, not only British and American voices.`
  ],
  exam: [
    ['DipTESOL U3', `Be ready to discuss which model you teach and why, with reference to intelligibility.`],
    ['Delta M1', `Terms: **Lingua Franca Core**, **intelligibility**, **comprehensibility**, **accent**.`],
    ['DipTESOL U1', `Essays on pronunciation goals should weigh native models against ELF.`]
  ],
  confuse: `ELF does not mean "anything goes". It means choosing priorities based on what actually blocks understanding.`,
  names: ['Jenkins', 'Levis', 'Munro and Derwing', 'Walker'],
  quiz: [
    { q: `"How easy it is to understand a speaker" is called...`, o: ['intelligibility', 'comprehensibility', 'accentedness', 'fluency'], a: 1, why: `Munro and Derwing separate ease (comprehensibility) from actual understanding (intelligibility).` },
    { q: `Which is part of the Lingua Franca Core?`, o: ['/θ/ and /ð/', 'Weak forms', 'Vowel length contrasts', 'Tag question intonation'], a: 2, why: `Jenkins found length contrasts essential for understanding.` }
  ] },

/* ===================== DISCOURSE ===================== */
{ id: 'academic-style', area: 'discourse', title: `Academic style: nominalisation, hedging and stance`,
  one: `Academic English packs processes into nouns, softens claims with hedges and shows the writer's stance towards sources.`,
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1'],
  predict: { q: `Compare "Prices rose, so people bought less" with "The rise in prices led to a fall in demand." What changed?`, a: `**Nominalisation**: the verbs "rose" and "bought less" became nouns ("rise", "fall in demand"). The sentence is denser and more abstract, typical of academic writing.` },
  explain: [
    `**Halliday** called this **grammatical metaphor**: processes expressed as things. It raises **lexical density** (content words per clause) and lets writers build arguments about abstract concepts.`,
    `**Hedging** softens claims to show caution and respect for evidence: "may", "appears to", "tends to", "it is likely that". **Boosters** show certainty: "clearly", "it is evident that". **Hyland** describes these as part of **metadiscourse** and **stance**.`,
    `**Reporting verbs** show your attitude to sources: "argues", "claims", "suggests", "demonstrates". **Swales** described the moves of research introductions in his **CARS** model: establish a territory, establish a niche, occupy the niche.`
  ],
  kid: `Academic writing is like a careful scientist talking. It turns actions into things you can discuss, and it never shouts "this is 100% true" without proof.`,
  viz: { type: 'scale', cap: 'From certain to cautious', from: 'Booster', to: 'Strong hedge', items: [[5, 'clearly shows'], [30, 'shows'], [55, 'suggests'], [78, 'may indicate'], [96, 'it is possible that']] },
  points: [
    `**Nominalisation** and **grammatical metaphor** (Halliday).`,
    `**Lexical density** is higher in writing.`,
    `**Hedges** and **boosters** (Hyland).`,
    `**Reporting verbs** signal stance.`,
    `**CARS model** for introductions (Swales 1990).`,
    `Impersonal structures: "It has been argued that..."`
  ],
  classroom: [
    `Pre-sessional class: learners turn five verb-heavy sentences from their essays into nominalised ones, then check that the meaning is still clear.`,
    `Give learners an over-confident paragraph ("This proves that social media causes depression") and ask them to hedge it to an academic level.`
  ],
  exam: [
    ['Delta M1', `Paper 1 Task 5 academic texts: identify nominalisation, hedging and their functions.`],
    ['Delta M3', `An EAP Module 3 course must address academic style explicitly in its aims.`],
    ['DipTESOL U1', `Write your own essays with appropriate hedging: examiners notice over-claiming.`]
  ],
  confuse: `Hedging is not weakness or vagueness. It is precision about how strong your evidence is.`,
  names: ['Halliday', 'Hyland', 'Swales'],
  quiz: [
    { q: `"The implementation of the policy" is an example of...`, o: ['ellipsis', 'nominalisation', 'a cleft', 'a tail'], a: 1, why: `"implement" became the noun "implementation".` },
    { q: `CARS stands for...`, o: ['Create A Research Space', 'Content And Research Structure', 'Critical Academic Reading Skills', 'Citation And Reference Style'], a: 0, why: `Swales (1990).` }
  ] },

/* ===================== SKILLS ===================== */
{ id: 'extensive-reading', area: 'skills', title: `Extensive reading and listening`,
  one: `Reading and listening to large amounts of easy, enjoyable material builds fluency, vocabulary and motivation.`,
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M2', 'Delta M3'],
  predict: { q: `Should graded readers be above, at or below the learner's level?`, a: `At or slightly below. Learners should know about **98% of the words**, so they can read fast and for pleasure.` },
  explain: [
    `**Intensive reading** studies a short text closely. **Extensive reading** means reading a lot of easy material for general meaning and enjoyment.`,
    `**Day and Bamford** set out principles: easy material, wide variety, learners choose what they read, read as much as possible, read for pleasure, reading is its own reward, read fast, read individually and silently, the teacher guides and the teacher reads too.`,
    `Benefits include incidental vocabulary growth, reading speed and confidence (Nation and Waring 2020). The same logic applies to **extensive listening**: podcasts, audiobooks and series at a comfortable level.`
  ],
  kid: `You get good at football by playing lots of easy matches, not by studying one match for an hour. Reading lots of easy books works the same way.`,
  viz: { type: 'compare', cap: 'Intensive vs extensive', a: { t: 'Intensive', items: ['Short, challenging text', 'Teacher chooses', 'Detailed tasks', 'Accuracy of understanding'] }, b: { t: 'Extensive', items: ['Lots of easy texts', 'Learner chooses', 'Few or no tasks', 'Fluency and enjoyment'] } },
  points: [
    `**Day and Bamford's** principles (1998, 2002).`,
    `**98% coverage** for comfortable reading.`,
    `**Graded readers** and levelled libraries.`,
    `Incidental vocabulary gains need **lots** of input.`,
    `**Extensive listening** follows the same principles.`,
    `Light accountability: reading logs, short oral reviews, not tests.`
  ],
  classroom: [
    `A ten-minute "book box" slot at the start of each lesson: everyone reads, including you. Students log pages and give a 30-second "would you recommend it?" talk on Fridays.`,
    `IELTS learners pick one podcast at their level and listen for 15 minutes daily, noting three useful phrases.`
  ],
  exam: [
    ['Delta M2', `An experimental practice on extensive reading is easy to set up and evaluate.`],
    ['Delta M3', `Build an extensive component into course design and show how you will monitor it.`],
    ['Delta M1', `Terms: **extensive reading**, **graded reader**, **intensive reading**.`]
  ],
  confuse: `Extensive reading is not "homework reading with comprehension questions". Tasks that feel like tests kill the pleasure that drives it.`,
  names: ['Day and Bamford', 'Krashen', 'Nation and Waring'],
  quiz: [
    { q: `In extensive reading, who chooses the books?`, o: ['The teacher', 'The learners', 'The school', 'The examiner'], a: 1, why: `Learner choice is a core principle.` },
    { q: `Extensive reading mainly builds...`, o: ['accuracy in detail', 'fluency and vocabulary', 'test technique', 'spelling only'], a: 1, why: `Large amounts of easy input.` }
  ] },

/* ===================== LEARNERS ===================== */
{ id: 'usage-based', area: 'learners', title: `Usage-based, cognitive and complexity views`,
  one: `Newer theories see language as learned from exposure to real usage: frequency, chunks and patterns, developing in a non-linear way.`,
  quals: ['Delta M1', 'DipTESOL U1'],
  predict: { q: `A learner says "I don't know" perfectly but writes "He don't like it". Why?`, a: `They probably learned "I don't know" as a **chunk** from frequent exposure, before analysing "don't" as a separate form.` },
  explain: [
    `**Usage-based** approaches (N. Ellis, Tomasello) say we learn language from many exemplars. **Frequency**, **salience** and **contingency** decide what gets learned first.`,
    `Learners often start with **formulaic sequences** ("Can I have...?", "I don't know") and gradually analyse them into patterns (**Wray**). This links to the Lexical Approach.`,
    `**Complex Dynamic Systems Theory** (**Larsen-Freeman**) sees development as non-linear and variable: learners improve, slip back and leap forward. **Input processing** (**VanPatten**) shows learners first attend to meaning, so form needs help to be noticed.`
  ],
  kid: `You learn songs by hearing them many times, not by studying music theory first. Later you notice how the patterns work.`,
  viz: { type: 'flow', cap: 'Usage-based development', steps: [['Exposure', 'many examples'], ['Chunks', 'learned whole'], ['Patterns', 'Can I + verb?'], ['Analysis', 'rules emerge'], ['Creativity', 'new sentences']] },
  points: [
    `**Frequency, salience, contingency** drive learning (N. Ellis 2002).`,
    `**Construction grammar**: form-meaning pairings (Tomasello 2003).`,
    `**Formulaic sequences** first, analysis later (Wray 2002).`,
    `**Non-linear** development, variability and backsliding (Larsen-Freeman).`,
    `**Input processing**: meaning before form (VanPatten).`,
    `Implications: lots of meaningful input, chunk teaching, recycling.`
  ],
  classroom: [
    `Instead of teaching "would" as a rule, teach frequent frames: "Would you like...?", "I'd rather...", "It would be great if...". Learners use them at once, then you analyse.`,
    `When a strong learner suddenly makes "old" errors in a demanding task, do not panic: variability is normal under pressure.`
  ],
  exam: [
    ['Delta M1', `Terms: **formulaic sequence**, **frequency effects**, **U-shaped learning**.`],
    ['DipTESOL U1', `Compare usage-based views with Krashen and Universal Grammar in an essay on acquisition.`]
  ],
  confuse: `Usage-based does not mean "no teaching". Frequency alone is not enough for low-salience forms like the third-person "-s"; learners need help to notice them.`,
  names: ['N. Ellis', 'Tomasello', 'Wray', 'Larsen-Freeman', 'VanPatten'],
  quiz: [
    { q: `"I don't know" learned as one unit is a...`, o: ['fossilised error', 'formulaic sequence', 'false friend', 'phoneme'], a: 1, why: `A prefabricated chunk.` },
    { q: `Complex Dynamic Systems Theory says development is...`, o: ['linear and predictable', 'non-linear and variable', 'fixed by age 7', 'only through drills'], a: 1, why: `Larsen-Freeman.` }
  ] },

{ id: 'l1-translanguaging', area: 'learners', title: `The L1, multilingual learners and translanguaging`,
  one: `Learners' first language is a resource as well as a source of interference. Principled L1 use can support learning.`,
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M2', 'Delta M3'],
  predict: { q: `Should you ban Arabic completely in your EAP classroom?`, a: `Research does not support a total ban. **Principled, purposeful L1 use** can help, while most classroom time stays in English (Cook 2001; Hall and Cook 2012).` },
  explain: [
    `The **monolingual principle** came from the Direct Method and later from beliefs about maximising input. **Cook** argued that L2 users have **multi-competence** and should not be judged as failed native speakers.`,
    `Useful L1 functions: checking meaning of abstract words, explaining complex grammar quickly, comparing L1 and L2 to raise awareness, task planning, rapport and reducing anxiety.`,
    `**Translanguaging** (**García and Li Wei**) sees bilinguals drawing on one integrated repertoire. **Transfer** can be positive (shared features) or negative (interference), as **Odlin** showed. The risk of overusing L1 is less English input and output.`
  ],
  kid: `Your first language is like a map you already own. You can use it to find your way in the new city, but you still need to walk the new streets.`,
  viz: { type: 'scale', cap: 'From ban to free use', from: 'English only', to: 'Mostly L1', items: [[8, 'Strict ban'], [35, 'Principled L1 moments'], [62, 'Planned bilingual tasks'], [92, 'Mostly L1 (risky)']] },
  points: [
    `**Monolingual principle** and its critics.`,
    `**Multi-competence** (Cook 1991, 2001).`,
    `Principled L1 functions: meaning, grammar comparison, planning, rapport.`,
    `**Translanguaging** (García and Li Wei 2014).`,
    `**Positive and negative transfer** (Odlin 1989).`,
    `Keep L1 use purposeful and limited.`
  ],
  classroom: [
    `When "mitigate" will not land after two examples, a quick Arabic equivalent saves five minutes. Then you return to English and practise it.`,
    `Contrastive awareness: learners compare an Arabic relative clause with the English one to see why they write "the book that I read it".`
  ],
  exam: [
    ['Delta M1', `Terms: **L1 transfer**, **interference**, **multi-competence**, **translanguaging**.`],
    ['Delta M2', `A PDA experiment on purposeful L1 use in a monolingual class is practical and measurable.`],
    ['Delta M3', `For a monolingual Saudi group, justify your L1 policy in the course proposal.`]
  ],
  confuse: `Allowing L1 is not the same as teaching in L1. The issue is purpose and proportion.`,
  names: ['Cook', 'Hall and Cook', 'García and Li Wei', 'Odlin'],
  quiz: [
    { q: `"L2 users are not failed natives" summarises...`, o: ['Behaviourism', 'Multi-competence', 'The Monitor Model', 'Contrastive analysis'], a: 1, why: `Vivian Cook.` },
    { q: `Which L1 use is most widely accepted?`, o: ['Teaching whole lessons in L1', 'Quickly clarifying an abstract word', 'Translating every sentence', 'Speaking L1 to discipline only'], a: 1, why: `Short, purposeful clarification saves time.` }
  ] },

/* ===================== METHODOLOGY ===================== */
{ id: 'lesson-planning', area: 'method', title: `Lesson planning: aims, problems and solutions`,
  one: `A diploma-level plan starts from the learners, states clear learning outcomes, predicts specific problems and solves them in advance.`,
  quals: ['Delta M2', 'DipTESOL U4', 'DipTESOL U2'],
  predict: { q: `"Students will practise the present perfect." Is this a strong main aim?`, a: `No. It describes an activity, not learning. Better: "By the end of the lesson, learners will be better able to use the present perfect to talk about life experiences in short spoken exchanges."` },
  explain: [
    `Start with the **learners**: level, needs, strengths, weaknesses, previous lessons. Then write a **main aim** as a learning outcome, plus **subsidiary aims** and a clear **stage aim** for every stage.`,
    `Predict **anticipated problems** specifically: meaning, form, pronunciation, skills, task and management. Each problem needs a matching **solution** you will actually use. "Students may find it difficult" is too vague.`,
    `Show **timetable fit** (how the lesson links to previous and next lessons), **assumptions** about what learners know, materials with sources, and a procedure with timings and interaction patterns. In the Delta LSA, link your plan to your background essay and to theory.`
  ],
  kid: `A good lesson plan is like a pilot's flight plan: where you are going, what weather might cause trouble, and what you will do if it does.`,
  viz: { type: 'flow', cap: 'The planning chain', steps: [['Learners', 'profile and needs'], ['Aims', 'main, subsidiary, stage'], ['Problems', 'specific predictions'], ['Solutions', 'ready to use'], ['Procedure', 'stages, timing, interaction'], ['Evaluation', 'did they achieve it?']] },
  points: [
    `**Learner profile** first.`,
    `**Main aim** as an observable learning outcome.`,
    `**Subsidiary** and **stage aims**.`,
    `**Anticipated problems** with matching **solutions**.`,
    `**Timetable fit** and **assumptions**.`,
    `Post-lesson **evaluation** against the aims.`
  ],
  classroom: [
    `Problem: Saudi learners may pronounce "practised" as /ˈpræktɪsɪd/. Solution: drill /ˈpræktɪst/ with backchaining and a visual of the /t/ ending.`,
    `Problem: the listening is fast. Solution: pre-teach three blocking words and give a first listen for gist with only two questions.`
  ],
  exam: [
    ['Delta M2', `LSA plans are assessed on aims, problems and solutions, procedure and rationale. Vague aims cost marks.`],
    ['DipTESOL U4', `Teaching practice plans need clear, achievable aims and justified staging.`],
    ['DipTESOL U2', `Your portfolio planning and evaluation tasks draw on the same skills.`]
  ],
  confuse: `An aim is what learners will be able to do or understand. A procedure is what they will do in the lesson. Do not mix them.`,
  names: ['Harmer', 'Scrivener', 'Woodward'],
  quiz: [
    { q: `Which is the best main aim?`, o: ['To do exercise 3', 'To practise the passive', 'Learners will be better able to describe a process using the present passive', 'To have fun with grammar'], a: 2, why: `Learner-centred, specific and checkable.` },
    { q: `"Students may find the grammar difficult" is weak because...`, o: ['it is too long', 'it is not specific', 'it is about pronunciation', 'it has a solution'], a: 1, why: `Name the exact problem: form, meaning or pronunciation.` }
  ] },

{ id: 'teacher-talk', area: 'method', title: `Teacher talk, questioning and elicitation`,
  one: `How teachers ask, wait, respond and shape learner contributions decides how much language learners actually produce.`,
  quals: ['Delta M2', 'DipTESOL U4', 'Delta M1', 'DipTESOL U1'],
  predict: { q: `What is the difference between "What's the past of go?" and "What did you do at the weekend?"`, a: `The first is a **display question** (the teacher knows the answer). The second is a **referential question** (a real question). Referential questions lead to longer, more natural answers (Long and Sato 1983).` },
  explain: [
    `**Sinclair and Coulthard** found the classic classroom exchange **IRF**: the teacher **Initiates**, the learner **Responds**, the teacher gives **Feedback**. It is efficient but can limit learner talk.`,
    `**Wait time** matters. When teachers wait three seconds or more after a question, answers get longer and more learners respond (**Rowe**).`,
    `**Walsh** describes **classroom interactional competence**: matching your talk to the stage. In a fluency stage, use referential questions, extend answers and reformulate instead of correcting every error. Teacher talk is about quality, not just less quantity.`
  ],
  kid: `A great teacher is like a good talk-show host: asks real questions, waits, and helps the guest say more.`,
  viz: { type: 'cycle', cap: 'The IRF exchange', steps: ['Initiation (teacher asks)', 'Response (learner answers)', 'Feedback (teacher evaluates or extends)'] },
  points: [
    `**IRF** (Sinclair and Coulthard 1975).`,
    `**Display vs referential** questions (Long and Sato 1983).`,
    `**Wait time** of three seconds or more (Rowe 1986).`,
    `**Classroom interactional competence** and SETT (Walsh 2011).`,
    `**Elicitation** before explanation.`,
    `Feedback move can extend, not just evaluate ("Why do you think so?").`
  ],
  classroom: [
    `Instead of "Good!" after a short answer, try "Interesting, why?" The student produces two more sentences.`,
    `Count silently to five after asking a question to your quiet Al Maarifa group. Different students start answering.`
  ],
  exam: [
    ['Delta M2', `Observers note teacher talk: echoing, over-explaining and IRF loops in fluency stages.`],
    ['DipTESOL U4', `Clear instructions and effective elicitation are assessed in observed lessons.`],
    ['Delta M1', `Terms: **IRF**, **display question**, **referential question**, **wait time**.`]
  ],
  confuse: `Reducing teacher talk time is not the goal by itself. Well-designed teacher talk (good questions, rich input) is valuable.`,
  names: ['Sinclair and Coulthard', 'Long and Sato', 'Walsh', 'Rowe'],
  quiz: [
    { q: `"Do you think online classes work? Why?" is...`, o: ['a display question', 'a referential question', 'a CCQ', 'an ICQ'], a: 1, why: `The teacher does not know the answer.` },
    { q: `IRF stands for...`, o: ['Input, Repetition, Fluency', 'Initiation, Response, Feedback', 'Instruction, Reading, Follow-up', 'Interaction, Reflection, Focus'], a: 1, why: `Sinclair and Coulthard.` }
  ] },

{ id: 'alt-methods', area: 'method', title: `Humanistic methods, Dogme and the postmethod condition`,
  one: `The "designer methods" of the 1970s, materials-light Dogme teaching, and the idea that teachers should build their own principled method.`,
  quals: ['Delta M1', 'DipTESOL U1', 'Delta M2'],
  predict: { q: `In the Silent Way, who talks the most?`, a: `The **learners**. The teacher stays mostly silent and uses rods and colour charts so learners work things out themselves (**Gattegno**).` },
  explain: [
    `**Humanistic methods** focused on the whole learner. **Silent Way** (Gattegno): teacher silence, Cuisenaire rods, colour charts. **Community Language Learning** (Curran): the teacher acts as counsellor and translator. **Suggestopedia** (Lozanov): relaxation and music lower anxiety. **Total Physical Response** (Asher): learners respond physically to commands before speaking.`,
    `**Dogme ELT** (**Thornbury**; Meddings and Thornbury) is conversation-driven and materials-light: language emerges from learners' talk and the teacher works with it.`,
    `**Prabhu** argued there is no best method. **Kumaravadivelu** described the **postmethod condition**: teachers build their own practice from principles of **particularity, practicality and possibility**, guided by macrostrategies.`
  ],
  kid: `Methods are like diets. Every few years a new one says it is the best. Postmethod says: know the science, know your learners, and design what works for them.`,
  viz: { type: 'timeline', cap: 'From designer methods to postmethod', items: [['1960s', 'Silent Way, TPR', 'Gattegno, Asher'], ['1970s', 'CLL, Suggestopedia', 'Curran, Lozanov'], ['1990', 'No best method', 'Prabhu'], ['1994', 'Postmethod', 'Kumaravadivelu'], ['2000', 'Dogme ELT', 'Thornbury']] },
  points: [
    `**Silent Way**, **CLL**, **Suggestopedia**, **TPR**: key features and founders.`,
    `**Dogme**: conversation-driven, materials-light, emergent language.`,
    `"There is no best method" (Prabhu 1990).`,
    `**Postmethod**: particularity, practicality, possibility (Kumaravadivelu).`,
    `**Principled eclecticism**.`,
    `Each method leaves useful techniques: TPR for young learners, rods for stress patterns.`
  ],
  classroom: [
    `TPR with KG3: "Touch your nose, jump, sit down" before any speaking.`,
    `A Dogme-style ten minutes: students share news, you board useful emergent language and recycle it the next day.`
  ],
  exam: [
    ['Delta M1', `Paper 2 can ask about the assumptions behind materials and methods. Know the principles of each method.`],
    ['DipTESOL U1', `Essays often ask you to evaluate a method critically.`],
    ['Delta M2', `A Dogme or TPR experimental practice is a common, well-supported PDA choice.`]
  ],
  confuse: `Dogme is not "no planning". Teachers plan for emergent language and need strong language awareness to work with it.`,
  names: ['Gattegno', 'Curran', 'Lozanov', 'Asher', 'Thornbury', 'Prabhu', 'Kumaravadivelu'],
  quiz: [
    { q: `Which method uses Cuisenaire rods?`, o: ['Suggestopedia', 'Silent Way', 'TPR', 'CLL'], a: 1, why: `Gattegno.` },
    { q: `Particularity, practicality and possibility belong to...`, o: ['Dogme', 'Audiolingualism', 'The postmethod condition', 'CLT'], a: 2, why: `Kumaravadivelu.` }
  ] },

/* ===================== ASSESSMENT ===================== */
{ id: 'cefr-marking', area: 'assess', title: `The CEFR, can-do descriptors and reliable marking`,
  one: `The CEFR is a shared framework of levels and can-do descriptors. Reliable marking of speaking and writing needs standardisation.`,
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1'],
  predict: { q: `Is the CEFR a test?`, a: `No. It is a **framework of reference** with six levels (A1 to C2) and can-do descriptors. Tests and courses are mapped onto it.` },
  explain: [
    `The **Common European Framework of Reference** (Council of Europe 2001) describes six levels with **can-do statements** and an **action-oriented** view of learners as social agents. The **Companion Volume** (2020) added descriptors for **mediation**, online interaction and phonological control.`,
    `Teachers use descriptors to write course aims, plan self-assessment and report progress. The CEFR also promotes **plurilingual** competence.`,
    `Marking speaking and writing reliably needs clear **band descriptors**, **standardisation** with benchmark samples, **double marking** and checks of **inter-rater** and **intra-rater reliability**. IELTS, for example, uses four analytic criteria for writing.`
  ],
  kid: `The CEFR is like the belt system in karate. It does not test you, it describes what each belt can do, so everyone uses the same language.`,
  viz: { type: 'layers', cap: 'CEFR levels', items: [['A1 to A2', 'Basic user'], ['B1 to B2', 'Independent user'], ['C1 to C2', 'Proficient user']] },
  points: [
    `**Six levels** and **can-do statements**.`,
    `**Action-oriented approach**.`,
    `**Companion Volume** (2020): mediation, phonology, online interaction.`,
    `**Plurilingual** competence.`,
    `**Standardisation**, benchmark samples, double marking.`,
    `**Inter-rater** vs **intra-rater** reliability.`
  ],
  classroom: [
    `Turn your pre-sessional aims into can-do statements ("I can summarise a lecture in note form") and let learners self-rate weekly.`,
    `Before marking a writing test, your team marks three sample scripts together and agrees bands. This is standardisation.`
  ],
  exam: [
    ['Delta M1', `Paper 2 Task 1 often involves rating scales and reliability. Terms: **standardisation**, **inter-rater reliability**.`],
    ['Delta M3', `Use CEFR descriptors to state course aims and assessment criteria.`],
    ['DipTESOL U1', `Essays on assessment should mention frameworks and marking reliability.`]
  ],
  confuse: `Inter-rater reliability is agreement between different markers. Intra-rater reliability is one marker being consistent with themselves over time.`,
  names: ['Council of Europe', 'North', 'Weir'],
  quiz: [
    { q: `Mediation descriptors were greatly expanded in...`, o: ['the 2001 CEFR', 'the 2020 Companion Volume', 'IELTS 1989', 'the GSL'], a: 1, why: `Council of Europe 2020.` },
    { q: `Two teachers give the same essay very different bands. The problem is...`, o: ['intra-rater reliability', 'inter-rater reliability', 'face validity', 'washback'], a: 1, why: `Disagreement between raters.` }
  ] },

/* ===================== MATERIALS ===================== */
{ id: 'coursebook-debate', area: 'materials', title: `The coursebook debate and principles of materials`,
  one: `Should teachers rely on coursebooks? The arguments for and against, and research-based principles for good materials.`,
  quals: ['Delta M1', 'Delta M3', 'DipTESOL U1', 'Delta M2'],
  predict: { q: `O'Neill's 1982 article was called "Why use textbooks?". Was he for or against them?`, a: `For them. He argued that coursebooks are efficient, give structure, let learners review and can be adapted.` },
  explain: [
    `**For coursebooks**: structure and a syllabus, time saved, security for learners and new teachers, consistency, and a record for review (**O'Neill**).`,
    `**Against**: one-size-fits-all content, inauthentic language, cultural bias and "safe" topics, and teacher deskilling (**Allwright**; **Meddings and Thornbury**). **Gray** showed how global coursebooks package particular cultural values.`,
    `**Tomlinson** proposed principles: materials should have impact, help learners feel at ease and confident, require self-investment, draw attention to language features, give chances to use the language, and engage learners emotionally. The middle way is to use the book as a resource and adapt it.`
  ],
  kid: `A coursebook is like a GPS. Very useful, but a good driver still looks at the road and sometimes takes a better route.`,
  viz: { type: 'compare', cap: 'The debate', a: { t: 'For', items: ['Structure and syllabus', 'Saves preparation time', 'Learner security', 'Easy review'] }, b: { t: 'Against', items: ['One size fits all', 'Inauthentic language', 'Cultural bias', 'Can deskill teachers'] } },
  points: [
    `**O'Neill** (1982): the case for textbooks.`,
    `**Allwright** (1981): what do we want materials for?`,
    `**Dogme** critique (Meddings and Thornbury 2009).`,
    `**Cultural content** of global coursebooks (Gray 2010).`,
    `**Tomlinson's principles** of materials development.`,
    `**Coursebook as resource**: select, adapt, supplement.`
  ],
  classroom: [
    `Your coursebook unit on "Holidays in Ibiza" does not fit Saudi learners. Keep the language aims, replace the context with AlUla and Abha.`,
    `Let learners rate each unit for interest and usefulness; adapt the next unit based on their ratings.`
  ],
  exam: [
    ['Delta M1', `Paper 2 Task 2 asks about the purposes and assumptions of coursebook material. Use this debate.`],
    ['Delta M3', `Justify the materials in your course proposal with principles.`],
    ['Delta M2', `LSA essays should explain why you adapted published material.`]
  ],
  confuse: `"Authentic" and "good" are not the same. A coursebook text can be well designed for learning even if not authentic.`,
  names: ['O\'Neill', 'Allwright', 'Tomlinson', 'Meddings and Thornbury', 'Gray'],
  quiz: [
    { q: `Who argued strongly for using textbooks in 1982?`, o: ['Allwright', 'O\'Neill', 'Thornbury', 'Gray'], a: 1, why: `"Why use textbooks?"` },
    { q: `"Materials should achieve impact" is a principle from...`, o: ['Tomlinson', 'Krashen', 'Munby', 'Hughes'], a: 0, why: `Tomlinson's principles of materials development.` }
  ] },

/* ===================== PD ===================== */
{ id: 'teacher-cognition', area: 'pd', title: `Teacher beliefs, cognition and continuing development`,
  one: `What teachers think, know and believe shapes what they do in class. Development means examining those beliefs and growing them.`,
  quals: ['Delta M2', 'DipTESOL U2', 'DipTESOL U1'],
  predict: { q: `Why do many new teachers teach the way they were taught?`, a: `**Lortie** called it the **apprenticeship of observation**: thousands of hours as students shape beliefs about teaching before any training.` },
  explain: [
    `**Teacher cognition** is what teachers think, know and believe (**Borg**). Beliefs act as filters: new ideas are accepted or rejected through them, and they can be resistant to change.`,
    `**Wallace** described a **reflective model** of teacher education: received knowledge (theory) and experiential knowledge (practice) feed a cycle of practice and reflection that builds professional competence.`,
    `Continuing professional development takes many forms: peer observation, teacher research, reading groups, conferences and special interest groups, mentoring and online communities (**Richards and Farrell**).`
  ],
  kid: `Your beliefs are like glasses. You see every new idea through them. Development means checking whether your glasses need a new lens.`,
  viz: { type: 'cycle', cap: 'Wallace\'s reflective model', steps: ['Received knowledge', 'Experiential knowledge', 'Practice', 'Reflection', 'Professional competence'] },
  points: [
    `**Apprenticeship of observation** (Lortie 1975).`,
    `**Teacher cognition** (Borg 2003, 2006).`,
    `Beliefs **filter** new learning.`,
    `**Reflective model** (Wallace 1991).`,
    `**CPD** options (Richards and Farrell 2005).`,
    `Link beliefs to evidence and to learner outcomes.`
  ],
  classroom: [
    `You believe "error correction must be immediate". Record one lesson and count which corrections led to uptake. Evidence may adjust the belief.`,
    `Start a monthly 30-minute reading circle with two colleagues at English Path: one article, one change to try.`
  ],
  exam: [
    ['Delta M2', `PDA Part A asks you to reflect on beliefs and practice and set action points. Use this vocabulary.`],
    ['DipTESOL U2', `Reflective portfolio tasks reward honest analysis of your beliefs.`],
    ['DipTESOL U1', `Essays on teacher development can draw on Borg and Wallace.`]
  ],
  confuse: `Reflection is not description. "I did X, then Y" is description. "Y did not work because..., so next time I will..." is reflection.`,
  names: ['Lortie', 'Borg', 'Wallace', 'Richards and Farrell'],
  quiz: [
    { q: `"Apprenticeship of observation" comes from...`, o: ['Schön', 'Lortie', 'Kolb', 'Krashen'], a: 1, why: `Lortie (1975), Schoolteacher.` },
    { q: `Wallace's model combines...`, o: ['input and output', 'received and experiential knowledge', 'validity and reliability', 'form and meaning'], a: 1, why: `The reflective model (1991).` }
  ] },

/* ===================== CONTEXTS ===================== */
{ id: 'clil', area: 'contexts', title: `CLIL and content-based teaching`,
  one: `Learning a subject through English, with a dual focus on content and language.`,
  quals: ['Delta M3', 'DipTESOL U1', 'Delta M1'],
  predict: { q: `What are Coyle's 4Cs?`, a: `**Content, Communication, Cognition and Culture** (sometimes Community).` },
  explain: [
    `**CLIL** (Content and Language Integrated Learning) teaches a subject, such as science or history, through an additional language with a **dual focus** (Coyle, Hood and Marsh 2010).`,
    `The **4Cs** framework links content, communication, cognition (thinking skills) and culture. The **language triptych** separates language **of** learning (subject terms), language **for** learning (classroom language like "I think the answer is...") and language **through** learning (new language that emerges).`,
    `**Cummins** distinguished **BICS** (everyday conversational skills, about 2 years) from **CALP** (academic language, often 5 to 7 years). CLIL and EAP need strong scaffolding: graphic organisers, visuals, sentence frames and subject vocabulary work.`
  ],
  kid: `In CLIL you learn science and English at the same time, like learning to cook while learning the names of the ingredients.`,
  viz: { type: 'quad', cap: 'Coyle\'s 4Cs', items: [['Content', 'the subject knowledge'], ['Communication', 'language to learn and use'], ['Cognition', 'thinking skills'], ['Culture', 'self and others']] },
  points: [
    `**Dual focus** on content and language.`,
    `**4Cs** (Coyle).`,
    `**Language of, for and through** learning.`,
    `**BICS vs CALP** (Cummins).`,
    `**Hard** (subject-led) vs **soft** (language-led) CLIL.`,
    `Scaffolding with visuals and frames.`
  ],
  classroom: [
    `A Grade 10 science-through-English lesson: learners complete a labelled diagram of the water cycle, then use "First..., then..., as a result..." to explain it.`,
    `Your Al Maarifa health science students: an EAP lesson built on a real anatomy lecture is soft CLIL.`
  ],
  exam: [
    ['Delta M3', `CLIL is an accepted specialism area; check the current Cambridge list before choosing.`],
    ['DipTESOL U1', `Know BICS and CALP for essays on academic language.`],
    ['Delta M1', `Terms: **CLIL**, **BICS**, **CALP**, **4Cs**.`]
  ],
  confuse: `BICS is not "easy" and CALP is not "grammar". CALP is the decontextualised, cognitively demanding language of academic tasks.`,
  names: ['Coyle, Hood and Marsh', 'Cummins', 'Dale and Tanner'],
  quiz: [
    { q: `Which takes longer to develop?`, o: ['BICS', 'CALP', 'Both 1 year', 'Neither'], a: 1, why: `Cummins: often 5 to 7 years.` },
    { q: `"Language for learning" means...`, o: ['subject terms', 'classroom language for tasks', 'grammar rules', 'L1'], a: 1, why: `e.g. "I agree because..."` }
  ] },

{ id: 'arabic-learners', area: 'contexts', title: `Teaching Arabic-speaking learners`,
  one: `Typical features of Arabic speakers' English, why they happen, and how to help, without stereotyping your learners.`,
  quals: ['Delta M2', 'Delta M3', 'Delta M1', 'DipTESOL U3'],
  predict: { q: `Why might a Saudi student write "I visited the city that I told you about it"?`, a: `Arabic relative clauses use a **resumptive pronoun** (the "it" at the end). The structure transfers into English.` },
  explain: [
    `**Phonology**: Arabic has no /p/ or /v/, so "park" can sound like "bark" and "very" like "fery". Arabic has fewer vowel contrasts, so pairs like /ɪ/ and /e/ get confused. Learners may insert a vowel to break consonant clusters ("street" said with an extra vowel).`,
    `**Writing**: Arabic is written right to left, has no capital letters and usually does not write short vowels. **Ryan and Meara** called the resulting difficulty with English vowel letters "vowel blindness".`,
    `**Grammar**: no present-tense copula in Arabic ("He a doctor"), the article "al-" with general nouns ("The life is hard"), resumptive pronouns, preposition transfer ("discuss about"), and long sentences joined with "and". These are tendencies, not rules: learners differ by country, schooling and dialect.`
  ],
  kid: `Every language gives you habits. Arabic habits are very good for Arabic. In English some of them sneak in where they do not fit, and we help learners notice that.`,
  viz: { type: 'quad', cap: 'Four common transfer areas', items: [['Sounds', 'p vs b, f vs v, vowel pairs'], ['Spelling', 'vowel letters, capitals'], ['Grammar', 'copula, articles, resumptive pronouns'], ['Discourse', 'long "and" chains']] },
  points: [
    `**/p/ vs /b/** and **/f/ vs /v/**.`,
    `**Vowel contrasts** and **epenthesis** in clusters.`,
    `**Vowel blindness** in reading and spelling (Ryan and Meara 1991).`,
    `**Copula omission**, **article** overuse with general nouns.`,
    `**Resumptive pronouns** in relative clauses.`,
    `**Diglossia**: Modern Standard Arabic vs spoken dialects.`
  ],
  classroom: [
    `Minimal pair bingo with "pen, Ben, pear, bear" plus a hand in front of the mouth to feel the puff of air on /p/.`,
    `For vowel blindness: spelling tasks where learners fill in only the vowels of AWL words ("r_s__rch").`
  ],
  exam: [
    ['Delta M2', `LSA background essays need learner problems. This topic gives you specific, real ones for your Saudi groups.`],
    ['Delta M3', `A monolingual Saudi group needs analysis should list L1-related needs with evidence from diagnostic tests.`],
    ['Delta M1', `Paper 1 Task 4 learner texts may come from Arabic speakers. Explain the likely cause of each error.`],
    ['DipTESOL U3', `Discuss L1-related pronunciation features with confidence.`]
  ],
  confuse: `Not every error is L1 transfer. Many are developmental and appear in learners from all backgrounds. Check before you blame Arabic.`,
  names: ['Swan and Smith', 'Ryan and Meara', 'Odlin'],
  quiz: [
    { q: `"He teacher in Riyadh" most likely comes from...`, o: ['overgeneralisation', 'no present-tense copula in Arabic', 'a slip', 'fossilised spelling'], a: 1, why: `Arabic nominal sentences have no "be" in the present.` },
    { q: `"Vowel blindness" refers to...`, o: ['not hearing vowels', 'difficulty processing English vowel letters in reading', 'a vision problem', 'avoiding vowels in speech'], a: 1, why: `Ryan and Meara (1991).` }
  ] }
];

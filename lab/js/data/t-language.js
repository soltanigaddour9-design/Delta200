// Language systems: grammar, lexis, phonology, discourse
export const LANGUAGE = [
/* ===================== GRAMMAR ===================== */
{ id: 'mfp', area: 'grammar', title: 'Analysing language: form, meaning, use',
  one: 'The diploma way to analyse any language item: what it looks like, what it means, when we use it, and how it sounds.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'A learner says "I am living in Riyadh since October." Is the problem form, meaning, or use?', a: 'Meaning. The form "am living" is correct, but it does not carry the meaning "from a past point until now". That meaning needs the present perfect: **I have lived** or **I have been living** in Riyadh since October.' },
  explain: [
    'Every language item has a **form** (the pieces and their order), a **meaning** (what it tells the listener), a **use** (when, where and with whom it is appropriate) and a **phonology** (how it sounds in real speech). A full analysis covers all four.',
    'Diploma examiners reward **precision**. "Used for the past" is too vague. "Refers to a completed action at a definite past time, often with a time adverbial" is precise. Always give an example sentence and, where relevant, the pronunciation in phonemic script.',
    'Teachers then check meaning with **concept checking questions (CCQs)** and **timelines**, not with "Do you understand?".'
  ],
  kid: 'Think of a car. Form is the parts. Meaning is what it does (it drives). Use is where you drive it (a car on the motorway, not in the kitchen). Phonology is the sound of the engine.',
  viz: { type: 'quad', cap: 'The four lenses of analysis', items: [['Form', 'Parts and order: have + past participle. Spelling, word class, irregular forms.'], ['Meaning', 'What it signals: a past action with present relevance.'], ['Use', 'When and with whom: informal, spoken, news, register, collocation.'], ['Phonology', 'How it sounds: weak forms, contractions, stress, linking: /aɪv bɪn/.']] },
  points: [
    '**Form**: list the structure (subject + have or has + past participle), negatives, questions, contractions and irregularities.',
    '**Meaning**: describe the core meaning precisely, then any extra meanings (e.g. "can" for ability, permission, possibility).',
    '**Use**: say when it is typical (spoken or written, formal or informal, which genre) and what it is often used with.',
    '**Phonology**: show stress, weak forms, contractions and linking in phonemic script.',
    '**Learner problems**: predict difficulties in each area, often caused by the L1 or by similar forms.',
    '**CCQs** check meaning with simple yes or no questions; **timelines** show time and duration visually.'
  ],
  classroom: [
    'With your EAP students at Al Maarifa, you present "It is believed that...". **Form**: It + passive reporting verb + that-clause. **Meaning**: the writer reports a common view without naming the source. **Use**: academic writing, to sound cautious. **Phonology**: /ɪt s bɪˈliːvd ðət/ with weak "that".',
    'CCQs for "I used to smoke": Do I smoke now? (No.) Did I smoke once? (No, many times.) Was it a habit? (Yes.)'
  ],
  exam: [
    ['Delta M1', 'Paper 1 Task 5 (50 marks) asks you to analyse the form, meaning, use and phonology of underlined items in an authentic text. Precision and examples win the marks.'],
    ['Delta M2', 'Every systems background essay is built on this analysis, followed by learner problems and teaching solutions.'],
    ['DipTESOL U1', 'Section 1 has short language questions where you analyse items in the same way.']
  ],
  confuse: 'Do not mix **meaning** and **use**. Meaning is what the item tells us ("probability"). Use is when it fits ("informal speech, often with "I reckon""). Many candidates lose marks by writing use when the question asks for meaning.',
  names: ['Scrivener', 'Thornbury', 'Swan (Practical English Usage)', 'Parrott (Grammar for English Language Teachers)'],
  quiz: [
    { q: 'Which is the best **meaning** statement for "used to" in "I used to swim every day"?', o: ['It is used in informal speech.', 'A past habit or state that is no longer true.', 'used + to + base verb.', 'The "s" is pronounced /s/, not /z/.'], a: 1, why: 'Option 1 is use, option 3 is form, option 4 is phonology. Only option 2 says what it means.' },
    { q: 'Which is a good CCQ for "You should see a doctor"?', o: ['Do you understand "should"?', 'Is it a good idea to see a doctor?', 'What does "should" mean?', 'Can you make a sentence with "should"?'], a: 1, why: 'A CCQ is short, uses simpler language than the target, and has a clear yes or no answer.' },
    { q: 'In "I\'ve been waiting", the phonological feature to mention is...', o: ['the weak form of "been" /bɪn/', 'the stress on "I\'ve"', 'a rising tone on "waiting"', 'the silent "g"'], a: 0, why: '"Been" is usually weak /bɪn/ in connected speech. Learners often over-pronounce it as /biːn/.' }
  ] },

{ id: 'tense-aspect', area: 'grammar', title: 'Tense and aspect',
  one: 'English has two tenses (past and present) and two aspects (progressive and perfect). Combining them gives the "12 tenses" of coursebooks.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Is "will" a tense in English?', a: 'Not in strict grammatical terms. English marks tense on the verb only for **present** and **past**. "Will" is a modal verb. The future is expressed in many ways, none of them a dedicated tense.' },
  explain: [
    '**Tense** links the action to time and is shown by the verb form: present (walk, walks) or past (walked). **Time** is the real world idea (past, present, future). They do not always match: "If I had money..." is past tense but present time.',
    '**Aspect** shows how the speaker views the action. The **progressive** (be + -ing) shows it as in progress, temporary or incomplete. The **perfect** (have + past participle) links two times: an action is seen from a later point.',
    'Combine them: present perfect progressive = present tense + perfect + progressive aspect: "I have been studying".'
  ],
  kid: 'Tense tells you which room the action is in (the past room or the present room). Aspect tells you how the camera films it: a moving video (progressive) or a photo you look back at from later (perfect).',
  viz: { type: 'compare', cap: 'Tense versus aspect', a: { t: 'Tense (time marking)', items: ['Present: she works', 'Past: she worked', 'Marked on the first verb', 'Not the same as real time'] }, b: { t: 'Aspect (point of view)', items: ['Progressive: in progress, temporary', 'Perfect: looked back on from a later time', 'Simple: complete, factual, habitual', 'Can combine: had been working'] } },
  points: [
    'English has **two tenses**: present and past. The future is expressed by modals, present forms and "going to".',
    '**Progressive aspect** = be + -ing: an action in progress, temporary, or incomplete ("I\'m reading a great book").',
    '**Perfect aspect** = have + past participle: connects an earlier event to a later reference point (now, a past moment, a future moment).',
    '**Stative verbs** (know, believe, own) usually resist the progressive, but many have dynamic meanings ("I\'m thinking about it").',
    '**Time and tense can differ**: backshift in reported speech, hypothetical past ("I wish I knew"), historic present in stories.',
    'Arabic-speaking learners often find the **present perfect** hard because Arabic has no direct equivalent; the meaning is split between past and present forms.'
  ],
  classroom: [
    'Timeline for "I have lived in Riyadh since October": a line from October to NOW with an arrow continuing. CCQs: Did I start in the past? (Yes.) Do I live here now? (Yes.) Is it finished? (No.)',
    'Your students write "I am studying here since two years". Show the timeline, then contrast "I study here" (fact now) with "I have studied here for two years" (past to now).'
  ],
  exam: [
    ['Delta M1', 'Terms like **aspect**, **stative verb**, **backshift** and **historic present** appear in Paper 1 Tasks 1 and 2.'],
    ['Delta M2', 'A systems LSA on "perfect aspect across tenses" or "narrative tenses" is common and gives room for depth.'],
    ['DipTESOL U1', 'Short questions ask you to explain the difference between pairs like "I\'ve read" and "I\'ve been reading".']
  ],
  confuse: '"Present perfect = unfinished past" is only half true. "I\'ve lost my keys" is finished; what matters is the **present result**. Describe the meaning as "past action seen from now, with present relevance".',
  names: ['Leech (Meaning and the English Verb)', 'Lewis (The English Verb)', 'Swan'],
  quiz: [
    { q: 'How many tenses does English have in strict grammatical terms?', o: ['12', '3', '2', '6'], a: 2, why: 'Present and past. Everything else combines tense with aspect or uses modals.' },
    { q: '"I had been working" shows...', o: ['past tense + perfect + progressive aspect', 'future tense', 'present tense + perfect aspect', 'past tense + simple aspect'], a: 0, why: '"Had" carries past tense, "had + been" is perfect, "be + working" is progressive.' },
    { q: 'Which sentence uses a stative verb with a dynamic meaning?', o: ['I know the answer.', 'I\'m thinking of changing jobs.', 'She owns a car.', 'He believes in luck.'], a: 1, why: '"Think" meaning "consider" is dynamic, so the progressive is fine.' }
  ] },

{ id: 'future', area: 'grammar', title: 'Talking about the future',
  one: 'English has no future tense, so it uses at least six forms, and the choice depends on the speaker\'s view, evidence and plans.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Look at the dark clouds. Do you say "It will rain" or "It\'s going to rain"?', a: 'Most speakers say "**It\'s going to rain**" because there is present evidence. "Will" is more for predictions based on opinion or knowledge: "I think it will rain tomorrow."' },
  explain: [
    'The main forms are **will** (predictions, instant decisions, promises, offers), **be going to** (intentions, predictions from present evidence), **present progressive** (fixed arrangements), **present simple** (timetables), **future progressive** (actions in progress at a future time, or "as a matter of course") and **future perfect** (completed before a future point).',
    'The choice often depends on **how the speaker sees the event**, not on the event itself. Two forms can both be correct with slightly different nuance.'
  ],
  kid: 'The future is a foggy road. "Will" is a guess. "Going to" is what you can already see coming. The present progressive is the appointment in your diary. The present simple is the bus timetable.',
  viz: { type: 'scale', cap: 'From certain to uncertain (roughly)', from: 'fixed, scheduled', to: 'opinion, guess', items: [[6, 'The train leaves at 6'], [28, "I'm meeting Ali at 5"], [52, "It's going to rain"], [76, 'I think she\'ll pass'], [96, 'Maybe it\'ll snow']] },
  points: [
    '**will**: prediction from opinion ("I\'m sure you\'ll love it"), spontaneous decision ("I\'ll get it"), promise, offer, threat.',
    '**be going to**: plan or intention already decided; prediction with present evidence.',
    '**Present progressive**: personal arrangements with other people, usually with a time ("I\'m flying to Tunis on Friday").',
    '**Present simple**: timetables and schedules ("The exam starts at 9").',
    '**Future progressive**: in progress at a future moment ("This time tomorrow I\'ll be teaching"), or polite enquiries ("Will you be using the room?").',
    '**Future perfect**: completed before a future time ("By June I\'ll have finished Delta").'
  ],
  classroom: [
    'A speaking task: students plan a weekend in AlUla. They write diary arrangements (present progressive), intentions (going to) and then make quick decisions in a role play (will). The task forces the contrast.',
    'Learners overuse "will" for everything. Collect their sentences on the board and ask: Is this decided already? Is there evidence? Is it in a diary?'
  ],
  exam: [
    ['Delta M1', 'Paper 1 Task 5 often underlines a future form in an authentic text and asks for meaning and use in that context.'],
    ['Delta M2', 'A good LSA topic: "future forms for plans and predictions at B1", with clear analysis of overlap.']
  ],
  confuse: 'Avoid rules like "going to = near future". "I\'m going to retire in 20 years" is not near. The real difference is **prior intention or evidence**, not distance.',
  names: ['Swan', 'Lewis', 'Thornbury'],
  quiz: [
    { q: '"Wait, I\'ll help you with that bag." This "will" is...', o: ['a prediction', 'a spontaneous offer', 'a fixed arrangement', 'a timetable'], a: 1, why: 'The decision is made at the moment of speaking, as an offer.' },
    { q: 'Which form fits a fixed personal arrangement?', o: ['I will see the dentist at 4.', "I'm seeing the dentist at 4.", 'I see the dentist at 4.', 'I would see the dentist at 4.'], a: 1, why: 'The present progressive is typical for arrangements involving other people at a set time.' }
  ] },

{ id: 'modality', area: 'grammar', title: 'Modality',
  one: 'Modality is how speakers show their attitude: how sure they are, or what is necessary, possible or allowed.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: '"She must be tired" and "You must wear a seatbelt". Is "must" doing the same job?', a: 'No. The first is **epistemic** (a logical deduction: I\'m almost sure). The second is **deontic** (an obligation). Same verb, two kinds of modality.' },
  explain: [
    'There are two broad kinds. **Epistemic modality** is about probability and certainty: "It might rain", "That can\'t be true". **Deontic modality** is about obligation, permission and ability: "You must sign here", "You can leave early".',
    'Modality is expressed by **modal verbs** (can, could, may, might, must, shall, should, will, would), **semi-modals** (have to, need to, ought to, be able to) and many other words: "probably", "it\'s likely that", "I\'m not sure", "apparently".',
    'Past epistemic meaning uses modal + have + past participle: "He must have left early".'
  ],
  kid: 'Modals are like a dial. Turn it one way to show how sure you are (might, may, must). Turn it the other way to show rules and permission (can, have to, mustn\'t).',
  viz: { type: 'scale', cap: 'Epistemic certainty (deduction)', from: 'impossible', to: 'certain', items: [[5, "can't be"], [30, 'might be'], [48, 'may be'], [62, 'could be'], [80, 'should be'], [96, 'must be']] },
  points: [
    '**Epistemic** = degree of certainty. **Deontic** = obligation, permission, ability, advice.',
    'Modal verbs have **no -s**, no to-infinitive after them, and form questions by inversion.',
    '**must vs have to**: "must" often shows the speaker\'s own authority, "have to" an external rule. In the negative they split completely: "mustn\'t" (prohibition) vs "don\'t have to" (no necessity).',
    '**Past forms**: "could" for general past ability; "was able to" for a single achievement ("I was able to escape").',
    '**Hedging** in academic writing uses modality: "This may suggest...", "It appears that...".',
    'Learners from many L1s use modals followed by "to" ("I must to go") or with -s ("he cans").'
  ],
  classroom: [
    'EAP class: give a strong claim ("Social media causes depression") and ask students to hedge it three ways using modals and adverbs. They see that academic English values caution.',
    'Deduction game: show a photo of an empty office with a coat and warm coffee. Students deduce: "Someone must have just left", "They can\'t have gone far".'
  ],
  exam: [
    ['Delta M1', 'Terms **epistemic**, **deontic**, **hedging**, **semi-modal** come up in Tasks 1 and 2; underlined modals in Task 5 need context-specific meaning.'],
    ['Delta M2', 'An LSA on "modals of deduction" or "hedging in academic writing" suits EAP groups.']
  ],
  confuse: 'Do not say "might is less likely than may" as a firm rule. In modern English they are very close. Give the meaning in context instead.',
  names: ['Palmer (Mood and Modality)', 'Hyland (hedging)', 'Swan'],
  quiz: [
    { q: '"You don\'t have to come" means...', o: ['You are not allowed to come.', 'It is not necessary to come.', 'You must not come.', 'You probably won\'t come.'], a: 1, why: '"Don\'t have to" = no obligation. Prohibition is "mustn\'t".' },
    { q: '"He can\'t have seen us" is an example of...', o: ['deontic modality, present', 'epistemic modality, past', 'ability in the past', 'permission'], a: 1, why: 'It is a deduction (epistemic) about a past event (have + past participle).' },
    { q: 'Which is hedging?', o: ['The results prove the theory.', 'The results may indicate a link.', 'You must cite sources.', 'I can swim.'], a: 1, why: '"May indicate" softens the claim, which is typical academic hedging.' }
  ] },

{ id: 'conditionals', area: 'grammar', title: 'Conditionals and hypothetical meaning',
  one: 'Conditionals talk about real and unreal situations. The "past" form often signals distance from reality, not past time.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'In "If I had a car, I\'d drive to work", is "had" about the past?', a: 'No. It is about **now**. The past form shows the situation is **unreal or hypothetical**. This is called remoteness or distancing.' },
  explain: [
    'Coursebooks teach zero, first, second and third conditionals. They are useful, but real English mixes them freely. A better approach is **real vs unreal** meaning.',
    '**Real** conditionals use present forms for possible situations ("If it rains, we\'ll stay in"). **Unreal** conditionals use past forms to create distance ("If it rained, we\'d stay in" sounds less likely).',
    'The same distancing past appears in **wish** ("I wish I knew"), **if only**, **it\'s time** ("It\'s time we left"), **would rather** ("I\'d rather you didn\'t"), and in polite requests ("I was wondering if...").',
    '**Mixed conditionals** combine times: "If I had studied medicine (past), I\'d be a doctor now (present)".'
  ],
  kid: 'Putting a verb in the past is like stepping back from a painting. You are saying: this is imaginary, not real life.',
  viz: { type: 'compare', cap: 'Real vs unreal', a: { t: 'Real (open)', items: ['If you heat ice, it melts.', 'If it rains, I\'ll take a taxi.', 'Present forms', 'Possible or likely'] }, b: { t: 'Unreal (remote)', items: ['If I won the lottery, I\'d travel.', 'If I had known, I would have come.', 'Past and past perfect forms', 'Imaginary or contrary to fact'] } },
  points: [
    '**Zero**: general truths (if + present, present).',
    '**First**: real possibilities in the future (if + present, will).',
    '**Second**: unreal present or unlikely future (if + past, would).',
    '**Third**: unreal past (if + past perfect, would have + past participle).',
    '**Mixed**: unreal past condition with present result, or the reverse.',
    'The **hypothetical past** also appears after wish, if only, it\'s time, would rather, suppose, and in polite distancing.'
  ],
  classroom: [
    'Regret chain: start with "I didn\'t study for my exam". Students continue: "If I had studied, I would have passed. If I had passed, I would be at university now." The chain shows mixed conditionals naturally.',
    'For your Saudi learners, "If I will go..." is a common error. Show that the "if" clause takes present for future meaning.'
  ],
  exam: [
    ['Delta M1', 'Know the terms **hypothetical meaning**, **remoteness**, **mixed conditional**. Task 5 may ask why a past form refers to present time.'],
    ['Delta M2', 'An LSA on "expressing regret and hypothetical past" is richer than "third conditional" alone.']
  ],
  confuse: 'Teaching conditionals only as four numbered types makes learners think other combinations are wrong. Present the numbered types as common patterns, then show real mixes.',
  names: ['Willis (Collins COBUILD grammar)', 'Lewis', 'Swan'],
  quiz: [
    { q: '"It\'s time we went home." The past form "went" shows...', o: ['past time', 'a hypothetical or remote meaning', 'reported speech', 'a habit'], a: 1, why: 'It refers to now, but the past form signals that the action has not happened yet and should.' },
    { q: 'Which is a mixed conditional?', o: ['If I see him, I\'ll tell him.', 'If I had taken the job, I\'d be living in Dubai now.', 'If you mix red and blue, you get purple.', 'If I were you, I\'d go.'], a: 1, why: 'Past unreal condition with a present result.' }
  ] },

{ id: 'passive-info', area: 'grammar', title: 'Passive voice and information structure',
  one: 'English likes to put known information first and new, important information last. The passive, clefts and fronting help writers do this.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Why might a writer choose "The vaccine was developed in 2020" instead of "Scientists developed the vaccine in 2020"?', a: 'Because the topic is **the vaccine**, and who developed it is obvious or not important. The passive keeps the topic at the start of the sentence.' },
  explain: [
    'The **passive** (be + past participle) moves the object to the front. Writers use it when the agent is unknown, obvious or unimportant, or to keep the **topic** in subject position. It is common in academic and scientific writing.',
    'Sentences tend to move from **given** (already known) to **new** information, and to put heavy, long elements at the end (**end weight**). The start of the clause is the **theme**; the rest is the **rheme**.',
    '**Cleft sentences** ("It was the price that surprised me", "What I need is a break") and **fronting** ("Never have I seen such rain") change the focus for emphasis.'
  ],
  kid: 'A sentence is a train. The first carriage carries what everyone already knows. The last carriage carries the surprise.',
  viz: { type: 'flow', cap: 'Given to new', steps: [['Theme / given', 'The new library'], ['', 'was opened'], ['Rheme / new', 'by the Minister of Education last week.']] },
  points: [
    '**Passive** form: be + past participle, in any tense ("is being built", "has been sold").',
    '**Reasons**: agent unknown or unimportant, focus on process, objectivity, keeping the topic as subject, cohesion between sentences.',
    '**Get-passive** ("He got arrested") is informal and often for unexpected or negative events.',
    '**End focus and end weight**: new and long information goes last.',
    '**It-clefts** and **wh-clefts** add emphasis and contrast.',
    '**Impersonal passives** for reporting: "It is said that...", "He is thought to be...".'
  ],
  classroom: [
    'EAP: give students a paragraph where every sentence starts with "Researchers". They rewrite it so each sentence starts with given information, using passives. The text becomes more cohesive.',
    'Speaking: students correct false statements with clefts: "Riyadh is the capital of the UAE." "No, it\'s Abu Dhabi that is the capital of the UAE."'
  ],
  exam: [
    ['Delta M1', '**Theme and rheme**, **end weight**, **cleft sentence**, **agentless passive** appear as terms; Task 5 asks why a writer chose the passive in context.'],
    ['Delta M2', 'An LSA on "passive for cohesion in academic writing" shows depth beyond form drills.']
  ],
  confuse: 'Do not teach the passive as "transform active sentences". Writers rarely start with an active sentence. Teach **why** the passive is chosen in a real text.',
  names: ['Halliday (theme and rheme)', 'Biber (Longman Grammar)', 'Thornbury'],
  quiz: [
    { q: 'Which is a wh-cleft?', o: ['It was Sara who called.', 'What I want is a holiday.', 'Never again will I go there.', 'The car was stolen.'], a: 1, why: 'Wh-clefts begin with a wh-word clause: "What I want..."' },
    { q: 'The main principle of information structure in English is...', o: ['new before given', 'given before new', 'verbs before nouns', 'short before long is forbidden'], a: 1, why: 'Known information first, new information at the end (end focus).' }
  ] },

{ id: 'verbs-mwv', area: 'grammar', title: 'Verb patterns and multi-word verbs',
  one: 'Verbs choose what follows them (to-infinitive, -ing, that-clause), and many combine with particles to make new meanings.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: '"I stopped to smoke" and "I stopped smoking". Same meaning?', a: 'No. "Stopped to smoke" = stopped what I was doing **in order to** smoke. "Stopped smoking" = no longer smoke. Some verbs change meaning with the pattern.' },
  explain: [
    '**Verb patterns** (complementation) are what comes after a verb: "want **to go**", "enjoy **going**", "suggest **that** we go", "make someone **go**". They must be learned with the verb, ideally as chunks.',
    '**Multi-word verbs** combine a verb and particle(s). Types: **phrasal verbs** (verb + adverb particle, often separable: "turn the light off", "turn it off"), **prepositional verbs** (verb + preposition, not separable: "look after the baby"), and **phrasal-prepositional verbs** ("put up with", "look forward to").',
    'Meanings range from **literal** ("go out") to **semi-idiomatic** ("go on" = continue) to **idiomatic** ("put up with" = tolerate).'
  ],
  kid: 'Verbs are picky eaters. "Enjoy" only eats -ing. "Want" only eats "to". And some verbs get a new personality when they hold hands with a little word like "up" or "off".',
  viz: { type: 'layers', cap: 'Multi-word verbs, literal to idiomatic', items: [['Literal', 'sit down, go out'], ['Semi-idiomatic', 'go on (continue), eat up'], ['Idiomatic', 'put up with, give in, make up']] },
  points: [
    '**-ing only**: enjoy, avoid, mind, finish, consider, suggest. **to only**: want, decide, hope, refuse, plan.',
    '**Both, with meaning change**: stop, remember, forget, try, regret, go on.',
    '**Object + infinitive**: want someone to, ask someone to; **causatives**: make, let, have someone do.',
    '**Phrasal verbs** with a pronoun object must separate: "pick it up", not "pick up it".',
    'Teaching particles by meaning helps: "up" for completion (eat up, fill up), "out" for disappearance (run out, die out).',
    'Arabic-speaking learners often add or drop prepositions under L1 influence ("discuss about", "enter to").'
  ],
  classroom: [
    'Instead of a list of 20 phrasal verbs, give a short text about a student\'s first week (moved in, settled down, found out, got on with roommates). Learners guess meaning from context, then retell the story.',
    'Error hunt: "I\'m looking forward to see you", "She suggested me to go". Groups correct and state the pattern rule.'
  ],
  exam: [
    ['Delta M1', 'Know **complementation**, **phrasal vs prepositional verb**, **separable**, **particle**. Task 5 may ask you to identify the type of a multi-word verb.'],
    ['Delta M2', 'Multi-word verbs is a classic LSA. Focus on one meaning group of particles for depth.']
  ],
  confuse: 'Avoid teaching long alphabetical lists of phrasal verbs. Group by context or particle meaning, and always show grammar (separable or not).',
  names: ['Rundell', 'Thornbury', 'Swan'],
  quiz: [
    { q: '"Look after" is...', o: ['a separable phrasal verb', 'a prepositional verb', 'a phrasal-prepositional verb', 'a causative'], a: 1, why: 'You cannot say "look the baby after". The particle is a preposition with its object.' },
    { q: 'Which sentence is correct?', o: ['She suggested me to go.', 'She suggested that I go.', 'She suggested to me go.', 'She suggested me going.'], a: 1, why: '"Suggest" takes a that-clause or -ing ("suggested going"), but not object + to-infinitive.' }
  ] },

{ id: 'noun-phrase', area: 'grammar', title: 'Articles, determiners and the noun phrase',
  one: 'Articles signal whether the listener knows which thing we mean. Academic English packs meaning into long noun phrases.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Why is "The education is important" wrong in general statements?', a: 'For **general** reference with uncountable or plural nouns, English uses **zero article**: "Education is important". "The" signals a specific, identifiable thing: "The education I received was excellent".' },
  explain: [
    '**Articles** show **definiteness**. "A" introduces something new or non-specific. "The" refers to something both speaker and listener can identify (mentioned before, unique, or clear from context). **Zero article** is used for general plural and uncountable nouns.',
    '**Determiners** include articles, possessives (my), demonstratives (this), quantifiers (some, much, few) and numbers. **Countability** decides which ones are possible: "much information", not "many informations".',
    'In academic writing, meaning is packed into **complex noun phrases** with pre-modifiers and post-modifiers: "the rapid increase **in** obesity rates **among** Saudi teenagers". This is part of **nominalisation**.'
  ],
  kid: '"A" is like saying "one of many, you don\'t know which". "The" is like pointing at it: "that one, you know the one".',
  viz: { type: 'flow', cap: 'Anatomy of an academic noun phrase', steps: [['Determiner', 'the'], ['Pre-modifier', 'rapid'], ['Head noun', 'increase'], ['Post-modifier', 'in obesity rates among teenagers']] },
  points: [
    '**the**: known from context, mentioned before, unique (the sun), superlatives, some proper names (the UK).',
    '**a or an**: first mention, one of a class, jobs ("She\'s a nurse"), with singular countable nouns only.',
    '**Zero article**: general plurals and uncountables ("Students need sleep"), most country and city names, meals.',
    'Many nouns are both countable and uncountable with different meanings: "a coffee", "coffee"; "a paper" (essay), "paper".',
    '**Nominalisation** turns processes into nouns ("they decided" becomes "their decision"), central to academic style.',
    'Arabic has a definite article (al-) used for general reference, so learners often over-use "the" with general nouns.'
  ],
  classroom: [
    'EAP: students compare two sentences: "Pollution damages health" and "The pollution in Riyadh damages health". Ask: Which is general? Which is specific? Then they correct their own essay sentences.',
    'Noun phrase expansion race: start with "students". Teams add one element at a time: "Saudi students" → "first-year Saudi students in health sciences who...".'
  ],
  exam: [
    ['Delta M1', 'Terms: **determiner**, **definiteness**, **zero article**, **nominalisation**, **pre-modification**. Task 4 learner texts often show article errors.'],
    ['Delta M2', 'An LSA on "noun phrases in academic writing" suits EAP and shows sophistication.']
  ],
  confuse: 'Article rules have many exceptions. Teach the core concept (shared knowledge between speaker and listener) first, rather than long rule lists.',
  names: ['Biber', 'Swan', 'Parrott'],
  quiz: [
    { q: 'Which is correct for a general statement?', o: ['The doctors work long hours.', 'Doctors work long hours.', 'A doctors work long hours.', 'Doctor works long hours.'], a: 1, why: 'Zero article with a plural noun for general reference.' },
    { q: '"Their decision" from "they decided" is an example of...', o: ['clefting', 'nominalisation', 'ellipsis', 'backshift'], a: 1, why: 'A verb process becomes a noun.' }
  ] },

{ id: 'clauses', area: 'grammar', title: 'Relative clauses and reported speech',
  one: 'Relative clauses add information to nouns; reported speech retells what someone said, often shifting tenses and pronouns.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'What is the difference between "My brother who lives in Tunis is a chef" and "My brother, who lives in Tunis, is a chef"?', a: 'Without commas (**defining**): I have more than one brother, and this tells you which one. With commas (**non-defining**): I have one brother, and this is extra information.' },
  explain: [
    '**Defining relative clauses** identify which person or thing we mean; no commas; "that" is possible; the relative pronoun can be dropped when it is the object ("the book (that) I read").',
    '**Non-defining relative clauses** add extra information; commas in writing, a pause in speech; no "that"; the pronoun cannot be dropped.',
    '**Reported speech** often **backshifts** tenses (is → was) and changes pronouns, time and place words (tomorrow → the next day). Backshift is optional when the fact is still true ("He said he lives in Jeddah"). **Reporting verbs** (claim, admit, suggest, argue) carry meaning and have their own patterns.'
  ],
  kid: 'A defining clause is a name tag: it tells you which one. A non-defining clause is a fun fact said in brackets.',
  viz: { type: 'compare', cap: 'Defining vs non-defining', a: { t: 'Defining', items: ['No commas', '"that" possible', 'Object pronoun can be dropped', 'Essential for meaning'] }, b: { t: 'Non-defining', items: ['Commas, pause in speech', 'No "that"', 'Pronoun cannot be dropped', 'Extra information'] } },
  points: [
    'Relative pronouns: who, which, that, whose, whom, where, when, why.',
    '**Reduced relative clauses**: "the woman sitting there", "the results obtained" (common in academic texts).',
    '**Backshift** is a tendency, not a law; it depends on whether the reported situation is still true.',
    '**Reporting verbs** carry stance: "argue", "claim", "admit", "deny" signal what the writer thinks of the claim.',
    'Arabic-speaking learners often add a **resumptive pronoun**: "the book which I read **it**", because Arabic relative clauses include one.'
  ],
  classroom: [
    'EAP source use: students paraphrase a quote with a reporting verb and compare "Smith argues that..." with "Smith claims that...". Which one shows doubt?',
    'Grammar auction with sentences containing resumptive pronouns. Teams bid on correct sentences.'
  ],
  exam: [
    ['Delta M1', 'Terms: **defining**, **non-defining**, **backshift**, **reduced relative clause**, **resumptive pronoun** (learner error).'],
    ['DipTESOL U1', 'Short answer: explain why backshift is optional in "She said the Earth goes round the Sun".']
  ],
  confuse: '"Always backshift in reported speech" is a coursebook simplification. Explain that speakers choose based on whether the reported fact is still valid.',
  names: ['Swan (Learner English)', 'Parrott'],
  quiz: [
    { q: 'In which sentence can you drop the relative pronoun?', o: ['The man who called me is my boss.', 'The film that we watched was long.', 'My mother, who is 60, works.', 'The car which was red crashed.'], a: 1, why: '"That" is the object of "watched" in a defining clause, so it can go.' },
    { q: '"The book which I bought it yesterday" shows...', o: ['L1-influenced resumptive pronoun', 'correct non-defining clause', 'backshift', 'cleft sentence'], a: 0, why: 'The extra "it" copies Arabic and other languages with resumptive pronouns.' }
  ] },

/* ===================== LEXIS ===================== */
{ id: 'word-knowledge', area: 'lexis', title: 'What it means to know a word',
  one: 'Knowing a word is much more than knowing its translation: it covers form, meaning and use, both receptively and productively.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'A student knows "make" means to create. Do they "know" the word?', a: 'Only partly. They also need its collocations (make a decision, not do a decision), grammar (make someone do), pronunciation, register and the many meanings it has.' },
  explain: [
    'Paul Nation divides word knowledge into **form** (spoken, written, word parts), **meaning** (form-meaning link, concept, associations) and **use** (grammar, collocations, constraints such as register and frequency).',
    'Each aspect can be known **receptively** (recognise it when reading or listening) or **productively** (use it in speaking or writing). Receptive vocabulary is always larger.',
    'Learners need to meet a word many times in different contexts before it is fully known. Estimates vary, but repeated, spaced encounters matter more than one deep explanation.'
  ],
  kid: 'Knowing a word is like knowing a person. Knowing their name is a start. You also need to know their friends (collocations), their manners (register), and how they behave in different places (grammar).',
  viz: { type: 'compare', cap: 'Nation: aspects of word knowledge', a: { t: 'Form and meaning', items: ['Spoken form: pronunciation, stress', 'Written form: spelling', 'Word parts: prefixes, suffixes', 'Meaning: concept, associations'] }, b: { t: 'Use', items: ['Grammatical functions and patterns', 'Collocations', 'Register and formality', 'Frequency and where it occurs'] } },
  points: [
    'Three big areas: **form, meaning, use** (Nation).',
    '**Receptive** vs **productive** knowledge: recognising vs using.',
    '**Denotation** (core meaning) vs **connotation** (emotional or cultural associations).',
    '**Polysemy**: one word, related meanings ("head" of a person, of a department).',
    '**Frequency** guides selection: the most frequent 2,000 to 3,000 word families cover most everyday text.',
    'Learning needs **repeated, spaced encounters** in varied contexts.'
  ],
  classroom: [
    'Teaching "diagnosis" to health science students: pronunciation /ˌdaɪəɡˈnəʊsɪs/, plural "diagnoses", verb "diagnose", collocations (make a diagnosis, an accurate diagnosis), and a sentence from a medical text.',
    'Vocabulary notebook redesign: each word gets a card with form, meaning, a collocation, an example from class and the stress pattern.'
  ],
  exam: [
    ['Delta M1', 'Terms like **receptive vocabulary**, **polysemy**, **connotation**, **word family** appear in Tasks 1 and 2.'],
    ['Delta M2', 'Lexis LSAs must show you know the depth of word knowledge, not just meaning.']
  ],
  confuse: 'Do not equate "teaching vocabulary" with "explaining meaning". Most of the work is recycling and practising use.',
  names: ['Nation', 'Schmitt', 'Thornbury (How to Teach Vocabulary)'],
  quiz: [
    { q: 'Knowing that "strong coffee" is natural but "powerful coffee" is not is knowledge of...', o: ['spelling', 'collocation', 'word parts', 'pronunciation'], a: 1, why: 'Collocation is part of word use.' },
    { q: 'Receptive vocabulary is...', o: ['words you can use in speech', 'words you recognise when reading or listening', 'words from your L1', 'technical words'], a: 1, why: 'Recognition, not production.' }
  ] },

{ id: 'collocation', area: 'lexis', title: 'Collocation, chunks and the Lexical Approach',
  one: 'Fluent speakers store language in ready-made chunks. Teaching collocations and chunks speeds up fluency and accuracy.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: 'Why do native speakers say "heavy rain" but not "strong rain"?', a: 'No logical reason: it is **collocation**, words that habitually go together. Learners have to notice and learn these pairings.' },
  explain: [
    'A **collocation** is a pair or group of words that co-occur more often than chance: "make a mistake", "highly unlikely", "pay attention". Collocations can be **strong** (fixed, like "shrug your shoulders") or **weak** (many partners, like "good idea").',
    '**Chunks** or **lexical phrases** include fixed expressions ("by the way"), sentence frames ("The thing is..."), and polywords. Native speakers retrieve them as single units, which saves processing time.',
    'Michael Lewis\'s **Lexical Approach** (1993) argued that "language consists of grammaticalised lexis, not lexicalised grammar". Teaching should focus on noticing and recording chunks.'
  ],
  kid: 'Words have best friends. "Fast food" are best friends. "Quick food" just met.',
  viz: { type: 'scale', cap: 'Strength of collocation', from: 'free combination', to: 'fixed idiom', items: [[8, 'a big house'], [35, 'make a decision'], [62, 'shrug your shoulders'], [92, 'kick the bucket']] },
  points: [
    'Common patterns: **adjective + noun** (heavy traffic), **verb + noun** (take a break), **adverb + adjective** (deeply concerned), **verb + adverb** (fully understand).',
    '**Lexical chunks** reduce processing load and increase fluency.',
    '**Lewis**: noticing, recording and recycling chunks; less emphasis on grammar rules.',
    '**Corpora** (e.g. concordance lines) show real collocations and frequency.',
    'Learner errors are often collocation errors ("do a mistake", "make homework"), not grammar errors.',
    'Idioms are the most fixed and least transparent end of the scale; teach them for recognition first.'
  ],
  classroom: [
    'Concordance work: show 10 lines with "evidence" from an academic corpus. Students notice "provide evidence", "strong evidence", "evidence suggests". They build a collocation fork in their notebook.',
    'Chunk-based speaking: give useful frames for a seminar ("Building on what Ahmed said...", "I see your point, but...").'
  ],
  exam: [
    ['Delta M1', 'Terms: **collocation**, **lexical chunk**, **colligation** (grammar a word typically occurs with), **corpus**, **Lexical Approach**. Paper 2 materials tasks often assume a lexical view.'],
    ['Delta M2', 'An LSA on "collocations for describing data" or "spoken chunks for seminars" gives clear, testable aims.']
  ],
  confuse: 'The Lexical Approach is not a full method with a lesson procedure. It is a set of principles. Say this in essays to show criticality.',
  names: ['Lewis', 'Nattinger and DeCarrico', 'Sinclair (idiom principle)', 'Hoey (lexical priming)'],
  quiz: [
    { q: 'Which is a strong collocation?', o: ['nice day', 'shrug your shoulders', 'big car', 'good idea'], a: 1, why: '"Shrug" almost only goes with "shoulders".' },
    { q: 'Lewis\'s key claim is that language is...', o: ['lexicalised grammar', 'grammaticalised lexis', 'a set of habits', 'innate'], a: 1, why: '"Language consists of grammaticalised lexis, not lexicalised grammar."' }
  ] },

{ id: 'word-formation', area: 'lexis', title: 'Word formation',
  one: 'New words are built by adding affixes, joining words, changing word class or shortening. Knowing the system multiplies vocabulary.',
  quals: ['Delta M1', 'DipTESOL U1'],
  predict: { q: '"Google" (a company) became "to google" (a verb). What process is this?', a: '**Conversion** (also called zero derivation): the word changes class with no change in form.' },
  explain: [
    '**Affixation**: adding **prefixes** (un-, re-, dis-) or **suffixes** (-ness, -tion, -ise). **Derivational** affixes create new words, often new word classes (happy → happiness). **Inflectional** affixes add grammar (walk → walked, book → books).',
    '**Compounding**: joining words (classroom, part-time, washing machine). **Conversion**: a word changes class without changing form (an email → to email). **Clipping** (laboratory → lab), **blending** (breakfast + lunch → brunch), **acronyms** (NATO) and **initialisms** (BBC) also create words.',
    'Stress often moves with suffixes: PHOtograph, phoTOgraphy, photoGRAphic.'
  ],
  kid: 'Words are Lego. You can click on a front piece (un-), a back piece (-ness), join two bricks (classroom), or chop a long brick short (lab).',
  viz: { type: 'flow', cap: 'One root, many words', steps: [['employ', 'verb'], ['employer', '-er: person'], ['employee', '-ee: receiver'], ['unemployment', 'prefix + suffix']] },
  points: [
    '**Derivational** vs **inflectional** morphology.',
    'The **morpheme** is the smallest unit of meaning; **free** morphemes stand alone (book), **bound** morphemes do not (-s, un-).',
    '**Compounds** can be closed (bookshop), hyphenated (well-known) or open (bus stop); stress is usually on the first part.',
    '**Conversion**, **clipping**, **blending**, **acronym**, **back-formation** (edit from editor).',
    'Suffixes can **shift word stress**, a common source of pronunciation errors.'
  ],
  classroom: [
    'Word family tables for EAP: analyse, analysis, analytical, analytically. Students fill gaps in a text and mark stress.',
    'Prefix sort: un-, in-, im-, il-, ir-, dis- with adjectives (unhealthy, impossible, illegal). Students notice im- before p and m, il- before l, ir- before r.'
  ],
  exam: [
    ['Delta M1', 'Terms **affixation**, **conversion**, **compounding**, **bound morpheme**, **back-formation** are favourites for Task 1 and 2 definitions.'],
    ['DipTESOL U1', 'Section 1 may ask you to identify the word formation process in examples.']
  ],
  confuse: 'Do not mix inflectional suffixes (grammar: -s, -ed, -ing) with derivational ones (new words: -ness, -ful). "-er" can be both: comparative (bigger) or person (teacher).',
  names: ['Crystal', 'Thornbury', 'Plag (Word-formation in English)'],
  quiz: [
    { q: '"Brunch" is an example of...', o: ['clipping', 'blending', 'conversion', 'compounding'], a: 1, why: 'Parts of two words are merged.' },
    { q: 'Which suffix is inflectional?', o: ['-ness in kindness', '-ed in walked', '-ful in helpful', '-tion in creation'], a: 1, why: 'It adds grammatical meaning (past) without making a new word.' }
  ] },

{ id: 'sense-relations', area: 'lexis', title: 'Meaning relations, connotation and register',
  one: 'Words relate to each other in meaning (synonyms, opposites, categories) and carry feelings and formality.',
  quals: ['Delta M1', 'DipTESOL U1'],
  predict: { q: '"Slim" and "skinny" both mean thin. Are they interchangeable?', a: 'No. They have different **connotation**: "slim" is positive, "skinny" often negative. Denotation is the same, connotation differs.' },
  explain: [
    '**Synonymy**: similar meaning, rarely identical (big, large). **Antonymy**: opposites, either **gradable** (hot, cold, with warm between) or **complementary** (alive, dead). **Hyponymy**: a category and its members (fruit is the superordinate; apple and mango are hyponyms). **Meronymy**: part and whole (wheel, car).',
    '**Polysemy** is one word with related meanings (the mouth of a river, a person). **Homonymy** is unrelated meanings with the same form (bank of a river, a bank for money). **Homophones** sound the same (sea, see); **homographs** are spelled the same (lead the team, lead the metal).',
    '**Register** is the variety used for a situation: formal vs informal, technical vs everyday ("commence" vs "start").'
  ],
  kid: 'Words live in families. Some are twins (big, large), some are opposites (hot, cold), and some are the parent with many children (fruit: apple, mango, banana).',
  viz: { type: 'layers', cap: 'Hyponymy', items: [['Superordinate', 'vehicle'], ['Hyponyms', 'car, bus, lorry'], ['Co-hyponyms of car', 'saloon, hatchback, SUV']] },
  points: [
    '**Synonyms** differ in connotation, register, collocation or dialect.',
    '**Gradable** vs **complementary** antonyms.',
    '**Hyponym** and **superordinate**; **meronym**.',
    '**Polysemy** (related meanings) vs **homonymy** (unrelated).',
    '**Denotation** vs **connotation**; **register**, **formality** and **style**.',
    '**False friends**: words that look similar across languages but differ in meaning.'
  ],
  classroom: [
    'Formality cline: students order "kids, children, offspring, minors" from informal to formal and decide which fits an academic essay.',
    'Mind map of "illness" for health students: superordinate, hyponyms (diabetes, asthma), meronyms of the body.'
  ],
  exam: [
    ['Delta M1', 'Paper 1 Task 1 often defines terms like **hyponym**, **meronym**, **homograph**, **gradable antonym**.'],
    ['DipTESOL U1', 'Section 1 language questions use these to analyse vocabulary in a text.']
  ],
  confuse: 'Homophone, homograph, homonym: a homonym is the umbrella for same form, different meaning. Homophones share sound; homographs share spelling.',
  names: ['Lyons', 'Cruse', 'Crystal'],
  quiz: [
    { q: '"Mango" is a ___ of "fruit".', o: ['meronym', 'hyponym', 'synonym', 'superordinate'], a: 1, why: 'A member of the category.' },
    { q: '"Dead" and "alive" are...', o: ['gradable antonyms', 'complementary antonyms', 'synonyms', 'homophones'], a: 1, why: 'There is no middle ground.' }
  ] },

{ id: 'teaching-vocab', area: 'lexis', title: 'Selecting and teaching vocabulary',
  one: 'Choose words by frequency and need, teach them in context, and recycle them on a schedule so they move into long-term memory.',
  quals: ['Delta M1', 'Delta M2', 'Delta M3', 'DipTESOL U1'],
  predict: { q: 'You have 10 minutes. Should you teach 25 new words or 8 words with practice?', a: 'Usually 8 with meaningful practice and later recycling. Memory needs **retrieval and spacing**, not exposure alone.' },
  explain: [
    '**Selection**: frequency lists (e.g. the General Service List, Coxhead\'s **Academic Word List** for EAP), learners\' needs, usefulness and learnability.',
    '**Presentation**: context, visuals, realia, definitions, examples, translation when efficient. Then **practice** (gap fills, collocation matching, personalisation) and **recycling** across lessons.',
    '**Memory**: retrieval practice (testing yourself), spaced repetition and deep processing (using the word to make decisions) beat rereading lists.',
    'Learners also need **strategies**: guessing from context, using monolingual dictionaries, keeping organised notebooks.'
  ],
  kid: 'A new word is like a new path in the forest. Walk it once and the grass grows back. Walk it again after a day, then a week, and it becomes a road.',
  viz: { type: 'flow', cap: 'A vocabulary lesson cycle', steps: [['Meet', 'in a context'], ['Clarify', 'meaning, form, pronunciation'], ['Practise', 'controlled, then personal'], ['Recycle', 'day 2, 5, 12, 30']] },
  points: [
    'Select by **frequency, need, range** and **teachability**.',
    '**AWL** (Coxhead, 2000) lists 570 word families common in academic texts across disciplines.',
    'Clarify **meaning, form and pronunciation**; check with CCQs.',
    '**Retrieval practice** and **spaced repetition** strengthen memory.',
    'Teach **strategies**: guessing from context, dictionary use, word cards.',
    '**Extensive reading** provides incidental vocabulary learning at scale.'
  ],
  classroom: [
    'Health sciences group: you select 10 AWL items that appear in their nursing reading (analyse, factor, significant). Day 1 in context; day 2 a quick quiz; day 5 a speaking task using them; day 12 a writing task.',
    'Word cards game: students test each other, putting cards they miss back into the "again" pile, like the flashcards in this app.'
  ],
  exam: [
    ['Delta M1', 'Paper 2 Task 2 materials often contain vocabulary activities; identify their purpose and the assumptions about learning (e.g. "learners benefit from guessing from context").'],
    ['Delta M2', 'Lexis LSAs need clear selection criteria and a recycling plan.'],
    ['Delta M3', 'A course proposal needs a principled vocabulary strand (e.g. AWL for EAP).']
  ],
  confuse: 'Guessing from context is useful but unreliable if learners know fewer than about 95% of the surrounding words. Pair it with pre-teaching of key items.',
  names: ['Nation', 'Schmitt', 'Coxhead (AWL)', 'Thornbury'],
  quiz: [
    { q: 'The Academic Word List was compiled by...', o: ['Lewis', 'Coxhead', 'Krashen', 'Swain'], a: 1, why: 'Averil Coxhead, 2000.' },
    { q: 'Which best builds long-term memory?', o: ['Rereading word lists', 'Spaced retrieval practice', 'Copying definitions', 'Highlighting'], a: 1, why: 'Recall at increasing intervals.' }
  ] },

/* ===================== PHONOLOGY ===================== */
{ id: 'phonemes', area: 'phonology', title: 'Phonemes and the phonemic chart',
  one: 'A phoneme is a sound that changes meaning. English has about 44 in standard British English, described by voicing, place and manner.',
  quals: ['Delta M1', 'DipTESOL U3', 'DipTESOL U1'],
  predict: { q: '"Ship" and "sheep": how many phonemes are different?', a: 'One: the vowel. /ʃɪp/ vs /ʃiːp/. A pair like this is a **minimal pair**.' },
  explain: [
    'A **phoneme** is the smallest sound unit that distinguishes meaning. The British English model (RP or General British) has about **12 monophthongs, 8 diphthongs and 24 consonants**.',
    'Consonants are described by **voicing** (voiced /b/ vs voiceless /p/), **place of articulation** (bilabial, labiodental, dental, alveolar, post-alveolar, palatal, velar, glottal) and **manner** (plosive, fricative, affricate, nasal, lateral approximant, approximant).',
    'Vowels are described by **tongue height** (close, mid, open), **tongue position** (front, central, back) and **lip shape** (rounded, spread). Length matters too: /iː/ vs /ɪ/.',
    'An **allophone** is a variant that does not change meaning, such as the aspirated /p/ in "pin" vs unaspirated /p/ in "spin".'
  ],
  kid: 'Phonemes are the Lego bricks of sound. Change one brick (ship to sheep) and you build a different word.',
  viz: { type: 'quad', cap: 'Describing /p/ and /b/', items: [['/p/', 'voiceless bilabial plosive'], ['/b/', 'voiced bilabial plosive'], ['/f/', 'voiceless labiodental fricative'], ['/v/', 'voiced labiodental fricative']] },
  points: [
    'About **44 phonemes** in the British model: 20 vowel sounds (including 8 diphthongs) and 24 consonants.',
    '**Minimal pairs** differ by one phoneme: pin and bin, ship and sheep, fan and van.',
    'Consonants: **voicing, place, manner**. Vowels: **height, front or back, lip rounding, length**.',
    'The **schwa** /ə/ is the most common vowel in English and is always unstressed.',
    '**Allophones** are variants of one phoneme; they do not change meaning.',
    'Arabic-speaking learners often confuse /p/ and /b/ (Arabic has no /p/), /f/ and /v/, and the vowels /ɪ/ and /e/.'
  ],
  classroom: [
    'Minimal pair bingo with "pen and Ben, park and bark, pear and bear". Students hold up P or B cards as you say words, then they take your role.',
    'Show the feeling of voicing: hand on the throat for /s/ then /z/. The buzz is the voice.'
  ],
  exam: [
    ['DipTESOL U3', 'The phonology interview includes phonemic transcription and discussion of sounds; you must describe phonemes accurately and say how you would teach them.'],
    ['Delta M1', 'Terms like **allophone**, **minimal pair**, **voiced**, **plosive** appear in Tasks 1 and 2; Task 5 needs phonemic script for underlined items.']
  ],
  confuse: 'A phoneme is not a letter. "Thought" has 7 letters but 3 phonemes: /θɔːt/.',
  names: ['Roach (English Phonetics and Phonology)', 'Underhill (Sound Foundations)', 'Kelly (How to Teach Pronunciation)'],
  quiz: [
    { q: '/v/ is a...', o: ['voiceless bilabial plosive', 'voiced labiodental fricative', 'voiced alveolar nasal', 'voiceless dental fricative'], a: 1, why: 'Top teeth on bottom lip, friction, with voice.' },
    { q: 'How many phonemes are in "thought"?', o: ['7', '5', '3', '4'], a: 2, why: '/θ/ /ɔː/ /t/.' },
    { q: 'Which pair is a minimal pair?', o: ['cat / cut', 'cat / cats', 'cat / kitten', 'cat / act'], a: 0, why: 'They differ in one phoneme only: /æ/ vs /ʌ/.' }
  ] },

{ id: 'word-stress', area: 'phonology', title: 'Syllables, word stress and weak forms',
  one: 'English is a stress language: stressed syllables are longer, louder and clearer, and unstressed ones often reduce to schwa.',
  quals: ['Delta M1', 'DipTESOL U3', 'Delta M2'],
  predict: { q: 'Where is the stress in "photograph", "photographer" and "photographic"?', a: 'PHOtograph, phoTOgrapher, photoGRAphic. The stress moves with the suffix.' },
  explain: [
    'A **syllable** has a vowel at its centre (nucleus), with optional consonants before (onset) and after (coda). English allows heavy clusters: "strengths" /streŋθs/.',
    '**Word stress** makes one syllable more prominent: longer, louder, with clearer vowel quality and often a pitch change. Wrong stress can make a word unintelligible more than a wrong sound.',
    'Unstressed syllables often contain **schwa** /ə/: "banana" /bəˈnɑːnə/. Grammar words have **weak forms** in connected speech: "can" /kən/, "to" /tə/, "for" /fə/, "and" /ən/.'
  ],
  kid: 'In English words, one syllable is the boss. It stands tall and speaks loudly. The others whisper, and many of them say "uh" (schwa).',
  viz: { type: 'flow', cap: 'Stress patterns (O = stressed)', steps: [['Oo', 'TEAcher'], ['oO', 'heLLO'], ['oOo', 'baNAna'], ['ooOo', 'eduCAtion']] },
  points: [
    'Stressed syllables are **longer, louder, higher or changing in pitch**, and have full vowels.',
    'Two-syllable **nouns** usually stress the first syllable (PREsent), **verbs** often the second (preSENT).',
    'Suffixes like **-tion, -ic, -ity** pull stress to the syllable before them.',
    '**Compound nouns** usually stress the first part: GREENhouse vs green HOUSE.',
    '**Weak forms** of function words are normal and necessary for natural rhythm.',
    'Arabic-speaking learners may insert vowels to break clusters ("espring" for "spring") and under-use schwa.'
  ],
  classroom: [
    'Stress sort with health vocabulary: Oo (DOCtor), oO (diSEASE), Ooo (HOSpital), oOo (apPOINTment). Learners clap the pattern, sort the cards, then check in a dictionary.',
    'Weak forms dictation: you say "I\'ve got to go to the bank" at natural speed; students write it, then mark weak forms.'
  ],
  exam: [
    ['DipTESOL U3', 'Expect to discuss stress-shifting suffixes and weak forms, and transcribe words with stress marks.'],
    ['Delta M1', 'Task 5 asks you to show phonological features of underlined phrases, e.g. weak forms and stress.']
  ],
  confuse: 'Stress is not only loudness. Length and vowel quality are often more important. Teach learners to lengthen the stressed vowel and reduce the others.',
  names: ['Roach', 'Underhill', 'Hancock (pronunciation games)'],
  quiz: [
    { q: 'Which word has the pattern oOo?', o: ['TEAcher', 'baNAna', 'CAMera', 'reLAX'], a: 1, why: 'ba-NA-na.' },
    { q: 'The weak form of "for" is...', o: ['/fɔː/', '/fə/', '/fuː/', '/fiː/'], a: 1, why: 'In connected speech: "It\'s for you" /ɪts fə juː/.' }
  ] },

{ id: 'connected-speech', area: 'phonology', title: 'Connected speech',
  one: 'In natural speech, words run together: sounds link, disappear, change and appear. Learners must understand it before they can hear real English.',
  quals: ['Delta M1', 'DipTESOL U3', 'Delta M2'],
  predict: { q: 'Why does "handbag" often sound like "hambag"?', a: '**Assimilation** and **elision**: /d/ disappears (elision), and /n/ becomes /m/ before /b/ (assimilation to a bilabial).' },
  explain: [
    '**Linking**: a consonant at the end of one word links to a vowel at the start of the next ("turn_off" /tɜːnɒf/). Some speakers insert sounds: **intrusive /r/** ("law_r_and order"), linking **/j/** and **/w/** ("I_y_am", "go_w_away").',
    '**Elision**: sounds disappear, especially /t/ and /d/ between consonants ("nex(t) day", "san(d)wich").',
    '**Assimilation**: a sound changes to become more like a neighbour ("ten boys" → /tem bɔɪz/, "this shop" → /ðɪʃ ʃɒp/).',
    '**Weak forms**, **contractions** and **catenation** (chaining words together) complete the picture. These features explain much of learners\' listening difficulty.'
  ],
  kid: 'Spoken English is like a necklace: the words are beads on a string, with no gaps. Sometimes a bead melts into its neighbour or drops off.',
  viz: { type: 'quad', cap: 'Four features', items: [['Linking', 'an_apple /ənæpl/'], ['Elision', 'last night /lɑːs naɪt/'], ['Assimilation', 'ten boys /tem bɔɪz/'], ['Intrusion', 'go_w_on, I_y_am, idea_r_of']] },
  points: [
    '**Linking**: consonant to vowel, and linking /r/ in non-rhotic accents.',
    '**Intrusion**: /j/, /w/ and /r/ inserted between vowels.',
    '**Elision**: loss of sounds, often /t/ and /d/ in consonant clusters.',
    '**Assimilation**: progressive, regressive or coalescent ("did you" → /dɪdʒu/).',
    '**Weak forms** and **contractions** make rhythm.',
    'Teach for **recognition** first (listening), then optionally production.'
  ],
  classroom: [
    'Dictogloss of a natural recording: students write what they hear, then compare with the transcript and circle linked and lost sounds. This turns "I can\'t hear it" into "I can see why I didn\'t hear it".',
    'Back-chaining a phrase: "...want to go" → "...wanna go" → "I want to go there" to show natural pace.'
  ],
  exam: [
    ['DipTESOL U3', 'You may be asked to identify connected speech features in a transcription and explain how to teach them.'],
    ['Delta M1', 'Terms like **elision**, **assimilation**, **catenation**, **intrusive r** appear in Tasks 1 and 2.']
  ],
  confuse: 'Connected speech is not "lazy" or "incorrect" English. It is how fluent speakers of every variety speak. Avoid telling learners it is sloppy.',
  names: ['Roach', 'Field (listening and decoding)', 'Underhill'],
  quiz: [
    { q: '"Did you" → /dɪdʒu/ shows...', o: ['elision', 'coalescent assimilation', 'intrusive /r/', 'linking /w/'], a: 1, why: '/d/ + /j/ merge into /dʒ/.' },
    { q: '"Next day" → /neks deɪ/ shows...', o: ['elision of /t/', 'assimilation', 'intrusion', 'weak form'], a: 0, why: '/t/ is lost between consonants.' }
  ] },

{ id: 'prominence', area: 'phonology', title: 'Sentence stress, prominence and rhythm',
  one: 'Speakers stress the words that carry the message. Moving the stress changes the meaning.',
  quals: ['Delta M1', 'DipTESOL U3'],
  predict: { q: 'What is the difference between "I didn\'t take your PEN" and "I didn\'t take YOUR pen"?', a: 'The first suggests I took something else. The second suggests I took someone else\'s pen. **Prominence** shows contrast and new information.' },
  explain: [
    '**Content words** (nouns, main verbs, adjectives, adverbs) are usually stressed; **function words** (articles, auxiliaries, prepositions) are usually weak.',
    'In each tone unit, one syllable is the most prominent: the **tonic** or **nucleus**. By default it falls on the last content word, but speakers move it for **contrast** or **new information**.',
    'English is often called **stress-timed** (stresses come at roughly regular intervals and syllables between them are squeezed). Research shows this is a tendency rather than strict timing, but the concept helps teaching rhythm.'
  ],
  kid: 'In a sentence, the important words wear bright clothes and the small words wear grey. If you want to surprise people, you dress a different word in bright clothes.',
  viz: { type: 'flow', cap: 'Contrastive stress', steps: [['I didn\'t take YOUR pen', '(I took someone else\'s)'], ['I didn\'t TAKE your pen', '(I borrowed it)'], ['I DIDN\'T take your pen', '(denial)']] },
  points: [
    '**Content words** stressed, **function words** weak, except for emphasis or at the end of a phrase.',
    'The **tonic syllable** carries the main pitch movement and the key information.',
    '**Contrastive stress** corrects or contrasts ("No, I said TUESday").',
    '**Stress-timed** vs **syllable-timed** rhythm is a useful teaching idea but not an absolute fact.',
    'Wrong prominence causes misunderstanding more than many sound errors.'
  ],
  classroom: [
    'Shadowing: students listen to a short dialogue and mark the tonic syllable in each line, then shadow it.',
    'Correction game: "So you\'re from Jeddah?" "No, I\'m from RIYADH." Students practise contrastive stress in pairs.'
  ],
  exam: [
    ['DipTESOL U3', 'Discuss how you would teach prominence and give classroom activities.'],
    ['Delta M1', 'Task 5 asks for phonological features such as contrastive stress in an underlined sentence.']
  ],
  confuse: 'Do not mark every content word with equal stress on the board. Show one main tonic per unit, or learners will speak robotically.',
  names: ['Brazil', 'Roach', 'Halliday'],
  quiz: [
    { q: 'The tonic syllable is...', o: ['the first syllable of each word', 'the most prominent syllable in a tone unit', 'always on a function word', 'a type of vowel'], a: 1, why: 'It carries the main pitch movement.' },
    { q: 'Which word is usually unstressed?', o: ['beautiful', 'quickly', 'the', 'hospital'], a: 2, why: 'Articles are function words.' }
  ] },

{ id: 'intonation', area: 'phonology', title: 'Intonation',
  one: 'Intonation is the music of speech. Pitch movements show attitude, grammar and how information fits into the conversation.',
  quals: ['Delta M1', 'DipTESOL U3'],
  predict: { q: 'Why do teachers say "questions rise, statements fall" is not reliable?', a: 'Wh-questions usually **fall** ("Where do you LIVE↘?"). Rising and falling depend on meaning and discourse, not only on grammar.' },
  explain: [
    'Speech is divided into **tone units**, each with one **tonic syllable** where the main pitch movement happens: **fall**, **rise**, **fall-rise**, **rise-fall** or level.',
    'Intonation has several functions: **attitudinal** (showing feelings), **grammatical** (marking questions and clause boundaries), **discourse** (new vs shared information, turn-taking) and **accentual** (highlighting words).',
    'David **Brazil\'s discourse intonation** model says a **falling tone (proclaiming)** marks new information and a **fall-rise (referring)** marks shared or given information.'
  ],
  kid: 'Your voice is like a slide. Going down sounds finished and sure. Going up sounds open, unsure or interested. Down-and-up says "and there\'s more..."',
  viz: { type: 'quad', cap: 'Common tones', items: [['Fall ↘', 'Finished, certain, new info: "I\'m from TUnis."'], ['Rise ↗', 'Yes or no question, surprise: "Really?"'], ['Fall-rise ↘↗', 'Reservation, shared info: "Well, it\'s possible..."'], ['Rise-fall ↗↘', 'Strong feeling: "Oh, that\'s AMAzing!"']] },
  points: [
    'Speech is organised in **tone units** with one **tonic syllable** each.',
    'Main tones: **fall, rise, fall-rise, rise-fall**.',
    'Functions: **attitudinal, grammatical, discourse, accentual**.',
    '**Question tags**: falling when seeking agreement ("It\'s hot, isn\'t it↘"), rising when really asking ("You\'re coming, aren\'t you↗?").',
    '**Brazil**: proclaiming (new) vs referring (shared) tones.',
    'Intonation is hard to teach through rules; awareness through listening and imitation works better.'
  ],
  classroom: [
    'Feelings dialogue: students say "Really" with different tones to show interest, surprise, boredom and disbelief. Classmates guess the attitude.',
    'Question tag practice: "You\'re from Dammam, aren\'t you?" Checking or really asking? Students choose the tone.'
  ],
  exam: [
    ['DipTESOL U3', 'Explain intonation functions and give practical activities; the interview often tests whether theory links to classroom practice.'],
    ['Delta M1', 'Terms: **tone unit**, **tonic syllable**, **fall-rise**, **discourse intonation**.']
  ],
  confuse: 'Do not teach "rise = question, fall = statement" as a rule. Show that wh-questions usually fall and statements can rise to show surprise.',
  names: ['Brazil', 'Halliday', "O'Connor and Arnold", 'Roach'],
  quiz: [
    { q: 'A question tag seeking agreement usually has a...', o: ['rising tone', 'falling tone', 'level tone', 'no tonic'], a: 1, why: 'Falling: the speaker expects agreement.' },
    { q: 'In Brazil\'s model, the referring tone (fall-rise) marks...', o: ['new information', 'shared or given information', 'anger', 'questions only'], a: 1, why: 'Proclaiming tones mark new information; referring tones mark shared ground.' }
  ] },

{ id: 'teaching-pron', area: 'phonology', title: 'Teaching pronunciation',
  one: 'The goal is intelligibility, not a native accent. Integrate pronunciation into every lesson and prioritise the features that block understanding.',
  quals: ['Delta M2', 'DipTESOL U3', 'DipTESOL U4', 'Delta M1'],
  predict: { q: 'Which matters more for being understood: /θ/ in "think" or word stress?', a: 'Usually **word stress** and **vowel length**. Many international speakers replace /θ/ with /t/ or /s/ and are still understood. Jenkins\' Lingua Franca Core lists /θ/ and /ð/ as non-core.' },
  explain: [
    '**Intelligibility** (being understood) and **comprehensibility** (how easy you are to understand) are now the main goals, rather than a native-like accent.',
    'Jennifer **Jenkins\' Lingua Franca Core** identifies features essential for English as a lingua franca: most consonants, vowel length contrasts, nuclear (tonic) stress, and avoiding consonant cluster simplification at word beginnings. Non-core features include /θ/ and /ð/, weak forms and some intonation.',
    'Techniques include **drilling** (choral, individual, substitution), **back-chaining**, **minimal pairs**, **shadowing**, **mirroring**, using the **phonemic chart**, visual cues (gestures, finger stress), and **integrating** pronunciation into language clarification.'
  ],
  kid: 'You are not trying to sound like the Queen of England. You are trying to make sure every listener on Earth understands you the first time.',
  viz: { type: 'compare', cap: 'Lingua Franca Core (simplified)', a: { t: 'Core: prioritise', items: ['Most consonant sounds', 'Long vs short vowels', 'Tonic (nuclear) stress', 'Initial consonant clusters'] }, b: { t: 'Non-core: lower priority', items: ['/θ/ and /ð/', 'Weak forms', 'Exact vowel quality', 'Pitch movements in detail'] } },
  points: [
    'Aim for **intelligibility**; accent is part of identity.',
    '**Integrate** pronunciation in every language clarification stage: model, drill, mark stress, show weak forms.',
    '**Prioritise** by impact on understanding and by learners\' L1.',
    '**Drilling** techniques: choral, individual, back-chaining, substitution, open pair.',
    '**Perception before production**: learners must hear a contrast before they can produce it.',
    'Use the **phonemic chart** (Underhill) as a visual map students can point to.'
  ],
  classroom: [
    'With Saudi learners, focus first on /p/ vs /b/, vowel length (ship, sheep), word stress and cluster epenthesis. Leave /θ/ for later.',
    'Back-chain "comfortable": "-ble", "-fortable", "comfortable". Then drill in a sentence: "Are you comfortable?"'
  ],
  exam: [
    ['DipTESOL U3', 'The interview tests both your theory and your classroom choices. Expect "How would you help a learner who..." questions.'],
    ['DipTESOL U4', 'Assessed lessons are expected to integrate phonology; examiners look for it.'],
    ['Delta M2', 'A pronunciation LSA (e.g. "connected speech for listening") is allowed and stands out.']
  ],
  confuse: 'Do not leave pronunciation to a separate "pron slot" at the end of the lesson. Integrate it where the language appears.',
  names: ['Jenkins (Lingua Franca Core)', 'Underhill', 'Kelly', 'Derwing and Munro (intelligibility)'],
  quiz: [
    { q: 'In Jenkins\' Lingua Franca Core, which is non-core?', o: ['Vowel length', '/θ/ and /ð/', 'Nuclear stress', 'Initial clusters'], a: 1, why: 'Substitutions for /θ/ and /ð/ rarely cause breakdown in lingua franca communication.' },
    { q: 'Back-chaining means...', o: ['drilling a sentence from the end backwards', 'correcting errors later', 'reading aloud', 'choral repetition only'], a: 0, why: 'Start with the last part and add earlier chunks.' }
  ] },

{ id: 'sound-spelling', area: 'phonology', title: 'Sound and spelling',
  one: 'English spelling is not random. It is complex but patterned, and teaching the patterns helps both reading and pronunciation.',
  quals: ['DipTESOL U3', 'DipTESOL U1', 'Delta M1'],
  predict: { q: 'Why is "a" in "hat" short but in "hate" long?', a: 'The **silent final e** (magic e) usually makes the previous vowel "say its name": hat /hæt/, hate /heɪt/.' },
  explain: [
    'English has about 26 letters but 44 phonemes, so letters combine and repeat. **Grapheme**: a letter or letter group representing a phoneme ("sh", "igh").',
    'Patterns include the **silent e**, **doubled consonants** after short vowels (hopping vs hoping), common spellings for each vowel sound, and **morphological spelling** (sign, signature, where the "g" shows the word family).',
    '**Phonics** teaches the sound-letter links explicitly, especially to young learners and beginners. Many Arabic speakers face difficulty because Arabic script writes few short vowels.'
  ],
  kid: 'English spelling is like a city with old streets. It looks messy, but there are maps (patterns) if you learn them.',
  viz: { type: 'compare', cap: 'One sound, many spellings: /iː/', a: { t: 'Spellings', items: ['ee: see', 'ea: sea', 'e: me', 'ie: piece', 'ei: receive'] }, b: { t: 'One spelling, many sounds: "ough"', items: ['though /əʊ/', 'through /uː/', 'tough /ʌf/', 'thought /ɔː/'] } },
  points: [
    '**Grapheme-phoneme correspondence**: the link between letters and sounds.',
    '**Silent e** lengthens the previous vowel.',
    '**Doubling** after a short stressed vowel: big → bigger, begin → beginning.',
    'Spelling often preserves **meaning** across a word family (sign, signal).',
    '**Phonics** (synthetic and analytic) for beginners and young learners.',
    'L1 script differences affect reading speed and spelling errors.'
  ],
  classroom: [
    'With KG3 boys, synthetic phonics: s-a-t blended into "sat", with actions for each sound.',
    'EAP spelling clinic: students sort their own misspellings by pattern (doubling, -ie/-ei, silent letters) instead of copying words ten times.'
  ],
  exam: [
    ['DipTESOL U3', 'Sound-spelling links are part of phonology in classroom practice: be ready to explain them with examples.'],
    ['Delta M1', 'Terms: **grapheme**, **phonics**, **homograph**.']
  ],
  confuse: '"English spelling has no rules" is not true. About three quarters of words follow regular patterns; the exceptions are often very frequent words.',
  names: ['Kelly', 'Cook (The English Writing System)', 'Underhill'],
  quiz: [
    { q: 'A grapheme is...', o: ['a sound', 'a letter or group of letters representing a sound', 'a type of syllable', 'a stress mark'], a: 1, why: 'e.g. "sh" represents /ʃ/.' },
    { q: 'Why is it "hopping" (from hop) but "hoping" (from hope)?', o: ['Random spelling', 'Doubling keeps the short vowel', 'Silent letters', 'Assimilation'], a: 1, why: 'The double consonant protects the short vowel /ɒ/.' }
  ] },

/* ===================== DISCOURSE ===================== */
{ id: 'cohesion', area: 'discourse', title: 'Cohesion',
  one: 'Cohesion is the grammar and vocabulary that ties sentences together on the surface of a text.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: '"Sara bought a car. It was red." What links the two sentences?', a: '"It" refers back to "a car". This is **anaphoric reference**, a cohesive device.' },
  explain: [
    'Halliday and Hasan (1976) described five types of cohesion: **reference**, **substitution**, **ellipsis**, **conjunction** and **lexical cohesion**.',
    '**Reference** uses pronouns, demonstratives and the article to point back (**anaphoric**), forward (**cataphoric**) or outside the text (**exophoric**). **Substitution** replaces a word with "one", "do" or "so" ("I think so"). **Ellipsis** leaves words out ("Are you coming? I might").',
    '**Conjunction** links ideas with additive (and, moreover), adversative (but, however), causal (so, therefore) and temporal (then, finally) connectors. **Lexical cohesion** uses repetition, synonyms, superordinates and **lexical chains**.'
  ],
  kid: 'Cohesion is the glue and the tape that hold sentences together. Without it, a text is a pile of loose bricks.',
  viz: { type: 'flow', cap: 'Halliday and Hasan\'s five devices', steps: [['Reference', 'it, this, the'], ['Substitution', 'one, do, so'], ['Ellipsis', 'leaving out'], ['Conjunction', 'however, so'], ['Lexical', 'repetition, synonyms']] },
  points: [
    '**Reference**: anaphoric (back), cataphoric (forward), exophoric (outside the text).',
    '**Substitution**: one, ones, do, so, the same.',
    '**Ellipsis**: omission of recoverable words.',
    '**Conjunction**: additive, adversative, causal, temporal.',
    '**Lexical cohesion**: repetition, synonymy, hyponymy, collocation, lexical chains.',
    'Learners often over-use linkers ("Moreover, Furthermore, In addition") and under-use reference and lexical cohesion.'
  ],
  classroom: [
    'EAP: students colour-code a model paragraph: pronouns in blue, linkers in orange, synonym chains in green. Then they revise their own paragraph, replacing two linkers with reference or summary nouns ("This problem...").',
    'Reconstruct a text from jumbled sentences using the cohesive clues.'
  ],
  exam: [
    ['Delta M1', 'Paper 1 Task 3 or Task 5 texts are often analysed for cohesive features; terms like **anaphoric reference** and **ellipsis** are common definitions.'],
    ['Delta M2', 'A skills LSA in writing (e.g. "cohesion in argument essays") is a strong choice for EAP.']
  ],
  confuse: 'Cohesion is not coherence. A text can be cohesive (full of linkers) but make no sense, or coherent with few explicit links.',
  names: ['Halliday and Hasan', 'McCarthy (Discourse Analysis for Language Teachers)', 'Thornbury (Beyond the Sentence)'],
  quiz: [
    { q: '"When he arrived, Ali was tired." "He" is...', o: ['anaphoric', 'cataphoric', 'exophoric', 'ellipsis'], a: 1, why: 'It points forward to "Ali".' },
    { q: '"I need a pen. Have you got one?" "One" is...', o: ['reference', 'substitution', 'conjunction', 'ellipsis'], a: 1, why: '"One" replaces "a pen".' },
    { q: 'Which is lexical cohesion?', o: ['however', 'it', 'car ... vehicle', 'so'], a: 2, why: 'A superordinate links back to the earlier word.' }
  ] },

{ id: 'coherence-genre', area: 'discourse', title: 'Coherence, genre and register',
  one: 'Coherence is whether a text makes sense as a whole. Genre is the recognised shape a text takes for its purpose and community.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1', 'Delta M3'],
  predict: { q: 'What makes a recipe a recipe, even in a language you don\'t speak?', a: 'Its **genre** features: a title, a list of ingredients with quantities, numbered steps with imperatives. Readers recognise the structure from its purpose.' },
  explain: [
    '**Coherence** depends on logical organisation, relevance and the reader\'s knowledge (**schema**). It is created partly by the text and partly by the reader.',
    'A **genre** is a type of text with a shared **purpose**, typical **structure** (stages or **moves**) and **language features**: a CV, a research article introduction, a complaint email. Swales\' **CARS** model describes research article introductions as moves: establish a territory, establish a niche, occupy the niche.',
    '**Register** describes how language varies with situation. Halliday\'s three variables: **field** (topic and activity), **tenor** (relationship between participants) and **mode** (spoken or written channel).'
  ],
  kid: 'A text is coherent if it makes sense from start to finish, like a good story. A genre is a costume that tells you what kind of text it is: a wedding invitation looks different from a job advert.',
  viz: { type: 'layers', cap: 'Register: field, tenor, mode', items: [['Field', 'What is it about? (medicine, football)'], ['Tenor', 'Who is talking to whom? (doctor and patient, friends)'], ['Mode', 'Spoken or written? Live or planned?']] },
  points: [
    '**Coherence**: logical sense; depends on organisation and reader schema.',
    '**Genre**: purpose + structure + language features, shared by a discourse community (Swales).',
    '**Moves** and **stages** describe genre structure.',
    '**Register**: field, tenor, mode (Halliday).',
    'The **genre approach** to writing teaches models, analysis, then guided and independent writing.',
    'Problem-solution, claim-counterclaim and general-specific are common **text patterns** (Hoey, McCarthy).'
  ],
  classroom: [
    'EAP: students analyse three abstracts and label the moves (background, aim, method, results, conclusion), then write their own abstract for a short study.',
    'Register shift: rewrite a WhatsApp message to a classmate as an email to the head of department.'
  ],
  exam: [
    ['Delta M1', 'Paper 1 Task 5 asks you to identify **genre features** of an authentic text, then analyse language. Know how to name moves and features precisely.'],
    ['Delta M3', 'An EAP or business specialism needs genre analysis of target texts in the needs analysis.'],
    ['DipTESOL U1', 'Essays on teaching writing often require a genre-based argument.']
  ],
  confuse: 'Genre is not the same as text type. "Narrative" or "argument" are text types (rhetorical patterns); "news report", "complaint letter" are genres.',
  names: ['Swales', 'Halliday', 'Hoey', 'Hyland', 'Martin and Rothery'],
  quiz: [
    { q: 'In Halliday\'s register model, "tenor" refers to...', o: ['the topic', 'the relationship between participants', 'the channel', 'the length'], a: 1, why: 'Field = topic, tenor = relationship, mode = channel.' },
    { q: 'Swales\' CARS model describes...', o: ['research article introductions', 'phonemes', 'reading strategies', 'test types'], a: 0, why: 'Create A Research Space.' }
  ] },

{ id: 'spoken-discourse', area: 'discourse', title: 'Spoken discourse and conversation',
  one: 'Speech has its own grammar and structure: turn-taking, adjacency pairs, discourse markers, vague language and ellipsis.',
  quals: ['Delta M1', 'Delta M2', 'DipTESOL U1'],
  predict: { q: '"That teacher, she\'s amazing." Is this a grammar mistake?', a: 'No. It is a **head** (fronted topic), a normal feature of **spoken grammar**. Written grammar would be "That teacher is amazing".' },
  explain: [
    'Conversation is organised in **turns**. Speakers signal when they want a turn, when they are finishing, and how to keep the floor. **Adjacency pairs** are linked turns: question-answer, offer-acceptance, greeting-greeting.',
    '**Spoken grammar** includes **heads** ("This town, it\'s..."), **tails** ("It\'s lovely, that dress"), **ellipsis** ("Sounds good"), **vague language** ("and stuff like that", "sort of"), **discourse markers** (well, so, anyway, I mean) and **backchannelling** (mm, right, really?).',
    'Corpus research (Carter and McCarthy) showed that these features are frequent and systematic, not errors.'
  ],
  kid: 'Talking is like playing tennis. You hit, they hit back. You need signals to start, keep and pass the ball.',
  viz: { type: 'compare', cap: 'Spoken vs written', a: { t: 'Spoken', items: ['Unplanned, real time', 'Heads, tails, ellipsis', 'Discourse markers, fillers', 'Shared context, deixis'] }, b: { t: 'Written', items: ['Planned, edited', 'Full sentences, subordination', 'Lexical density, nominalisation', 'Context must be explicit'] } },
  points: [
    '**Turn-taking**: taking, holding and giving the floor.',
    '**Adjacency pairs** and preferred vs dispreferred responses.',
    '**Heads and tails**, **ellipsis**, **vague language**.',
    '**Discourse markers** organise talk and signal attitude.',
    '**Backchannelling** shows listening.',
    'Written language has higher **lexical density**; speech has more grammatical intricacy.'
  ],
  classroom: [
    'Your pre-sessional students give answers in seminars that sound like essays. Teach seminar moves: interrupting politely, building on a point, backchannelling.',
    'Transcript analysis: students find discourse markers and vague language in a real conversation, then use two in a role play.'
  ],
  exam: [
    ['Delta M1', 'Terms: **adjacency pair**, **backchannelling**, **discourse marker**, **heads and tails**, **lexical density**.'],
    ['Delta M2', 'A speaking LSA on "turn-taking in discussions" is a common, assessable choice.']
  ],
  confuse: 'Do not "correct" heads, tails and ellipsis in speaking tasks. They are features of fluent speech.',
  names: ['Carter and McCarthy', 'Sacks, Schegloff and Jefferson', 'Thornbury and Slade'],
  quiz: [
    { q: '"It\'s really good, that film." "That film" is a...', o: ['head', 'tail', 'ellipsis', 'adjacency pair'], a: 1, why: 'A tail comes after the clause.' },
    { q: 'An adjacency pair is...', o: ['two linked turns, like question and answer', 'two synonyms', 'a minimal pair', 'a compound noun'], a: 0, why: 'The first part creates an expectation of the second.' }
  ] },

{ id: 'pragmatics', area: 'discourse', title: 'Pragmatics',
  one: 'Pragmatics is meaning in context: what speakers intend, how politeness works, and what we read between the lines.',
  quals: ['Delta M1', 'DipTESOL U1'],
  predict: { q: 'A colleague says "It\'s cold in here" and looks at the open window. What do they mean?', a: 'Probably "Please close the window". This is an **indirect speech act**: the form is a statement, the function is a request.' },
  explain: [
    '**Speech act theory** (Austin, Searle): utterances do things. The **locution** is what is said, the **illocution** is the intended function (request, warning, apology), the **perlocution** is the effect.',
    '**Grice\'s cooperative principle** has four maxims: quantity, quality, relation, manner. When we deliberately break one, listeners infer an **implicature**.',
    '**Politeness theory** (Brown and Levinson) uses the idea of **face**: positive face (wanting to be liked) and negative face (not wanting to be imposed on). We soften requests with hedges, modals and indirectness. Norms differ across cultures (**cross-cultural pragmatics**).'
  ],
  kid: 'Pragmatics is reading between the lines. When your mum says "Is that your room?" in a certain voice, she is not asking a question.',
  viz: { type: 'flow', cap: 'One utterance, three levels', steps: [['Locution', '"It\'s cold in here."'], ['Illocution', 'Request: close the window'], ['Perlocution', 'Someone closes it']] },
  points: [
    '**Form vs function**: one form, many functions; one function, many forms.',
    '**Speech acts**: locution, illocution, perlocution; direct and indirect.',
    '**Grice**: maxims of quantity, quality, relation, manner; **implicature**.',
    '**Face**: positive and negative; **face-threatening acts** and politeness strategies.',
    '**Pragmatic failure** can seem rude even when grammar is perfect.',
    'Teaching pragmatics: awareness of indirectness, softening, and cultural norms.'
  ],
  classroom: [
    'Email to a professor: students compare "I want an extension" with "I was wondering if it might be possible to have a short extension". Which is more appropriate and why?',
    'Discuss how refusals work in Arabic and English (directness, reasons, apologies), and practise softened refusals.'
  ],
  exam: [
    ['Delta M1', 'Terms: **illocutionary force**, **implicature**, **face**, **indirect speech act**, **function**.'],
    ['DipTESOL U1', 'Questions on teaching functional language often need pragmatic analysis.']
  ],
  confuse: 'Polite forms are not universal. What is polite in one culture can be over-formal or cold in another. Avoid presenting one "polite English".',
  names: ['Austin', 'Searle', 'Grice', 'Brown and Levinson', 'Thomas (pragmatic failure)'],
  quiz: [
    { q: 'The intended function of an utterance is its...', o: ['locution', 'illocution', 'perlocution', 'implicature'], a: 1, why: 'Illocution = what the speaker means to do.' },
    { q: 'Negative face is the wish to...', o: ['be liked', 'not be imposed on', 'speak first', 'be correct'], a: 1, why: 'Freedom from imposition.' }
  ] }
];

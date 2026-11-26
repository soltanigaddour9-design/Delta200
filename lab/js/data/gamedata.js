// Data for games
export const SORT_SETS = [
  { id: 'val-rel', title: 'Validity or reliability?', buckets: ['Validity', 'Reliability'], items: [
    ['Tests writing by asking learners to write', 0], ['Two markers give the same score', 1], ['Covers the whole syllabus', 0], ['Clear marking criteria for raters', 1], ['Results predict later university success', 0], ['Many items rather than a few', 1], ['Measures the skill it claims to measure', 0], ['Same score if the test is taken again', 1] ] },
  { id: 'td-bu', title: 'Top-down or bottom-up?', buckets: ['Top-down', 'Bottom-up'], items: [
    ['Predicting content from the title', 0], ['Recognising words in fast speech', 1], ['Using knowledge of the topic', 0], ['Hearing the weak form of "to"', 1], ['Using knowledge of text structure', 0], ['Decoding letters into sounds', 1], ['Guessing what the speaker will say next', 0], ['Parsing the grammar of a long sentence', 1] ] },
  { id: 'cohesion', title: 'Which cohesive device?', buckets: ['Reference', 'Substitution', 'Ellipsis', 'Conjunction', 'Lexical'], items: [
    ['Ali bought a car. It was red.', 0], ['I need a pen. Have you got one?', 1], ['"Are you coming?" "I might."', 2], ['It was late. However, we continued.', 3], ['the hospital ... the building', 4], ['"Is it raining?" "I think so."', 1], ['This problem has no easy solution.', 0], ['nurses, doctors, patients, ward', 4], ['First, ... Then, ... Finally, ...', 3] ] },
  { id: 'modality', title: 'Epistemic or deontic?', buckets: ['Epistemic (certainty)', 'Deontic (obligation, permission)'], items: [
    ['She must be tired after that shift.', 0], ['You must sign the form.', 1], ['It might rain later.', 0], ['You can leave early today.', 1], ['He can\'t have finished already.', 0], ['Students have to wear ID cards.', 1], ['That should be the right answer.', 0], ['You should see a doctor.', 1] ] },
  { id: 'theories', title: 'Which theory?', buckets: ['Behaviourism', 'Innatism', 'Interactionist', 'Sociocultural'], items: [
    ['Habits formed by reinforcement', 0], ['Language Acquisition Device', 1], ['Negotiation of meaning', 2], ['Zone of proximal development', 3], ['Pattern drills', 0], ['Universal Grammar', 1], ['Scaffolding', 3], ['Clarification requests help acquisition', 2], ['Errors are bad habits', 0], ['Children say "goed" without hearing it', 1] ] },
  { id: 'connected', title: 'Connected speech feature', buckets: ['Linking', 'Elision', 'Assimilation', 'Intrusion'], items: [
    ['turn_off', 0], ['next day → /neks deɪ/', 1], ['ten boys → /tem bɔɪz/', 2], ['law_r_and order', 3], ['an_apple', 0], ['sandwich → /ˈsænwɪtʃ/', 1], ['this shop → /ðɪʃ ʃɒp/', 2], ['go_w_away', 3], ['did you → /dɪdʒu/', 2] ] },
  { id: 'needs', title: 'Necessity, lack or want?', buckets: ['Necessity', 'Lack', 'Want'], items: [
    ['Nursing students must write care plans', 0], ['Students cannot paraphrase without copying', 1], ['Students ask for more speaking practice', 2], ['Lectures last 90 minutes in English', 0], ['Students miss key points in lectures', 1], ['Students would like grammar explanations', 2], ['Assignments require APA referencing', 0], ['Students\' citations are incomplete', 1] ] },
  { id: 'formative', title: 'Formative or summative?', buckets: ['Formative', 'Summative'], items: [
    ['Feedback on a first draft', 0], ['End-of-year exam', 1], ['Weekly low-stakes quiz used to reteach', 0], ['Final course grade', 1], ['Peer feedback with a checklist', 0], ['IELTS result for a visa', 1], ['Exit ticket at the end of a lesson', 0] ] },
  { id: 'wordform', title: 'Word formation process', buckets: ['Affixation', 'Compounding', 'Conversion', 'Blending', 'Clipping'], items: [
    ['unhappiness', 0], ['classroom', 1], ['to email (from an email)', 2], ['brunch', 3], ['lab', 4], ['smog', 3], ['to google', 2], ['washing machine', 1], ['exam', 4], ['rewrite', 0] ] },
  { id: 'syllabus', title: 'Synthetic or analytic syllabus?', buckets: ['Synthetic', 'Analytic'], items: [
    ['Structural (grammar items)', 0], ['Task-based', 1], ['Lexical item lists', 0], ['Process or negotiated', 1], ['Content-based (CLIL)', 1], ['Discrete functions taught one by one', 0] ] },
  { id: 'feedback', title: 'Which oral feedback type?', buckets: ['Recast', 'Elicitation', 'Metalinguistic', 'Clarification request'], items: [
    ['"Oh, you went to the clinic?"', 0], ['"Yesterday I...?"', 1], ['"Past tense, please."', 2], ['"Sorry? I don\'t understand."', 3], ['"You need a past form there."', 2], ['"So you have finished it."', 0], ['"How do we say that in the past?"', 1], ['"Pardon?"', 3] ] }
];

export const ORDER_SETS = [
  { id: 'ppp', title: 'A PPP grammar lesson', steps: ['Lead-in and context', 'Elicit the target language', 'Clarify meaning with CCQs', 'Clarify form and drill pronunciation', 'Controlled practice', 'Feedback on controlled practice', 'Freer practice', 'Delayed error correction'] },
  { id: 'tbl', title: "Willis's task-based lesson", steps: ['Introduce the topic', 'Give task instructions', 'Learners do the task in pairs', 'Learners plan their report', 'Groups report to the class', 'Language analysis', 'Language practice'] },
  { id: 'reading', title: 'A receptive skills (reading) lesson', steps: ['Lead-in and activate schema', 'Pre-teach blocking vocabulary', 'Set a gist task', 'Check the gist', 'Set a detailed task', 'Check answers with evidence from the text', 'Focus on useful language from the text', 'Personal response or follow-up task'] },
  { id: 'ttt', title: 'A Test-Teach-Test lesson', steps: ['Diagnostic task', 'Monitor and note gaps', 'Clarify the language learners lacked', 'Controlled practice', 'Second task', 'Feedback on the second task'] },
  { id: 'process', title: 'Process-genre writing', steps: ['Analyse a model text', 'Brainstorm ideas', 'Plan and outline', 'Write a first draft', 'Peer feedback with criteria', 'Revise content and organisation', 'Edit for accuracy', 'Publish or submit'] },
  { id: 'm3', title: 'Building a Delta Module 3 assignment', steps: ['Choose and narrow the specialism', 'Review the literature: key issues', 'Design needs analysis tools', 'Give the diagnostic test', 'Analyse and interpret the results', 'Set priorities and objectives', 'Plan the course', 'Design assessment and evaluation', 'Write the conclusion'] },
  { id: 'ar', title: 'An action research cycle', steps: ['Identify a classroom puzzle', 'Read and plan a change', 'Act: try the change', 'Observe and collect data', 'Reflect on the evidence', 'Revise the plan for the next cycle'] },
  { id: 'ielts', title: 'IELTS Task 2: the 6-minute plan', steps: ['Decode the question', 'Write the answer in one sentence', 'Idea dump in the margin', 'Pick the two strongest ideas', 'Build the paragraph skeleton', 'Check every paragraph proves the answer', 'Write'] }
];

export const ERROR_ITEMS = [
  { s: 'He is doctor in a big hospital.', a: 0, why: 'Arabic has no indefinite article, so learners often omit "a". This is L1 transfer.' },
  { s: 'Yesterday I goed to the pharmacy.', a: 1, why: 'The regular -ed rule is applied to an irregular verb: overgeneralisation.' },
  { s: 'The book which I read it was very useful.', a: 0, why: 'Arabic relative clauses include a resumptive pronoun ("it"). This is L1 transfer.' },
  { s: 'She don\'t like the night shift.', a: 2, why: 'Third person -s is acquired late by learners of all L1s. This is developmental simplification.' },
  { s: 'We discussed about the results.', a: 0, why: 'Arabic and French use a preposition here ("discuss about"); English "discuss" takes a direct object.' },
  { s: 'The childs are waiting outside.', a: 1, why: 'The regular plural -s is applied to an irregular noun: overgeneralisation.' },
  { s: '(A learner who used past tenses correctly all lesson, tired at the end:) "Last week I go to Jeddah."', a: 3, why: 'The learner knows the form and can self-correct: a slip, or mistake in Corder\'s terms.' },
  { s: 'I have twenty-five years.', a: 0, why: 'French "j\'ai vingt-cinq ans" and similar L1 patterns: L1 transfer.' },
  { s: 'If I will see him, I will tell him.', a: 1, why: 'The learner extends "will for future" to the if-clause: an intralingual overgeneralisation.' },
  { s: 'My favourite season is espring.', a: 0, why: 'Arabic phonology does not allow initial /sp/ clusters, so learners add a vowel (epenthesis): phonological L1 transfer.' },
  { s: 'He go to university every day.', a: 2, why: 'Omitting -s simplifies the system; it is common across L1s at this stage.' },
  { s: 'She is more taller than her sister.', a: 1, why: 'Double marking of the comparative: the learner overapplies "more" to a short adjective.' }
];
export const ERROR_TYPES = ['L1 transfer', 'Overgeneralisation', 'Developmental simplification', 'Slip (mistake)'];

export const TEST_ITEMS = [
  { s: 'A speaking test is scored by one teacher with no criteria. A colleague gives very different scores to the same students.', a: 3, why: 'Different scores from different raters: inter-rater reliability is low.' },
  { s: 'A course aims to develop academic writing, but the final "writing" test is 50 multiple-choice grammar items.', a: 0, why: 'It does not measure the writing construct: weak construct validity.' },
  { s: 'Because the final exam has no speaking, teachers stop doing speaking activities.', a: 4, why: 'The test changes teaching in a harmful way: negative washback.' },
  { s: 'A college wants a 20-minute individual interview for each of 1,200 applicants, with two examiners each, in one day.', a: 5, why: 'Not feasible in time and staff: a practicality problem.' },
  { s: 'An end-of-course achievement test only covers units 1 and 2 of a 10-unit course.', a: 1, why: 'It does not sample the syllabus: weak content validity.' },
  { s: 'Business English learners complain the placement test asks them to name farm animals in pictures.', a: 2, why: 'It does not look relevant to the users: low face validity.' },
  { s: 'The same marker gives an essay 6 on Monday and 4 on Friday.', a: 3, why: 'Inconsistency within one rater: intra-rater reliability.' },
  { s: 'Scores on a new university entry test closely match students\' grades at the end of their first year.', a: 6, why: 'The test predicts later performance: good predictive validity.' },
  { s: 'A reading test uses only 10 true/false items.', a: 3, why: 'Few items and 50% guessing reduce reliability.' },
  { s: 'After a speaking paper was added to a national exam, teachers started teaching more speaking.', a: 4, why: 'The test encourages useful teaching: positive washback.' }
];
export const TEST_TYPES = ['Construct validity', 'Content validity', 'Face validity', 'Reliability', 'Washback', 'Practicality', 'Predictive validity'];

// Phoneme Lab: word, correct British transcription, distractors
export const PHON_ITEMS = [
  ['ship', 'ʃɪp', ['ʃiːp', 'sɪp', 'tʃɪp']], ['sheep', 'ʃiːp', ['ʃɪp', 'siːp', 'ʃeɪp']], ['thought', 'θɔːt', ['ðɔːt', 'θəʊt', 'tɔːt']],
  ['though', 'ðəʊ', ['θəʊ', 'ðaʊ', 'ðuː']], ['nurse', 'nɜːs', ['nʊəs', 'nɜːz', 'nɑːs']], ['teacher', 'ˈtiːtʃə', ['ˈtɪtʃə', 'ˈtiːʃə', 'tiːˈtʃə']],
  ['banana', 'bəˈnɑːnə', ['ˈbænənə', 'bæˈnænə', 'bəˈnænə']], ['doctor', 'ˈdɒktə', ['ˈdɔːktə', 'dɒkˈtɔː', 'ˈdʌktə']], ['patient', 'ˈpeɪʃnt', ['ˈpætiənt', 'ˈbeɪʃnt', 'peɪˈʃnt']],
  ['measure', 'ˈmeʒə', ['ˈmeʃə', 'ˈmiːʒə', 'ˈmedʒə']], ['judge', 'dʒʌdʒ', ['dʒʌʒ', 'tʃʌtʃ', 'dʒɒdʒ']], ['church', 'tʃɜːtʃ', ['ʃɜːʃ', 'tʃɜːʃ', 'dʒɜːdʒ']],
  ['yellow', 'ˈjeləʊ', ['ˈjelaʊ', 'ˈdʒeləʊ', 'ˈjɪləʊ']], ['thing', 'θɪŋ', ['θɪn', 'ðɪŋ', 'θɪŋɡ']], ['cup', 'kʌp', ['kæp', 'kɒp', 'kʊp']],
  ['bird', 'bɜːd', ['bɪəd', 'bɑːd', 'bɔːd']], ['foot', 'fʊt', ['fuːt', 'fʌt', 'fɒt']], ['boy', 'bɔɪ', ['baɪ', 'bəʊ', 'pɔɪ']],
  ['hair', 'heə', ['hɪə', 'haɪə', 'hɜː']], ['photography', 'fəˈtɒɡrəfi', ['ˈfəʊtəɡrɑːfi', 'fəʊˈtɒɡrɑːfi', 'fəˈtəʊɡrəfi']], ['comfortable', 'ˈkʌmftəbl', ['kʌmˈfɔːtəbl', 'ˈkɒmfɔːtəbl', 'ˈkʌmfɔːtəbl']],
  ['vegetable', 'ˈvedʒtəbl', ['ˈveɡətəbl', 'vedʒəˈteɪbl', 'ˈfedʒtəbl']], ['question', 'ˈkwestʃən', ['ˈkwesʃən', 'ˈkestʃən', 'kwesˈtʃən']], ['vision', 'ˈvɪʒn', ['ˈvɪʃn', 'ˈfɪʒn', 'ˈviːʒn']],
  ['analysis', 'əˈnæləsɪs', ['ˈænəlaɪsɪs', 'ænəˈlɪsɪs', 'əˈnɑːlɪsɪs']], ['develop', 'dɪˈveləp', ['ˈdevələp', 'dɪˈfeləp', 'diːˈveləʊp']], ['education', 'ˌedʒuˈkeɪʃn', ['ˌedʒuˈkæʃn', 'ˈedʒukeɪʃn', 'ˌeduˈkeɪʃn']],
  ['Wednesday', 'ˈwenzdeɪ', ['ˈwednezdeɪ', 'ˈwenzdeɪz', 'wenˈzdeɪ']], ['clothes', 'kləʊðz', ['ˈkləʊðɪz', 'kləʊθs', 'klɒðz']], ['pleasure', 'ˈpleʒə', ['ˈpliːʒə', 'ˈpleʃə', 'ˈbleʒə']]
];
export const IPA_KEYS = ['iː', 'ɪ', 'e', 'æ', 'ʌ', 'ɑː', 'ɒ', 'ɔː', 'ʊ', 'uː', 'ɜː', 'ə', 'eɪ', 'aɪ', 'ɔɪ', 'əʊ', 'aʊ', 'ɪə', 'eə', 'ʊə', 'p', 'b', 't', 'd', 'k', 'ɡ', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'h', 'tʃ', 'dʒ', 'm', 'n', 'ŋ', 'l', 'r', 'w', 'j', 'ˈ'];

// IELTS Academic: Writing and Speaking content for Kader.
// All model answers, prompts and chart data are original and invented for practice.

export const IELTS_SECTIONS = [
  { id: 'hub', href: '#/ielts', name: 'IELTS corridor', short: 'Start here', c: '#2f5bea', sec: 'ielts' },
  { id: 'task1', href: '#/ielts/task1', name: 'Task 1: graphs and diagrams', short: 'Task 1', c: '#ffc21a', sec: 'ielts-t1' },
  { id: 'task2', href: '#/ielts/task2', name: 'Task 2: essays', short: 'Task 2', c: '#8b5cf6', sec: 'ielts-t2' },
  { id: 'speaking', href: '#/ielts/speaking', name: 'Speaking: organise your ideas', short: 'Speaking', c: '#23afa9', sec: 'ielts-sp' },
  { id: 'vocab', href: '#/ielts/vocab', name: 'C2 vocabulary', short: 'C2 words', c: '#f2b705', sec: 'ielts-voc' },
  { id: 'play', href: '#/ielts/play', name: 'IELTS practice games', short: 'Games', c: '#ff5a36', sec: 'ielts-play' }
];

/* The colour code from your profile: fixed meanings, everywhere */
export const COLOUR_CODE = [
  ['#2f6bff', 'Blue', 'the question or the task'],
  ['#111111', 'Black', 'your answer, from memory first'],
  ['#ff8a00', 'Orange', 'a gap: what you could not recall'],
  ['#18b26b', 'Green', 'a tick: right, or done'],
  ['#e5382b', 'Red', 'a mistake to log']
];

export const WRITING_CRITERIA = [
  { k: 'TA / TR', name: 'Task Achievement (Task 1) and Task Response (Task 2)', nine: 'Every part of the task is answered. Task 1 has a clear overview and well-chosen key features. Task 2 has one clear position from start to end, with ideas fully developed and supported.', you: 'Your risk: knowledge telling. You write everything you know instead of answering the exact question.' },
  { k: 'CC', name: 'Coherence and Cohesion', nine: 'The reader never notices the joins. Paragraphs are logical, and linking is so natural it attracts no attention.', you: 'Your risk: no planned stop. Paragraphs grow until time runs out. The word budget fixes this.' },
  { k: 'LR', name: 'Lexical Resource', nine: 'A wide range of words used naturally and precisely. Less common words fit their context. Errors are rare slips.', you: 'Your risk is small: precision, not range. Choose the exact word, never the fanciest one.' },
  { k: 'GRA', name: 'Grammatical Range and Accuracy', nine: 'A wide range of structures used flexibly. Almost every sentence is error-free.', you: 'Your risk: long sentences written fast create slips. Keep 4 minutes to check.' }
];

export const SPEAKING_CRITERIA = [
  { k: 'FC', name: 'Fluency and Coherence', nine: 'Speaks fluently with rare repetition. Pauses are for thinking about ideas, never for finding words. Answers are fully coherent and well developed.', you: 'Your risk: intuition. The first idea goes out unfiltered and the answer has no shape or stop. The frames fix this.' },
  { k: 'LR', name: 'Lexical Resource', nine: 'Uses vocabulary with full flexibility and precision, including idiomatic language used naturally and accurately.', you: 'Use idioms only where a native speaker would. One natural phrase beats three forced ones.' },
  { k: 'GRA', name: 'Grammatical Range and Accuracy', nine: 'A full range of structures used naturally. Consistently accurate, apart from the kind of slips native speakers make.', you: 'Mix structures naturally: conditionals for hypotheticals, perfect forms for experience, passives for general claims.' },
  { k: 'P', name: 'Pronunciation', nine: 'A full range of features (stress, rhythm, intonation, connected speech) used with precision. Effortless to understand.', you: 'Your accent is not the issue. Chunking and sentence stress are what move 8 to 9.' }
];

export const EXAM_FACTS = [
  ['Writing', '60 minutes', 'Task 1: at least 150 words, about 20 minutes. Task 2: at least 250 words, about 40 minutes. Task 2 counts twice as much as Task 1.'],
  ['Speaking', '11 to 14 minutes', 'Part 1: 4 to 5 minutes of familiar questions. Part 2: 1 minute to prepare, then speak for up to 2 minutes. Part 3: 4 to 5 minutes of abstract discussion.'],
  ['Marking', '4 criteria each', 'Each criterion is worth a quarter of the task score. A band 9 needs all four at 9.']
];

/* Your IELTS Advantage VIP course, linked to this section (watch, quiz, recall, use) */
export const VIP_LOOP = [
  ['Watch', 'One VIP module, once, at 1.25x speed. No notes.'],
  ['Quiz', 'Do the module\'s Assessment straight away.'],
  ['Recall', '3 minutes: write the rules as questions and answers, from memory.'],
  ['Use', 'Play the matching game here, or write one real paragraph.']
];
export const VIP_LINKS = {
  task1: [['Writing 3.0: Task 1 Academic modules', 'Then play Overview Spotter, Group It and Data Precision here.'], ['Unlimited Practice Package: Task 1 practice tests', 'Write one timed Task 1 a week with the 3-minute plan.'], ['One-on-One Expert Writing Feedback', 'Send at least one Task 1, so a trained marker checks your overview.']],
  task2: [['Writing 3.0: Task 2 (12 modules)', 'After each module, play Question Decoder or Paragraph Builder.'], ['Planning Templates (VIP Bonuses)', 'Compare them with the 6-minute plan here and keep one.'], ['Examiner Insights: Band 9 Essay Bank', 'Outline one essay a week from memory, then compare.'], ['One-on-One Expert Writing Feedback (5)', 'Trust this marker over any AI score.']],
  speaking: [['Speaking 3.0 (10 modules)', 'After each module, run 5 questions in Frame Trainer.'], ['Examiner-Conducted Speaking Tests', 'Note which frame the band 9 speaker uses for each answer.'], ['1-on-1 Lesson', 'Use it for a full speaking mock aiming for 9.']],
  vocab: [['English Foundations Pack: vocabulary', 'Only the units your feedback flags.'], ['Examiner Insights: Examiner-Approved Essays', 'Collect 3 natural collocations per essay into Upgrade It practice.']]
};

/* ============================ TASK 1 ============================ */
export const TASK1_PLAN = [
  ['Identify', '1 min', 'What type is it? Is there time (change) or no time (static)? What are the units? This decides your tense and your verbs.'],
  ['Overview', '1 min', 'Circle the two biggest features: the main trend, the highest or lowest, the biggest change. No numbers.'],
  ['Group', '30 s', 'Decide which data goes in Body 1 and which in Body 2. Group by similarity, never by order on the page.'],
  ['Select', '30 s', 'Pick 2 or 3 numbers per group that prove your overview. Leave the rest out.']
];
export const TASK1_SHAPE = [
  ['Introduction', '1 sentence · about 25 words', 'Paraphrase what the visual shows: what, where, when, and the unit. Never copy the question.'],
  ['Overview', '2 sentences · about 35 words', 'Start with "Overall,". The two biggest features, with no numbers. A band 7 or above needs this paragraph.'],
  ['Body 1', 'about 55 words', 'The first group of details, with data and comparisons.'],
  ['Body 2', 'about 55 words', 'The second group, with data and comparisons.']
];
export const TASK1_BUDGET = 'Word budget: 170 to 190 words. Time: 3 minutes to plan, 14 to write, 3 to check. No conclusion and no opinion: the overview already does that job.';

export const TASK1_TYPES = [
  { id: 'line', name: 'Line graph', time: 'Change over time', icon: 'line',
    what: 'How one or more things change over a period of time.',
    look: ['The overall direction of each line, start to end', 'The highest and lowest points', 'Where lines cross', 'The sharpest rise or fall'],
    group: 'Group lines that behave the same way (for example, the rising lines in Body 1 and the stable or falling line in Body 2). If there is only one line, split the period into two stages.',
    overview: 'Overall, [the main trend], while [the exception]. [The line that ends highest, or the biggest change.]',
    lang: ['rose steadily', 'climbed', 'surged', 'dipped', 'plateaued at', 'fluctuated around', 'peaked at', 'overtook', 'ended the period at', 'more than tripled'],
    tense: 'Past simple for past dates. For projections: "is expected to", "is projected to".',
    trap: 'Describing every point year by year. Describe the shape and compare the lines instead.',
    prompt: 'The graph below shows the percentage of adults who cycled to work at least once a week in three cities between 2004 and 2024.',
    model: { intro: 'The line graph illustrates the proportion of adults in three cities, Lindby, Corvale and Portmere, who cycled to work at least once a week from 2004 to 2024.',
      overview: 'Overall, cycling to work became more common in Lindby and Portmere, whereas the figure for Corvale fluctuated without a clear trend. Lindby, which began below Corvale, ended the period with the highest proportion of cyclists.',
      body: 'Lindby saw the most dramatic growth. Its figure rose steadily from 12% in 2004 to 21% a decade later, overtaking Corvale, before climbing to 38% by 2024, more than three times its starting level.' },
    chart: { type: 'line', unit: '%', max: 40, x: ['2004', '2009', '2014', '2019', '2024'], series: [['Lindby', [12, 15, 21, 30, 38]], ['Corvale', [22, 27, 20, 25, 23]], ['Portmere', [8, 9, 9, 11, 24]]] } },

  { id: 'bar', name: 'Bar chart', time: 'Usually static (it can show years too)', icon: 'bar',
    what: 'Compares amounts across categories. If the bars show years, treat it like a line graph.',
    look: ['The tallest and shortest bars', 'Patterns across groups', 'Reversals: one category rising while another falls', 'Very large gaps'],
    group: 'Group by pattern, not by the order of the bars. Here, the activities that decrease with age go in Body 1 and the one that increases goes in Body 2.',
    overview: 'Overall, [category A] [pattern], whereas [category B] [opposite pattern]. [The biggest gap or the most extreme value.]',
    lang: ['considerably more than', 'twice as much as', 'by far the most', 'the figure for', 'respectively', 'followed by', 'the reverse was true for', 'roughly a quarter of'],
    tense: 'Past simple for a past year. Present simple if no time is given.',
    trap: 'Going bar by bar without comparing. Every body sentence should compare at least two figures.',
    prompt: 'The chart below shows the average number of hours per week that people in four age groups spent on three leisure activities in 2023.',
    model: { intro: 'The bar chart compares the average weekly time that four age groups spent on sport, online gaming and reading in 2023.',
      overview: 'Overall, younger people devoted far more time to gaming and sport, whereas reading became steadily more popular with age. Gaming showed the widest gap between the youngest and oldest groups.',
      body: '16 to 24-year-olds spent 9 hours a week gaming, almost twice as long as the next group, while the over-65s spent just half an hour. The reverse was true for reading, which rose from 2 hours among the youngest to 6.5 hours among the oldest.' },
    chart: { type: 'bar', unit: 'hours', max: 10, x: ['16 to 24', '25 to 44', '45 to 64', '65+'], series: [['Sport', [5.5, 3.5, 2.5, 2]], ['Gaming', [9, 4.5, 1.5, 0.5]], ['Reading', [2, 2.5, 4, 6.5]]] } },

  { id: 'pie', name: 'Pie charts', time: 'Static, or two years compared', icon: 'pie',
    what: 'Shows how a whole is divided into parts. Two pies usually means a comparison between years or places.',
    look: ['The biggest and smallest slice in each pie', 'Which slices grew and which shrank', 'Any change in rank'],
    group: 'Body 1: the large categories that shrank. Body 2: the categories that grew, plus the smallest one.',
    overview: 'Overall, [biggest slice] remained the largest in both years, although [change]. Meanwhile, [the most striking growth or fall].',
    lang: ['accounted for', 'made up', 'constituted', 'the share of', 'just over two fifths', 'just under a quarter', 'roughly one in eight', 'the smallest segment'],
    tense: 'Past simple for past years. Use proportion language, not "number".',
    trap: 'Listing every slice in both years. Compare the change instead: "fell from 58% to 41%".',
    prompt: 'The pie charts below show how household energy use in one country was divided among five purposes in 1990 and 2020.',
    model: { intro: 'The pie charts compare the proportion of household energy used for five purposes in one country in 1990 and 2020.',
      overview: 'Overall, heating remained the largest use of household energy in both years, although its share fell considerably. Meanwhile, the proportions used by appliances and cooling rose sharply.',
      body: 'In 1990, heating accounted for well over half of all household energy (58%), but by 2020 this had dropped to just over two fifths. Appliances, by contrast, more than doubled their share, from 10% to just under a quarter.' },
    chart: { type: 'pie', charts: [['1990', [['Heating', 58], ['Water heating', 22], ['Appliances', 10], ['Cooking', 7], ['Cooling', 3]]], ['2020', [['Heating', 41], ['Water heating', 18], ['Appliances', 24], ['Cooking', 5], ['Cooling', 12]]]] } },

  { id: 'table', name: 'Table', time: 'Often change over time', icon: 'table',
    what: 'Lots of exact numbers. Your job is to select, not to copy.',
    look: ['The highest and lowest figures', 'The biggest increase and decrease', 'Patterns along rows and down columns'],
    group: 'Body 1: the categories that grew strongly. Body 2: the stable or falling ones.',
    overview: 'Overall, [highest category] [led throughout], and [biggest change]. [The exception].',
    lang: ['attracted', 'saw a rise in', 'more than tripled', 'remained broadly stable', 'declined gradually', 'the only one to', 'in thousands'],
    tense: 'Past simple. Mention the unit once ("in thousands") and then write numbers naturally.',
    trap: 'Copying the table into sentences. Use about 6 to 8 numbers in total.',
    prompt: 'The table below shows the number of visitors (in thousands) to four museums in one city in 2012, 2017 and 2022.',
    model: { intro: 'The table shows how many people, in thousands, visited four museums in a city in 2012, 2017 and 2022.',
      overview: 'Overall, the science museum attracted the most visitors throughout the period, while the children\'s museum saw the most dramatic growth. The art gallery was the only museum to lose visitors.',
      body: 'Visitor numbers at the children\'s museum more than tripled, from 90,000 in 2012 to 320,000 in 2022. The science museum also grew strongly, rising from 410,000 to 690,000.' },
    chart: { type: 'table', head: ['Museum', '2012', '2017', '2022'], rows: [['Science museum', 410, 520, 690], ['Art gallery', 380, 360, 300], ['History museum', 250, 270, 280], ['Children\'s museum', 90, 150, 320]] } },

  { id: 'mixed', name: 'Two different charts', time: 'Mixed', icon: 'mixed',
    what: 'Two visuals that are connected, for example a bar chart and a pie chart.',
    look: ['The main feature of each visual', 'The link between them'],
    group: 'One body paragraph per visual. The overview must mention both.',
    overview: 'Overall, [main feature of chart 1], and [main feature of chart 2].',
    lang: ['enrolments', 'despite a sharp fall in', 'by far the largest source', 'the remainder', 'in turn'],
    tense: 'Follow each chart: past simple for past years.',
    trap: 'An overview that describes only one chart.',
    prompt: 'The bar chart shows the number of international students at one university between 2015 and 2023. The pie chart shows where these students came from in 2023.',
    model: { intro: 'The bar chart illustrates international student enrolments at a university from 2015 to 2023, and the pie chart shows the regions these students came from in 2023.',
      overview: 'Overall, enrolments rose over the period despite a sharp fall in 2021, and Asia was by far the largest source of international students in 2023.',
      body: 'Numbers climbed from 1,200 in 2015 to 2,100 in 2019, before dropping to 1,500 in 2021. They then recovered strongly, reaching a peak of 2,600 in 2023.' },
    chart: { type: 'mixed', bar: { unit: 'students', max: 3000, x: ['2015', '2017', '2019', '2021', '2023'], series: [['Students', [1200, 1650, 2100, 1500, 2600]]] }, pie: ['2023', [['Asia', 46], ['Middle East', 21], ['Europe', 15], ['Africa', 12], ['Americas', 6]]] } },

  { id: 'process', name: 'Process diagram', time: 'No time, a sequence', icon: 'process',
    what: 'The stages of how something is made or how something happens.',
    look: ['How many stages there are', 'The first and last stage', 'Whether it is natural (a cycle) or man-made (a production line)'],
    group: 'Split the stages roughly in half: preparation in Body 1, transformation and the final product in Body 2.',
    overview: 'Overall, there are [number] main stages, beginning with [first] and ending with [last].',
    lang: ['are harvested', 'are transported to', 'is crushed into', 'once', 'after this', 'subsequently', 'at the next stage', 'in order to', 'finally'],
    tense: 'Present simple passive for a man-made process ("the olives are washed").',
    trap: 'Forgetting the overview because there are no numbers. Count the stages: that is your overview.',
    prompt: 'The diagram below shows how olive oil is produced commercially.',
    model: { intro: 'The diagram illustrates the commercial production of olive oil.',
      overview: 'Overall, there are seven main stages, beginning with harvesting the olives and ending with bottling the oil. The process moves from preparing the fruit to separating the oil from water and solids.',
      body: 'First, the olives are harvested and transported to the mill, where they are washed and the leaves are removed. They are then crushed into a paste, which is mixed slowly so that small drops of oil can join together.' },
    chart: { type: 'process', steps: ['Harvesting', 'Washing and removing leaves', 'Crushing into paste', 'Slow mixing', 'Separating oil from water and solids', 'Filtering and storage', 'Bottling'] } },

  { id: 'map', name: 'Maps', time: 'Change between two dates', icon: 'map',
    what: 'How a place has changed: what appeared, what disappeared, what stayed the same.',
    look: ['What was built, removed or converted', 'What stayed the same', 'Directions: north, south, east, west'],
    group: 'Group by area (the north and the coast) or by type (homes, then leisure and transport).',
    overview: 'Overall, [place] was transformed from [before] into [after], with [biggest change].',
    lang: ['was replaced by', 'was converted into', 'made way for', 'was extended', 'was constructed', 'to the north of', 'adjacent to', 'remained unchanged'],
    tense: 'Past simple passive for the past. Present perfect passive when the second map is "now" ("has been converted").',
    trap: 'Vague locations ("there", "next to it"). Use compass points and landmarks.',
    prompt: 'The maps below show the village of Seabrook in 2000 and today.',
    model: { intro: 'The maps show how the village of Seabrook has changed between 2000 and the present day.',
      overview: 'Overall, Seabrook has been transformed from a quiet farming village into a residential and tourist area, with most of its farmland and part of the forest making way for new buildings.',
      body: 'In the north, the farmland has been replaced by a housing estate, which is connected to the main road by a new link road. To the east, part of the forest has been cleared to make way for a car park.' },
    chart: { type: 'map', panels: [
      ['2000', [['field', 8, 8, 52, 30, 'Farmland'], ['forest', 64, 8, 30, 52, 'Forest'], ['building', 12, 44, 18, 14, 'School'], ['water', 8, 72, 86, 22, 'Sea'], ['harbour', 36, 64, 14, 10, 'Small harbour'], ['road', 0, 40, 100, 3, '']]],
      ['Today', [['housing', 8, 8, 52, 30, 'Housing estate'], ['forest', 74, 8, 20, 52, 'Forest'], ['parking', 62, 26, 12, 16, 'Car park'], ['building', 12, 44, 26, 14, 'School (extended)'], ['water', 8, 72, 86, 22, 'Sea'], ['harbour', 30, 62, 32, 13, 'Marina'], ['road', 0, 40, 100, 3, ''], ['road', 32, 8, 3, 32, '']]]] } }
];

/* ============================ TASK 2 ============================ */
export const SIX_MIN_PLAN = [
  ['Decode', 60, 'Underline the task words ("discuss both views", "to what extent") and any limiting words. Rewrite the question in 8 words or fewer.'],
  ['Answer first', 60, 'Write your position in one sentence. If you cannot, you are not ready to plan.'],
  ['Pick two', 120, 'Idea dump in the margin, 2 minutes at most. Circle the two ideas that best prove your answer. Everything else is out.'],
  ['Skeleton', 60, 'Introduction: paraphrase and answer. Body 1 and Body 2: idea, why, example. Conclusion: the answer again.'],
  ['Check', 60, 'Does every paragraph prove the one-sentence answer? If not, change the paragraph, never the answer.']
];
export const TASK2_SHAPE = [
  ['Introduction', '40 to 50 words', 'Paraphrase the question in one sentence. Then your answer (thesis) in one sentence.'],
  ['Body 1', '110 to 120 words', 'Point, Explain, Example, Link.'],
  ['Body 2', '110 to 120 words', 'Point, Explain, Example, Link.'],
  ['Conclusion', '30 to 40 words', 'Your answer again in new words, plus the two reasons. Nothing new.']
];
export const PEEL = [
  ['Point', 'The topic sentence. It answers the question directly.', '#2f6bff'],
  ['Explain', 'Why or how. One or two sentences of reasoning.', '#111111'],
  ['Example', 'A specific, realistic case: a country, a group, a situation.', '#ff8a00'],
  ['Link', 'Back to the question: why this proves your answer.', '#18b26b']
];

export const TASK2_TYPES = [
  { id: 'opinion', name: 'Opinion (agree or disagree)', c: '#8b5cf6',
    spot: ['To what extent do you agree or disagree?', 'Do you agree or disagree?'],
    decide: 'Choose one position you can prove with two reasons. Full agreement is the safest. Partial agreement is fine if it is clear and consistent.',
    plan: [['Body 1', 'Reason 1 for your position'], ['Body 2', 'Reason 2 for your position (or, if you partly agree, the limit of your agreement)']],
    thesis: 'I [completely / largely] agree that [paraphrase], because [reason 1] and [reason 2].',
    prompt: 'Some people believe that university education should be free for all students. To what extent do you agree or disagree?',
    intro: 'In many countries, students now pay high fees for higher education, and some argue that university should be free for everyone. I largely agree with this view, because free tuition widens access to opportunity and the whole of society benefits from a more educated workforce.',
    trap: 'Discussing both sides equally and never deciding. Or changing your position in the conclusion.' },
  { id: 'discussion', name: 'Discuss both views', c: '#ff7a21',
    spot: ['Discuss both these views and give your own opinion.', 'Some people think... while others believe...'],
    decide: 'You must cover both views fairly AND give your opinion. Put your opinion in the introduction, not only in the conclusion.',
    plan: [['Body 1', 'The view you agree with less, explained fairly'], ['Body 2', 'The view you agree with, with stronger support: this is your opinion']],
    thesis: 'While some argue that [view A], I believe that [view B], because [main reason].',
    prompt: 'Some people think children should start learning a foreign language at primary school, while others believe they should wait until secondary school. Discuss both views and give your own opinion.',
    intro: 'Opinions differ on the best age to begin learning a foreign language at school. While some argue that it should wait until secondary school, I believe that starting at primary school is more effective, because young children acquire pronunciation more naturally and have more years of practice.',
    trap: 'Giving your opinion only in the last line, or forgetting it completely.' },
  { id: 'advdis', name: 'Advantages and disadvantages', c: '#ffc21a',
    spot: ['What are the advantages and disadvantages?', 'Do the advantages outweigh the disadvantages?'],
    decide: 'If the question says "outweigh", it is an opinion: say which side is bigger. If not, cover both sides and you may still say which is stronger.',
    plan: [['Body 1', 'The weaker side (for "outweigh": the side that loses)'], ['Body 2', 'The stronger side, developed in more depth']],
    thesis: 'Although [trend] has some drawbacks, such as [X], I believe its benefits clearly outweigh them.',
    prompt: 'More and more people now work from home rather than in an office. Do the advantages of this trend outweigh the disadvantages?',
    intro: 'Working from home has become common for millions of employees. Although this trend can leave some workers isolated, I believe its advantages clearly outweigh this drawback, because it saves time, reduces costs and gives people more control over their working day.',
    trap: 'Not answering "outweigh". Or listing four small advantages instead of developing one or two well.' },
  { id: 'problem', name: 'Problem (or cause) and solution', c: '#23afa9',
    spot: ['What are the causes of this problem?', 'What problems does this cause?', 'What measures / solutions could be taken?'],
    decide: 'Match every solution to a cause or problem you named. Concrete solutions only: who does what.',
    plan: [['Body 1', 'Two causes (or problems), each explained'], ['Body 2', 'A matching solution for each one']],
    thesis: 'This problem is mainly caused by [cause 1] and [cause 2], and it could be tackled by [solution 1] and [solution 2].',
    prompt: 'In many cities, traffic congestion is becoming a serious problem. What are the main causes, and what measures could be taken to reduce it?',
    intro: 'Traffic congestion now affects most large cities. This problem is mainly caused by a reliance on private cars and poorly planned public transport, and it could be reduced by charging drivers to enter city centres and investing in fast, reliable bus and metro networks.',
    trap: 'Solutions that do not match the causes, or vague ones such as "the government should do something".' },
  { id: 'twopart', name: 'Two-part question', c: '#e5382b',
    spot: ['Two direct questions, for example: Why is this happening? What effects does it have?'],
    decide: 'Two questions means two body paragraphs, one for each. Answer both briefly in the introduction.',
    plan: [['Body 1', 'The full answer to question 1'], ['Body 2', 'The full answer to question 2']],
    thesis: '[Answer to question 1 in one clause], and [answer to question 2 in one clause].',
    prompt: 'Many young adults today choose to live alone. Why is this happening? What effects does this have on society?',
    intro: 'A growing number of young adults now choose to live on their own. This trend is largely driven by higher incomes and a desire for independence, and it is changing society by increasing demand for small homes while weakening some traditional family ties.',
    trap: 'Answering one question in depth and the other in one line.' },
  { id: 'development', name: 'Positive or negative development', c: '#2f5bea',
    spot: ['Is this a positive or negative development?', 'Is this a good or bad thing?'],
    decide: 'This is an opinion. Say "positive" or "negative" (or "largely positive") and prove it.',
    plan: [['Body 1', 'Main reason for your verdict'], ['Body 2', 'Second reason, or the limit (while keeping your verdict clear)']],
    thesis: 'I believe this is a largely [positive / negative] development, because [reason 1] and [reason 2].',
    prompt: 'In many countries, more people are choosing to study online instead of attending classes in person. Is this a positive or negative development?',
    intro: 'Online study has grown rapidly and now replaces classroom learning for many people. I believe this is a largely positive development, because it makes education accessible to those who cannot attend in person and allows learners to study at their own pace.',
    trap: 'Writing a "both sides" essay with no verdict.' }
];

/* Prompts for the planner and the Question Decoder game */
export const T2_PROMPTS = [
  { type: 'opinion', q: 'Some people believe that all young people should be required to do one year of community service after school. To what extent do you agree or disagree?',
    good: 'I agree that a year of community service should be required, because it develops practical skills and strengthens young people\'s connection to their community.',
    bad: ['Community service has many advantages and disadvantages for young people and society.', 'Young people today face many pressures, such as exams and social media.', 'Governments should spend more money on universities.'] },
  { type: 'opinion', q: 'Museums and art galleries should focus on displaying works from their own country rather than from other countries. Do you agree or disagree?',
    good: 'I disagree, because displaying international works broadens visitors\' understanding of other cultures and attracts more tourists.',
    bad: ['Museums are important places in every city.', 'There are many points of view about museums and art.', 'Art from other countries is often very expensive to buy.'] },
  { type: 'discussion', q: 'Some people think that the best way to reduce crime is to give longer prison sentences. Others believe there are better ways. Discuss both views and give your own opinion.',
    good: 'While longer sentences may deter some offenders, I believe that education and rehabilitation reduce crime more effectively in the long term.',
    bad: ['Crime is a serious problem in many countries around the world.', 'Longer prison sentences are expensive.', 'This essay will discuss both views.'] },
  { type: 'discussion', q: 'Some believe that technology has made people more connected, while others feel it has made them more isolated. Discuss both views and give your opinion.',
    good: 'Although technology allows constant contact, I believe it has left many people more isolated, because online interaction often replaces deeper face-to-face relationships.',
    bad: ['Technology has developed very quickly in recent decades.', 'Some people think technology connects us and some think it isolates us.', 'Smartphones should be banned in schools.'] },
  { type: 'advdis', q: 'Many companies now use artificial intelligence to select job applicants. Do the advantages of this outweigh the disadvantages?',
    good: 'Although AI can make hiring faster, I believe the disadvantages outweigh the benefits, because these systems can repeat hidden biases and overlook candidates with unusual strengths.',
    bad: ['Artificial intelligence is used in many industries today.', 'There are advantages and disadvantages to using AI in recruitment.', 'Applicants should prepare carefully for job interviews.'] },
  { type: 'advdis', q: 'In some countries, more and more people are choosing to have their weddings abroad. What are the advantages and disadvantages of this?',
    good: 'Weddings abroad can be cheaper and more memorable, but they often prevent elderly relatives from attending and can be difficult to organise from a distance.',
    bad: ['Weddings are very important events in every culture.', 'I strongly believe weddings should always take place at home.', 'Travel has become cheaper because of low-cost airlines.'] },
  { type: 'problem', q: 'Obesity rates among children are rising in many countries. What are the causes of this problem, and what can be done to solve it?',
    good: 'Childhood obesity is mainly caused by unhealthy processed food and inactive lifestyles, and it could be reduced by taxing sugary products and increasing daily physical activity in schools.',
    bad: ['Obesity is a serious problem for children and adults.', 'Parents should love their children more.', 'Many children enjoy playing video games after school.'] },
  { type: 'problem', q: 'Many skilled workers leave developing countries to work abroad. What problems does this cause, and what could be done about it?',
    good: 'This loss of skilled workers weakens public services and slows economic growth, but it could be reduced by improving salaries and offering incentives for professionals to return.',
    bad: ['Working abroad is an exciting experience for many people.', 'There are many reasons why people move to other countries.', 'Developing countries should build more airports.'] },
  { type: 'twopart', q: 'Fewer people today read printed newspapers. Why is this happening? Is this a positive or negative development?',
    good: 'Fewer people read printed newspapers mainly because news is free and instant online, and I believe this is a largely negative development, because online news is often less reliable.',
    bad: ['Newspapers have existed for hundreds of years.', 'Reading the news is a good habit for everyone.', 'Online news is free and fast.'] },
  { type: 'twopart', q: 'People in many countries are spending less time cooking at home. What are the reasons for this? How does this affect families?',
    good: 'People cook less mainly because of longer working hours and cheap delivery apps, and this weakens family routines such as shared meals.',
    bad: ['Cooking is an important life skill.', 'Many families eat fast food.', 'Restaurants should provide healthier menus.'] },
  { type: 'development', q: 'More and more older people are continuing to work after the usual retirement age. Is this a positive or negative development?',
    good: 'I believe this is a largely positive development, because it keeps older people mentally active and allows them to pass on valuable experience.',
    bad: ['People are living longer than ever before.', 'Retirement has advantages and disadvantages.', 'Young people find it hard to get jobs.'] },
  { type: 'development', q: 'In many cities, people now prefer to rent homes rather than buy them. Is this a positive or negative trend?',
    good: 'I believe this is a mostly negative trend, because renters lack long-term security and miss the chance to build wealth through property.',
    bad: ['Houses are very expensive in big cities.', 'Some people rent and some people buy.', 'Banks should lower their interest rates.'] }
];
export const T2_TYPE_NAMES = { opinion: 'Opinion', discussion: 'Discuss both views', advdis: 'Advantages and disadvantages', problem: 'Problem and solution', twopart: 'Two-part question', development: 'Positive or negative' };

/* ============================ SPEAKING ============================ */
export const SPEAK_DIAGNOSIS = {
  strength: 'You are fast and fluent, and your Speaking is already 8.0. That is the hardest part, and you have it.',
  risk: 'You speak on intuition: the first idea goes out unfiltered, the answer has no shape, and there is no planned stop. Answers wander, repeat, or end abruptly.',
  fix: 'Keep the fluency. Add one decision per question: which frame? It takes one second, and it gives every answer a beginning, a middle and a stop.'
};
export const FRAMES = [
  { id: 'ar', name: 'A-R', full: 'Answer + Reason', part: 'Part 1', when: 'Every Part 1 question (familiar topics).', secs: 20,
    boxes: [['Answer', 'A direct answer in the first 3 words.', 0], ['Reason', 'Why, plus one tiny detail. Then stop.', 6]],
    launch: ['Yes, definitely, mainly because...', 'Not really, to be honest. I\'d rather...', 'It depends. On weekdays..., but at weekends...'],
    q: 'Do you enjoy cooking?',
    model: 'Yes, I do, especially on Fridays. It\'s the one day I have time to cook properly, and I find it relaxing after a busy week. I usually make couscous the way my mother does.' },
  { id: 'star', name: 'STAR', full: 'Situation, Trigger, Action, Result', part: 'Part 2 stories', when: 'Cue cards about a time, an event or an experience: "Describe a time when..."', secs: 120,
    boxes: [['Situation', 'When, where, who. Paint the scene in 2 or 3 sentences.', 0], ['Trigger', 'What happened or what problem appeared.', 25], ['Action', 'What you did, in detail. This is the longest box.', 50], ['Result', 'How it ended and how you see it now. Then stop.', 95]],
    launch: ['This happened about two years ago, when...', 'What made it tricky was...', 'So what I did was...', 'Looking back, it really taught me...'],
    q: 'Describe a time when you had to solve a problem quickly.',
    model: 'Situation: last year, on the first day of a new term. Trigger: the projector failed ten minutes before my class. Action: I turned the slides into a board activity and got students to build the key points with me. Result: it became one of my most interactive lessons, and it showed me I rely on technology less than I thought.' },
  { id: 'ppf', name: 'Past, Present, Future', full: 'Past, Present, Future', part: 'Part 2 people, places, things · Part 3 change', when: 'Cue cards about a person, a place or an object, and Part 3 questions about change: "How has... changed?" "Will... be different in future?"', secs: 120,
    boxes: [['Past', 'How you first met it, found it, or how it used to be.', 0], ['Present', 'What it is like now: details, feelings. The longest box.', 35], ['Future', 'What you hope, plan or predict.', 85], ['Why it matters', 'One closing line. That is your stop signal.', 108]],
    launch: ['I first came across it when...', 'These days, ...', 'In the future, I\'d love to...', 'And that\'s really why it matters to me.'],
    q: 'Describe a place you like to visit in your free time.',
    model: 'Past: I discovered a small café near my home soon after I moved to a new city. Present: now I go every Friday; it is quiet, the coffee is strong, and I plan my week there. Future: I\'d like to bring my study group there. Why it matters: it is the one place where my week feels under control.' },
  { id: 'arec', name: 'A-R-E-C', full: 'Answer, Reason, Example, Contrast', part: 'Part 3 opinions', when: 'Part 3 questions that ask for your view, a reason, a comparison or a judgement.', secs: 45,
    boxes: [['Answer', 'Your view in one sentence.', 0], ['Reason', 'Why: the main reason.', 8], ['Example', 'A real or typical case.', 20], ['Contrast', '"That said, ..." One sentence that shows the other side. Then stop.', 34]],
    launch: ['I\'d say...', 'The main reason is that...', 'Take ... for example.', 'That said, ...'],
    q: 'Do you think schools should teach practical life skills such as managing money?',
    model: 'I\'d say yes, absolutely. The main reason is that many young people leave school without knowing how to budget or avoid debt. Take credit cards: lots of students get one at university with no idea how interest works. That said, parents still have a role, because habits around money start at home.' }
];
export const FRAME_DECIDER = [
  ['Part 1?', 'A-R', 'ar'],
  ['Part 2 about a time, an event or an experience?', 'STAR', 'star'],
  ['Part 2 about a person, a place or a thing?', 'Past, Present, Future', 'ppf'],
  ['Part 3 about change over time?', 'Past, Present, Future', 'ppf'],
  ['Any other Part 3 question?', 'A-R-E-C', 'arec']
];
export const SPEAK_TIMES = [['Part 1', '15 to 25 seconds', '2 or 3 sentences'], ['Part 2', 'Until the examiner stops you', 'Aim for the full 2 minutes'], ['Part 3', '30 to 50 seconds', '4 or 5 sentences']];

export const SPEAK_QUESTIONS = [
  { part: 1, f: 'ar', q: 'Do you prefer mornings or evenings?' },
  { part: 1, f: 'ar', q: 'How often do you use public transport?' },
  { part: 1, f: 'ar', q: 'Did you enjoy studying English at school?' },
  { part: 1, f: 'ar', q: 'Do you like spending time outdoors?' },
  { part: 1, f: 'ar', q: 'What kind of music do you listen to?' },
  { part: 1, f: 'ar', q: 'Is your home town a good place for young people?' },
  { part: 2, f: 'star', q: 'Describe a time when you helped someone.', cues: ['who you helped', 'what the situation was', 'what you did', 'how you felt about it'] },
  { part: 2, f: 'star', q: 'Describe an occasion when you received good news.', cues: ['what the news was', 'when and how you received it', 'what you did next', 'why it was important to you'] },
  { part: 2, f: 'star', q: 'Describe a time when you changed your opinion about something.', cues: ['what your first opinion was', 'what made you change it', 'what you did', 'how you feel about it now'] },
  { part: 2, f: 'star', q: 'Describe a journey that did not go as planned.', cues: ['where you were going', 'what went wrong', 'what you did', 'what you learned'] },
  { part: 2, f: 'ppf', q: 'Describe a teacher who influenced you.', cues: ['who this teacher was', 'what they taught', 'what they were like', 'why they influenced you'] },
  { part: 2, f: 'ppf', q: 'Describe an object you use every day.', cues: ['what it is', 'how long you have had it', 'how you use it', 'why it is important to you'] },
  { part: 2, f: 'ppf', q: 'Describe a city you would like to live in.', cues: ['where it is', 'how you know about it', 'what you would do there', 'why you would like to live there'] },
  { part: 2, f: 'ppf', q: 'Describe a skill you would like to improve.', cues: ['what the skill is', 'how you learned it', 'how good you are now', 'why you want to improve it'] },
  { part: 3, f: 'arec', q: 'Should governments spend more on public transport than on roads?' },
  { part: 3, f: 'arec', q: 'Why do some people find it hard to change their habits?' },
  { part: 3, f: 'arec', q: 'Is it better to learn from experience or from books?' },
  { part: 3, f: 'arec', q: 'What makes a good leader in the workplace?' },
  { part: 3, f: 'ppf', q: 'How has the way people communicate changed in recent years?' },
  { part: 3, f: 'ppf', q: 'Will cities look very different in 30 years?' },
  { part: 3, f: 'ppf', q: 'How have shopping habits changed in your country?' },
  { part: 3, f: 'arec', q: 'Do celebrities have a responsibility to be good role models?' }
];

/* ============================ C2 VOCABULARY ============================ */
// tag: W = writing, S = speaking, B = both
export const VOCAB_TRUTH = 'No single word gives you a 9. Examiners reward the exact word in the right place, used naturally. A memorised "fancy" word in the wrong place lowers your Lexical Resource score. Use this bank for precision, not decoration.';
export const VOCAB = [
  { id: 'data', name: 'Task 1: describing data', c: '#ffc21a', for: 'Writing Task 1', items: [
    ['surge (to)', 'W', 'rise suddenly and strongly', 'Sales surged to 4 million in 2020.', 'Only for sudden, large rises.'],
    ['plummet', 'W', 'fall very quickly and very far', 'Prices plummeted from $80 to $20.', 'Only for dramatic falls.'],
    ['plateau (at)', 'W', 'stop changing after a rise', 'The figure plateaued at around 40%.', ''],
    ['fluctuate (around / between)', 'W', 'go up and down', 'Rainfall fluctuated between 20 and 35 mm.', ''],
    ['peak at', 'W', 'reach the highest point', 'Visitor numbers peaked at 690,000 in 2022.', ''],
    ['bottom out (at)', 'W', 'reach the lowest point before rising again', 'Unemployment bottomed out at 3% in 2019.', ''],
    ['account for / make up', 'W', 'form a proportion of a whole', 'Heating accounted for just over two fifths of energy use.', 'Not "accounted to".'],
    ['overtake / outstrip', 'W', 'become greater than', 'By 2014, Lindby had overtaken Corvale.', ''],
    ['a threefold increase', 'W', 'three times bigger', 'There was a threefold increase in visitors.', 'Also: doubled, more than tripled.'],
    ['remain broadly stable', 'W', 'change very little', 'The history museum\'s figures remained broadly stable.', ''],
    ['just under / just over / roughly', 'W', 'approximation', 'just under a quarter (24%)', 'Shows you read the data, not only copy it.'],
    ['the proportion of X who', 'W', 'percentage as a noun phrase', 'The proportion of adults who cycled rose.', 'Better than "the percentage of people that".'],
    ['respectively', 'W', 'in the same order as listed', 'Gaming and reading took 9 and 2 hours respectively.', ''],
    ['the reverse was true for', 'W', 'the opposite pattern', 'The reverse was true for reading.', 'A precise, natural contrast.'],
    ['make way for / be converted into', 'W', 'change of use (maps)', 'The farmland made way for a housing estate.', ''],
    ['once ... has been ...', 'W', 'sequencing in processes', 'Once the paste has been mixed, the oil is separated.', '']
  ] },
  { id: 'argue', name: 'Task 2: arguing a position', c: '#8b5cf6', for: 'Writing Task 2', items: [
    ['exacerbate', 'W', 'make a problem worse', 'Low wages can exacerbate the teacher shortage.', 'Only with problems.'],
    ['mitigate', 'W', 'reduce the harm of something', 'Trees can mitigate the effects of heat in cities.', ''],
    ['alleviate', 'W', 'make pressure or suffering less severe', 'More clinics would alleviate pressure on hospitals.', ''],
    ['undermine', 'W', 'gradually weaken', 'Constant notifications undermine concentration.', ''],
    ['foster', 'W', 'encourage something good to develop', 'Team sports foster a sense of belonging.', ''],
    ['curb', 'W', 'limit something negative', 'Cities should curb car use in the centre.', ''],
    ['outweigh', 'W', 'be greater than', 'The benefits clearly outweigh the drawbacks.', 'Essential for "outweigh" questions.'],
    ['entail', 'W', 'involve as a necessary part', 'Studying abroad entails considerable cost.', ''],
    ['warrant', 'W', 'justify', 'The risks do not warrant a complete ban.', ''],
    ['stem from', 'B', 'be caused by', 'Many health problems stem from inactive lifestyles.', ''],
    ['deter', 'W', 'discourage someone from doing something', 'Higher fines may deter dangerous driving.', ''],
    ['be conducive to', 'W', 'create good conditions for', 'A quiet home is conducive to learning.', ''],
    ['a pressing concern', 'W', 'an urgent problem', 'Housing costs are a pressing concern for young people.', ''],
    ['far-reaching consequences', 'W', 'effects on many people or areas', 'The policy could have far-reaching consequences.', ''],
    ['a viable alternative', 'W', 'an option that really works', 'Public transport must be a viable alternative to driving.', ''],
    ['disproportionately affect', 'W', 'affect one group more than others', 'Price rises disproportionately affect low-income families.', ''],
    ['There is a strong case for', 'W', 'a good argument exists for', 'There is a strong case for free public transport.', ''],
    ['This is not to say that', 'W', 'a concession without losing your position', 'This is not to say that exams are useless.', 'A band 9 way to show balance.'],
    ['arguably', 'B', 'it can reasonably be argued', 'Arguably, the most effective measure is education.', ''],
    ['to a large extent / to some extent', 'W', 'degree of agreement', 'I agree with this view to a large extent.', 'Matches "to what extent" questions.']
  ] },
  { id: 'cohesion', name: 'Linking that does not shout', c: '#23afa9', for: 'Writing and Speaking', items: [
    ['That said, ...', 'B', 'introduces a contrast after a point', 'That said, online courses lack face-to-face contact.', 'Natural in essays and in Part 3.'],
    ['This is largely because ...', 'B', 'explains a cause', 'This is largely because rents have risen.', ''],
    ['In light of this, ...', 'W', 'introduces a consequence', 'In light of this, governments should act.', ''],
    ['It follows that ...', 'W', 'a logical conclusion', 'It follows that prevention is cheaper than cure.', ''],
    ['A case in point is ...', 'B', 'introduces a specific example', 'A case in point is Singapore\'s road pricing.', ''],
    ['Admittedly, ...', 'B', 'concedes a point', 'Admittedly, the initial cost is high.', ''],
    ['This trend / Such measures', 'W', 'reference words that link without linkers', 'Such measures have reduced traffic in London.', 'Band 9 cohesion uses reference more than "Moreover".'],
    ['the former / the latter', 'W', 'refers back to two things', 'Cars and trains both pollute, but the former far more.', '']
  ] },
  { id: 'speak', name: 'Speaking: natural C2 phrases', c: '#e5382b', for: 'Speaking', items: [
    ['That\'s an interesting one. I haven\'t really thought about it, but ...', 'S', 'buys 2 seconds naturally', 'Use it once in the test, not every answer.', ''],
    ['Off the top of my head, I\'d say ...', 'S', 'gives your first honest thought', 'Off the top of my head, I\'d say about ten times.', ''],
    ['I suppose it comes down to ...', 'S', 'gives the key factor', 'I suppose it comes down to money.', ''],
    ['I\'d go as far as to say ...', 'S', 'a strong opinion', 'I\'d go as far as to say it changed my life.', ''],
    ['I\'m in two minds about it.', 'S', 'undecided', 'I\'m in two minds about working abroad.', 'Then give both sides.'],
    ['It depends on what you mean by ...', 'S', 'clarifies a vague Part 3 question', 'It depends on what you mean by success.', 'Shows control, not avoidance.'],
    ['Having said that, ...', 'S', 'a contrast', 'Having said that, it can be stressful.', ''],
    ['On the flip side, ...', 'S', 'the other side (informal)', 'On the flip side, it is expensive.', ''],
    ['It really hit home when ...', 'S', 'I understood it strongly', 'It really hit home when I failed my first exam.', 'Perfect for Part 2 stories.'],
    ['It\'s second nature to me now.', 'S', 'it is automatic', 'Typing in English is second nature to me now.', ''],
    ['It dawned on me that ...', 'S', 'I slowly realised', 'It dawned on me that I had no plan.', ''],
    ['It was a far cry from ...', 'S', 'very different from', 'Riyadh was a far cry from my home town.', ''],
    ['I can\'t help + -ing', 'S', 'I cannot stop myself', 'I can\'t help checking my phone.', ''],
    ['a double-edged sword', 'S', 'both good and bad', 'Social media is a double-edged sword.', 'Fine in speaking. Avoid in essays.'],
    ['go the extra mile', 'S', 'make more effort than needed', 'Good teachers go the extra mile.', 'Not in essays.'],
    ['get the hang of', 'S', 'learn how to do something', 'It took me a while to get the hang of it.', ''],
    ['cut corners', 'S', 'do something cheaply or badly', 'Some builders cut corners to save money.', ''],
    ['and that kind of thing', 'S', 'natural vague language', 'I read novels, poetry, that kind of thing.', 'Natural speakers use some vagueness.'],
    ['What\'s the word ... the thing you use to ...', 'S', 'paraphrase when a word escapes you', 'the thing you use to... measure temperature.', 'Paraphrase without stopping: band 9 speakers do this.']
  ] },
  { id: 'topics', name: 'Topic collocations', c: '#2f5bea', for: 'Writing and Speaking', items: [
    ['rote learning', 'B', 'education: memorising without understanding', 'Exam systems often reward rote learning.', ''],
    ['critical thinking skills', 'B', 'education', 'Debate develops critical thinking skills.', ''],
    ['a well-rounded education', 'B', 'education: broad and balanced', 'Sport is part of a well-rounded education.', ''],
    ['screen time', 'B', 'technology', 'Children\'s screen time has doubled.', ''],
    ['digital literacy', 'B', 'technology: using technology critically', 'Schools must teach digital literacy.', ''],
    ['a breach of privacy', 'B', 'technology', 'Selling user data is a breach of privacy.', ''],
    ['curb emissions', 'W', 'environment', 'Countries have pledged to curb emissions.', ''],
    ['renewable energy sources', 'B', 'environment', 'Saudi Arabia is investing in renewable energy sources.', ''],
    ['irreversible damage', 'B', 'environment', 'Overfishing causes irreversible damage.', ''],
    ['a sedentary lifestyle', 'B', 'health: sitting a lot', 'Office work encourages a sedentary lifestyle.', ''],
    ['preventive healthcare', 'W', 'health: stopping illness early', 'Preventive healthcare reduces long-term costs.', ''],
    ['the strain on healthcare systems', 'W', 'health', 'An ageing population increases the strain on healthcare systems.', ''],
    ['job security', 'B', 'work', 'Young workers value job security.', ''],
    ['a healthy work-life balance', 'B', 'work', 'Remote work can support a healthy work-life balance.', ''],
    ['the cost of living', 'B', 'economy', 'The cost of living has risen sharply.', ''],
    ['a skills shortage', 'W', 'work', 'There is a skills shortage in nursing.', ''],
    ['social cohesion', 'W', 'society: people living well together', 'Shared public spaces strengthen social cohesion.', ''],
    ['an ageing population', 'B', 'society', 'Japan faces the challenges of an ageing population.', ''],
    ['widen the gap between rich and poor', 'B', 'society', 'Private tutoring can widen the gap between rich and poor.', ''],
    ['public funding', 'W', 'government', 'The arts rely on public funding.', ''],
    ['enforce regulations', 'W', 'law', 'Authorities must enforce regulations on pollution.', ''],
    ['act as a deterrent', 'W', 'law: discourage crime', 'Cameras act as a deterrent to theft.', ''],
    ['urban sprawl', 'W', 'cities: uncontrolled growth', 'Urban sprawl increases commuting times.', ''],
    ['affordable housing', 'B', 'cities', 'There is a shortage of affordable housing.', '']
  ] }
];
export const OVERUSED = [
  ['In this day and age', 'Today / In recent decades'],
  ['Every coin has two sides', 'This issue has clear benefits and drawbacks.'],
  ['Last but not least', 'Finally'],
  ['In a nutshell (in an essay)', 'In conclusion / Overall'],
  ['a plethora of', 'a wide range of / many'],
  ['It is a well-known fact that', 'State the fact and support it.'],
  ['Nowadays, more and more people...', 'Open with a precise paraphrase of the topic.'],
  ['Moreover, Furthermore, Additionally at the start of every sentence', 'Reference words: This, Such, The former'],
  ['I think... I think... I think (speaking)', 'I\'d say / My feeling is / As I see it'],
  ['very very important', 'crucial / vital / essential']
];

/* ============================ GAME DATA ============================ */
// Paragraph Builder: 4 PEEL sentences in order + 1 knowledge-telling sentence to cut
export const PARAGRAPHS = [
  { q: 'University education should be free. (Agree)', s: [
    'The main reason university should be free is that it gives talented students from poor families the same chances as wealthy ones.',
    'When tuition is expensive, many capable young people choose to work straight after school because they cannot risk large debts.',
    'In countries such as Germany, where most public universities charge no tuition fees, cost is far less likely to stop a capable student from enrolling.',
    'Free tuition therefore turns ability, not family income, into the key that opens higher education.'],
    cut: 'Universities first appeared in Europe in the Middle Ages, and the University of Bologna is often described as the oldest.' },
  { q: 'Working from home: the advantages outweigh the disadvantages. (Body 2)', s: [
    'The greatest benefit of working from home is the time it gives back to employees.',
    'Without a daily commute, workers can gain one or two hours a day, which they can spend resting, exercising or with their families.',
    'In a city such as Riyadh, where many people drive over an hour each way, this can mean ten hours a week.',
    'This extra time improves well-being, which is why the benefits of remote work outweigh its drawbacks.'],
    cut: 'Video-calling software was first developed in the twentieth century and has improved greatly since then.' },
  { q: 'Traffic congestion: solutions. (Body 2)', s: [
    'The most effective way to reduce congestion is to charge drivers for entering city centres.',
    'A daily fee makes people think twice before driving short distances and encourages them to use buses or trains instead.',
    'When London introduced its congestion charge in 2003, traffic in the charging zone fell noticeably within the first year.',
    'Charging schemes therefore tackle the root cause of congestion: too many private cars.'],
    cut: 'Traffic lights were invented to control the flow of horse-drawn carriages before cars existed.' },
  { q: 'Learning a foreign language at primary school. (Your view, Body 2)', s: [
    'I believe children should start learning a foreign language at primary school because they acquire pronunciation more naturally.',
    'Young learners are less self-conscious and imitate new sounds without the fear of mistakes that many teenagers feel.',
    'Many Tunisian children who begin French early, for instance, speak it with a more natural accent than those who start later.',
    'Starting early therefore gives learners a stronger foundation for confident communication.'],
    cut: 'There are around seven thousand languages spoken in the world today.' },
  { q: 'Online study is a positive development. (Body 1)', s: [
    'Online study is positive mainly because it opens education to people who cannot attend classes in person.',
    'Working adults, parents and people in remote areas can study at times and places that fit their lives.',
    'A nurse working night shifts, for example, can complete a university module online between shifts.',
    'This flexibility makes learning accessible to far more people, which is a clear benefit for society.'],
    cut: 'The internet was originally developed for military and academic communication.' }
];

// Pick Two: choose the two ideas that best prove the position
export const PICK_TWO = [
  { q: 'Some people believe that all young people should do one year of community service. To what extent do you agree?', pos: 'I agree: it should be required.',
    ideas: [['It develops practical skills such as teamwork and responsibility.', 1, 'Strong: directly proves the benefit.'], ['It strengthens young people\'s connection to their community.', 1, 'Strong: a clear benefit to both sides.'], ['Many young people enjoy volunteering already.', 0, 'True, but it does not prove it should be required.'], ['Some young people would prefer to start university immediately.', 0, 'This argues against your position.'], ['Community service was common in the past in some countries.', 0, 'History, not proof. This is knowledge telling.'], ['Volunteering looks good on a CV.', 0, 'Weak and individual. It does not justify making it compulsory.']] },
  { q: 'Do the advantages of AI in hiring outweigh the disadvantages?', pos: 'No: the disadvantages outweigh the advantages.',
    ideas: [['AI can repeat hidden biases from past hiring data.', 1, 'Strong: a serious disadvantage with a clear mechanism.'], ['AI may reject candidates with unusual but valuable profiles.', 1, 'Strong: it shows a real cost.'], ['AI is much faster than human recruiters.', 0, 'This is an advantage. It belongs in your concession, not your main ideas.'], ['Many large companies already use AI.', 0, 'A fact, not an argument.'], ['AI technology is developing very quickly.', 0, 'Background only.'], ['Some applicants feel nervous in interviews.', 0, 'Off the point.']] },
  { q: 'Childhood obesity: what are the causes?', pos: 'Two main causes.',
    ideas: [['Cheap, heavily processed food is easy to buy.', 1, 'A main cause with a clear mechanism.'], ['Children spend more time on screens and less on physical activity.', 1, 'A main cause, easy to support with examples.'], ['Obesity can lead to diabetes later in life.', 0, 'This is an effect, not a cause.'], ['Some countries have higher obesity rates than others.', 0, 'A fact, not a cause.'], ['Schools should offer more sport.', 0, 'A solution. Save it for Body 2.'], ['Children love sweets.', 0, 'Too vague and too obvious to develop.']] },
  { q: 'More people study online. Is this a positive or negative development?', pos: 'Largely positive.',
    ideas: [['It gives access to people who cannot attend in person.', 1, 'Strong and easy to support.'], ['Learners can study at their own pace and review lessons.', 1, 'Strong: a clear learning benefit.'], ['Online platforms make a lot of money.', 0, 'Not about whether it is good for learners or society.'], ['Some students feel lonely studying online.', 0, 'A negative. Use it only as a short concession.'], ['The first online courses appeared in the 1990s.', 0, 'History: knowledge telling.'], ['Laptops are expensive.', 0, 'Weak and not central.']] }
];

// Overview Spotter: index of the best overview for each Task 1 type
export const OVERVIEW_Q = {
  line: { best: 0, o: [
    'Overall, cycling to work became more common in Lindby and Portmere, while Corvale fluctuated with no clear trend, and Lindby ended the period highest.',
    'Overall, Lindby rose from 12% in 2004 to 15% in 2009, 21% in 2014, 30% in 2019 and 38% in 2024.',
    'Overall, people in Lindby cycled more because the city built new cycle lanes.',
    'Overall, the graph shows three cities and the percentage of adults who cycled to work.'] },
  bar: { best: 1, o: [
    'Overall, 16 to 24-year-olds spent 9 hours gaming and 5.5 hours on sport.',
    'Overall, younger people spent far more time on gaming and sport, whereas reading became more popular with age.',
    'Overall, older people are wiser, so they prefer reading.',
    'Overall, reading is the best activity for all ages.'] },
  pie: { best: 2, o: [
    'Overall, heating was 58% in 1990 and 41% in 2020.',
    'Overall, there are two pie charts with five categories each.',
    'Overall, heating remained the largest use in both years despite a large fall, while appliances and cooling grew sharply.',
    'Overall, people used more air conditioning because the climate became hotter.'] },
  table: { best: 0, o: [
    'Overall, the science museum had the most visitors throughout, the children\'s museum grew the most, and the art gallery was the only one to decline.',
    'Overall, the table shows four museums and their visitors in three years.',
    'Overall, the science museum had 410,000, 520,000 and 690,000 visitors.',
    'Overall, museums are more popular than in the past.'] },
  mixed: { best: 3, o: [
    'Overall, enrolments rose from 1,200 to 2,600.',
    'Overall, Asia provided 46% of students.',
    'Overall, the university is very popular with international students because it is excellent.',
    'Overall, enrolments rose despite a sharp fall in 2021, and Asia was by far the largest source of students in 2023.'] },
  process: { best: 1, o: [
    'Overall, olive oil is healthy and popular around the world.',
    'Overall, there are seven stages, from harvesting the olives to bottling the oil.',
    'Overall, the olives are washed after they are harvested.',
    'Overall, the diagram is about olive oil.'] },
  map: { best: 2, o: [
    'Overall, a car park was built in the east.',
    'Overall, the village is much better today.',
    'Overall, Seabrook has changed from a farming village into a residential and tourist area, with farmland and part of the forest replaced by new buildings.',
    'Overall, there are two maps of Seabrook.'] }
};
export const OVERVIEW_WHY = 'The best overview gives the big picture (main trends or main changes), compares, and uses no specific numbers, reasons or opinions.';

// Group It: assign each feature to Body 1 or Body 2
export const GROUP_IT = [
  { type: 'bar', b1: 'Activities that decrease with age', b2: 'The activity that increases with age', items: [['Gaming: 9 hours for 16 to 24s', 1], ['Gaming: half an hour for 65+', 1], ['Sport: 5.5 hours for 16 to 24s', 1], ['Sport: 2 hours for 65+', 1], ['Reading: 2 hours for 16 to 24s', 2], ['Reading: 6.5 hours for 65+', 2]] },
  { type: 'table', b1: 'Museums that grew strongly', b2: 'Museums that were stable or declined', items: [['Children\'s museum: 90,000 to 320,000', 1], ['Science museum: 410,000 to 690,000', 1], ['Science museum: highest every year', 1], ['History museum: 250,000 to 280,000', 2], ['Art gallery: 380,000 to 300,000', 2], ['Art gallery: the only fall', 2]] },
  { type: 'line', b1: 'The rising cities', b2: 'The city with no clear trend', items: [['Lindby: 12% to 38%', 1], ['Lindby overtakes Corvale around 2014', 1], ['Portmere: stable, then a jump to 24%', 1], ['Corvale: peak of 27% in 2009', 2], ['Corvale: low of 20% in 2014', 2], ['Corvale: ends at 23%', 2]] },
  { type: 'map', b1: 'The north and the east (homes and transport)', b2: 'The south (school and coast)', items: [['Farmland replaced by housing estate', 1], ['New link road to the north', 1], ['Part of the forest cleared for a car park', 1], ['School extended', 2], ['Small harbour expanded into a marina', 2], ['Sea and coastline unchanged', 2]] }
];

// Data Precision: choose the accurate phrase
export const PRECISION = [
  { type: 'line', s: 'Between 2004 and 2024, the proportion of cyclists in Lindby ____.', o: ['more than tripled', 'doubled', 'plateaued'], a: 0, why: '12% to 38% is more than three times the starting figure.' },
  { type: 'line', s: 'Corvale\'s figure ____ between 20% and 27%.', o: ['surged', 'fluctuated', 'declined steadily'], a: 1, why: 'It went up and down with no clear direction.' },
  { type: 'line', s: 'In the final five years, Portmere\'s figure ____.', o: ['rose slightly', 'more than doubled', 'remained stable'], a: 1, why: '11% to 24% is more than double.' },
  { type: 'bar', s: '16 to 24-year-olds spent ____ time gaming as 25 to 44-year-olds.', o: ['twice as much', 'roughly the same', 'three times as much'], a: 0, why: '9 hours vs 4.5 hours.' },
  { type: 'bar', s: 'The over-65s spent ____ on reading.', o: ['the least time', 'the most time of any group', 'about half an hour'], a: 1, why: '6.5 hours, more than any other group.' },
  { type: 'pie', s: 'In 2020, appliances accounted for ____ household energy use.', o: ['just under a quarter of', 'well over half of', 'roughly one in ten units of'], a: 0, why: '24% is just under a quarter.' },
  { type: 'pie', s: 'The share used for heating ____ between 1990 and 2020.', o: ['rose sharply', 'fell considerably', 'remained the same'], a: 1, why: '58% to 41%.' },
  { type: 'pie', s: 'Cooling\'s share ____.', o: ['quadrupled', 'doubled', 'halved'], a: 0, why: '3% to 12% is four times bigger.' },
  { type: 'table', s: 'Visitors to the children\'s museum ____ between 2012 and 2022.', o: ['more than tripled', 'rose slightly', 'doubled exactly'], a: 0, why: '90,000 to 320,000.' },
  { type: 'table', s: 'The history museum\'s figures ____.', o: ['plummeted', 'remained broadly stable', 'surged'], a: 1, why: '250,000 to 280,000 is a small change.' },
  { type: 'mixed', s: 'In 2021, enrolments ____ to 1,500.', o: ['dropped sharply', 'peaked', 'levelled off'], a: 0, why: 'A fall from 2,100 to 1,500.' },
  { type: 'mixed', s: 'Asian students made up ____ the total in 2023.', o: ['almost half of', 'a quarter of', 'two thirds of'], a: 0, why: '46% is almost half.' }
];

// Upgrade It: pick the most precise natural C2 version (0 is correct before shuffling)
export const UPGRADE = [
  { base: 'Smartphones make students concentrate less.', o: ['Smartphones undermine students\' concentration.', 'Smartphones exacerbate students\' concentration.', 'Smartphones make students concentrate very less.'], why: '"Undermine" means gradually weaken. "Exacerbate" needs a problem as its object.' },
  { base: 'The government should stop people using cars so much.', o: ['The government should curb car use.', 'The government should alleviate car use.', 'The government should stop people to use cars.'], why: '"Curb" limits something negative. "Alleviate" collocates with pain, pressure or suffering.' },
  { base: 'There are many problems because of old people living longer.', o: ['An ageing population places a growing strain on healthcare systems.', 'An elderly population exacerbates many problems in a plethora of ways.', 'There are a lot of problems about old people.'], why: 'Precise collocations ("ageing population", "strain on") beat stacked fancy words.' },
  { base: 'The number of tourists went up very fast.', o: ['Tourist numbers surged.', 'Tourist numbers plummeted upwards.', 'The number of tourists went up very very fast.'], why: '"Surge" is a sudden strong rise. "Plummet" only means fall.' },
  { base: 'This is a good thing and a bad thing. (speaking)', o: ['It\'s a bit of a double-edged sword, really.', 'It is a dichotomous phenomenon.', 'It is good and bad thing.'], why: 'A natural idiom in speaking. The second option is unnatural and too formal for conversation.' },
  { base: 'I understood suddenly that I had no plan. (speaking)', o: ['It dawned on me that I had no plan.', 'It was dawned to me that I had no plan.', 'I was understanding that I had no plan.'], why: '"It dawned on me that" is the correct fixed pattern.' },
  { base: 'Quiet places help learning.', o: ['A quiet environment is conducive to learning.', 'A quiet environment is conducive for learning.', 'Quiet places are very helpful for the learning.'], why: '"Conducive to", never "conducive for".' },
  { base: 'Poor people suffer more from price rises.', o: ['Price rises disproportionately affect low-income families.', 'Price rises affect the poor people disproportionate.', 'Price rises are bad for poor people a lot.'], why: 'Adverb + verb, and a neutral, precise noun phrase.' },
  { base: 'Fines can make people not drive dangerously.', o: ['Heavy fines can deter dangerous driving.', 'Heavy fines can deter people to drive dangerously.', 'Fines can make people not to drive dangerous.'], why: '"Deter + noun" or "deter someone from + -ing".' },
  { base: 'These measures can make the problem less bad.', o: ['These measures can mitigate the problem.', 'These measures can mitigate against the problem.', 'These measures can make the problem more less.'], why: 'In formal writing, "mitigate" takes a direct object.' },
  { base: 'I am not sure about working abroad. (speaking)', o: ['I\'m in two minds about working abroad.', 'I am in two mind for working abroad.', 'I am not sure about working abroad, I think.'], why: 'Fixed phrase: "in two minds about".' },
  { base: 'Housing is a big problem now.', o: ['Affordable housing has become a pressing concern.', 'Housing is a plethora of problems now.', 'Housing is a very big problem nowadays.'], why: 'Precise topic collocation, no cliché.' }
];

// Register Sort
export const REGISTER = [
  ['a double-edged sword', 'S'], ['exacerbate', 'W'], ['Off the top of my head', 'S'], ['It follows that', 'W'], ['That said', 'B'],
  ['go the extra mile', 'S'], ['the former / the latter', 'W'], ['stem from', 'B'], ['I\'m in two minds', 'S'], ['There is a strong case for', 'W'],
  ['a pressing concern', 'W'], ['It dawned on me', 'S'], ['Admittedly', 'B'], ['arguably', 'B'], ['and that kind of thing', 'S'], ['disproportionately affect', 'W']
];

// Error Hunter: [chunks], index of wrong chunk, correction
export const ERRORS = [
  { c: ['The number of students', 'who study abroad', 'have increased', 'in recent years.'], a: 2, fix: 'has increased: "the number of" takes a singular verb.' },
  { c: ['Many researches', 'show that exercise', 'improves', 'mental health.'], a: 0, fix: 'Much research / many studies: "research" is uncountable.' },
  { c: ['Despite of', 'the high cost,', 'many families', 'choose private schools.'], a: 0, fix: 'Despite the high cost (no "of"), or In spite of.' },
  { c: ['This essay will', 'discuss about', 'both views', 'in detail.'], a: 1, fix: 'discuss both views: "discuss" takes a direct object.' },
  { c: ['The society', 'must find', 'ways to support', 'older people.'], a: 0, fix: 'Society: no article for society in general.' },
  { c: ['It is the city', 'which I visited it', 'last year', 'with my family.'], a: 1, fix: 'which I visited: no resumptive pronoun in English.' },
  { c: ['Online learning is flexible,', 'it also saves', 'time and', 'money.'], a: 0, fix: 'A comma splice. Use a full stop, a semicolon or "and".' },
  { c: ['Governments should', 'invest more money', 'on', 'public transport.'], a: 2, fix: 'invest in public transport.' },
  { c: ['The percentage of', 'households with internet', 'were', 'very low in 2004.'], a: 2, fix: 'was: the subject is "the percentage".' },
  { c: ['Children', 'should be', 'encouraged', 'reading more books.'], a: 3, fix: 'encouraged to read more books.' },
  { c: ['Since 2010,', 'the population', 'grew', 'steadily.'], a: 2, fix: 'has grown: "since" + present perfect.' },
  { c: ['Pollution', 'is one of', 'the most serious problem', 'cities face.'], a: 2, fix: 'one of the most serious problems: plural after "one of".' }
];

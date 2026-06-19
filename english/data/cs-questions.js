window.QUIZ_DATA = [
  {
    id: 'cs-1', skill: 'Words in Context',
    passage: 'Despite the committee\u2019s initial enthusiasm, support for the proposal grew increasingly ______ as members raised concerns about its cost.',
    prompt: 'Which choice completes the text with the most logical and precise word?',
    choices: ['unanimous', 'tepid', 'overwhelming', 'permanent'],
    correct: 1,
    explanation: 'The contrast word "Despite" plus rising concerns signals support cooled rather than strengthened. "Tepid" (lukewarm) fits that shift; the other options all suggest strong or stable support, which contradicts the sentence.'
  },
  {
    id: 'cs-2', skill: 'Words in Context',
    passage: 'The editor\u2019s notes were not harsh, exactly, but they were ______ enough that the young writer reread the manuscript three times before responding.',
    prompt: 'Which choice completes the text with the most logical word?',
    choices: ['flattering', 'pointed', 'brief', 'illegible'],
    correct: 1,
    explanation: 'The writer\u2019s reaction (rereading the manuscript three times) suggests the notes had real bite, even if not harsh \u2014 "pointed" captures sharp, direct criticism without being outright harsh.'
  },
  {
    id: 'cs-3', skill: 'Words in Context',
    passage: 'Unlike her predecessor, who favored bold, sweeping reforms, the new director has taken a more ______ approach, adjusting policies one small piece at a time.',
    prompt: 'Which choice completes the text with the most logical word?',
    choices: ['incremental', 'reckless', 'theatrical', 'unpredictable'],
    correct: 0,
    explanation: '"Adjusting policies one small piece at a time" directly defines the needed word; "incremental" means proceeding in small steps, matching the description exactly.'
  },
  {
    id: 'cs-4', skill: 'Words in Context',
    passage: 'The museum\u2019s newest wing was meant to be a crowning achievement, but critics found its design oddly ______, clashing with the building\u2019s otherwise unified style.',
    prompt: 'Which choice completes the text with the most logical word?',
    choices: ['cohesive', 'discordant', 'celebrated', 'symmetrical'],
    correct: 1,
    explanation: 'The phrase "clashing with the building\u2019s otherwise unified style" calls for a word meaning out of harmony; "discordant" fits, while "cohesive" and "symmetrical" suggest the opposite.'
  },
  {
    id: 'cs-5', skill: 'Words in Context',
    passage: 'Although the negotiations dragged on for months, both sides eventually reached a ______ that satisfied neither party fully but ended the dispute.',
    prompt: 'Which choice completes the text with the most logical word?',
    choices: ['compromise', 'victory', 'stalemate', 'apology'],
    correct: 0,
    explanation: 'An outcome that "satisfied neither party fully but ended the dispute" is the definition of a compromise; a stalemate would mean the dispute did not end.'
  },
  {
    id: 'cs-6', skill: 'Words in Context',
    passage: 'The scientist\u2019s explanation, while technically accurate, was so ______ with jargon that most of the audience lost the thread within minutes.',
    prompt: 'Which choice completes the text with the most logical word?',
    choices: ['devoid', 'laden', 'concerned', 'frustrated'],
    correct: 1,
    explanation: '"Laden with jargon" means heavily loaded with specialized terms, which explains why the audience lost the thread. "Devoid" would mean the opposite \u2014 lacking jargon entirely.'
  },
  {
    id: 'cs-7', skill: 'Words in Context',
    passage: 'Rather than confronting the issue directly, the manager\u2019s memo addressed it only ______, hinting at the problem without ever naming it outright.',
    prompt: 'Which choice completes the text with the most logical word?',
    choices: ['obliquely', 'explicitly', 'thoroughly', 'publicly'],
    correct: 0,
    explanation: '"Hinting at the problem without ever naming it outright" is the definition of addressing something obliquely \u2014 indirectly. "Explicitly" and "thoroughly" both suggest direct treatment, the opposite of what\u2019s described.'
  },
  {
    id: 'cs-8', skill: 'Words in Context',
    passage: 'The novel\u2019s narrator is famously ______: readers spend the entire book unsure whether her account of events can be trusted.',
    prompt: 'Which choice completes the text with the most logical word?',
    choices: ['unreliable', 'omniscient', 'sympathetic', 'minor'],
    correct: 0,
    explanation: 'The phrase "unsure whether her account of events can be trusted" is essentially a definition of an unreliable narrator, a common literary term.'
  },
  {
    id: 'cs-9', skill: 'Text Structure and Purpose',
    passage: 'A growing number of small towns are removing parking minimums from their zoning codes. Supporters argue this allows more flexible, affordable development. Critics worry it will worsen parking shortages in already crowded downtowns. Early results from the first towns to try it have been mixed.',
    prompt: 'Which choice best describes the overall structure of the text?',
    choices: [
      'It presents a single viewpoint and then refutes it.',
      'It introduces a policy trend, presents both supporting and opposing views, and notes that outcomes so far are inconclusive.',
      'It tells a chronological story of one town\u2019s zoning decision.',
      'It argues that parking minimums should be restored everywhere.'
    ],
    correct: 1,
    explanation: 'The passage moves from describing a trend to presenting both sides, then ends by noting mixed early results \u2014 a balanced overview structure rather than an argument for one side or a single narrative.'
  },
  {
    id: 'cs-10', skill: 'Text Structure and Purpose',
    passage: 'The first half of the essay catalogs the river\u2019s pollution sources in clinical detail. The tone shifts abruptly in the final paragraph, as the author describes swimming in the same river as a child, "before any of this had a name."',
    prompt: 'What is the most likely function of the final paragraph in relation to the rest of the essay?',
    choices: [
      'It provides additional technical data about pollution sources.',
      'It introduces a personal, emotional contrast to the preceding clinical analysis.',
      'It contradicts the claims made earlier in the essay.',
      'It summarizes the essay\u2019s technical findings in simpler terms.'
    ],
    correct: 1,
    explanation: 'The shift in tone from clinical detail to a personal childhood memory functions as an emotional contrast, giving the data human stakes rather than restating or contradicting it.'
  },
  {
    id: 'cs-11', skill: 'Text Structure and Purpose',
    passage: 'The architect\u2019s early sketches show a building dominated by sharp angles. Revision after revision, the angles soften, until the final blueprint is almost entirely curves. The accompanying notes never explain why.',
    prompt: 'What is the primary purpose of the text?',
    choices: [
      'To explain why the architect preferred curved buildings.',
      'To trace a visible change across drafts while acknowledging the reason for it remains unknown.',
      'To argue that sharp angles are structurally weaker than curves.',
      'To describe the construction process of the final building.'
    ],
    correct: 1,
    explanation: 'The text documents a clear progression (angles to curves) but explicitly notes the explanation is missing \u2014 its purpose is to trace the change, not to explain or argue a cause, since none is given.'
  },
  {
    id: 'cs-12', skill: 'Text Structure and Purpose',
    passage: 'The opening sentence of the report states the company\u2019s revenue grew 12 percent. The next three paragraphs explain that nearly all of that growth came from a single, unusually large contract unlikely to repeat.',
    prompt: 'What is the function of the three paragraphs that follow the opening sentence?',
    choices: [
      'They repeat the opening statistic in greater detail.',
      'They complicate the opening statistic by explaining it relies on a non-recurring source.',
      'They contradict the opening statistic by showing revenue actually declined.',
      'They provide unrelated background on the company\u2019s history.'
    ],
    correct: 1,
    explanation: 'The paragraphs don\u2019t contradict the 12 percent figure but complicate its significance by showing it depends on a one-time contract \u2014 a qualifying or contextualizing function.'
  },
  {
    id: 'cs-13', skill: 'Text Structure and Purpose',
    passage: 'The article opens by describing a common myth about a historical figure, then spends the remaining paragraphs presenting documentary evidence that contradicts the myth point by point.',
    prompt: 'Which choice best describes the text\u2019s organizational structure?',
    choices: [
      'Claim, then refutation using evidence',
      'Chronological narrative with no argument',
      'Comparison of two equally credible accounts',
      'A list of unrelated facts about the figure'
    ],
    correct: 0,
    explanation: 'Stating a myth and then systematically contradicting it with evidence is a claim-then-refutation structure, not a neutral chronological account or an even-handed comparison.'
  },
  {
    id: 'cs-14', skill: 'Text Structure and Purpose',
    passage: 'A field guide\u2019s introduction warns readers that two nearly identical moth species can only be distinguished by examining wing-vein patterns under magnification \u2014 a detail the guide\u2019s remaining 200 pages return to repeatedly.',
    prompt: 'What is the most likely purpose of mentioning this detail in the introduction?',
    choices: [
      'To discourage readers from using the guide at all.',
      'To prepare readers for a distinguishing method they will need to apply throughout the guide.',
      'To argue that the two moth species should be considered identical.',
      'To criticize earlier field guides for being too detailed.'
    ],
    correct: 1,
    explanation: 'Flagging a recurring identification method up front prepares readers to apply it throughout the guide, functioning as a setup for what follows rather than a discouragement or critique.'
  },
  {
    id: 'cs-15', skill: 'Cross-Text Connections',
    passage: 'Text 1: A sociologist argues that remote work has weakened workplace friendships, since employees no longer share unplanned, informal moments like hallway chats.\nText 2: A separate researcher argues that remote work has simply changed the form of workplace friendship, pointing to employees who report deeper one-on-one video calls than they ever had at the office.',
    prompt: 'How does the researcher in Text 2 most directly respond to the argument in Text 1?',
    choices: [
      'By agreeing that workplace friendships have weakened, but for different reasons.',
      'By disputing that remote work weakens friendship, suggesting it changes its form rather than diminishing it.',
      'By ignoring the topic of workplace friendship entirely.',
      'By arguing that remote work should be banned.'
    ],
    correct: 1,
    explanation: 'Text 2 directly challenges Text 1\u2019s claim of weakened friendship by offering a counter-example (deeper one-on-one calls), arguing the form changed rather than the bond weakening.'
  },
  {
    id: 'cs-16', skill: 'Cross-Text Connections',
    passage: 'Text 1: A nutritionist claims that skipping breakfast has no measurable effect on most adults\u2019 daily energy levels, based on a survey of self-reported fatigue.\nText 2: A separate study measured actual blood glucose levels and found significant drops in attention-test performance among breakfast-skippers by mid-morning.',
    prompt: 'How does the evidence in Text 2 relate to the claim in Text 1?',
    choices: [
      'It fully confirms Text 1\u2019s claim using a more precise method.',
      'It complicates Text 1\u2019s claim by finding a measurable effect using objective rather than self-reported data.',
      'It is unrelated to the topic addressed in Text 1.',
      'It confirms that breakfast has no effect on attention.'
    ],
    correct: 1,
    explanation: 'Text 2 uses objective measures (glucose, test performance) to find an effect that Text 1\u2019s self-reported survey missed, complicating rather than confirming Text 1\u2019s conclusion.'
  },
  {
    id: 'cs-17', skill: 'Cross-Text Connections',
    passage: 'Text 1: A literary critic argues that the novel\u2019s ambiguous ending reflects the author\u2019s intent to leave the protagonist\u2019s fate genuinely unresolved.\nText 2: A second critic, citing the author\u2019s private letters, argues the ending was originally meant to be definitive but was cut for length, making the ambiguity accidental rather than intentional.',
    prompt: 'What is the relationship between the two texts?',
    choices: [
      'They agree completely on the meaning and origin of the ending.',
      'They agree the ending is ambiguous but disagree about whether that ambiguity was intentional.',
      'Text 2 argues the ending is not actually ambiguous.',
      'Text 1 relies on the author\u2019s private letters as evidence.'
    ],
    correct: 1,
    explanation: 'Both critics accept that the ending reads as ambiguous, but they disagree sharply on its cause \u2014 deliberate artistic choice versus an editorial cut. Choice C and D misstate details from each text.'
  },
  {
    id: 'cs-18', skill: 'Cross-Text Connections',
    passage: 'Text 1: An economist argues that automation in manufacturing has primarily eliminated repetitive, low-skill tasks, freeing workers for more complex roles.\nText 2: A labor historian argues that "freeing" workers for new roles often means displacing them entirely, since most displaced workers in past automation waves never returned to comparable wages.',
    prompt: 'How does Text 2 most directly engage with the claim in Text 1?',
    choices: [
      'It supports Text 1\u2019s framing by providing additional historical examples.',
      'It challenges the optimistic framing in Text 1 by emphasizing the costs of displacement historically.',
      'It addresses a completely different topic than Text 1.',
      'It agrees that automation has had no effect on wages.'
    ],
    correct: 1,
    explanation: 'Text 2 pushes back on Text 1\u2019s relatively optimistic word "freeing" by pointing to historical evidence of wage loss, directly challenging the framing rather than simply adding to it.'
  },
  {
    id: 'cs-19', skill: 'Cross-Text Connections',
    passage: 'Text 1: A climate scientist argues that planting large numbers of trees in a region is among the most cost-effective ways to offset local carbon emissions.\nText 2: A forestry researcher argues that newly planted trees offset very little carbon for their first 10\u201315 years of growth, making short-term claims about tree-planting\u2019s carbon impact misleading.',
    prompt: 'Which choice best describes how Text 2 relates to the claim in Text 1?',
    choices: [
      'It supports Text 1\u2019s claim with additional cost data.',
      'It complicates Text 1\u2019s claim by introducing a timing factor not addressed in Text 1.',
      'It argues that tree planting has no carbon benefit at any point.',
      'It restates Text 1\u2019s claim without adding new information.'
    ],
    correct: 1,
    explanation: 'Text 2 doesn\u2019t deny that trees eventually offset carbon \u2014 it introduces the missing factor of time, complicating any claim about short-term cost-effectiveness made in Text 1.'
  },
  {
    id: 'cs-20', skill: 'Cross-Text Connections',
    passage: 'Text 1: A linguist argues that a regional dialect\u2019s distinct grammar is at risk of disappearing within a generation as younger speakers shift toward the standard dialect.\nText 2: A separate linguist working in the same region reports that local youth slang actually preserves several of the dialect\u2019s grammatical structures, just applied to new vocabulary.',
    prompt: 'How does the evidence in Text 2 relate to the concern raised in Text 1?',
    choices: [
      'It confirms that the dialect\u2019s grammar is disappearing as predicted.',
      'It suggests the grammar may be persisting in a less visible form than Text 1 accounts for.',
      'It is unrelated to the topic of dialect preservation.',
      'It argues younger speakers have abandoned the dialect entirely.'
    ],
    correct: 1,
    explanation: 'Text 2\u2019s finding \u2014 grammatical structures surviving within new slang \u2014 suggests the grammar persists in a form Text 1\u2019s framing (focused on generational shift to "standard" dialect) doesn\u2019t capture.'
  }
];

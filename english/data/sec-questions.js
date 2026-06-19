window.QUIZ_DATA = [
  {
    id: 'sec-1', skill: 'Boundaries',
    prompt: 'Which choice completes the text with correct punctuation?\n\nThe storm knocked out power across the region ______ crews worked through the night to restore it.',
    choices: [
      'region, crews',
      'region; crews',
      'region crews',
      'region: and crews'
    ],
    correct: 1,
    explanation: 'Both halves are independent clauses (each could stand alone as a sentence), so they need a semicolon, a period, or a comma plus a conjunction. A comma alone (choice A) creates a comma splice.'
  },
  {
    id: 'sec-2', skill: 'Boundaries',
    prompt: 'Which choice completes the text with correct punctuation?\n\n______ the bridge had been closed for repairs, drivers had to take a much longer route home.',
    choices: ['Because', 'Because,', 'Because:', 'Because;'],
    correct: 0,
    explanation: '"Because the bridge had been closed for repairs" is a dependent clause introducing the sentence; no punctuation is needed right after "Because" itself, only a comma after the full dependent clause (which the rest of the sentence already supplies).'
  },
  {
    id: 'sec-3', skill: 'Boundaries',
    prompt: 'Which choice completes the text with correct punctuation?\n\nThe museum\u2019s new exhibit features three rooms ______ each dedicated to a different decade of design history.',
    choices: ['rooms,', 'rooms;', 'rooms.', 'rooms and'],
    correct: 0,
    explanation: '"each dedicated to a different decade of design history" is a nonessential modifying phrase, so it should be set off with a comma rather than joined as if it were an independent clause.'
  },
  {
    id: 'sec-4', skill: 'Boundaries',
    prompt: 'Which choice completes the text with correct punctuation?\n\nThe recipe calls for three ingredients ______ flour, sugar, and butter.',
    choices: [
      'ingredients, flour, sugar, and butter.',
      'ingredients: flour, sugar, and butter.',
      'ingredients flour, sugar, and butter.',
      'ingredients; flour, sugar, and butter.'
    ],
    correct: 1,
    explanation: 'A colon correctly introduces a list after a complete independent clause ("The recipe calls for three ingredients"). A semicolon would require an independent clause on both sides, which the list is not.'
  },
  {
    id: 'sec-5', skill: 'Boundaries',
    prompt: 'Which choice completes the text with correct punctuation?\n\nShe finally finished the marathon ______ exhausted but proud of every mile.',
    choices: ['marathon, exhausted', 'marathon; exhausted', 'marathon. Exhausted', 'marathon exhausted'],
    correct: 0,
    explanation: '"exhausted but proud of every mile" is a descriptive phrase, not an independent clause, so it should be attached with a comma rather than a semicolon or period, which would require it to stand alone as a sentence.'
  },
  {
    id: 'sec-6', skill: 'Boundaries',
    prompt: 'Which choice completes the text with correct punctuation?\n\nThe committee reached a decision ______ however, not everyone was satisfied with it.',
    choices: ['decision,', 'decision;', 'decision', 'decision:'],
    correct: 1,
    explanation: '"The committee reached a decision" and "not everyone was satisfied with it" are both independent clauses connected by the transitional word "however," so a semicolon (with a comma after "however") correctly joins them.'
  },
  {
    id: 'sec-7', skill: 'Boundaries',
    prompt: 'Which choice completes the text with correct punctuation?\n\nThe report\u2019s conclusion was clear ______ the company needed to change its approach entirely.',
    choices: ['clear the company', 'clear; the company', 'clear, the company', 'clear and, the company'],
    correct: 1,
    explanation: 'Both "The report\u2019s conclusion was clear" and "the company needed to change its approach entirely" are independent clauses, requiring a semicolon (or period, or comma+conjunction) rather than a comma alone.'
  },
  {
    id: 'sec-8', skill: 'Boundaries',
    prompt: 'Which choice completes the text with correct punctuation?\n\nAlthough the team had practiced for weeks ______ they were still nervous before the final match.',
    choices: ['weeks', 'weeks,', 'weeks;', 'weeks.'],
    correct: 1,
    explanation: '"Although the team had practiced for weeks" is a dependent clause introducing the sentence, so it needs a comma before the independent clause that follows, not a semicolon or period.'
  },
  {
    id: 'sec-9', skill: 'Boundaries',
    prompt: 'Which choice completes the text with correct punctuation?\n\nThe artist used only one color in the entire mural ______ a deep, unmistakable blue.',
    choices: [
      'mural, a deep, unmistakable blue.',
      'mural a deep, unmistakable blue.',
      'mural; a deep, unmistakable blue.',
      'mural: a deep, unmistakable blue.'
    ],
    correct: 3,
    explanation: 'A colon correctly introduces a specific detail that explains or completes the preceding independent clause; "a deep, unmistakable blue" is not an independent clause, so a semicolon would be incorrect.'
  },
  {
    id: 'sec-10', skill: 'Boundaries',
    prompt: 'Which choice completes the text with correct punctuation?\n\nThe lab results were inconclusive ______ researchers decided to repeat the experiment with a larger sample.',
    choices: ['inconclusive researchers', 'inconclusive, researchers', 'inconclusive; researchers', 'inconclusive: researchers'],
    correct: 2,
    explanation: 'Both clauses are independent and closely related, so a semicolon correctly joins them without a conjunction. A comma alone would create a comma splice.'
  },
  {
    id: 'sec-11', skill: 'Form, Structure, and Sense',
    prompt: 'Which choice completes the text with the correct verb form?\n\nThe list of recommended changes ______ surprisingly long, given how minor the original complaint had been.',
    choices: ['were', 'was', 'have been', 'are'],
    correct: 1,
    explanation: 'The subject is the singular noun "list," not the plural "changes" in the prepositional phrase; the verb must agree with "list," so the singular "was" is correct.'
  },
  {
    id: 'sec-12', skill: 'Form, Structure, and Sense',
    prompt: 'Which choice completes the text with the correct verb form?\n\nNeither the manager nor the staff members ______ aware of the new policy until it was already in effect.',
    choices: ['was', 'were', 'is', 'has been'],
    correct: 1,
    explanation: 'With "neither...nor," the verb agrees with the closer subject, which here is the plural "staff members," requiring the plural verb "were."'
  },
  {
    id: 'sec-13', skill: 'Form, Structure, and Sense',
    prompt: 'Which choice completes the text with the most logical pronoun?\n\nThe two researchers disagreed on the data\u2019s significance, but ______ ultimately published the findings together.',
    choices: ['they', 'it', 'she', 'one'],
    correct: 0,
    explanation: 'The pronoun must refer back to "the two researchers," a plural antecedent, so the plural pronoun "they" is correct; the others are singular or vague.'
  },
  {
    id: 'sec-14', skill: 'Form, Structure, and Sense',
    prompt: 'Which choice completes the text with the correct verb tense?\n\nBy the time the inspectors arrived, the crew ______ the damaged section of track.',
    choices: ['repairs', 'had already repaired', 'repair', 'are repairing'],
    correct: 1,
    explanation: 'Since the repair was completed before another past event (the inspectors\u2019 arrival), the past perfect tense "had already repaired" correctly shows that sequence.'
  },
  {
    id: 'sec-15', skill: 'Form, Structure, and Sense',
    prompt: 'Which choice results in a sentence that is logically and grammatically correct?',
    choices: [
      'Walking through the old neighborhood, the houses all seemed smaller than she remembered.',
      'Walking through the old neighborhood, she found the houses all seemed smaller than she remembered.',
      'The houses all seemed smaller than she remembered, walking through the old neighborhood.',
      'Smaller than she remembered, walking through the old neighborhood, were the houses.'
    ],
    correct: 1,
    explanation: 'The introductory phrase "Walking through the old neighborhood" describes a person, so the subject right after the comma must be that person ("she"), not "the houses" (a dangling modifier in choices A, C, and D).'
  },
  {
    id: 'sec-16', skill: 'Form, Structure, and Sense',
    prompt: 'Which choice completes the text with the most grammatically parallel structure?\n\nThe internship offered hands-on training, mentorship from senior staff, and ______.',
    choices: [
      'it also gave a small stipend',
      'a small stipend',
      'they paid a small stipend too',
      'giving a small stipend'
    ],
    correct: 1,
    explanation: 'The list items "hands-on training" and "mentorship from senior staff" are both noun phrases, so the third item should match that pattern; "a small stipend" is parallel, while the others break the pattern with full clauses or gerunds.'
  },
  {
    id: 'sec-17', skill: 'Form, Structure, and Sense',
    prompt: 'Which choice completes the text with the correct verb form?\n\nEach of the proposed amendments ______ debated separately before the final vote.',
    choices: ['were', 'was', 'are', 'have been'],
    correct: 1,
    explanation: '"Each" is singular regardless of the plural noun that follows it ("amendments"), so the verb must agree with "Each," making the singular "was" correct.'
  },
  {
    id: 'sec-18', skill: 'Form, Structure, and Sense',
    prompt: 'Which choice completes the text with the correct pronoun?\n\nWhen the two finalists were announced, the judges congratulated ______ on a close and well-fought competition.',
    choices: ['her', 'them', 'it', 'himself'],
    correct: 1,
    explanation: 'The pronoun refers to "the two finalists," a plural antecedent, so the plural object pronoun "them" is correct.'
  },
  {
    id: 'sec-19', skill: 'Form, Structure, and Sense',
    prompt: 'Which choice results in a sentence that is logically and grammatically correct?',
    choices: [
      'After reviewing the budget for over a month, the proposal was finally approved by the board.',
      'After reviewing the budget for over a month, the board finally approved the proposal.',
      'The proposal was finally approved by the board, after reviewing the budget for over a month.',
      'Having reviewed the budget for over a month, the proposal was approved.'
    ],
    correct: 1,
    explanation: '"After reviewing the budget for over a month" describes who did the reviewing \u2014 the board \u2014 so the board must be the subject immediately following the introductory phrase, avoiding the dangling modifier in the other choices.'
  },
  {
    id: 'sec-20', skill: 'Form, Structure, and Sense',
    prompt: 'Which choice completes the text with the correct verb tense?\n\nScientists now believe the fossil ______ to a previously unknown species, based on recent skeletal analysis.',
    choices: ['belonged', 'belongs', 'had belonged', 'belonging'],
    correct: 1,
    explanation: 'The sentence describes a present, ongoing belief ("Scientists now believe"), so the present tense "belongs" correctly matches that current understanding, rather than a past or non-finite verb form.'
  }
];

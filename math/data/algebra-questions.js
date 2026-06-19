window.QUIZ_DATA = [
  {
    id: 'alg-1', skill: 'Linear Equations in One Variable',
    passage: '3x \u2212 7 = 2x + 5',
    prompt: 'What is the value of x?',
    choices: ['12', '\u22122', '2', '\u221212'],
    correct: 0,
    explanation: 'Subtract 2x from both sides: x \u2212 7 = 5. Add 7 to both sides: x = 12.'
  },
  {
    id: 'alg-2', skill: 'Linear Equations in One Variable',
    passage: '2(x \u2212 4) = 3x + 1',
    prompt: 'What is the value of x?',
    choices: ['9', '\u22123', '3', '\u22129'],
    correct: 3,
    explanation: 'Distribute: 2x \u2212 8 = 3x + 1. Subtract 2x from both sides: \u22128 = x + 1. Subtract 1: x = \u22129.'
  },
  {
    id: 'alg-3', skill: 'Linear Equations in One Variable',
    passage: 'x/3 + 5 = 11',
    prompt: 'What is the value of x?',
    choices: ['2', '6', '18', '33'],
    correct: 2,
    explanation: 'Subtract 5 from both sides: x/3 = 6. Multiply both sides by 3: x = 18.'
  },
  {
    id: 'alg-4', skill: 'Linear Equations in One Variable',
    passage: '5 \u2212 2(x + 3) = 9',
    prompt: 'What is the value of x?',
    choices: ['2', '\u22122', '5', '\u22125'],
    correct: 3,
    explanation: 'Distribute: 5 \u2212 2x \u2212 6 = 9, which simplifies to \u22122x \u2212 1 = 9. Add 1: \u22122x = 10. Divide by \u22122: x = \u22125.'
  },
  {
    id: 'alg-5', skill: 'Linear Equations in One Variable',
    passage: 'A taxi charges a $3 base fee plus $2 per mile. A particular ride costs $17 in total.',
    prompt: 'How many miles was the ride?',
    choices: ['7', '8.5', '10', '14'],
    correct: 0,
    explanation: 'Set up 3 + 2m = 17. Subtract 3: 2m = 14. Divide by 2: m = 7 miles.'
  },
  {
    id: 'alg-6', skill: 'Linear Functions and Equations in Two Variables',
    passage: 'A line passes through the points (2, 5) and (6, 13).',
    prompt: 'What is the slope of the line?',
    choices: ['1/2', '2', '4', '8'],
    correct: 1,
    explanation: 'Slope = (13 \u2212 5) / (6 \u2212 2) = 8 / 4 = 2.'
  },
  {
    id: 'alg-7', skill: 'Linear Functions and Equations in Two Variables',
    passage: 'y = 4x \u2212 9',
    prompt: 'What is the y-intercept of the line represented by this equation?',
    choices: ['4', '\u22129', '9', '1/4'],
    correct: 1,
    explanation: 'In the form y = mx + b, b is the y-intercept. Here b = \u22129.'
  },
  {
    id: 'alg-8', skill: 'Linear Functions and Equations in Two Variables',
    passage: 'A phone plan charges a flat fee of $25 per month plus $0.10 for each text message sent.',
    prompt: 'Which equation gives the total monthly cost, y, for sending x text messages?',
    choices: ['y = 25x + 0.10', 'y = 0.10x + 25', 'y = 0.10(x + 25)', 'y = 25(x + 0.10)'],
    correct: 1,
    explanation: 'The flat fee, $25, is the starting value (intercept), and the per-message charge, $0.10, is the rate (slope), giving y = 0.10x + 25.'
  },
  {
    id: 'alg-9', skill: 'Linear Functions and Equations in Two Variables',
    passage: 'A line has a slope of 4 and passes through the point (0, \u22123).',
    prompt: 'Which equation represents this line?',
    choices: ['y = 4x \u2212 3', 'y = \u22123x + 4', 'y = 4x + 3', 'y = \u22124x \u2212 3'],
    correct: 0,
    explanation: 'Since the line passes through (0, \u22123), the y-intercept is \u22123. With a slope of 4, the equation is y = 4x \u2212 3.'
  },
  {
    id: 'alg-10', skill: 'Linear Functions and Equations in Two Variables',
    passage: 'A tank starts with 500 gallons of water and drains at a constant rate of 25 gallons per minute.',
    prompt: 'Which expression gives the number of gallons remaining after m minutes?',
    choices: ['500 + 25m', '500 \u2212 25m', '25m \u2212 500', '25(500 \u2212 m)'],
    correct: 1,
    explanation: 'The tank starts at 500 gallons and loses 25 gallons each minute, so the remaining amount is 500 \u2212 25m.'
  },
  {
    id: 'alg-11', skill: 'Linear Functions and Equations in Two Variables',
    passage: 'y = 3x \u2212 12',
    prompt: 'What is the x-intercept of the line represented by this equation?',
    choices: ['\u221212', '3', '\u22124', '4'],
    correct: 3,
    explanation: 'The x-intercept occurs where y = 0. Setting 0 = 3x \u2212 12 gives 3x = 12, so x = 4.'
  },
  {
    id: 'alg-12', skill: 'Systems of Two Linear Equations in Two Variables',
    passage: 'x + y = 10\nx \u2212 y = 2',
    prompt: 'What is the value of y?',
    choices: ['2', '4', '6', '8'],
    correct: 1,
    explanation: 'Adding the two equations gives 2x = 12, so x = 6. Substituting into the first equation: 6 + y = 10, so y = 4.'
  },
  {
    id: 'alg-13', skill: 'Systems of Two Linear Equations in Two Variables',
    passage: 'y = 2x + 1\n3x + y = 16',
    prompt: 'What is the value of x?',
    choices: ['2', '3', '5', '7'],
    correct: 1,
    explanation: 'Substitute y = 2x + 1 into the second equation: 3x + 2x + 1 = 16, so 5x = 15, giving x = 3.'
  },
  {
    id: 'alg-14', skill: 'Systems of Two Linear Equations in Two Variables',
    passage: 'y = 2x + 5\ny = 2x \u2212 3',
    prompt: 'How many solutions does this system of equations have?',
    choices: ['0', '1', '2', 'Infinitely many'],
    correct: 0,
    explanation: 'Both lines have the same slope (2) but different y-intercepts (5 and \u22123), so they are parallel and never intersect. The system has no solution.'
  },
  {
    id: 'alg-15', skill: 'Systems of Two Linear Equations in Two Variables',
    passage: 'y = 3x + 6\n2y = 6x + 12',
    prompt: 'How many solutions does this system of equations have?',
    choices: ['0', '1', '2', 'Infinitely many'],
    correct: 3,
    explanation: 'Dividing the second equation by 2 gives y = 3x + 6, which is identical to the first equation. The two equations describe the same line, so there are infinitely many solutions.'
  },
  {
    id: 'alg-16', skill: 'Systems of Two Linear Equations in Two Variables',
    passage: 'A theater sold 200 tickets total, made up of adult tickets at $8 each and child tickets at $5 each. Total revenue from the tickets was $1,300.',
    prompt: 'How many adult tickets were sold?',
    choices: ['80', '100', '120', '150'],
    correct: 1,
    explanation: 'Let a = adult tickets and c = child tickets. From a + c = 200, c = 200 \u2212 a. Substituting into 8a + 5c = 1300: 8a + 5(200 \u2212 a) = 1300, which simplifies to 3a = 300, so a = 100.'
  },
  {
    id: 'alg-17', skill: 'Linear Inequalities in One or Two Variables',
    passage: '\u22123x + 5 \u2264 14',
    prompt: 'Which inequality represents all solutions to this inequality?',
    choices: ['x \u2264 \u22123', 'x \u2265 \u22123', 'x \u2264 3', 'x \u2265 3'],
    correct: 1,
    explanation: 'Subtract 5 from both sides: \u22123x \u2264 9. Divide both sides by \u22123, flipping the inequality sign: x \u2265 \u22123.'
  },
  {
    id: 'alg-18', skill: 'Linear Inequalities in One or Two Variables',
    passage: '4(x \u2212 2) > 2x + 6',
    prompt: 'Which inequality represents all solutions to this inequality?',
    choices: ['x > 7', 'x < 7', 'x > \u22127', 'x < \u22127'],
    correct: 0,
    explanation: 'Distribute: 4x \u2212 8 > 2x + 6. Subtract 2x: 2x \u2212 8 > 6. Add 8: 2x > 14. Divide by 2: x > 7.'
  },
  {
    id: 'alg-19', skill: 'Linear Inequalities in One or Two Variables',
    passage: 'y < \u2212x + 4',
    prompt: 'Which of the following points satisfies this inequality?',
    choices: ['(1, 1)', '(1, 4)', '(5, 0)', '(\u22121, 6)'],
    correct: 0,
    explanation: 'Testing (1, 1): 1 < \u22121 + 4 = 3 is true. Testing the others: (1,4) gives 4 < 3 (false), (5,0) gives 0 < \u22121 (false), and (\u22121,6) gives 6 < 5 (false). Only (1, 1) satisfies the inequality.'
  },
  {
    id: 'alg-20', skill: 'Linear Inequalities in One or Two Variables',
    passage: 'A gym charges a $40 enrollment fee plus $25 per month of membership.',
    prompt: 'Which inequality represents the number of months, m, needed for the total cost to exceed $215?',
    choices: ['m > 7', 'm < 7', 'm > 9', 'm < 9'],
    correct: 0,
    explanation: 'Set up 40 + 25m > 215. Subtract 40: 25m > 175. Divide by 25: m > 7.'
  }
];

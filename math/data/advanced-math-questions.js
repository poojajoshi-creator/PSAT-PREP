window.QUIZ_DATA = [
  {
    id: 'adv-1', skill: 'Nonlinear Functions',
    passage: 'y = 2(x \u2212 3)\u00b2 + 5',
    prompt: 'What is the vertex of the parabola represented by this equation?',
    choices: ['(3, 5)', '(\u22123, 5)', '(3, \u22125)', '(5, 3)'],
    correct: 0,
    explanation: 'In vertex form y = a(x \u2212 h)\u00b2 + k, the vertex is (h, k). Here h = 3 and k = 5, so the vertex is (3, 5).'
  },
  {
    id: 'adv-2', skill: 'Nonlinear Functions',
    passage: 'Function A: y = 5(0.8)\u02e3\nFunction B: y = 5(1.2)\u02e3',
    prompt: 'Which function represents exponential decay?',
    choices: ['Function A', 'Function B', 'Both A and B', 'Neither A nor B'],
    correct: 0,
    explanation: 'A function y = a\u00b7b\u02e3 represents decay when 0 < b < 1. Function A has base 0.8, which is between 0 and 1, so it decays. Function B has base 1.2, greater than 1, so it grows.'
  },
  {
    id: 'adv-3', skill: 'Nonlinear Functions',
    passage: 'y = \u22123x\u00b2 + 2x \u2212 1',
    prompt: 'Does the graph of this equation have a maximum or a minimum value?',
    choices: ['Maximum', 'Minimum', 'Neither', 'Both'],
    correct: 0,
    explanation: 'The leading coefficient is \u22123, which is negative, so the parabola opens downward and has a maximum value at its vertex.'
  },
  {
    id: 'adv-4', skill: 'Nonlinear Functions',
    passage: 'A population of 200 animals grows at a rate of 5% per year.',
    prompt: 'Which expression models the population after t years?',
    choices: ['200 + 0.05t', '200(1.05)\u1d57', '200(0.05)\u1d57', '200t + 1.05'],
    correct: 1,
    explanation: 'A 5% annual growth rate corresponds to multiplying by 1.05 each year, giving the exponential model 200(1.05)\u1d57.'
  },
  {
    id: 'adv-5', skill: 'Nonlinear Functions',
    passage: 'y = x\u00b2 \u2212 4x + 7',
    prompt: 'What is the y-intercept of the graph of this equation?',
    choices: ['\u22124', '4', '7', '\u22127'],
    correct: 2,
    explanation: 'The y-intercept occurs at x = 0. Substituting: y = 0\u00b2 \u2212 4(0) + 7 = 7.'
  },
  {
    id: 'adv-6', skill: 'Nonlinear Functions',
    passage: 'x\u00b2 + 4x + 8 = 0',
    prompt: 'How many times does the graph of y = x\u00b2 + 4x + 8 cross the x-axis?',
    choices: ['0', '1', '2', '3'],
    correct: 0,
    explanation: 'The discriminant is b\u00b2 \u2212 4ac = 16 \u2212 32 = \u221216, which is negative, meaning there are no real solutions and the graph never crosses the x-axis.'
  },
  {
    id: 'adv-7', skill: 'Nonlinear Equations in One Variable',
    passage: 'x\u00b2 \u2212 5x + 6 = 0',
    prompt: 'What are the solutions to this equation?',
    choices: ['x = 2 and x = 3', 'x = \u22122 and x = \u22123', 'x = 2 and x = \u22123', 'x = \u22122 and x = 3'],
    correct: 0,
    explanation: 'Factoring gives (x \u2212 2)(x \u2212 3) = 0, so the solutions are x = 2 and x = 3.'
  },
  {
    id: 'adv-8', skill: 'Nonlinear Equations in One Variable',
    passage: '(x + 2)\u00b2 = 49',
    prompt: 'What are the two solutions to this equation?',
    choices: ['x = 5 and x = \u22129', 'x = 7 and x = \u22127', 'x = 5 and x = 9', 'x = \u22125 and x = \u22129'],
    correct: 0,
    explanation: 'Taking the square root of both sides gives x + 2 = \u00b17. So x + 2 = 7 gives x = 5, and x + 2 = \u22127 gives x = \u22129.'
  },
  {
    id: 'adv-9', skill: 'Nonlinear Equations in One Variable',
    passage: '2x\u00b2 \u2212 7x \u2212 4 = 0',
    prompt: 'What is the positive solution to this equation?',
    choices: ['4', '1/2', '\u22121/2', '\u22124'],
    correct: 0,
    explanation: 'Factoring gives (2x + 1)(x \u2212 4) = 0, so x = \u22121/2 or x = 4. The positive solution is x = 4.'
  },
  {
    id: 'adv-10', skill: 'Nonlinear Equations in One Variable',
    passage: '\u221a(x + 3) = x \u2212 3',
    prompt: 'What is the only valid solution to this equation?',
    choices: ['6', '1', 'Both 1 and 6', 'Neither 1 nor 6'],
    correct: 0,
    explanation: 'Squaring both sides and solving gives x = 1 or x = 6. Checking in the original equation: x = 1 gives \u221a4 = 2, but 1 \u2212 3 = \u22122, so it doesn\u2019t check out (extraneous). x = 6 gives \u221a9 = 3, and 6 \u2212 3 = 3, which checks out. Only x = 6 is valid.'
  },
  {
    id: 'adv-11', skill: 'Nonlinear Equations in One Variable',
    passage: 'x / (x \u2212 2) = 3',
    prompt: 'What is the value of x?',
    choices: ['3', '\u22123', '2', '6'],
    correct: 0,
    explanation: 'Multiplying both sides by (x \u2212 2) gives x = 3(x \u2212 2) = 3x \u2212 6. Solving: \u22122x = \u22126, so x = 3. Since x = 3 doesn\u2019t make the original denominator zero, it\u2019s valid.'
  },
  {
    id: 'adv-12', skill: 'Nonlinear Equations in One Variable',
    passage: 'x\u00b2 \u2212 6x + 9 = 0',
    prompt: 'How many real solutions does this equation have?',
    choices: ['0', '1', '2', '3'],
    correct: 1,
    explanation: 'The discriminant is b\u00b2 \u2212 4ac = 36 \u2212 36 = 0, which means there is exactly one real solution (a repeated root), x = 3.'
  },
  {
    id: 'adv-13', skill: 'Systems with a Nonlinear Equation',
    passage: 'y = x\u00b2\ny = 2x + 3',
    prompt: 'How many points of intersection does this system have?',
    choices: ['0', '1', '2', 'Infinitely many'],
    correct: 2,
    explanation: 'Substituting gives x\u00b2 = 2x + 3, or x\u00b2 \u2212 2x \u2212 3 = 0, which factors to (x \u2212 3)(x + 1) = 0. There are two solutions, x = 3 and x = \u22121, so two points of intersection.'
  },
  {
    id: 'adv-14', skill: 'Systems with a Nonlinear Equation',
    passage: 'y = x\u00b2 \u2212 4\ny = \u22123',
    prompt: 'What are the x-coordinates of the solutions to this system?',
    choices: ['1 and \u22121', '2 and \u22122', '4 and \u22124', '0 only'],
    correct: 0,
    explanation: 'Substituting y = \u22123: x\u00b2 \u2212 4 = \u22123, so x\u00b2 = 1, giving x = 1 or x = \u22121.'
  },
  {
    id: 'adv-15', skill: 'Systems with a Nonlinear Equation',
    passage: 'y = x\u00b2 + 1\ny = x + 1',
    prompt: 'What is the y-coordinate of the solution where x = 1?',
    choices: ['2', '1', '0', '\u22121'],
    correct: 0,
    explanation: 'Substituting x = 1 into y = x + 1 gives y = 2. (Checking the other equation: y = 1\u00b2 + 1 = 2, confirming the solution.)'
  },
  {
    id: 'adv-16', skill: 'Systems with a Nonlinear Equation',
    passage: 'y = x\u00b2 + 5\ny = 2x \u2212 3',
    prompt: 'How many real solutions does this system have?',
    choices: ['0', '1', '2', 'Infinitely many'],
    correct: 0,
    explanation: 'Substituting gives x\u00b2 + 5 = 2x \u2212 3, or x\u00b2 \u2212 2x + 8 = 0. The discriminant is 4 \u2212 32 = \u221228, which is negative, so there are no real solutions \u2014 the line never meets the parabola.'
  },
  {
    id: 'adv-17', skill: 'Equivalent Expressions',
    passage: '(3x\u00b2y)(4xy\u00b3)',
    prompt: 'Which expression is equivalent to this product?',
    choices: ['12x\u00b3y\u2074', '12x\u00b2y\u00b3', '7x\u00b3y\u2074', '12x\u00b3y\u00b3'],
    correct: 0,
    explanation: 'Multiply the coefficients: 3 \u00d7 4 = 12. Add exponents of matching bases: x\u00b9\u207a\u00b2 = x\u00b3 and y\u00b9\u207a\u00b3 = y\u2074. The product is 12x\u00b3y\u2074.'
  },
  {
    id: 'adv-18', skill: 'Equivalent Expressions',
    passage: 'x\u00b2 \u2212 9',
    prompt: 'Which expression is equivalent to this expression?',
    choices: ['(x \u2212 3)(x + 3)', '(x \u2212 9)(x + 1)', '(x \u2212 3)\u00b2', '(x + 9)(x \u2212 1)'],
    correct: 0,
    explanation: 'This is a difference of squares: a\u00b2 \u2212 b\u00b2 = (a \u2212 b)(a + b), with a = x and b = 3, giving (x \u2212 3)(x + 3).'
  },
  {
    id: 'adv-19', skill: 'Equivalent Expressions',
    passage: '(x\u00b2 \u2212 4) / (x \u2212 2), for x \u2260 2',
    prompt: 'Which expression is equivalent to this expression?',
    choices: ['x + 2', 'x \u2212 2', 'x\u00b2 \u2212 2', '(x + 2)/(x \u2212 2)'],
    correct: 0,
    explanation: 'Factor the numerator as a difference of squares: x\u00b2 \u2212 4 = (x \u2212 2)(x + 2). Canceling the common factor (x \u2212 2) leaves x + 2.'
  },
  {
    id: 'adv-20', skill: 'Equivalent Expressions',
    passage: '(6x\u2075y\u00b2) / (3x\u00b2y)',
    prompt: 'Which expression is equivalent to this expression?',
    choices: ['2x\u00b3y', '2x\u00b3y\u00b2', '2x\u2077y\u00b2', '3x\u00b3y'],
    correct: 0,
    explanation: 'Divide coefficients: 6 \u00f7 3 = 2. Subtract exponents of matching bases: x\u2075\u207b\u00b2 = x\u00b3 and y\u00b2\u207b\u00b9 = y. The result is 2x\u00b3y.'
  }
];

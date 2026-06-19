window.QUIZ_DATA = [
  {
    id: 'geo-1', skill: 'Area and Volume',
    passage: 'A triangle has a base of 10 units and a height of 6 units.',
    prompt: 'What is the area of the triangle?',
    choices: ['30', '60', '16', '42'],
    correct: 0,
    explanation: 'Area of a triangle = (1/2) \u00d7 base \u00d7 height = (1/2)(10)(6) = 30 square units.'
  },
  {
    id: 'geo-2', skill: 'Area and Volume',
    passage: 'A rectangular prism has length 4, width 3, and height 5.',
    prompt: 'What is the volume of the prism?',
    choices: ['60', '12', '47', '75'],
    correct: 0,
    explanation: 'Volume of a rectangular prism = length \u00d7 width \u00d7 height = 4 \u00d7 3 \u00d7 5 = 60 cubic units.'
  },
  {
    id: 'geo-3', skill: 'Area and Volume',
    passage: 'A cylinder has a radius of 3 and a height of 10.',
    prompt: 'What is the volume of the cylinder, in terms of \u03c0?',
    choices: ['90\u03c0', '30\u03c0', '9\u03c0', '270\u03c0'],
    correct: 0,
    explanation: 'Volume of a cylinder = \u03c0r\u00b2h = \u03c0(3\u00b2)(10) = \u03c0(9)(10) = 90\u03c0.'
  },
  {
    id: 'geo-4', skill: 'Area and Volume',
    passage: 'A rectangle measures 10 units by 4 units. A 2-by-2 square is cut out of one corner.',
    prompt: 'What is the area of the remaining figure?',
    choices: ['36', '38', '44', '32'],
    correct: 0,
    explanation: 'The rectangle\u2019s area is 10 \u00d7 4 = 40. Subtracting the 2 \u00d7 2 square (area 4) that was cut out gives 40 \u2212 4 = 36.'
  },
  {
    id: 'geo-5', skill: 'Area and Volume',
    passage: 'A cylindrical water tank has a radius of 2 feet and a height of 7 feet. Use \u03c0 \u2248 3.14.',
    prompt: 'To the nearest whole number, how many cubic feet does the tank hold?',
    choices: ['88', '28', '56', '176'],
    correct: 0,
    explanation: 'Volume = \u03c0r\u00b2h = 3.14 \u00d7 4 \u00d7 7 = 87.92, which rounds to 88 cubic feet.'
  },
  {
    id: 'geo-6', skill: 'Lines, Angles, and Triangles',
    passage: 'Lines l and m are parallel and are both crossed by a transversal. One of the angles formed measures 65\u00b0.',
    prompt: 'What is the measure of its corresponding angle on line m?',
    choices: ['65\u00b0', '115\u00b0', '25\u00b0', '155\u00b0'],
    correct: 0,
    explanation: 'When a transversal crosses two parallel lines, corresponding angles are always equal, so the corresponding angle also measures 65\u00b0.'
  },
  {
    id: 'geo-7', skill: 'Lines, Angles, and Triangles',
    passage: 'A triangle has two angles measuring 40\u00b0 and 75\u00b0.',
    prompt: 'What is the measure of the third angle?',
    choices: ['65\u00b0', '115\u00b0', '40\u00b0', '75\u00b0'],
    correct: 0,
    explanation: 'The angles of a triangle sum to 180\u00b0. 180 \u2212 40 \u2212 75 = 65\u00b0.'
  },
  {
    id: 'geo-8', skill: 'Lines, Angles, and Triangles',
    passage: 'A triangle\u2019s two remote interior angles measure 50\u00b0 and 60\u00b0.',
    prompt: 'What is the measure of the exterior angle at the third vertex?',
    choices: ['110\u00b0', '70\u00b0', '180\u00b0', '50\u00b0'],
    correct: 0,
    explanation: 'By the exterior angle theorem, an exterior angle equals the sum of the two remote interior angles: 50 + 60 = 110\u00b0.'
  },
  {
    id: 'geo-9', skill: 'Lines, Angles, and Triangles',
    passage: 'Triangle ABC is similar to triangle DEF, with AB corresponding to DE and BC corresponding to EF. AB = 6, DE = 9, and BC = 8.',
    prompt: 'What is the length of EF?',
    choices: ['12', '5.33', '14', '10'],
    correct: 0,
    explanation: 'The scale factor from triangle ABC to DEF is 9/6 = 1.5. So EF = BC \u00d7 1.5 = 8 \u00d7 1.5 = 12.'
  },
  {
    id: 'geo-10', skill: 'Lines, Angles, and Triangles',
    passage: 'An isosceles triangle has a vertex angle of 40\u00b0.',
    prompt: 'What is the measure of each base angle?',
    choices: ['70\u00b0', '140\u00b0', '40\u00b0', '110\u00b0'],
    correct: 0,
    explanation: 'The two base angles of an isosceles triangle are equal, and all three angles sum to 180\u00b0. (180 \u2212 40) / 2 = 70\u00b0 for each base angle.'
  },
  {
    id: 'geo-11', skill: 'Right Triangles and Trigonometry',
    passage: 'A right triangle has legs measuring 6 and 8.',
    prompt: 'What is the length of the hypotenuse?',
    choices: ['10', '14', '48', '100'],
    correct: 0,
    explanation: 'By the Pythagorean theorem, c\u00b2 = 6\u00b2 + 8\u00b2 = 36 + 64 = 100, so c = 10.'
  },
  {
    id: 'geo-12', skill: 'Right Triangles and Trigonometry',
    passage: 'A right triangle has a hypotenuse of 13 and one leg of 5.',
    prompt: 'What is the length of the other leg?',
    choices: ['12', '8', '18', '144'],
    correct: 0,
    explanation: 'By the Pythagorean theorem, the other leg = \u221a(13\u00b2 \u2212 5\u00b2) = \u221a(169 \u2212 25) = \u221a144 = 12.'
  },
  {
    id: 'geo-13', skill: 'Right Triangles and Trigonometry',
    passage: 'In a right triangle, the side opposite angle \u03b8 measures 5, and the hypotenuse measures 13.',
    prompt: 'What is sin(\u03b8)?',
    choices: ['5/13', '13/5', '12/13', '5/12'],
    correct: 0,
    explanation: 'Sine is opposite over hypotenuse (SOH): sin(\u03b8) = 5/13.'
  },
  {
    id: 'geo-14', skill: 'Right Triangles and Trigonometry',
    passage: 'A 45-45-90 right triangle has legs of length 7.',
    prompt: 'What is the length of the hypotenuse?',
    choices: ['7\u221a2', '14', '7', '7/\u221a2'],
    correct: 0,
    explanation: 'In a 45-45-90 triangle, the hypotenuse equals a leg multiplied by \u221a2, so the hypotenuse is 7\u221a2.'
  },
  {
    id: 'geo-15', skill: 'Right Triangles and Trigonometry',
    passage: 'A 30-60-90 right triangle has a shorter leg (opposite the 30\u00b0 angle) of length 5.',
    prompt: 'What is the length of the longer leg (opposite the 60\u00b0 angle)?',
    choices: ['5\u221a3', '10', '5/\u221a3', '5\u221a2'],
    correct: 0,
    explanation: 'In a 30-60-90 triangle, the sides are in the ratio 1 : \u221a3 : 2. The longer leg equals the shorter leg times \u221a3, so it is 5\u221a3.'
  },
  {
    id: 'geo-16', skill: 'Circles',
    passage: 'A circle has a radius of 4.',
    prompt: 'What is the circumference of the circle, in terms of \u03c0?',
    choices: ['8\u03c0', '16\u03c0', '4\u03c0', '2\u03c0'],
    correct: 0,
    explanation: 'Circumference = 2\u03c0r = 2\u03c0(4) = 8\u03c0.'
  },
  {
    id: 'geo-17', skill: 'Circles',
    passage: 'A circle has a diameter of 10.',
    prompt: 'What is the area of the circle, in terms of \u03c0?',
    choices: ['25\u03c0', '100\u03c0', '10\u03c0', '50\u03c0'],
    correct: 0,
    explanation: 'A diameter of 10 gives a radius of 5. Area = \u03c0r\u00b2 = \u03c0(5\u00b2) = 25\u03c0.'
  },
  {
    id: 'geo-18', skill: 'Circles',
    passage: 'A circle has a radius of 6. A central angle of the circle measures 60\u00b0.',
    prompt: 'What is the length of the arc intercepted by this central angle, in terms of \u03c0?',
    choices: ['2\u03c0', '12\u03c0', '6\u03c0', '\u03c0'],
    correct: 0,
    explanation: 'Arc length = (central angle / 360\u00b0) \u00d7 circumference = (60/360) \u00d7 2\u03c0(6) = (1/6)(12\u03c0) = 2\u03c0.'
  },
  {
    id: 'geo-19', skill: 'Circles',
    passage: 'A circle has a radius of 9. A sector of the circle has a central angle of 40\u00b0.',
    prompt: 'What is the area of the sector, in terms of \u03c0?',
    choices: ['9\u03c0', '81\u03c0', '40\u03c0', '4.5\u03c0'],
    correct: 0,
    explanation: 'Sector area = (central angle / 360\u00b0) \u00d7 \u03c0r\u00b2 = (40/360) \u00d7 \u03c0(81) = (1/9)(81\u03c0) = 9\u03c0.'
  },
  {
    id: 'geo-20', skill: 'Circles',
    passage: '(x \u2212 2)\u00b2 + (y + 5)\u00b2 = 49',
    prompt: 'What is the center of the circle represented by this equation?',
    choices: ['(2, \u22125)', '(\u22122, 5)', '(2, 5)', '(\u22122, \u22125)'],
    correct: 0,
    explanation: 'The circle equation is (x \u2212 h)\u00b2 + (y \u2212 k)\u00b2 = r\u00b2 with center (h, k). Here, x \u2212 2 means h = 2, and y + 5 = y \u2212 (\u22125) means k = \u22125. The center is (2, \u22125).'
  }
];

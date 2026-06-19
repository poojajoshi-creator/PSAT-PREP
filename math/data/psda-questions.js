window.QUIZ_DATA = [
  {
    id: 'psda-1', skill: 'Ratios, Rates, Proportions, and Percentages',
    passage: 'A recipe calls for 2 cups of flour for every 3 cups of sugar.',
    prompt: 'If a baker uses 9 cups of sugar while keeping the same ratio, how many cups of flour are needed?',
    choices: ['6', '4.5', '7', '13.5'],
    correct: 0,
    explanation: 'Set up the proportion 2/3 = f/9. Cross-multiplying gives 3f = 18, so f = 6 cups of flour.'
  },
  {
    id: 'psda-2', skill: 'Ratios, Rates, Proportions, and Percentages',
    passage: 'The price of a jacket increased from $40 to $52.',
    prompt: 'What was the percent increase in price?',
    choices: ['30%', '12%', '23%', '77%'],
    correct: 0,
    explanation: 'Percent increase = (52 \u2212 40) / 40 \u00d7 100 = 12/40 \u00d7 100 = 30%.'
  },
  {
    id: 'psda-3', skill: 'Ratios, Rates, Proportions, and Percentages',
    prompt: 'What is 15% of 80?',
    choices: ['12', '15', '1.2', '65'],
    correct: 0,
    explanation: '15% of 80 = 0.15 \u00d7 80 = 12.'
  },
  {
    id: 'psda-4', skill: 'Ratios, Rates, Proportions, and Percentages',
    passage: 'A car travels 180 miles in 3 hours at a constant speed.',
    prompt: 'What is the car\u2019s speed in miles per hour?',
    choices: ['60', '54', '65', '540'],
    correct: 0,
    explanation: 'Speed = distance \u00f7 time = 180 \u00f7 3 = 60 miles per hour.'
  },
  {
    id: 'psda-5', skill: 'One-Variable Data: Distributions and Measures of Center and Spread',
    passage: 'Data set: 4, 6, 6, 8, 40.',
    prompt: 'Which measure of center is least affected by the outlier value of 40?',
    choices: ['Median', 'Mean', 'Range', 'Sum'],
    correct: 0,
    explanation: 'The median (6, the middle value) is barely affected by the outlier, while the mean is pulled noticeably higher by the value 40.'
  },
  {
    id: 'psda-6', skill: 'One-Variable Data: Distributions and Measures of Center and Spread',
    passage: 'Data set: 9, 12, 15, 15, 18, 20.',
    prompt: 'What is the median of this data set?',
    choices: ['15', '14', '16', '13.5'],
    correct: 0,
    explanation: 'With six values already in order, the median is the average of the two middle values, the 3rd and 4th: (15 + 15) / 2 = 15.'
  },
  {
    id: 'psda-7', skill: 'One-Variable Data: Distributions and Measures of Center and Spread',
    prompt: 'If every value in a data set is increased by 5, what happens to the data set\u2019s standard deviation?',
    choices: ['It stays the same.', 'It increases by 5.', 'It doubles.', 'It decreases by 5.'],
    correct: 0,
    explanation: 'Adding a constant to every value shifts the entire data set but does not change how spread out the values are relative to each other, so standard deviation stays the same.'
  },
  {
    id: 'psda-8', skill: 'One-Variable Data: Distributions and Measures of Center and Spread',
    passage: 'Data set: 3, 7, 9, 12, 21.',
    prompt: 'What is the range of this data set?',
    choices: ['18', '21', '9', '12'],
    correct: 0,
    explanation: 'Range = maximum \u2212 minimum = 21 \u2212 3 = 18.'
  },
  {
    id: 'psda-9', skill: 'Two-Variable Data: Models and Scatterplots',
    prompt: 'A scatterplot shows points clustered tightly around a downward-sloping line. Which best describes the relationship between the two variables?',
    choices: ['Strong negative correlation', 'Strong positive correlation', 'Weak negative correlation', 'No correlation'],
    correct: 0,
    explanation: 'A downward-sloping trend means a negative relationship, and tightly clustered points around that line indicate the relationship is strong.'
  },
  {
    id: 'psda-10', skill: 'Two-Variable Data: Models and Scatterplots',
    passage: 'A line of best fit relating hours studied (x) to exam score (y) is y = 2.5x + 10.',
    prompt: 'According to this model, what is the predicted score for a student who studies 6 hours?',
    choices: ['25', '15', '22.5', '35'],
    correct: 0,
    explanation: 'Substitute x = 6: y = 2.5(6) + 10 = 15 + 10 = 25.'
  },
  {
    id: 'psda-11', skill: 'Two-Variable Data: Models and Scatterplots',
    passage: 'A model relating advertising spending (x, in thousands of dollars) to sales (y, in thousands of dollars) is y = 3x + 50.',
    prompt: 'What does the slope of this model mean in context?',
    choices: [
      'Each additional $1,000 spent on advertising is associated with an estimated $3,000 increase in sales.',
      'Sales are always exactly 3 times advertising spending.',
      'Total sales start at $3,000 with no advertising.',
      'Each additional $1,000 in sales requires $50,000 in advertising.'
    ],
    correct: 0,
    explanation: 'The slope, 3, represents the rate of change: for every 1 unit increase in x (each additional $1,000 in advertising), y (sales) is predicted to increase by 3 units, or $3,000.'
  },
  {
    id: 'psda-12', skill: 'Two-Variable Data: Models and Scatterplots',
    passage: 'A study found that towns with more libraries per capita also tend to have higher average incomes.',
    prompt: 'Which conclusion is most appropriate based on this study alone?',
    choices: [
      'The study shows a correlation but cannot establish that libraries cause higher incomes.',
      'Building more libraries will directly raise a town\u2019s average income.',
      'Higher income definitely causes towns to build more libraries.',
      'There is no relationship between libraries and income.'
    ],
    correct: 0,
    explanation: 'An observed relationship between two variables shows correlation, not causation, especially without a controlled experiment. Either variable could influence the other, or both could be linked to some other factor.'
  },
  {
    id: 'psda-13', skill: 'Probability and Conditional Probability',
    passage: 'A survey of 100 students recorded whether each is in band and whether each plays a sport:<table><tr><th></th><th>Plays a sport</th><th>No sport</th><th>Total</th></tr><tr><th>In band</th><td>24</td><td>36</td><td>60</td></tr><tr><th>Not in band</th><td>10</td><td>30</td><td>40</td></tr><tr><th>Total</th><td>34</td><td>66</td><td>100</td></tr></table>',
    prompt: 'What is the probability that a randomly selected student plays a sport, given that the student is in band?',
    choices: ['40%', '24%', '60%', '17%'],
    correct: 0,
    explanation: 'Given the student is in band, the relevant total is the "In band" row, 60 students. Of those, 24 play a sport: 24/60 = 40%.'
  },
  {
    id: 'psda-14', skill: 'Probability and Conditional Probability',
    passage: 'Using the same survey of 100 students:<table><tr><th></th><th>Plays a sport</th><th>No sport</th><th>Total</th></tr><tr><th>In band</th><td>24</td><td>36</td><td>60</td></tr><tr><th>Not in band</th><td>10</td><td>30</td><td>40</td></tr><tr><th>Total</th><td>34</td><td>66</td><td>100</td></tr></table>',
    prompt: 'What is the probability that a randomly selected student is in band AND plays a sport?',
    choices: ['24%', '40%', '60%', '10%'],
    correct: 0,
    explanation: 'This asks for the joint probability, using the table\u2019s grand total of 100 as the denominator: 24/100 = 24%.'
  },
  {
    id: 'psda-15', skill: 'Probability and Conditional Probability',
    passage: 'A weighted coin lands heads with probability 0.3 on each flip.',
    prompt: 'If the coin is flipped twice, what is the probability of getting heads both times?',
    choices: ['0.09', '0.6', '0.3', '0.51'],
    correct: 0,
    explanation: 'For two independent events, multiply the probabilities: 0.3 \u00d7 0.3 = 0.09.'
  },
  {
    id: 'psda-16', skill: 'Probability and Conditional Probability',
    passage: 'In a group of 50 people, 20 like coffee, 15 like tea, and 5 like both coffee and tea.',
    prompt: 'What is the probability that a randomly selected person from this group likes coffee or tea?',
    choices: ['60%', '70%', '35%', '30%'],
    correct: 0,
    explanation: 'P(coffee or tea) = P(coffee) + P(tea) \u2212 P(both) = 20/50 + 15/50 \u2212 5/50 = 30/50 = 60%.'
  },
  {
    id: 'psda-17', skill: 'Statistical Inference and Evaluating Claims',
    passage: 'A poll of 500 randomly selected voters found that 52% support a proposal, with a margin of error of \u00b14 percentage points.',
    prompt: 'Which conclusion is most justified based on this poll?',
    choices: [
      'The true percentage of all voters who support the proposal is plausibly between 48% and 56%.',
      'Exactly 52% of all voters support the proposal.',
      'More than half of all voters definitely support the proposal.',
      'The poll proves the proposal will pass.'
    ],
    correct: 0,
    explanation: 'A margin of error defines a plausible range around the sample statistic: 52% \u00b1 4 percentage points gives a range of 48% to 56%. Since that range dips below 50%, it is too strong to claim "more than half" with certainty.'
  },
  {
    id: 'psda-18', skill: 'Statistical Inference and Evaluating Claims',
    passage: 'Researchers surveyed shoppers at a single mall to estimate the spending habits of all adults in the country.',
    prompt: 'Which is the most significant limitation of this study?',
    choices: [
      'The sample may not represent the broader population of all adults in the country.',
      'The survey used too many participants.',
      'Mall shoppers cannot be surveyed accurately.',
      'The study did not use a controlled experiment.'
    ],
    correct: 0,
    explanation: 'Shoppers at one mall are not a random sample of "all adults in the country," so results may not generalize beyond people similar to that specific group.'
  },
  {
    id: 'psda-19', skill: 'Statistical Inference and Evaluating Claims',
    passage: 'Researchers observed that students who eat breakfast tend to have higher test scores, but did not randomly assign students to breakfast or no-breakfast groups.',
    prompt: 'Which conclusion is most appropriate based on this study?',
    choices: [
      'The study suggests a correlation but cannot establish that eating breakfast causes higher test scores.',
      'The study proves eating breakfast causes higher test scores.',
      'The study proves higher test scores cause students to eat breakfast.',
      'The study shows no relationship between breakfast and test scores.'
    ],
    correct: 0,
    explanation: 'Without random assignment to groups, this is an observational study, which can show a correlation but cannot establish cause and effect.'
  },
  {
    id: 'psda-20', skill: 'Statistical Inference and Evaluating Claims',
    prompt: 'A pollster wants to reduce the margin of error in a future survey. Which change would most directly help, all else being equal?',
    choices: [
      'Increasing the sample size',
      'Asking fewer questions',
      'Surveying only people who already agree with the proposal',
      'Conducting the survey more quickly'
    ],
    correct: 0,
    explanation: 'A larger, randomly selected sample size generally reduces the margin of error. Surveying only people who already agree introduces bias rather than improving accuracy.'
  }
];

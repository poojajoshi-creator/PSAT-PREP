/* Generic practice-question renderer.
   Call window.initQuiz({ containerId, questions, storageKey }) after the
   page's question-data script has set up a `questions` array. Progress
   (which choice was picked for each question) is saved to localStorage
   under storageKey so it survives a page reload. */

(function () {
  function initQuiz(opts) {
    var container = document.getElementById(opts.containerId);
    if (!container) return;
    var questions = opts.questions || [];
    var storageKey = opts.storageKey;
    var letters = ['A', 'B', 'C', 'D'];

    var state = {};
    try {
      var raw = localStorage.getItem(storageKey);
      if (raw) state = JSON.parse(raw);
    } catch (e) { state = {}; }

    function save() {
      try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (e) {}
    }

    function computeScore() {
      var correct = 0, answered = 0;
      questions.forEach(function (q) {
        if (state[q.id] !== undefined) {
          answered++;
          if (state[q.id] === q.correct) correct++;
        }
      });
      return { correct: correct, answered: answered, total: questions.length };
    }

    var scoreBar = document.createElement('div');
    scoreBar.className = 'quiz-score-bar';
    var list = document.createElement('div');

    function renderScoreBar() {
      var s = computeScore();
      var remaining = s.total - s.answered;
      scoreBar.innerHTML =
        '<span>Score: <span class="score-value">' + s.correct + ' / ' + s.total + '</span>' +
        (remaining > 0 ? ' &middot; ' + remaining + ' left' : ' &middot; all done') +
        '</span>' +
        '<button class="quiz-reset-btn" type="button">Reset progress</button>';
      scoreBar.querySelector('.quiz-reset-btn').addEventListener('click', function () {
        if (window.confirm('Reset all answers on this page?')) {
          state = {};
          save();
          renderAll();
        }
      });
    }

    function showExplain(explainDiv, q, chosenIdx) {
      var isCorrect = chosenIdx === q.correct;
      explainDiv.className = 'q-explain show ' + (isCorrect ? 'correct-explain' : 'incorrect-explain');
      explainDiv.innerHTML =
        '<div class="explain-label">' + (isCorrect ? 'Correct' : 'Not quite') + '</div>' +
        '<div>' + q.explanation + '</div>';
    }

    function renderQuestion(q, idx) {
      var card = document.createElement('div');
      card.className = 'q-card';

      var metaHtml = '<div class="q-meta">Question ' + (idx + 1) + ' of ' + questions.length +
        (q.skill ? ' &middot; ' + q.skill : '') + '</div>';
      var passageHtml = q.passage ? '<div class="q-passage">' + q.passage + '</div>' : '';
      var promptHtml = '<div class="q-prompt">' + q.prompt + '</div>';
      card.innerHTML = metaHtml + passageHtml + promptHtml;

      var choicesWrap = document.createElement('div');
      choicesWrap.className = 'q-choices';
      var explainDiv = document.createElement('div');
      explainDiv.className = 'q-explain';

      var alreadyAnswered = state[q.id] !== undefined;

      q.choices.forEach(function (choiceText, ci) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'q-choice';
        btn.innerHTML = '<span class="choice-letter">' + letters[ci] + '</span><span>' + choiceText + '</span>';

        if (alreadyAnswered) {
          btn.disabled = true;
          if (ci === q.correct) btn.classList.add('correct');
          if (ci === state[q.id] && ci !== q.correct) btn.classList.add('incorrect');
          if (ci === state[q.id]) btn.classList.add('selected');
        }

        btn.addEventListener('click', function () {
          if (state[q.id] !== undefined) return;
          state[q.id] = ci;
          save();
          Array.prototype.forEach.call(choicesWrap.children, function (c, cci) {
            c.disabled = true;
            if (cci === q.correct) c.classList.add('correct');
            if (cci === ci && ci !== q.correct) c.classList.add('incorrect');
            if (cci === ci) c.classList.add('selected');
          });
          showExplain(explainDiv, q, ci);
          renderScoreBar();
        });

        choicesWrap.appendChild(btn);
      });

      card.appendChild(choicesWrap);
      card.appendChild(explainDiv);

      if (alreadyAnswered) showExplain(explainDiv, q, state[q.id]);

      return card;
    }

    function renderAll() {
      list.innerHTML = '';
      questions.forEach(function (q, idx) { list.appendChild(renderQuestion(q, idx)); });
      renderScoreBar();
    }

    container.appendChild(scoreBar);
    container.appendChild(list);
    renderAll();
  }

  window.initQuiz = initQuiz;
})();

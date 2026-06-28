// Quiz engine for exam.html

(function () {
  const LETTERS = ['A', 'B', 'C', 'D'];
  let exam, currentQ, score, answered, results;

  function init() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id || !EXAMS[id]) {
      document.getElementById('quiz-container').innerHTML =
        `<div class="exam-intro-card" style="text-align:center">
           <h1>Exam not found</h1>
           <p class="exam-intro-desc">The exam ID "<strong>${id || 'none'}</strong>" does not exist.</p>
           <a href="index.html" class="btn btn-primary" style="margin-top:20px">← Back to all exams</a>
         </div>`;
      return;
    }

    exam = EXAMS[id];
    currentQ = 0;
    score = 0;
    answered = false;
    results = [];

    // Update page-level meta
    document.title = exam.title + ' Practice Test — PassMark';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content =
      `Free practice test for ${exam.title}. ${exam.description} Practice with instant feedback.`;

    // Breadcrumb
    const cat = CATEGORIES.find(c => c.id === exam.category);
    document.getElementById('breadcrumb-category').textContent = cat ? cat.name : exam.category;
    document.getElementById('breadcrumb-exam').textContent = exam.title;

    showIntro();
  }

  function showIntro() {
    const cat = CATEGORIES.find(c => c.id === exam.category);
    document.getElementById('quiz-container').innerHTML = `
      <div class="exam-intro-card">
        <div class="exam-meta-pill">
          ${cat ? cat.icon + ' ' + cat.name : ''} &nbsp;·&nbsp; ${exam.questions.length} Questions
        </div>
        <h1>${exam.title}</h1>
        <p class="exam-intro-desc">${exam.description}</p>
        <p class="exam-intro-desc" style="margin-top:8px">
          Answer each question and get instant feedback with an explanation.
          Your score is shown at the end.
        </p>
        <button class="btn btn-primary" id="start-btn" style="margin-top:8px">
          Start Quiz →
        </button>
        <a href="index.html" class="btn btn-ghost" style="margin-top:8px">← All Exams</a>
      </div>`;
    document.getElementById('start-btn').addEventListener('click', renderQuestion);
  }

  function renderQuestion() {
    answered = false;
    const q = exam.questions[currentQ];
    const progress = ((currentQ) / exam.questions.length) * 100;

    document.getElementById('quiz-container').innerHTML = `
      <div class="quiz-progress-wrap">
        <div class="quiz-progress-label">
          <span>Question ${currentQ + 1} of ${exam.questions.length}</span>
          <span>${score} correct</span>
        </div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${progress}%"></div>
        </div>
      </div>

      <div class="question-card">
        <div class="question-num">Question ${currentQ + 1}</div>
        <div class="question-text">${q.q}</div>
        <div class="options-list" id="options-list">
          ${q.options.map((opt, i) => `
            <button class="option-btn" data-index="${i}" aria-label="Option ${LETTERS[i]}: ${opt}">
              <span class="option-letter">${LETTERS[i]}</span>
              <span>${opt}</span>
            </button>`).join('')}
        </div>
        <div id="feedback-area"></div>
      </div>

      <div class="quiz-actions">
        <button class="btn btn-primary hidden" id="next-btn">
          ${currentQ + 1 < exam.questions.length ? 'Next Question →' : 'See Results →'}
        </button>
      </div>`;

    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.index)));
    });
  }

  function selectAnswer(chosen) {
    if (answered) return;
    answered = true;

    const q = exam.questions[currentQ];
    const isCorrect = chosen === q.answer;
    if (isCorrect) score++;
    results.push({ q: q.q, chosen, correct: q.answer, isCorrect, explanation: q.explanation });

    // Style all buttons
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      else if (i === chosen && !isCorrect) btn.classList.add('wrong');
    });

    // Feedback
    document.getElementById('feedback-area').innerHTML = `
      <div class="feedback-box ${isCorrect ? 'correct-fb' : 'wrong-fb'}">
        <div class="feedback-title">
          ${isCorrect ? '✓ Correct!' : '✗ Incorrect'}
        </div>
        <div>${q.explanation}</div>
      </div>`;

    // Reveal next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.classList.remove('hidden');
    nextBtn.addEventListener('click', advance);
  }

  function advance() {
    currentQ++;
    if (currentQ >= exam.questions.length) showResults();
    else renderQuestion();
  }

  function showResults() {
    const pct = Math.round((score / exam.questions.length) * 100);
    const ringClass = pct >= 80 ? 'great' : pct >= 60 ? 'ok' : 'poor';
    const message = pct === 100 ? 'Perfect score! Outstanding work.' :
                    pct >= 80  ? 'Great job! You\'re well prepared.' :
                    pct >= 60  ? 'Good effort — review the explanations and try again.' :
                                 'Keep studying — review each explanation carefully.';

    const rows = results.map((r, i) => `
      <tr>
        <td>${i + 1}. ${r.q}</td>
        <td style="white-space:nowrap">
          <span class="result-icon">${r.isCorrect ? '✓' : '✗'}</span>
          ${exam.questions[i].options[r.correct]}
        </td>
      </tr>`).join('');

    document.getElementById('quiz-container').innerHTML = `
      <div class="results-card">
        <div class="score-ring ${ringClass}">
          <div class="score-pct">${pct}%</div>
          <div class="score-frac">${score} / ${exam.questions.length}</div>
        </div>
        <h2 class="results-title">${exam.title}</h2>
        <p class="results-msg">${message}</p>

        <table class="results-table">
          <thead><tr><th>Question</th><th>Correct Answer</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>

        <!-- ADSENSE PLACEHOLDER: Results screen -->
        <div class="adsense-placeholder" style="margin:0 0 24px" aria-hidden="true">
          <!-- Google AdSense: Insert responsive ad unit here (e.g., 300x250 or responsive) -->
          <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
          <!-- <ins class="adsbygoogle" ...></ins> -->
        </div>

        <div class="results-actions">
          <button class="btn btn-primary" id="retry-btn">↺ Retry Quiz</button>
          <a href="index.html" class="btn btn-outline">← All Exams</a>
        </div>
      </div>`;

    document.getElementById('retry-btn').addEventListener('click', function () {
      currentQ = 0; score = 0; answered = false; results = [];
      renderQuestion();
    });

    // Smooth scroll to top of results
    document.getElementById('quiz-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

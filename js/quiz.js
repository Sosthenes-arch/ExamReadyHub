// Quiz engine — works on both exam.html?id=xxx and exams/{id}.html

(function () {
  const LETTERS = ['A', 'B', 'C', 'D'];
  let exam, currentQ, score, answered, results;

  // window.EXAM_ID is set by individual exam pages (exams/{id}.html)
  // window.EXAM_BASE is "../" for pages in the exams/ subdirectory, "" for root
  const BASE = (typeof window.EXAM_BASE === 'string') ? window.EXAM_BASE : '';

  function init() {
    const id = window.EXAM_ID || new URLSearchParams(window.location.search).get('id');

    if (!id || !EXAMS[id]) {
      document.getElementById('quiz-container').innerHTML =
        `<div class="exam-intro-card" style="text-align:center">
           <h1>Exam not found</h1>
           <p class="exam-intro-desc">The exam ID "<strong>${id || 'none'}</strong>" does not exist.</p>
           <a href="${BASE}index.html" class="btn btn-primary" style="margin-top:20px">&larr; Back to all exams</a>
         </div>`;
      return;
    }

    exam = EXAMS[id];
    currentQ = 0; score = 0; answered = false; results = [];

    // Only update dynamic meta when on exam.html?id= (not on individual static pages)
    if (!window.EXAM_ID) {
      document.title = `${exam.title} Practice Test — ExamReadyHub`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.content =
        `Free practice test for ${exam.title}. ${exam.description} Instant feedback on every question. No login required.`;
      const slug = (typeof EXAM_META !== 'undefined' && EXAM_META[id] && EXAM_META[id].slug) ? EXAM_META[id].slug : exam.id;
      const examUrl = `https://www.examreadyhub.com/exams/${slug}.html`;
      const canonical = document.getElementById('canonical-tag');
      if (canonical) canonical.href = examUrl;
      const ogUrl   = document.getElementById('og-url');   if (ogUrl)   ogUrl.content   = examUrl;
      const ogTitle = document.getElementById('og-title'); if (ogTitle) ogTitle.content = `${exam.title} Practice Test — ExamReadyHub`;
      const ogDesc  = document.getElementById('og-desc');  if (ogDesc)  ogDesc.content  = `Free multiple-choice practice test for ${exam.title}. Instant feedback, no login required.`;
    }

    // Breadcrumb
    const cat = CATEGORIES.find(c => c.id === exam.category);
    const catEl = document.getElementById('breadcrumb-category');
    if (catEl) catEl.textContent = cat ? cat.name : exam.category;
    const examEl = document.getElementById('breadcrumb-exam');
    if (examEl) examEl.textContent = exam.title;

    showIntro();
  }

  function showIntro() {
    const cat = CATEGORIES.find(c => c.id === exam.category);
    const meta = (typeof EXAM_META !== 'undefined') ? EXAM_META[exam.id] : null;
    const overviewHtml = meta && meta.overview
      ? `<p class="exam-intro-desc" style="margin-top:12px">${meta.overview}</p>`
      : '';
    const tipsHtml = meta && meta.tips && meta.tips.length
      ? `<div class="exam-tips" style="margin-top:16px;text-align:left">
           <strong style="display:block;margin-bottom:6px">&#128161; Success Tips</strong>
           <ul style="margin:0;padding-left:20px;line-height:1.7">
             ${meta.tips.map(t => `<li>${t}</li>`).join('')}
           </ul>
         </div>`
      : '';
    document.getElementById('quiz-container').innerHTML = `
      <div class="exam-intro-card">
        <div class="exam-meta-pill">
          ${cat ? cat.icon + ' ' + cat.name : ''} &nbsp;&middot;&nbsp; ${exam.questions.length} Questions
        </div>
        <h1>${exam.title}</h1>
        <p class="exam-intro-desc">${exam.description}</p>
        ${overviewHtml}
        ${tipsHtml}
        <p class="exam-intro-desc" style="margin-top:12px">
          Answer each question and get instant feedback with an explanation.
          Your score is shown at the end.
        </p>
        <button class="btn btn-primary" id="start-btn" style="margin-top:8px">Start Quiz &rarr;</button>
        <a href="${BASE}index.html" class="btn btn-ghost" style="margin-top:8px">&larr; All Exams</a>
      </div>`;
    document.getElementById('start-btn').addEventListener('click', renderQuestion);
  }

  function renderQuestion() {
    answered = false;
    const q = exam.questions[currentQ];
    const progress = (currentQ / exam.questions.length) * 100;

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
          ${currentQ + 1 < exam.questions.length ? 'Next Question &rarr;' : 'See Results &rarr;'}
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

    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      else if (i === chosen && !isCorrect) btn.classList.add('wrong');
    });

    document.getElementById('feedback-area').innerHTML = `
      <div class="feedback-box ${isCorrect ? 'correct-fb' : 'wrong-fb'}">
        <div class="feedback-title">${isCorrect ? '&#10003; Correct!' : '&#10007; Incorrect'}</div>
        <div>${q.explanation}</div>
      </div>`;

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
                    pct >= 80  ? "Great job! You're well prepared." :
                    pct >= 60  ? 'Good effort — review the explanations and try again.' :
                                 'Keep studying — review each explanation carefully.';

    const rows = results.map((r, i) => `
      <tr>
        <td>${i + 1}. ${r.q}</td>
        <td style="white-space:nowrap">
          <span class="result-icon">${r.isCorrect ? '&#10003;' : '&#10007;'}</span>
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
          <!-- Google AdSense: Insert responsive ad unit here -->
        </div>

        <div class="results-actions">
          <button class="btn btn-primary" id="retry-btn">&#8635; Retry Quiz</button>
          <a href="${BASE}index.html" class="btn btn-outline">&larr; All Exams</a>
        </div>
      </div>`;

    document.getElementById('retry-btn').addEventListener('click', function () {
      currentQ = 0; score = 0; answered = false; results = [];
      renderQuestion();
    });

    document.getElementById('quiz-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

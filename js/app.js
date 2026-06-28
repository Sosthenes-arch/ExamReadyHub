// Homepage: renders category list from CATEGORIES + EXAMS data

(function () {
  const container = document.getElementById('category-list');
  if (!container) return;

  CATEGORIES.forEach(cat => {
    const block = document.createElement('div');
    block.className = 'category-block';

    const examCards = cat.exams
      .filter(id => EXAMS[id])
      .map(id => {
        const e = EXAMS[id];
        return `
          <a class="exam-card" href="exam.html?id=${e.id}">
            <div class="exam-card-top">
              <span class="exam-title">${e.title}</span>
              <span class="exam-badge">${e.questions.length} Qs</span>
            </div>
            <p class="exam-desc">${e.description}</p>
            <div class="exam-card-footer">
              <span class="exam-q-count">${e.questions.length} practice questions</span>
              <span class="exam-start-link">Start Quiz</span>
            </div>
          </a>`;
      }).join('');

    block.innerHTML = `
      <div class="category-header">
        <div class="category-icon">${cat.icon}</div>
        <div>
          <h2>${cat.name}</h2>
          <span class="cat-count">${cat.exams.filter(id => EXAMS[id]).length} exams</span>
        </div>
      </div>
      <div class="exam-grid">${examCards}</div>`;

    container.appendChild(block);
  });
})();

// Mobile nav toggle
document.querySelector('.nav-toggle')?.addEventListener('click', function () {
  document.querySelector('.site-nav').classList.toggle('open');
});

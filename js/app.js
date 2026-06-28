// Homepage: renders category list + live exam search

(function () {
  const container = document.getElementById('category-list');
  if (!container) return;

  // Render all categories
  CATEGORIES.forEach(cat => {
    const validExams = cat.exams.filter(id => EXAMS[id]);
    const examCards = validExams.map(id => {
      const e = EXAMS[id];
      return `
        <a class="exam-card" href="exam.html?id=${e.id}"
           data-title="${e.title.toLowerCase()}"
           data-desc="${(e.description || '').toLowerCase()}">
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

    const block = document.createElement('div');
    block.className = 'category-block';
    block.dataset.catId = cat.id;
    block.innerHTML = `
      <div class="category-header">
        <div class="category-icon">${cat.icon}</div>
        <div>
          <h2><a class="category-name-link" href="category.html?id=${cat.id}">${cat.name}</a></h2>
          <span class="cat-count">${validExams.length} exam${validExams.length !== 1 ? 's' : ''}</span>
        </div>
        <a class="view-all-link" href="category.html?id=${cat.id}">View all &rarr;</a>
      </div>
      <div class="exam-grid">${examCards}</div>`;

    container.appendChild(block);
  });

  // --- Live search ---
  const searchInput  = document.getElementById('exam-search');
  const searchClear  = document.getElementById('search-clear');
  const searchStatus = document.getElementById('search-status');
  const noResults    = document.getElementById('no-results');

  if (!searchInput) return;

  function doSearch(raw) {
    const q = raw.trim().toLowerCase();
    searchClear.hidden = !q;

    if (!q) {
      container.querySelectorAll('.category-block').forEach(b => b.style.display = '');
      container.querySelectorAll('.exam-card').forEach(c => c.style.display = '');
      searchStatus.textContent = '';
      if (noResults) noResults.hidden = true;
      return;
    }

    let total = 0;
    container.querySelectorAll('.category-block').forEach(block => {
      let hits = 0;
      block.querySelectorAll('.exam-card').forEach(card => {
        const match = card.dataset.title.includes(q) || card.dataset.desc.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) hits++;
      });
      block.style.display = hits ? '' : 'none';
      total += hits;
    });

    if (total === 0) {
      searchStatus.textContent = '';
      if (noResults) {
        noResults.hidden = false;
        const strong = noResults.querySelector('strong');
        if (strong) strong.textContent = raw;
      }
    } else {
      if (noResults) noResults.hidden = true;
      searchStatus.textContent = `${total} exam${total !== 1 ? 's' : ''} found`;
    }
  }

  searchInput.addEventListener('input', e => doSearch(e.target.value));

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    doSearch('');
    searchInput.focus();
  });

  // Enter → focus first visible card
  searchInput.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const first = container.querySelector('.exam-card:not([style*="display: none"])');
    if (first) first.focus();
  });
})();

// Mobile nav
document.querySelector('.nav-toggle')?.addEventListener('click', function () {
  document.querySelector('.site-nav').classList.toggle('open');
});

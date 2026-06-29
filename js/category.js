// Category page: renders all exams for a single category

(function () {
  const container = document.getElementById('category-container');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const catId  = params.get('id');
  const cat    = CATEGORIES.find(c => c.id === catId);

  if (!cat) {
    container.innerHTML = `
      <div class="exam-intro-card" style="text-align:center;padding:48px 24px">
        <h1 style="margin-bottom:12px">Category not found</h1>
        <p class="exam-intro-desc">No category matches the id "<strong>${catId || ''}</strong>".</p>
        <a href="index.html" class="btn btn-primary" style="margin-top:24px;display:inline-block">
          &larr; All Exams
        </a>
      </div>`;
    return;
  }

  // Update page title & meta
  document.title = `${cat.name} Practice Tests — ExamReadyHub`;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const names = cat.exams.filter(id => EXAMS[id]).map(id => EXAMS[id].title).slice(0, 6).join(', ');
    metaDesc.content = `Free practice tests for ${cat.name}: ${names}${cat.exams.length > 6 ? ', and more' : ''}. Instant feedback, no login required.`;
  }

  const canonical = document.getElementById('canonical-tag');
  if (canonical) canonical.href = `https://www.examreadyhub.com/category.html?id=${cat.id}`;

  const ogUrl   = document.getElementById('og-url');
  const ogTitle = document.getElementById('og-title');
  const ogDesc  = document.getElementById('og-desc');
  if (ogUrl)   ogUrl.content   = `https://www.examreadyhub.com/category.html?id=${cat.id}`;
  if (ogTitle) ogTitle.content = `${cat.name} Practice Tests — ExamReadyHub`;
  if (ogDesc)  ogDesc.content  = `Free multiple-choice practice tests for ${cat.name} exams. Instant feedback, no login required.`;

  // Update breadcrumb
  const breadcrumbCat = document.getElementById('breadcrumb-category');
  if (breadcrumbCat) breadcrumbCat.textContent = cat.name;

  // Render exam cards
  const exams = cat.exams.filter(id => EXAMS[id]).map(id => EXAMS[id]);

  const cards = exams.map(e => `
    <a class="exam-card" href="exams/${e.id}.html">
      <div class="exam-card-top">
        <span class="exam-title">${e.title}</span>
        <span class="exam-badge">${e.questions.length} Qs</span>
      </div>
      <p class="exam-desc">${e.description}</p>
      <div class="exam-card-footer">
        <span class="exam-q-count">${e.questions.length} practice questions</span>
        <span class="exam-start-link">Start Quiz</span>
      </div>
    </a>`).join('');

  container.innerHTML = `
    <div class="category-page-header">
      <div class="category-page-icon">${cat.icon}</div>
      <div>
        <h1 class="category-page-title">${cat.name}</h1>
        <p class="category-page-count">${exams.length} exam${exams.length !== 1 ? 's' : ''} available</p>
      </div>
    </div>
    <div class="exam-grid">${cards}</div>`;
})();

// Mobile nav
document.querySelector('.nav-toggle')?.addEventListener('click', function () {
  document.querySelector('.site-nav').classList.toggle('open');
});

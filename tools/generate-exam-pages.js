/**
 * generate-exam-pages.js
 * Generates one SEO-optimised HTML file per exam in exams/{id}.html
 * Also regenerates the exam section of sitemap.xml
 *
 * Run from project root:  node tools/generate-exam-pages.js
 */

const fs   = require('fs');
const path = require('path');

const ROOT     = path.join(__dirname, '..');
const EXAMS_JS = fs.readFileSync(path.join(ROOT, 'data', 'exams.js'), 'utf8');

// ── Load EXAMS + CATEGORIES from data file ──────────────────────────────────
let EXAMS, CATEGORIES;
try {
  const fn = new Function(EXAMS_JS + '\nreturn { EXAMS, CATEGORIES };');
  ({ EXAMS, CATEGORIES } = fn());
} catch (e) {
  console.error('Failed to parse data/exams.js:', e.message);
  process.exit(1);
}

// ── Build exam → category lookup ────────────────────────────────────────────
const catByExamId = {};
CATEGORIES.forEach(cat => {
  cat.exams.forEach(id => { catByExamId[id] = cat; });
});

// ── Config ───────────────────────────────────────────────────────────────────
const SITE    = 'https://www.examreadyhub.com';
const GTAG_ID = 'G-HWCM154HWR';
const OUT_DIR = path.join(ROOT, 'exams');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

// ── Helpers ──────────────────────────────────────────────────────────────────
function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ── HTML template ─────────────────────────────────────────────────────────────
function generatePage(exam) {
  const cat      = catByExamId[exam.id] || { id: '', name: 'Exams', icon: '📝' };
  const title    = esc(exam.title);
  const count    = exam.questions.length;
  const url      = `${SITE}/exams/${exam.id}.html`;
  const metaDesc = esc(`Free ${exam.title} practice test — ${count} multiple-choice questions with instant feedback and full explanations. No login required.`);
  const ogDesc   = esc(`${count} multiple-choice questions for the ${exam.title}. Instant feedback and full explanations on every question. Free, no account needed.`);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GTAG_ID}');
  </script>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${title} Practice Test &mdash; ExamReadyHub</title>
  <meta name="description" content="${metaDesc}">
  <meta name="author" content="ExamReadyHub">
  <link rel="canonical" href="${url}">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${title} Practice Test &mdash; ExamReadyHub">
  <meta property="og:description" content="${ogDesc}">
  <meta property="og:image" content="${SITE}/logo.png">
  <meta property="og:site_name" content="ExamReadyHub">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title} Practice Test &mdash; ExamReadyHub">
  <meta name="twitter:description" content="${metaDesc}">
  <meta name="twitter:image" content="${SITE}/logo.png">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="../logo.png">
  <link rel="apple-touch-icon" href="../logo.png">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "${title} Practice Test",
    "description": "${metaDesc}",
    "url": "${url}",
    "learningResourceType": "Quiz",
    "educationalUse": "Practice",
    "isAccessibleForFree": true,
    "inLanguage": "en",
    "teaches": "${title}",
    "provider": {
      "@type": "Organization",
      "name": "ExamReadyHub",
      "url": "${SITE}"
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "ExamReadyHub",
      "url": "${SITE}"
    }
  }
  </script>
</head>
<body class="quiz-page">

  <header class="site-header">
    <div class="container">
      <a href="../index.html" class="logo">ExamReady<span>Hub</span></a>
      <nav class="site-nav" aria-label="Main navigation">
        <a href="../index.html">Home</a>
        <a href="../about.html">About</a>
        <a href="../contact.html">Contact</a>
      </nav>
      <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
    </div>
  </header>

  <main>
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="../index.html">Home</a>
        <span>&rsaquo;</span>
        <a href="../category.html?id=${cat.id}" id="breadcrumb-category">${esc(cat.name)}</a>
        <span>&rsaquo;</span>
        <span id="breadcrumb-exam">${title}</span>
      </nav>

      <div id="quiz-container">
        <div class="exam-intro-card" style="text-align:center">
          <p style="color:var(--text-muted)">Loading exam&hellip;</p>
        </div>
      </div>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="../index.html" class="logo">ExamReady<span>Hub</span></a>
          <p>Free exam practice for everyone.</p>
        </div>
        <div class="footer-links">
          <h4>Site</h4>
          <a href="../index.html">Home</a>
          <a href="../about.html">About</a>
          <a href="../contact.html">Contact</a>
          <a href="../privacy.html">Privacy Policy</a>
        </div>
        <div class="footer-links">
          <h4>Popular Exams</h4>
          <a href="../exams/dmv.html">DMV Permit Test</a>
          <a href="../exams/comptia-security.html">CompTIA Security+</a>
          <a href="../exams/usmle.html">USMLE Step 1</a>
          <a href="../exams/lsat.html">LSAT</a>
        </div>
      </div>
      <p class="footer-copy">
        &copy; 2026 ExamReadyHub. For practice purposes only &mdash;
        not affiliated with or endorsed by any official testing organisation.
      </p>
    </div>
  </footer>

  <script>window.EXAM_ID = "${exam.id}"; window.EXAM_BASE = "../";</script>
  <script src="../data/exams.js"></script>
  <script src="../js/quiz.js"></script>
  <script>
    document.querySelector('.nav-toggle')?.addEventListener('click', function () {
      document.querySelector('.site-nav').classList.toggle('open');
    });
  </script>
</body>
</html>`;
}

// ── Generate exam pages ───────────────────────────────────────────────────────
const exams = Object.values(EXAMS);
exams.forEach(exam => {
  fs.writeFileSync(path.join(OUT_DIR, `${exam.id}.html`), generatePage(exam), 'utf8');
});
console.log(`✓ Generated ${exams.length} exam pages → exams/`);

// ── Regenerate sitemap.xml ────────────────────────────────────────────────────
const SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');
let sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');

// Remove all old exam.html?id= lines (and their surrounding url tags)
sitemap = sitemap.replace(/\s*<url><loc>https:\/\/www\.examreadyhub\.com\/exam\.html\?id=[^<]+<\/loc>[^<]*<changefreq>[^<]*<\/changefreq>[^<]*<priority>[^<]*<\/priority><\/url>/g, '');

// Also remove the old China comment + entries if regenerating
sitemap = sitemap.replace(/\s*<!-- China exams -->/g, '');

// Remove any double-blank lines left behind
sitemap = sitemap.replace(/\n{3,}/g, '\n\n');

// Build new exam URL entries grouped by category
const examEntries = [];
CATEGORIES.forEach(cat => {
  examEntries.push(`\n  <!-- ${cat.name} -->`);
  cat.exams.filter(id => EXAMS[id]).forEach(id => {
    const priority = ['dmv', 'comptia-security', 'usmle', 'sat', 'nclex', 'aws-solutions-architect', 'cissp', 'lsat', 'cfa'].includes(id) ? '0.8' : '0.7';
    examEntries.push(`  <url><loc>${SITE}/exams/${id}.html</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`);
  });
});

// Insert before <!-- Category pages -->
sitemap = sitemap.replace('  <!-- Category pages -->', examEntries.join('\n') + '\n\n  <!-- Category pages -->');

fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
console.log(`✓ Updated sitemap.xml`);

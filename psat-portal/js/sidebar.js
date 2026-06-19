/* Persistent left sidebar nav.
   Each page sets window.PAGE (e.g. "home","english-overview","ii","cs","eoi","sec","math")
   and window.SITE_ROOT (relative path prefix to the repo root) before loading this script. */

(function () {
  var page = window.PAGE || '';
  var root = window.SITE_ROOT || '';

  document.body.classList.add('has-sidebar');

  function item(href, num, label, key, disabled) {
    var cls = 'nav-item' + (page === key ? ' active' : '') + (disabled ? ' disabled' : '');
    return '<a class="' + cls + '" href="' + href + '">' +
      '<span class="nav-num">' + num + '</span><span>' + label + '</span></a>';
  }

  var sidebarHTML =
    '<a class="brand-link" href="' + root + 'index.html">' +
      '<span class="brand-title">PSAT Prep Portal</span>' +
      '<span class="brand-sub">PSAT 10 &rarr; PSAT/NMSQT</span>' +
    '</a>' +
    '<nav>' +
      '<div class="nav-group">' +
        '<span class="nav-group-label">English &middot; Reading &amp; Writing</span>' +
        item(root + 'english/index.html', '\u2022', 'Overview', 'english-overview') +
        item(root + 'english/information-and-ideas.html', '1', 'Information and Ideas', 'ii') +
        item(root + 'english/craft-and-structure.html', '2', 'Craft and Structure', 'cs') +
        item(root + 'english/expression-of-ideas.html', '3', 'Expression of Ideas', 'eoi') +
        item(root + 'english/standard-english-conventions.html', '4', 'Standard English Conventions', 'sec') +
      '</div>' +
      '<div class="nav-group">' +
        '<span class="nav-group-label">Math</span>' +
        item(root + 'math/index.html', '\u2022', 'Overview (coming soon)', 'math') +
      '</div>' +
    '</nav>' +
    '<div class="nav-foot">All dates &amp; countdowns shown in US Eastern time.</div>';

  var aside = document.createElement('aside');
  aside.className = 'sidebar';
  aside.innerHTML = sidebarHTML;

  var overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';

  var toggle = document.createElement('button');
  toggle.className = 'sidebar-toggle';
  toggle.setAttribute('aria-label', 'Toggle navigation');
  toggle.textContent = 'Menu';

  document.body.insertBefore(overlay, document.body.firstChild);
  document.body.insertBefore(aside, document.body.firstChild);
  document.body.insertBefore(toggle, document.body.firstChild);

  function setOpen(open) {
    aside.classList.toggle('open', open);
    overlay.classList.toggle('show', open);
  }
  toggle.addEventListener('click', function () { setOpen(!aside.classList.contains('open')); });
  overlay.addEventListener('click', function () { setOpen(false); });
})();

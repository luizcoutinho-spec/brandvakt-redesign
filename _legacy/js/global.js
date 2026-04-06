/* global.js — cookie consent banner + floating contact button */
(function () {
  'use strict';

  var isRoot = !window.location.pathname.includes('/pages/');
  var base = isRoot ? '' : '../';

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function(k) { node.setAttribute(k, attrs[k]); });
    if (children) children.forEach(function(c) {
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  function addStyle(css) {
    var s = document.createElement('style');
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* ── Cookie consent banner ─────────────────────────────────────────── */
  if (!localStorage.getItem('bv_cookies')) {
    addStyle([
      '#bv-cookie{',
        'position:fixed;bottom:0;left:0;right:0;z-index:9999;',
        'background:rgba(8,12,24,0.97);backdrop-filter:blur(12px);',
        '-webkit-backdrop-filter:blur(12px);',
        'border-top:1px solid rgba(255,255,255,0.06);',
        'padding:1.25rem 2rem;',
        'display:flex;align-items:center;justify-content:space-between;',
        'flex-wrap:wrap;gap:1rem;',
        'font-family:"Outfit",system-ui,sans-serif;font-size:.85rem;',
        'color:#7a8298;line-height:1.5;',
        'transform:translateY(100%);',
        'animation:bv-slide-up .45s .6s cubic-bezier(.25,.46,.45,.94) forwards;',
      '}',
      '@keyframes bv-slide-up{to{transform:translateY(0)}}',
      '#bv-cookie p{margin:0;max-width:600px;}',
      '#bv-cookie a{color:#c8965a;text-decoration:underline;text-underline-offset:2px;}',
      '#bv-cookie a:hover{color:#daa76e;}',
      '#bv-cookie-actions{display:flex;gap:.75rem;flex-shrink:0;}',
      '.bv-cookie-btn{',
        'padding:.5rem 1.25rem;border-radius:2px;',
        'font-family:"Outfit",system-ui,sans-serif;',
        'font-size:.8rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;',
        'cursor:pointer;border:none;transition:background .25s,color .25s;',
      '}',
      '.bv-cookie-btn--accept{background:#c8965a;color:#080c18;}',
      '.bv-cookie-btn--accept:hover{background:#daa76e;}',
      '.bv-cookie-btn--more{background:transparent;color:#7a8298;border:1px solid rgba(255,255,255,0.1);}',
      '.bv-cookie-btn--more:hover{color:#faf7f2;}',
      '@media(max-width:600px){',
        '#bv-cookie{padding:1rem 1.25rem;}',
        '#bv-cookie-actions{width:100%;}',
        '.bv-cookie-btn{flex:1;text-align:center;}',
      '}',
      'body.bv-has-banner #bv-fab{bottom:calc(2rem + 80px);}'
    ].join(''));

    var cookieLink = el('a', { href: base + 'pages/cookies.html' }, ['Cookie Policy']);
    var bannerText = el('p', {}, [
      'We use essential cookies to keep this site working and may use optional analytics cookies. See our\u00a0',
      cookieLink,
      '\u00a0for details.'
    ]);

    var btnMore = el('button', { class: 'bv-cookie-btn bv-cookie-btn--more', id: 'bv-cookie-more' }, ['Learn More']);
    var btnAccept = el('button', { class: 'bv-cookie-btn bv-cookie-btn--accept', id: 'bv-cookie-accept' }, ['Accept']);
    var actions = el('div', { id: 'bv-cookie-actions' }, [btnMore, btnAccept]);

    var banner = el('div', { id: 'bv-cookie' }, [bannerText, actions]);
    document.body.appendChild(banner);
    document.body.classList.add('bv-has-banner');

    function dismiss() {
      banner.style.animation = 'none';
      banner.style.transition = 'transform .3s ease';
      banner.style.transform = 'translateY(100%)';
      document.body.classList.remove('bv-has-banner');
      setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 320);
    }

    btnAccept.addEventListener('click', function () {
      localStorage.setItem('bv_cookies', '1');
      dismiss();
    });

    btnMore.addEventListener('click', function () {
      window.location.href = base + 'pages/cookies.html';
    });
  }

  /* ── Floating contact button ────────────────────────────────────────── */
  addStyle([
    '#bv-fab{',
      'position:fixed;bottom:2rem;right:2rem;z-index:998;',
      'width:52px;height:52px;border-radius:50%;',
      'background:#3edbc6;',
      'display:flex;align-items:center;justify-content:center;',
      'box-shadow:0 4px 20px rgba(62,219,198,0.35);',
      'transition:transform .25s cubic-bezier(.25,.46,.45,.94),box-shadow .25s;',
      'text-decoration:none;',
    '}',
    '#bv-fab:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(62,219,198,0.5);}',
    '#bv-fab svg{width:26px;height:26px;}',
    '@media(max-width:480px){#bv-fab{bottom:1.25rem;right:1.25rem;width:46px;height:46px;}}',
  ].join(''));

  /* Build SVG via DOM — no innerHTML */
  var ns = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', '#080c18');
  svg.setAttribute('aria-hidden', 'true');
  var path = document.createElementNS(ns, 'path');
  path.setAttribute('d', 'M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z');
  svg.appendChild(path);

  var fab = el('a', {
    id: 'bv-fab',
    href: base + 'pages/contact.html',
    'aria-label': 'Contact us',
    title: 'Contact us'
  }, [svg]);
  document.body.appendChild(fab);

  /* ── Mobile hamburger menu ─────────────────────────────────────────── */
  addStyle([
    '.nav__hamburger{display:none;background:none;border:none;cursor:pointer;',
    'padding:0.5rem;z-index:101;flex-direction:column;justify-content:center;gap:5px;}',
    '.nav__hamburger span{display:block;width:24px;height:2px;background:var(--teal,#3edbc6);',
    'border-radius:2px;transition:transform 0.3s ease,opacity 0.3s ease;}',
    '.nav__hamburger.active span:nth-child(1){transform:translateY(7px) rotate(45deg);}',
    '.nav__hamburger.active span:nth-child(2){opacity:0;}',
    '.nav__hamburger.active span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}',
    '@media(max-width:900px){',
    '.nav__hamburger{display:flex!important;}',
    '.nav__links{position:fixed!important;inset:0;background:rgba(8,12,24,0.98)!important;',
    'backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);',
    'flex-direction:column!important;justify-content:center;align-items:center;',
    'gap:2rem!important;transform:translateX(100%);transition:transform 0.4s ease;',
    'z-index:100!important;}',
    '.nav__links.open{transform:translateX(0);}',
    '.nav__links a{font-size:1.2rem!important;color:rgba(255,255,255,0.7)!important;}',
    '.nav__links .nav__cta{width:80%;max-width:300px;text-align:center;',
    'padding:0.85rem 1.5rem!important;font-size:0.85rem!important;}',
    '}'
  ].join(''));

  var navInner = document.querySelector('.nav__inner');
  if (navInner && !document.querySelector('.nav__hamburger')) {
    var btn = document.createElement('button');
    btn.className = 'nav__hamburger';
    btn.setAttribute('aria-label', 'Menu');
    btn.setAttribute('aria-expanded', 'false');
    for (var i = 0; i < 3; i++) { btn.appendChild(document.createElement('span')); }
    navInner.appendChild(btn);
  }

  var hamburger = document.querySelector('.nav__hamburger');
  var navLinks = document.querySelector('.nav__links');
  if (hamburger && navLinks && !hamburger.dataset.bvInit) {
    hamburger.dataset.bvInit = '1';
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
    });
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Active nav link ───────────────────────────────────────────────── */
  var path = window.location.pathname;
  document.querySelectorAll('.nav__links a:not(.nav__cta)').forEach(function(link) {
    var href = link.getAttribute('href') || '';
    var filename = href.split('/').pop().split('#')[0];
    if (filename && filename !== 'index.html' && path.indexOf(filename) !== -1) {
      link.classList.add('active');
    }
  });

})();

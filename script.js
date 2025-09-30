// CYBERPUNK 2077 ENHANCED INTERACTIONS

(function () {
  const $ = (sel, parent = document) => parent.querySelector(sel);
  const $$ = (sel, parent = document) => [...parent.querySelectorAll(sel)];

  // Year stamp
  const yearEl = $('#current-year') || $('#y');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile navigation toggle with accessibility
  const navToggle = $('.nav-toggle');
  const navMenu = $('#nav-menu');

  function openNav() {
    navMenu.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    const firstLink = $('.nav-link', navMenu);
    if (firstLink) setTimeout(() => firstLink.focus(), 50);
  }
  function closeNav() {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  function toggleNav() {
    navMenu.classList.contains('is-open') ? closeNav() : openNav();
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => { e.preventDefault(); toggleNav(); });
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('is-open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        closeNav();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });
    $$('.nav-link', navMenu).forEach(link => link.addEventListener('click', closeNav));
  }

  // Active link on scroll
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0.1 });

    sections.forEach(s => io.observe(s));
  }

  // Gentle glitch refresh for brand text to avoid pattern burn-in
  const glitchEls = $$('.glitch-enhanced');
  if (glitchEls.length) {
    setInterval(() => {
      glitchEls.forEach(el => {
        if (Math.random() < 0.1) { // 10% chance
          el.style.animation = 'none';
          void el.offsetHeight; // reflow
          el.style.animation = '';
        }
      });
    }, 3000);
  }

  // Optional: lightweight digital rain drops in hero (skips if reduced motion)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = $('.hero-section');
  if (!reduceMotion && hero) {
    const ensureKeyframes = () => {
      if (!$('#rain-animation-style')) {
        const style = document.createElement('style');
        style.id = 'rain-animation-style';
        style.textContent = `
          @keyframes rain-fall { to { transform: translateY(100vh); opacity: 0; } }
        `;
        document.head.appendChild(style);
      }
    };
    ensureKeyframes();

    const spawnDrop = () => {
      const drop = document.createElement('div');
      drop.style.cssText = `
        position:absolute; top:-20px; left:${Math.random() * 100}%;
        width:2px; height:22px;
        background: linear-gradient(to bottom, #00ffff, transparent);
        animation: rain-fall ${2 + Math.random()*3}s linear forwards;
        pointer-events:none; z-index:1;
      `;
      hero.appendChild(drop);
      setTimeout(() => drop.remove(), 5000);
    };

    const interval = setInterval(spawnDrop, 500);
    window.addEventListener('visibilitychange', () => {
      if (document.hidden) clearInterval(interval);
    }, { once: true });
  }
})();
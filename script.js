// Year stamp
document.getElementById('y').textContent = new Date().getFullYear();

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#primary-nav-list');

navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
  navList.classList.toggle('is-open');
});

// Close mobile menu when a link is clicked
navList.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navList.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Basic active link indication on scroll
const sections = [...document.querySelectorAll('section')];
const navLinks = [...document.querySelectorAll('nav a')];
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: .01 });
sections.forEach(s => io.observe(s));

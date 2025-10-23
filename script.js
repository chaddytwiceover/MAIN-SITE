// Year stamp
document.getElementById('y').textContent = new Date().getFullYear();

// Mobile menu functionality
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  mobileNav.classList.toggle('active');
  
  // Change icon based on state
  const icon = menuToggle.querySelector('i');
  icon.className = isExpanded ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('i').className = 'fa-solid fa-bars';
  });
});

// Enhanced active link indication on scroll
const sections = [...document.querySelectorAll('section')];
const navLinks = [...document.querySelectorAll('nav a')];
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0.1 });
sections.forEach(s => io.observe(s));

// Modern fade-in animations on scroll (respecting motion preferences)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const fadeElements = [...document.querySelectorAll('section, .about .bio, .sub-link')];
  
  // Add fade-in class to elements
  fadeElements.forEach((el, index) => {
    el.classList.add('fade-in');
    if (index > 0) {
      el.classList.add(`stagger-${Math.min(index, 4)}`);
    }
  });
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { 
    rootMargin: '-10% 0px -10% 0px', 
    threshold: 0.1 
  });
  
  fadeElements.forEach(el => fadeObserver.observe(el));
}

// Smooth header background on scroll
let lastScrollY = window.scrollY;
const header = document.querySelector('header.topbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 100) {
    header.style.background = 'rgba(26, 26, 39, 0.95)';
    header.style.backdropFilter = 'blur(32px) saturate(180%)';
  } else {
    header.style.background = 'rgba(26, 26, 39, 0.6)';
    header.style.backdropFilter = 'blur(24px) saturate(180%)';
  }
  
  lastScrollY = currentScrollY;
}, { passive: true });
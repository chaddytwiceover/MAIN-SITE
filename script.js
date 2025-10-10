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
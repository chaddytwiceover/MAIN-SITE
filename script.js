// Year stamp
document.getElementById('y').textContent = new Date().getFullYear();

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

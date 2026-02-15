// Year stamp
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Theme toggle with persistence
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'y2k') {
    document.body.setAttribute('data-theme', 'y2k');
}

if (themeToggle) {
    const updateToggleLabel = () => {
        const isY2k = document.body.getAttribute('data-theme') === 'y2k';
        themeToggle.textContent = isY2k ? 'MIN' : 'Y2K';
        themeToggle.setAttribute('aria-label', isY2k ? 'Switch to minimalist theme' : 'Switch to early 2000s theme');
    };

    updateToggleLabel();

    themeToggle.addEventListener('click', () => {
        const isY2k = document.body.getAttribute('data-theme') === 'y2k';

        if (isY2k) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'minimal');
        } else {
            document.body.setAttribute('data-theme', 'y2k');
            localStorage.setItem('theme', 'y2k');
        }

        updateToggleLabel();
    });
}

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.nav-links');

if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .section-content h2, .section-content p').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(el);
});


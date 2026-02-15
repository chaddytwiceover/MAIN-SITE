// Year stamp
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

function safeStorageGet(key) {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

function safeStorageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch {
        return;
    }
}

// Theme toggle with persistence
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = safeStorageGet('theme');

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
            safeStorageSet('theme', 'minimal');
        } else {
            document.body.setAttribute('data-theme', 'y2k');
            safeStorageSet('theme', 'y2k');
        }

        updateToggleLabel();
        syncScrollAnimationMode();
    });
}

// Mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('nav-links');

if (menuToggle && mobileNav) {
    const toggleMenu = (forceClose = false) => {
        const isOpen = mobileNav.classList.contains('active');
        const shouldClose = forceClose || isOpen;

        mobileNav.classList.toggle('active', !shouldClose);
        menuToggle.classList.toggle('active', !shouldClose);
        menuToggle.setAttribute('aria-expanded', String(!shouldClose));
        menuToggle.setAttribute('aria-label', shouldClose ? 'Open menu' : 'Close menu');
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
    });

    // Close menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            toggleMenu(true);
            menuToggle.focus();
        }
    });
}

// Smooth scroll
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (!href || href === '#') {
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            history.pushState(null, '', href);
            target.scrollIntoView({
                behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
                block: 'start'
            });

            if (target.id) {
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
                target.addEventListener('blur', () => {
                    target.removeAttribute('tabindex');
                }, { once: true });
            }
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

const scrollAnimatedElements = document.querySelectorAll('.project-card, .section-content h2, .section-content p');

function syncScrollAnimationMode() {
    const isY2k = document.body.getAttribute('data-theme') === 'y2k';

    scrollAnimatedElements.forEach((el, index) => {
        if (isY2k) {
            observer.unobserve(el);
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.transition = 'none';
            el.style.transitionDelay = '0s';
            return;
        }

        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });
}

syncScrollAnimationMode();


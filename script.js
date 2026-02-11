// Year stamp
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.nav-links');

if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// Smooth scroll for navigation links
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

// Intersection Observer for fade-in animations
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

// Observe elements for animation
const animatedElements = document.querySelectorAll('.project-card, .hero-content, .section-content h2, .section-content p');
animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    // Stagger delay
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Navbar scroll effect (Glassmorphism enhancement)
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        nav.style.background = 'rgba(10, 0, 20, 0.9)';
        nav.style.boxShadow = '0 4px 30px rgba(0, 255, 255, 0.2)';
    } else {
        nav.style.background = 'rgba(10, 0, 20, 0.7)';
        nav.style.boxShadow = '0 4px 30px rgba(0, 255, 255, 0.1)';
    }
});

// Add cursor glow effect
const cursor = document.createElement('div');
cursor.className = 'cursor-glow';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 255, 255, 0.4), transparent);
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    display: none;
`;

// Only add cursor glow on non-touch devices
if (!('ontouchstart' in window)) {
    document.body.appendChild(cursor);
    cursor.style.display = 'block';
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
}

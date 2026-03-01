// ===== YEAR STAMP =====
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ===== STORAGE HELPERS =====
function safeStorageGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
}

function safeStorageSet(key, value) {
    try { localStorage.setItem(key, value); } catch { /* noop */ }
}

// ===== PROJECT DATA =====
const projects = [
    {
        id: 'the-lab',
        title: 'The Lab',
        category: 'experiment',
        description: 'My sandbox for interaction experiments and front-end concept testing.',
        focus: 'UI experiments + front-end practice',
        stack: 'HTML, CSS, JavaScript, SVG',
        status: 'Active learning project',
        url: 'https://lab.chaddytwiceover.com',
        svgBg: '#0a0a1e',
        svgStroke: '#00f5ff',
        svgLabel: 'THE LAB'
    },
    {
        id: 'social-hub',
        title: 'Social Hub',
        category: 'web',
        description: 'A personal hub for organizing links and improving navigation flow.',
        focus: 'Navigation patterns + usability',
        stack: 'HTML, CSS, JavaScript, SVG',
        status: 'Ongoing iteration',
        url: 'https://social.chaddytwiceover.com',
        svgBg: '#1a0820',
        svgStroke: '#ff2d78',
        svgLabel: 'SOCIAL HUB'
    },
    {
        id: 'main-site',
        title: 'This Site',
        category: 'web',
        description: 'The portfolio itself — iterating on design systems, accessibility, and responsive layouts.',
        focus: 'Design systems + accessibility',
        stack: 'HTML, CSS, JavaScript',
        status: 'Continuously improved',
        url: '#',
        svgBg: '#0a1408',
        svgStroke: '#ffe600',
        svgLabel: 'MAIN SITE'
    }
];

// ===== BUILD PROJECT CARD HTML =====
function buildCardHTML(project) {
    const isExternal = project.url !== '#';
    const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
    const srNote = isExternal ? '<span class="sr-only">(opens in new tab)</span>' : '';

    return `
        <a href="${project.url}" class="project-card" data-category="${project.category}"${target}>
            <div class="project-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"
                    role="img" aria-label="${project.title}" focusable="false">
                    <rect width="640" height="400" fill="${project.svgBg}" />
                    <rect x="60" y="60" width="520" height="280" fill="none"
                        stroke="${project.svgStroke}" stroke-width="2" opacity="0.4" />
                    <rect x="80" y="80" width="480" height="240" fill="none"
                        stroke="${project.svgStroke}" stroke-width="1" opacity="0.2" />
                    <text x="320" y="215" fill="#ffffff" font-family="Consolas, monospace"
                        font-size="30" font-weight="bold" text-anchor="middle"
                        letter-spacing="4">${project.svgLabel}</text>
                </svg>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p class="project-outcome">${project.description}</p>
                <p class="project-meta">Focus: ${project.focus}</p>
                <p class="project-meta">Stack: ${project.stack}</p>
                <p class="project-stat">// ${project.status}</p>
                ${srNote}
            </div>
        </a>
    `.trim();
}

// ===== RENDER PROJECTS (projects.html) =====
const projectGrid = document.getElementById('project-grid');
if (projectGrid) {
    function renderProjects(filter) {
        const filtered = filter === 'all'
            ? projects
            : projects.filter(p => p.category === filter);

        projectGrid.innerHTML = filtered.map(buildCardHTML).join('');
        initCardTilt(projectGrid);
    }

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.removeAttribute('aria-pressed');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            renderProjects(btn.dataset.filter);
        });
    });

    // Set initial aria-pressed state
    const defaultBtn = document.querySelector('.filter-btn.active');
    if (defaultBtn) {
        defaultBtn.setAttribute('aria-pressed', 'true');
    }

    renderProjects('all');
}

// ===== RENDER FEATURED PROJECTS (index.html) =====
const featuredGrid = document.getElementById('featured-grid');
if (featuredGrid) {
    featuredGrid.innerHTML = projects.slice(0, 2).map(buildCardHTML).join('');
    initCardTilt(featuredGrid);
}

// ===== CARD TILT MICRO-INTERACTION =====
function initCardTilt(container) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    container.querySelectorAll('.project-card').forEach(card => {
        let rafId = null;

        card.addEventListener('mousemove', (e) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                rafId = null;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform =
                    `perspective(1000px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
            });
        });

        card.addEventListener('mouseleave', () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            card.style.transform =
                'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
}

// ===== NEON TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');

// Apply saved preference on load
if (safeStorageGet('neon') === 'off') {
    document.body.setAttribute('data-neon', 'off');
}

function updateNeonToggle() {
    if (!themeToggle) return;
    const isOff = document.body.getAttribute('data-neon') === 'off';
    themeToggle.textContent = isOff ? 'NEON OFF' : 'NEON ON';
    themeToggle.setAttribute('aria-label', isOff ? 'Turn neon on' : 'Turn neon off');
}

updateNeonToggle();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isOff = document.body.getAttribute('data-neon') === 'off';
        if (isOff) {
            document.body.removeAttribute('data-neon');
            safeStorageSet('neon', 'on');
        } else {
            document.body.setAttribute('data-neon', 'off');
            safeStorageSet('neon', 'off');
        }
        updateNeonToggle();
    });
}

// ===== MOBILE MENU =====
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            toggleMenu(true);
            menuToggle.focus();
        }
    });
}

// ===== SMOOTH SCROLL =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
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

// ===== SCROLL FADE-IN =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

function initFadeIn() {
    if (prefersReducedMotion.matches) return;
    document.querySelectorAll('.section-card, .skill-tag').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
        fadeObserver.observe(el);
    });
}

initFadeIn();

// ===== CONTACT FORM (mailto fallback) =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameEl = contactForm.elements['name'];
        const emailEl = contactForm.elements['email'];
        const messageEl = contactForm.elements['message'];

        const name = nameEl.value.trim();
        const email = emailEl.value.trim();
        const message = messageEl.value.trim();

        // Basic email format validation
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        const fields = [
            { el: nameEl, valid: name.length > 0, msg: 'Name is required.' },
            { el: emailEl, valid: emailOk, msg: 'A valid email is required.' },
            { el: messageEl, valid: message.length > 0, msg: 'Message is required.' }
        ];

        let hasError = false;
        fields.forEach(({ el, valid, msg }) => {
            const existingErr = el.parentElement.querySelector('.form-error');
            if (existingErr) existingErr.remove();

            if (!valid) {
                hasError = true;
                el.classList.add('invalid');
                el.setAttribute('aria-invalid', 'true');
                const err = document.createElement('span');
                err.className = 'form-error';
                err.setAttribute('role', 'alert');
                err.textContent = msg;
                el.parentElement.appendChild(err);
            } else {
                el.classList.remove('invalid');
                el.removeAttribute('aria-invalid');
            }
        });

        if (hasError) return;

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
        window.location.href = `mailto:contact@chaddytwiceover.com?subject=${subject}&body=${body}`;
    });

    // Clear validation state on input
    contactForm.querySelectorAll('input, textarea').forEach(el => {
        el.addEventListener('input', () => {
            el.classList.remove('invalid');
            el.removeAttribute('aria-invalid');
            const err = el.parentElement.querySelector('.form-error');
            if (err) err.remove();
        });
    });
}

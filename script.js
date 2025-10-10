// Cyberpunk 2077 Portfolio - JavaScript

(function() {
  'use strict';

  // Utility functions
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  // Set current year
  const yearEl = $('#current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Glitch effect on hero title
  const heroTitle = $('.hero-title');
  if (heroTitle) {
    setInterval(() => {
      if (Math.random() > 0.95) {
        heroTitle.style.animation = 'none';
        setTimeout(() => {
          heroTitle.style.animation = '';
        }, 50);
      }
    }, 3000);
  }

  // Random glitch on brand logo
  const brand = $('.brand');
  if (brand) {
    setInterval(() => {
      if (Math.random() > 0.97) {
        brand.style.animation = 'glitch 0.3s ease-in-out';
        setTimeout(() => {
          brand.style.animation = '';
        }, 300);
      }
    }, 2000);
  }

  // Mobile navigation toggle
  const navToggle = $('.nav-toggle');
  const navMain = $('.nav-main');
  const navLinks = $$('.nav-link', navMain);

  if (navToggle && navMain) {
    const openNav = () => {
      navMain.classList.add('is-open');
      navToggle.setAttribute('aria-expanded', 'true');
      // Focus first link for keyboard navigation
      const firstLink = navLinks[0];
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 50);
      }
    };

    const closeNav = () => {
      navMain.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    };

    const toggleNav = () => {
      if (navMain.classList.contains('is-open')) {
        closeNav();
      } else {
        openNav();
      }
    };

    // Toggle on button click
    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggleNav();
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', closeNav);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (navMain.classList.contains('is-open') && 
          !navMain.contains(e.target) && 
          !navToggle.contains(e.target)) {
        closeNav();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMain.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });
  }

  // Active navigation on scroll
  const sections = $$('section[id]');
  const updateActiveNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = $(`.nav-link[href="#${sectionId}"]`);
      
      if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
      }
    });
  };

  // Throttle scroll events for performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
      updateActiveNav();
    });
  }, { passive: true });

  // Initial check
  updateActiveNav();

  // Smooth scroll polyfill for older browsers
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      
      const target = $(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed nav
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });

  // Intersection Observer for fade-in animations (optional enhancement)
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe generic reveal elements (sections and interactive links)
    $$('.section, .contact-link, .about-content-center, .hero-content').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 500ms var(--ease-cyber), transform 500ms var(--ease-cyber)';
      observer.observe(el);
    });
  }

  // Handle nav bar on scroll (neon glow effect)
  const navBar = $('.nav-bar');
  if (navBar) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 10) {
        navBar.style.boxShadow = '0 0 30px rgba(252, 238, 10, 0.5), 0 5px 20px rgba(0, 0, 0, 0.3)';
      } else {
        navBar.style.boxShadow = '0 0 20px rgba(252, 238, 10, 0.3)';
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // Cyberpunk cursor trail effect (subtle)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Create subtle glow on interactive elements
    $$('a, button').forEach(el => {
      el.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.87, 0, 0.13, 1)';
      });
    });
  }

})();

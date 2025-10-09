// Sleek Minimalist Portfolio - JavaScript

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

    // Observe project cards and other elements
    $$('.project-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 400ms cubic-bezier(.2,.8,.2,1), transform 400ms cubic-bezier(.2,.8,.2,1)';
      observer.observe(card);
    });
  }

  // Handle nav bar on scroll (translucent effect)
  const navBar = $('.nav-bar');
  if (navBar) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 10) {
        navBar.style.boxShadow = '0 1px 3px rgba(0,0,0,.1)';
      } else {
        navBar.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }

})();

/**
 * Main JavaScript for Ammar Yasir Portfolio
 * Handles mobile menu, theme toggle, and smooth interactions
 */

(function() {
  'use strict';

  // DOM Elements
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const themeToggle = document.getElementById('themeToggle');
  const navLinks = document.querySelectorAll('.nav__link');
  const heroNameEl = document.getElementById('hero-name');

  // Character-by-character text animation
  function initHeroAnimation() {
    if (!heroNameEl) return;

    const fullName = 'Ammar Yasir';
    const parts = fullName.split(' ');
    let html = '';
    
    parts.forEach(function(word, wordIndex) {
      const isLastWord = wordIndex === parts.length - 1;
      html += '<span class="hero-word' + (isLastWord ? ' accent' : '') + '">';
      html += word;
      html += '</span>';
      if (!isLastWord) html += ' ';
    });
    
    heroNameEl.innerHTML = html;
  }

  // Mobile Menu Toggle
  function initMobileMenu() {
    if (!menuToggle || !mainNav) return;

    menuToggle.addEventListener('click', function() {
      const isOpen = mainNav.classList.toggle('nav--open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mainNav.classList.remove('nav--open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mainNav.classList.contains('nav--open')) {
        mainNav.classList.remove('nav--open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Theme Toggle
  function initThemeToggle() {
    if (!themeToggle) return;

    // Check for saved preference or system preference
    function getPreferredTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    // Apply theme
    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }

    // Initial theme
    applyTheme(getPreferredTheme());

    // Toggle on click
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }

  // Smooth Scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Intersection Observer for scroll animations
  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe skill cards
    document.querySelectorAll('.skill-card').forEach(function(el) {
      observer.observe(el);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(function(el) {
      observer.observe(el);
    });

    // Observe stats
    document.querySelectorAll('.stat').forEach(function(el) {
      observer.observe(el);
    });

    // Observe section headers
    document.querySelectorAll('.about__header, .section-title').forEach(function(el) {
      el.classList.add('section-reveal');
      observer.observe(el);
    });
  }

  // Initialize all modules
  function init() {
    initHeroAnimation();
    initMobileMenu();
    initThemeToggle();
    initSmoothScroll();
    initScrollAnimations();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

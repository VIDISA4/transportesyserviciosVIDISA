/* =================================================================
   VIDISA TRANSPORTES Y SERVICIOS — Main JavaScript
   ================================================================= */

(function () {
  'use strict';

  // ===================== STICKY HEADER =====================
  const header = document.getElementById('header');
  let lastScroll = 0;

  function handleHeaderScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    lastScroll = currentScroll;
  }

  // ===================== MOBILE NAV =====================
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  function toggleNav() {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeNav() {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleNav);
  }

  // Close mobile nav when clicking a link
  document.querySelectorAll('.nav-link, .header__nav .btn--whatsapp').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  // Close mobile nav with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      closeNav();
    }
  });

  // ===================== SCROLL REVEAL =====================
  const revealElements = document.querySelectorAll(
    '.section-title, .lead-paragraph, .generation, .service-card, .value, .port, .contact-card, .mission-quote'
  );

  // Add reveal class to all
  revealElements.forEach((el) => el.classList.add('reveal'));

  // Intersection Observer
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Stagger reveal slightly for grouped elements
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, index * 50);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: just show everything
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // ===================== SMOOTH SCROLL OFFSET =====================
  // Adjust anchor scroll for fixed header
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const headerHeight = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });

  // ===================== DYNAMIC YEAR =====================
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===================== INIT =====================
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();
})();

// ========== DOM READY ==========
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initHamburger();
  initRevealAnimations();
  initPricingToggle();
  initFaqAccordion();
  initCounterAnimation();
  initSmoothScroll();
  initScrollProgress();
  initActiveNav();
  initPageTransitions();
  initHeroParallax();
  initCardTilt();
  initScrollParallax();
  initTestimonialCarousel();
  initForm();
});

// ========== THEME TOGGLE ==========
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const STORAGE_KEY = 'nova-theme';

  // Get saved theme or system preference
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  // Apply theme
  function setTheme(theme) {
    if (theme === 'light') {
      html.classList.add('light');
    } else {
      html.classList.remove('light');
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Apply initial theme
  setTheme(getPreferredTheme());

  // Toggle on click
  toggle.addEventListener('click', () => {
    const isLight = html.classList.contains('light');
    setTheme(isLight ? 'dark' : 'light');

    // Add a little rotation feedback
    toggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      toggle.style.transform = '';
    }, 300);
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'light' : 'dark');
    }
  });
}

// ========== NAVBAR SCROLL EFFECT ==========
function initNavbar() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ========== MOBILE HAMBURGER ==========
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ========== SCROLL REVEAL ANIMATIONS ==========
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add staggered delay for grid children
        const parent = entry.target.closest('.features-grid, .testimonials-grid, .pricing-grid');
        if (parent) {
          const children = parent.querySelectorAll('.reveal-up');
          children.forEach((child, index) => {
            if (!child.classList.contains('revealed')) {
              setTimeout(() => {
                child.classList.add('revealed');
              }, index * 100);
            }
          });
        } else {
          entry.target.classList.add('revealed');
        }

        // Unobserve after revealing
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ========== PRICING TOGGLE ==========
function initPricingToggle() {
  const toggle = document.getElementById('pricingToggle');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const yearlyLabel = document.getElementById('yearlyLabel');
  const prices = document.querySelectorAll('.price-amount');

  toggle.addEventListener('change', () => {
    const isYearly = toggle.checked;

    monthlyLabel.classList.toggle('active', !isYearly);
    yearlyLabel.classList.toggle('active', isYearly);

    prices.forEach(price => {
      const monthly = parseFloat(price.dataset.monthly);
      const yearly = parseFloat(price.dataset.yearly);
      const amount = isYearly ? yearly : monthly;

      // Animate the number change
      animateNumber(price, amount);
    });
  });

  // Set monthly as active by default
  monthlyLabel.classList.add('active');
}

function animateNumber(element, target) {
  const current = parseFloat(element.textContent);
  const duration = 300;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = current + (target - current) * eased;

    element.textContent = Math.round(value);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

// ========== FAQ ACCORDION ==========
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      items.forEach(other => {
        other.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ========== COUNTER ANIMATION ==========
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.dataset.target);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  const duration = 2000;
  const startTime = performance.now();
  const formatNumber = (num) => {
    if (Number.isInteger(num)) {
      return num.toLocaleString();
    }
    return num.toFixed(1);
  };

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    element.textContent = formatNumber(value);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = formatNumber(target);
    }
  }

  requestAnimationFrame(update);
}

// ========== SCROLL PROGRESS BAR ==========
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + '%';
  }, { passive: true });
}

// ========== ACTIVE NAV LINK ==========
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link:not(.btn-nav)');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px 0px 0px'
  });

  sections.forEach(section => observer.observe(section));
}

// ========== PAGE TRANSITIONS ==========
function initPageTransitions() {
  const overlay = document.getElementById('pageTransition');
  let isTransitioning = false;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      const isSameSection =
        window.location.hash === href ||
        (!window.location.hash && href === '#hero');

      // Only animate if navigating to a different section
      if (isSameSection || isTransitioning) return;

      e.preventDefault();
      isTransitioning = true;

      // Flash overlay
      overlay.classList.add('active');

      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });

        // Fade overlay out after a brief moment
        setTimeout(() => {
          overlay.classList.remove('active');
          isTransitioning = false;
        }, 150);
      }, 200);
    });
  });
}

// ========== SMOOTH SCROLL (fallback for same-section clicks) ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      // Only handle same-section clicks here;
      // cross-section clicks are handled by initPageTransitions
      const target = document.querySelector(href);
      if (!target) return;

      const isSameSection =
        window.location.hash === href ||
        (!window.location.hash && href === '#hero');

      if (isSameSection && !e.defaultPrevented) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ========== HERO PARALLAX ==========
function initHeroParallax() {
  const layers = document.querySelectorAll('.hero-parallax-layer');
  if (layers.length === 0) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const heroHeight = hero.offsetHeight;
    const scrollProgress = Math.min(scrollY / heroHeight, 1);

    layers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-parallax-speed')) || 0.1;
      const yOffset = scrollProgress * speed * 200;
      layer.style.transform = `translateY(${yOffset}px)`;
    });

    ticking = false;
  }

  // Run parallax on scroll using rAF for smoothness
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Run once to set initial positions
  updateParallax();
}

// ========== 3D CARD TILT ==========
function initCardTilt() {
  const cards = document.querySelectorAll('[data-tilt]');
  if (cards.length === 0) return;

  cards.forEach(card => {
    let isHovering = false;

    card.addEventListener('mouseenter', () => {
      isHovering = true;
      card.style.transition = 'transform 0.15s ease-out, box-shadow 0.15s ease-out';
    });

    card.addEventListener('mousemove', (e) => {
      if (!isHovering) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Max tilt of 8 degrees
      const maxTilt = 8;
      const rotateX = (-mouseY / (rect.height / 2)) * maxTilt;
      const rotateY = (mouseX / (rect.width / 2)) * maxTilt;

      // Shadow intensity based on tilt
      const shadowIntensity = Math.min(
        Math.abs(rotateX) + Math.abs(rotateY) / 16,
        1
      );

      card.style.transform = `
        perspective(800px)
        translateY(-4px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.02, 1.02, 1.02)
      `;
      card.style.boxShadow = `
        0 ${8 + shadowIntensity * 20}px ${20 + shadowIntensity * 30}px
        rgba(0, 0, 0, ${0.2 + shadowIntensity * 0.15})
      `;
    });

    card.addEventListener('mouseleave', () => {
      isHovering = false;
      // Clear inline styles so CSS :hover can take over naturally
      card.style.transform = '';
      card.style.boxShadow = '';
      card.style.transition = '';
    });
  });
}

// ========== SCROLL PARALLAX LAYERS ==========
function initScrollParallax() {
  const layers = document.querySelectorAll('[data-parallax-speed]');
  if (layers.length === 0) return;

  // Exclude hero shapes (they use their own parallax system)
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionLayers = section.querySelectorAll('[data-parallax-speed]');
    if (sectionLayers.length === 0) return;

    let ticking = false;

    function updateSectionParallax() {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only process if section is in or near the viewport
      if (rect.bottom < -viewportHeight || rect.top > viewportHeight * 2) {
        ticking = false;
        return;
      }

      // Calculate how far through the section we've scrolled (0 to 1)
      const sectionProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);

      sectionLayers.forEach(layer => {
        // Skip hero shapes - they have their own handler
        if (layer.classList.contains('hero-shape')) return;

        const speed = parseFloat(layer.getAttribute('data-parallax-speed')) || 0.1;
        const offset = (sectionProgress - 0.3) * speed * 300;
        layer.style.transform = `translateY(${offset}px)`;
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateSectionParallax);
        ticking = true;
      }
    }, { passive: true });

    // Run once on load
    updateSectionParallax();
  });
}

// ========== TESTIMONIAL CAROUSEL ==========
function initTestimonialCarousel() {
  const container = document.getElementById('testimonialCarousel');
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');

  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  if (totalSlides <= 1) return;

  let currentIndex = 0;
  let autoRotateInterval = null;
  const AUTO_ROTATE_DELAY = 5000;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => { goToSlide(i); resetAutoRotate(); });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.carousel-dot');

  function goToSlide(index) {
    // Wrap around
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() { goToSlide(currentIndex + 1); }
  function prevSlide() { goToSlide(currentIndex - 1); }

  // Arrow listeners
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoRotate();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoRotate();
  });

  // Auto-rotation
  function startAutoRotate() {
    stopAutoRotate();
    autoRotateInterval = setInterval(nextSlide, AUTO_ROTATE_DELAY);
  }

  function stopAutoRotate() {
    if (autoRotateInterval) {
      clearInterval(autoRotateInterval);
      autoRotateInterval = null;
    }
  }

  function resetAutoRotate() {
    startAutoRotate();
  }

  // Pause on hover
  container.addEventListener('mouseenter', stopAutoRotate);
  container.addEventListener('mouseleave', startAutoRotate);

  // Touch swipe support
  let touchStartX = 0;
  let touchStartY = 0;
  const SWIPE_THRESHOLD = 50;

  container.addEventListener('touchstart', (e) => {
    stopAutoRotate();
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    const finalX = e.changedTouches[0].clientX;
    const finalY = e.changedTouches[0].clientY;
    const deltaX = finalX - touchStartX;
    const deltaY = finalY - touchStartY;

    // Only trigger swipe if horizontal movement exceeds the threshold
    // AND is more horizontal than vertical (to avoid conflicting with page scroll)
    if (
      Math.abs(deltaX) > SWIPE_THRESHOLD &&
      Math.abs(deltaX) > Math.abs(deltaY) * 1.5
    ) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      resetAutoRotate();
    } else {
      // If no swipe detected (e.g. just a tap), resume auto-rotation
      startAutoRotate();
    }

    touchStartX = 0;
    touchStartY = 0;
  });

  // Keyboard navigation
  container.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { prevSlide(); resetAutoRotate(); }
    if (e.key === 'ArrowRight') { nextSlide(); resetAutoRotate(); }
  });

  // Start auto-rotation
  startAutoRotate();

  // Stop on visibility change (tab hidden)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoRotate();
    } else {
      startAutoRotate();
    }
  });
}

// ========== FORM HANDLING ==========
function initForm() {
  const form = document.getElementById('ctaForm');
  let formTimeout = null;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formTimeout) {
      clearTimeout(formTimeout);
      formTimeout = null;
    }

    const input = form.querySelector('input');
    const button = form.querySelector('button');
    const email = input.value.trim();

    if (!email || !isValidEmail(email)) {
      input.style.borderColor = '#ef4444';
      input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';

      formTimeout = setTimeout(() => {
        input.style.borderColor = '';
        input.style.boxShadow = '';
        formTimeout = null;
      }, 2000);
      return;
    }

    // Success state
    const originalText = button.textContent;
    button.textContent = '\u2713 Check your inbox!';
    button.style.pointerEvents = 'none';
    input.value = '';

    formTimeout = setTimeout(() => {
      button.textContent = originalText;
      button.style.pointerEvents = '';
      formTimeout = null;
    }, 3000);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

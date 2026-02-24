/* ═══════════════════════════════════════
   INVITACIÓN XV AÑOS — SCROLL EFFECTS
   Reveal animations + Vertical parallax
   ═══════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Scroll Reveal ── */
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach((el) => revealObserver.observe(el));
  }

  /* ── Vertical Parallax ── */
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length) {
    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;

      parallaxElements.forEach((el) => {
        const parent = el.parentElement;
        const rect = parent.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax) || 0.3;

        // Only animate when the section is near the viewport
        if (rect.bottom > -200 && rect.top < window.innerHeight + 200) {
          const offset = (scrollY - parent.offsetTop) * speed;
          el.style.transform = 'translate3d(0, ' + offset + 'px, 0)';
        }
      });

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });

    // Initial position
    updateParallax();
  }

  /* ── Countdown ── */
  const eventDate = new Date('April 18, 2026 17:00:00').getTime();
  const elDays = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMins = document.getElementById('cd-mins');
  const elSecs = document.getElementById('cd-secs');

  if (elDays && elHours && elMins && elSecs) {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        elDays.innerText = '00';
        elHours.innerText = '00';
        elMins.innerText = '00';
        elSecs.innerText = '00';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      elDays.innerText = days.toString().padStart(2, '0');
      elHours.innerText = hours.toString().padStart(2, '0');
      elMins.innerText = minutes.toString().padStart(2, '0');
      elSecs.innerText = seconds.toString().padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ── Background Music ── */
  const bgMusic = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');

  if (bgMusic && musicToggle) {
    bgMusic.volume = 0.5;

    let isAudioPlaying = !bgMusic.paused;
    if (isAudioPlaying) {
      musicToggle.classList.remove('paused');
    }

    const tryPlay = () => {
      bgMusic.play().then(() => {
        isAudioPlaying = true;
        musicToggle.classList.remove('paused');
        removeInteractionListeners();
      }).catch(err => {
        console.log('Autoplay blocked by browser policy:', err);
      });
    };

    const removeInteractionListeners = () => {
      window.removeEventListener('click', tryPlay);
      window.removeEventListener('scroll', tryPlay);
      window.removeEventListener('touchstart', tryPlay);
    };

    // Intentar reproducir automáticamente desde el inicio
    tryPlay();

    // Eventos de respaldo en caso de que el navegador bloquee el autoplay inicial
    window.addEventListener('click', tryPlay, { once: true });
    window.addEventListener('scroll', tryPlay, { once: true, passive: true });
    window.addEventListener('touchstart', tryPlay, { once: true, passive: true });

    musicToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      removeInteractionListeners(); // Interacción explícita, descartar el respaldo
      if (isAudioPlaying) {
        bgMusic.pause();
        musicToggle.classList.add('paused');
      } else {
        bgMusic.play();
        musicToggle.classList.remove('paused');
      }
      isAudioPlaying = !isAudioPlaying;
    });
  }

  /* ── Image Blur Preload (Blur-Up) ── */
  const blurLoadElements = document.querySelectorAll('.blur-load');
  blurLoadElements.forEach(el => {
    // Para imágenes comunes
    if (el.tagName === 'IMG') {
      const img = new Image();
      img.src = el.src;
      img.onload = () => el.classList.add('loaded');
      img.onerror = () => el.classList.add('loaded');
      if (img.complete) el.classList.add('loaded');
    } else {
      // Para divs con background-image
      const style = window.getComputedStyle(el);
      const bgImg = style.backgroundImage;
      if (bgImg && bgImg !== 'none') {
        const urlMatch = bgImg.match(/url\(['"]?([^'"]+)['"]?\)/);
        if (urlMatch && urlMatch[1]) {
          const img = new Image();
          img.src = urlMatch[1];
          img.onload = () => el.classList.add('loaded');
          img.onerror = () => el.classList.add('loaded');
          if (img.complete) el.classList.add('loaded');
        } else {
          el.classList.add('loaded');
        }
      } else {
        el.classList.add('loaded');
      }
    }
  });

})();

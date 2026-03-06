'use strict';

// Initialize Lottie players used in Selected Projects cards.
// This is intentionally minimal and only targets elements that opt-in via data-lottie-src.
(function initLottieAvatars() {
  if (!window.lottie) return;

  const nodes = document.querySelectorAll('[data-lottie-src]');
  for (const el of nodes) {
    const path = el.getAttribute('data-lottie-src');
    if (!path) continue;

    // Avoid double-init.
    if (el.__lottiePlayer) continue;

    el.__lottiePlayer = window.lottie.loadAnimation({
      container: el,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
      },
    });

    // If a parent has the desired 80x80, the SVG may still default to 100% and overflow.
    // Force it to match the container after initial render.
    try {
      const svg = el.querySelector('svg');
      if (svg) {
        svg.setAttribute('width', '80');
        svg.setAttribute('height', '80');
        svg.style.width = '80px';
        svg.style.height = '80px';
        svg.style.display = 'block';
      }
    } catch (_) {
      // Ignore; sizing will fall back to CSS.
    }
  }
})();

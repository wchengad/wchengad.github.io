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
  }
})();

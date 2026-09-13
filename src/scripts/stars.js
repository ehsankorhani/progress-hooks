// Lightweight animated starfield drawn on a fixed canvas behind the page.
// Plain JS on purpose — this is the site's only client-side JavaScript.

const canvas = document.getElementById('stars-js');

function start() {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let stars = [];
  let raf = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.min(180, Math.floor((canvas.width * canvas.height) / 9000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      speed: Math.random() * 0.12 + 0.02,
      alpha: Math.random() * 0.7 + 0.25,
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.y -= s.speed;
      if (s.y < -2) {
        s.y = canvas.height + 2;
        s.x = Math.random() * canvas.width;
      }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  frame();

  // Stop the loop when the tab is hidden to save battery.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      frame();
    }
  });
}

start();

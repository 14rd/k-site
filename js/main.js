// Scroll reveal via IntersectionObserver
(function () {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    document.querySelectorAll('[data-reveal]').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
      setTimeout(() => el.classList.add('revealed'), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();

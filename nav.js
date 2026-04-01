// Nav scroll shadow
window.addEventListener('scroll', () => {
  document.getElementById('main-nav').style.boxShadow =
    window.scrollY > 40 ? '0 2px 20px rgba(44,31,20,0.07)' : 'none';
});

// Mobile menu
(function() {
  const btn = document.getElementById('navMobileBtn');
  const menu = document.getElementById('navMobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('open');
    menu.classList.remove('open');
  }));
  document.addEventListener('click', e => {
    if (!e.target.closest('nav')) {
      btn.classList.remove('open');
      menu.classList.remove('open');
    }
  });
})();

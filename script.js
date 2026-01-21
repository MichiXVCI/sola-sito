// aggiorna anno footer
document.getElementById("year").textContent = new Date().getFullYear();

// tema scuro
document.getElementById("darkToggle").addEventListener("change", e => {
  document.body.classList.toggle("dark-mode", e.target.checked);
});
function checkPassword() {
  const correctPassword = "Sola123"; // CAMBIALA QUI
  const input = document.getElementById("sitePassword").value;

  if (input === correctPassword) {
    document.getElementById("login-screen").style.display = "none";
  } else {
    document.getElementById("errorMsg").textContent = "Password errata";
  }
}

// mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navEl = document.querySelector('nav');
if (menuToggle && navEl) {
  menuToggle.addEventListener('click', () => {
    const open = navEl.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });

  // close menu after clicking a link (mobile)
  navEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navEl.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
    });
  });
}

// Lightbox: apri immagine al click
const lightbox = document.getElementById('lightbox');
function openLightbox(src, alt) {
  lightbox.innerHTML = '';
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || '';
  lightbox.appendChild(img);
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = '';
}
document.addEventListener('click', (e) => {
  if (e.target.matches('.photo-box img, .chi-gallery img, .testimonial-image img, .events-image img, .hero-photo-small img')) {
    openLightbox(e.target.src, e.target.alt);
  }
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// Cookie banner
const cookieBanner = document.getElementById('cookieBanner');
const acceptBtn = document.getElementById('acceptCookies');
if (cookieBanner && acceptBtn) {
  const consent = localStorage.getItem('cookie_consent');
  if (!consent) cookieBanner.setAttribute('aria-hidden', 'false');
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookie_consent', '1');
    cookieBanner.setAttribute('aria-hidden', 'true');
  });
}

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
    // mostra il banner cookie dopo login (se non ancora deciso)
    if (typeof updateCookieUI === 'function') updateCookieUI();
  } else {
    document.getElementById("errorMsg").textContent = "Password errata";
  }
}

// allow Enter key to submit password
const pwdInput = document.getElementById('sitePassword');
if (pwdInput) {
  pwdInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      checkPassword();
    }
  });
}

// Cookie consent popup behavior (robust init)
let cookieEl = document.getElementById('cookie-consent');
let cookieAccept = document.getElementById('cookieAccept');
let cookieDecline = document.getElementById('cookieDecline');

function showCookieBanner() {
  if (!cookieEl) return;
  cookieEl.style.display = 'flex';
  requestAnimationFrame(() => cookieEl.classList.add('visible'));
}

function hideCookieBanner() {
  if (!cookieEl) return;
  cookieEl.classList.remove('visible');
  setTimeout(() => { if (cookieEl) cookieEl.style.display = 'none'; }, 420);
}

function updateCookieUI() {
  if (!cookieEl) return;
  const accepted = localStorage.getItem('cookieConsent');
  if (accepted === 'accepted') {
    hideCookieBanner();
  } else {
    showCookieBanner();
  }
}

function initCookieElements() {
  cookieEl = document.getElementById('cookie-consent');
  cookieAccept = document.getElementById('cookieAccept');
  cookieDecline = document.getElementById('cookieDecline');
  if (!cookieEl) return;
  // ensure hidden initially
  cookieEl.style.display = 'none';
  if (cookieAccept) cookieAccept.addEventListener('click', () => { localStorage.setItem('cookieConsent','accepted'); hideCookieBanner(); });
  if (cookieDecline) cookieDecline.addEventListener('click', () => { localStorage.setItem('cookieConsent','declined'); /* keep banner until accepted */ });
}

// initialize immediately if possible, otherwise on DOMContentLoaded
if (!cookieEl || !cookieAccept || !cookieDecline) {
  document.addEventListener('DOMContentLoaded', () => { initCookieElements(); /* don't auto-show; show after login via updateCookieUI() */ });
} else {
  initCookieElements();
}

// expose updateCookieUI globally so checkPassword can call it reliably
window.updateCookieUI = updateCookieUI;

// If page loads and login-screen is already hidden, show banner accordingly
document.addEventListener('DOMContentLoaded', () => {
  const loginEl = document.getElementById('login-screen');
  const computedHidden = loginEl ? getComputedStyle(loginEl).display === 'none' : true;
  if (computedHidden) updateCookieUI();
});


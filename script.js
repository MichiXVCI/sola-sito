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

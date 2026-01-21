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

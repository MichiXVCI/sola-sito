// aggiorna anno footer
document.getElementById("year").textContent = new Date().getFullYear();

// tema scuro
document.getElementById("darkToggle").addEventListener("change", e => {
  document.body.classList.toggle("dark-mode", e.target.checked);
});

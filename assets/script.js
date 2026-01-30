
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('inscription-form');
  const confirmationMessage = document.getElementById('confirmation-message');


  if (!form || !confirmationMessage) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    confirmationMessage.style.display = 'block';

    form.reset();
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".nav-burger");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (!burger || !navLinks) return;

  // Ouvrir / fermer avec le burger
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("open");
  });

  // Fermer le menu quand on clique sur un lien
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("open");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const title = "TechWave 2026 – Festival de l’Innovation Numérique";
  const locationStr = "Paris Expo – Porte de Versailles";
  const details = "Rejoignez-nous pour 3 jours d’innovations, d’ateliers et de conférences.";
  const startDate = "20260612";      
  const endDateExclusive = "20260615";

  const gcBase = "https://www.google.com/calendar/render?action=TEMPLATE";
  const gcParams = new URLSearchParams({
    text: title,
    dates: `${startDate}/${endDateExclusive}`,
    details,
    location: locationStr
  });

  const gcLink = document.getElementById("gc-link");
  if (gcLink) {
    gcLink.href = `${gcBase}&${gcParams.toString()}`;
  }
});


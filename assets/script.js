
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

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});




document.addEventListener("DOMContentLoaded", () => {
  // Paramètres de l'événement (faciles à adapter)
  const title = "TechWave 2026 – Festival de l’Innovation Numérique";
  const locationStr = "Paris Expo – Porte de Versailles";
  const details = "Rejoignez-nous pour 3 jours d’innovations, d’ateliers et de conférences.";

  // Événement sur 3 jours en "journées entières" : 12 → 14 juin 2026
  // Fin EXCLUSIVE = 15/06 pour couvrir 12, 13 et 14.
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


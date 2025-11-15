/* ==========================================================
   SCRIPT PRINCIPAL - Portafolio de Yan Carlos Prieto
   Loader visible al entrar en cada página + animaciones
========================================================== */

// ======== PANTALLA DE CARGA ==========
/*window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }, 2000); // tiempo visible del loader
});*/

// ======== ANIMACIONES DE ENTRADA EN SCROLL ==========
const animatedElements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  animatedElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ======== POPUP DE CONTACTO ==========
const btn = document.getElementById('btnContctame');
const popup = document.getElementById('popup-contacto');
const closeBtn = document.getElementById('close-popup');

if (btn && popup) {
  btn.onclick = function(e) {
    e.preventDefault();
    popup.style.display = 'flex';
  };
}

if (closeBtn && popup) {
  closeBtn.onclick = function() {
    popup.style.display = 'none';
  };
}



/* ===========================
   SCRIPT PRINCIPAL - UCOMPENSAR
   =========================== */

/* --- MENÚ RESPONSIVO --- */
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("activo");
      menuToggle.classList.toggle("abierto");
    });
  }
});

/* --- EFECTO DE DESPLAZAMIENTO SUAVE --- */
const enlaces = document.querySelectorAll('a[href^="#"]');
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* --- VALIDACIÓN SIMPLE DE FORMULARIO --- */
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.querySelector('input[name="nombre"]');
    const correo = form.querySelector('input[name="correo"]');
    const mensaje = form.querySelector('textarea[name="mensaje"]');

    if (!nombre.value || !correo.value || !mensaje.value) {
      alert("Por favor, completa todos los campos antes de enviar.");
    } else {
      alert("¡Gracias! Tu información ha sido enviada correctamente.");
      form.reset();
    }
  });
}
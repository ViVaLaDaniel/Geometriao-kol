// Активируем параллакс-эффект на элементе с классом .parallax-bg
document.addEventListener("DOMContentLoaded", function () {
  jarallax(document.querySelectorAll('.parallax-bg'), {
      speed: 0.5 // Скорость параллакса (настраивается)
  });
});
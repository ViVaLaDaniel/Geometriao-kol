// Активируем параллакс-эффект на элементе с классом .parallax-bg
document.addEventListener("DOMContentLoaded", function () {
  jarallax(document.querySelectorAll('.parallax-bg'), {
      speed: 0.5 // Скорость параллакса (настраивается)
  });
});

const waveEffect = document.getElementById('waveEffect');
const button = document.getElementById('callButton');

setInterval(() => {
  // Добавляем класс для анимации волн
  waveEffect.classList.add('trigger-waves');

  // Удаляем класс после завершения анимации
  setTimeout(() => {
    waveEffect.classList.remove('trigger-waves');
  }, 600); // Время должно совпадать с длительностью анимации
}, 2000); // Интервал в 2 секунды
// "use strict"

window.addEventListener("load", windowLoad);

function windowLoad() {
  // // Функция инициализации
  function digitsCountersInit(digitsCountersItems) {
    let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
    if (digitsCounters) {
      digitsCounters.forEach(digitsCounter => {
        digitsCountersAnimate(digitsCounter);
      });
    }
  }
  // Функция анимации
  function digitsCountersAnimate(digitsCounter) {
    let startTimestamp = null;
    const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1100;
    const startValue = parseInt(digitsCounter.innerHTML);
    const startPosition = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    // Пуск при загрузки страницы
    // digitsCountersInit();
  }

  // Пуск при скроли
  let options = {
    threshold: 0.3
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
        if (digitsCountersItems.length) {
          digitsCountersInit(digitsCountersItems);
        }
        // остановка цифр
        observer.unobserve(targetElement);
      }
    });
  }, options);

  let sections = document.querySelectorAll('.detail-numb__item');
  if (sections.length) {
    sections.forEach(sections => {
      observer.observe(sections);
    });
  }
}


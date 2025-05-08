const countdown = document.getElementById("countdown");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const subscribeBtn = document.getElementById("subscribeBtn");
const messageEl = document.getElementById("message");

// Встановіть дату події (наприклад, через 1 хвилину від зараз)
const eventDate = new Date(new Date().getTime() + 60 * 1000);

let interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    clearInterval(interval);
    daysEl.textContent = "0";
    hoursEl.textContent = "0";
    minutesEl.textContent = "0";
    secondsEl.textContent = "0";

    subscribeBtn.remove();
    messageEl.style.color = "red";
    messageEl.textContent = "Реєстрацію завершено. Ви не встигли.";
    return;
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

subscribeBtn.addEventListener("click", () => {
  const now = new Date();
  const diff = Math.max(0, Math.floor((eventDate - now) / 1000)); // у секундах

  subscribeBtn.disabled = true;
  messageEl.textContent = `Дякуємо за підписку! Ви встигли! До завершення підписки залишалося ${diff}с.`;
});

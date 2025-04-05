// script.js

// Set the target date
const targetDate = new Date("2026-04-10T00:00:00").getTime();

// Update countdown every second
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "The conference has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  countdown.innerHTML = `${days} Days Left`;
}

// Initial call
updateCountdown();

// Optional: update every day
setInterval(updateCountdown, 86400000); // 1 day in milliseconds
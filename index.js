const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formatted = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEl.textContent = formatted;
}

function startTimer() {
  interval = setInterval(() => {}, 1000);
}

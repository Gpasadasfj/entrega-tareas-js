const showTimer = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

let h = 0o0;
let m = 0o0;
let s = 0o0;
let timer;

function addTime() {
  s += 1;
  if (s === 60) {
    s = 0;
    m += 1;
    if (m === 60) {
      m = 0;
      h += 1;
    }
  }
  showTimer.textContent = `${formatNum(h)}:${formatNum(m)}:${formatNum(s)}`;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(addTime, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  h = 0;
  m = 0;
  s = 0;
  showTimer.textContent = `${formatNum(h)}:${formatNum(m)}:${formatNum(s)}`;
}

function formatNum(num) {
  return num.toString().padStart(2, "0");
}

start.addEventListener("click", () => startTimer());
pause.addEventListener("click", () => pauseTimer());
reset.addEventListener("click", () => resetTimer());

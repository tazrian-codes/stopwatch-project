// DOM elements
const minsDiv = document.getElementById("mins");
const secsDiv = document.getElementById("secs");
const msecsDiv = document.getElementById("milliSecs");
const startEndBtn = document.querySelector(".start-and-end-btn");
const resetBtn = document.querySelector(".reset-btn");

let timerID = null;
let mins = 0;
let secs = 0;
let msecs = 0;

startEndBtn.addEventListener("click", () => {
  if (timerID !== null) {
    clearInterval(timerID);
    timerID = null;
    startEndBtn.textContent = "Start";
    startEndBtn.classList.remove("stop-btn");
  } else {
    timerID = setInterval(timerStart, 10);
    startEndBtn.textContent = "Stop";
    startEndBtn.classList.add("stop-btn");
  }
});

resetBtn.addEventListener("click", () => {
  mins = 0;
  secs = 0;
  msecs = 0;
  minsDiv.textContent = '00';
  secsDiv.textContent = '00';
  msecsDiv.textContent = '00';
  startEndBtn.classList.remove('stop-btn');
  startEndBtn.textContent = 'Start';
  clearInterval(timerID);
  timerID = null;
})

const timerStart = () => {
  msecs++;
  if (msecs === 100) {
    msecs = 0;
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
  }
  mins < 10 ? (minsDiv.textContent = `0${mins}`) : (minsDiv.textContent = mins);
  secs < 10 ? (secsDiv.textContent = `0${secs}`) : (secsDiv.textContent = secs);
  msecs < 10
    ? (msecsDiv.textContent = `0${msecs}`)
    : (msecsDiv.textContent = msecs);
};

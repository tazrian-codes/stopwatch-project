// DOM elements
const timerClock = document.getElementById('timerClock');
const toggleBtn =  document.getElementById('toggleBtn');
const resetBtn = document.getElementById('resetBtn');

// variable for setInterval
let timer = null;

// variable for toggleBtn
let isRunning = false;

let [hours, minutes, seconds] = [0, 0, 0];


const stopWatch = () => {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  timerClock.innerHTML = h + ':' + m + ':' + s;
};

const startWatch = () => {
  if (!isRunning) {
    timer = setInterval(stopWatch, 1000);
    toggleBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    isRunning = true;
  }
  else{
    clearInterval(timer);
    toggleBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    isRunning = false;
  }
  
};

const resetWatch = () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  toggleBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
  timerClock.innerHTML = '00:00:00';
  isRunning = false;
};

'use strict';
const btnStart = document.querySelector('.js-start');
const btnReset = document.querySelector('.js-reset');
const timerFace = document.querySelector('.js-time');
const laps = document.querySelector('.js-take-lap');
const lap = document.querySelector('.js-laps');

class StopWatch {
  constructor() {
    this.deltaTime = 0;
    this.startTime = null;
    this.currentTime = null;
    this.timerId = null;
    this.isActive = false;
  }

  lap() {
    const newLi = document.createElement('li');
    newLi.innerHTML = timerFace.textContent;
    lap.appendChild(newLi);
  }

  start() {
    this.startTime = Date.now() - this.deltaTime;

    this.timerId = setInterval(() => {
      this.currentTime = Date.now();

      this.deltaTime = Date.now() - this.startTime;

      const time = new Date(this.deltaTime);

      let min = time.getMinutes().toString();
      let sec = time.getSeconds().toString();
      let ms = Number.parseInt(time.getMilliseconds() / 100);

      if (min.length < 2) {
        min = '0' + min;
      }

      if (sec.length < 2) {
        sec = '0' + sec;
      }

      timerFace.textContent = `${min}:${sec}.${ms}`;

      btnStart.textContent = 'Pause';
    }, 100);

    this.isActive = true;
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = null;

    this.isActive = false;
    btnStart.textContent = 'Continue';
  }

  reset() {
    lap.innerHTML = '';
    timerFace.textContent = `00:00.0`;
    this.deltaTime = 0;
    btnStart.textContent = 'Start';
  }
}

const newStopWatch = new StopWatch();

btnStart.addEventListener('click', () => {
  if (!newStopWatch.isActive) {
    newStopWatch.start();
  } else {
    newStopWatch.stop();
  }
});

btnReset.addEventListener('click', () => {
  if (!newStopWatch.isActive) {
    newStopWatch.reset();
  }
});

laps.addEventListener('click', () => {
  if (newStopWatch.isActive) {
    newStopWatch.lap();
  }
});

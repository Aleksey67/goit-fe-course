class StopWatch {
  constructor(parent = document) {
    this.parent = parent;
    this.parent.innerHTML = `<div class="watch-text">00:00:00:000</div>
    <div class="watch-buttons">
      <button class="watch-button watch-start">start</button>
      <button class="watch-button watch-split">split</button>
      <button class="watch-button watch-reset">reset</button>
    </div>
    <ul class="watch-list"></ul>`;
    this.btnStart = parent.querySelector(".watch-start");
    this.btnSplit = parent.querySelector(".watch-split");
    this.btnReset = parent.querySelector(".watch-reset");
    this.list = parent.querySelector(".watch-list");
    this.text = parent.querySelector(".watch-text");
    this.setIntervalId = null;
    this.from = null;
    this.to = null;
  }
  startBtnOnClick() {
    if (this.btnStart.textContent.toLowerCase() === "start") {
      this.start();
      this.btnStart.textContent = "pause";
    } else if (this.btnStart.textContent.toLowerCase() === "pause") {
      this.btnStart.textContent = "continue";
      this.pause();
    } else if (this.btnStart.textContent.toLowerCase() === "continue") {
      this.btnStart.textContent = "pause";
      this.continue();
    }
  }
  continue() {
    this.from = Date.now() - (this.to - this.from);
    this.step();
  }
  pause() {
    this.to = Date.now();
    clearInterval(this.setIntervalId);
    this.text.textContent = this.toTimeString(this.to - this.from);
  }
  start() {
    this.from = new Date();
    this.step();
  }
  step() {
    this.setIntervalId = setInterval(() => {
      this.text.textContent = this.toTimeString(Date.now() - this.from);
    }, 1000 / 60);
  }
  splitBtnOnClick() {
    if (this.btnStart.textContent.toLowerCase() === "start") {
      return;
    } else if (this.btnStart.textContent.toLowerCase() === "pause") {
      const time = this.toTimeString(Date.now() - this.from);
      this.list.insertAdjacentHTML("afterbegin", `<li>${time}</li>`);
    } else if (this.btnStart.textContent.toLowerCase() === "continue") {
      const time = this.toTimeString(this.to - this.from);
      this.list.insertAdjacentHTML("afterbegin", `<li>${time}</li>`);
    }
  }
  resetBtnOnClick() {
    clearInterval(this.setIntervalId);
    this.text.textContent = this.toTimeString(0);
    this.btnStart.textContent = "start";
    this.list.innerHTML = "";
  }
  toTimeString(timeStamp) {
    const date = new Date(timeStamp);
    const time = date.toUTCString().slice(17, -4);
    const ms =
      date.getMilliseconds() > 100
        ? date.getMilliseconds()
        : date.getMilliseconds() > 10
          ? "0" + date.getMilliseconds()
          : "00" + date.getMilliseconds();
    return `${time}:${ms}`;
  }
  run() {
    this.btnStart.addEventListener("click", this.startBtnOnClick.bind(this));
    this.btnReset.addEventListener("click", this.resetBtnOnClick.bind(this));
    this.btnSplit.addEventListener("click", this.splitBtnOnClick.bind(this));
  }
}

const stopWatch = new StopWatch(document.querySelector(".watch"));
stopWatch.run();
const stopWatch2 = new StopWatch(document.querySelector(".watch2"));
stopWatch2.run();

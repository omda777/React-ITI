let timer = null;
let running = false;
let startTime = 0;
let saved = 0;

const time = document.getElementById("time");
const ms = document.getElementById("ms");
const start = document.getElementById("start");
const clear = document.getElementById("clear");

function updateTime() {

    const current = Date.now() - startTime + saved;
    const hours = Math.floor(current / 3600000);
    const minutes = Math.floor((current % 3600000) / 60000);
    const seconds = Math.floor((current % 60000) / 1000);
    const milli = current % 1000;

    time.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    ms.textContent = String(milli).padStart(3, "0");
}

start.onclick = function () {

    if (!running) {
        startTime = Date.now();
        timer = setInterval(updateTime, 10);
        running = true;
        start.textContent = "Pause";

    } else {

        clearInterval(timer);
        saved += Date.now() - startTime;
        running = false;
        start.textContent = "Start";
    }
};

clear.onclick = function () {

    clearInterval(timer);

    running = false;
    saved = 0;
    startTime = 0;
    time.textContent = "00:00:00";
    ms.textContent = "000";
    start.textContent = "Start";
};
// script.js
let clicks = 0;
let timeLeft;
let timer;
let cps = 0;

const clickButton = document.getElementById("clickButton");
const startButton = document.getElementById("startButton");
const timeLeftDisplay = document.getElementById("timeLeft");
const clicksDisplay = document.getElementById("clicks");
const cpsDisplay = document.getElementById("cps");
const timeSelection = document.getElementById("timeSelection");

startButton.addEventListener("click", startTest);
clickButton.addEventListener("click", countClick);

function startTest() {
    clicks = 0;
    timeLeft = parseInt(timeSelection.value);
    clicksDisplay.textContent = clicks;
    timeLeftDisplay.textContent = timeLeft;
    cpsDisplay.textContent = "0.00";

    clickButton.disabled = false;
    startButton.disabled = true;

    timer = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

function countClick() {
    clicks++;
    clicksDisplay.textContent = clicks;
}

function endTest() {
    clearInterval(timer);
    cps = clicks / parseInt(timeSelection.value);
    cpsDisplay.textContent = cps.toFixed(2);
    clickButton.disabled = true;
    startButton.disabled = false;
}

const display = document.getElementById('display');

function clickToAppend(value) {
    if (display.value === "Error" && !isNaN(value)) {
        display.value = '';
    }
    display.value += value;
}

function clickToCut() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = '';
}

// Evil Sounds here

const calculatorBody = document.querySelector('.calculator');
const kiras_madness = new Audio("kiras_madness.mp3");
const soundButton = document.querySelector('.sound-btn a');

soundButton.addEventListener('click', (event) => {
    event.preventDefault();
    kiras_madness.play();
    soundButton.classList.add('disabled');
    calculatorBody.classList.add('animated-shadow');
});
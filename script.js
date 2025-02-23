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

// Evil Sounds heree

const calculatorBody = document.querySelector('.calculator');
const kiras_madness = new Audio("kiras_madness.mp3");
const soundButton = document.querySelector('.sound-btn a');

soundButton.addEventListener('click', (event) => {
    // event.preventDefault();
    alert('You are going to make a great mistake! 😈');
    kiras_madness.play();
    soundButton.classList.add('disabled');
    calculatorBody.classList.toggle('animated-evilness');
    mainEvilness();
});

function mainEvilness() {
    const e1 = document.querySelectorAll('.e1');
    const e2 = document.querySelectorAll('.e2');
    const e3 = document.querySelectorAll('.e3');
    const e4 = document.querySelectorAll('.e4');
    const e5 = document.querySelectorAll('.e5');
    const e6 = document.querySelectorAll('.e6');
    const e7 = document.querySelectorAll('.e7');
    const e8 = document.querySelectorAll('.e8');
}
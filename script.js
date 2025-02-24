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

let showAlert = true;
soundButton.addEventListener('click', (event) => {
    // event.preventDefault();
    if (showAlert) {
        alert('You are going to make a great mistake! 😈');
        showAlert = false;
    }
    kiras_madness.play();
    soundButton.classList.add('disabled');
    
    setTimeout(() => {
        calculatorBody.classList.toggle('animated-evilness');
    }, 365);
    setTimeout(() => {
        mainEvilness();
    }, 3400);
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

    e1.forEach(e => {
        e.style.animation = 'throwingButtonsE1 3s forwards';
    });
    e2.forEach(e => {
        e.style.animation = 'throwingButtonsE2 3s forwards';
    });
    e3.forEach(e => {
        e.style.animation = 'throwingButtonsE3 3s forwards';
    });
    e4.forEach(e => {
        e.style.animation = 'throwingButtonsE4 3s forwards';
    });
    e5.forEach(e => {
        e.style.animation = 'throwingButtonsE5 3s forwards';
    });
    e6.forEach(e => {
        e.style.animation = 'throwingButtonsE6 3s forwards';
    });
    e7.forEach(e => {
        e.style.animation = 'throwingButtonsE7 3s forwards';
    });
    e8.forEach(e => {
        e.style.animation = 'throwingButtonsE8 3s forwards';
    });
}

function normalize() {
    const e1 = document.querySelectorAll('.e1');
    const e2 = document.querySelectorAll('.e2');
    const e3 = document.querySelectorAll('.e3');
    const e4 = document.querySelectorAll('.e4');
    const e5 = document.querySelectorAll('.e5');
    const e6 = document.querySelectorAll('.e6');
    const e7 = document.querySelectorAll('.e7');
    const e8 = document.querySelectorAll('.e8');

    e1.forEach(e => {
        e.style.animation = 'normalizingButtonsE1 3s forwards';
    });
    e2.forEach(e => {
        e.style.animation = 'normalizingButtonsE2 3s forwards';
    });
    e3.forEach(e => {
        e.style.animation = 'normalizingButtonsE3 3s forwards';
    });
    e4.forEach(e => {
        e.style.animation = 'normalizingButtonsE4 3s forwards';
    });
    e5.forEach(e => {
        e.style.animation = 'normalizingButtonsE5 3s forwards';
    });
    e6.forEach(e => {
        e.style.animation = 'normalizingButtonsE6 3s forwards';
    });
    e7.forEach(e => {
        e.style.animation = 'normalizingButtonsE7 3s forwards';
    });
    e8.forEach(e => {
        e.style.animation = 'normalizingButtonsE8 3s forwards';
    });
}
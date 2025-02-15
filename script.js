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

const kiras_madness = new Audio("Sounds/kiras_madness.mp3");

function playEvilSound() {
    kiras_madness.play()
}
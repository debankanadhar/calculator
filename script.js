const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendSymbol(symbol) {
    display.value += symbol;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
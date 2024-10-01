let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
    if (number === '0' && display.value === '0') return;
    display.value = display.value.toString() + number.toString();
}

function chooseOperation(op) {
    if (display.value === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = display.value;
    display.value = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(display.value);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    display.value = result;
    operation = undefined;
    previousOperand = '';
}

function clearDisplay() {
    display.value = '';
    previousOperand = '';
    operation = undefined;
}

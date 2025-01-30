let currentValue = '';
let storedValue = null;
let currentOperation = null;

function appendToDisplay(value) {
    currentValue = currentValue === '0' ? value : currentValue + value;
    document.getElementById('display').value = currentValue;
}

function setOperation(op) {
    if (storedValue === null) {
        storedValue = parseFloat(currentValue);
        currentOperation = op;
        currentValue = '0';
    }
}

// function calculate() {
//     const displayValue = parseFloat(currentValue);
//     switch(currentOperation) {
//         case '+': 
//             currentValue = (storedValue + displayValue).toString();
//             break;
//         case '-': 
//             currentValue = (storedValue - displayValue).toString();
//             break;
//         case '*': 
//             currentValue = (storedValue * displayValue).toString();
//             break;
//         case '/': 
//             currentValue = (storedValue / displayValue).toString();
//             break;
//     }
//     document.getElementById('display').value = currentValue;
//     storedValue = null;
//     currentOperation = null;

// }

function calculateSqrt() {
    currentValue = Math.sqrt(parseFloat(currentValue)).toString();
    document.getElementById('display').value = currentValue;
}

function calculateSin() {
    currentValue = Math.sin(parseFloat(currentValue)).toString();
    document.getElementById('display').value = currentValue;
}

function calculateCos() {
    currentValue = Math.cos(parseFloat(currentValue)).toString();
    document.getElementById('display').value = currentValue;
}

function clearDisplay() {
    currentValue = '0';
    storedValue = null;
    currentOperation = null;
    document.getElementById('display').value = currentValue;
}
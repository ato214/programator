const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const {
        displayValue,
        waitingForSecondOperand
    } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
};

function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) return;

    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        // Append the decimal point
        calculator.displayValue += dot;
    }
};

function handleOperator(nextOperator) {
    const {
        firstOperand,
        displayValue,
        operator
    } = calculator
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
};

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    'modulo': (firstOperand, secondOperand) => firstOperand % secondOperand,

    '=': (firstOperand, secondOperand) => secondOperand,

};

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
};

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
};

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const {
        target
    } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});


const keyboard = window.addEventListener('keypress', (e) => {
    console.log(e.key);
    if (e.key >= 0 && e.key <= 9) {
        inputDigit(e.key);
        updateDisplay();
        return;
    } else if (e.key == '.' || e.key == ',') {
        inputDecimal('.');
        updateDisplay();
        return;
    } else if (e.key == '%' || e.key == '*' || e.key == '/' || e.key == '-' || e.key == '+') {
        handleOperator(e.key);
        updateDisplay();
        return;
    } else if (e.key == 'Enter' || e.key == '=') {
        handleOperator(e.key);
        updateDisplay();
        return;
    } else if (e.key == 'Backspace' || e.key == 'Delete') {
        resetCalculator();
        updateDisplay();
        return;
    }
});

// The events above were easier to describe in 'onkeypress. Then, at one time, I can use all the keys of the same character from the keyboard. For 'all-clear' I have used the 'Delete' and 'Backspace' keys - they didn't want to work on event.key - that's why I have used 'onkeydown' below. 

const keyboardReset = window.addEventListener('keydown', (e) => {
    var x = event.which || event.keyCode; // to zalecane z uwag na Firefox
    if (e.keyCode == 8 || e.keyCode == 46) {
        resetCalculator();
        updateDisplay();
        return;
    }
});

updateDisplay();
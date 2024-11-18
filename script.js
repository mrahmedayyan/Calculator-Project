let displayValue = "";

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerHTML = displayValue === "" ? "0" : displayValue;
}

function appendNumber(number) {
    // Prevent multiple decimal points in a single number
    if (number === '.' && displayValue.includes('.')) return;

    // Limit the display length to 15 characters
    if (displayValue.length < 15) {
        displayValue += number;
        updateDisplay();
    }
}

function appendOperator(operator) {
    // Prevent multiple operators in a row
    if (displayValue !== "" && !isNaN(displayValue.charAt(displayValue.length - 1))) {
        displayValue += operator;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function clearLast() {
    displayValue = displayValue.slice(0, -1); // Remove the last character
    updateDisplay();
}

function toggleSign() {
    if (displayValue) {
        if (displayValue.charAt(0) === "-") {
            displayValue = displayValue.slice(1); // Remove the negative sign
        } else {
            displayValue = "-" + displayValue; // Add a negative sign
        }
        updateDisplay();
    }
}

function percent() {
    if (displayValue) {
        displayValue = (parseFloat(displayValue) / 100).toString();
        updateDisplay();
    }
}

function calculate() {
    try {
        // Use eval to calculate the result of the expression
        let result = eval(displayValue);
        
        // Handle division by zero
        if (result === Infinity || result === -Infinity) {
            throw new Error("Division by zero");
        }
        
        // Limit the result length to 15 characters
        displayValue = result.toString().slice(0, 15);
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}
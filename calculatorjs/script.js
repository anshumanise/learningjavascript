// Variable to store the current input string
let currentInput = "";

// Wait for the HTML to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button");

    // Adding Click Event Listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.innerText;

            if (value === "AC") {
                clearDisplay();
            } else if (value === "DEL") {
                deleteLast();
            } else if (value === "=") {
                calculateResult();
            } else if (["+", "-", "*", "/", "%"].includes(value)) {
                appendOperator(value);
            } else {
                appendNumber(value);
            }
        });
    });
});

// --- Function Implementations as per Requirements ---

// 1. Append Number: Updates display with clicked number
function appendNumber(number) {
    const display = document.getElementById('display');
    
    // Prevent multiple leading zeros
    if (currentInput === "0" && number !== ".") {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    
    display.innerText = currentInput;
}

// 2. Append Operator: Handles math symbols and prevents duplicates
function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = currentInput.slice(-1);
    const operators = ["+", "-", "*", "/", "%"];
    
    // Don't start with an operator (except minus)
    if (currentInput === "" && operator !== "-") return;

    // If last char is already an operator, replace it
    if (operators.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    
    display.innerText = currentInput;
}

// 3. Clear Display: Resets the calculator
function clearDisplay() {
    currentInput = "";
    const display = document.getElementById('display');
    if (display) {
        display.innerText = "0";
    }
}

// 4. Delete Last: Removes the last character typed
function deleteLast() {
    const display = document.getElementById('display');
    currentInput = currentInput.toString().slice(0, -1);
    display.innerText = currentInput || "0";
}

// 5. Calculate Result: Evaluates the expression and handles %
function calculateResult() {
    const display = document.getElementById('display');
    try {
        if (currentInput === "") return;

        // Requirement: Replace '%' with '/100' for correct evaluation
        let expression = currentInput.replace(/%/g, '/100');
        
        // Eval performs the mathematical calculation
        let result = eval(expression);
        
        // Update display and store result for next calculation
        display.innerText = result;
        currentInput = result.toString();
    } catch (error) {
        display.innerText = "Error";
        currentInput = "";
    }
}
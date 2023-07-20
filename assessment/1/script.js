console.log("hello world");

let displayValue = 0;
let num1 = null;
let operator = null;

function updateDisplay() {
  const display = document.querySelector(".display h4");
  display.innerText = displayValue.toString();
}

function displayClick(value) {
  if (!isNaN(value) || value === ".") {
    if (displayValue === 0 || displayValue === "Invalid Input") {
      displayValue = value.toString();
    } else {
      displayValue = displayValue.toString() + value.toString();
    }
  } else if (value === "x" || value === "/" || value === "+" || value === "-") {
    if (operator !== null) {
      calculate();
    }
    num1 = parseFloat(displayValue);
    operator = value;
    displayValue = "";
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  num1 = null;
  operator = null;
  updateDisplay();
}

function calculate() {
  const num2 = parseFloat(displayValue);
  if (isNaN(num1) || isNaN(num2) || operator === null) {
    displayValue = "";
  } else {
    if (operator === "+") {
      displayValue = num1 + num2;
    } else if (operator === "-") {
      displayValue = num1 - num2;
    } else if (operator === "x") {
      displayValue = num1 * num2;
    } else if (operator === "/") {
      displayValue = num1 / num2;
    }
    operator = null;
  }
  updateDisplay();
}

console.log("javascript is loaded");

let displayValue = 0;
let operator = null;
let num1 = null;

function updateDisplay() {
  const displayDom = document.querySelector(".panel p");
  displayDom.innerText = displayValue.toString();
}

function clearDisplay() {
  displayValue = "";
  operator = null;
  num1 = null;
  updateDisplay();
}

function clickValue(value) {
  if (displayValue === 0) {
    displayValue = value.toString();
  } else {
    displayValue = displayValue.toString() + value.toString();
  }
  num1 = parseFloat(displayValue);
  updateDisplay();
}

function clickOp(op) {
  if (op !== null) {
    calculate();
  }
  operator = op;
  if (num1 === null) {
    num1 = parseFloat(displayValue);
  }
  displayValue = "";
}

function calculate() {
  const num2 = parseFloat(displayValue);
  if (operator === null) {
    displayValue = "";
  } else {
    if (operator === "+") {
      displayValue = num1 + num2;
    }
    if (operator === "-") {
      displayValue = num1 - num2;
    }
    if (operator === "*") {
      displayValue = num1 * num2;
    }
    if (operator === "/") {
      displayValue = num1 / num2;
    }
    num1 = displayValue;
    operator = null;
  }
  updateDisplay();
}

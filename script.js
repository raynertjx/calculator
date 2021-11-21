function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2 , operator) {
  return operator(num1, num2);
}

const buttons = document.querySelectorAll(".button");
const textfield = document.getElementById("textfield");
let firstValue;
let operatorFunction;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if (buttons[i].value == "del" || buttons[i].value == "clear" || buttons[i].value == "=") {
      return;
    }
    textfield.value += buttons[i].value;
    if (buttons[i].value == "+" || buttons[i].value == "-" || buttons[i].value == "*" || buttons[i].value == "÷") {
      firstValue = textfield.value;
      firstValue = firstValue.slice(0, -1);
      operatorFunction = buttons[i].value;
  })  
}


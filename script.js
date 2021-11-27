const buttons = document.querySelectorAll(".button");
const textfield = document.getElementById("textfield");

let firstValue, secondValue, operator, indexOfOperator;
let textfieldArr = [];

calculation = { 
  add(num1, num2) {
    operator = "add";
    return Number(num1) + Number(num2);
  },
  subtract(num1, num2) {
    operator = "subtract";
    return Number(num1) - Number(num2);
  },
  multiply(num1, num2) {
    operator = "multiply";
    return Number(num1) * Number(num2);
  },
  divide(num1, num2) {
    operator = "divide";
    return Number(num1) / Number(num2);
  }
}

function operate(num1, num2 , operator) {
  if (operator === "add") {
    return calculation.add(num1, num2);
  }
  if (operator === "subtract") {
    return calculation.subtract(num1, num2);
  }
  if (operator === "multiply") {
    return calculation.multiply(num1, num2);
  }
  if (operator === "divide") {
    return calculation.divide(num1, num2);
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // do not allow these buttons to be in the calculator display
    if (buttons[i].value == "del" || buttons[i].value == "clear") {
      return;
    }

    // update calculator display with values
    textfield.value += buttons[i].value;
    textfieldArr.push(buttons[i].value);
    console.log(textfieldArr);
    if ((buttons[i].value == "+" || buttons[i].value == "-" || buttons[i].value == "*" || buttons[i].value == "÷") && (!operator)) {
      if (buttons[i].value == "+") {
        operator = "add";
      }
      else if (buttons[i].value == "-") {
        operator = "subtract";
      }
      else if (buttons[i].value == "*") {
        operator = "multiply";
      }
      else if (buttons[i].value == "÷") {
        operator = "divide";
      }
      if (!firstValue) {
        firstValue = textfieldArr.join("").slice(0, -1);
        console.log(firstValue);
        textfieldArr = [];
      } 
      console.log(operator);
    }

    if ((firstValue) && (textfieldArr.includes("+") || textfieldArr.includes("-") || textfieldArr.includes("*") || textfieldArr.includes("÷"))) {
      secondValue = textfieldArr.join("").slice(0, -1);
      console.log(secondValue);
      firstValue = operate(firstValue, secondValue, operator);
      console.log(firstValue);
      if (textfieldArr.includes("+")) {
        operator = "add";
      }
      else if (textfieldArr.includes("-")) {
        operator = "subtract";
      }
      else if (textfieldArr.includes("*")) {
        operator = "multiply";
      }
      else if (textfieldArr.includes("÷")) {
        operator = "divide";
      }
      console.log(operator);
      secondValue = "";
      textfieldArr = [];
    }

    if ((firstValue) && textfieldArr.includes("=")) {
      secondValue = textfieldArr.join("").slice(0, -1);
      console.log(secondValue);
      firstValue = operate(firstValue, secondValue, operator);
      console.log(firstValue);
    }
  })
}




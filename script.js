const buttons = document.querySelectorAll(".button");
const textfield = document.getElementById("textfield");

let firstValue, secondValue, operator, indexOfOperator;
let textfieldArr = [];

calculation = { 
  add(num1, num2) {
    operator = "add";
    return num1 + num2;
  },
  subtract(num1, num2) {
    operator = "subtract";
    return num1 - num2;
  },
  multiply(num1, num2) {
    operator = "multiply";
    return num1 * num2;
  },
  divide(num1, num2) {
    operator = "divide";
    return num1 / num2;
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
    if (buttons[i].value == "+" || buttons[i].value == "-" || buttons[i].value == "*" || buttons[i].value == "÷") {
      if (!firstValue) {
        firstValue = textfieldArr.join("").slice(0, -1);
        textfieldArr = [];
        operator = buttons[i].value;
      } 
    }
    if (firstValue) {
      secondValue = textfieldArr.join("")
    }
    
    console.log(firstValue);
    console.log(secondValue);
    console.log(operator);
    console.log(textfieldArr);
  

    // storing first display value and operator input
    if (buttons[i].value == "+" || buttons[i].value == "-" || buttons[i].value == "*" || buttons[i].value == "÷") {
      firstValue = textfield.value;
      firstValue = firstValue.slice(0, -1);
      operator = buttons[i].value;
      let textfieldValue = textfield.value;
      indexOfOperator = textfieldValue.indexOf(operator);
      if (operator == "+") {
        operator = "add";
      }
      else if (operator == "-") {
        operator = "subtract";
      }
      else if (operator == "*") {
        operator = "multiply";
      }
      else if (operator == "÷") {
        operator = "divide";
      }
    }

    if (buttons[i].value == "=") {
      let textfieldValue = textfield.value;
      secondValue = textfieldValue.slice(indexOfOperator + 1, -1);
      let result = operate(firstValue, secondValue, operator)
      console.log(result);
    }
  })
}




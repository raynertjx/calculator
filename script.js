const buttons = document.querySelectorAll(".button");
const textfield = document.getElementById("maintextfield");
const historytextfield = document.getElementById("historytextfield");

let firstValue, secondValue, finalResult, operator, operatorSymbol;
let textfieldArr = [];

const container = document.getElementById("container");
const additionBtn = document.getElementById("additionbtn");
const subtractBtn = document.getElementById("subtractbtn");
const multiplyBtn = document.getElementById("multiplybtn");
const divideBtn = document.getElementById("dividebtn");
const periodBtn = document.getElementById("periodbtn");
const clearBtn = document.getElementById("clearbtn");
const activateAllButtons = document.getElementsByClassName("button");
const activateOperatorButtons = document.getElementsByClassName("button operator");

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
  buttons[i].addEventListener( "click", function() {
    
    // do not allow user to press equal before entering any numbers or operators
    if ((buttons[i].value == "=") && (!operator)) {
      return;
    }

    // prevent from spamming consecutive operator functions
    if ((buttons[i].value == "+" || buttons[i].value == "-" || buttons[i].value == "x" || buttons[i].value == "÷") && (operator) && textfieldArr == 0) {
      return;
    }    
   
    // only pushes the numbers and operators into array
    if (buttons[i].value >= 0 || buttons[i].value <= 9 || buttons[i].value == "." || buttons[i].value == "+" || buttons[i].value == "-" || buttons[i].value == "x" || buttons[i].value == "÷" || buttons[i].value == 
    "=") {
      textfieldArr.push(buttons[i].value);
    }

    // only allow 1 decimal point to be input into calculator display
    if (textfieldArr.includes(".")) {
      periodBtn.disabled = true;
    }

    // DELETE function 
    if (buttons[i].value == "DEL") {
      textfieldArr.pop();
      textfield.innerHTML = textfield.innerHTML.slice(0, -1);
    }

    // CLEAR ALL function
    if (buttons[i].value == "AC") {
      firstValue = "";
      secondValue = "";
      operator = "";
      textfield.innerHTML = "";
      historytextfield.innerHTML = "";
      textfieldArr = [];
      for (let i = 0; i < activateAllButtons.length; i++) {
        activateAllButtons[i].disabled = false;
      }
    }

    // update calculator display with values, only numbers and decimal points
      if (buttons[i].value >= 0 || buttons[i].value <= 9 || buttons[i].value == ".") {
        textfield.innerHTML += buttons[i].value;
      }


    if (textfieldArr !== undefined) {
      for (let i = 0; i < activateOperatorButtons.length ; i++) {
        activateOperatorButtons[i].disabled = false;
      }
    }
    console.log(textfieldArr);

    if ((buttons[i].value == "+" || buttons[i].value == "-" || buttons[i].value == "x" || buttons[i].value == "÷") && (!operator)) {
      if (buttons[i].value == "+") {
        operator = "add";
        operatorSymbol = "+";
      }
      else if (buttons[i].value == "-") {
        operator = "subtract";
        operatorSymbol = "-";
      }
      else if (buttons[i].value == "x") {
        operator = "multiply";
        operatorSymbol = "x";
      }
      else if (buttons[i].value == "÷") {
        operator = "divide";
        operatorSymbol = "÷";        
      }
      if (!firstValue) {
        firstValue = textfieldArr.join("").slice(0, -1);
        console.log(firstValue);
        textfieldArr = [];
        historytextfield.innerHTML = `${firstValue}` + " " + `${operatorSymbol}`;
        textfield.innerHTML = "";  
      } 
      console.log(operator);
    }

    if ((firstValue) && (textfieldArr.includes("+") || textfieldArr.includes("-") || textfieldArr.includes("x") || textfieldArr.includes("÷"))) {
      if (textfieldArr.includes("=")) {
        firstValue = finalResult;
        textfieldArr = [];
        historytextfield.innerHTML = `${firstValue}` + " " + `${operatorSymbol}`;
        textfield.innerHTML = "";
        return;
      }
      secondValue = textfieldArr.join("").slice(0, -1);
      console.log(secondValue);
      firstValue = operate(firstValue, secondValue, operator);
      
      console.log(firstValue);
      if (textfieldArr.includes("+")) {
        operator = "add";
        operatorSymbol = "+";
      }
      else if (textfieldArr.includes("-")) {
        operator = "subtract";
        operatorSymbol = "-";
      }
      else if (textfieldArr.includes("x")) {
        operator = "multiply";
        operatorSymbol = "x";
      }
      else if (textfieldArr.includes("÷")) {
        operator = "divide";
        operatorSymbol = "÷";
      }
      console.log(operator);
      secondValue = "";
      textfieldArr = [];
      historytextfield.innerHTML = `${firstValue}` + " " + `${operatorSymbol}`;
      textfield.innerHTML = "";  
    }

    if ((firstValue) && buttons[i].value == "=") {
      secondValue = textfieldArr.join("").slice(0, -1);
      console.log(secondValue);
      finalResult = operate(firstValue, secondValue, operator);
  
      historytextfield.innerHTML = `${firstValue}` + " " + `${operatorSymbol}` + " " + `${secondValue}` + " " + "=";
      textfield.innerHTML = finalResult;
      console.log(finalResult);

      
      if (secondValue == 0 && operator == "divide") {
        textfield.innerHTML = "ERROR";
        historytextfield.innerHTML = "You can't divide by 0!";
        for (let i = 0; i < activateAllButtons.length; i++) {
          activateAllButtons[i].disabled = true;
        }
        for (let i = 0; i < activateOperatorButtons.length ; i++) {
          activateOperatorButtons[i].disabled = true;
        }
        clearBtn.disabled = false;
      }
      secondValue = "";
      operator = "";
    }
  })
}






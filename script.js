const buttons = document.querySelectorAll(".button");
const textfield = document.getElementById("textfield");
const historytextfield = document.getElementById("historytextfield");

let firstValue, secondValue, finalResult, operator, operatorSymbol;
let textfieldArr = [];

const container = document.getElementById("container");
const additionBtn = document.getElementById("additionbtn");
const subtractBtn = document.getElementById("subtractbtn");
const multiplyBtn = document.getElementById("multiplybtn");
const divideBtn = document.getElementById("dividebtn");

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
    // do not allow these buttons to be in the calculator display
    if (buttons[i].value >= 0 || buttons[i].value <= 9 || buttons[i].value == "." || buttons[i].value == "+" || buttons[i].value == "-" || buttons[i].value == "x" || buttons[i].value == "÷" || buttons[i].value == 
    "=") {
      textfieldArr.push(buttons[i].value);
    }

    if (buttons[i].value == "del") {
      textfieldArr.pop();
      textfield.value = textfield.value.slice(0, -1);
    }

    if (buttons[i].value == "clear") {
      firstValue = "";
      secondValue = "";
      operator = "";
      textfield.value = "";
      historytextfield.value = "";
      textfieldArr = [];
    }

    // update calculator display with values
      if (buttons[i].value >= 0 || buttons[i].value <= 9 || buttons[i].value == ".") {
        textfield.value += buttons[i].value;
      }


    if (textfieldArr !== undefined) {
      additionBtn.classList.remove("active");
      subtractBtn.classList.remove("active");
      multiplyBtn.classList.remove("active");
      divideBtn.classList.remove("active");
      let activateButtons = document.getElementsByClassName("button");
      for (let i = 0; i < activateButtons.length ; i++) {
        activateButtons[i].disabled = false;
      }
    }
    console.log(textfieldArr);



    if ((buttons[i].value == "+" || buttons[i].value == "-" || buttons[i].value == "x" || buttons[i].value == "÷") && (!operator)) {
      if (buttons[i].value == "+") {
        operator = "add";
        operatorSymbol = "+";
        additionBtn.classList.add("active");
        subtractBtn.disabled = true;
        multiplyBtn.disabled = true;
        divideBtn.disabled = true;
      }
      else if (buttons[i].value == "-") {
        operator = "subtract";
        operatorSymbol = "-";
        subtractBtn.classList.add("active");
        additionBtn.disabled = true;
        multiplyBtn.disabled = true;
        divideBtn.disabled = true;
      }
      else if (buttons[i].value == "x") {
        operator = "multiply";
        operatorSymbol = "x";
        multiplyBtn.classList.add("active");
        additionBtn.disabled = true;
        subtractBtn.disabled = true;
        divideBtn.disabled = true;
      }
      else if (buttons[i].value == "÷") {
        operator = "divide";
        operatorSymbol = "÷";
        divideBtn.classList.add("active");
        additionBtn.disabled = true;
        subtractBtn.disabled = true;
        multiplyBtn.disabled = true;
      }
      if (!firstValue) {
        firstValue = textfieldArr.join("").slice(0, -1);
        console.log(firstValue);
        textfieldArr = [];
        historytextfield.value = `${firstValue}` + " " + `${operatorSymbol}`;
        textfield.value = "";  
      } 
      console.log(operator);
    }

    if ((firstValue) && (textfieldArr.includes("+") || textfieldArr.includes("-") || textfieldArr.includes("x") || textfieldArr.includes("÷"))) {
      if (textfieldArr.includes("=")) {
        firstValue = finalResult;
        textfieldArr = [];
        historytextfield.value = `${firstValue}` + " " + `${operatorSymbol}`;
        textfield.value = "";
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
      historytextfield.value = `${firstValue}` + " " + `${operatorSymbol}`;
      textfield.value = "";  
    }

    if ((firstValue) && buttons[i].value == "=") {
      secondValue = textfieldArr.join("").slice(0, -1);
      console.log(secondValue);
      finalResult = operate(firstValue, secondValue, operator);
      historytextfield.value = `${firstValue}` + " " + `${operatorSymbol}` + " " + `${secondValue}` + " " + "=";
      textfield.value = finalResult;
      console.log(finalResult);
      if (isNaN(finalResult)) {
        textfield.value = "ERROR";
      }
      if (secondValue == 0 && operator == "divide") {
        textfield.value = "ERROR";
      }
      secondValue = "";
      operator = "";
      
    }
  })
}




window.addEventListener("DOMContentLoaded", () => {
  //const
  const numberButtons = document.querySelectorAll("[number]");
  const operationButtons = document.querySelectorAll("[operation]");
  const clearButton = document.querySelectorAll("[operation-clear]");
  const equalsButton = document.querySelectorAll("[operation-equals]");
  //vars
  var calcData = {
    operateSolution : '',
    workingVar : '',
    firstNumber : '',
    secondNumber : '',
    operator : '',
    opFlag : false
  }

  //logs
  console.log(numberButtons);
  console.log(operationButtons);
  console.log(clearButton);
  console.log(equalsButton);

  clearButton.forEach((button) => {
    button.addEventListener("click", clear);
  });

  equalsButton.forEach((button) => {
    button.addEventListener("click", () => {
      calcData.secondNumber = calcData.workingVar;
      operate(calcData.firstNumber, calcData.operator, calcData.secondNumber);
      showResult();
    });
  })

  operationButtons.forEach((button) => {
    button.addEventListener("click", () =>{
      calcData.operator = button.innerHTML;
      calcData.opFlag = true;
    })
  })

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (calcData.opFlag != true) {
        appendNumber(button.innerHTML);
        updateScreen();  
      }else{
        calcData.firstNumber = calcData.workingVar;
        clear();
        appendNumber(button.innerHTML);
        updateScreen();  
      }
      
    });
  });







  function showResult() {
    document.getElementById("calc-display").innerHTML = calcData.operateSolution;
  }

  function updateScreen() {
    document.getElementById("calc-display").innerHTML = calcData.workingVar;
  }

  function appendNumber(num) {
    calcData.workingVar = num;
  }

  /**
   * 
   *function showScreen() {
    operateSolution = document.getElementsByClassName("btn_nmb").innerHTML;
    document.getElementById("calc-display").innerHTML = operateSolution;
    } 
   * 
   */
  // shows number saved in var operateSolution on calculator display

  function operate(num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
      case "+":
        calcData.operateSolution = add(num1, num2);
        break;
      case "-":
        calcData.operateSolution = sub(num1, num2);
        break;
      case "*":
        calcData.operateSolution = multi(num1, num2);
        break;
      case "/":
        calcData.operateSolution = div(num1, num2);
        break;
      default:
        break;
    }
    console.log(calcData.operateSolution);
  }

  function add(num1, num2) {
    var solution = num1 + num2;
    return solution;
  }

  function sub(num1, num2) {
    var solution = num1 - num2;
    return solution;
  }

  function multi(num1, num2) {
    var solution = num1 * num2;
    return solution;
  }

  function div(num1, num2) {
    var solution = num1 / num2;
    return solution;
  }

  function clear() {
    calcData.workingVar = "";
    calcData.operateSolution = "";
    calcData.opFlag = false;
    updateScreen();
  }
});

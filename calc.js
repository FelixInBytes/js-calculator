window.addEventListener("DOMContentLoaded", () => {
  //const
  const numberButtons = document.querySelectorAll("[number]");
  const operationButtons = document.querySelectorAll("[operation]");
  const clearButton = document.querySelectorAll("[operation-clear]");
  const equalsButton = document.querySelectorAll("[operation-equals]");
  //vars
  var operateSolution = "";
  var workingVar = "";
  var firstNumber = "";
  var secondNumber = "";
  var operator = "";
  var opFlag = false;

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
      secondNumber = workingVar;
      operate(firstNumber, operator, secondNumber);
      showResult();
    });
  })

  operationButtons.forEach((button) => {
    button.addEventListener("click", () =>{
      operator = button.innerHTML;
      opFlag = true;
    })
  })

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (opFlag != true) {
        appendNumber(button.innerHTML);
        updateScreen();  
      }else{
        firstNumber = workingVar;
        clear();
        appendNumber(button.innerHTML);
        updateScreen();  
      }
      
    });
  });







  function showResult() {
    document.getElementById("calc-display").innerHTML = operateSolution;
  }

  function updateScreen() {
    document.getElementById("calc-display").innerHTML = workingVar;
  }

  function appendNumber(num) {
    workingVar = num;
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
        operateSolution = add(num1, num2);
        break;
      case "-":
        operateSolution = sub(num1, num2);
        break;
      case "*":
        operateSolution = multi(num1, num2);
        break;
      case "/":
        operateSolution = div(num1, num2);
        break;
      default:
        break;
    }
    console.log(operateSolution);
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
    workingVar = "";
    operateSolution = "";
    opFlag = false;
    updateScreen();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const numberButtons = document.querySelectorAll("[number]");
  const operationButtons = document.querySelectorAll("[operation]");
  const clearButton = document.querySelectorAll("[operation-clear]");
  const equalsButton = document.querySelectorAll("[operation-equals]");
  var operateSolution = "";

  //logs
  console.log(numberButtons);
  console.log(operationButtons);
  console.log(clearButton);
  console.log(equalsButton);

  clearButton.forEach((button) => {
    button.addEventListener("click", clear);
    console.log("cleared");
  });

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      appendNumber(button.innerHTML);
      updateScreen();
    });
  });

  function updateScreen() {
    document.getElementById("calc-display").innerHTML = operateSolution;
  }

  function appendNumber(num) {
    operateSolution += num;
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
    showScreen(operateSolution);
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
    operateSolution = "";
    updateScreen();
  }
});

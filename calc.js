var operateSolution = 0;



window.addEventListener("DOMContentLoaded", showScreen);


function showScreen() {
  document.getElementById("calc-display").innerHTML = operateSolution;
}





function operate( num1,operator, num2) {
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

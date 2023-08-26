function operate(operator, num1, num2) {
  var solution;
  switch (operator) {
    case "+":
      solution = add(num1, num2);
      break;
    case "-":
      solution = sub(num1, num2);
      break;
    case "*":
      solution = multi(num1, num2);
      break;
    case "/":
      solution = div(num1, num2);
      break;
    default:
      break;
  }
  console.log(solution);
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

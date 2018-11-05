function addNumbers(num1, num2) {
  return num1 + num2;
};

function substractNumbers(num1, num2) {
  return num1 - num2;
};

function multiplyNumbers(num1, num2) {
  return num1 * num2;
};

function divideNumbers(num1, num2) {
  return num1 / num2;
};

function calculator(x, y, operation) {
  if (operation == "addition") {
    return addNumbers(x, y)
  } else if (operation == "substraction") {
    return substractNumbers(x, y)
  } else if (operation == "multiplication") {
    return multiplyNumbers(x, y)
  } else if (operation == "division") {
    return divideNumbers(x, y)
  }
  return "Invalid operation"
};

console.log(calculator(55, 32, "division"));
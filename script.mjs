// Imports
import * as operators from './app.mjs';
import something from './data.mjs' //you can rename default exports whatever you want

function calculate(num1, num2, op) {
  switch (op) {
    case '+':
      return operators.add(num1, num2);
      break;
    case '*':
      return operators.mult(num1, num2);
      break;
    case '-':
      return operators.sub(num1, num2);
      break;
  }
}

console.log(calculate(13, 23, '+'));

console.log(something)

import { add } from "./sum.js";
import { subtract } from "./subtract.js";
import { squareRoot } from "./sqrt.js";
import { modulus } from "./modulus.js";
import { multiply } from "./multiply.js";
import { absolute } from "./absolute.js";
import { exponentiate } from "./exponentiate.js";
import { division } from "./divide.js";

function calculator(operation, num1, num2) {
    switch(operation) {
      case 'sum':
        return add(num1, num2);
      case 'subtract':
        return subtract(num1, num2);
      case 'multiply':
        return multiply(num1, num2);
      case 'divide':
        return division(num1, num2);
      case 'modulus':
        return modulus(num1, num2);
      case 'exponentiate':
        return exponentiate(num1, num2);
      case 'sqrt':
        return squareRoot(num1);  
      case 'absolute':
        return absolute(num1);  
      default:
        return 'Invalid operation';
    }
  }

  console.log(calculator('sum',5,4));
  
  




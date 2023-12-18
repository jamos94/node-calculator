// Programmer: Jessica Amos
// Purpose: Create a terminal-based calculator using Node

const rs = require('readline-sync');

const arrOp = ['/','*','-','+'];

const getOperation = (limit) => {
  while(true) {
    const operation = rs.question('What operation would you like to perform? ');
    if (limit.includes(operation)){
      return operation;
    } else {
      console.log(`${operation} is not a valid operation. `);
    }
  }
}

const getNumber = (str) => {
  const number = rs.questionInt(`Please enter the ${str} number. `);
  if (!isNaN(number) && number != '') {
    return +number
  } else {
    console.log('This is not a valid number.')
  }
}

const operation = getOperation(arrOp);
const num1 = getNumber('first');
const num2 = getNumber('second');

console.log(num1, operation, num2);



// function isOperator(value) {
//   let operators = new Set(['/','*','-','+']);
//   return operators.has(value);
// }

// function isNumber(num){
//   if (isNaN(num)){
//     console.log(`${num} is not a number. `);
//     firstNumber = rs.question('Please enter a number. ');
//   }
//   return parseFloat(num);
// }

// function evaluate(num1, num2, operator){
//   switch (operator){
//     case '+': 
//       result = num1 + num2;
//       break;
//     case '-': 
//       result = num1 - num2;
//       break;
//     case '/': 
//       result = num1 / num2;
//       break;
//     case '*': 
//       result = num1 * num2;
//       break;
//     default:
//       console.log('Invalid operator');
//       return
//   }
//   return console.log(`The result is: ${result} `)
// }

// let operation = rs.question('What operation would you like to perform? ');
// isOperator(operation);

// while (!isOperator(operation)){
//   console.log(`${operation} is not a valid operation. `);
//   operation = rs.question('What operation would you like to perform? ');
// }

// let firstNumber = rs.question('Please enter the first number. ');

// isNumber(firstNumber);

// let secondNumber = rs.question('Please enter the second number. ');

// isNumber(secondNumber);

// evaluate(firstNumber, secondNumber, operation);

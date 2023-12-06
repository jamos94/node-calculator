// Programmer: Jessica Amos
// Purpose: Create a terminal-based calculator using Node

var rs = require('readline-sync');


function isOperator(value) {
  let operators = new Set(['/','*','-','+']);
  return operators.has(value);
}

function isNumber(num){
  if (isNaN(num)){
    console.log(`${num} is not a number. `);
    firstNumber = rs.question('Please enter a number. ');
  }
  return parseFloat(num);
}

function evaluate(num1, num2, operator){
  switch (operator){
    case '+': 
      result = num1 + num2;
      break;
    case '-': 
      result = num1 - num2;
      break;
    case '/': 
      result = num1 / num2;
      break;
    case '*': 
      result = num1 * num2;
      break;
    default:
      console.log('Invalid operator');
      return
  }
  return console.log(`The result is: ${result} `)
}

let operation = rs.question('What operation would you like to perform? ');
isOperator(operation);

while (!isOperator(operation)){
  console.log(`${operation} is not a valid operation. `);
  operation = rs.question('What operation would you like to perform? ');
}

let firstNumber = rs.question('Please enter the first number. ');

isNumber(firstNumber);

let secondNumber = rs.question('Please enter the second number. ');

isNumber(secondNumber);

evaluate(firstNumber, secondNumber, operation);

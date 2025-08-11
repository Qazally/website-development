//faulty calculator
/*
  make a faulty calculatore that does:
  1. it takes input of two numbers and an operator from user
  2. it performs the operation as follows:

  +.....>-
  *.....>+
  -.....>/
  /.....>**

  it performs the operation 10% of times wrong
  */

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let operator = prompt("Enter operator");
let random = Math.random();

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  // performs correct calculations
  alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);
} else {
  // performs wrong calculations
  operator = obj[operator];
  alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);
}
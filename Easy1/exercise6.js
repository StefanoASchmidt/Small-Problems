/*
SUM OR PRODUCT OF CONSECUTIVE INTEGERS
Write a program that asks the user to enter an integer greater than 0, then asks whether
the user wants to determine the sum or the product of all numbers between 1 and the
entered integer, inclusive.
*/

// MY SOLUTION:

const rlSync = require('readline-sync');

// get number from user and validate
let number = parseInt(rlSync.prompt({prompt: "Please enter an integer greater than 0: "}));

while (Number.isNaN(number) || number <= 0) {
  console.log("Not a valid number")
  number = parseInt(rlSync.prompt({prompt: "Please enter an integer greater than 0: "}));
}

// get operation from user and validate
let operation = rlSync.prompt({prompt: 'Enter "s" to compute the sum, or "p" to compute the product: '});

while (!['p', 's'].includes(operation)) {
  console.log("Not a valid choice");
  operation = rlSync.prompt({prompt: 'Enter "s" to compute the sum, or "p" to compute the product: '});
}

// perform operation and give user result
if (operation === 's') {
  result = computeSum(number);
  console.log(`\nThe sum of the integers between 1 and ${number} is ${result}`);
} else {
  result = computeProduct(number);
  console.log(`\nThe product of the integers between 1 and ${number} is ${result}`);
}

// helper functions defined
function computeSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function computeProduct(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}
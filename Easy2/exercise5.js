let rlSync = require('readline-sync');
prompt('Enter the first number: ');
let num1 = Number.parseInt(rlSync.question().trim());
prompt('Enter the second number: ');
let num2 = Number.parseInt(rlSync.question().trim());
prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`);

function prompt(string) {
  console.log(`==> ${string}`);
}
/*
Tip Calculator: Create a simple tip calculator. The program should prompt for a
bill amount and a tip rate. The program must compute the tip, and then log both
the tip and the total amount of the bill to the console. You can ignore input
validation and assume that the user will enter numbers.
*/

// My solution:

const rlSync = require('readline-sync');

// get bill from user
let bill = rlSync.prompt({prompt: 'What is the bill? '});
bill = Number(bill);

// get tip percentage from user
let tipPercentage = rlSync.prompt({prompt: 'What is the tip percentage? '});
tipPercentage = Number(tipPercentage);

// calculate tip and total
let tip = (bill * tipPercentage) / 100;
let total = bill + tip;

// give user value of tip and of total
console.log(`\nThe tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);


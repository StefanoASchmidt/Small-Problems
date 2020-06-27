/*
EVEN NUMBERS 
Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers
on separate lines.
*/

// My initial solution:
for (let currentNumber = 2; currentNumber <= 99; currentNumber += 2) {
  console.log(currentNumber);
}

// Proposed solution:
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}


/*
This problem asks us to write a function that takes in a number as input and
returns the negative of that number is the number is positive, and returns the
number as is if the number is negative.

Some examples showcasing the functionality of this function are the following:
1) negative(5) === -5
2) negative(-3) === -3
3) negative(0) === -0

NOTE: from these examples, in addition to confirming our understanding of how 
this function is supposed to work, we also see that we should return -0 on  
input 0 (this was not clear from the problem description) which though equal
to 0 (in both the mathematical and strict equality sense) is symbolically
different.

Pseudocode Algorithm:
- IF inputNumber < 0:
-- RETURN inputNumber.
- ELSE:
-- RETURN -inputNumber.
*/

function negative(inputNumber) {
  if (inputNumber < 0) return inputNumber;
  return -inputNumber;
}

// test cases
console.log(negative(5) === -5);
console.log(negative(-3) === -3);
console.log(negative(0) === -0);
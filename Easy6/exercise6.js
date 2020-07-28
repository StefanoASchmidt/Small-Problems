/*
This problem asks us to write a function that takes an integer as input and
returns an array containing all the integers from 1 to the input number 
(inclusive) in ascending order. We are told in addition that we may assume that
the input is a positive integer.

Some examples showcasing the functionality of this function are the following:
1) sequence(5) returns [1,2,3,4,5]
2) sequence(3) returns [1,2,3]
3) sequence(1) returns [1]

Pseudocode Algorithm:
- INITIALIZE an empty array referenced in variable sequenceArray.
- SET iteration counter to 1.
- WHILE counter <= inputInteger:
-- ADD value of counter to the end of sequenceArray.
-- INCREASE the value of counter by 1.
- RETURN sequenceArray.
*/

function sequence(inputInteger) {
  let sequenceArray = [];

  for (let counter = 1; counter <= inputInteger; counter += 1) {
    sequenceArray.push(counter);
  }

  return sequenceArray;
}

// test cases
console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
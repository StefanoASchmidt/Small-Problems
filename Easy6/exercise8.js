/*
In this exercise we are asked to write a function that takes two integers as
inputs. The first integer is a count, and the second integer is the starting
point of a sequence. The sequence should contain the same number of elements as
the value of the count integer, and the elements of the sequence should be
successive multiples of the second integer. We can assume that the first input
integer is non-negative. 

Some examples showcasing the desired functionality are the following:
1) sequence(5,1) returns [1,2,3,4,5]
2) sequence(4,-7) returns [-7, -14, -21, -28]
3) sequence(3,0) returns [0, 0, 0]
4) sequence(0, 1000000) returns []
5) sequence(0,0) returns []
NOTE: the last two examples show us that if the count integer is 0 we should
always return an empty array.

Pseudocode Algorithm:
- (input parameters are count and start)
- ASSIGN empty array to variable sequenceArray.
- ASSIGN value 1 to variable counter.
- WHILE counter <= count:
-- ADD result of multiplying the start by counter to end of sequenceArray.
-- INCREASE counter by 1.
- RETURN sequenceArray.
*/

function sequence(count, start) {
  let sequenceArray = [];
  
  for (let counter = 1; counter <= count; counter += 1) {
    sequenceArray.push(start * counter);
  }

  return sequenceArray;
}

// test cases
console.log(sequence(5,1));
console.log(sequence(4,-7));
console.log(sequence(3,0));
console.log(sequence(0,1000000));
console.log(sequence(0,0));
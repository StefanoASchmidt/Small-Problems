/*
Write a function that takes an array of numbers, and returns an array with the
same number of elements, with each element's value being the running total from
the original array.

Input: an array of numbers
Output: array with running total of input array

Examples:
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

Data Structure: Array

Algorithm:
- initialize an empty array runningTotal
- initialize currentTotal variable to 0
- loop through input array 
-- add element at current index to currentTotal
-- push value of currentTotal into runningTotal
- return runningTotal

*/

function runningTotal(array) {
  let running = [];
  let currentTotal = 0;

  array.forEach(num => {
    currentTotal += num;
    running.push(currentTotal);
  });

  return running;
}

/*
FURTHER EXPLORATION:

function runningTotal(array) {
  let currentTotal = 0;
  return array.map(num => currentTotal += num);
}

*/

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
/*
Write a function that takes an array of integers as input, multiplies all of
the integers together, divides the result by the number of entries in the
array, and returns the result as a string with the value rounded to three
decimal places.
*/

function multiplicativeAverage(array) {
  if (array.length === 0) return '0.000';

  let average = array.reduce((acc, num) => acc * num, 1) / array.length;
  return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

/*
Write a function that takes one argument, an array of integers, and returns the
average of all the integers in the array, rounded down to the integer component
of the average. The array will never be empty, and the numbers will always be
positive integers.
*/

const average = function (array) {
  return Math.floor(array.reduce((acc, num) => acc + num, 0) / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
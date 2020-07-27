/*
Write a function that takes an array as an argument, and returns an array that
contains two elements, each of which is an array. Put the first half of the
original array elements in the first element of the return value, and put the
second half in the second element. If the original array contains an odd number
of elements, place the middle element in the first half array.
*/

function halvsies(arr) {
  let array1 = [];
  let array2 = [];
  let halfIndex = Math.floor((arr.length - 1)/2);

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (idx <= halfIndex) {
      array1.push(arr[idx]);
    } else {
      array2.push(arr[idx]);
    }
  }

  return [array1, array2];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

// can also use the Array method slice to obtain a copy of a part of the array.
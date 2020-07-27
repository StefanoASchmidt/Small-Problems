/*
Write a function that takes two arrays as arguments, and returns an array
containing the union of the values from the two. There should be no duplication
of values in the returned array, even if there are duplicates in the original
arrays. You may assume that both arguments will always be arrays.
*/

/*
function union(arr1=[], arr2=[]) {
  let arr = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    let current = arr1[idx];
    if (!arr.includes(current)) arr.push(current);
  }

  for (let idx = 0; idx < arr2.length; idx += 1) {
    let current = arr2[idx];
    if (!arr.includes(current)) arr.push(current);
  }

  return arr;
}
*/

function union (numArray1, numArray2) {
  let combinedArr = numArray1;

  numArray2.forEach(element => {
    if (!combinedArr.includes(element)) {
      combinedArr.push(element);
    }
  });
  return combinedArr;
}


console.log(union([1,3,5],[3,6,9]));
console.log(union([1,3,5],[]));
console.log(union([1,3,3,5],[3,6,9]));
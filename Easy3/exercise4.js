function findFibonacciIndexByLength(length) {
  let num1 = 1;
  let num2 = 1;
  let index = 1;

  while(String(num1).length < length) {
    index += 1;
    let tracker = num1;
    num1 = num2;
    num2 = num1 + tracker;
  }

  return index;
}

/*
function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}
*/

console.log(findFibonacciIndexByLength(1));
console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74


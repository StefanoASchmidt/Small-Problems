/* 
ISN'T IT ODD? 
Write a function that takes one integer argument, which may be positive, 
negative, or zero. This method returns true if the number's absolute value is
odd. You may assume that the argument is a valid integer value.
*/

function isOdd(number) {
  return !(number%2 === 0);
}

// test cases
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/*
Since the parity of an integer is independent of it's sign (i.e. an integer n is odd if and only if |n| is odd) and parity is a binary value, I would argue that we don't necessarily need to use Math.abs(), returning whether a given integer is not even (and hence odd) should suffice. However the wording of the problem does suggest that we might want to explicitly check the parity of the absolute value of the number, as does the suggested solution. This brings up the question of how closely we should be following/paying-attention to explicit suggestions/wording of problems: in a hypothetical interview setting would a solution such as the one I will post below be considered sub-par or not what was asked for even if the function is exactly the same in the sense of having the same output given the same input?
My initial answer: 
```javascript
function isOdd(number) {
  return !(number%2 === 0);
}
```
*/
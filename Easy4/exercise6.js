/*
Write a function that returns true if its integer argument is palindromic, or
false otherwise. A palindromic number reads the same forwards and backwards.

Input: a number
Output: a boolean; true if the input number reads the same forward as back, and
false otherwise.

Examples:
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

Data Structure: we will use the String and Array data structures.

Algorithm:
- convert input number to a string.
- split string into an array of characters.
- reverse array of characters.
- join reversed array of characters.
- return comparison of string with reversed string.

*/

function isPalindromicNumber(number) {
  let numberString = number.toString(10);
  let reversedNumberString = numberString.split('').reverse().join('');
  return numberString === reversedNumberString;                                    
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

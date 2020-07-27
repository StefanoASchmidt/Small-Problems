/*
Write a function that returns true if the string passed as an argument is a
palindrome, or false otherwise. A palindrome reads the same forwards and
backwards. For this problem, the case matters and all characters matter.

Input: a string
Output: a boolean; true if the string is a palindrom, false otherwise.

Examples:
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

Data Structure: we can use the String object and methods such as charAt.

Algorithm:
- initialize a for loop with counter set to 0, and stopping condition being 
counter equal to the floor of the length of input string divided by 2.
- compare the value of the character at the currentIndex to the
value of the character at the length - 1 - currentIndex. If they are equal 
continue. Otherwise return false.
- return true if all the comparisons yield true

*/

function isPalindrome(string) {
  for (let index = 0; index < Math.floor(string.length / 2); index += 1) {
    if (!(string.charAt(index) === string.charAt(string.length - 1 - index))) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('madam'));               // logs true
console.log(isPalindrome('Madam'));               // logs false (case matters)
console.log(isPalindrome("madam i'm adam"));      // logs false (all characters matter)
console.log(isPalindrome('356653'));              // logs true

/*
A very succint solution to this problem is to compare the value of the input
string to the value of the reversed string and return the value of this
comparison. We can reverse a string by first converting it to an array of
characters using split, using the built-in array reverse method, and then 
converting the reversed array back to a string using the join method:

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

*/
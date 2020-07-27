/*
Write another function that returns true if the string passed as an argument is
a palindrome, or false otherwise. This time, however, your function should be
case-insensitive, and should ignore all non-alphanumeric characters. If you 
wish, you may simplify things by calling the isPalindrome function you wrote in
the previous exercise.

Input: a string
Output: a boolean; true if the string is a palindrome after removing all non-
alphanumeric characters and ignoring case, false otherwise.

Examples:
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

Data Structure: we will use Array as our main data structure in this problem.

Algorithm:
- convert input string to array of characters.
- filter array of characters to remove non-alphanumeric characters.
- map filtered array to array of all lowercase strings.
- join resulting array into string.
- check if resulting array is a palindrome (using isPalindrome function.)

*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  let validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

  let filteredString = string.split('')
                             .map(char => char.toLowerCase())
                             .filter(char => {
                               return validChars.includes(char);
                              })
                             .join('');

  return isPalindrome(filteredString);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

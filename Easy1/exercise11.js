/*
ASCII STRING VALUE
Write a function that determines and returns the ASCII string value of a string
passed in as an argument. The ASCII string value is the sum of the ASCII values
of every character in the string. (You may use String.prototype.charCodeAt() to
determine the ASCII value of a character.)
*/

// MY SOLUTION
function asciiValue(string) {
  let stringValue = 0;
  for (let index = 0; index < string.length; index += 1) {
    stringValue += string.charCodeAt(index);
  }
  return stringValue;
}

// TEST CASES
console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0

/*
This problem asks us to write a function(repeater) that takes in a string, 
doubles every character in this string, and returns the resulting string.

Some examples of the functionality of this function are the following:
1) repeater('Hello') returns 'HHeelllloo'
2) repeater('Good job!') returns 'GGoooodd  jjoobb!!' 
3) repeater('') returns ''
From these examples we learn that in this function we are asked to double ALL
characters, including space characters and non-alphanumeric characters (see 
example 2). Furthermore this doubling should be case sensitive. We can also see
how we should deal with edge cases such as an empty string (by returning an empty 
string).
One additional edge case we might want to consider is what happens with special
characters (such as newline characters). For this particular problem I will
that we do not need to deal with such inputs but it would be interesting to 
think about how we might deal with those. In addition, for this problem I am
also assuming that all inputs are strings (another interesting thing to consider
would be how we could handle inputs that are not strings.)

Pseudocode algorithm:
- INITIALIZE a variable doubledString to an empty string.
- ITERATE through the characters of the input string.
-- REASSIGN doubledString to doubleString concatenated twice with the current 
-- iteration character.
- RETURN doubledString.
*/

const repeater = function (inputString) {
  let doubledString = '';

  for (let index = 0; index < inputString.length; index += 1) {
    let currentChar = inputString[index];
    doubledString += (currentChar + currentChar);
  }

  return doubledString;
};

// test cases:
console.log(repeater('Hello') === 'HHeelllloo'); // outputs true
console.log(repeater('Good job!') === 'GGoooodd  jjoobb!!'); // outputs true
console.log(repeater('') === ''); // outputs true

/*
Another way in which we could write this function could by exploiting the close
relationship between arrays and strings (namely the natural bijections between 
strings and arrays of charaters given by the String.prototype.split() and the
Array.prototype.join() methods), and then use of array iterating abstractions
to achieve our functionality.

Pseudocode algorithm:
- SPLIT input string into an array of characters.
- MAP array of characters to an array where each single character is doubled.
- JOIN mapped array into a string separated by empty strings.
- RETURN joined string.

NOTE: the above algorithm can be implemented in a single line of code in our
function body using method chaining.
*/

const anotherRepeater = function (inputString) {
  return inputString.split('').map(char => char + char).join('');
};

// test cases:
console.log(anotherRepeater('Hello') === 'HHeelllloo'); // outputs true
console.log(anotherRepeater('Good job!') === 'GGoooodd  jjoobb!!'); // outputs true
console.log(anotherRepeater('') === ''); // outputs true

/* 
Finally, just for fun, we might want to consider how we could write this
function in a recursive fashion.

Pseudocode algorithm:
- IF input string is empty, RETURN input string.
- OTHERWISE return the first character of the input string doubled concatenated
with a recursive call to our function with the remaining portion of the string.
*/

const recursiveRepeater = function (inputString) {
  if (inputString.length === 0) return '';
  return inputString.slice(0,1).repeat(2) + recursiveRepeater(inputString.slice(1));
};

// test cases:
console.log(recursiveRepeater('Hello') === 'HHeelllloo');
console.log(recursiveRepeater('Good job!') === 'GGoooodd  jjoobb!!');
console.log(recursiveRepeater('') === '');





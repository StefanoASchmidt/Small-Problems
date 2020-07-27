/*
This problem asks us to write a function that takes in a string as input, 
doubles every alphabetic character that is NOT a vowels (it should NOT 
double any other character), and returns this new doubled string.

Some examples of the functionality of this function are the following:
1) doubleConsonants('String') === 'SSttrrinngg' evaluates true
2) doubleConsonants('Hello-World!') === 'HHellllo-WWorrlldd!' evaluates true
3) doubleConsonants('July 4th') === 'JJullyy 4tthh' evaluates true
4) doubleConsonants('') === '' evaluates true

So from these examples we have learned/confirmed our understanding of this
problem. One case that is missing and is worth thinking about is whether this
function should be case sensisitve with respect to vowels. That is, should
we NOT double capitalized vowels. I will make the assumption that capitalized
vowels should also NOT be doubled as this seems most in line with the problem
description and the function name (a function called doubleConsonants that 
doubles capital vowels would be strange!)

Data Structure: we are going to be working with strings, we can store the
characters that we wish do double in a string, and the iterate through the
string, doubling each character if it is included in our selection string.

Pseudocode Algorithm:
- (store input string in variable/parameter inputString.)
- store array with all non-vowel alphabetic characters in string CONSONANTS.
- set variable doubledConsonants to an empty string.
- iterate through characters of inputString.
-- at each iteration, check if lowerCase version of current character is in 
-- CONSONANTS string.
--- if yes, then reassign doubledConsonants to doubledConsonants concatenated
--- with current character twice.
--- if no, then reassign doubledConsonants to doubledConsonants concatenated 
--- with current character once.
- return doubledConsonants
*/

const doubleConsonants = function (inputString) {
  const CONSONANTS= 'bcdfgbcdfghjklmnpqrstvwxyz'; 
  const CONSONANT_REPEATS = 2;

  let doubledConsonants = '';

  for (let index = 0; index < inputString.length; index += 1) {
    if (CONSONANTS.includes(inputString[index].toLowerCase())) {
      doubledConsonants += inputString[index].repeat(CONSONANT_REPEATS);
    } else {
      doubledConsonants += inputString[index];
    }
  }

  return doubledConsonants;
}

// test cases
console.log(doubleConsonants('String') === 'SSttrrinngg');
console.log(doubleConsonants('Hello-World!') === 'HHellllo-WWorrlldd!');
console.log(doubleConsonants('July 4th') === 'JJullyy 4tthh');
console.log(doubleConsonants('') === '');
console.log(doubleConsonants('I love JavaScript') === 'I llovve JJavvaSSccrripptt');
console.log(doubleConsonants('AEIOU') === 'AEIOU');

/*
If we want to we can write a function with the same functionality using array 
iteration abstractions.

Pseudocode Algorithm:
- (store input string in variable/parameter inputString.)
- store array with all non-vowel alphabetic characters in string CHARS_TO_DOUBLE.
- SPLIT inputString into an array of characters.
- MAP array of characters
-- IF current character is a consonant, map to a string containing that
character twice.
-- ELSE apply identity map on current character.
- JOIN mapped array into a string with elements seperated by ''.
- RETURN joined array.
*/

const anotherDoubleConsonants = function (inputString) {
  const CONSONANTS = 'bcdfgbcdfghjklmnpqrstvwxyz'; 
  const CONSONANT_REPEATS = 2;

  return inputString.split('')
                    .map(char => {
                      if (CONSONANTS.includes(char.toLowerCase())) {
                        return char.repeat(CONSONANT_REPEATS);
                      } else {
                        return char;
                      }
                    })
                    .join('');                             
}

// test cases
console.log(anotherDoubleConsonants('String') === 'SSttrrinngg');
console.log(anotherDoubleConsonants('Hello-World!') === 'HHellllo-WWorrlldd!');
console.log(anotherDoubleConsonants('July 4th') === 'JJullyy 4tthh');
console.log(anotherDoubleConsonants('') === '');
console.log(anotherDoubleConsonants('I love JavaScript') === 'I llovve JJavvaSSccrripptt');
console.log(anotherDoubleConsonants('AEIOU') === 'AEIOU');




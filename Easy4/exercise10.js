/*
Given a string of words separated by spaces, write a function that swaps the
first and last letters of every word.
You may assume that every word contains at least one letter, and that the
string will always contain at least one word. You may also assume that each
string contains nothing but words and spaces, and that there are no leading,
trailing, or repeated spaces.

Input: a string
Output: a representation of the input string with the first and last letter of 
each word swapped.

Examples:
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

Data Structure: Array

Algorithm:
- convert input string into an array of words
- map each array of characters to an array of characters where first and last 
elements are swapped.
-- swap first and last letters using slice method
- join array of words with ' ' separation
*/

function swap(string) {
  let swapped = string.split(' ')
                      .map(word => {
                        if (word.length === 1) {
                          return word;
                        } else {
                          return word[word.length - 1] + word.slice(1,word.length - 1) + word[0];
                        }
                      })
                      .join(' ');
  
  return swapped;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
/*
Write a function that takes a string consisting of zero or more space separated
words, and returns an object that shows the number of words of different sizes.
Words consist of any sequence of non-space characters.

Input: a string
Output: an object, with keys being length of words that occur in string, and
values being the number of times such a length occurs in the string.

Examples:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

Data Structure: Object and Array.

Algorithm:
- convert input array of words
- map array to array of words with whitespace removed
- filter any empty elements
- initialize empty object
- iterate through the mapped/filtered array:
-- at each iteration, get length of current element string
-- if length is not a key of object, add it and set value to 1
-- else increment value of that property by 1
- return object

*/

function wordSizes(string) {
  let words = string.split(' ')
                    .map(elem => elem.trim())
                    .filter(elem => elem.length !== 0);
  
  let sizeFrequency = {};

  for (let idx = 0; idx < words.length; idx += 1) {
    let currentKey = words[idx].length.toString(10);

    if (sizeFrequency.hasOwnProperty(currentKey)) {
      sizeFrequency[currentKey] += 1; 
    } else {
      sizeFrequency[currentKey] = 1;
    }
  }

  return sizeFrequency;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
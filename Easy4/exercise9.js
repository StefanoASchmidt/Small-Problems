/*
Modify the wordSizes function from the previous exercise to exclude non-letters
when determining word size. For instance, the word size of "it's" is 3, not 4.

Input: a string
Output: an object containing the different lengths of words in input string as 
keys, and the frequency of each length as corresponding value. In this case 
when calculating the length of a word we exclude non-letter characters

Examples:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

Data Structure: Array and Object

Algorithm:
- convert input string to array of words
- map array of words to nested array of characters
- filter each subarray by removing whitespace and non-letter characters
- map back by joining each subarray
- initialize empty object
- loop through array of filtered words:
-- at each iteration check if object has length of current word as key
--- if it does increment value associated to that key by 1
--- otherwise add key to object and set its value to 1
- return object

*/

function wordSizes(string) {
  let words = string.split(' ')
                    .map(word => word.trim().toLowerCase())
                    .filter(word => word.length !== 0)
                    .map(word => word.split(''))
                    .map(subarr => subarr.filter(char => {
                      return 'abcdefghijklmnopqrstuvwxyz'.includes(char);
                    }))
                    .filter(subarr => subarr.length !== 0)
                    .map(subarr => subarr.join(''));
  
  let sizes = {};

  for (let idx = 0; idx < words.length; idx += 1) {
    let current = words[idx].length.toString();
    sizes[current] = sizes[current] ? sizes[current] + 1 : 1;
  }

  return sizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}  
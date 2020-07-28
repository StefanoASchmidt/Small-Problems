/*
In this exercise we are asked to write a function that takes in a string
consisting of a first name, a space, and a last name, and return a string
consisting of the last name, a comma, a space, and the first name.

Some examples showcasing the desired functionality are:
1) swapName('Ada Lovelace') === 'Lovelace, Ada'
2) swapName('Alan Turing') === 'Turing, Alan'

Pseudocode Algorithm:
- SPLIT input string into an array of names using ' ' as separator.
- REVERSE order of array.
- JOIN array using ', ' as separator.
- RETURN joined string.
*/

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

// test cases
console.log(swapName('Ada Lovelace') === 'Lovelace, Ada');
console.log(swapName('Alan Turing') === 'Turing, Alan');
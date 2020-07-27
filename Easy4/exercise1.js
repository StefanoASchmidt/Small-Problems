/*
Build a program that randomly generates Teddy's age, and logs it to the 
console. Have the age be a random number between 20 and 120 (inclusive).

Input: No input, just calling/running the program.
Output: String giving Teddy's randomly generated age (which has to be between 
20 and 120 inclusive.)

Example Output: Teddy is 69 years old!
Example Invalid Output: Teddy is 121 years old! // Teddy is 63.45 years old!

Data Structure: Math object to generate the random number and String to return
our result.

Algorithm: 
Generate random number between 0 and 1.
Multiply random number by 101 (we obtain random number between 0 and 101.)
Add 20 (we obtain random number between 20 and 121.)
Use floor function (we obtain random integer between 20 and 120.)
Output String using our number for Teddy's age to console.
*/

let age = Math.floor(Math.random()*101 + 20);
console.log(`Teddy is ${age} years old!`);

/*
Can extend the functionality of the code of this program by adding a function
that takes in a range and generates a random number in that range (so tha it 
isn't just set to the range 20-120):

function randomBetween(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

*/
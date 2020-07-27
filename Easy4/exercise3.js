/*
Build a program that logs when the user will retire and how many more years the
user has to work until retirement.

Input: user input, current age and age of retirement.
Output: The current year and year at which person will retire (in sentence)
and encouraging message.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Data Structure: we will use the Number object to parse input strings to numbers
and  use a Date object to get current year. Once the processing is done use
template literals to output strings.

Algorithm:
- get age from user, convert input string to number.
- get age of retirement from user, convert input string to number.
- calculate number of years until retirement (subtract age from age of 
retirement.)
- get current year.
- calculate year in which person will retire (add number of years until retire to
current year.)
- use template literals to output string saying current year and year of
retirement.
- use template literal to output string with encouragine message and number of 
year left of work.

*/

let rlSync = require('readline-sync');

let age = rlSync.question('What is your age? ');
age = Number.parseInt(age);

let retireAt = rlSync.question('At what age would you like to retire? ');
retireAt = Number.parseInt(retireAt);

let untilRetire = retireAt - age;

let today = new Date();
let currentYear = today.getFullYear();

let yearRetire = currentYear + untilRetire;

console.log(`It's ${currentYear}. You will retire in ${yearRetire}`);
console.log(`You have only ${untilRetire} years of work to go!`);




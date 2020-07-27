/*
Write a program that solicits six numbers from the user, then logs a message
that describes whether or not the sixth number appears amongst the first five
numbers.

Input: six numbers we get from user
Output: A message indicating whether the last number is one of the previous
five numbers given.

Examples: 

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

Data Structure: since we care both about order (i.e. we are comparing the last
number given to the rest) one data structure that might be useful is an array
(which in addition has methods that may be useful for us such as includes.) We
also will use a string data type to return our answer/result.

Algorithm:
Initialize empty array
Get first number from user, push into array.
Get second number from user, push into array.
Get third number from user, push into array.
Get fourth number from user, push into array.
Get fifth number from user, push into array.
Get sixth number from user, check whether the array includes this number or not, store
answer in a boolean.
If the sixth number is in the array, return string saying so. If not, return different
string saying so.

*/

let rlSync = require('readline-sync');
let numbers = [];
let messages = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

for (let count = 0; count < 5; count++) {
  numbers.push(rlSync.question(`Enter the ${messages[count]} number: `));
}

let lastNumber = rlSync.question(`Enter the last number: `);

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers.join()}`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers.join()}`);
}


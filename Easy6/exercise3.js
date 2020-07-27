/*
In this problem we are asked to write a function that takes in a POSITIVE
integer and returns a the value of that integer with the digits reversed.

Given examples showing the functionality we are asked to reproduce:
1) reverseNumber(12345) === 54321
2) reverseNumber(12213) === 31221
3) reverseNumber(456) === 654
4) reverseNumber(12000) === 21 (why? well 00021 is the same as 21)
5) reverseNumber(1) === 1
From these examples we confirm our understanding of the problem, specifically
that this problem is not equiavalent to reversing a string of digits in the 
sense that we have to take into account the numeric value of the reversed
digits. 

High-Level Algorithm:
- CONVERT input number to an array of characters..
- REVERSE array of characters.
- REMOVE any head '0' characters
- JOIN array to a string.
- CAST string to number.
- RETURN number.

Pseudocode Algorithm:
- CAST input number to string numberString.
- SPLIT numberString into array of characters digitCharacters.
- REVERSE digitCharacters array.
- WHILE first element of digitCharacters array is '0' charcter:
-- SHIFT (aka remove) first element of digitCharacters array.
- JOIN digitCharacters array to string reversedNumberString.
- CAST reversedNumberString to number reversedNumber.
- RETURN reversedNumber.
*/


function reverseNumber(inputNumber) {
  let digitCharacters = String(inputNumber).split('').reverse();
  
  // note: this loop is actually unnecessary, the Number function ignores 
  // leading 0s.
  while (digitCharacters[0] === '0') {
    digitCharacters.shift();
  }

  return Number(digitCharacters.join(''));
}

// test cases
console.log(reverseNumber(12345) === 54321);
console.log(reverseNumber(12213) === 31221);
console.log(reverseNumber(456) === 654);
console.log(reverseNumber(12000) === 21);
console.log(reverseNumber(1) === 1);



/*
We can also try to solve this problem without any
type casting.

Pseudocode Algorithm:
- IF inputNumber < 10 
-- RETURN inputNumber.
- ELSE:
-- SET reversedNumber to 0.
-- WHILE inputNumber > 0:
--- add inputNumber%10 to reversedNumber.
--- multiply reversedNumber by 10.
--- REASSIGN inputNumber to (inputNumber - inputNumber%10) / 10.
- DIVIDE reversedNumber by 10.
- RETURN
*/

function anotherReverseNumber(inputNumber) {
  if (inputNumber < 10)  return inputNumber;

  let reversedNumber = 0;

  while(inputNumber > 0) {
    reversedNumber += inputNumber%10;
    reversedNumber *= 10;
    inputNumber = (inputNumber - inputNumber%10)/10;
  }

  return reversedNumber/10;
}

console.log(anotherReverseNumber(12345) === 54321);
console.log(anotherReverseNumber(12213) === 31221);
console.log(anotherReverseNumber(456) === 654);
console.log(anotherReverseNumber(12000) === 21);
console.log(anotherReverseNumber(10) === 1);
console.log(anotherReverseNumber(1001001) === 1001001);







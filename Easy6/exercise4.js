/*
This problem asks us to write a function that takes in a (non-empty) string as 
input, and return the middle of the string. If the string has odd length the  
middle of the string is a single character, if the string has even length then
the middle of the string is the middle two characters.

Some examples showing the functionality of this function are the following:
1) centerOf('I Love JavaScript') === 'a'
2) centerOf('Launch School') === ' '
3) centerOf('Launch') === 'un'
4) centerOf('Launchschool') === 'hs'
5) centerOf('x') === 'x'

Additional edge cases to consider would be something like the following:
6) centerOf('xx') === 'xx'

High-Level Algorithm/Discussion:
In my initial opinion, the core of this problem seems to be how to calculate
the middle index/indices based on the length of the string, since from there we
can extract the relevant character/s from the string. There are two cases: when
the string has length 2n+1 (i.e odd length) the middle character is the (n+1)th
character of the string, which with 0 based indexing corresponds to index n. 
When the string has length 2n (i.e even length) the middle characters are the
nth and (n+1)th characters of the string, which with 0 based indexing are those
with index (n-1) and index n. 

Pseudocode Algorithm:
- store length of inputString as stringLength.
- IF stringLength is odd:
-- EXTRACT character at floor(stringLength/2)th index.
-- RETURN extracted character.
- ELSE:
-- EXTRACT substring consisting of characters at indices (stringLength/2 - 1)
and stringLength/2.
-- RETURN extracted substring.
*/

function centerOf(inputString) {
  let stringLength = inputString.length;

  if (stringLength%2 !== 0) {
    let middleIndex = Math.floor(stringLength/2);
    return inputString[middleIndex];
  } else {
    let firstIndex = stringLength/2 - 1;
    let secondIndex = stringLength/2;
    return inputString[firstIndex] + inputString[secondIndex];
  }
}

// test cases:
console.log(centerOf('I Love JavaScript') === 'a');
console.log(centerOf('Launch School') === ' ');
console.log(centerOf('Launch') === 'un');
console.log(centerOf('Launchschool') === 'hs');
console.log(centerOf('x') === 'x');
console.log(centerOf('xx') === 'xx');
console.log(centerOf('') === '');

/*
We could also solve this problem without performing the calculations about 
where the middle index/indicies are based on the parity of the length of the
input string but use a two index pointer approach, with one pointer starting
at the start of the string (index 0) and the other starting at the end of the
string.

Pseudocode Algorithm:
- INITIALIZE pointers firstIndex and lastIndex to 0 and inputString.length -1
respectively.
- WHILE firstIndex < lastIndex:
-- INCREASE the value of firstIndex by 1.
-- DECREASE the value of lastIndex by 1.
- IF firstIndex and lastIndex have the same value:
-- RETURN character at index firstIndex of inputString.
- ELSE:
-- RETURN character at index secondIndex of inputString concatenated with
character at index firstIndex of inputString.
*/

function anotherCenterOf(inputString) {
  let firstIndex = 0;
  let secondIndex = inputString.length - 1;

  while(firstIndex < secondIndex) {
    firstIndex += 1;
    secondIndex -= 1;
  }

  if (firstIndex === secondIndex) {
    return inputString[firstIndex];
  } else {
    return inputString[secondIndex] + inputString[firstIndex];
  }
}

// test cases:
console.log(anotherCenterOf('I Love JavaScript') === 'a');
console.log(anotherCenterOf('Launch School') === ' ');
console.log(anotherCenterOf('Launch') === 'un');
console.log(anotherCenterOf('Launchschool') === 'hs');
console.log(anotherCenterOf('x') === 'x');
console.log(anotherCenterOf('xx') === 'xx');
console.log(anotherCenterOf('') === '');







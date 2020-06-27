/*
HOW BIG IS THE ROOM?
Build a program that asks the user to enter the length and width of a room in
meters, and then logs the area of the room to the console in both square meters
and square feet.
*/

// MY SOLUTION

const FEETSQ_PER_METERSQ = 10.7639;
let readlineSync = require('readline-sync');

// get length of room from user
console.log('Enter the length of the room in meters:');
let length = readlineSync.prompt();
length = parseFloat(length);

// get width of room from user
console.log('Enter the width of the room in meters:');
let width = readlineSync.prompt();
width = parseFloat(width);

// calculate are in both sq meters and sq feet
let areaMeters = length * width;
let areaFeet = areaMeters * FEETSQ_PER_METERSQ;

// give user results with precision fixed to 2 decimals
console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet)`);

/*
My initial solution had the input request string as part of the readlinSync
prompt() method call. Although this still produced nice interactiviety, the
output was not exactly what was given in the example (the user input would 
appear on the same line as the request string...)
*/




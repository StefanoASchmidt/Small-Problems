/*
As seen in the previous exercise, the time of day can be represented as the
number of minutes before or after midnight. If the number of minutes is
positive, the time is after midnight. If the number of minutes is negative, the
time is before midnight. Write two functions that each take a time of day in 24
hour format, and return the number of minutes before and after midnight,
respectively. Both functions should return a value in the range 0..1439. You
may not use javascript's Date class methods.
*/

const MINS_PER_HR = 60;
const HRS_PER_DAY = 24;
const MINS_PER_DAY = HRS_PER_DAY * MINS_PER_HR;

function afterMidnight(time) {
  let [hours, minutes] = time.split(':').map(elem => Number(elem));
  return ((MINS_PER_HR * hours) + minutes) % MINS_PER_DAY;
}

function beforeMidnight(time) {
  let [hours, minutes] = time.split(':').map(elem => Number(elem));
  return (MINS_PER_DAY - ((hours * MINS_PER_HR) + minutes)) % MINS_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
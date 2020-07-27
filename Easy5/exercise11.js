/*
The time of day can be represented as the number of minutes before or after
midnight. If the number of minutes is positive, the time is after midnight. If
the number of minutes is negative, the time is before midnight. Write a
function that takes a time using this minute-based format and returns the time
of day in 24 hour format (hh:mm). Your method should work with any integer
input. You may not use javascript's Date class methods.
*/
const HRS_PER_DAY = 24;
const MINS_PER_HR = 60;

function timeOfDay(number) {
  let time = minutesAfterMidnight(number);
  let hours = Math.round((time - (time % MINS_PER_HR)) / MINS_PER_HR);
  let minutes = Math.round(time % MINS_PER_HR);
  return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;
}

function minutesAfterMidnight(number) {
  if (number >= 0) {
    return number % (MINS_PER_HR * HRS_PER_DAY);
  } else {
    return (MINS_PER_HR * HRS_PER_DAY) + (number % (MINS_PER_HR * HRS_PER_DAY));
  }
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

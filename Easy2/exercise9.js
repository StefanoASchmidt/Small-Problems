

function stringToInteger(string) {

  function toNumber(string) {
    let digits = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
    return digits[string];
  }

  let number = 0;
  for (let i = 0; i < string.length; i += 1) {
    number += toNumber(string[i]) * Math.pow(10, string.length - (i + 1)); 
  }
  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
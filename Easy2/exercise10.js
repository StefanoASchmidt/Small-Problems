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

function stringToSignedInteger(string) {
  function sign(char) {
    let signNumber = { '+': 1, '-': -1};
    return signNumber[char];
  }

  if (['+', '-'].includes(string[0])) {
    return sign(string[0]) * stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
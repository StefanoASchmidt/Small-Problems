function integerToString(num) {
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let string = '';

  if (num === 0) return '0';

  while (num > 0) {
    string = digits[num%10] + string;
    num = (num - num%10)/10; // Is it better to use Math.floor() here ?
  } 

  return string;
}

function signedIntegerToString(num) {
  if (num < 0) {
    return '-' + integerToString(num * (-1));
  } else if (num > 0) {
    return '+' + integerToString(num);
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
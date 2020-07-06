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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"

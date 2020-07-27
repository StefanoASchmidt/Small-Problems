function isDoubleNumber(number) {
  let digitArray = String(number).split('');
  let numberOfDigits = digitArray.length;

  if (numberOfDigits%2 !== 0) return false;

  for (let idx = 0; idx < numberOfDigits/2; idx += 1) {
    if (digitArray[idx] !== digitArray[idx + (numberOfDigits/2)]) {
      return false;
    }
  }

  return true;
}

function twice(number) {
  if (isDoubleNumber(number)) {
    return console.log(number);
  } else {
    return console.log(number*2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
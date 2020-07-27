/*
Write a function that counts the number of occurrences of each element in a
given array. Once counted, log each element alongside the number of
occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").
*/

const getOccurrences = array => {
  let object = {};

  array.forEach(elem => {
    if (Object.keys(object).includes(String(elem))) {
      object[String(elem)] += 1;
    } else {
      object[String(elem)] = 1;
    }
  });

  return object;
}

const countOccurrences = array => {
  let object = getOccurrences(array);
  
  let keyValues = Object.entries(object);

  for (let idx = 0; idx < keyValues.length; idx += 1) {
    console.log(`${keyValues[idx][0]} => ${keyValues[idx][1]}`);
  }

  return undefined;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
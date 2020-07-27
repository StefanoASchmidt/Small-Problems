let rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adj = rlSync.question('Enter an adjective: ');
let adv = rlSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`);
console.log(`The ${adj} ${noun} ${verb}s ${adv} over the lazy dog.`);
console.log(`The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`);

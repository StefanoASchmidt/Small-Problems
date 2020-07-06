let rlSync = require('readline-sync');
let name = rlSync.prompt({prompt: "What is your name? "});

if (name.endsWith("!")) {
  while (name.endsWith("!")) {
    name = name.slice(0, name.length - 1);
  }
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
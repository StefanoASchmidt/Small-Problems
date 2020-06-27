/*
ODD NUMBERS 
Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers
on separate lines.
*/

// My initial solution:
for (let currentNumber = 1; currentNumber <= 99; currentNumber += 1) {
  if (currentNumber%2 === 1) console.log(currentNumber);
}

// Proposed solution:
for (let currentNumber = 1; currentNumber <= 99; currentNumber += 2) {
  console.log(currentNumber);
} 

/*
I think the proposed solution is slightly better in that it involves less
computation (looping through half as many numbers and not having to check for 
parity.) One could argue that my initial solution is clearer on what is being
computed be explicitly performing a parity check, but for such a small/simple
problem I still believe that the proposed solution is better or at least more
elegant; if we were dealing with a more complex problem an arguement could be
made for a more explicit solution perhaps.
*/


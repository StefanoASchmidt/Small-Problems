function crunch(string) {
  let chars = string.split('');

  let noDuplicateChars = chars.filter((char, idx) => {
    if (idx === 0 || char !== chars[idx - 1]) {
      return true;
    }
    return false;
  });

  return noDuplicateChars.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

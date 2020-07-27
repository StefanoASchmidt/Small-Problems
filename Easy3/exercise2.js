function logInBox(string) {
  let length = string.length;

  let lines = '+-' + '-'.repeat(length) + '-+';
  let spaces = '| ' + ' '.repeat(length) + ' |';
  let text = '| ' + string + ' |';

  console.log(`${lines}\n${spaces}\n${text}\n${spaces}\n${lines}`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
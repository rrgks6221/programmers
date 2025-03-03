const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];

  let newStr = '';

  for (let i = 0; i < str.length; i += 1) {
    const isUpper = str[i] === str[i].toUpperCase();

    if (isUpper) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }

  console.log(newStr);
});

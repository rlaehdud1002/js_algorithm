let [n, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

n = parseInt(n);
let result = 0;

for (let word of arr) {
  let passed = [];
  let isGroupWord = true;

  for (let i = 0; i < word.length; i++) {
    if (passed.includes(word[i]) && word[i] !== word[i - 1]) {
      isGroupWord = false;
      break;
    }
    passed.push(word[i]);
  }

  if (isGroupWord) {
    result++;
  }
}

console.log(result);

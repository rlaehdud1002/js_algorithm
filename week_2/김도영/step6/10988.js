// 팰린드롬인지 확인하기

const fs = require("fs");

const word = fs.readFileSync(0).toString().trim();

let isCheck = 1;
const wordLength = word.length;

for (let i = 0; i < wordLength / 2; i++) {
  if (word[i] !== word[wordLength - i - 1]) {
    isCheck = 0;
    break;
  }
}

console.log(isCheck);

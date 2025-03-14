// 서로 다른 부분 문자열의 개수

const fs = require("fs");

const word = fs.readFileSync(0).toString().trim();

const answer = new Set();
let length = 1;

while (length <= word.length) {
  for (let i = 0; i < word.length - length + 1; i++) {
    answer.add(word.slice(i, i + length));
  }

  length++;
}

console.log(answer.size);

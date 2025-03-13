// 문자열 집합

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const words = new Set(input.slice(1, N + 1));
const checkWords = input.slice(N + 1);

let count = 0;

for (let word of checkWords) {
  if (words.has(word)) {
    count++;
  }
}

console.log(count);

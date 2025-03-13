// 숫자 카드

const fs = require("fs");

const [[N], haveCard, [M], checkCard] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const haveCardSet = new Set(haveCard);
let answer = "";

for (let i = 0; i < M; i++) {
  answer += haveCardSet.has(checkCard[i]) ? 1 + " " : 0 + " ";
}

console.log(answer);

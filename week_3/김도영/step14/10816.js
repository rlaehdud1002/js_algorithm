// 숫자 카드 2

const fs = require("fs");

const [[N], cardArr, [M], checkArr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const cardMap = new Map();

for (let card of cardArr) {
  cardMap.set(card, (cardMap.get(card) || 0) + 1);
}

let answer = "";

for (let check of checkArr) {
  answer += (cardMap.get(check) || 0) + " ";
}

console.log(answer);

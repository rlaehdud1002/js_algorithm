let [n, card, M, quiz] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

n = Number(n);
m = Number(M);

card = card.split(" ").map(Number);
quiz = quiz.split(" ").map(Number);

let cntMap = new Map();

for (let i = 0; i < card.length; i++) {
  cntMap.set(card[i], (cntMap.get(card[i]) || 0) + 1);
}

let result = [];

for (let i = 0; i < quiz.length; i++) {
  result.push(cntMap.get(quiz[i]) || 0);
}

console.log(result.join(" "));

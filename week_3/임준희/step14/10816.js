const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[2]);
const arrN = input[1].split(" ").map(Number);
const arrM = input[3].split(" ").map(Number);
const card = new Map();
let res = "";

for (let i = 0; i < n; i++) {
  if (card.has(arrN[i])) {
    card.set(arrN[i], card.get(arrN[i]) + 1);
  } else {
    card.set(arrN[i], 1);
  }
}

for (let i = 0; i < m; i++) {
  res += card.get(arrM[i]) ? card.get(arrM[i]) + " " : 0 + " ";
}

console.log(res);

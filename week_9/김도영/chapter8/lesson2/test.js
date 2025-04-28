// 최대 최소간의 차

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

let minCost = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < 9999; i++) {
  let cost = 0;

  for (let num of arr) {
    if (num < i) {
      cost += i - num;
    } else if (num > i + k) {
      cost += num - (i + k);
    }
  }

  minCost = Math.min(minCost, cost);
}

console.log(minCost);

// 언덕 깎기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const hills = [];

for (let i = 1; i <= n; i++) {
  hills.push(Number(input[i]));
}

let minCost = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= 100; i++) {
  let cost = 0;

  for (let j = 0; j < n; j++) {
    if (hills[j] < i) {
      cost += Math.abs(hills[j] - i) ** 2;
    } else if (hills[j] > i + 17) {
      cost += Math.abs(hills[j] - i - 17) ** 2;
    }
  }

  minCost = Math.min(minCost, cost);
}

console.log(minCost);

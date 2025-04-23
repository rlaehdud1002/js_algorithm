// 스승의 은혜 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, b] = input[0].split(" ").map(Number);
const p = input.slice(1, 1 + n).map(Number);

p.sort((a, b) => a - b);

let result = 0;
let totalCost = 0;
for (let i = 0; i < n; i++) {
  let cost = p[i];

  if (totalCost + cost > b) {
    if (totalCost + cost / 2 <= b) {
      result++;
    }

    break;
  } else {
    totalCost += cost;
    result++;
  }
}

console.log(result);

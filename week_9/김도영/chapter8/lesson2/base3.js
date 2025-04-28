// 가장 많이 나온 쌍

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const pairs = input.slice(1, 1 + m).map((line) => line.split(" ").map(Number));

let maxCount = Number.MIN_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    let count = 0;
    for (let [a, b] of pairs) {
      if ((a === i && b === j) || (a === j && b === i)) count++;
    }

    maxCount = Math.max(maxCount, count);
  }
}

console.log(maxCount);

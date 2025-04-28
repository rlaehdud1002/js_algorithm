// 수들의 최대 차

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input.slice(1, 1 + n).map(Number);

arr.sort((a, b) => a - b);

let maxCard = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[j] - arr[i] <= k) {
      maxCard = Math.max(maxCard, j - i + 1);
    }
  }
}

console.log(maxCard);

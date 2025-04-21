// 인접하지 않은 2개의 수

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

let maxSum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 2; j < n; j++) {
    maxSum = Math.max(maxSum, arr[i] + arr[j]);
  }
}

console.log(maxSum);

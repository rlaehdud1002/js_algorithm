// 구간 중 최대 합

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let maxSum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n - k + 1; i++) {
  let sum = 0;

  for (let j = 0; j < k; j++) {
    sum += arr[i + j];
  }

  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);

// 특정 수와 근접한 합

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = arr.reduce((prev, cur) => prev + cur);
let minDiff = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    sum = sum - arr[i] - arr[j];

    if (Math.abs(s - sum) < minDiff) {
      minDiff = Math.abs(s - sum);
    }

    sum = sum + arr[i] + arr[j];
  }
}

console.log(minDiff);

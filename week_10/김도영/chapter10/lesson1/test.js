// 2개씩 그룹짓기 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let minDiff = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  minDiff = Math.min(minDiff, arr[i + n] - arr[i]);
}

console.log(minDiff);

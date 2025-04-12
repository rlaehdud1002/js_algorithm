// T를 초과하는 연속 부분 수열

const fs = require("fs");

const [[n, t], arr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

let maxCount = 0;
let count = 0;

for (let i = 0; i < n; i++) {
  count = arr[i] > t ? count + 1 : 0;

  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);

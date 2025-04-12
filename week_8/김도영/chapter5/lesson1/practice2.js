// 연속되는 수 4

const fs = require("fs");

const [n, ...arr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let maxCount = 1;
let count = 1;

for (let i = 1; i < n; i++) {
  // 증가할 때
  if (arr[i] > arr[i - 1]) {
    count++;
  } else {
    count = 1;
  }

  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);

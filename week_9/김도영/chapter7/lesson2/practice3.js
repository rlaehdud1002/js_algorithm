// 등차수열

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let maxCount = 0;
for (let i = arr[0] + 1; i < arr[n - 1]; i++) {
  let count = 0;

  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (arr[j] + arr[k] === 2 * i) count++;
    }
  }

  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);

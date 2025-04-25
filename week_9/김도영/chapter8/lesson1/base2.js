// 숫자 2배 후 하나 제거하기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

let minDiff = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  arr[i] *= 2;

  for (let j = 0; j < n; j++) {
    let sum = 0;
    let prev = -1;

    for (let k = 0; k < n; k++) {
      if (k === j) continue;

      if (prev !== -1) {
        sum += Math.abs(arr[k] - arr[prev]);
      }

      prev = k;
    }

    minDiff = Math.min(minDiff, sum);
  }

  arr[i] /= 2;
}

console.log(minDiff);

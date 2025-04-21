// 모이자

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let minDistance = Infinity;

for (let i = 0; i < n; i++) {
  let total = 0;

  for (let j = 0; j < n; j++) {
    total += arr[j] * Math.abs(i - j);
  }

  minDistance = Math.min(total, minDistance);
}

console.log(minDistance);

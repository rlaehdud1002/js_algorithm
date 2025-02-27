// 최댓값

const fs = require("fs");

const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let idx = 0;
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    idx = i;
    max = arr[i];
  }
}

console.log(max);
console.log(idx + 1);

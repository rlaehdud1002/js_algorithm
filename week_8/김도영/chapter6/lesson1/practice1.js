// 이상한 진수 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[0].split("").map(Number);

let maxNumber = 0;
const length = a.length;

for (let i = 0; i < length; i++) {
  a[i] = 1 - a[i];

  let total = 0;
  let idx = length - 1;
  for (let j = 0; j < length; j++) {
    total += a[j] * 2 ** idx;
    idx--;
  }

  maxNumber = Math.max(maxNumber, total);
  a[i] = 1 - a[i];
}

console.log(maxNumber);

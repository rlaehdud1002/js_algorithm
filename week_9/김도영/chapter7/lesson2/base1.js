// 숫자들의 합 중 최대

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [x, y] = input[0].split(" ").map(Number);

let maxSum = Number.MIN_SAFE_INTEGER;

for (let num = x; num <= y; num++) {
  let sum = 0;

  const numToString = num.toString();

  for (let str of numToString) {
    sum += Number(str);
  }

  maxSum = Math.max(sum, maxSum);
}

console.log(maxSum);

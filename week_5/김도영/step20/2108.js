// 통계학

const fs = require("fs");

const [N, ...numArr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

numArr.sort((a, b) => a - b);

const total = numArr.reduce((prev, cur) => prev + cur);

let count = {};
let maxCount = 0;

for (let num of numArr) {
  count[num] = count[num] ? count[num] + 1 : 1;
  maxCount = Math.max(maxCount, count[num]);
}

const nodeArr = Object.keys(count)
  .filter((num) => count[num] === maxCount)
  .map(Number)
  .sort((a, b) => a - b);

console.log(Math.round(total / N) === -0 ? 0 : Math.round(total / N));
console.log(numArr[Math.floor(N / 2)]);
console.log(nodeArr.length > 1 ? nodeArr[1] : nodeArr[0]);
console.log(numArr[N - 1] - numArr[0]);

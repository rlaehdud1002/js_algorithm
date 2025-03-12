// 대표값2

const fs = require("fs");

const numberArr = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

const sum = numberArr.reduce((prev, cur) => prev + cur);

console.log(sum / 5);
console.log(numberArr[2]);

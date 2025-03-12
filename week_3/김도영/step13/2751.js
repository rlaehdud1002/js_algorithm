// 수 정렬하기 2

const fs = require("fs");

const [N, ...numberArr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(numberArr.sort((a, b) => a - b).join("\n"));

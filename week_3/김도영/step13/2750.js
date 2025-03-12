// 수 정렬하기

const fs = require("fs");

const [N, ...arr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(arr.sort((a, b) => a - b).join("\n"));

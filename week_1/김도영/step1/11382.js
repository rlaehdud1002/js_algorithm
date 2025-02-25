// 꼬마 정민

const fs = require("fs");

let [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(a + b + c);

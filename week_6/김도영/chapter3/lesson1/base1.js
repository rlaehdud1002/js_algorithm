// 오름 내림차순 정렬

const fs = require("fs");

const [[n], nums] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

console.log(nums.sort((a, b) => a - b).join(" "));
console.log(nums.sort((a, b) => b - a).join(" "));

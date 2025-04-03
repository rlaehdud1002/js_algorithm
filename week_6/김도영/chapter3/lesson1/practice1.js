// Top K 숫자 구하기

const fs = require("fs");

const [[n, k], nums] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

nums.sort((a, b) => a - b);
console.log(nums[k - 1]);

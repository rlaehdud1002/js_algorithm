// 2개씩 그룹짓기

const fs = require("fs");

const [[n], nums] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

nums.sort((a, b) => a - b);

let result = 0;
for (let i = 0; i < n; i++) {
  result = Math.max(result, nums[i] + nums[2 * n - i - 1]);
}

console.log(result);

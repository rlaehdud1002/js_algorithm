// 약수

const fs = require("fs");

const [[N], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

input.sort((a, b) => a - b);

console.log(input[0] * input[N - 1]);

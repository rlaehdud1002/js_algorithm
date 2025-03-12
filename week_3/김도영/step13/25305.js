// 커트라인

const fs = require("fs");

const [[n, k], point] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

console.log(point.sort((a, b) => b - a)[k - 1]);

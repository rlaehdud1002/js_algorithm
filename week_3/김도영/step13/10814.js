// 나이순 정렬

const fs = require("fs");

const [[N], ...info] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" "));

info.sort((a, b) => a[0] - b[0]);

console.log(info.map((value) => value.join(" ")).join("\n"));

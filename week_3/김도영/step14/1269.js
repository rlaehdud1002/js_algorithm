// 대칭 차집합

const fs = require("fs");

const [[A, B], arrA, arrB] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const answer = new Set([...arrA, ...arrB]).size * 2 - A - B;

console.log(answer);

// 특정 구간의 합

const fs = require("fs");

const [[N, M], A, ...queries] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

function sum(x, y) {
  let result = 0;

  for (let i = x - 1; i < y; i++) {
    result += A[i];
  }

  return result;
}

for (let [a, b] of queries) {
  console.log(sum(a, b));
}

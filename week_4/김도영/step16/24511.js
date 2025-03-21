// queuestack

const fs = require("fs");

let [[N], A, B, [M], C] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

let answer = [];

for (let i = 0; i < N; i++) {
  if (A[i] === 0) {
    answer.push(B[i]);
  }
}

console.log(answer.reverse().concat(C).slice(0, M).map(String).join(" "));

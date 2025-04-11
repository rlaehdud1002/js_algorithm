// 최대로 겹치는 구간

const fs = require("fs");

const [[n], ...segments] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const block = new Array(201).fill(0);

for (let [a, b] of segments) {
  for (let i = a; i < b; i++) {
    block[i + 100] += 1;
  }
}

console.log(Math.max(...block));

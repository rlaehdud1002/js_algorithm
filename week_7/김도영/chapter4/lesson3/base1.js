// 블럭쌓는 명령2

const fs = require("fs");

const [[n, k], ...segments] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const block = new Array(n + 1).fill(0);

for (let [a, b] of segments) {
  for (let i = a; i <= b; i++) {
    block[i] += 1;
  }
}

console.log(Math.max(...block));

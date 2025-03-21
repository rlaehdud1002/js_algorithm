// 다리 놓기

const fs = require("fs");

const [[T], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

let answer = [];
for (let [N, M] of input) {
  answer.push(Math.round(factorial(M) / (factorial(N) * factorial(M - N))));
}

console.log(answer.join("\n"));

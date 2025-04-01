// 재귀함수를 이용한 최댓값

const fs = require("fs");

const [[n], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

function findMax(n) {
  if (n === 0) return input[0];

  return Math.max(findMax(n - 1), input[n]);
}

console.log(findMax(n - 1));

// 재귀함수를 이용한 최소공배수

const fs = require("fs");

const [[n], numbers] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

function getGcd(a, b) {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
}

let result = numbers[0];
for (let i = 1; i < n; i++) {
  result = (result * numbers[i]) / getGcd(result, numbers[i]);
}

console.log(result);

// 두 정수에 대한 연산값 2

const fs = require("fs");

const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function calc(a, b) {
  if (a < b) {
    return [a + 10, b * 2];
  }

  return [a * 2, b + 10];
}

console.log(...calc(a, b));

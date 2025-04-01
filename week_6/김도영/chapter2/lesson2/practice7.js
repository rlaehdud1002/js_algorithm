// 큰 수 자리수의 합

const fs = require("fs");

const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function sum(num) {
  if (num < 10) return num;

  return sum(Math.floor(num / 10)) + (num % 10);
}

console.log(sum(a * b * c));

// 각 자리 숫자의 제곱

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function square(num) {
  if (num < 10) return num ** 2;

  return square(Math.floor(num / 10)) + (num % 10) ** 2;
}

console.log(square(n));

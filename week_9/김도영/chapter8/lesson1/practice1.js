// 수를 여러번 사용하여 특정 수 만들기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [a, b, c] = input[0].split(" ").map(Number);

let result = Number.MIN_SAFE_INTEGER;
for (let i = 0; i <= Math.floor(c / a); i++) {
  let num = a * i;

  const numB = Math.floor((c - num) / b);

  num += numB * b;

  result = Math.max(result, num);
}

console.log(result);

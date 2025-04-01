// 홀수 짝수에 따른 출력값

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function sum(num) {
  if (num === 1) return 1;
  if (num === 2) return 2;

  return sum(num - 2) + num;
}

console.log(sum(n));

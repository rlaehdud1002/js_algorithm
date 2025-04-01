// 재귀함수를 이용한 피보나치 수

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

function fibo(num) {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibo(num - 1) + fibo(num - 2);
}

console.log(fibo(n));

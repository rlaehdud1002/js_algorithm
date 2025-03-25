// 피보나치 수 5

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

function fibo(n) {
  if (n >= 0 && n <= 1) {
    return n;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(N));

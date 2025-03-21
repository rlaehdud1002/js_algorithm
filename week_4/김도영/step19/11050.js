// 이항 계수 1

const fs = require("fs");

const [N, K] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(N) / (factorial(K) * factorial(N - K)));

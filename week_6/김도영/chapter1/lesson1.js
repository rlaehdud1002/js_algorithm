// 최소공배수 구하기

const fs = require("fs");

const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function getGcd(a, b) {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
}

console.log((n * m) / getGcd(n, m));

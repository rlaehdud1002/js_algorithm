// 최소공배수

const fs = require("fs");

const [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function getGcd(a, b) {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
}

const gcd = getGcd(A, B);

console.log((A * B) / gcd);

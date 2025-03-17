// 분수 합

const fs = require("fs");

const [[a1, b1], [a2, b2]] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

function getGcd(a, b) {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
}

const x = a1 * b2 + a2 * b1;
const y = b1 * b2;
const gcd = x > y ? getGcd(x, y) : getGcd(y, x);

console.log(x / gcd, y / gcd);

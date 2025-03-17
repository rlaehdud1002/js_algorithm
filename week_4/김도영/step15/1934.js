// 최소공배수

const fs = require("fs");

const [[T], ...input] = fs
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

for (let [a, b] of input) {
  const gcd = getGcd(a, b);

  console.log((a * b) / gcd);
}

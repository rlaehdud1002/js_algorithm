let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let [a, b] = arr[0];
let [c, d] = arr[1];

function getGCD(m, n) {
  while (n !== 0) {
    [m, n] = [n, m % n];
  }
  return m;
}

// 분모의 최소공배수
let lcm = (b * d) / getGCD(b, d);

let A = a * (lcm / b);
let B = c * (lcm / d);

let numerator = A + B;
let gcd = getGCD(numerator, lcm);

let finalNumerator = numerator / gcd;
let finalDenominator = lcm / gcd;

console.log(finalNumerator, finalDenominator);

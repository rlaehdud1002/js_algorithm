const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function f(arr, idx) {
  if (idx === n - 1) return arr[idx];
  return lcm(arr[idx], f(arr, idx + 1));
}

console.log(f(numbers, 0));

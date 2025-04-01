// 재귀함수를 이용한 최소공배수

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function findLcm(arr, idx) {
  if (idx === n - 1) return arr[idx];

  return lcm(arr[idx], findLcm(arr, idx + 1));
}

console.log(findLcm(numbers, 0));

// 다음 소수

const fs = require("fs");

const [n, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function nextPrime(num) {
  if (num <= 2) return 2;

  let start = num % 2 === 0 ? num + 1 : num;

  for (let i = start; ; i += 2) {
    if (isPrime(i)) {
      return i;
    }
  }
}

let result = "";
for (let num of input) {
  result += nextPrime(num) + "\n";
}

console.log(result);

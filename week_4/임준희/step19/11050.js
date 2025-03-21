const [n, k] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function combination(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

console.log(combination(n, k));

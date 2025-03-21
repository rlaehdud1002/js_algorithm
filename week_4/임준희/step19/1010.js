const input = require("fs").readFileSync(0).toString().trim().split("\n");
const t = parseInt(input[0]);

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function combination(n, r) {
  return Math.round(factorial(n) / (factorial(r) * factorial(n - r)));
}

const res = [];

for (let i = 1; i <= t; i++) {
  const [r, n] = input[i].split(" ").map(Number);
  if (r === n) {
    res.push(1);
    continue;
  }
  res.push(combination(n, r));
}

console.log(res.join("\n"));

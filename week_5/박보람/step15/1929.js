let [n, m] = require("fs")
  .readFileSync("input.txt", "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let result = [];

for (let i = n; i <= m; i++) {
  if (isPrime(i)) result.push(i);
}

console.log(result.join("\n"));

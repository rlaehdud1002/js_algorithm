let [n, ...arr] = require("fs")
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split("\n");

n = Number(n);
arr = arr.map(Number);

const max = 1000000;
const isPrime = Array(max + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i <= Math.sqrt(max); i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

const result = [];

for (let n of arr) {
  let count = 0;
  for (let i = 2; i <= n / 2; i++) {
    if (isPrime[i] && isPrime[n - i]) {
      count++;
    }
  }
  result.push(count);
}

console.log(result.join("\n"));

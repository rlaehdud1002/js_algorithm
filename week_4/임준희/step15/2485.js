const [n, ...trees] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const distances = [];
for (let i = 1; i < n; i++) {
  distances.push(trees[i] - trees[i - 1]);
}

function gcd(a, b) {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

let temp = distances[0];
for (let i = 1; i < distances.length; i++) {
  temp = gcd(temp, distances[i]);
}

let res = 0;
for (let i = 0; i < distances.length; i++) {
  res += distances[i] / temp - 1;
}

console.log(res);

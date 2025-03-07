const [n, k] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) arr.push(i);
}
console.log(arr[k - 1] ?? 0);

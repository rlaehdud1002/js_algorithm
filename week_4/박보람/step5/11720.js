let [n, arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

n = Number(n);
arr = arr.split("").map(Number);
let sum = 0;

for (let i = 0; i < n; i++) {
  sum += arr[i];
}

console.log(sum);

let [input, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
let [n, m] = input.split(" ").map(Number);
arr = arr.map((line) => line.split(" ").map(Number));
let bucket = Array(n + 1).fill(0);

for (let t = 0; t < m; t++) {
  [i, j, k] = arr[t];
  for (let idx = i; idx <= j; idx++) {
    bucket[idx] = k;
  }
}

console.log(bucket.slice(1).join(" "));

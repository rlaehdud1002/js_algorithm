let [T, ...input] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map((line) => line.replace("\r", ""));
input = input.map((line) => line.split(" ").map(Number));

let [n, m] = T.split(" ").map(Number);

let bucket = Array.from({ length: n }, (v, i) => i + 1);

for (let i = 0; i < m; i++) {
  let [a, b] = input[i];

  let temp = bucket[a - 1];
  bucket[a - 1] = bucket[b - 1];
  bucket[b - 1] = temp;
}

console.log(bucket.join(" "));

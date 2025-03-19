let [input, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input.split(" ").map(Number);
arr = arr.map((v) => v.split(" ").map(Number));

let bucket = Array.from({ length: n + 1 }, (v, i) => i);

for (let t = 0; t < m; t++) {
  let [i, j] = arr[t];
  let temp = bucket.slice(i, j + 1).reverse();
  bucket.splice(i, j - i + 1, ...temp);
}

console.log(bucket.slice(1).join(" "));

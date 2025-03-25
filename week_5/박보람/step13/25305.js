let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", "").split(" ").map(Number));

let [n, k] = arr[0];

sorted = arr[1].sort((a, b) => b - a);
console.log(sorted[k - 1]);

let [n, arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
arr = arr.split(" ").map(Number);

console.log(Math.min(...arr), Math.max(...arr));

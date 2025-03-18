let fs = require("fs");

let [a, b] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(a - b);

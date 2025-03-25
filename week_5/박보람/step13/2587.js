let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(arr.reduce((acc, cur) => acc + cur, 0) / 5);
console.log(arr.sort((a, b) => a - b)[2]);

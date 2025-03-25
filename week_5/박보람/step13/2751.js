let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let n = arr.shift();

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));

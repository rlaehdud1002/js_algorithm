let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("")
  .map(Number);

arr.sort((a, b) => b - a);

console.log(arr.join(""));

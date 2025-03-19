let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input)) + 1);

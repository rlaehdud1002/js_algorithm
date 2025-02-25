const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(a * (b % 10));
console.log(a * (Math.floor(b / 10) % 10));
console.log(a * Math.floor(b / 100));
console.log(a * b);

// Time to Time

const fs = require("fs");

const [a, b, c, d] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(c * 60 + d - a * 60 - b);

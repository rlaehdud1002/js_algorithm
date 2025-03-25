let [a, b, c, d, e, f] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let x = (c * e - b * f) / (a * e - b * d);
let y = (c * d - a * f) / (b * d - a * e);

console.log(parseInt(x), parseInt(y));

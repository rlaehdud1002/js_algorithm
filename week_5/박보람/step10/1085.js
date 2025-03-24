let [x, y, w, h] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = [];
result.push(Math.abs(w - x), Math.abs(y - h), x, y);
console.log(Math.min(...result));

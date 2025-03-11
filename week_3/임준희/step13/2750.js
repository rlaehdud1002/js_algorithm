const [n, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));

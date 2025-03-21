let [n, m] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

console.log(parseInt(n, Number(m)));

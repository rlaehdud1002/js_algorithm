const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const res = new Set(input.map((x) => x % 42)).size;

console.log(res);

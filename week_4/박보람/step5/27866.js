let [S, i] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

Number(i);

console.log(S[i - 1]);

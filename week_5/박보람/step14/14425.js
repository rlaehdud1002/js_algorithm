let [input, ...string] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace(/\r/g, ""));

let [N, M] = input.split(" ").map(Number);
let group = new Set(string.slice(0, N));
let check = string.slice(N, string.length);

let cnt = check.reduce((acc, word) => acc + (group.has(word) ? 1 : 0), 0);

console.log(cnt);

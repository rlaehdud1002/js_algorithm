let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let N = input[0][0];
let card = new Set(input[1]);
let M = input[2][0];
let check = input[3];

let result = check.map((num) => (card.has(num) ? 1 : 0));
console.log(result.join(" "));

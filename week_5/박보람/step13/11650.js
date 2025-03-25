let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", "").split(" ").map(Number));

let n = arr.shift();

arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

console.log(arr.map((el) => el.join(" ")).join("\n"));

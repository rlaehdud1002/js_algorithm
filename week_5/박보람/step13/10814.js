let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", "").split(" "));

arr.shift();

arr.sort((a, b) => Number(a[0]) - Number(b[0]));

console.log(arr.map((el) => el.join(" ")).join("\n"));

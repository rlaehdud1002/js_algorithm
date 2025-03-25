let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", ""));

arr.shift();
arr = [...new Set(arr)];
arr.sort((a, b) =>
  a.length !== b.length ? a.length - b.length : a.localeCompare(b)
);

console.log(arr.join("\n"));

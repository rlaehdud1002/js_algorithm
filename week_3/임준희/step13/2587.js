const arr = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const sum = arr.reduce((acc, cur) => acc + cur, 0);
arr.sort((a, b) => a - b);

console.log(sum / arr.length + "\n" + arr[Math.floor(arr.length / 2)]);

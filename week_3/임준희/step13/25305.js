const [[n, k], arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

arr.sort((a, b) => b - a);

console.log(arr[k - 1]);

const [n, arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x, i) => (i === 0 ? parseInt(x) : x.split(" ").map(Number)));

arr.sort((a, b) => a - b);

console.log(arr[0] * arr[arr.length - 1]);

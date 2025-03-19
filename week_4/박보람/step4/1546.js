let [N, arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

Number(N);
arr = arr.split(" ").map(Number);

let M = Math.max(...arr);
arr = arr.map((v) => (v / M) * 100);

let average = arr.reduce((acc, cur) => acc + cur) / N;
console.log(average);

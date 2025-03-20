let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let chess = [1, 1, 2, 2, 2, 8];
let result = [];
for (let i = 0; i < 6; i++) {
  result.push(chess[i] - arr[i]);
}

console.log(result.join(" "));

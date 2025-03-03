const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [1, 1, 2, 2, 2, 8];
let res = "";

for (let i = 0; i < input.length; i++) {
  res += arr[i] - input[i] + " ";
}

console.log(res);

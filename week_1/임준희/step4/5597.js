const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = Array(30).fill(false);

for (let i = 0; i <= 27; i++) {
  arr[input[i] - 1] = true;
}

console.log(arr.indexOf(false) + 1);
console.log(arr.lastIndexOf(false) + 1);

let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let n = +input[0];
let arr = input[1].split(" ").map(Number);
let set = [...new Set(arr)].sort((a, b) => a - b);

const object = new Map();
const result = [];

set.forEach((item, index) => (object[item] = index));

for (let i = 0; i < n; i++) {
  result.push(object[arr[i]]);
}
console.log(result.join(" "));

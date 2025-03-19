let input = require("fs").readFileSync("input.txt").toString().split("\n");

let n = parseInt(input[0]);
let arr = input[1].split(" ").map(Number);
let v = parseInt(input[2]);

let count = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] === v) {
    count++;
  }
}

console.log(count);

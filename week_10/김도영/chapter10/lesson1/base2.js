// 최소 와이파이 수

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

let result = 0;
let distance = 0;

while (distance < n) {
  if (arr[distance] === 1) {
    result++;
    distance += 2 * m + 1;
  } else {
    distance++;
  }
}

console.log(result);

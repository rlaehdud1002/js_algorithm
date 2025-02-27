// 최소, 최대

const fs = require("fs");

const [N, arr] = fs.readFileSync(0).toString().trim().split("\n");

const newArr = arr.split(" ").map(Number);

let max = newArr[0];
let min = newArr[0];

for (let i = 0; i < N; i++) {
  if (newArr[i] > max) {
    max = newArr[i];
  }

  if (newArr[i] < min) {
    min = newArr[i];
  }
}

console.log(min, max);

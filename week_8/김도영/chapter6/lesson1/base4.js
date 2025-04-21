// 최고의 13 위치

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map((line) => line.trim().split(" ").map(Number));

let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 2; j++) {
    let count = 0;

    for (let k = 0; k < 3; k++) {
      if (arr[i][j + k]) count++;
    }

    result = Math.max(result, count);
  }
}

console.log(result);

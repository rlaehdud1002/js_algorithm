// 일렬로 서있는 소 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

let result = 0;

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      if (arr[i] <= arr[j] && arr[j] <= arr[k]) result++;
    }
  }
}

console.log(result);

// 훌륭한 점프

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let maxNum = arr[0];
let now = 0;

while (now !== n - 1) {
  let minNum = arr[now + 1];
  let minIdx = now + 1;

  for (let i = 1; i <= k; i++) {
    if (arr[now + i] < minNum) {
      minNum = arr[now + i];
      minIdx = now + i;
    }
  }

  now = minIdx;
  maxNum = Math.max(maxNum, arr[now]);
}

console.log(maxNum);

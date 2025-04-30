// 수열의 순서 바꾸기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const blocks = input[1].trim().split(" ").map(Number);

let count = 0;
for (let i = n - 1; i > 0; i--) {
  if (blocks[i] > blocks[i - 1]) {
    count++;
  } else {
    break;
  }
}

console.log(n - count - 1);

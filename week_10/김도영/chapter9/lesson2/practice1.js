// 달리자

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

let count = 0;
for (let i = 0; i < n; i++) {
  if (a[i] > b[i]) {
    const num = a[i] - b[i];
    a[i] -= num;
    a[i + 1] += num;

    count += num;
  }
}

console.log(count);

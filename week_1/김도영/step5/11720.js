// 숫자의 합

const fs = require("fs");

const [N, numArr] = fs.readFileSync(0).toString().trim().split("\n");

let total = 0;

for (let i = 0; i < N; i++) {
  total += Number(numArr[i]);
}

console.log(total);

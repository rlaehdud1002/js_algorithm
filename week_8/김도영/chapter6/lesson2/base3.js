// 특정 구간의 원소 평균값

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j <= n; j++) {
    const sliceArr = arr.slice(i, j);

    const sumArr = sliceArr.reduce((prev, cur) => prev + cur);
    const avg = sumArr / sliceArr.length;

    if (sliceArr.includes(avg)) result++;
  }
}

console.log(result);

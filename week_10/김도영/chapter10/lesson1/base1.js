// 움직이는 블록

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);

const avg = blocks.reduce((prev, cur) => prev + cur) / n;

let count = 0;
for (let block of blocks) {
  if (block > avg) count += block - avg;
}

console.log(count);

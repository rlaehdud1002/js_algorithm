// 구역 청소

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const [c, d] = input[1].split(" ").map(Number);

const clean = new Array(101).fill(0);
let count = 0;

for (let i = a; i < b; i++) {
  if (!clean[i]) {
    count++;
    clean[i] = 1;
  }
}

for (let i = c; i < d; i++) {
  if (!clean[i]) {
    count++;
    clean[i] = 1;
  }
}

console.log(count);

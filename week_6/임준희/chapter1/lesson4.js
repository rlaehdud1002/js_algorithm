// 특정 구간의 합

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map((line) => line.split(" ").map(Number));

const res = [];

function solved(a, b) {
  let sum = 0;
  for (let i = a - 1; i <= b - 1; i++) {
    sum += A[i];
  }
  res.push(sum);
}

for (let i = 0; i < m; i++) {
  solved(queries[i][0], queries[i][1]);
}

console.log(res.join("\n"));

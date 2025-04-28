// 전부 겹치는 선분

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(" ").map(Number));
}

const line = new Array(101).fill(0);

for (let [a, b] of segments) {
  for (let i = a; i <= b; i++) {
    line[i]++;
  }
}

let result = "No";
for (let i = 0; i < 101; i++) {
  if (line[i] === n) result = "Yes";
}

console.log(result);

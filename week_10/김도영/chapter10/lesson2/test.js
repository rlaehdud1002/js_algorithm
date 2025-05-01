// 전부 포함하는 선분

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const x1 = [];
const x2 = [];
for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  x1.push(a);
  x2.push(b);
}

let minDistance = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  let start = 100;
  let end = 1;

  for (let j = 0; j < n; j++) {
    if (i === j) continue;

    start = Math.min(start, x1[j]);
    end = Math.max(end, x2[j]);
  }

  minDistance = Math.min(minDistance, end - start);
}

console.log(minDistance);

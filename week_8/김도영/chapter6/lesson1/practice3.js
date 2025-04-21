// 원 모양으로 되어있는 방

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let minDistance = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  let distance = 0;
  let move = 1;

  for (let j = 1; j < n; j++) {
    let idx = (i + j) % n;

    distance += arr[idx] * move;
    move++;
  }

  minDistance = Math.min(minDistance, distance);
}

console.log(minDistance);

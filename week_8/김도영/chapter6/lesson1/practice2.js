// 마라톤 중간에 택시타기 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = Array.from({ length: n }, (_, i) =>
  input[i + 1].split(" ").map(Number)
);

let minDistance = Number.MAX_SAFE_INTEGER;

for (let i = 1; i < n - 1; i++) {
  let totalDistance = 0;
  let prev = 0;

  for (let j = 1; j < n; j++) {
    if (i === j) continue;

    totalDistance +=
      Math.abs(arr[prev][0] - arr[j][0]) + Math.abs(arr[prev][1] - arr[j][1]);
    prev = j;
  }

  minDistance = Math.min(totalDistance, minDistance);
}

console.log(minDistance);

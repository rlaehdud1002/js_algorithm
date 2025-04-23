// 가장 가까운 두 점 사이의 거리

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));

let minDistance = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const distance =
      (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2;

    minDistance = Math.min(distance, minDistance);
  }
}

console.log(minDistance);

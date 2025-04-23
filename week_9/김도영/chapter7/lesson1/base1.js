// 좌표평면 위의 특정 구역 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift());
const points = input.slice(0, n).map((line) => line.split(" ").map(Number));

let minSquare = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  let minX = Number.MAX_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;

  for (let j = 0; j < n; j++) {
    if (i === j) continue;

    minX = Math.min(minX, points[j][0]);
    minY = Math.min(minY, points[j][1]);
    maxX = Math.max(maxX, points[j][0]);
    maxY = Math.max(maxY, points[j][1]);
  }

  const square = (maxX - minX) * (maxY - minY);
  minSquare = Math.min(square, minSquare);
}

console.log(minSquare);

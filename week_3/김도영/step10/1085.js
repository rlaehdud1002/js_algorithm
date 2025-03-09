// 직사각형에서 탈출

const fs = require("fs");

const [x, y, w, h] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 가로 확인
const minX = Math.min(x, w - x);

// 세로 확인
const minY = Math.min(y, h - y);

console.log(Math.min(minX, minY));

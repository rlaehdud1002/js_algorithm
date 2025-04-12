// 잔해물을 덮기 위한 사각형의 최소 넓이

const fs = require("fs");

const [rect1, rect2] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const OFFSET = 1000;

const board = Array.from(new Array(2 * OFFSET + 1), () =>
  new Array(2 * OFFSET + 1).fill(0)
);

for (let i = rect1[1] + OFFSET; i < rect1[3] + OFFSET; i++) {
  for (let j = rect1[0] + OFFSET; j < rect1[2] + OFFSET; j++) {
    board[i][j] = 1;
  }
}

for (let i = rect2[1] + OFFSET; i < rect2[3] + OFFSET; i++) {
  for (let j = rect2[0] + OFFSET; j < rect2[2] + OFFSET; j++) {
    board[i][j] = 0;
  }
}

let maxX = 0,
  maxY = 0,
  minX = 2 * OFFSET,
  minY = 2 * OFFSET;

let isExist = false;
for (let i = 0; i < 2 * OFFSET + 1; i++) {
  for (let j = 0; j < 2 * OFFSET + 1; j++) {
    if (board[i][j] === 1) {
      isExist = true;
      minX = Math.min(minX, i);
      maxX = Math.max(maxX, i);
      minY = Math.min(minY, j);
      maxY = Math.max(maxY, j);
    }
  }
}

console.log(isExist ? (maxX - minX + 1) * (maxY - minY + 1) : 0);

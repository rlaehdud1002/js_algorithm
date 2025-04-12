// 사각형의 총 넓이 2

const fs = require("fs");

const [[n], ...rects] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const board = Array.from(new Array(201), () => new Array(201).fill(0));
const OFFSET = 100;

for (let rect of rects) {
  const [x1, y1, x2, y2] = rect;
  for (let x = x1 + OFFSET; x < x2 + OFFSET; x++) {
    for (let y = y1 + OFFSET; y < y2 + OFFSET; y++) {
      board[x][y] = 1;
    }
  }
}

let result = 0;
for (let i = 0; i < 201; i++) {
  for (let j = 0; j < 201; j++) {
    if (board[i][j]) result++;
  }
}

console.log(result);

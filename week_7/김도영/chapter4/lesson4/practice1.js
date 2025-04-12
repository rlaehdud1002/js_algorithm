// 색종이의 총 넓이

const fs = require("fs");

const [[n], ...rects] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const OFFSET = 100;

const board = Array.from(new Array(2 * OFFSET + 1), () =>
  new Array(2 * OFFSET + 1).fill(0)
);

let result = 0;
for (let rect of rects) {
  const [x, y] = rect;

  for (let i = y + OFFSET; i < y + OFFSET + 8; i++) {
    for (let j = x + OFFSET; j < x + OFFSET + 8; j++) {
      if (!board[i][j]) {
        board[i][j] = 1;
        result++;
      }
    }
  }
}

console.log(result);

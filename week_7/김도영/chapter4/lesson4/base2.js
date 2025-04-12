// 겹치지 않는 사각형의 넓이

const fs = require("fs");

const [rectA, rectB, rectM] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const OFFSET = 1000;

const board = Array.from(new Array(2 * OFFSET + 1), () =>
  new Array(2 * OFFSET + 1).fill(0)
);

let result = 0;
function check(rect) {
  const [x1, y1, x2, y2] = rect;

  for (let i = y1 + OFFSET; i < y2 + OFFSET; i++) {
    for (let j = x1 + OFFSET; j < x2 + OFFSET; j++) {
      if (!board[i][j]) {
        board[i][j] = 1;
        result++;
      }
    }
  }
}

check(rectA);
check(rectB);

const [a, b, c, d] = rectM;
for (let i = b + OFFSET; i < d + OFFSET; i++) {
  for (let j = a + OFFSET; j < c + OFFSET; j++) {
    if (board[i][j]) {
      board[i][j] = 0;
      result--;
    }
  }
}

console.log(result);

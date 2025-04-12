// 계속 중첩되는 사각형

const fs = require("fs");

const [[n], ...rectangles] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const OFFSET = 100;

const board = Array.from(new Array(2 * OFFSET + 1), () =>
  new Array(2 * OFFSET + 1).fill(null)
);

let result = 0;
let color = "red";
for (let rectangle of rectangles) {
  const [x1, y1, x2, y2] = rectangle;

  for (let i = y1 + OFFSET; i < y2 + OFFSET; i++) {
    for (let j = x1 + OFFSET; j < x2 + OFFSET; j++) {
      if (!board[i][j]) {
        board[i][j] = color;

        // 색이 없다가 파란색으로 바뀐 경우
        if (board[i][j] === "blue") result++;
        continue;
      }

      if (board[i][j] !== color) {
        // 현재 빨간색인데 파란색으로 바뀌는 경우
        if (board[i][j] === "red") {
          board[i][j] = color;
          result++;
        } else {
          // 현재 파란색인데 빨간색으로 바뀌는 경우
          board[i][j] = color;
          result--;
        }
      }
    }
  }

  color = color === "red" ? "blue" : "red";
}

console.log(result);

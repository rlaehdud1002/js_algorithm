// 이동경로상에 있는 모든 숫자 더하기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, t] = input[0].split(" ").map(Number);
const commands = input[1];
const board = input.slice(2, 2 + n).map((row) => row.split(" ").map(Number));

// 상 우 하 좌
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let d = 0;

const now = [Math.floor(n / 2), Math.floor(n / 2)];

function isRange(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

let result = board[now[0]][now[1]];
for (let command of commands) {
  switch (command) {
    case "F":
      const x = now[0] + dx[d];
      const y = now[1] + dy[d];

      if (isRange(x, y)) {
        now[0] = x;
        now[1] = y;

        result += board[x][y];
      }

      break;
    case "L":
      d = (d - 1 + 4) % 4;
      break;
    case "R":
      d = (d + 1) % 4;
      break;
  }
}

console.log(result);

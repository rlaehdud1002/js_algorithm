// 격자 위의 편안한 상태

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
  moves.push(input[i].split(" ").map(Number));
}

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const board = Array.from(new Array(n), () => new Array(n).fill(0));

function isRange(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

const result = new Array();
for (let [r, c] of moves) {
  board[r - 1][c - 1] = 1;
  let count = 0;

  for (let d = 0; d < 4; d++) {
    const nr = r - 1 + dr[d];
    const nc = c - 1 + dc[d];

    if (isRange(nr, nc) && board[nr][nc]) count++;
  }

  result.push(count === 3 ? 1 : 0);
}

console.log(result.join("\n"));

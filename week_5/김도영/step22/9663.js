// N-Queen

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

let answer = 0;

function isValid(board, row) {
  for (let i = 1; i < row; i++) {
    if (board[i] === board[row]) return false; // 같은 라인
    if (Math.abs(i - row) === Math.abs(board[i] - board[row])) return false; // 같은 대각선
  }

  return true;
}

function dfs(board, row) {
  if (row === N) {
    answer++;
  } else {
    for (let i = 1; i <= N; i++) {
      board[row + 1] = i;

      if (isValid(board, row + 1)) {
        dfs(board, row + 1);
      }
    }
  }
}

const board = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  board[1] = i;
  dfs(board, 1);
}

console.log(answer);

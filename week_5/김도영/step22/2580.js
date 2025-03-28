// 스도쿠

const fs = require("fs");

const board = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" ").map(Number));

let zero = new Array();
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (board[i][j] === 0) zero.push([i, j]);
  }
}

function isValid(x, y, value) {
  for (let i = 0; i < 9; i++) {
    if (board[i][y] === value || board[x][i] === value) return false; // 가로 세로 확인
  }

  let boxX = Math.floor(x / 3) * 3;
  let boxY = Math.floor(y / 3) * 3;

  for (let i = boxX; i < boxX + 3; i++) {
    for (let j = boxY; j < boxY + 3; j++) {
      if (board[i][j] === value) return false;
    }
  }

  return true;
}

function dfs(idx) {
  if (idx === zero.length) {
    console.log(board.map((value) => value.join(" ")).join("\n"));
    process.exit();
  }

  let zeroX = zero[idx][0];
  let zeroY = zero[idx][1];

  for (let i = 1; i <= 9; i++) {
    if (isValid(zeroX, zeroY, i)) {
      board[zeroX][zeroY] = i;
      dfs(idx + 1);
      board[zeroX][zeroY] = 0;
    }
  }
}

dfs(0);

// 흰검 칠하기

const fs = require("fs");

const [n, ...commands] = fs.readFileSync(0).toString().trim().split("\n");

class Color {
  constructor(white = 0, black = 0, now = null) {
    this.white = white;
    this.black = black;
    this.now = now;
  }
}

const board = Array.from({ length: 200001 }, () => new Color());

let now = 100000;
for (let command of commands) {
  let [size, direction] = command.split(" ");
  size = Number(size);

  if (direction === "R") {
    while (size > 0) {
      board[now].black += 1;
      board[now].now = "black";
      size -= 1;

      if (size) {
        now += 1;
      }
    }
  } else {
    while (size > 0) {
      board[now].white += 1;
      board[now].now = "white";
      size -= 1;

      if (size) {
        now -= 1;
      }
    }
  }
}

let whiteCount = 0;
let blackCount = 0;
let grayCount = 0;
for (let node of board) {
  if (node.white >= 2 && node.black >= 2) {
    grayCount++;
  } else {
    if (node.now === "black") blackCount++;
    if (node.now === "white") whiteCount++;
  }
}

console.log(whiteCount, blackCount, grayCount);

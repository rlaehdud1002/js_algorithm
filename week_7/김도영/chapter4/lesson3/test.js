// 신기한 타일 뒤집기

const fs = require("fs");

const [n, ...commands] = fs.readFileSync(0).toString().trim().split("\n");

const board = new Array(200001).fill(null);

let now = 100000;

for (let command of commands) {
  let [size, direction] = command.split(" ");
  size = Number(size);

  if (direction === "R") {
    while (size) {
      board[now] = "black";
      size--;

      if (size) {
        now++;
      }
    }
  } else {
    while (size) {
      board[now] = "white";
      size--;

      if (size) {
        now--;
      }
    }
  }
}

let whiteCount = 0;
let blackCount = 0;
for (let node of board) {
  if (node) {
    node === "black" ? blackCount++ : whiteCount++;
  }
}

console.log(whiteCount, blackCount);

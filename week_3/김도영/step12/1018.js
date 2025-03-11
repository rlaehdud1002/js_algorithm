// 체스판

const fs = require("fs");

const [input, ...boardInput] = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input.split(" ").map(Number);
const board = boardInput.map((value) => value.split(""));

let count = Number.MAX_VALUE;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let countA = 0;
    let countB = 0;

    for (let a = 0; a < 8; a++) {
      for (let b = 0; b < 8; b++) {
        const nowA = (a + b) % 2 === 0 ? "W" : "B";
        const nowB = (a + b) % 2 === 0 ? "B" : "W";

        if (board[i + a][j + b] !== nowA) {
          countA++;
        }

        if (board[i + a][j + b] !== nowB) {
          countB++;
        }
      }
    }

    count = Math.min(count, countA, countB);
  }
}

console.log(count);

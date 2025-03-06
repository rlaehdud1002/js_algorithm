// 색종이

const fs = require("fs");

const [N, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

const board = Array.from(new Array(100), () => new Array(100).fill(0));

for (let i = 0; i < N; i++) {
  const [a, b] = arr[i].split(" ").map(Number);

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (!board[x + a - 1][y + b - 1]) {
        board[x + a - 1][y + b - 1] = 1;
      }
    }
  }
}

let total = 0;
for (let x = 0; x < 100; x++) {
  for (let y = 0; y < 100; y++) {
    if (board[x][y]) {
      total++;
    }
  }
}

console.log(total);

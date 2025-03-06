// 최댓값

const fs = require("fs");

const board = fs.readFileSync(0).toString().trim().split("\n");

let max = board[0][0];
let idx_i = 0;
let idx_j = 0;

for (let i = 0; i < 9; i++) {
  const matrix = board[i].split(" ").map(Number);
  for (let j = 0; j < 9; j++) {
    if (Number(matrix[j]) > max) {
      max = matrix[j];
      idx_i = i;
      idx_j = j;
    }
  }
}

console.log(max);
console.log(idx_i + 1, idx_j + 1);

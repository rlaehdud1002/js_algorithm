// 체크판위에서 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const grid = input.slice(1).map((line) => line.trim().split(" "));

let result = 0;

for (let i = 1; i < R; i++) {
  for (let j = 1; j < C; j++) {
    for (let k = i + 1; k < R - 1; k++) {
      for (let l = j + 1; l < C - 1; l++) {
        if (
          grid[0][0] !== grid[i][j] &&
          grid[i][j] !== grid[k][l] &&
          grid[k][l] !== grid[R - 1][C - 1]
        )
          result++;
      }
    }
  }
}

console.log(result);

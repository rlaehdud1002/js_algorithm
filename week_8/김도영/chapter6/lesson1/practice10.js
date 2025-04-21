// 최고의 13 위치 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

let maxCoin = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 2; j++) {
    let coin = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];

    for (let k = i; k < n; k++) {
      const startL = i === k ? j + 3 : 0;

      for (let l = startL; l < n - 2; l++) {
        coin += grid[k][l] + grid[k][l + 1] + grid[k][l + 2];
        maxCoin = Math.max(maxCoin, coin);
        coin -= grid[k][l] + grid[k][l + 1] + grid[k][l + 2];
      }
    }
  }
}

console.log(maxCoin);

// 1이 3개 이상 있는 위치

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.split(" ").map(Number));

const di = [0, 1, 0, -1];
const dj = [1, 0, -1, 0];

let result = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let count = 0;
    for (let d = 0; d < 4; d++) {
      const ni = i + di[d];
      const nj = j + dj[d];

      // 인덱스 체크
      if (0 <= ni && ni < n && 0 <= nj && nj < n) {
        if (grid[ni][nj]) count++;
      }
    }

    if (count >= 3) result++;
  }
}

console.log(result);

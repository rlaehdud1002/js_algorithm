// 선분 3개 지우기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input
  .slice(1, n + 1)
  .map((line) => line.split(" ").map(Number));

let result = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      const board = new Array(101).fill(0);

      let check = true;
      for (let l = 0; l < n; l++) {
        if (l === i || l === j || l === k) continue;

        const [start, end] = segments[l];

        for (let idx = start; idx <= end; idx++) {
          if (!board[idx]) {
            board[idx] = 1;
          } else {
            check = false;
            break;
          }
        }
      }

      if (check) result++;
    }
  }
}

console.log(result);

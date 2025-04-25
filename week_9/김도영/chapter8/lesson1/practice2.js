// 3개의 선 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));

let result = false;

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    for (let k = 0; k <= 10; k++) {
      // x축과 평행한 3개
      let possible = true;
      for (let point of points) {
        if (point[0] !== i && point[0] !== j && point[0] !== k) {
          possible = false;
        }
      }

      if (possible) result = true;

      // x축과 평행 2개, y축과 평행 1개
      possible = true;
      for (let point of points) {
        if (point[0] !== i && point[0] !== j && point[1] !== k) {
          possible = false;
        }
      }

      if (possible) result = true;

      // x축과 평행 1개, y축과 평행 2개
      possible = true;
      for (let point of points) {
        if (point[0] !== i && point[1] !== j && point[1] !== k) {
          possible = false;
        }
      }

      if (possible) result = true;

      // y축과 평행 3개
      possible = true;
      for (let point of points) {
        if (point[1] !== i && point[1] !== j && point[1] !== k) {
          possible = false;
        }
      }

      if (possible) result = true;
    }
  }
}

console.log(result ? 1 : 0);

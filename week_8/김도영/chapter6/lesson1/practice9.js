// 숨은 단어 찾기 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1, n + 1);

// 오른쪽 가로, 왼쪽 가로, 위쪽 세로, 아래쪽 세로, 우상향 대각선, 우하향 대각선, 좌상향 대각선, 좌하향 대각선
const di = [0, 0, -1, 1, -1, 1, -1, 1];
const dj = [-1, 1, 0, 0, 1, 1, -1, -1];

let result = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (let d = 0; d < 8; d++) {
      let word = "";

      for (let k = 0; k < 3; k++) {
        const ni = i + k * di[d];
        const nj = j + k * dj[d];

        if (0 <= ni && ni < n && 0 <= nj && nj < m) {
          word += arr[ni][nj];
        }
      }

      if (word === "LEE") {
        result++;
      }
    }
  }
}

console.log(result);

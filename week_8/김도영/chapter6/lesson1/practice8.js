// 오목

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const arr = input.slice(0, 19).map((row) => row.split(" ").map(Number));

// 검 : 1, 흰 : 2
// 가로, 세로, 왼쪽 대각선, 오른쪽 대각선 -> 시작점 기준
const di = [0, 1, 1, 1];
const dj = [1, 0, -1, 1];

let result = 0;
let resultNode;
for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    const now = arr[i][j];

    if (now !== 0) {
      // 가로, 세로, 대각선 확인
      for (let d = 0; d < 4; d++) {
        let count = 0;

        // 돌 5개 확인
        for (let k = 0; k < 5; k++) {
          const ni = i + k * di[d];
          const nj = j + k * dj[d];
          // now와 색이 같으면 count + 1, 다르면 다음으로 넘어가기
          if (0 <= ni && ni < 19 && 0 <= nj && nj < 19 && now === arr[ni][nj]) {
            count++;
          } else {
            break;
          }
        }

        if (count === 5) {
          result = now;
          resultNode = [i + 2 * di[d] + 1, j + 2 * dj[d] + 1];
          break;
        }
      }

      if (result !== 0) {
        break;
      }
    }
  }
}

console.log(result);

if (result !== 0) {
  console.log(resultNode.join(" "));
}

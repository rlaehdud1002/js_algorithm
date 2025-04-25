// 팀으로 하는 틱택토 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const board = input.slice(0, 3).map((line) => line.split("").map(Number));

let result = 0;
for (let i = 1; i <= 9; i++) {
  for (let j = i + 1; j <= 9; j++) {
    let win = false;

    // 가로 확인
    for (let k = 0; k < 3; k++) {
      let cnt1 = 0;
      let cnt2 = 0;
      for (let l = 0; l < 3; l++) {
        if (board[k][l] === i) {
          cnt1++;
        } else if (board[k][l] === j) {
          cnt2++;
        }
      }

      if (cnt1 + cnt2 === 3 && cnt1 >= 1 && cnt2 >= 1) {
        win = true;
      }
    }

    // 세로 확인
    for (let k = 0; k < 3; k++) {
      let cnt1 = 0;
      let cnt2 = 0;
      for (let l = 0; l < 3; l++) {
        if (board[l][k] === i) {
          cnt1++;
        } else if (board[l][k] === j) {
          cnt2++;
        }
      }

      if (cnt1 + cnt2 === 3 && cnt1 >= 1 && cnt2 >= 1) {
        win = true;
      }
    }

    // 왼쪽 대각선 확인
    let cnt1 = 0;
    let cnt2 = 0;
    for (let k = 0; k < 3; k++) {
      if (board[k][k] === i) {
        cnt1++;
      } else if (board[k][k] === j) {
        cnt2++;
      }
    }

    if (cnt1 + cnt2 === 3 && cnt1 >= 1 && cnt2 >= 1) {
      win = true;
    }

    // 오른쪽 대각선 확인
    cnt1 = 0;
    cnt2 = 0;
    for (let k = 0; k < 3; k++) {
      if (board[k][2 - k] === i) {
        cnt1++;
      } else if (board[k][2 - k] === j) {
        cnt2++;
      }
    }
    if (cnt1 + cnt2 === 3 && cnt1 >= 1 && cnt2 >= 1) {
      win = true;
    }

    if (win) {
      result++;
    }
  }
}

console.log(result);

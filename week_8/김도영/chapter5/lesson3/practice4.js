// 거울에 레이저 쏘기 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1);
const startNum = Number(input[n + 1]);

function isRange(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

function initialize(num) {
  if (num <= n) {
    return [0, num - 1, 0];
  } else if (num <= 2 * n) {
    return [num - n - 1, n - 1, 1];
  } else if (num <= 3 * n) {
    return [n - 1, n - (num - 2 * n), 2];
  } else {
    return [n - (num - 3 * n), 0, 3];
  }
}

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function move(x, y, nextDir) {
  const nx = x + dx[nextDir];
  const ny = y + dy[nextDir];

  return [nx, ny, nextDir];
}

function simulate(x, y, moveDir) {
  let moveNum = 0;
  while (isRange(x, y)) {
    if (arr[x][y] === "/") {
      [x, y, moveDir] = move(x, y, moveDir ^ 1);
    } else {
      [x, y, moveDir] = move(x, y, 3 - moveDir);
    }

    moveNum += 1;
  }

  return moveNum;
}

let [x, y, moveDir] = initialize(startNum);
const moveNum = simulate(x, y, moveDir);
console.log(moveNum);

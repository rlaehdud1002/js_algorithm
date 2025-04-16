// 가운데에서 시작하여 빙빙 돌기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

// 좌 상 우 하
const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];

const snail = Array.from(new Array(n), () => new Array(n).fill(0));

function isRange(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

let d = 0;
let num = n * n;
let nowX = n - 1,
  nowY = n - 1;
while (num > 0) {
  snail[nowX][nowY] = num;
  num--;

  let nx = nowX + dx[d];
  let ny = nowY + dy[d];

  if (!isRange(nx, ny) || (isRange(nx, ny) && snail[nx][ny])) {
    d = (d + 1) % 4;

    nx = nowX + dx[d];
    ny = nowY + dy[d];
  }

  nowX = nx;
  nowY = ny;
}

console.log(snail.map((value) => value.join(" ")).join("\n"));

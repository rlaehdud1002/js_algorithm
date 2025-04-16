// 빙빙 돌며 숫자 사각형 채우기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

// 우 하 좌 상
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const snail = Array.from(new Array(n), () => new Array(m).fill(0));

function isRange(x, y) {
  return 0 <= x && x < n && 0 <= y && y < m;
}

let d = 0;
let num = 1;
let nowX = 0,
  nowY = 0;
while (num <= n * m) {
  snail[nowX][nowY] = num;
  num++;

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

// 작은 구슬의 이동

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

const dr = [0, 1, -1, 0];
const dc = [1, 0, 0, -1];

const now = [r - 1, c - 1];
let dir;

switch (d) {
  case "U":
    dir = 2;
    break;
  case "D":
    dir = 1;
    break;
  case "R":
    dir = 0;
    break;
  case "L":
    dir = 3;
    break;
}

function isCheck(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

for (let i = 0; i < t; i++) {
  const nr = now[0] + dr[dir];
  const nc = now[1] + dc[dir];

  if (!isCheck(nr, nc)) {
    dir = (3 - dir + 4) % 4;
  } else {
    now[0] = nr;
    now[1] = nc;
  }
}

console.log(now[0] + 1, now[1] + 1);

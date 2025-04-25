// 좌표평면 위의 균형 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const points = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

let minPoint = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    let area1 = 0,
      area2 = 0,
      area3 = 0,
      area4 = 0;

    let both = false;
    for (let [x, y] of points) {
      // 점 위로 선이 그어지면 안됨 -> 4분할이 안됨
      if (x === i || y === j) {
        both = true;
        break;
      }

      if (x < i && y < j) {
        area1++;
      } else if (x > i && y < j) {
        area2++;
      } else if (x < i && y > j) {
        area3++;
      } else {
        area4++;
      }
    }

    if (both) continue;

    minPoint = Math.min(minPoint, Math.max(area1, area2, area3, area4));
  }
}

console.log(minPoint);

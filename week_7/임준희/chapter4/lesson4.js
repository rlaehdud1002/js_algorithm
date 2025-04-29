const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  rectangles.push([x1, y1, x2, y2]);
}
const OFFSET = 100;
const MAX_R = 200;

const arr = Array.from({ length: MAX_R + 1 }, () => Array(MAX_R + 1).fill(0));

for (let i = 0; i < n; i++) {
  let [x1, y1, x2, y2] = rectangles[i];
  x1 += OFFSET;
  x2 += OFFSET;
  y1 += OFFSET;
  y2 += OFFSET;

  for (let j = x1; j < x2; j++) {
    for (let k = y1; k < y2; k++) {
      if (i % 2 === 0) {
        arr[j][k] = 1;
      }
      if (i % 2 !== 0) {
        arr[j][k] = 2;
      }
    }
  }
}

let cnt = 0;

for (let i = 0; i <= MAX_R; i++) {
  for (let j = 0; j <= MAX_R; j++) {
    if (arr[i][j] === 2) {
      cnt++;
    }
  }
}

console.log(cnt);

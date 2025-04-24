// 빙산의 일각 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);

let maxIce = 0;
const maxHeight = Math.max(...h);
const minHeight = Math.min(...h);

for (let height = maxHeight; height >= minHeight; height--) {
  let ice = 0;
  let high = false;

  for (let i = 0; i < n; i++) {
    if (high) {
      if (h[i] <= height) {
        high = false;
      }
    } else {
      if (h[i] > height) {
        high = true;
        ice++;
      }
    }
  }

  maxIce = Math.max(maxIce, ice);
}

console.log(maxIce);

// 수학은 비대면강의입니다

const fs = require("fs");

const [a, b, c, d, e, f] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let x, y;

for (let i = -999; i < 1000; i++) {
  for (let j = -999; j < 1000; j++) {
    if (a * i + b * j === c && d * i + e * j === f) {
      x = i;
      y = j;
    }
  }
}

console.log(x, y);

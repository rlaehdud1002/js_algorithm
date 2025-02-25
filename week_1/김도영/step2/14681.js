// 사분면 고르기

const fs = require("fs");

const [x, y] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (x > 0) {
  if (y > 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else {
  if (y > 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}

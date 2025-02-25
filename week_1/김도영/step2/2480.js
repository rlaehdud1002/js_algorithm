// 주사위 세 개

const fs = require("fs");

const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort();

if (a === b && a === c && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b && a !== c) {
  console.log(1000 + a * 100);
} else if (b === c && a !== b) {
  console.log(1000 + b * 100);
} else {
  console.log(c * 100);
}

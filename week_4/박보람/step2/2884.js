let fs = require("fs");

let [h, m] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (m - 45 < 0) {
  if (h === 0) {
    h = 23;
  } else {
    h -= 1;
  }
  m = 60 + (m - 45);
} else {
  m -= 45;
}

console.log(h, m);

let [n, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.replace("\r", ""));

let cnt = 0;
let papar = Array(100)
  .fill()
  .map(() => Array(100).fill(false));

arr = arr.map((e) => e.split(" ").map(Number));

for (let i = 0; i < parseInt(n); i++) {
  let [x, y] = arr[i];
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      papar[j][k] = true;
    }
  }
}

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (papar[i][j]) cnt++;
  }
}

console.log(cnt);

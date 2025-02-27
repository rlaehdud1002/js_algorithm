const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const scores = input[1].split(" ").map(Number);

const m = Math.max(...scores);
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push((scores[i] / m) * 100);
}

console.log(arr.reduce((acc, cur) => acc + cur, 0) / n);

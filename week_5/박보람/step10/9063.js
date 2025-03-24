let [n, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", ""));

n = Number(n);
arr = arr.map((el) => el.split(" ").map(Number));

let x = [];
let y = [];
for (line of arr) {
  x.push(line[0]);
  y.push(line[1]);
}

console.log(
  Math.abs(
    (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
  )
);

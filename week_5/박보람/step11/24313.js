let [a, c, n] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let [a1, a0] = a.split(" ").map(Number);
Number(c);
Number(n);

if (a0 / (c - a1) < n && c - a1 >= 0) {
  console.log(1);
} else {
  console.log(0);
}

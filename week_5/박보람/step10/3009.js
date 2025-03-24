let [...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let xcount = [];
let ycount = [];
let x;
let y;

for (num of arr) {
  xcount.push(num[0]);
  ycount.push(num[1]);
}

xcount.sort();
ycount.sort();
x = xcount[0] === xcount[1] ? xcount[2] : xcount[0];
y = ycount[0] === ycount[1] ? ycount[2] : ycount[0];

console.log(x, y);

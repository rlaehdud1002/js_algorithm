// X 달리기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let x = Number(input[0]);

function sum(n) {
  return (n * (n + 1)) / 2;
}

let now = 1;
let v = 1;
let second = 1;

while (now < x) {
  if (sum(v + 1) <= x - now) {
    v++;
    now += v;
    second++;
  } else if (sum(v) <= x - now) {
    now += v;
    second++;
  } else {
    v--;
    now += v;
    second++;
  }
}

console.log(second);

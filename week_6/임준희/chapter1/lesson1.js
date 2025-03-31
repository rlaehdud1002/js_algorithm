// 최소공배수 구하기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

function lcm(a, b) {
  while (b) {
    const tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}

console.log((n * m) / lcm(n, m));

// 네 번째 점

const fs = require("fs");

const inputArr = fs.readFileSync(0).toString().trim().split("\n");

let x = 0;
let y = 0;

for (let input of inputArr) {
  const [w, h] = input.split(" ").map(Number);

  x ^= w;
  y ^= h;
}

console.log(x, y);

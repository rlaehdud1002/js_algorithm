// 대지

const fs = require("fs");

const [N, ...inputArr] = fs.readFileSync(0).toString().trim().split("\n");

let xArr = [];
let yArr = [];

for (let input of inputArr) {
  const [a, b] = input.split(" ").map(Number);

  xArr.push(a);
  yArr.push(b);
}

const minX = Math.min(...xArr);
const maxX = Math.max(...xArr);
const minY = Math.min(...yArr);
const maxY = Math.max(...yArr);

console.log((maxX - minX) * (maxY - minY));

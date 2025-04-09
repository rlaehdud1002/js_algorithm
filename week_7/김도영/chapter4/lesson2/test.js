// 진수 to 진수

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
const n = input[1];

let numberTen = 0;
let idx = n.length - 1;
for (let num of n) {
  numberTen += Number(num) * a ** idx;
  idx--;
}

let result = new Array();
while (numberTen >= b) {
  result.push(numberTen % b);
  numberTen = Math.floor(numberTen / b);
}

result.push(numberTen);

console.log(result.reverse().join(""));

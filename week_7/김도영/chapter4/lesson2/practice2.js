// 십진수와 이진수 2

const fs = require("fs");

const binaryInput = fs.readFileSync(0).toString().trim().split("");

let numberTen = 0;
let idx = binaryInput.length - 1;
for (let num of binaryInput) {
  numberTen += num * 2 ** idx;
  idx--;
}

numberTen *= 17;

let result = new Array();
while (numberTen >= 2) {
  result.push(numberTen % 2);
  numberTen = Math.floor(numberTen / 2);
}

result.push(numberTen);

console.log(result.reverse().join(""));

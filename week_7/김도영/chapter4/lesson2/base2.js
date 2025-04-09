// 십진수로 변환하기

const fs = require("fs");

const binaryStr = fs.readFileSync(0).toString().trim();

let result = 0;
let idx = binaryStr.length - 1;
for (let num of binaryStr) {
  result += num * 2 ** idx;
  idx--;
}

console.log(result);

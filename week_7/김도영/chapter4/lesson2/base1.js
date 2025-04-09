// 2진수로 변환하기

const fs = require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

const result = new Array();
while (n > 1) {
  result.push(n % 2);
  n = Math.floor(n / 2);
}

result.push(n);

console.log(result.reverse().join(""));

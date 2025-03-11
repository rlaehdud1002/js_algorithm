// 분해합

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

let result = 0

for (let number = 1; number <= N; number++) {
  const numberLst = number.toString().split("").map(Number);

  let sum = numberLst.reduce((prev, cur) => prev + cur) + number;

  if (sum === N) {
    result = number
    break;
  }
}

console.log(result)
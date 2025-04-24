// 흥미로운 숫자 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [x, y] = input[0].split(" ").map(Number);

let result = 0;
for (let num = x; num <= y; num++) {
  const numToString = num.toString();
  const length = numToString.length;
  const checkArr = new Array(10).fill(0);
  for (let str of numToString) {
    checkArr[Number(str)] += 1;
  }

  if (checkArr.includes(length - 1)) result++;
}

console.log(result);

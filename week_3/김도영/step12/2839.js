// 설탕 배달

const fs = require("fs");

let N = Number(fs.readFileSync(0).toString().trim());

let count = Math.floor(N / 5);
N -= count * 5;

while (count >= 0) {
  if (N % 3 === 0) {
    count += Math.floor(N / 3);
    break;
  }

  N += 5;
  count--;
}

count >= 0 ? console.log(count) : console.log(-1);

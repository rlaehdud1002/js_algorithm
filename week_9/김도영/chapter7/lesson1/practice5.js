// 개발자의 순위

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [k, n] = input[0].split(" ").map(Number);
const arr = input.slice(1, k + 1).map((line) => line.split(" ").map(Number));

let result = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j) continue;

    let check = true;
    for (let rank of arr) {
      const indexI = rank.indexOf(i);
      const indexJ = rank.indexOf(j);

      if (indexI >= indexJ) check = false;
    }

    if (check) result++;
  }
}

console.log(result);

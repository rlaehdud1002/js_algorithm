// 재귀함수를 이용한 3N + 1 수열

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;
function toOne(num) {
  if (num === 1) return;

  cnt++;
  return num % 2 === 0 ? toOne(Math.floor(num / 2)) : toOne(num * 3 + 1);
}

toOne(n);
console.log(cnt);

// 1이 되는 순간까지

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;
function toOne(num) {
  if (num === 1) return;

  cnt++;

  num % 2 === 0 ? toOne(Math.floor(num / 2)) : toOne(Math.floor(num / 3));
}

toOne(n);
console.log(cnt);

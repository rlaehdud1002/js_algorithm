// 합

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

let total = 0;

for (let i = 1; i < n + 1; i++) {
  total += i;
}

console.log(total);

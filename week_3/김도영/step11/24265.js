// 알고리즘 수업 - 알고리즘의 수행 시간 4

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

console.log((n * (n - 1)) / 2);
console.log(2);

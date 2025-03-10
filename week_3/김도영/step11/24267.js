// 알고리즘 수업 - 알고리즘의 수행 시간 5

const fs = require("fs");

const n = BigInt(fs.readFileSync(0).toString().trim());

console.log(`${(n * (n - 1n) * (n - 2n)) / 6n}`);
console.log(3);

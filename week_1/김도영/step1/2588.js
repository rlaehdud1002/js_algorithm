// 곱셈

const fs = require("fs");

const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(Number(a) * Number(b[2]));
console.log(Number(a) * Number(b[1]));
console.log(Number(a) * Number(b[0]));
console.log(Number(a) * Number(b));

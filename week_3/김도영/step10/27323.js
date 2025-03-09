// 직사각형

const fs = require("fs");

const [A, B] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

console.log(A * B)
// 베라의 패션

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

console.log(N * (N - 1));

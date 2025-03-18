// 창문 닫기

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

const count = Math.floor(Math.sqrt(N));

console.log(count);

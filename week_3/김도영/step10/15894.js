// 수학은 체육과목 입니다

const fs = require("fs");

const n = Number(fs.readFileSync(0).toString().trim());

console.log(n * 4);

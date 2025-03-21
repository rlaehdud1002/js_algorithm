// 녹색거탑

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

console.log(2 ** N);

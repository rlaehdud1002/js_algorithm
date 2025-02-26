// 구구단

const fs = require("fs");

let N = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i < 10; i++) {
  console.log(`${N} * ${i} = ${N * i}`)
}
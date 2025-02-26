// 코딩은 체육과목입니다

const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < N / 4; i++) {
  process.stdout.write("long ");
}

process.stdout.write("int");

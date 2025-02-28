// 그대로 출력하기

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

for (let word of input) {
  console.log(word);
}

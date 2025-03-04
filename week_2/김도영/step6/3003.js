// 킹, 퀸, 룩, 비숍, 나이트, 폰

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

// 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개
let chessArr = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < 6; i++) {
  chessArr[i] -= input[i];
}

console.log(chessArr.join(" "));

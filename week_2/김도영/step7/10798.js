// 세로읽기

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const board = input.map((arr) => arr.padEnd(15, " "));

let result = "";

for (let j = 0; j < 15; j++) {
  for (let i = 0; i < 5; i++) {
    result += board[i][j];
  }
}

console.log(result.replaceAll(" ", ""));

// 단어의 개수

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const wordArr = input === "" ? [] : input.split(" ");

console.log(wordArr.length);

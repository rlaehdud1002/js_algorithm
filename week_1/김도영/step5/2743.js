// 단어 길이 재기

const fs = require("fs");

const word = fs.readFileSync(0).toString().trim();

console.log(word.length);

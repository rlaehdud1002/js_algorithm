// 단어 정렬

const fs = require("fs");

const [n, ...words] = fs.readFileSync(0).toString().trim().split("\n");

words.sort();
console.log(words.join("\n"));

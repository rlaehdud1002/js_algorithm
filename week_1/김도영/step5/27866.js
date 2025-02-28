// 문자열

const fs = require("fs");

const [word, idx] = fs.readFileSync(0).toString().trim().split("\n");

console.log(word[idx - 1]);

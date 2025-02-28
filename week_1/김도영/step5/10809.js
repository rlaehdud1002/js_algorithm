// 알파벳 찾기

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetCheck = new Array();

for (let i = 0; i < 26; i++) {
  alphabetCheck.push(input.indexOf(alphabet[i]));
}

console.log(alphabetCheck.join(" "));

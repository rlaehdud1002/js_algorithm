// 크로아티아 알파벳

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let replaceWord = input;

for (alpha of alphabet) {
  replaceWord = replaceWord.replaceAll(alpha, "a");
}

console.log(replaceWord.length);

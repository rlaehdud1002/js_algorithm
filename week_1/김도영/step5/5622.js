// 다이얼

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let total = 0;

for (let word of input) {
  if (alphabet.slice(0, 3).includes(word)) {
    total += 3;
  } else if (alphabet.slice(3, 6).includes(word)) {
    total += 4;
  } else if (alphabet.slice(6, 9).includes(word)) {
    total += 5;
  } else if (alphabet.slice(9, 12).includes(word)) {
    total += 6;
  } else if (alphabet.slice(12, 15).includes(word)) {
    total += 7;
  } else if (alphabet.slice(15, 19).includes(word)) {
    total += 8;
  } else if (alphabet.slice(19, 22).includes(word)) {
    total += 9;
  } else {
    total += 10;
  }
}

console.log(total);

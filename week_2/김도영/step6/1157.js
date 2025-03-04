// 단어 공부

const fs = require("fs");

const word = fs.readFileSync(0).toString().trim().toUpperCase();

const charArr = new Array(26).fill(0);

for (char of word) {
  charArr[char.charCodeAt() - 65] += 1;
}

let max = charArr[0];
let maxCount = 0;
let maxIndex = 0;

for (let i = 0; i < 26; i++) {
  const count = charArr[i];

  if (count === max) {
    maxCount += 1;
  }

  if (count > max) {
    max = count;
    maxCount = 1;
    maxIndex = i;
  }
}

if (maxCount > 1) {
  console.log("?");
} else {
  console.log(String.fromCharCode(maxIndex + 65));
}

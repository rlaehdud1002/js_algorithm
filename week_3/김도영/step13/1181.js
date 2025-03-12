// 단어 정렬

const fs = require("fs");

const [N, ...wordInput] = fs.readFileSync(0).toString().trim().split("\n");

const word = [...new Set(wordInput)];

word.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  return a.localeCompare(b);
});

console.log(word.join("\n"));

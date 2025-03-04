// 그룹 단어 체커

const fs = require("fs");

const [N, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

let total = 0;
for (let word of arr) {
  let isGroup = true;
  const check = new Set();

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i + 1]) {
      if (check.has(word[i])) {
        isGroup = false;
        break;
      }

      check.add(word[i]);
    }
  }

  if (isGroup) {
    total++;
  }
}

console.log(total);

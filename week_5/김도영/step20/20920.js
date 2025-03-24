// 영단어 암기는 괴로워

const fs = require("fs");

const [input, ...wordArr] = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input.split(" ").map(Number);

let countWord = {};

for (let word of wordArr) {
  countWord[word] = (countWord[word] ?? 0) + 1;
}

let result = Object.keys(countWord)
  .filter((value) => value.length >= M)
  .sort((a, b) => {
    // 빈도수가 같을 때
    if (countWord[a] === countWord[b]) {
      // 길이가 같을 때
      if (a.length === b.length) {
        return a.localeCompare(b);
      }

      return b.length - a.length;
    }

    return countWord[b] - countWord[a];
  });

console.log(result.join("\n"));

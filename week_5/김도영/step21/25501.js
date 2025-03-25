// 재귀의 귀재

const fs = require("fs");

const [T, ...input] = fs.readFileSync(0).toString().trim().split("\n");

let count;
function isPalindrome(word, l, r) {
  count++;
  if (l >= r) {
    return 1;
  } else if (word[l] !== word[r]) {
    return 0;
  } else {
    return isPalindrome(word, l + 1, r - 1);
  }
}

for (let word of input) {
  count = 0;
  const result = isPalindrome(word, 0, word.length - 1);

  console.log(result, count);
}

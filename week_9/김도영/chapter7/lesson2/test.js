// 팰린드롬 수 찾기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [x, y] = input[0].split(" ").map(Number);

let result = 0;
for (let i = x; i <= y; i++) {
  const numToString = i.toString();
  const length = numToString.length;

  let palindrome = true;
  for (let j = 0; j < length; j++) {
    if (numToString[j] !== numToString[length - j - 1]) {
      palindrome = false;
      break;
    }
  }

  if (palindrome) result++;
}

console.log(result);

// 칸토어 집합

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

function cantor(string, level) {
  if (level === 0) {
    return string;
  }

  const length = string.length;
  const cutLength = Math.floor(length / 3);

  let result =
    string.substring(0, cutLength) +
    "-".repeat(cutLength) +
    string.substring(2 * cutLength);

  const left = cantor(result.substring(0, cutLength), level - 1);
  const right = cantor(result.substring(2 * cutLength), level - 1);

  return left + " ".repeat(cutLength) + right;
}

for (let num of input) {
  const initialString = "-".repeat(3 ** num);

  console.log(cantor(initialString, num));
}

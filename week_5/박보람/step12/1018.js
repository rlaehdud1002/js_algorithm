let [input, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", ""));

let [row, col] = input.split(" ").map(Number);
arr = arr.map((el) => el.split(""));

const blackChess = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const whiteChess = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

let result = [];

function white(i, j) {
  let cnt = 0;
  for (let k = i; k < i + 8; k++) {
    for (let l = j; l < j + 8; l++) {
      if (arr[k][l] !== whiteChess[k - i][l - j]) cnt++;
    }
  }
  return cnt;
}

function black(i, j) {
  let cnt = 0;
  for (let k = i; k < i + 8; k++) {
    for (let l = j; l < j + 8; l++) {
      if (arr[k][l] !== blackChess[k - i][l - j]) cnt++;
    }
  }
  return cnt;
}

for (let i = 0; i < row - 7; i++) {
  for (let j = 0; j < col - 7; j++) {
    result.push(white(i, j));
    result.push(black(i, j));
  }
}

console.log(Math.min(...result));

// A, B, C, D 찾기 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const numbers = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

for (let i = 1; i <= 40; i++) {
  for (let j = i; j <= 40; j++) {
    for (let k = j; k <= 40; k++) {
      for (let l = k; l <= 40; l++) {
        let newNumbers = new Array();

        newNumbers.push(
          i,
          j,
          k,
          l,
          i + j,
          i + k,
          i + l,
          j + k,
          j + l,
          k + l,
          i + j + k,
          i + j + l,
          i + k + l,
          j + k + l,
          i + j + k + l
        );

        newNumbers.sort((a, b) => a - b);

        let check = true;
        for (let x = 0; x < 15; x++) {
          if (numbers[x] !== newNumbers[x]) check = false;
        }

        if (check) console.log(i, j, k, l);
      }
    }
  }
}

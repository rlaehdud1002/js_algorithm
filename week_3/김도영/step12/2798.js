// 블랙잭

const fs = require("fs");

const [input, cardInput] = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input.split(" ").map(Number);

const cards = cardInput.split(" ").map(Number);

let sum = 0;
let result = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = cards[i] + cards[j] + cards[k];

      if (sum > result && sum <= M) {
        result = sum;
      }
    }
  }
}

console.log(result);

// X보다 작은 수

const fs = require("fs");

const [line1, line2] = fs.readFileSync(0).toString().trim().split("\n");

const [N, X] = line1.split(" ").map(Number);

const arr = line2.split(" ").map(Number);

let answer = [];

for (let i = 0; i < N; i++) {
  if (arr[i] < X) {
    answer.push(arr[i]);
  }
}

console.log(answer.join(" "));

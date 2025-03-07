// 소수 찾기

const fs = require("fs");

const [N, inputArr] = fs.readFileSync(0).toString().trim().split("\n");
const input = inputArr.split(" ").map(Number);

let answer = 0;
for (let a = 0; a < N; a++) {
  const num = input[a];
  let cnt = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      cnt++;
    }

    if (cnt >= 3) {
      break;
    }
  }

  if (cnt === 2) {
    answer++;
  }
}

console.log(answer);

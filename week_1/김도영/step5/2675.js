// 문자열 반복

const fs = require("fs");

const [N, ...input] = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < N; i++) {
  const [num, word] = input[i].split(" ");

  let answer = "";

  for (let str of word) {
    answer += str.repeat(num);
  }

  console.log(answer)
}

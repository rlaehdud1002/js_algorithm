// 소수 구하기

const fs = require("fs");

const [M, N] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const primeArr = new Array(N + 1).fill(1).fill(0, 0, 2);

for (let i = 2; i <= Math.sqrt(N); i++) {
  if (primeArr[i]) {
    for (let j = i * i; j <= N; j += i) {
      primeArr[j] = 0;
    }
  }
}

let answer = "";
for (let num = M; num < N + 1; num++) {
  if (primeArr[num]) {
    answer += num + "\n";
  }
}

console.log(answer);

// 베르트랑 공준

const fs = require("fs");

const inputArr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const MAX = 2 * Math.max(...inputArr);
const isPrime = new Array(MAX).fill(1).fill(0, 0, 2);

for (let i = 2; i <= MAX; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = 0;
    }
  }
}

let answer = "";
for (let num of inputArr) {
  if (num === 0) {
    break;
  }

  let count = 0;
  for (let i = num + 1; i <= 2 * num; i++) {
    if (isPrime[i]) {
      count++;
    }
  }

  answer += count + "\n";
}

console.log(answer);

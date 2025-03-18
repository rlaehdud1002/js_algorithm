// 골드바흐 파티션

const fs = require("fs");

const [T, ...inputArr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const MAX = 2 * Math.max(...inputArr);
const isPrime = new Array(MAX).fill(1).fill(0, 0, 2);
let prime = [];

for (let i = 2; i <= MAX; i++) {
  if (isPrime[i]) {
    prime.push(i);

    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = 0;
    }
  }
}

let answer = "";
for (let num of inputArr) {
  let count = 0;

  for (let i = 2; i <= num / 2; i++) {
    if (isPrime[i] && isPrime[num - i]) {
      count++;
    }
  }

  answer += count + "\n";
}

console.log(answer.trim());

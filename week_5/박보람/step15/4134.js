let [n, ...arr] = require("fs")
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split("\n");

n = Number(n);
arr = arr.map(Number);

// 소수 판별 함수
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// 각 숫자에 대해 num 이상인 가장 작은 소수를 찾음
let result = arr.map((num) => {
  for (let i = num; ; i++) {
    if (isPrime(i)) return i;
  }
});

console.log(result.join("\n"));

const [n, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

let res = "";

for (let i = 0; i < n; i++) {
  let temp = arr[i];

  while (!isPrime(temp)) {
    temp++;
  }
  res += temp + "\n";
}

console.log(res);

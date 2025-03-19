const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.pop();
let res = "";

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

for (let i = 0; i < input.length; i++) {
  let cnt = 0;
  for (let j = input[i] + 1; j <= 2 * input[i]; j++) {
    if (isPrime(j)) {
      cnt++;
    }
  }
  res += cnt + "\n";
}

console.log(res);

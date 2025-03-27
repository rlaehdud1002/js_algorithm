let arr = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

for (i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    break;
  }

  let count = 0;

  for (let j = arr[i] + 1; j <= 2 * arr[i]; j++) {
    if (isPrime(j)) {
      count++;
    }
  }

  console.log(count);
}

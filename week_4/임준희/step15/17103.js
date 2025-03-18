const [t, ...arr] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function eratos(num) {
  const isPrime = new Array(num + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= num; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }
  return primes;
}

function partitions(num) {
  const primes = eratos(num);
  const primeSet = new Set(primes);

  let cnt = 0;
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] > num / 2) break;
    if (primeSet.has(num - primes[i])) cnt++;
  }
  return cnt;
}

let res = "";

for (let i = 0; i < t; i++) {
  res += partitions(arr[i]) + "\n";
}

console.log(res);

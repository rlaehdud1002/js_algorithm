let n = parseInt(require("fs").readFileSync("input.txt").toString().trim());

let prime = [];

for (let i = 2; i <= n; i++) {
  while (n % i === 0) {
    prime.push(i);
    n /= i;
  }

  if (n === 1) break;
}

console.log(prime.join("\n"));

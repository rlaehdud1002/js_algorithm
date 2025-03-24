let [n, m] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let prime = [];
for (let i = n; i <= m; i++) {
  if (i < 2) continue;

  let flag = 1;
  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      flag = 0;
      break;
    }
  }

  if (flag === 1) {
    prime.push(i);
  }
}

if (prime.length == 0) {
  console.log(-1);
} else {
  console.log(prime.reduce((acc, cur) => acc + cur, 0));
  console.log(Math.min(...prime));
}

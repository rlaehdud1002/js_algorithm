let n = require("fs").readFileSync("input.txt").toString().trim();

parseInt(n);
let result = 0;

for (let i = 1; i <= n; i++) {
  result += i;
}

console.log(result);

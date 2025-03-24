let n = require("fs").readFileSync("input.txt").toString().trim();
n = BigInt(n);

console.log(`${n * n * n}`);
console.log(3);

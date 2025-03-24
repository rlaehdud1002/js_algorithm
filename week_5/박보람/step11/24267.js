let n = require("fs").readFileSync("input.txt").toString().trim();

const result = (BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6);

console.log(`${result}`);
console.log(3);

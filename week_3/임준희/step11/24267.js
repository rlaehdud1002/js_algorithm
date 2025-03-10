const n = require("fs").readFileSync(0).toString().trim();

const res = (BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6);

console.log(`${res}\n3`);

// 나머지

const fs = require("fs");

let [a, b, c] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);

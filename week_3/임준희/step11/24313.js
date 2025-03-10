const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const c = parseInt(input[1]);
const d = parseInt(input[2]);

console.log(b <= (c - a) * d && c >= a ? 1 : 0);

const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const a = input[1].split(" ");
const b = input[2].split(" ");
const res = new Set([...a, ...b]);
console.log(res.size * 2 - n - m);

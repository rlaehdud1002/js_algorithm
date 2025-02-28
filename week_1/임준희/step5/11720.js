const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = parseInt(input[0]);
const arr = input[1].split("").map(Number);

const res = arr.reduce((acc, cur) => acc + cur, 0);

console.log(res);

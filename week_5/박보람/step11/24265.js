let n = require("fs").readFileSync("input.txt").toString().trim();
n = Number(n);
n = (n * (n - 1)) / 2;
console.log(n);
console.log(2);

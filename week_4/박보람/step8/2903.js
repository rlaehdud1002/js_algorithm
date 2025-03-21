let n = require("fs").readFileSync("input.txt").toString().trim();
let result = (2 ** n + 1) ** 2;

console.log(result);

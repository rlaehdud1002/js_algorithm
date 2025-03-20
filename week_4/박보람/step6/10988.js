let input = require("fs").readFileSync("input.txt").toString().trim().split("");
let result = input.join("");
let temp = input.reverse().join("");

console.log(temp === result ? 1 : 0);

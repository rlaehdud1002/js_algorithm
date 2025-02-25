// 1998년생인 내가 태국에서는 2541년생?!

const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(Number(input) - 543);

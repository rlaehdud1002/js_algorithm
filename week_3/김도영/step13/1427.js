// 소트인사이드

const fs = require("fs");

const number = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((a, b) => b - a);

console.log(number.join(""));

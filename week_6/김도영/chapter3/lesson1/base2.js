// 문자열 정렬

const fs = require("fs");

const s = fs.readFileSync(0).toString().trim();

const arr = [...s];
arr.sort();
console.log(arr.join(""));

// 순서를 바꾸었을 때 같은 단어인지 판별하기

const fs = require("fs");

const [str1, str2] = fs.readFileSync(0).toString().trim().split("\n");

const sortedStr1 = [...str1].sort().join("");
const sortedStr2 = [...str2].sort().join("");

console.log(sortedStr1 === sortedStr2 ? "Yes" : "No");

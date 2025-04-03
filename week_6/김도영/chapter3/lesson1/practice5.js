// k번째로 신기한 문자열

const fs = require("fs");

const [input, ...words] = fs.readFileSync(0).toString().trim().split("\n");
const [n, k, t] = input.split(" ");

const filterWords = words.filter((value) => value.startsWith(t)).sort();

console.log(filterWords[k - 1]);

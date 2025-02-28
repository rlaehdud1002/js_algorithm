// 아스키 코드

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

console.log(input.charCodeAt());

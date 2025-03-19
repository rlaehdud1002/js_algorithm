let n = require("fs").readFileSync("input.txt").toString().trim();

let cnt = Math.floor(parseInt(n) / 4);

let result = [];

for (i = 0; i < cnt; i++) {
  result.push("long");
}
result.push("int");
console.log(result.join(" "));

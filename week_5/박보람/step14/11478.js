let s = require("fs").readFileSync("input.txt", "utf8").toString().trim();

let result = new Set();
for (let i = 0; i < s.length; i++) {
  for (let j = i; j < s.length; j++) {
    result.add(s.substring(i, j + 1));
  }
}

console.log(result.size);

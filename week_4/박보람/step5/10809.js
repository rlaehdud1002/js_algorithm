let s = require("fs").readFileSync("input.txt").toString().trim();

let result = Array(26).fill(-1);

for (let i = 0; i < s.length; i++) {
  let idx = s.charCodeAt(i) - 97;
  if (result[idx] === -1) {
    result[idx] = i;
  }
}

console.log(result.join(" "));

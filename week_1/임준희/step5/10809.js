const s = require("fs").readFileSync(0).toString().trim();

let res = "";
const alpha = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < alpha.length; i++) {
  res += s.indexOf(alpha[i]) + " ";
}

console.log(res);

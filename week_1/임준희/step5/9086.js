const input = require("fs").readFileSync(0).toString().trim().split("\n");

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
  const s = input[i];
  console.log(s[0] + s[s.length - 1]);
}

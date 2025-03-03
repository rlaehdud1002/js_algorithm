let s = require("fs").readFileSync(0).toString().trim();

const alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const a of alpha) {
  s = s.split(a).join("*");
}

console.log(s.length);

let input = require("fs").readFileSync("input.txt").toString().trim();

let cro = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i = 0; i < cro.length; i++) {
  input = input.split(cro[i]).join("a");
}

console.log(input.length);

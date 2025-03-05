const input = require("fs").readFileSync(0).toString().trim().split("\n");

let res = "";

for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j][i]) {
      res += input[j][i];
    }
  }
}

console.log(res);

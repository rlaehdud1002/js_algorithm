let input = require("fs").readFileSync(0).toString().trim().split(" ");

for (let i = 0; i < 2; i++) {
  input[i] = parseInt(input[i].split("").reverse().join(""));
}

console.log(Math.max(...input));

let [a, b] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

a = parseInt(a.split("").reverse().join(""));
b = parseInt(b.split("").reverse().join(""));

if (a > b) console.log(a);
else console.log(b);

const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const types = input[1].split(" ").map(Number);
const initialValues = input[2].split(" ").map(Number);
const m = parseInt(input[3]);
const insertValues = input[4].split(" ").map(Number);

const res = [];

for (let i = 0; i < n; i++) {
  if (types[i] === 0) {
    res.push(initialValues[i]);
  }
}
console.log(
  res.reverse().concat(insertValues).slice(0, m).map(String).join(" ")
);

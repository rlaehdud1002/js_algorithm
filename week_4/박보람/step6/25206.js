const fs = require("fs");

const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", "").split(" "));

const grade = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};
let totalScore = 0;
let totalCredit = 0;

for (let [i, j, k] of input) {
  if (k === "P") {
    continue;
  }

  totalScore += grade[k] * j;
  totalCredit += parseInt(j);
}
console.log((totalScore / totalCredit).toFixed(6));

// 너의 평점은

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

let total = 0;
let count = 0;
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

for (let study of input) {
  const studyInfo = study.split(" ");

  if (studyInfo[2] === "P") {
    continue;
  }

  total += studyInfo[1] * grade[studyInfo[2]];
  count += +studyInfo[1];
}

if (count === 0) {
  console.log(0);
} else {
  console.log(total / count);
}

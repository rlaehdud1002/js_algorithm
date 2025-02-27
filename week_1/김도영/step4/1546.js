// 평균

const fs = require("fs");

const [N, arr] = fs.readFileSync(0).toString().trim().split("\n");

const gradeArr = arr.split(" ").map(Number);

let maxGrade = gradeArr[0];

gradeArr.forEach((value) => {
  if (value > maxGrade) {
    maxGrade = value;
  }
});

let total = 0;

gradeArr.forEach((value) => (total += (value / maxGrade) * 100));

console.log(total / N);

// 시험 성적

const fs = require("fs");

const grade = Number(fs.readFileSync("/dev/stdin").toString().trim());

if (grade >= 90 && grade <= 100) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// 국영수 순이지

const fs = require("fs");
const { maxHeaderSize } = require("http");

const [n, ...rawStudentData] = fs.readFileSync(0).toString().trim().split("\n");

class Score {
  constructor(name, korean, english, math) {
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }
}

function cmp(a, b) {
  if (a.korean === b.korean) {
    if (a.english === b.english) {
      return b.math - a.math;
    }

    return b.english - a.english;
  }

  return b.korean - a.korean;
}

let studentInfo = new Array();
for (let info of rawStudentData) {
  const [name, korean, english, math] = info.split(" ");

  studentInfo.push(new Score(name, korean, english, math));
}

studentInfo.sort(cmp);

const result = new Array();
for (let student of studentInfo) {
  result.push(
    `${student.name} ${student.korean} ${student.english} ${student.math}`
  );
}

console.log(result.join("\n"));

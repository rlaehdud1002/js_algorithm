// 총점 비교

const fs = require("fs");

const [n, ...studentData] = fs.readFileSync(0).toString().trim().split("\n");

class Score {
  constructor(name, score1, score2, score3) {
    this.name = name;
    this.score1 = score1;
    this.score2 = score2;
    this.score3 = score3;
  }
}

const studentInfo = new Array();
for (let info of studentData) {
  const [name, score1, score2, score3] = info.split(" ");

  studentInfo.push(
    new Score(name, Number(score1), Number(score2), Number(score3))
  );
}

studentInfo.sort(
  (a, b) => a.score1 + a.score2 + a.score3 - (b.score1 + b.score2 + b.score3)
);

const result = new Array();
for (let student of studentInfo) {
  result.push(
    `${student.name} ${student.score1} ${student.score2} ${student.score3}`
  );
}

console.log(result.join("\n"));

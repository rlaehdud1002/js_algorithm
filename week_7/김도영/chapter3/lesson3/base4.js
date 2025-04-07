// 줄 세우기

const fs = require("fs");

const [n, ...students] = fs.readFileSync(0).toString().trim().split("\n");

class Student {
  constructor(h, w, idx) {
    this.h = h;
    this.w = w;
    this.idx = idx;
  }
}

function cmp(a, b) {
  if (a.h === b.h) {
    if (a.w === b.w) {
      return a.idx - b.idx;
    }

    return b.w - a.w;
  }

  return b.h - a.h;
}

let studentInfo = new Array();
for (let i = 1; i <= n; i++) {
  const [h, w] = students[i - 1].split(" ").map(Number);

  studentInfo.push(new Student(h, w, i));
}

studentInfo.sort(cmp);

const result = new Array();
for (let student of studentInfo) {
  result.push(`${student.h} ${student.w} ${student.idx}`);
}

console.log(result.join("\n"));

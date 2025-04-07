// 키를 기준으로 정렬

const fs = require("fs");

const [n, ...studentInput] = fs.readFileSync(0).toString().trim().split("\n");

class Student {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}

let studentInfo = new Array();
for (let student of studentInput) {
  const [name, height, weight] = student.split(" ");

  studentInfo.push(new Student(name, Number(height), Number(weight)));
}

studentInfo.sort((a, b) => a.height - b.height);

const result = new Array();
for (let student of studentInfo) {
  result.push(`${student.name} ${student.height} ${student.weight}`);
}

console.log(result.join("\n"));

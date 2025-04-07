// 개인정보

const fs = require("fs");

const infoInput = fs.readFileSync(0).toString().trim().split("\n");

class Student {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}

const studentInfo = new Array();
for (let info of infoInput) {
  const [name, height, weight] = info.split(" ");

  studentInfo.push(new Student(name, Number(height), Number(weight)));
}

studentInfo.sort((a, b) => a.name.localeCompare(b.name));

let result = new Array();

result.push("name");
for (let student of studentInfo) {
  result.push(`${student.name} ${student.height} ${student.weight.toFixed(1)}`);
}

result.push("");

result.push("height");
studentInfo.sort((a, b) => b.height - a.height);
for (let student of studentInfo) {
  result.push(`${student.name} ${student.height} ${student.weight.toFixed(1)}`);
}

console.log(result.join("\n"));

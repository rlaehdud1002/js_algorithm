// 키, 몸무게를 기준으로 정렬

const fs = require("fs");

const [n, ...records] = fs.readFileSync(0).toString().trim().split("\n");

class Info {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
}

let studentInfo = new Array();
for (let record of records) {
  const [name, height, weight] = record.split(" ");

  studentInfo.push(new Info(name, Number(height), Number(weight)));
}

studentInfo.sort((a, b) => {
  if (a.height === b.height) {
    return b.weight - a.weight;
  }

  return a.height - b.height;
});

let result = new Array();
for (let student of studentInfo) {
  result.push(`${student.name} ${student.height} ${student.weight}`);
}

console.log(result.join("\n"));

// 줄 세우기 2

const fs = require("fs");

const [n, ...studentInputs] = fs.readFileSync(0).toString().trim().split("\n");

class Student {
  constructor(height, weight, idx) {
    this.height = height;
    this.weight = weight;
    this.idx = idx;
  }
}

let studentInfo = new Array();
for (let i = 0; i < n; i++) {
  const [height, weight] = studentInputs[i].split(" ").map(Number);

  studentInfo.push(new Student(height, weight, i + 1));
}

studentInfo.sort((a, b) => {
  if (a.height === b.height) {
    return b.weight - a.weight;
  }

  return a.height - b.height;
});

let result = new Array();
for (let info of studentInfo) {
  result.push(`${info.height} ${info.weight} ${info.idx}`);
}

console.log(result.join("\n"));

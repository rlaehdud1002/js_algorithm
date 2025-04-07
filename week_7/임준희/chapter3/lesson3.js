const fs = require("fs");

const [n, ...studentInputs] = fs.readFileSync(0).toString().trim().split("\n");

class Student {
  constructor(height, weight, number) {
    this.height = height;
    this.weight = weight;
    this.number = number;
  }
}

const students = [];

for (let i = 0; i < n; i++) {
  const [height, weight] = studentInputs[i].split(" ").map(Number);
  students.push(new Student(height, weight, i + 1));
}

students.sort((a, b) => {
  if (a.height !== b.height) return a.height - b.height;
  if (a.weight !== b.weight) return b.weight - a.weight;
});

students.forEach((student) => {
  console.log(student.height, student.weight, student.number);
});

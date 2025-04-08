// 그 요일은

const fs = require("fs");

const [input, A] = fs.readFileSync(0).toString().trim().split("\n");
const [m1, d1, m2, d2] = input.split(" ").map(Number);

const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let day1 = d1;
for (let month = 1; month < m1; month++) {
  day1 += num_of_days[month];
}

let day2 = d2;
for (let month = 1; month < m2; month++) {
  day2 += num_of_days[month];
}

let diff = day2 - day1;

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let count = 0;
for (let i = 0; i <= diff; i++) {
  let idx = i % 7;
  if (days[idx] === A) {
    count++;
  }
}

console.log(count);

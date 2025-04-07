const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [m1, d1, m2, d2] = input[0].split(" ").map(Number);
const A = input[1];

const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function numOfDays(m, d) {
  let totalDays = d;

  for (let i = 1; i < m; i++) {
    totalDays += days[i];
  }

  return totalDays;
}

const day1 = numOfDays(m1, d1);
const day2 = numOfDays(m2, d2);

const diff = day2 - day1;

let res = Math.floor(diff / 7);

if (diff % 7 >= dayOfWeek.indexOf(A)) {
  res++;
}
console.log(res);

// 그 계절, 그 날

const fs = require("fs");

const [Y, M, D] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function isLeafYear(year) {
  if (year % 4 !== 0) return false;
  if (year % 100 === 0) return false;
  if (year % 400 === 0) return false;

  return true;
}

function checkDay(year, month) {
  if (month === 2) {
    return isLeafYear(year) ? 29 : 28;
  }

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }

  return 31;
}

if (D <= checkDay(Y, M)) {
  if (3 <= M && M < 6) {
    console.log("Spring");
  } else if (6 <= M && M < 9) {
    console.log("Summer");
  } else if (9 <= M && M < 12) {
    console.log("Fall");
  } else {
    console.log("Winter");
  }
} else {
  console.log(-1);
}

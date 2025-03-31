// 그 계절, 그 날

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);

function isLeapYear(y) {
  if (y % 4 !== 0) return false;
  if (y % 100 === 0) return false;
  if (y % 400 === 0) return false;
  return true;
}

function getSeason(m) {
  if (3 <= m && m <= 5) {
    return "Spring";
  } else if (6 <= m && m <= 8) {
    return "Summer";
  } else if (9 <= m && m <= 11) {
    return "Fall";
  } else {
    return "Winter";
  }
}

function lastDayNumber(y, m) {
  if (m === 2) {
    return isLeapYear(y) ? 29 : 28;
  }
  if (m === 4 || m === 6 || m === 9 || m === 11) {
    return 30;
  }

  return 31;
}

function solved(y, m, d) {
  if (d <= lastDayNumber(y, m)) {
    console.log(getSeason(m));
  } else {
    console.log(-1);
  }
}

solved(year, month, day);

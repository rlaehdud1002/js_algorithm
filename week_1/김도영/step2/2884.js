// 알람 시계

const fs = require("fs");

const [h, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let minute = h * 60 + m;

minute -= 45;

if (minute < 0) {
  minute += 60 * 24;
}

const newHour = Math.floor(minute / 60);
const newMinute = minute - newHour * 60;

console.log(newHour, newMinute);

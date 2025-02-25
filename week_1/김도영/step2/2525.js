// 오븐 시계

const fs = require("fs");

const [time, cook] = fs.readFileSync(0).toString().trim().split("\n");

const [h, m] = time.split(" ").map(Number);

let minute = h * 60 + m;

minute += Number(cook);

minute %= 60 * 24;

const newHour = Math.floor(minute / 60);
const newMinute = minute - newHour * 60;

console.log(newHour, newMinute);

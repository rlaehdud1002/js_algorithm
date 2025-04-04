// 폭탄 해제

const fs = require("fs");

const [u_code, l_color, time] = fs.readFileSync(0).toString().trim().split(" ");

class Bomb {
  constructor(code, color, time) {
    this.code = code;
    this.color = color;
    this.time = time;
  }
}

const bombInfo = new Bomb(u_code, l_color, Number(time));

console.log(`code : ${bombInfo.code}`);
console.log(`color : ${bombInfo.color}`);
console.log(`second : ${bombInfo.time}`);

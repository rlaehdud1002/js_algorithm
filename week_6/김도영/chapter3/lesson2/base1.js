// 007

const fs = require("fs");

const [s_code, m_point, time] = fs.readFileSync(0).toString().trim().split(" ");

class Create007 {
  constructor(s_code, m_point, time) {
    this.s_code = s_code;
    this.m_point = m_point;
    this.time = time;
  }
}

const code = new Create007(s_code, m_point, time);

console.log(`secret code : ${code.s_code}`);
console.log(`meeting point : ${code.m_point}`);
console.log(`time : ${code.time}`);

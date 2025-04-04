// Next Level

const fs = require("fs");

const [user_id, level] = fs.readFileSync(0).toString().trim().split(" ");

class Info {
  constructor(id = "codetree", level = 10) {
    this.id = id;
    this.level = level;
  }
}

const firstInfo = new Info();
const inputInfo = new Info(user_id, parseInt(level));

console.log(`user ${firstInfo.id} lv ${firstInfo.level}`);
console.log(`user ${inputInfo.id} lv ${inputInfo.level}`);

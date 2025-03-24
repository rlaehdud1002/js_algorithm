// 인사성 밝은 곰곰이

const fs = require("fs");

const [N, ...chatInfo] = fs.readFileSync(0).toString().trim().split("\n");

const inChat = new Set();
let count = 0;

for (let info of chatInfo) {
  if (info === "ENTER") {
    inChat.clear()
  } else if (!inChat.has(info)) {
    inChat.add(info);
    count++;
  }
}

console.log(count);

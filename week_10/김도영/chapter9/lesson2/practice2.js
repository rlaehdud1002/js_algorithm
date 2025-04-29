// 코딩톡

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, p] = input[0].split(" ").map(Number);
const messages = input.slice(1, 1 + m).map((line) => line.split(" "));

const result = new Array();
if (messages[p - 1][1] !== "0") {
  for (let i = 0; i < n; i++) {
    const person = String.fromCharCode(65 + i);
    let read = false;

    for (let [c, u] of messages) {
      if (Number(u) >= Number(messages[p - 1][1]) && c === person) {
        read = true;
      }
    }

    if (!read) result.push(person);
  }
}

console.log(result.join(" "));

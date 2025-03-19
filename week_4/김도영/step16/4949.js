// 균형잡힌 세상

const fs = require("fs");

const inputArr = fs.readFileSync(0).toString().trim().split("\n");

let answer = [];
loop: for (let word of inputArr) {
  if (word === ".") {
    break;
  }

  let stack = [];

  for (let str of word) {
    if (str === "(" || str === "[") {
      stack.push(str);
    } else if (str === ")" || str === "]") {
      const last = stack.pop();

      if ((str === ")" && last !== "(") || (str === "]" && last !== "[")) {
        answer.push("no");
        continue loop;
      }
    }
  }

  answer.push(stack.length === 0 ? "yes" : "no");
}

console.log(answer.join("\n"));

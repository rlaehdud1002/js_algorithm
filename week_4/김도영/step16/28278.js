// 스택 2

const fs = require("fs");

const [N, ...questionArr] = fs.readFileSync(0).toString().trim().split("\n");

let stack = [];
let answer = [];
for (let question of questionArr) {
  const [step, value] = question.split(" ");
  switch (step) {
    case "1":
      stack.push(parseInt(value));
      break;
    case "2":
      answer.push(stack.length === 0 ? -1 : stack.pop());
      break;
    case "3":
      answer.push(stack.length);
      break;
    case "4":
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case "5":
      answer.push(stack.length !== 0 ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(answer.join("\n"));

// 괄호

const fs = require("fs");

const [T, ...inputArr] = fs.readFileSync(0).toString().trim().split("\n");

let answer = [];
loop: for (let input of inputArr) {
  let stack = [];

  for (let str of input) {
    if (str === "(") {
      stack.push("(");
      continue;
    } else {
      const last = stack.pop();

      if (last !== "(") {
        answer.push("NO");
        continue loop;
      }
    }
  }

  if (stack.length) {
    answer.push("NO");
  } else {
    answer.push("YES");
  }
}

console.log(answer.join("\n"));

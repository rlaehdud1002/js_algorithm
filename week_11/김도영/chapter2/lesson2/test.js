// 정수 명령 처리 5

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1);

const arr = new Array();

for (let command of commands) {
  const [question, num] = command.split(" ");

  switch (question) {
    case "push_back":
      arr.push(Number(num));
      break;
    case "pop_back":
      arr.pop();
      break;
    case "size":
      console.log(arr.length);
      break;
    case "get":
      console.log(arr[Number(num) - 1]);
  }
}
